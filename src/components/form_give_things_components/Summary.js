import React, {useContext} from "react";
import {useStyles} from "./styles";
import {Box, Typography} from "@mui/material";
import CustomCardMedia from "../custom_elements/CustomCardMedia";
import IconClothes from "../../assets/Icon-1.svg";
import IconOnLocation from "../../assets/Icon-4.svg";
import CustomTypography from "../custom_elements/CustomTypography";
import FormButton from "../custom_elements/FormButton";
import {FormGiveThingsContext} from "../FormGiveThings";

export default function Summary () {
    const classes = useStyles();
    const {handleNextStep, handlePreviousStep} = useContext(FormGiveThingsContext);

    return (
        <Box className={classes.step}>
            <Box>
                <Typography
                    variant="h5"
                    className={classes.head}
                    style={{fontWeight: 600, paddingTop: 30}}
                >
                    Podsumowanie Twojej darowizny
                </Typography>
                <Box style={{margin: "32px 0"}}>
                    <Typography className={classes.formHead} style={{fontWeight: 600}}>Oddajesz:</Typography>
                    <Box className={classes.boxGiveThings}>
                        <CustomCardMedia component="img" image={IconClothes} className={classes.cardMedia}/>
                        <Typography>4 worki, ubrania w dobrym stanie, dzieciom</Typography>
                    </Box>
                    <Box className={classes.boxGiveThings} style={{marginBottom: 24}}>
                        <CustomCardMedia component="img" image={IconOnLocation} className={classes.cardMedia}/>
                        <Typography>dla lokalizacji: Warszawa</Typography>
                    </Box>
                </Box>
                <Box style={{display: "flex", justifyContent: "space-between", maxWidth: 650}}>
                    <Box style={{display: "flex", flexDirection: "column"}}>
                        <Typography className={classes.formHead} style={{fontWeight: 600}}>Adres odbioru:</Typography>
                        <Box className={classes.wroteData}>
                            <CustomTypography style={{marginRight: 50, width: 90}}>Ulica</CustomTypography>
                            <CustomTypography>Prosta 51</CustomTypography>
                        </Box>
                        <Box className={classes.wroteData}>
                            <CustomTypography style={{marginRight: 50, width: 90}}>Miasto</CustomTypography>
                            <CustomTypography>Warszawa</CustomTypography>
                        </Box>
                        <Box className={classes.wroteData}>
                            <CustomTypography style={{marginRight: 50, width: 90}}>Kod<br/> pocztowy</CustomTypography>
                            <CustomTypography>90-209</CustomTypography>
                        </Box>
                        <Box className={classes.wroteData}>
                            <CustomTypography style={{marginRight: 50, width: 90}}>Numer<br/> telefonu</CustomTypography>
                            <CustomTypography>473 839 483</CustomTypography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography className={classes.formHead} style={{fontWeight: 600}}>Termin odbioru:</Typography>
                        <Box className={classes.wroteData}>
                            <CustomTypography style={{marginRight: 50, width: 90}}>Data</CustomTypography>
                            <CustomTypography>17.10.2019</CustomTypography>
                        </Box>
                        <Box className={classes.wroteData}>
                            <CustomTypography style={{marginRight: 50, width: 90}}>Godzina</CustomTypography>
                            <CustomTypography>17:30</CustomTypography>
                        </Box>
                        <Box className={classes.wroteData}>
                            <CustomTypography style={{marginRight: 50, width: 90}}>Uwagi<br/> dla kuriera</CustomTypography>
                            <CustomTypography>Uwagi dla kuriera</CustomTypography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box>
                <FormButton style={{marginRight: 50}} onClick={handlePreviousStep}>Wstecz</FormButton>
                <FormButton onClick={handleNextStep}>Potwierdzam</FormButton>
            </Box>
        </Box>
    );
}