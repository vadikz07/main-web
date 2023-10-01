import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Jumbo from "../components/Jumbo";

function NoPage(){
    return <>
        <Header />
        <Navbar />
        <Jumbo msg="Page not found" />
    </>
}

export default NoPage