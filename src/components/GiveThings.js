import React from "react";
import {Typography, Box, CardMedia} from "@mui/material";
import Jersey from "../assets/Form-Hero-Image.jpg";
import Menu from "./home_components/Menu";
import Decoration from "../assets/Decoration.svg";
import {makeStyles} from "@mui/styles";
import CustomCardMedia from "./custom_elements/CustomCardMedia";
import Contact from "./home_components/Contact";
import FormGiveThings from "./FormGiveThings";
import {theme} from "../index";
import CustomTypography from "./custom_elements/CustomTypography";

const useStyles = makeStyles((theme) => ({
    mainBox: {
        display: "flex",
        color: theme.palette.secondary.main,
    },
    bgImage: {
        maxWidth: 750,
        objectFit: "contain"
    },
    infoBox: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: theme.spacing(5)

    },
    decoration: {
        maxWidth: 250,
        maxHeight: 30,
        margin: theme.spacing(4, 0, 5, 0)
    },
    stepsBox: {
        display: "flex",
        margin: theme.spacing(3, 0)
    },
    singleStepBoxExternal: {
        border: `0.75px solid ${theme.palette.secondary.main}`,
        width: 130,
        height: 130,
        transform: "rotate(45deg)",
        margin: theme.spacing(2, 1)
    },
    singleStepBoxInternal: {
        transform: "rotate(-45deg)",
        height: 120,
        width: 120,
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
        <Box style={{maxWidth: 1500, margin: "0 auto"}}>
            <Box className={classes.mainBox}>
                <CardMedia component="img" image={Jersey} className={classes.bgImage}/>
                <Box>
                    <Menu />
                    <Box className={classes.infoBox}>
                        <Typography variant="h4" style={{textAlign: "center"}}>Oddaj rzeczy, których już nie chcesz<br/> POTRZEBUJĄCYM</Typography>
                        <CustomCardMedia component="img" image={Decoration} className={classes.decoration}/>
                        <CustomTypography variant="h4">Wystarczą 4 proste kroki:</CustomTypography>
                        <Box className={classes.stepsBox}>
                            <Box className={classes.singleStepBoxExternal}>
                                <Box className={classes.singleStepBoxInternal}>
                                    <CustomTypography variant="h5">1</CustomTypography>
                                    <CustomTypography>Wybierz<br/> rzeczy</CustomTypography>
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