import React from "react";
import {useStyles} from "./styles";
import CustomTypography from "../custom_elements/CustomTypography";
import CustomCardMedia from "../custom_elements/CustomCardMedia";
import Decoration from "../../assets/Decoration.svg";
import {Box} from "@mui/material";

export default function Confirmation () {
    const classes = useStyles();

    return (
        <Box className={classes.confirmBox}>
            <CustomTypography variant="h4" textAlign="center" className={classes.confirmText}>
                Dziękujemy za przesłanie formularza.<br/> Na maila prześlemy wszelkie<br/> informacje o odbiorze.
            </CustomTypography>
            <CustomTypography variant="h6" textAlign="center" className={classes.mobileConfirmText}>
                Dziękujemy za przesłanie formularza.<br/> Na maila prześlemy wszelkie<br/> informacje o odbiorze.
            </CustomTypography>
            <CustomCardMedia
                component="img"
                image={Decoration}
                style={{width: 250, height: 30, margin: "24px 0"}}/>
        </Box>
    );
}