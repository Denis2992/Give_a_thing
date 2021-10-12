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
    const [step, setStep] = useState(3)
    const [category, setCategory] = useState("");
    const [otherCategory, setOtherCategory] = useState("");
    const [newOptionStep1, setNewOptionStep1] = useState(false);
    const [bagsCount, resetBagsCount] = useInput("");
    const [location, resetLocation] = useInput("");
    const [helpGroups, setHelpGroups] = useState([]);

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