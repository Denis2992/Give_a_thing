import React, {useContext} from "react";
import {useStyles} from "./styles";
import {Alert, Box, TextField, Typography} from "@mui/material";
import CustomTypography from "../custom_elements/CustomTypography";
import FormButton from "../custom_elements/FormButton";
import {FormGiveThingsContext} from "./FormGiveThings";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

export default function Step4 () {
    const classes = useStyles();
    const {
        street, city,postcode, phoneNumber,
        date, time, attentions,
        handleNextStep, handlePreviousStep
    } = useContext(FormGiveThingsContext);

    const schema = yup.object({
        street: yup
            .string()
            .min(3, "Ulica ma zawierać minimum 3 znaki")
            .required("Ulica  nie może być pusta"),
        city: yup
            .string()
            .min(3, "Miasto ma zawierać minimum 3 znaki")
            .required("Miasto nie może być pusty"),
        postcode: yup
            .string()
            .matches(/^([0-9]{2})(-[0-9]{3})?$/i, "Kod pocztowy ma byc w formacie XX-XXX")
            .required("Kod pocztowy nie może być pusty"),
        phoneNumber: yup
            .string()
            .matches(/^([0-9]{9})?$/i, "Numer ma zawierać 9 liczb")
            .required("Numer nie może być pusty"),
        date: yup
            .string()
            .required("Wybierz date"),
        time: yup
            .string()
            .required("Wybierz godzinę"),
        attentions: yup.string().max(120, "Uwagi nie mogą byc dłuższe niz 120 znaków")
    }).required();

    const {  control, register, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = () => {
        handleNextStep();
    }

    return (
        <Box className={classes.step}>
            <Box>
                <CustomTypography className={classes.stepNumber}>Krok 4/4</CustomTypography>
                <Typography
                    variant="h5"
                    className={classes.head}
                    style={{fontWeight: 600}}
                >
                    Podaj adres oraz termin odbioru rzecz przez kuriera
                </Typography>
            </Box>
            <form className={classes.formStep} onSubmit={handleSubmit(onSubmit)}>
                <Box>
                    <Box style={{display: "flex", justifyContent: "space-between", maxWidth: 800, marginTop: 20, flexWrap: "wrap"}}>
                        <Box style={{width: "100%", maxWidth: 350}}>
                            <Typography className={classes.formHead} style={{fontWeight: 600}}>Adres odbioru:</Typography>
                            <Box className={classes.step4SingleFormBox}>
                                <CustomTypography style={{marginRight: 24}}>Ulica</CustomTypography>
                                <Controller
                                    name="street"
                                    control={control}
                                    render={() => (
                                        <TextField
                                            error={!!errors?.street}
                                            color={errors?.street ? "error" : "secondary"}
                                            size="small"
                                            className={classes.formInput}
                                            {...register("street")}
                                            {...street}
                                        />
                                    )}
                                />
                            </Box>
                            <Box className={classes.step4SingleFormBox}>
                                <CustomTypography style={{marginRight: 24}}>Miasto</CustomTypography>
                                <Controller
                                    name="city"
                                    control={control}
                                    render={() => (
                                        <TextField
                                            error={!!errors?.city}
                                            color={errors?.city ? "error" : "secondary"}
                                            size="small"
                                            className={classes.formInput}
                                            {...register("city")}
                                            {...city}
                                        />
                                    )}
                                />
                            </Box>
                            <Box className={classes.step4SingleFormBox}>
                                <CustomTypography style={{marginRight: 24}}>Kod<br/> pocztowy</CustomTypography>
                                <Controller
                                    name="postcode"
                                    control={control}
                                    render={() => (
                                        <TextField
                                            error={!!errors?.postcode}
                                            color={errors?.postcode ? "error" : "secondary"}
                                            size="small"
                                            className={classes.formInput}
                                            {...register("postcode")}
                                            {...postcode}
                                        />
                                    )}
                                />
                            </Box>
                            <Box className={classes.step4SingleFormBox}>
                                <CustomTypography style={{marginRight: 24}}>Numer<br/> telefonu</CustomTypography>
                                <Controller
                                    name="phoneNumber"
                                    control={control}
                                    render={() => (
                                        <TextField
                                            error={!!errors?.phoneNumber}
                                            color={errors?.phoneNumber ? "error" : "secondary"}
                                            size="small"
                                            className={classes.formInput}
                                            {...register("phoneNumber")}
                                            {...phoneNumber}
                                        />
                                    )}
                                />
                            </Box>
                        </Box>
                        <Box style={{width: "100%", maxWidth: 350, marginBottom:20}}>
                            <Typography className={classes.formHead} style={{fontWeight: 600}}>Termin odbioru:</Typography>
                            <Box className={classes.step4SingleFormBox}>
                                <CustomTypography style={{marginRight: 24}}>Data</CustomTypography>
                                <Controller
                                    name="date"
                                    control={control}
                                    render={() => (
                                        <TextField
                                            error={!!errors?.date}
                                            color={errors?.date ? "error" : "secondary"}
                                            type="date"
                                            size="small"
                                            className={classes.formInput}
                                            style={{width: 230}}
                                            {...register("date")}
                                            {...date}
                                        />
                                    )}
                                />
                            </Box>
                            <Box className={classes.step4SingleFormBox}>
                                <CustomTypography style={{marginRight: 24}}>Godzina</CustomTypography>
                                <Controller
                                    name="time"
                                    control={control}
                                    render={() => (
                                        <TextField
                                            error={!!errors?.time}
                                            color={errors?.time ? "error" : "secondary"}
                                            type="time"
                                            size="small"
                                            className={classes.formInput}
                                            style={{width: 230}}
                                            {...register("time")}
                                            {...time}
                                        />
                                    )}
                                />
                            </Box>
                            <Box className={classes.step4SingleFormBox} style={{marginTop: 37}}>
                                <CustomTypography style={{marginRight: 24}}>Uwagi<br/> dla kuriera</CustomTypography>
                                <Controller
                                    name="attentions"
                                    control={control}
                                    render={() => (
                                        <TextField
                                            multiline
                                            rows={3}
                                            size="small"
                                            color="secondary"
                                            style={{width: 240}}
                                            {...register("attentions")}
                                            {...attentions}
                                        />
                                    )}
                                    />

                            </Box>
                        </Box>
                    </Box>
                    <Box
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            maxWidth: 610,
                            flexWrap: "wrap",
                            "@media only screen and (max-width: 600px)": {
                                marginTop: 20,
                            }
                        }}
                    >
                        <Box>
                            {errors?.street ? (
                                <Alert
                                    severity="error"
                                    style={{backgroundColor: "transparent", padding: 0}}
                                >
                                    {errors?.street?.message}
                                </Alert>
                            ) : null}
                            {errors?.city ? (
                                <Alert
                                    severity="error"
                                    style={{backgroundColor: "transparent", padding: 0}}
                                >
                                    {errors?.city?.message}
                                </Alert>
                            ) : null}
                            {errors?.postcode ? (
                                <Alert
                                    severity="error"
                                    style={{
                                        backgroundColor: "transparent",
                                        padding: 0,
                                    }}
                                >
                                    {errors?.postcode?.message}
                                </Alert>
                            ) :null}
                        </Box>
                        <Box>
                            {errors?.phoneNumber ? (
                                <Alert
                                    severity="error"
                                    style={{backgroundColor: "transparent", padding: 0}}
                                >
                                    {errors?.phoneNumber?.message}
                                </Alert>
                            ) : null}
                            {errors?.date ? (
                            <Alert
                                severity="error"
                                style={{backgroundColor: "transparent", padding: 0}}
                            >
                                {errors?.date?.message}
                            </Alert>
                            ) :null}
                            {errors?.time ? (
                                <Alert
                                    severity="error"
                                    style={{backgroundColor: "transparent", padding: 0}}
                                >
                                    {errors?.time?.message}
                                </Alert>
                            ) : null}
                            {errors?.attentions ? (
                                <Alert
                                    severity="error"
                                    style={{backgroundColor: "transparent", padding: 0}}
                                >
                                    {errors?.attentions?.message}
                                </Alert>
                            ) : null}
                        </Box>
                    </Box>
                </Box>

                <Box style={{display: "flex"}}>
                    <FormButton style={{marginRight: 50}} onClick={handlePreviousStep}>Wstecz</FormButton>
                    <FormButton type="submit">Dalej</FormButton>
                </Box>
            </form>
        </Box>
    );
}