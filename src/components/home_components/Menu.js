import React from "react";
import {
    List,
    ListItem,
    Box
} from "@mui/material";
import { makeStyles } from '@mui/styles';



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

    return (
        <Box className={classes.container}>
            <List className={classes.logRegList}>
                <ListItem
                    className={classes.logRegListItem}
                >
                    Zaloguj
                </ListItem>
                <ListItem
                    className={classes.logRegListItem}
                    style={{minWidth: 100}}
                >
                    Załóż konto
                </ListItem>
            </List>
            <List className={classes.menu}>
                <ListItem className={classes.menuItem}>Start</ListItem>
                <ListItem className={classes.menuItem} style={{minWidth:150}}>O co chodzi?</ListItem>
                <ListItem className={classes.menuItem} style={{minWidth:90}}>O nas</ListItem>
                <ListItem className={classes.menuItem} style={{minWidth:220}}>Fundacja i organizacje</ListItem>
                <ListItem className={classes.menuItem}>Kontakt</ListItem>
            </List>
        </Box>
    )
}