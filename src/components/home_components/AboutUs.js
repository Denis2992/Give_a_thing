import React from "react";
import {Box, CardMedia, Typography} from "@mui/material";
import Decoration from "../../assets/Decoration.svg";
import Signature from "../../assets/Signature.svg";
import PeopleImage from "../../assets/People.jpg";
import {makeStyles} from "@mui/styles";
import CustomCardMedia from "../custom_elements/CustomCardMedia";

const useStyles = makeStyles((theme) => ({
    mainBox: {
        display: "flex",
        overflow: "hidden",
        color: theme.palette.text.primary,
        [theme.breakpoints.down(1000)]: {
            flexWrap: "wrap"
        },
    },
    infoBox: {
        maxWidth: 750,
        width: "100%",
        backgroundColor: theme.palette.secondary.light,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: theme.spacing(2),
        [theme.breakpoints.down(1000)]: {
            maxWidth: "initial",
            width: "100%"
        },
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
    decoration: {
        width: 250,
        height: 30,
        margin: theme.spacing(3, 0, 4, 0)
    },
    description: {
        maxWidth: 570,
        textAlign: "center",
        [theme.breakpoints.down(1270)]: {
            display: "none"
        },
    },
    descriptionMobile: {
        textAlign: "center",
        [theme.breakpoints.up(1270)]: {
            display: "none"
        },
    },
    signature: {
        width: 210,
        height: 150,
    },
    image: {
        maxWidth: 950,
        marginRight: "-200px",
        [theme.breakpoints.down(1370)]: {
            maxWidth: 850
        },
        [theme.breakpoints.down(1270)]: {
            maxWidth: 750
        },
        [theme.breakpoints.down(1000)]: {
            maxWidth: "initial",
            width: "100%"
        },
    },

}));

export default function AboutUs () {
    const classes = useStyles();

    return (
        <Box className={classes.mainBox} name="AboutUs">
            <Box className={classes.infoBox}>
                <Typography variant="h4" className={classes.head}>O nas</Typography>
                <Typography variant="h5" className={classes.headMobile}>O nas</Typography>
                <CustomCardMedia component="img" image={Decoration} className={classes.decoration}/>
                <Typography variant="h5" className={classes.description}>
                    Nori grape silver beet broccoli kombu beet greens fava
                    bean potato quandong celery. Bunya nuts black-eyed pea
                    prairie turnip leek lentil turnip greens parsnip.
                </Typography>
                <Typography variant="h6" className={classes.descriptionMobile}>
                    Nori grape silver beet broccoli kombu beet greens fava
                    bean potato quandong celery. Bunya nuts black-eyed pea
                    prairie turnip leek lentil turnip greens parsnip.
                </Typography>
                <Box style={{display: "flex", justifyContent:"flex-end", width: "100%", margin: "20px 100px 0 0" }}>
                    <CustomCardMedia component="img" image={Signature} className={classes.signature}/>
                </Box>
            </Box>
            <CardMedia component="img" image={PeopleImage} className={classes.image}/>
        </Box>
    );
}