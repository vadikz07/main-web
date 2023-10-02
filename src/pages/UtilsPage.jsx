import React from "react";
import Header from "../components/Header";
import NavigationBar from "../components/Navbar";
import Jumbo from "../components/Jumbo";
import Footer from "../components/Footer";

import Dice from "./utils/DiceRoll";

function UtilsPage(){
    return <>
        <Header />
        <NavigationBar />
        <Jumbo msg="This is the Utilities Page" />
        <Dice 
            sides="6"
        />
        <Footer />
    </>
}

export default UtilsPage