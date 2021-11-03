import {makeStyles} from "@mui/styles";
import FormBackground from "../../assets/Background-Form.jpg";


export const useStyles = makeStyles((theme) => ({
    mainBox:{
        backgroundImage: `url(${FormBackground})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        color: theme.palette.secondary.main,
        [theme.breakpoints.down(850)]: {
            backgroundImage: "none",
            backgroundColor: theme.palette.secondary.light
        },
    },
    step: {
        padding: "20px 80px 40px 80px",
        height: 600,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        [theme.breakpoints.down(850)]: {
            height: "initial",
        },
        [theme.breakpoints.down(700)]: {
            padding: "20px 20px 40px 20px",
            height: "initial",
        },
    },
    stepNumber: {
        fontWeight: 300
    },
    head: {
        color: theme.palette.primary.contrastText,
        padding: "50px 0 10px 0",
        [theme.breakpoints.down(700)]: {
            paddingTop: 20,
        },
    },
    formStep: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%"
    },
    radio: {
        margin: "7px 0",
        paddingLeft: 3
    },
    select: {
        maxWidth: 250,
        width: "100%",
    },
    rootMenuItem: {
        "&$selected": {
            backgroundColor: "red",
            color: "red",
            "&:hover": {
                backgroundColor: "red",
            }
        },
        "&:hover": {
            backgroundColor: "red",
        }
    },
    selectUl: {
        "& ul": {
            backgroundColor: theme.palette.secondary.light,
        },
    },
    checkboxGroup: {
        display: "flex",
        flexWrap: "wrap",
        maxWidth: 600,
        marginLeft: "-10px",
        marginTop: 10
    },
    step3Text: {
        color: theme.palette.primary.contrastText,
    },
    step4SingleFormBox: {
        height: 50,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "10px 0",
    },
    formInput: {
        width: 230,
    },
    formHead: {
        margin: "20px 0",
        color: theme.palette.primary.contrastText
    },
    boxGiveThings: {
        display: "flex",
        alignItems: "center",
        margin: "10px 0",
    },
    cardMedia: {
        maxWidth: 35,
        maxHeight: 35,
        marginRight: 15
    },
    wroteData: {
        width: 350,
        display: "flex",
        alignItems: "center",
        margin: "10px 0",
    },
    confirmBox: {
        padding: "20px 80px 40px 80px",
        height: 600,
        maxWidth: 800,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down(600)]: {
            padding: "20px 20px 40px 20px",
        },
    },
    confirmText: {
        [theme.breakpoints.down(600)]: {
            display: "none"
        },
    },
    mobileConfirmText: {
        [theme.breakpoints.up(600)]: {
            display: "none"
        },
    },
}));