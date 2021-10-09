import React from "react";
import {Typography, Box, CardMedia} from "@mui/material";
import Jersey from "../assets/Form-Hero-Image.jpg";
import Menu from "./home_components/Menu";
import Decoration from "../assets/Decoration.svg";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    mainBox: {
        display: "flex",
        color: theme.palette.secondary.main,
        border: "2px solid red",
    },
    bgImage: {
        maxHeight: 650,
        maxWidth: 750,
        objectFit: "contain"
    },
    infoBox: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center" ,
        height: "100%",
        border: "1px solid black"

    },
    decoration: {
        maxWidth: 250,
        maxHeight: 30,
        margin: theme.spacing(4, 0, 5, 0)
    },
    stepsBox: {
        display: "flex"
    },
    singleStepBoxExternal: {
        border: `0.75px solid ${theme.palette.secondary.main}`,
        width: 130,
        height: 130,
        transform: "rotate(45deg)",
        margin: theme.spacing(2, 1)
    },
    singleStepBoxInternal: {
        border: "1px solid green",
        transform: "rotate(-45deg)",
        height: 120,
        width: 120
    },
    singleStepBoxInternalHead: {
        fontWeight: 300
    },
    singleStepBoxInternalText: {
        fontWeight: 300,
        fontSize: 20
    },
}));

export default function GiveThings () {
    const classes = useStyles();

    return (
        <Box style={{maxWidth: 1500, margin: "0 auto"}}>
            <Box className={classes.mainBox}>
                <CardMedia component="img" image={Jersey} className={classes.bgImage}/>
                <Box style={{maxWidth: 750, maxHeight: "100%"}}>
                    <Menu />
                    <Box className={classes.infoBox}>
                        <Typography variant="h4" style={{textAlign: "center"}}>Oddaj rzeczy, których już nie chcesz<br/> POTRZEBUJĄCYM</Typography>
                        <CardMedia component="img" image={Decoration} className={classes.decoration}/>
                        <Typography variant="h4" style={{fontWeight: 300}}>Wystarczą 4 proste kroki:</Typography>
                        <Box className={classes.stepsBox}>
                            <Box className={classes.singleStepBoxExternal}>
                                <Box className={classes.singleStepBoxInternal}>
                                    <Typography variant="h5" className={classes.singleStepBoxInternalHead}>1</Typography>
                                    <Typography className={classes.singleStepBoxInternalText}>Wybierz rzeczy</Typography>
                                </Box>
                            </Box>
                            <Box className={classes.singleStepBoxExternal}>
                                <Box className={classes.singleStepBoxInternal}>
                                    <Typography>2</Typography>
                                    <Typography>Spakuj je w worki</Typography>
                                </Box>
                            </Box>
                            <Box className={classes.singleStepBoxExternal}>
                                <Box className={classes.singleStepBoxInternal}>
                                    <Typography>3</Typography>
                                    <Typography>Wybierz fundację</Typography>
                                </Box>
                            </Box>
                            <Box className={classes.singleStepBoxExternal}>
                                <Box className={classes.singleStepBoxInternal}>
                                    <Typography>4</Typography>
                                    <Typography>Zamów kuriera</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box style={{backgroundColor: "green"}}>
                <Typography>Ważne!</Typography>
                <Typography>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</Typography>
            </Box>
        </Box>

    )
}