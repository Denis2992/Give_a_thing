import React from "react";
import {Box, Divider, Typography, Pagination} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    mainBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: theme.palette.text.primary,
        width: "100%"
    },
    infoText: {
        maxWidth: 600,
        textAlign: "center",
        margin: theme.spacing(7, 0, 4, 0),
        fontSize: 22
    },
    itemBox: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: theme.spacing(3, 0)
    }
}));

export default function Foundations () {
    const classes = useStyles();
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <Box className={classes.mainBox}>
            <Typography className={classes.infoText}>
                W naszej bazie znajdziesz listę zweryfikowanych Fundacji,
                z którymi współpracujemy. Możesz sprawdzić czym się zajmują,
                komu pomagają i czego potrzebują.
            </Typography>
            <Box style={{maxWidth: 1200, width: "100%"}}>
                {page === 1 ? (
                    <>
                        <Box className={classes.itemBox}>
                            <Box>
                                <Typography variant="subtitle1">1Fundacja “Dbam o Zdrowie”</Typography>
                                <Typography variant="subtitle2" style={{fontStyle: "italic"}}>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</Typography>
                            </Box>
                            <Typography variant="subtitle2" style={{marginRight: "2rem", fontStyle: "italic"}}>ubrania, jedzenie, sprzęt AGD, meble, zabawki</Typography>
                        </Box>
                        <Divider />
                        <Box className={classes.itemBox}>
                            <Box>
                                <Typography variant="subtitle1">1Fundacja “Dla dzieci”</Typography>
                                <Typography variant="subtitle2" style={{fontStyle: "italic"}}>Cel i misja: Pomoc dzieciom z ubogich rodzin.</Typography>
                            </Box>
                            <Typography variant="subtitle2" style={{marginRight: "2rem", fontStyle: "italic"}}>ubrania, meble, zabawki</Typography>
                        </Box>
                        <Divider />
                        <Box className={classes.itemBox}>
                            <Box>
                                <Typography variant="subtitle1">1Fundacja “Bez domu”</Typography>
                                <Typography variant="subtitle2" style={{fontStyle: "italic"}}>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</Typography>
                            </Box>
                            <Typography variant="subtitle2" style={{marginRight: "2rem", fontStyle: "italic"}}>ubrania, jedzenie, ciepłe koce</Typography>
                        </Box>
                    </>
                ) : null}
                {page === 2 ? (
                    <>
                        <Box className={classes.itemBox}>
                            <Box>
                                <Typography variant="subtitle1">2Fundacja “Dbam o Zdrowie”</Typography>
                                <Typography variant="subtitle2" style={{fontStyle: "italic"}}>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</Typography>
                            </Box>
                            <Typography variant="subtitle2" style={{marginRight: "2rem", fontStyle: "italic"}}>ubrania, jedzenie, sprzęt AGD, meble, zabawki</Typography>
                        </Box>
                        <Divider />
                        <Box className={classes.itemBox}>
                            <Box>
                                <Typography variant="subtitle1">2Fundacja “Dla dzieci”</Typography>
                                <Typography variant="subtitle2" style={{fontStyle: "italic"}}>Cel i misja: Pomoc dzieciom z ubogich rodzin.</Typography>
                            </Box>
                            <Typography variant="subtitle2" style={{marginRight: "2rem", fontStyle: "italic"}}>ubrania, meble, zabawki</Typography>
                        </Box>
                        <Divider />
                        <Box className={classes.itemBox}>
                            <Box>
                                <Typography variant="subtitle1">2Fundacja “Bez domu”</Typography>
                                <Typography variant="subtitle2" style={{fontStyle: "italic"}}>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</Typography>
                            </Box>
                            <Typography variant="subtitle2" style={{marginRight: "2rem", fontStyle: "italic"}}>ubrania, jedzenie, ciepłe koce</Typography>
                        </Box>
                    </>
                ) : null}
                {page === 3 ? (
                    <>
                        <Box className={classes.itemBox}>
                            <Box>
                                <Typography variant="subtitle1">3Fundacja “Dbam o Zdrowie”</Typography>
                                <Typography variant="subtitle2" style={{fontStyle: "italic"}}>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</Typography>
                            </Box>
                            <Typography variant="subtitle2" style={{marginRight: "2rem", fontStyle: "italic"}}>ubrania, jedzenie, sprzęt AGD, meble, zabawki</Typography>
                        </Box>
                        <Divider />
                        <Box className={classes.itemBox}>
                            <Box>
                                <Typography variant="subtitle1">3Fundacja “Dla dzieci”</Typography>
                                <Typography variant="subtitle2" style={{fontStyle: "italic"}}>Cel i misja: Pomoc dzieciom z ubogich rodzin.</Typography>
                            </Box>
                            <Typography variant="subtitle2" style={{marginRight: "2rem", fontStyle: "italic"}}>ubrania, meble, zabawki</Typography>
                        </Box>
                        <Divider />
                        <Box className={classes.itemBox}>
                            <Box>
                                <Typography variant="subtitle1">3Fundacja “Bez domu”</Typography>
                                <Typography variant="subtitle2" style={{fontStyle: "italic"}}>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</Typography>
                            </Box>
                            <Typography variant="subtitle2" style={{marginRight: "2rem", fontStyle: "italic"}}>ubrania, jedzenie, ciepłe koce</Typography>
                        </Box>
                    </>
                ) : null}
            </Box>
            <Pagination
                count={3}
                page={page}
                onChange={handleChange}
                hidePrevButton
                hideNextButton
                variant="outlined"
                shape="rounded"
                style={{marginTop: "3rem"}}
            />
        </Box>
    );
}