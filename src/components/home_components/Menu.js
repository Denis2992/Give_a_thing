import React from "react";
import {
    List,
    ListItem,
    Box
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import {useHistory} from "react-router-dom";
import {Link} from "react-scroll";


const useStyles = makeStyles((theme) => ({
    container : {
        display: "flex",
        flexDirection: "column",
        alignSelf: "flex-end",
        marginTop: theme.spacing(5),
        marginRight: theme.spacing(12)
    },
    logRegList: {
        display: "flex",
        alignSelf: "flex-end",
        maxWidth: 250
    },
    logRegListItem: {
        display: "flex",
        justifyContent: "center",
        color: theme.palette.text.secondary,
        padding: "9px 10px",
        margin: "0 10px",
        cursor: "pointer",
        fontSize: 14,
        transition: "all 0.2s ease-out",
        border: `0.75px solid transparent`,
        "&:hover" : {
            border: `0.75px solid ${theme.palette.primary.main}`,
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        }
    },
    menu: {
        display: "flex",

    },
    menuItem: {
        display: "flex",
        justifyContent: "center",
        color: theme.palette.text.primary,
        fontSize: theme.typography.fontSize,
        padding: "9px 20px",
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

    return (
        <Box className={classes.container}>
            <List className={classes.logRegList}>
                <ListItem
                    className={classes.logRegListItem}
                    onClick={() => history.push("/logowanie")}
                >
                    Zaloguj
                </ListItem>
                <ListItem
                    className={classes.logRegListItem}
                    style={{minWidth: 100}}
                    onClick={() => history.push("/rejestracja")}
                >
                    Załóż konto
                </ListItem>
            </List>
            <List className={classes.menu}>
                <ListItem className={classes.menuItem}>Start</ListItem>
                <ListItem
                    className={classes.menuItem}
                    style={{minWidth:150}}
                >
                    <Link to="SimpleSteps" smooth={true}  duration={500}>
                        O co chodzi?
                    </Link>
                </ListItem>
                <ListItem
                    className={classes.menuItem}
                    style={{minWidth:90}}
                >
                    <Link to="AboutUs" smooth={true}  duration={600}>
                        O nas
                    </Link>
                </ListItem>
                <ListItem
                    className={classes.menuItem}
                    style={{minWidth:220}}
                >
                    <Link to="WhoWeHelp" smooth={true}  duration={800}>
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