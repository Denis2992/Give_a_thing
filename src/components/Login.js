import React from "react";
import {Box, CardMedia, TextField, Typography} from "@mui/material";
import Menu from "./home_components/Menu";
import Decoration from "../assets/Decoration.svg";
import CustomButton from "./home_components/CustomButton";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    mainBox: {
        maxWidth: 1500,
        margin: "0 auto",
        color: theme.palette.secondary.main
    },
    loginBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

    },
    decoration: {
        width: 250,
        height: 30,
        margin: theme.spacing(4, 0, 6, 0)
    },
    form: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.secondary.light,
        maxHeight: 230,
        maxWidth: 380,
        height: "100%",
        width: "100%",

    },
    input: {
        maxWidth: 250,
        margin: theme.spacing(2)
    },
    btnBox: {
        maxWidth: 550,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: theme.spacing(5, 2, 2, 2)

    }
}));

export default function Login () {
    const classes = useStyles();

    return (
        <Box className={classes.mainBox}>
            <Menu />
            <Box className={classes.loginBox}>
                <Typography variant="h4" style={{marginTop: 80}}>Zaloguj się</Typography>
                <CardMedia component="img" image={Decoration} className={classes.decoration}/>
                <form className={classes.form}>
                    <TextField
                        id="loginEmail"
                        name="loginEmail"
                        color="secondary"
                        label="Email"
                        variant="standard"
                        className={classes.input}
                    />
                    <TextField
                        id="loginPassword"
                        name="loginPassword"
                        color="secondary"
                        label="Hasło"
                        variant="standard"
                        className={classes.input}
                        style={{marginBottom: 50}}
                    />
                </form>
                <Box className={classes.btnBox}>
                    <Typography style={{fontWeight: 300}}>Załóż konto</Typography>
                    <CustomButton>Zaloguj się</CustomButton>
                </Box>
            </Box>
        </Box>
    )
}