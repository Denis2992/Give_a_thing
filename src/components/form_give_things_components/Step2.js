import React, {useContext, useState} from "react";
import {useStyles} from "./styles";
import {Alert, Box, MenuItem, Select, Typography} from "@mui/material";
import CustomTypography from "../custom_elements/CustomTypography";
import FormControl from "@mui/material/FormControl";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FormButton from "../custom_elements/FormButton";
import {FormGiveThingsContext} from "../FormGiveThings";

export default function Step2 () {
    const classes = useStyles();
    const {
        bagsCount,
        otherCategory, setNewOptionStep1,
        handleNextStep, handlePreviousStep} = useContext(FormGiveThingsContext);
    const [error, setError] = useState(false);

    const validChoice = () => {
        if (!bagsCount.value) {
            setError(true);
        } else {
            handleNextStep();
            setError(false);
        }
    };

    return (
        <Box className={classes.step} >
            <Box>
                <CustomTypography className={classes.stepNumber}>Krok 2/4</CustomTypography>
                <Typography
                    variant="h5"
                    className={classes.head}
                    style={{fontWeight: 600}}

                >
                    Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
                </Typography>

            </Box>

            <Box className={classes.formStep}>
                    <Box>
                        <Box style={{display: "flex", alignItems: "center", paddingTop: 10}}>
                            <CustomTypography style={{marginRight: 40}}>Liczba 60l worków:</CustomTypography>
                            <FormControl className={classes.select}>
                                <Select
                                    color="secondary"
                                    displayEmpty
                                    size="small"
                                    MenuProps={{classes: {paper: classes.selectUl}}}
                                    IconComponent={KeyboardArrowDownIcon}
                                    {...bagsCount}
                                >
                                    <MenuItem value="" disabled>Wybierz</MenuItem>
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        {error ? (
                            <Alert
                                severity="warning"
                                style={{maxWidth: 250, backgroundColor: "transparent", padding: "5px 0"}}
                            >
                                Podaj liczbę worków
                            </Alert>
                        ) : null}
                    </Box>
                    <Box style={{display: "flex"}}>
                        <FormButton
                            style={{marginRight: 50}}
                            onClick={() => {
                                handlePreviousStep();
                                if (otherCategory) {
                                    setNewOptionStep1(true);
                                }
                            }}
                        >Wstecz
                        </FormButton>
                        <FormButton onClick={validChoice}>Dalej</FormButton>
                    </Box>
                </Box>
        </Box>
    );
}