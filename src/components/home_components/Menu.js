import React, {useContext, useState} from "react";
import {
    List,
    ListItem,
    Box,
    Typography,
    Button,
    Drawer,
    Divider
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import {useHistory} from "react-router-dom";
import {Link} from "react-scroll";
import {CurrentUserContext} from "../../App";
import getFirebase from "../firebase";
import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles((theme) => ({
    container : {
        display: "flex",
        flexDirection: "column",
        alignSelf: "flex-end",
        marginRight: theme.spacing(5),
        [theme.breakpoints.down(750)]: {
            width: "100%",
            marginRight: 0
        },
    },
    mobileMenuBox: {
        display: "flex",
        justifyContent: "flex-end",
        width: "100%",
        [theme.breakpoints.down(750)]: {
            justifyContent: "space-between",
        },
    },
    mobileMenu: {
        display: "none",
        alignItems: "center",
        [theme.breakpoints.down(750)]: {
            display: "flex",
            alignItems: "center",
        },
    },
    logRegList: {
        display: "flex",
        alignItems: "center",
    },
    logRegListItem: {
        display: "flex",
        justifyContent: "center !important",
        color: theme.palette.text.secondary,
        margin: "10px 10px",
        padding: "10px 5px !important",
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
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    menu: {
        display: "flex",
        alignSelf: "flex-end",
        maxWidth: 750,
        [theme.breakpoints.down(750)]: {
            display: "none"
        },
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
    const [mobileMenuState, setMobileMenuState] = useState({});

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setMobileMenuState({[anchor]: open });
    };


    const menuList = (anchor) => (
        <Box>
            <List>
                <ListItem
                    className={classes.menuItem}
                    style={{margin: 0}}
                    onClick={() => history.push("/")}
                >
                    Start
                </ListItem>
                <ListItem
                    className={classes.menuItem}
                    style={{margin: 0}}
                >
                    <Link
                        to="SimpleSteps"
                        smooth={true}
                        duration={500}
                        onClick={toggleDrawer(anchor, false)}
                        onKeyDown={toggleDrawer(anchor, false)}
                    >
                        O co chodzi?
                    </Link>
                </ListItem>
                <ListItem
                    className={classes.menuItem}
                    style={{margin: 0}}

                >
                    <Link
                        to="AboutUs"
                        smooth={true}
                        duration={600}
                        onClick={toggleDrawer(anchor, false)}
                        onKeyDown={toggleDrawer(anchor, false)}
                    >
                        O nas
                    </Link>
                </ListItem>
                <ListItem
                    className={classes.menuItem}
                    style={{margin: 0}}
                >
                    <Link
                        to="WhoWeHelp"
                        smooth={true}
                        duration={800}
                        onClick={toggleDrawer(anchor, false)}
                        onKeyDown={toggleDrawer(anchor, false)}
                    >
                        Fundacja i organizacje
                    </Link>
                </ListItem>
                <ListItem
                    className={classes.menuItem}
                    style={{margin: 0}}
                >
                    <Link
                        to="Contact"
                        smooth={true}
                        duration={800}
                        onClick={toggleDrawer(anchor, false)}
                        onKeyDown={toggleDrawer(anchor, false)}
                    >
                        Kontakt
                    </Link>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem className={classes.menuItem} style={{margin: 0}}>
                    Zamknij
                </ListItem>
            </List>
        </Box>
    );


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
            <Box className={classes.mobileMenuBox}>
                <Box className={classes.mobileMenu}>
                    <Button
                        onClick={toggleDrawer("top", true)}
                        color="secondary"
                    >
                        <MenuIcon />
                    </Button>
                    <Drawer
                        anchor="top"
                        open={mobileMenuState["top"]}
                        onClose={toggleDrawer("top", false)}
                        onClick={toggleDrawer(false)}
                    >
                        {menuList("top")}
                    </Drawer>
                </Box>
                <List className={classes.logRegList}>
                    {currentUser ? (
                        <>
                            <Typography className={classes.userName}>Cześć, {currentUser}</Typography>
                            <ListItem
                                className={classes.logRegListItem}
                                style={{width: 100}}
                                onClick={() => history.push("/oddaj-rzeczy")}
                            >
                                Oddaj rzeczy
                            </ListItem>
                            <ListItem
                                className={classes.logRegListItem}
                                style={{width: 75}}
                                onClick={() => signOut()}
                            >
                                Wyloguj
                            </ListItem>
                        </>
                    ) : (
                        <>
                            <ListItem
                                className={classes.logRegListItem}
                                style={{width: 70}}
                                onClick={() => history.push("/logowanie")}
                            >
                                Zaloguj
                            </ListItem>
                            <ListItem
                                className={classes.logRegListItem}
                                style={{width: 90}}
                                onClick={() => history.push("/rejestracja")}
                            >
                                Załóż konto
                            </ListItem>
                        </>
                    )}
                </List>
            </Box>
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