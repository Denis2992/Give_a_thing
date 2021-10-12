import React, {useContext} from "react";
import {useStyles} from "./styles";
import {Box, TextField, Typography} from "@mui/material";
import CustomTypography from "../custom_elements/CustomTypography";
import FormButton from "../custom_elements/FormButton";
import {FormGiveThingsContext} from "../FormGiveThings";

export default function Step4 () {
    const classes = useStyles();
    const {handleNextStep, handlePreviousStep} = useContext(FormGiveThingsContext);

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
                <Box style={{display: "flex", justifyContent: "space-between", maxWidth: 800, marginTop: 20}}>
                    <Box>
                        <Typography className={classes.formHead} style={{fontWeight: 600}}>Adres odbioru:</Typography>
                        <Box className={classes.step4SingleFormBox}>
                            <CustomTypography style={{marginRight: 24}}>Ulica</CustomTypography>
                            <TextField
                                size="small"
                                color="secondary"
                                className={classes.formInput}
                            />
                        </Box>
                        <Box className={classes.step4SingleFormBox}>
                            <CustomTypography style={{marginRight: 24}}>Miasto</CustomTypography>
                            <TextField
                                size="small"
                                color="secondary"
                                margin="none"
                                classes={{
                                    root: classes.formInput
                                }}
                                // className={classes.formInput}
                            />
                        </Box>
                        <Box className={classes.step4SingleFormBox}>
                            <CustomTypography style={{marginRight: 24}}>Kod<br/> pocztowy</CustomTypography>
                            <TextField
                                size="small"
                                color="secondary"
                                className={classes.formInput}
                            />
                        </Box>
                        <Box className={classes.step4SingleFormBox}>
                            <CustomTypography style={{marginRight: 24}}>Numer<br/> telefonu</CustomTypography>
                            <TextField
                                size="small"
                                color="secondary"
                                className={classes.formInput}
                            />
                        </Box>
                    </Box>
                    <Box>
                        <Typography className={classes.formHead} style={{fontWeight: 600}}>Termin odbioru:</Typography>
                        <Box className={classes.step4SingleFormBox}>
                            <CustomTypography style={{marginRight: 24}}>Data</CustomTypography>
                            <TextField
                                size="small"
                                color="secondary"
                                className={classes.formInput}
                            />
                        </Box>
                        <Box className={classes.step4SingleFormBox}>
                            <CustomTypography style={{marginRight: 24}}>Godzina</CustomTypography>
                            <TextField
                                size="small"
                                color="secondary"
                                className={classes.formInput}
                            />
                        </Box>
                        <Box className={classes.step4SingleFormBox}>
                            <CustomTypography style={{marginRight: 24}}>Uwagi<br/> dla kuriera</CustomTypography>
                            <TextField
                                size="small"
                                color="secondary"
                                className={classes.formInput}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box>
                <FormButton style={{marginRight: 50}} onClick={handlePreviousStep}>Wstecz</FormButton>
                <FormButton onClick={handleNextStep}>Dalej</FormButton>
            </Box>
        </Box>
    );
}