import React from "react";
import {Box, CardMedia, List, ListItem, Typography} from "@mui/material";
import Decoration from "../../assets/Decoration.svg";
import {makeStyles} from "@mui/styles";
import Foundations from "./Foundations";

const useStyles = makeStyles((theme) => ({
    mainBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: theme.spacing(7, 0, 7, 0),
        color: theme.palette.text.primary,
    },
    image: {
        width: 250,
        height: 30,
        margin: theme.spacing(4, 0)
    },
    list: {
        display: "flex",
        justifyContent: "space-around",
        maxWidth: 850,
        width: "100%"
    },
    listItem: {
        fontSize: 24,
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        border: `0.75px solid transparent`,
        maxWidth: 210,
        maxHeight: 70,
        cursor: "pointer",
        transition: "all 0.2s ease-out",
        "&:hover": {
            borderColor: theme.palette.secondary.main,
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        }
    }
}));

export default function WhoWeHelp () {
    const classes = useStyles();

    return (
        <Box className={classes.mainBox} name="WhoWeHelp">
            <Typography variant="h4">Komu pomagamy?</Typography>
            <CardMedia component="img" image={Decoration} className={classes.image}/>
            <List className={classes.list}>
                <ListItem className={classes.listItem}>Fundacjom</ListItem>
                <ListItem className={classes.listItem}>Organizacjom pozarządowym</ListItem>
                <ListItem className={classes.listItem}>Lokalnym zbiórkom</ListItem>
            </List>
            <Foundations />
        </Box>
    )
}