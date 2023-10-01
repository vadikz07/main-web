import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Jumbo from "../components/Jumbo";

import Dice from "./utils/DiceRoll";

function UtilsPage(){
    return <>
        <Header />
        <Navbar />
        <Jumbo msg="This is the Utilities Page" />
        <Dice 
            sides="6"
        />
    </>
}

export default UtilsPage