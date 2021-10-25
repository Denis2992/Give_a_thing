import React, {useContext} from "react";
import {Box, Button, Divider, Typography} from "@mui/material";
import Decoration from "../../assets/Decoration.svg";
import Icon1 from "../../assets/Icon-1.svg";
import Icon2 from "../../assets/Icon-2.svg";
import Icon3 from "../../assets/Icon-3.svg";
import Icon4 from "../../assets/Icon-4.svg";
import {makeStyles} from "@mui/styles";
import {useHistory} from "react-router-dom";
import CustomCardMedia from "../custom_elements/CustomCardMedia";
import {CurrentUserContext} from "../../App";
import CustomButton from "../custom_elements/CustomButton";

const useStyles = makeStyles((theme) => ({
    mainBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: theme.spacing(7, 0),
        color: theme.palette.text.primary,
        [theme.breakpoints.down(1270)]: {
            margin: theme.spacing(3, 0, 5, 0)
        },

    },
    decoration: {
        width: 250,
        height: 30,
        margin: theme.spacing(4, 0)
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
    boxContainer: {
        backgroundColor: theme.palette.secondary.light,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginBottom: theme.spacing(4),
        [theme.breakpoints.down(750)]: {
            display: "none"
        },
    },
    boxContainerMobile: {
        backgroundColor: theme.palette.secondary.light,
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        padding: theme.spacing(2,0),
        marginBottom: theme.spacing(2),
        [theme.breakpoints.up(750)]: {
            display: "none"
        },
    },
    stepsBox: {
        display: "flex",
        justifyContent: "space-around",
        maxWidth: 1200,
        width: "100%",

    },
    singleStep: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 0,
        width: 180,
        margin: theme.spacing(8, 2, 4, 2)
    },
    singleStepMobile: {
        margin: theme.spacing(4, 2),
        maxWidth: 50,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center"
    },
    icon: {
        width: 70,
        height: 70,
    },
    iconMobile: {
        width: 50,
        height: 50,
    },
    stepContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center"
    },
    divider: {
        width: 70
    },
    btn: {
        maxWidth: 250,
        width: "100%",
        "&:hover": {
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        },
        [theme.breakpoints.down(750)]: {
            display: "none"
        },
    },
    btnMobile: {
        display: "block",
        [theme.breakpoints.up(750)]: {
            display: "none"
        },
    }
}));

export default function SimpleSteps () {
    const classes = useStyles();
    const history = useHistory();
    const {currentUser} = useContext(CurrentUserContext);

    return (
        <Box className={classes.mainBox} name="SimpleSteps">
            <Typography variant="h4" className={classes.head}>Wystarczą 4 proste kroki</Typography>
            <Typography variant="h5" className={classes.headMobile}>Wystarczą 4 proste kroki</Typography>
            <CustomCardMedia component="img" image={Decoration} className={classes.decoration}/>
            <Box className={classes.boxContainer}>
                <Box className={classes.stepsBox}>
                    <Box className={classes.singleStep}>
                        <CustomCardMedia component="img" image={Icon1} className={classes.icon}/>
                        <Box className={classes.stepContent}>
                            <Typography style={{margin: "8px 0"}}>Wybierz rzeczy</Typography>
                            <Divider className={classes.divider}/>
                            <Typography variant="body2" style={{marginTop: 8}}>ubrania, zabawki, sprzęt i inne</Typography>
                        </Box>
                    </Box>
                    <Box className={classes.singleStep}>
                        <CustomCardMedia component="img" image={Icon2} className={classes.icon}/>
                        <Box className={classes.stepContent}>
                            <Typography style={{margin: "8px 0"}}>Spakuj je</Typography>
                            <Divider className={classes.divider}/>
                            <Typography variant="body2" style={{marginTop: 8}}>skorzystaj z worków na śmieci</Typography>
                        </Box>
                    </Box>
                    <Box className={classes.singleStep}>
                        <CustomCardMedia component="img" image={Icon3} className={classes.icon}/>
                        <Box className={classes.stepContent}>
                            <Typography style={{margin: "8px 0"}}>Zdecyduj komu chcesz pomóc</Typography>
                            <Divider className={classes.divider}/>
                            <Typography variant="body2" style={{marginTop: 8}}>wybierz zaufane miejsce</Typography>
                        </Box>
                    </Box>
                    <Box className={classes.singleStep}>
                        <CustomCardMedia component="img" image={Icon4} className={classes.icon}/>
                        <Box className={classes.stepContent}>
                            <Typography style={{margin: "8px 0"}}>Zamów kuriera</Typography>
                            <Divider className={classes.divider}/>
                            <Typography variant="body2" style={{marginTop: 8}}>kurier przyjedzie w dogodnym terminie</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.boxContainerMobile}>
                <Box className={classes.singleStepMobile}>
                    <CustomCardMedia component="img" image={Icon1} className={classes.iconMobile}/>
                    <Typography style={{margin: "8px 0"}}>Wybierz rzeczy</Typography>
                </Box>
                <Box className={classes.singleStepMobile}>
                    <CustomCardMedia component="img" image={Icon2} className={classes.iconMobile}/>
                    <Typography style={{margin: "8px 0"}}>Spakuj je</Typography>
                </Box>
                <Box className={classes.singleStepMobile}>
                    <CustomCardMedia component="img" image={Icon3} className={classes.iconMobile}/>
                    <Typography style={{margin: "8px 0"}}>Zdecyduj komu chcesz pomóc</Typography>
                </Box>
                <Box className={classes.singleStepMobile}>
                    <CustomCardMedia component="img" image={Icon4} className={classes.iconMobile}/>
                    <Typography style={{margin: "8px 0"}}>Zamów kuriera</Typography>
                </Box>

            </Box>
            <Button
                className={classes.btn}
                variant="outlined"
                color="secondary"
                onClick={() => {
                    if (currentUser) {
                        history.push("/oddaj-rzeczy")
                    } else {
                        history.push("/logowanie")
                    }
                }}
            >
                ODDAJ<br/> RZECZY
            </Button>
            <CustomButton
                className={classes.btnMobile}
                onClick={() => {
                    if (currentUser) {
                        history.push("/oddaj-rzeczy")
                    } else {
                        history.push("/logowanie")
                    }
                }}
            >
                Oddaj rzeczy
            </CustomButton>
        </Box>
    );
}