import React, {createContext, useState} from "react";
import {Box} from "@mui/material";
import useInput from "./hooks/useInput";
import {useStyles} from "./form_give_things_components/styles";
import Step1 from "./form_give_things_components/Step1";
import Step2 from "./form_give_things_components/Step2";
import Step3 from "./form_give_things_components/Step3";
import Step4 from "./form_give_things_components/Step4";
import Summary from "./form_give_things_components/Summary";
import Confirmation from "./form_give_things_components/Confirmation";

export const FormGiveThingsContext = createContext("");

export default function FormGiveThings () {
    const classes = useStyles();
    const [step, setStep] = useState(1);
    //step1
    const [category, setCategory] = useState("");
    const [otherCategory, setOtherCategory] = useState("");
    const [newOptionStep1, setNewOptionStep1] = useState(false);
    //step2
    const [bagsCount, resetBagsCount] = useInput("");
    //step3
    const [location, resetLocation] = useInput("");
    const [helpGroups, setHelpGroups] = useState([]);
    const [organizationName, resetOrganizationName] = useInput("");
        // checked Checkboxes
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);
    const [checked5, setChecked5] = useState(false);
    // step4
    const [street, resetStreet] = useInput("");
    const [city, resetCity] = useInput("");
    const [postcode, resetPostcode] = useInput("");
    const [phoneNumber, resetPhoneNumber] = useInput("");
    const [date, resetDate] = useInput("");
    const [time, resetTime] = useInput("");
    const [attentions, resetAttentions] = useInput("");


    const handleNextStep = () => {
        setStep(prevState => prevState + 1);
    };

    const handlePreviousStep = () => {
        setStep(prevState => prevState - 1);
    };

    return(
        <FormGiveThingsContext.Provider
            value={{
                step, setStep,
                category, setCategory,
                otherCategory, setOtherCategory,
                newOptionStep1, setNewOptionStep1,
                bagsCount, resetBagsCount,
                location, resetLocation,
                helpGroups, setHelpGroups,
                checked1, setChecked1,
                checked2, setChecked2,
                checked3, setChecked3,
                checked4, setChecked4,
                checked5, setChecked5,
                street, resetStreet,
                city, resetCity,
                postcode, resetPostcode,
                phoneNumber, resetPhoneNumber,
                date, resetDate,
                time, resetTime,
                attentions, resetAttentions,
                organizationName, resetOrganizationName,
                handleNextStep, handlePreviousStep
            }}
        >
            <Box className={classes.mainBox}>
                {step === 1 ? (
                    <Step1 />
                ) : null}
                {step === 2 ? (
                    <Step2 />
                ) : null}
                {step === 3 ? (
                    <Step3 />
                ) : null}
                {step === 4 ? (
                    <Step4 />
                ) : null}
                {step === 5 ? (
                    <Summary />
                ) : null}
                {/*confirmation*/}
                {step === 6 ? (
                    <Confirmation />
                ) : null}
            </Box>
        </FormGiveThingsContext.Provider>

    )
}