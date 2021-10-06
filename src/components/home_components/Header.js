import React from "react";
import Menu from "./Menu";
import {CardMedia, Box, Typography, Button} from "@mui/material";
import {makeStyles} from "@mui/styles";
import HomeImage from "../../assets/Home-Hero-Image.jpg";
import Decoration from "../../assets/Decoration.svg";
import {useHistory} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    boxComponent: {
        display: "flex",
        justifyContent: "space-between",
        color: theme.palette.text.primary
    },
    img: {
        maxWidth: 1000,
        backgroundSize: "contain",
        marginLeft: "-350px"
    },
    headerBox: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    startHelp: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    startHelpText: {
        textAlign: "center",
    },
    decoration: {
        width: 250,
        height: 30,
        alignSelf: "center",
        margin: theme.spacing(3, 0)
    },
    btnBox: {
        display: "flex",
        justifyContent: "space-around",
    },
    btn: {
        marginTop: theme.spacing(3),
        maxWidth: 250,
        width: "100%",
        "&:hover": {
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        }
    }
}));

export default function Header () {
    const classes = useStyles();
    const history = useHistory();

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
                    <CardMedia
                        component="img"
                        image={Decoration}
                        className={classes.decoration}
                    />
                    <Box className={classes.btnBox}>
                        <Button
                            className={classes.btn}
                            color="secondary"
                            variant="outlined"
                            onClick={() => history.push("/logowanie")}
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
                </Box>
            </Box>

        </Box>
    );
}