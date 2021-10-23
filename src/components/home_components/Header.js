import React, {useContext} from "react";
import Menu from "./Menu";
import {CardMedia, Box, Typography, Button} from "@mui/material";
import {makeStyles} from "@mui/styles";
import HomeImage from "../../assets/Home-Hero-Image.jpg";
import Decoration from "../../assets/Decoration.svg";
import {useHistory} from "react-router-dom";
import CustomCardMedia from "../custom_elements/CustomCardMedia";
import {CurrentUserContext} from "../../App";
import CustomButton from "../custom_elements/CustomButton";

const useStyles = makeStyles((theme) => ({
    boxComponent: {
        display: "flex",
        justifyContent: "space-between",
        maxWidth: 1500,
        color: theme.palette.text.primary,
        [theme.breakpoints.down(1070)]: {
            backgroundImage: `url(${HomeImage})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left",
            justifyContent: "center"
        },
    },
    img: {
        maxWidth: 1000,
        width: "100%",
        backgroundSize: "contain",
        marginLeft: "-350px",
        [theme.breakpoints.down(1370)]: {
            maxWidth: 900,
        },
        [theme.breakpoints.down(1270)]: {
            maxWidth: 800,
        },
        [theme.breakpoints.down(1170)]: {
            maxWidth: 700,
        },
        [theme.breakpoints.down(1070)]: {
            display: "none"
        },
    },
    headerBox: {
        maxWidth: 750,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        [theme.breakpoints.down(1070)]: {
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            maxWidth: "initial",
        },
    },
    startHelp: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        fontSize: 36,
    },
    startHelpText: {
        textAlign: "center",
        [theme.breakpoints.down(1270)]: {
            display: "none"
        },
    },
    startHelpTextMobile: {
        textAlign: "center",
        [theme.breakpoints.up(1270)]: {
            display: "none"
        },
    },
    decoration: {
        width: 250,
        height: 30,
        alignSelf: "center",
        margin: theme.spacing(3, 0),
        [theme.breakpoints.down(750)]: {
            marginBottom: 0
        },
    },
    btnBox: {
        margin: theme.spacing(3, 0),
        display: "flex",
        justifyContent: "space-around",
        [theme.breakpoints.down(750)]: {
            display: "none"
        },
    },
    btn: {
        maxWidth: 250,
        width: "100%",
        "&:hover": {
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        },
    },
    mobileBtnBox: {
        display: "none",
        [theme.breakpoints.down(750)]: {
            margin: theme.spacing(3, 2),
            display: "flex",
            justifyContent: "space-around",
        },
    },
}));

export default function Header () {
    const classes = useStyles();
    const history = useHistory();
    const {currentUser} = useContext(CurrentUserContext);

    return (
        <Box className={classes.boxComponent}>
            <CardMedia
                className={classes.img}
                component="img"
                image={HomeImage}
            />
            <Box className={classes.headerBox}>
                <Menu />
                <Box className={classes.startHelp}>
                    <Typography variant="h4" className={classes.startHelpText}>Zacznij pomagać!<br/> Oddaj niechciane rzeczy w zaufane ręce</Typography>
                    <Typography variant="h5" className={classes.startHelpTextMobile}>Zacznij pomagać!<br/> Oddaj niechciane rzeczy w zaufane ręce</Typography>
                    <CustomCardMedia
                        component="img"
                        image={Decoration}
                        className={classes.decoration}
                    />
                    <Box
                        className={classes.btnBox}
                    >
                        <Button
                            className={classes.btn}
                            color="secondary"
                            variant="outlined"
                            style={{marginRight: 50}}
                            onClick={() => {
                                if (currentUser) {
                                    history.push("/oddaj-rzeczy")
                                } else {
                                    history.push("/logowanie")
                                }
                            }}
                        >
                            Oddaj<br/> rzeczy
                        </Button>
                        <Button
                            className={classes.btn}
                            color="secondary"
                            variant="outlined"
                            onClick={() => history.push("/logowanie")}
                        >
                            Zorganizuj zbiórkę
                        </Button>
                    </Box>
                    <Box className={classes.mobileBtnBox}>
                        <CustomButton
                            style={{marginRight: 50, height: 60}}
                            onClick={() => {
                                if (currentUser) {
                                    history.push("/oddaj-rzeczy")
                                } else {
                                    history.push("/logowanie")
                                }
                            }}
                        >Oddaj <br/> rzeczy
                        </CustomButton>
                        <CustomButton
                            style={{height: 60}}
                            onClick={() => history.push("/logowanie")}
                        >
                            Zorganizuj zbiórkę
                        </CustomButton>
                    </Box>
                </Box>
            </Box>

        </Box>
    );
}