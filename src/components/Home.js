import React from "react";
import Header from "./home_components/Header";
import ThreeColumnsInfo from "./home_components/ThreeColumnsInfo";
import SimpleSteps from "./home_components/SimpleSteps";
import AboutUs from "./home_components/AboutUs";
import Contact from "./home_components/Contact";
import WhoWeHelp from "./home_components/WhoWeHelp";
import {Box} from "@mui/material";

export default function Home () {
    return (
        <Box style={{maxWidth: 1500, margin: "0 auto"}}>
            <Header />
            <ThreeColumnsInfo />
            <SimpleSteps />
            <AboutUs />
            <WhoWeHelp />
            <Contact />
        </Box>
    );
}