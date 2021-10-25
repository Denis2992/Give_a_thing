import React, {useContext} from "react";
import {useStyles} from "./styles";
import {Box, Typography} from "@mui/material";
import CustomCardMedia from "../custom_elements/CustomCardMedia";
import IconClothes from "../../assets/Icon-1.svg";
import IconOnLocation from "../../assets/Icon-4.svg";
import CustomTypography from "../custom_elements/CustomTypography";
import FormButton from "../custom_elements/FormButton";
import {FormGiveThingsContext} from "../FormGiveThings";
import getFirebase from "../firebase";

export default function Summary () {
    const firebase = getFirebase();
    const classes = useStyles();
    const {
        setStep,
        category, setCategory,
        setOtherCategory,
        setNewOptionStep1,
        bagsCount, resetBagsCount,
        location, resetLocation,
        helpGroups, setHelpGroups,
        setChecked1,
        setChecked2,
        setChecked3,
        setChecked4,
        setChecked5,
        street, resetStreet,
        city, resetCity,
        postcode, resetPostcode,
        phoneNumber, resetPhoneNumber,
        date, resetDate,
        time, resetTime,
        attentions, resetAttentions,
        organizationName, resetOrganizationName,
        handleNextStep, handlePreviousStep
    } = useContext(FormGiveThingsContext);


    const handleSendData = async () => {

        if (firebase) {
            try {
                const db = firebase.firestore()
                const docRef = db.collection("thingsToGive").doc();

                await docRef.set(
                    {
                        info: {
                            bagsCount: bagsCount.value,
                            category: category,
                            helpGroups: helpGroups,
                            location: location.value,
                            organizationName: organizationName.value
                        },
                        address: {
                            street: street.value,
                            city: city.value,
                            postcode: postcode.value,
                            phoneNumber: phoneNumber.value,
                        },
                        date: {
                            date: date.value,
                            time: time.value,
                            attentions: attentions.value
                        }
                    },
                    {merge: true}
                );
                console.log("Successfully added to Firestore!");
                handleNextStep();
                setCategory("");
                setOtherCategory("");
                setNewOptionStep1("");
                resetBagsCount();
                resetLocation();
                setHelpGroups([]);
                setChecked1("");
                setChecked2("");
                setChecked3("");
                setChecked4("");
                setChecked5("");
                resetStreet("");
                resetCity();
                resetPostcode();
                resetPhoneNumber();
                resetDate();
                resetTime();
                resetAttentions();
                resetOrganizationName();
                setTimeout(() => {
                    setStep(1);
                }, 3000)
            }catch (error) {
                console.log("error", error);
            }
        }
    };

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
                <Box style={{margin: "16px 0"}}>
                    <Typography className={classes.formHead} style={{fontWeight: 600}}>Oddajesz:</Typography>
                    <Box className={classes.boxGiveThings}>
                        <CustomCardMedia component="img" image={IconClothes} className={classes.cardMedia}/>
                        <Typography>
                            {bagsCount.value}
                            {parseInt(bagsCount.value) === 1 ? " worek, " : null}
                            {parseInt(bagsCount.value) > 1 && parseInt(bagsCount.value) < 5 ? " worki, " : null}
                            {parseInt(bagsCount.value) === 5 ? " worków, " : null}
                            {`${category}${helpGroups.length !== 1 ? ";" : ","}`}
                            {helpGroups.map((el, i) => i === helpGroups.length - 1 ? ` ${el}` : ` ${el},`)}

                        </Typography>
                    </Box>
                    <Box className={classes.boxGiveThings} style={{marginBottom: 24}}>
                        <CustomCardMedia component="img" image={IconOnLocation} className={classes.cardMedia}/>
                        <Typography>dla lokalizacji: {location.value}</Typography>
                    </Box>
                </Box>
                <Box style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap", maxWidth: 750}}>
                    <Box style={{display: "flex", flexDirection: "column"}}>
                        <Typography className={classes.formHead} style={{fontWeight: 600}}>Adres odbioru:</Typography>
                        <Box className={classes.wroteData}>
                            <CustomTypography style={{marginRight: 10, width: 90}}>Ulica</CustomTypography>
                            <CustomTypography>{street.value}</CustomTypography>
                        </Box>
                        <Box className={classes.wroteData}>
                            <CustomTypography style={{marginRight:10, width: 90}}>Miasto</CustomTypography>
                            <CustomTypography>{city.value}</CustomTypography>
                        </Box>
                        <Box className={classes.wroteData} style={{height: 45}}>
                            <CustomTypography style={{marginRight: 10, width: 90}}>Kod<br/> pocztowy</CustomTypography>
                            <CustomTypography>{postcode.value}</CustomTypography>
                        </Box>
                        <Box className={classes.wroteData} style={{height: 45}}>
                            <CustomTypography style={{marginRight: 10, width: 90}}>Numer<br/> telefonu</CustomTypography>
                            <CustomTypography>{phoneNumber.value}</CustomTypography>
                        </Box>
                    </Box>
                    <Box style={{display: "flex", flexDirection: "column"}}>
                        <Typography className={classes.formHead} style={{fontWeight: 600}}>Termin odbioru:</Typography>
                        <Box className={classes.wroteData}>
                            <CustomTypography style={{marginRight: 10, width: 90}}>Data</CustomTypography>
                            <CustomTypography>{date.value}</CustomTypography>
                        </Box>
                        <Box className={classes.wroteData}>
                            <CustomTypography style={{marginRight: 10, width: 90}}>Godzina</CustomTypography>
                            <CustomTypography>{time.value}</CustomTypography>
                        </Box>
                        {attentions.value ? (
                            <Box className={classes.wroteData} style={{height: 100, alignItems: "flex-start"}}>
                                <CustomTypography style={{marginRight: 10, width: 110}}>Uwagi<br/> dla kuriera</CustomTypography>
                                <CustomTypography style={{ height: 120, width: 295}}>{attentions.value}</CustomTypography>
                            </Box>
                        ) : null}
                    </Box>
                </Box>
            </Box>
            <Box style={{display: "flex"}}>
                <FormButton style={{marginRight: 50}} onClick={handlePreviousStep}>Wstecz</FormButton>
                <FormButton onClick={handleSendData}>Potwierdzam</FormButton>
            </Box>
        </Box>
    );
}