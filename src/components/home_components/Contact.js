import React, {useState} from "react";
import {Box, CardMedia, Typography, TextField} from "@mui/material";
import Decoration from "../../assets/Decoration.svg";
import FacebookIcon from "../../assets/Facebook.svg";
import InstagramIcon from "../../assets/Instagram.svg";
import Background from "../../assets/Background-Contact-Form.jpg";
import {makeStyles} from "@mui/styles";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import CustomButton from "../custom_elements/CustomButton";
import useInput from "../hooks/useInput";
import getFirebase from "../firebase";
import CustomCardMedia from "../custom_elements/CustomCardMedia";
import ReCAPTCHA from "react-google-recaptcha";


const useStyles = makeStyles((theme) => ({
    mainBox: {
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        height: 800,
        marginTop: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
        color: theme.palette.secondary.main
    },
    whiteBox: {
        display: "flex",
        justifyContent: "flex-end",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        height: "100%",
        width: "100%"
    },
    dataBox: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: 750,
        width: "100%",
        margin: theme.spacing(0, 2),
        [theme.breakpoints.up(650)]: {
            margin: theme.spacing(0, 1),
        },
    },
    head: {
        [theme.breakpoints.down(1270)]: {
            display: "none"
        },
    },
    headMobile: {
        [theme.breakpoints.up(1270)]: {
            display: "none"
        },
    },
    decoration: {
        width: 250,
        height: 30,
        margin: theme.spacing(4, 0, 2, 0)
    },
    twoInputsBox: {
        marginBottom: 16,
        [theme.breakpoints.down(650)]: {
            display: "flex",
            flexWrap: "wrap"
        },
    },
    singleLineInput: {
        width: 230,
        height: 80,
        marginRight: theme.spacing(5),
        [theme.breakpoints.down(650)]: {
            width: "100%",
            margin: 0
        },
    },
    multilineInput: {
        maxWidth: 500,
        width: "100%",
        height: 150,

    },
    btnBox: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
        [theme.breakpoints.down(650)]: {
            flexWrap: "wrap",
            justifyContent: "center"
        },
    },
    btn: {
        alignSelf: "flex-end",
        margin: theme.spacing(0, 0, 2, 2),
        [theme.breakpoints.down(650)]: {
            margin: theme.spacing(2, 0),
        },
    },
    footer: {
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        display: "flex",
        justifyContent: "center",
        padding: theme.spacing(0, 2, 3, 2),
        [theme.breakpoints.down(650)]: {
            justifyContent: "space-between"
        },
    },
    icons: {
        width: 30,
        height: 30,
        margin: theme.spacing(0, 1.5)
    },
    sentMsg: {
        color: theme.palette.success.light,
        fontWeight: 600,
        height: 25,
        textAlign: "center",
        marginBottom: theme.spacing(1),

    }
}));

const schema = yup.object({
    name: yup
        .string()
        .min(3, "Imię ma zawierać minimum 3 znaki")
        .matches(/^[A-Za-z]+$/i, "Imię nie może mieć liczb")
        .required("Pole nie może być puste"),
    email: yup
        .string()
        .email("Wprowadź poprawny email")
        .max(50, "Maksymalna długość 50 znaków")
        .required("Pole nie może być puste"),
    message: yup
        .string()
        .max(120, "Maksymalna długość 120 znaków")
        .required("Pole nie może być puste")
}).required();


export default function Contact () {
    const classes = useStyles();
    const [name, resetName] = useInput("");
    const [email, resetEmail] = useInput("");
    const [message, resetMessage] = useInput("");
    const [messageStatus, setMessageStatus] = useState(false);
    const [verified, setVerified] = useState(false);
    const [verifiedError, setVerifiedError] = useState(false);
    const firebase = getFirebase();
    const recaptchaRef = React.createRef();

    const {  control, register, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });

    const onChange = () => {
        setVerified(true);
    }

    const submitForm = async() => {

        if (verified) {
            if (firebase) {
                try {
                    const db = firebase.firestore();
                    const docRef = db.collection("messages").doc();

                    await docRef.set(
                        {
                            name: name.value,
                            email: email.value,
                            message: message.value
                        },
                        {merge: true}
                    );
                    setMessageStatus(true);
                    setTimeout(() => {
                        setMessageStatus(false)
                    }, 2000);
                    setVerified(false);
                    setVerifiedError(false);
                    resetName();
                    resetEmail();
                    resetMessage();
                }catch (error) {
                    console.log("error", error);
                }
            }
        } else {
            setVerifiedError(true);
        }
    };

    return (
        <Box className={classes.mainBox} name="Contact">
            <Box className={classes.whiteBox}>

                <Box className={classes.dataBox}>
                    <Typography variant="h4" className={classes.head}>Skontaktuj się z nami</Typography>
                    <Typography variant="h5" className={classes.headMobile}>Skontaktuj się z nami</Typography>
                    <CustomCardMedia component="img" image={Decoration} className={classes.decoration}/>
                    {messageStatus ? (
                        <Typography
                            className={classes.sentMsg}
                        >
                            Wiadomość została wysłana!
                        </Typography>
                    ) : (
                        <div className={classes.sentMsg}/>
                    )}
                    <form
                        style={{display: "flex", flexDirection: "column"}}
                        onSubmit={handleSubmit(submitForm)}
                    >
                        <Box className={classes.twoInputsBox}>
                            <Controller
                                    name="name"
                                    id="name"
                                    control={control}
                                    render={() => (
                                        <TextField
                                            error={!!errors?.name}
                                            color={errors?.name ? "error" : "secondary"}
                                            label="Wpisz swoje imię"
                                            placeholder="Krzysztof"
                                            variant="standard"
                                            helperText={errors?.name?.message}
                                            className={classes.singleLineInput}
                                            {...register("name")}
                                            {...name}
                                        />
                                    )}
                                />
                                <Controller
                                    name="email"
                                    id="email"
                                    control={control}
                                    render={() => (
                                        <TextField
                                            error={!!errors?.email}
                                            color={errors?.email ? "error" : "secondary"}
                                            label="Wpisz swój email"
                                            variant="standard"
                                            placeholder="abc@xyz.pl"
                                            className={classes.singleLineInput}
                                            helperText={errors?.email?.message}
                                            style={{margin: 0}}
                                            {...register("email")}
                                            {...email}
                                        />
                                    )}
                                />
                        </Box>
                        <Controller
                            name="message"
                            id="message"
                            control={control}
                            render={() => (
                                <TextField
                                    error={!!errors?.message}
                                    color={errors?.message ? "error" : "secondary"}
                                    label="Wpisz swoją wiadomość"
                                    multiline
                                    rows={4}
                                    variant="standard"
                                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                    helperText={errors?.message?.message}
                                    className={classes.multilineInput}
                                    {...register("message")}
                                    {...message}
                                />
                            )}
                        />
                        <Box className={classes.btnBox}>
                            <Box>
                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey="6LdP2LscAAAAAChLhBfXBGbZMPEAUAksy2woB-5n"
                                    onChange={onChange}
                                />
                                {verifiedError ? (
                                    <Typography
                                        variant="caption"
                                        color="error"
                                    >
                                        Potwierdź że nie jesteś robotem
                                    </Typography>
                                ) : null}
                            </Box>
                            <CustomButton
                                variant="contained"
                                className={classes.btn}
                                type="submit"
                            >
                                Wyślij
                            </CustomButton>
                        </Box>
                    </form>
                </Box>
            </Box>
            <Box className={classes.footer}>
                <Typography>Copyright by Coders Lab</Typography>
                <Box style={{display: "flex", position: "absolute", right: "5%"}}>
                    <CardMedia component="img" image={FacebookIcon} className={classes.icons}/>
                    <CardMedia component="img" image={InstagramIcon} className={classes.icons}/>
                </Box>
            </Box>
        </Box>
    )
}