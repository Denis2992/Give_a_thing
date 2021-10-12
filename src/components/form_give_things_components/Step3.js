import React, {useContext, useState} from "react";
import {useStyles} from "./styles";
import {Box, Checkbox, MenuItem, Select, TextField, Typography} from "@mui/material";
import CustomTypography from "../custom_elements/CustomTypography";
import FormControl from "@mui/material/FormControl";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FormButton from "../custom_elements/FormButton";
import {FormGiveThingsContext} from "../FormGiveThings";
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
        handleNextStep, handlePreviousStep} = useContext(FormGiveThingsContext);


    const handleAddCategory = (e) => {
        if (helpGroups.find(el => el === e.target.value)) {
            setHelpGroups(prevState => [...prevState].filter(el => el !== e.target.value));
        } else {
            setHelpGroups(prevState => [...prevState, e.target.value]);
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
            <form className={classes.formStep}>
                <Box>
                    <FormControl className={classes.select}>
                        <Select
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
                    <Typography className={classes.step3Text} style={{fontWeight: 600, marginTop: 40}}>Komu chcesz pomóc?</Typography>
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
                            onChange={handleAddCategory}
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
                            inputProps={{ 'aria-label': 'Checkbox demo' }}
                            value="samotnym matkom"
                            onChange={handleAddCategory}
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
                            inputProps={{ 'aria-label': 'Checkbox demo' }}
                            value="bezdomnym"
                            onChange={handleAddCategory}
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
                            inputProps={{ 'aria-label': 'Checkbox demo' }}
                            value="niepełnosprawnym"
                            onChange={handleAddCategory}
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
                            inputProps={{ 'aria-label': 'Checkbox demo' }}
                            value="osobom starszym"
                            onChange={handleAddCategory}
                        />
                    </Box>
                    <Typography className={classes.step3Text} style={{fontWeight: 600, margin: "20px 0 10px 0"}}>Wpisz nazwę konkretnej organizacji (opcjonalnie)</Typography>
                    <TextField size="small" color="secondary" style={{maxWidth: 450, width: "100%"}}/>
                </Box>
                <Box>
                    <FormButton style={{marginRight: 50}} onClick={handlePreviousStep}>Wstecz</FormButton>
                    <FormButton onClick={handleNextStep}>Dalej</FormButton>
                </Box>
            </form>
        </Box>
    );
}