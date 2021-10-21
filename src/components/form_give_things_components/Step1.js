import React, {useContext, useState} from "react";
import {useStyles} from "./styles";
import {Alert, Box, TextField, Typography} from "@mui/material";
import CustomTypography from "../custom_elements/CustomTypography";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormButton from "../custom_elements/FormButton";
import {FormGiveThingsContext} from "../FormGiveThings";
import {styled} from "@mui/material/styles";
import Radio from "@mui/material/Radio";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const BpIcon = styled('span')(({ theme }) => ({
    width: 20,
    height: 20,
    border: `0.75px solid ${theme.palette.secondary.main}`,
    backgroundColor: "transparent",

    'input:hover ~ &': {
        backgroundColor: '#F0F1F1',
    },
}));

const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: '#FAD648',
    'input:hover ~ &': {
        backgroundColor: '#FFE800',
    },
});

function BpRadio(props) {
    return (
        <Radio
            sx={{
                '&:hover': {
                    bgcolor: 'transparent',
                },
            }}
            disableRipple
            color="default"
            checkedIcon={<BpCheckedIcon />}
            icon={<BpIcon />}
            {...props}
        />
    );
}

const schema = yup.object({
    other: yup
        .string()
        .min(3, "Pole zawierać minimum 3 znaki")
        .matches(/^[A-Za-z]+$/i, "Pole nie może mieć liczb")
}).required();

export default function Step1 () {
    const classes = useStyles();
    const {
        category, setCategory,
        otherCategory, setOtherCategory,
        handleNextStep,
        newOptionStep1, setNewOptionStep1,
    } = useContext(FormGiveThingsContext);
    const [error, setError] = useState(false);
    const {  control, register, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });


    const addNewCategory = () => {
        setCategory(otherCategory);
        setNewOptionStep1(true);
    };

    const validChoice = () => {
        if (!category || category === "inne") {
            setError(true);
        } else {
            handleNextStep();
            setError(false);
        }
    };

    return (
        <Box className={classes.step}>
            <Box>
                <CustomTypography className={classes.stepNumber}>Krok 1/4</CustomTypography>
                <Typography
                    variant="h5"
                    className={classes.head}
                    style={{fontWeight: 600}}
                >
                    Zaznacz co chcesz oddać:
                </Typography>
            </Box>
            <Box className={classes.formStep}>
                <Box>
                    <FormControl component="fieldset">
                        <RadioGroup
                            aria-label="Zaznacz co chcesz oddać:"
                            name="what-you-want-to-give"
                            value={category}
                            onChange={(event) => setCategory(event.target.value)}
                        >
                            <FormControlLabel
                                value="ubrania, które nadają się do ponownego użycia"
                                control={<BpRadio />}
                                className={classes.radio}
                                label="ubrania, które nadają się do ponownego użycia"
                            />
                            <FormControlLabel
                                value="ubrania, do wyrzucenia"
                                control={<BpRadio />}
                                className={classes.radio}
                                label="ubrania, do wyrzucenia"
                            />
                            <FormControlLabel
                                value="zabawki"
                                control={<BpRadio />}
                                className={classes.radio}
                                label="zabawki"
                            />
                            <FormControlLabel
                                value="książki"
                                control={<BpRadio />}
                                className={classes.radio}
                                label="książki"
                            />
                            <FormControlLabel
                                value="inne"
                                control={<BpRadio />}
                                className={classes.radio}
                                onClick={() => setNewOptionStep1(false)}
                                label="Inne"
                            />
                            {newOptionStep1 ? (
                                <FormControlLabel
                                    value={otherCategory}
                                    control={<BpRadio />}
                                    className={classes.radio}
                                    label={otherCategory}
                                />
                            ) : null}
                        </RadioGroup>
                    </FormControl>
                    {category === "inne" ? (
                        <form onSubmit={handleSubmit(addNewCategory)}>
                            <Controller
                                name="other"
                                id="other"
                                control={control}
                                render={() => (
                                    <TextField
                                        error={!!errors?.other}
                                        color={errors?.other ? "error" : "secondary"}
                                        size="small"
                                        style={{width: 300, marginRight: 30}}
                                        label="Inne"
                                        helperText={errors?.other?.message}
                                        value={otherCategory}
                                        {...register("other")}
                                        onChange={e => setOtherCategory(e.target.value)}
                                    />
                                )}
                            />
                            <FormButton
                                style={{height: 43, width: 90}}
                                type="submit"
                            >
                                Dodaj
                            </FormButton>
                        </form>
                    ) : null}
                    {error ? (
                        <Alert
                            severity="warning"
                            style={{maxWidth: 480, backgroundColor: "transparent", padding: "5px 0"}}
                        >
                            Zaznacz lub napisz co chcesz oddać
                        </Alert>
                    ) : null}
                </Box>
                <FormButton onClick={validChoice}>Dalej</FormButton>
            </Box>
        </Box>
    );
}