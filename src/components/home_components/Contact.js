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
import CustomButton from "./CustomButton";

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
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        height: "100%",
        width: "100%"
    },
    dataBox: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    decoration: {
        width: 250,
        height: 30,
        margin: theme.spacing(4, 0, 2, 0)
    },
    singleLineInput: {
        maxWidth: 250,
        height: 80,
        margin: theme.spacing(0, 2, 2, 2),

    },
    multilineInput: {
        maxWidth: 460,
        width: "100%",
        height: 150,
        margin: theme.spacing(0, 2)
    },
    btn: {
        alignSelf: "flex-end",
        margin: theme.spacing(3, 1.5, 2, 2)
    },
    footer: {
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        display: "flex",
        justifyContent: "center",
        paddingBottom: theme.spacing(3)
    },
    icons: {
        width: 30,
        height: 30,
        margin: theme.spacing(0, 1.5)
    },
    sentMsg: {
        color: theme.palette.success.light,
        fontWeight: 600,
        height: 55,
        textAlign: "center",
        marginBottom: theme.spacing(1),
    }
}))

export default function Contact () {
    const classes = useStyles();
    const [messageData, setMessageData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [messageStatus, setMessageStatus] = useState(false);

    const handleValueChange = (event) => {
        const {name, value} = event.target;
        setMessageData(prevState => ({...prevState, [name]: value}));
    };

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

    const {  control, register, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => {
        console.log(data);
        setMessageData({
            name: "",
            email: "",
            message: ""
        });
        setMessageStatus(true);
        setTimeout(() => {
            setMessageStatus(false)
        }, 2000);
    };

    return (
        <Box className={classes.mainBox} name="Contact">
            <Box className={classes.whiteBox}>
                <div style={{width: 900, height: "100%"}} />
                <Box className={classes.dataBox}>
                    <Typography variant="h4">Skontaktuj się z nami</Typography>
                    <CardMedia component="img" image={Decoration} className={classes.decoration}/>
                    {messageStatus ? (
                        <Typography
                            className={classes.sentMsg}
                        >
                            Wiadomość została wysłana!<br/>Wkrótce się skontaktujemy
                        </Typography>
                    ) : (
                        <div className={classes.sentMsg}/>
                    )}
                    <form
                        style={{display: "flex", flexDirection: "column"}}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div>
                            {!errors?.name ? (
                                <Controller
                                    name="name"
                                    id="name"
                                    control={control}
                                    render={() => (
                                        <TextField
                                            label="Wpisz swoje imię"
                                            placeholder="Krzysztof"
                                            variant="standard"
                                            className={classes.singleLineInput}
                                            color="secondary"
                                            {...register("name")}
                                            value={messageData.name}
                                            onChange={handleValueChange}
                                        />
                                    )}
                                />
                            ) : (
                                <Controller
                                    name="name"
                                    id="name"
                                    control={control}
                                    render={() => (
                                        <TextField
                                            error
                                            label="Wpisz swoje imię"
                                            placeholder="Krzysztof"
                                            variant="standard"
                                            helperText={errors?.name?.message}
                                            className={classes.singleLineInput}
                                            {...register("name")}
                                            value={messageData.name}
                                            onChange={handleValueChange}
                                        />
                                    )}
                                />
                            )}
                            {!errors?.email ? (
                                <Controller
                                    name="email"
                                    id="email"
                                    control={control}
                                    render={() => (
                                        <TextField
                                            label="Wpisz swój email"
                                            variant="standard"
                                            placeholder="abc@xyz.pl"
                                            className={classes.singleLineInput}
                                            color="secondary"
                                            {...register("email")}
                                            value={messageData.email}
                                            onChange={handleValueChange}
                                        />
                                    )}
                                />
                            ) : (
                                <Controller
                                    name="email"
                                    id="email"
                                    control={control}
                                    render={() => (
                                        <TextField
                                            error
                                            label="Wpisz swój email"
                                            variant="standard"
                                            placeholder="abc@xyz.pl"
                                            className={classes.singleLineInput}
                                            helperText={errors?.email?.message}
                                            {...register("email")}
                                            value={messageData.email}
                                            onChange={handleValueChange}
                                        />
                                    )}
                                />
                            )}
                        </div>
                        {!errors?.message ? (
                            <Controller
                                name="message"
                                id="message"
                                control={control}
                                render={() => (
                                    <TextField
                                        label="Wpisz swoją wiadomość"
                                        multiline
                                        rows={4}
                                        variant="standard"
                                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                        color="secondary"
                                        className={classes.multilineInput}
                                        {...register("message")}
                                        value={messageData.message}
                                        onChange={handleValueChange}
                                    />
                                )}
                            />
                        ) : (
                            <Controller
                                name="message"
                                id="message"
                                control={control}
                                render={() => (
                                    <TextField
                                        error
                                        label="Wpisz swoją wiadomość"
                                        multiline
                                        rows={4}
                                        variant="standard"
                                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                        helperText={errors?.message?.message}
                                        className={classes.multilineInput}
                                        {...register("message")}
                                        value={messageData.message}
                                        onChange={handleValueChange}
                                    />
                                )}
                            />
                        )}
                        <CustomButton
                            variant="contained"
                            className={classes.btn}
                            type="submit"
                        >
                            Wyślij
                        </CustomButton>
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