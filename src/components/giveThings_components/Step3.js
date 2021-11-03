import React, {useContext, useState} from "react";
import {useStyles} from "./styles";
import {Alert, Box, Checkbox, MenuItem, Select, TextField, Typography} from "@mui/material";
import CustomTypography from "../custom_elements/CustomTypography";
import FormControl from "@mui/material/FormControl";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FormButton from "../custom_elements/FormButton";
import {FormGiveThingsContext} from "./FormGiveThings";
import { styled } from '@mui/material/styles';

const BpIcon = styled('span')(({ theme, data}) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: `0.75px solid ${theme.palette.secondary.main}`,
    backgroundColor: "transparent",
    transition: "all 0.2s ease-out",
    margin: "10px 0",
    '&:before': {
        padding: "8px 20px",
        content: data,
        fontFamily: "Open Sans",
        color: theme.palette.secondary.main
    },
    'input:hover ~ &': {
        backgroundColor: theme.palette.secondary.light,
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
    },
}));

const BpCheckedIcon = styled(BpIcon)(({data}) => ({
    backgroundColor: '#FAD648',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    '&:before': {
        content: data,
    },
    'input:hover ~ &': {
        backgroundColor: '#FFE800',
    },
}));

export default function Step3 () {
    const classes = useStyles();
    const {
        location,
        helpGroups, setHelpGroups,
        organizationName,
        checked1, setChecked1,
        checked2, setChecked2,
        checked3, setChecked3,
        checked4, setChecked4,
        checked5, setChecked5,
        handleNextStep, handlePreviousStep
    } = useContext(FormGiveThingsContext);
    const [errorLocalization, setErrorLocalization] = useState(false);
    const [errorCheckbox, setErrorCheckbox] = useState(false);
    const [errorOrganization, setErrorOrganization] = useState(false);

    const handleAddCategory = (e) => {
        if (helpGroups.find(el => el === e.target.value)) {
            setHelpGroups(prevState => [...prevState].filter(el => el !== e.target.value));
        } else {
            setHelpGroups(prevState => [...prevState, e.target.value]);
        }
    };

    const validForm = () => {
        // validLocation
        if (!location.value) {
            setErrorLocalization(true);
        } else {
            setErrorLocalization(false);
        }
        // validHelpGroups
        if (helpGroups.length === 0) {
            setErrorCheckbox(true);
        } else {
            setErrorCheckbox(false);

        }
        // valid organization
        if (organizationName.value.length !== 0) {
            if (organizationName.value.length < 3 || /\d/.test(organizationName.value)) {
                setErrorOrganization(true);
            } else {
                setErrorOrganization(false);
            }
        } else {
            setErrorOrganization(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validForm();
        if (location.value !== "" && helpGroups.length !== 0) {
            handleNextStep();
        }
    };

    return (
        <Box className={classes.step}>
            <Box>
                <CustomTypography> Krok 3/4</CustomTypography>
                <Typography
                    variant="h5"
                    className={classes.head}
                    style={{fontWeight: 600}}
                >
                    Lokalizacja:
                </Typography>
            </Box>
            <form className={classes.formStep} onSubmit={handleSubmit}>
                <Box>
                    <FormControl className={classes.select}>
                        <Select
                            name="location"
                            color="secondary"
                            size="small"
                            displayEmpty
                            MenuProps={{classes: {paper: classes.selectUl}}}
                            IconComponent={KeyboardArrowDownIcon}
                            {...location}
                        >
                            <MenuItem value="" disabled>Wybierz</MenuItem>
                            <MenuItem value="Poznań">Poznań</MenuItem>
                            <MenuItem value="Warszawa">Warszawa</MenuItem>
                            <MenuItem value="Kraków">Kraków</MenuItem>
                            <MenuItem value="Wrocław">Wrocław</MenuItem>
                            <MenuItem value="Katowice">Katowice</MenuItem>
                        </Select>
                    </FormControl>
                    {errorLocalization ? (
                        <Alert
                            severity="warning"
                            style={{
                                maxWidth: 300,
                                backgroundColor: "transparent",
                                padding: "5px 0",
                            }}
                        >
                            Wybierz lokalizację
                        </Alert>
                    ) : (
                        <div style={{height: 48}}/>
                    )}
                    <Typography
                        className={classes.step3Text}
                        style={{fontWeight: 600, marginTop: 10}}>Komu chcesz pomóc?</Typography>
                    <Box className={classes.checkboxGroup}>
                        <Checkbox
                            style={{
                                fontSize: 18,
                                width: 140,
                                height: 60,
                            }}
                            disableRipple
                            color="default"
                            checkedIcon={<BpCheckedIcon data={'"dzieciom"'} />}
                            icon={<BpIcon data={'"dzieciom"'} />}
                            value="dzieciom"
                            checked={checked1}
                            onChange={(e) => {
                                setChecked1(e.target.checked);
                                handleAddCategory(e);
                            }}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                        <Checkbox
                            style={{
                                fontSize: 18,
                                width: 230,
                                height: 60
                            }}
                            disableRipple
                            color="default"
                            checkedIcon={<BpCheckedIcon data={'"samotnym matkom"'} />}
                            icon={<BpIcon data={'"samotnym matkom"'} />}
                            value="samotnym matkom"
                            checked={checked2}
                            onChange={(e) => {
                                setChecked2(e.target.checked);
                                handleAddCategory(e);
                            }}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                        <Checkbox
                            style={{
                                fontSize: 18,
                                width: 170,
                                height: 60
                            }}
                            disableRipple
                            color="default"
                            checkedIcon={<BpCheckedIcon data={'"bezdomnym"'} />}
                            icon={<BpIcon data={'"bezdomnym"'} />}
                            value="bezdomnym"
                            checked={checked3}
                            onChange={(e) => {
                                setChecked3(e.target.checked);
                                handleAddCategory(e);
                            }}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                        <Checkbox
                            style={{
                                fontSize: 18,
                                width: 225,
                                height: 60
                            }}
                            disableRipple
                            color="default"
                            checkedIcon={<BpCheckedIcon data={'"niepełnosprawnym"'} />}
                            icon={<BpIcon data={'"niepełnosprawnym"'} />}
                            value="niepełnosprawnym"
                            checked={checked4}
                            onChange={(e) => {
                                setChecked4(e.target.checked);
                                handleAddCategory(e);
                            }}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                        <Checkbox
                            style={{
                                fontSize: 18,
                                width: 215,
                                height: 60
                            }}
                            disableRipple
                            color="default"
                            checkedIcon={<BpCheckedIcon data={'"osobom starszym"'} />}
                            icon={<BpIcon data={'"osobom starszym"'} />}
                            value="osobom starszym"
                            checked={checked5}
                            onChange={(e) => {
                                setChecked5(e.target.checked);
                                handleAddCategory(e);
                            }}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    </Box>
                    {errorCheckbox ? (
                        <Alert
                            severity="warning"
                            style={{
                                maxWidth: 300,
                                height: 20,
                                backgroundColor: "transparent",
                                padding: 0,
                                marginTop: "-5px"
                        }}
                            >
                            Zaznacz przynajmniej jedno pole
                        </Alert>
                    ) : (
                        <div style={{height: 20, marginTop: "-5px"}}/>
                    )}
                    <Typography className={classes.step3Text} style={{fontWeight: 600, margin: "20px 0 10px 0"}}>Wpisz nazwę konkretnej organizacji (opcjonalnie)</Typography>
                    <TextField
                        name="organizationName"
                        size="small"
                        color="secondary"
                        style={{maxWidth: 450, width: "100%"}}
                        {...organizationName}
                    />
                    {errorOrganization ? (
                        <Alert
                            severity="warning"
                            style={{
                                maxWidth: 450,
                                height: 20,
                                backgroundColor: "transparent",
                                padding: 0,
                                marginTop: "-5px"
                            }}
                        >
                            Nazwa ma zawierać tylko litery i minimalną długość 3
                        </Alert>
                    ) : (
                        <div style={{height: 20, marginTop: "-5px"}}/>
                    )}
                </Box>
                <Box style={{display: "flex"}}>
                    <FormButton style={{marginRight: 50}} onClick={handlePreviousStep}>Wstecz</FormButton>
                    <FormButton type="submit">Dalej</FormButton>
                </Box>
            </form>
        </Box>
    );
}