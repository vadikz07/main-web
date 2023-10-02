import React from "react";
import Header from "../components/Header";
import NavigationBar from "../components/Navbar";
import Jumbo from "../components/Jumbo";

function OpenSourceFinds(){
    return <>
        <Header />
        <NavigationBar />
        <Jumbo msg="This is the Open Source Page" />
    </>
}

export default OpenSourceFinds