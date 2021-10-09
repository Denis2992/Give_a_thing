import React, {useState} from "react";
import {Box, TextField, Typography} from "@mui/material";
import Menu from "./home_components/Menu";
import Decoration from "../assets/Decoration.svg";
import CustomButton from "./home_components/CustomButton";
import {makeStyles} from "@mui/styles";
import useInput from "./home_components/useInput";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import getFirebase from "./firebase";
import {useHistory} from "react-router-dom";
import CustomCardMedia from "./home_components/CustomCardMedia";

const useStyles = makeStyles((theme) => ({
    mainBox: {
        maxWidth: 1500,
        margin: "0 auto",
        color: theme.palette.secondary.main,
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
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
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
        margin: theme.spacing(1),
    }, errorBox: {
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    errorText: {
        color: theme.palette.error.main,
    },
    btnBox: {
        maxWidth: 550,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: theme.spacing(0, 2, 2, 2)

    }
}));

export default function Login () {
    const classes = useStyles();
    const firebaseInstance = getFirebase();
    const regEmail = useInput("");
    const regPassword = useInput("");
    const confirmPassword = useInput("");
    const history = useHistory();
    const [notSentError, setNotSendError] = useState(false);

    const schema = yup.object({
        email: yup
            .string()
            .email("Wprowadź poprawny email")
            .max(50, "Maksymalna długość 50 znaków")
            .required("Wprowadź email"),
        password: yup
            .string()
            .min(6, "Minimalna długość 6 znaków")
            .required("Wprowadź hasło"),
        confPassword: yup
            .string()
            .required("Powtórz hasło")
            .oneOf([yup.ref("password"), null], "Hasła maja byc jednakowe")
    }).required();

    const {  control, register, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });

    const signUp = async () => {

        try {
            if (firebaseInstance) {
                const user = await firebaseInstance.auth().createUserWithEmailAndPassword(regEmail.value, regPassword.value)
                console.log("user", user);
                setNotSendError(false);
                history.push("/");
            }
        }catch (error) {
            console.log("error", error);
            setNotSendError(true);
        }
    };

    return (
        <Box className={classes.mainBox}>
            <Menu />
            <Box className={classes.loginBox}>
                <Typography variant="h4" style={{marginTop: 80}}>Załóż konto</Typography>
                <CustomCardMedia component="img" image={Decoration} className={classes.decoration}/>
                <form className={classes.form} onSubmit={handleSubmit(signUp)}>
                    <Box className={classes.formBox}>
                        {!errors?.email ? (
                            <Controller
                                id="loginEmail"
                                name="loginEmail"
                                control={control}
                                render={() => (
                                    <TextField
                                        color="secondary"
                                        label="Email"
                                        variant="standard"
                                        className={classes.input}
                                        style={{marginTop: 30}}
                                        {...register("email")}
                                        {...regEmail}
                                    />
                                )}
                            />
                        ) : (
                            <Controller
                                id="loginEmail"
                                name="loginEmail"
                                control={control}
                                render={() => (
                                    <TextField
                                        error
                                        label="Email"
                                        variant="standard"
                                        helperText={errors?.email?.message}
                                        className={classes.input}
                                        style={{marginTop: 30}}
                                        {...register("email")}
                                        {...regEmail}
                                    />
                                )}
                            />
                        )}
                        {!errors?.password ? (
                            <Controller
                                id="regPassword"
                                name="regPassword"
                                control={control}
                                render={() => (
                                    <TextField
                                        color="secondary"
                                        label="Hasło"
                                        type="password"
                                        variant="standard"
                                        className={classes.input}
                                        {...register("password")}
                                        {...regPassword}
                                    />
                                )}
                            />
                        ) : (
                            <Controller
                                id="regPassword"
                                name="regPassword"
                                control={control}
                                render={() => (
                                    <TextField
                                        error
                                        label="Hasło"
                                        type="password"
                                        variant="standard"
                                        helperText={errors?.password?.message}
                                        className={classes.input}
                                        {...register("password")}
                                        {...regPassword}
                                    />
                                )}
                            />
                        )}
                        {!errors?.confPassword ? (
                            <Controller
                                id="confirmPassword"
                                name="confirmPassword"
                                control={control}
                                render={() => (
                                    <TextField
                                        color="secondary"
                                        label="Powtórz hasło"
                                        type="password"
                                        variant="standard"
                                        className={classes.input}
                                        style={{marginBottom: 30}}
                                        {...register("confPassword")}
                                        {...confirmPassword}
                                    />
                                )}
                            />
                        ) : (
                            <Controller
                                id="confirmPassword"
                                name="confirmPassword"
                                control={control}
                                render={() => (
                                    <TextField
                                        error
                                        label="Powtórz hasło"
                                        type="password"
                                        variant="standard"
                                        helperText={errors?.confPassword?.message}
                                        className={classes.input}
                                        style={{marginBottom: 30}}
                                        {...register("confPassword")}
                                        {...confirmPassword}
                                    />
                                )}
                            />
                        )}
                    </Box>
                    <Box className={classes.errorBox}>
                        {notSentError ? (
                            <Typography className={classes.errorText}>Email jest zajęty</Typography>
                        ) : null
                        }
                    </Box>
                    <Box className={classes.btnBox}>
                        <Typography
                            style={{fontWeight: 300, cursor: "pointer"}}
                            onClick={() => history.push("/logowanie")}
                        >
                            Zaloguj się</Typography>
                        <CustomButton type="submit">Załóż konto</CustomButton>
                    </Box>
                </form>
            </Box>
        </Box>
    )
}