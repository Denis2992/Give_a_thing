import React from "react";
import {Box, CardMedia, Typography} from "@mui/material";
import Decoration from "../../assets/Decoration.svg";
import Signature from "../../assets/Signature.svg";
import PeopleImage from "../../assets/People.jpg";
import {makeStyles} from "@mui/styles";
import CustomCardMedia from "./CustomCardMedia";

const useStyles = makeStyles((theme) => ({
    mainBox: {
        display: "flex",
        overflow: "hidden",
        margin: theme.spacing(2)
    },
    infoBox: {
        maxWidth: 750,
        width: "100%",
        backgroundColor: theme.palette.secondary.light,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    head: {
        color: theme.palette.text.primary
    },
    decoration: {
        width: 250,
        height: 30,
        margin: theme.spacing(3, 0, 4, 0)
    },
    description: {
        maxWidth: 570,
        textAlign: "center",
        color: theme.palette.text.primary
    },
    signature: {
        width: 210,
        height: 150,
        margin: "40px -300px 0 0"
    },
    image: {
        maxWidth: 950,
        marginRight: "-200px"
    }
}));

export default function AboutUs () {
    const classes = useStyles();

    return (
        <Box className={classes.mainBox} name="AboutUs">
            <Box className={classes.infoBox}>
                <Typography variant="h4" className={classes.head}>O nas</Typography>
                <CustomCardMedia component="img" image={Decoration} className={classes.decoration}/>
                <Typography variant="h5" className={classes.description}>
                    Nori grape silver beet broccoli kombu beet greens fava
                    bean potato quandong celery. Bunya nuts black-eyed pea
                    prairie turnip leek lentil turnip greens parsnip.
                </Typography>
                <CustomCardMedia component="img" image={Signature} className={classes.signature}/>
            </Box>
            <CardMedia component="img" image={PeopleImage} className={classes.image}/>
        </Box>
    );
}