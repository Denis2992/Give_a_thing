import React, {useContext} from "react";
import {
    List,
    ListItem,
    Box, Typography
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import {useHistory} from "react-router-dom";
import {Link} from "react-scroll";
import {CurrentUserContext} from "../../App";
import getFirebase from "../firebase";

const useStyles = makeStyles((theme) => ({
    container : {
        display: "flex",
        flexDirection: "column",
        alignSelf: "flex-end",
        marginRight: theme.spacing(5),
    },
    logRegList: {
        display: "flex",
        alignSelf: "flex-end",
    },
    logRegListItem: {
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        color: theme.palette.text.secondary,
        margin: "0 10px",
        cursor: "pointer",
        fontSize: 14,
        transition: "all 0.2s ease-out",
        border: `0.75px solid transparent`,
        "&:hover" : {
            border: `0.75px solid ${theme.palette.primary.main}`,
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            color: theme.palette.primary.contrastText,
        }
    },
    userName: {
        color: theme.palette.primary.contrastText,
        fontSize: 14,
        minWidth: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    menu: {
        display: "flex",
        alignSelf: "flex-end",
        maxWidth: 750
    },
    menuItem: {
        display: "flex",
        justifyContent: "center",
        color: theme.palette.text.primary,
        fontSize: theme.typography.fontSize,
        margin: "0 10px",
        cursor: "pointer",
        border: `0.75px solid transparent`,
        transition: "all 0.2s ease-out",
        "&:hover": {
            borderColor: theme.palette.secondary.main,
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        }
    }
}));

export default function Menu () {
    const classes = useStyles();
    const history = useHistory();
    const {currentUser, setCurrentUser} = useContext(CurrentUserContext);
    const firebaseInstance = getFirebase();

    const signOut = async () => {
        try {
            if (firebaseInstance) {
                await firebaseInstance.auth().signOut();
            }
            setCurrentUser(null);
            history.push("/wylogowano");
        } catch (error) {
            console.log("error", error);
        }
    };

    return (
        <Box className={classes.container}>
            <List className={classes.logRegList}>
                {currentUser ? (
                   <>
                       <Typography className={classes.userName}>Cześć {currentUser}</Typography>
                       <ListItem
                           className={classes.logRegListItem}
                           style={{width: 93}}
                       >
                           Oddaj rzeczy
                       </ListItem>
                       <ListItem
                           className={classes.logRegListItem}
                           onClick={() => signOut()}
                       >
                           Wyloguj
                       </ListItem>
                   </>
                ) : (
                    <>
                        <ListItem
                            className={classes.logRegListItem}
                            onClick={() => history.push("/logowanie")}
                        >
                            Zaloguj
                        </ListItem>
                        <ListItem
                            className={classes.logRegListItem}
                            style={{minWidth: 102}}
                            onClick={() => history.push("/rejestracja")}
                        >
                            Załóż konto
                        </ListItem>
                    </>
                )}
            </List>
            <List className={classes.menu}>
                <ListItem
                    className={classes.menuItem}
                    onClick={() => history.push("/")}
                >
                    Start
                </ListItem>
                <ListItem
                    className={classes.menuItem}
                >
                    <Link to="SimpleSteps" smooth={true}  duration={500} style={{width: 95}}>
                        O co chodzi?
                    </Link>
                </ListItem>
                <ListItem
                    className={classes.menuItem}

                >
                    <Link to="AboutUs" smooth={true}  duration={600} style={{width: 45}}>
                        O nas
                    </Link>
                </ListItem>
                <ListItem
                    className={classes.menuItem}
                >
                    <Link to="WhoWeHelp" smooth={true}  duration={800} style={{width: 165}}>
                        Fundacja i organizacje
                    </Link>
                </ListItem>
                <ListItem className={classes.menuItem}
                >
                    <Link to="Contact" smooth={true}  duration={800}>
                        Kontakt
                    </Link>

                </ListItem>
            </List>
        </Box>
    );
}