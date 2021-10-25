import React, {useState} from "react";
import {Box, CardMedia, TextField, Typography} from "@mui/material";
import Menu from "./home_components/Menu";
import Decoration from "../assets/Decoration.svg";
import CustomButton from "./custom_elements/CustomButton";
import {makeStyles} from "@mui/styles";
import useInput from "./hooks/useInput";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import getFirebase from "./firebase";
import {useHistory} from "react-router-dom";

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
        maxWidth: 250,
        maxHeight: 30,
        margin: theme.spacing(4, 0, 6, 0)
    },
    form: {
        width: "100%",
        display:"flex",
        flexDirection: "column",
        alignItems: "center",
        margin: theme.spacing(0, 2)
    },
    formBox: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.secondary.light,
        maxWidth: 380,
        height: "100%",
        width: "100%",


    },
    input: {
        maxWidth: 250,
        height: 75,
    },
    errorBox: {
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    btnBox: {
        maxWidth: 550,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: theme.spacing(0, 2, 2, 2),
        [theme.breakpoints.down(600)]: {
            flexDirection: "column-reverse",
            justifyContent: "center"
        },
    }
}));

const schema = yup.object({
    email: yup
        .string()
        .email("Wprowadź poprawny email")
        .max(50, "Maksymalna długość 50 znaków")
        .required("Wprowadź email"),
    password: yup
        .string()
        .required("Wprowadź hasło")
}).required()



export default function Login () {
    const classes = useStyles();
    const history = useHistory();
    const firebaseInstance = getFirebase();
    const [loginEmail] = useInput("");
    const [loginPassword] = useInput("");
    const [notSentErr, setNotSentErr] = useState(false);
    const {  control, register, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });

    const signIn = async () => {
        try {
            if (firebaseInstance) {
                const user = await firebaseInstance
                    .auth()
                    .signInWithEmailAndPassword(loginEmail.value, loginPassword.value);
                console.log("user", user);
                setNotSentErr(false);
                history.push("/")
            }
        }catch (error) {
            console.log("error", error);
            setNotSentErr(true);
        }
    };


    return (
        <Box className={classes.mainBox}>
            <Menu />
            <Box className={classes.loginBox}>
                <Typography variant="h4" style={{marginTop: 80}}>Zaloguj się</Typography>
                <CardMedia component="img" image={Decoration} className={classes.decoration}/>
                <form className={classes.form} onSubmit={handleSubmit(signIn)}>
                    <Box className={classes.formBox} >
                        <Controller
                            name="loginEmail"
                            control={control}
                            render={() => (
                                <TextField
                                    error={!!errors?.email}
                                    color={errors?.email ? "error" : "secondary"}
                                    label="Email"
                                    variant="standard"
                                    helperText={errors?.email?.message}
                                    className={classes.input}
                                    style={{marginTop: 30}}
                                    {...register("email")}
                                    {...loginEmail}
                                />
                            )}
                        />
                        <Controller
                            name="loginPassword"
                            control={control}
                            render={() => (
                                <TextField
                                    error={!!errors?.password}
                                    color={errors?.password ? "error" : "secondary"}
                                    type="password"
                                    label="Hasło"
                                    variant="standard"
                                    helperText={errors?.password?.message}
                                    className={classes.input}
                                    style={{marginBottom: 30}}
                                    {...register("password")}
                                    {...loginPassword}
                                />
                            )}
                        />
                    </Box>
                    <Box className={classes.errorBox}>
                        {notSentErr ? (
                            <Typography
                                variant="caption"
                                color="error"
                            >
                                Nie poprawny email lub hasło</Typography>
                        ) : null
                        }
                    </Box>
                    <Box className={classes.btnBox}>
                        <Typography
                            style={{fontWeight: 300, cursor: "pointer", marginBottom: 24}}
                            onClick={() => history.push("/rejestracja")}
                        >
                            Załóż konto
                        </Typography>
                        <CustomButton
                            type="submit"
                            style={{marginBottom: 24}}
                        >
                            Zaloguj się
                        </CustomButton>
                    </Box>
                </form>
            </Box>
        </Box>
    )
}