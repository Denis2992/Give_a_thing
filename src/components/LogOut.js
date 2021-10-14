import React from "react";
import {Box, Typography} from "@mui/material";
import Menu from "./home_components/Menu";
import Decoration from "../assets/Decoration.svg";
import CustomButton from "./custom_elements/CustomButton";
import {makeStyles} from "@mui/styles";
import {useHistory} from "react-router-dom";
import CustomCardMedia from "./custom_elements/CustomCardMedia";

const useStyles = makeStyles((theme) => ({
    mainBox: {
        maxWidth: 1500,
        margin: "0 auto",
        color: theme.palette.secondary.main
    },
    infoBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 80
    },
    head: {
        textAlign: "center"
    },
    decoration: {
        width: 250,
        height: 30,
        margin: theme.spacing(4, 0, 6, 0)
    }
}));

export default function LogOut () {
    const classes = useStyles();
    const history = useHistory();

    return (
        <Box className={classes.mainBox}>
            <Menu />
            <Box className={classes.infoBox}>
                <Typography variant="h4" className={classes.head}>Wylogowanie nastąpiło<br/> pomyślnie!</Typography>
                <CustomCardMedia component="img" image={Decoration} className={classes.decoration}/>
                <CustomButton onClick={() => history.push("/")}>Strona główna</CustomButton>
            </Box>
        </Box>
    )
}