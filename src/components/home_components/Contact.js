import React from "react";
import {Box, CardMedia, Typography, TextField} from "@mui/material";
import Decoration from "../../assets/Decoration.svg";
import FacebookIcon from "../../assets/Facebook.svg";
import InstagramIcon from "../../assets/Instagram.svg";
import Background from "../../assets/Background-Contact-Form.jpg";
import {makeStyles} from "@mui/styles";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const CustomButton = styled(Button)({
    boxShadow: "none",
    textTransform: 'none',
    borderRadius: 0,
    fontSize: 18,
    fontWeight: 300,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    color: "black",
    backgroundColor: 'white',
    borderColor: "#3C3C3C",
    width: 150,
    height: 50,
    '&:hover': {
        backgroundColor: "#F0F1F1",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
    },

});

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
        margin: theme.spacing(4, 0)
    },
    singleLineInput: {
        maxWidth: 250,
        margin: theme.spacing(0, 2, 5, 2)
    },
    multilineInput: {
        maxWidth: 460,
        width: "100%",
        margin: theme.spacing(0, 2)
    },
    btn: {
        alignSelf: "flex-end",
        margin: theme.spacing(5, 1.5, 2, 2)
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
}))

export default function Contact () {
    const classes = useStyles();

    return (
        <Box className={classes.mainBox} name="Contact">
            <Box className={classes.whiteBox}>
                <div style={{width: 900, height: "100%"}} />
                <Box className={classes.dataBox}>
                    <Typography variant="h4">Skontaktuj się z nami</Typography>
                    <CardMedia component="img" image={Decoration} className={classes.decoration}/>
                    <form style={{display: "flex", flexDirection: "column"}}>
                        <div>
                            <TextField
                                id="name"
                                label="Wpisz swoje imię"
                                placeholder="Krzysztof"
                                variant="standard"
                                className={classes.singleLineInput}
                                color="secondary"
                            />
                            <TextField
                                id="email"
                                label="Wpisz swój email"
                                variant="standard"
                                placeholder="abc@xyz.pl"
                                className={classes.singleLineInput}
                                color="secondary"
                            />
                        </div>
                        <TextField
                            id="message"
                            label="Wpisz swoją wiadomość"
                            multiline
                            rows={4}
                            variant="standard"
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            color="secondary"
                            className={classes.multilineInput}
                        />
                        <CustomButton
                            variant="contained"
                            className={classes.btn}
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