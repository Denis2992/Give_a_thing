import React from "react";
import {Typography, Box} from "@mui/material";
import Jersey from "../assets/Form-Hero-Image.jpg";
import Menu from "./home_components/Menu";
import Decoration from "../assets/Decoration.svg";
import {makeStyles} from "@mui/styles";
import CustomCardMedia from "./custom_elements/CustomCardMedia";
import Contact from "./home_components/Contact";
import FormGiveThings from "./giveThings_components/FormGiveThings";
import {theme} from "../index";
import CustomTypography from "./custom_elements/CustomTypography";

const useStyles = makeStyles((theme) => ({
    mainBox: {
        maxWidth: 1500,
        margin: "0 auto",
        [theme.breakpoints.down(1050)]: {
            backgroundImage: `url(${Jersey})`,
            backgroundRepeat: "no-repeat",
        },
    },
    contentBox: {
        display: "flex",
        justifyContent: "space-between",
        color: theme.palette.secondary.main,
        [theme.breakpoints.down(1050)]: {
            justifyContent: "center",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
        },
    },
    bgImage: {
        maxWidth: 650,
        backgroundSize: "cover",
        [theme.breakpoints.down(1350)]: {
            marginLeft: "-100px"
        },
        [theme.breakpoints.down(1250)]: {
            marginLeft: "-200px"
        },
        [theme.breakpoints.down(1150)]: {
            marginLeft: "-300px"
            // display: "none"
        },
        [theme.breakpoints.down(1050)]: {
            display: "none"
        },
    },
    infoBox: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: theme.spacing(5, 0, 2, 0),
    },
    head: {
        textAlign: "center",
        [theme.breakpoints.down(1250)]: {
            display: "none"
        },
    },
    headMobile: {
        textAlign: "center",
        [theme.breakpoints.up(1250)]: {
            display: "none"
        },
    },
    decoration: {
        maxWidth: 250,
        maxHeight: 30,
        margin: theme.spacing(4, 0, 5, 0)
    },
    stepsBox: {
        display: "flex",
        justifyContent: "center",
        margin: theme.spacing(3, 2),
        [theme.breakpoints.down(600)]: {
            flexWrap: "wrap"
        },
    },
    singleStepBoxExternal: {
        border: `0.75px solid ${theme.palette.secondary.main}`,
        width: 130,
        height: 130,
        transform: "rotate(45deg)",
        margin: theme.spacing(2, 1),
        [theme.breakpoints.down(1250)]: {
            width: 110,
            height: 110,
        },
    },
    singleStepBoxInternal: {
        transform: "rotate(-45deg)",
        height: 110,
        width: 110,
        textAlign: "center"
    },
    yellowBox: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main,
        padding: "50px 80px"
    },
}));

export default function GiveThings () {
    const classes = useStyles();

    return (
        <Box className={classes.mainBox}>
            <Box className={classes.contentBox}>
                <img src={Jersey} className={classes.bgImage} alt=""/>
                <Box>
                    <Menu />
                    <Box className={classes.infoBox}>
                        <Typography variant="h4" className={classes.head}>Oddaj rzeczy, których już nie chcesz<br/> POTRZEBUJĄCYM</Typography>
                        <Typography variant="h5" className={classes.headMobile}>Oddaj rzeczy, których już nie chcesz<br/> POTRZEBUJĄCYM</Typography>
                        <CustomCardMedia component="img" image={Decoration} className={classes.decoration}/>
                        <CustomTypography variant="h4" className={classes.head}>Wystarczą 4 proste kroki:</CustomTypography>
                        <CustomTypography variant="h5" className={classes.headMobile}>Wystarczą 4 proste kroki:</CustomTypography>
                        <Box className={classes.stepsBox}>
                            <Box className={classes.singleStepBoxExternal}>
                                <Box className={classes.singleStepBoxInternal}>
                                    <CustomTypography variant="h5">1</CustomTypography>
                                    <CustomTypography >Wybierz<br/> rzeczy</CustomTypography>
                                </Box>
                            </Box>
                            <Box className={classes.singleStepBoxExternal}>
                                <Box className={classes.singleStepBoxInternal}>
                                    <CustomTypography variant="h5">2</CustomTypography>
                                    <CustomTypography>Spakuj je<br/> w worki</CustomTypography>
                                </Box>
                            </Box>
                            <Box className={classes.singleStepBoxExternal}>
                                <Box className={classes.singleStepBoxInternal}>
                                    <CustomTypography variant="h5">3</CustomTypography>
                                    <CustomTypography>Wybierz fundację</CustomTypography>
                                </Box>
                            </Box>
                            <Box className={classes.singleStepBoxExternal}>
                                <Box className={classes.singleStepBoxInternal}>
                                    <CustomTypography variant="h5">4</CustomTypography>
                                    <CustomTypography>Zamów kuriera</CustomTypography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.yellowBox}>
                <Typography style={{
                    color: theme.palette.primary.contrastText,
                    fontWeight: 600,
                    fontSize: 35
                }}
                >
                    Ważne!
                </Typography>
                <Typography>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</Typography>
            </Box>
            <FormGiveThings />
            <Contact />
        </Box>
    );
}