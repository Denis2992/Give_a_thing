import React from "react";
import {
    Box,
    Checkbox,
    InputLabel,
    List,
    ListItem,
    ListItemText,
    MenuItem,
    Select,
    TextField,
    Typography
} from "@mui/material";
import FormBackground from "../assets/Background-Form.jpg";
import {makeStyles} from "@mui/styles";
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import CustomTypography from "./custom_elements/CustomTypography";
import FormButton from "./custom_elements/FormButton";
import {lighten} from "@mui/material";
import CustomButton from "./custom_elements/CustomButton";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const BpIcon = styled('span')(({ theme }) => ({
    width: 20,
    height: 20,
    border: "0.75px solid #3C3C3C",
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

const useStyles = makeStyles((theme) => ({
    mainBox:{
        backgroundImage: `url(${FormBackground})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        color: theme.palette.secondary.main
    },
    step: {
        padding: "20px 80px 40px 80px",
        height: 600,
        border: "1px solid green",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    stepNumber: {
        fontWeight: 300
    },
    formHead: {
        color: theme.palette.primary.contrastText,
        padding: "50px 0 10px 0"
    },
    radio: {
        margin: "10px 0",
        paddingLeft: 3
    },
    select: {
        maxWidth: 250,
        width: "100%",
        display: "flex",
    },
    selectUl: {
        "& ul": {
            backgroundColor: theme.palette.secondary.light,
        },
    },
    list: {
        display: "flex",
        flexWrap: "wrap",
        maxWidth: 550,

    },
    listItem: {
        fontSize: 18,
        fontFamily: "Open Sans",
        border: `0.75px solid ${theme.palette.text.secondary}`,
        padding: "8px 15px",
        width: "initial !important",
        margin: "10px 20px 10px 0",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },

}));

export default function FormGiveThings () {
    const classes = useStyles();

    return(
        <Box className={classes.mainBox}>
            <Box className={classes.step}>
                <Box style={{display: "flex", flexDirection: "column"}}>
                    <CustomTypography className={classes.stepNumber}>Krok 1/4</CustomTypography>
                    <Typography
                        variant="h5"
                        className={classes.formHead}
                        style={{fontWeight: 600}}
                    >
                        Zaznacz co chcesz oddać:
                    </Typography>
                    <FormControl component="fieldset">
                        <RadioGroup aria-label="Zaznacz co chcesz oddać:" name="what-you-want-to-give">
                            <FormControlLabel
                                value="clothesToUse"
                                control={<BpRadio />}
                                className={classes.radio}
                                label="ubrania, które nadają się do ponownego użycia" />
                            <FormControlLabel
                                value="clothesToThrowOut"
                                control={<BpRadio />}
                                className={classes.radio}
                                label="ubrania, do wyrzucenia" />
                            <FormControlLabel
                                value="toys"
                                control={<BpRadio />}
                                className={classes.radio}
                                label="zabawki" />
                            <FormControlLabel
                                value="books"
                                control={<BpRadio />}
                                className={classes.radio}
                                label="książki" />
                            <FormControlLabel
                                value="other"
                                control={<BpRadio />}
                                className={classes.radio}
                                label="Inne"
                            />
                        </RadioGroup>
                        <TextField
                            color="secondary"
                            size="small"
                            style={{maxWidth: 250}}
                            label="Inne"
                            helperText="Napisz, co chcesz oddać"
                        />
                    </FormControl>

                </Box>
                <FormButton>Dalej</FormButton>

            </Box>
            <Box className={classes.step} >
                <Box>
                    <CustomTypography className={classes.stepNumber}>Krok 2/4</CustomTypography>
                    <Typography
                        variant="h5"
                        className={classes.formHead}
                        style={{fontWeight: 600}}

                    >
                        Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
                    </Typography>
                    <Box style={{display: "flex", alignItems: "center", paddingTop: 20, paddingBottom: 200}}>
                        <CustomTypography style={{marginRight: 40}}>Liczba 60l worków:</CustomTypography>
                        <FormControl className={classes.select}>
                            <Select
                                color="secondary"
                                value={0}
                                size="small"
                                MenuProps={{classes: {paper: classes.selectUl}}}
                                IconComponent={KeyboardArrowDownIcon}

                            >
                                <MenuItem value={0} disabled>Wybierz</MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
                <Box s>
                    <FormButton style={{marginRight: 50}}>Wstecz</FormButton>
                    <FormButton>Dalej</FormButton>
                </Box>
            </Box>
            <Box className={classes.step}>
                <Box>
                    <CustomTypography> Krok 3/4</CustomTypography>
                    <Typography
                        variant="h5"
                        className={classes.formHead}
                        style={{fontWeight: 600}}
                    >
                        Lokalizacja:
                    </Typography>
                    <FormControl className={classes.select}>
                        <Select
                            color="secondary"
                            value={0}
                            size="small"
                            MenuProps={{classes: {paper: classes.selectUl}}}
                            IconComponent={KeyboardArrowDownIcon}
                        >
                            <MenuItem value={0} disabled>Wybierz</MenuItem>
                            <MenuItem value="Poznań">Poznań</MenuItem>
                            <MenuItem value="Warszawa">Warszawa</MenuItem>
                            <MenuItem value="Kraków">Kraków</MenuItem>
                            <MenuItem value="Wrocław">Wrocław</MenuItem>
                            <MenuItem value="Katowice">Katowice</MenuItem>
                        </Select>
                    </FormControl>
                    <Typography style={{fontWeight: 600, marginTop: 40}}>Komu chcesz pomóc?</Typography>
                    <List className={classes.list}>
                        <ListItem className={classes.listItem} disablePadding={true}>dzieciom</ListItem>
                        <ListItem className={classes.listItem} disablePadding={true}>samotnym matkom</ListItem>
                        <ListItem className={classes.listItem} disablePadding={true}>bezdomnym</ListItem>
                        <ListItem className={classes.listItem} disablePadding={true}>niepełnosprawnym</ListItem>
                        <ListItem className={classes.listItem} disablePadding={true}>osobom starszym</ListItem>
                    </List>
                </Box>
                <Box>
                    <FormButton style={{marginRight: 50}}>Wstecz</FormButton>
                    <FormButton>Dalej</FormButton>
                </Box>
            </Box>
        </Box>
    )
}