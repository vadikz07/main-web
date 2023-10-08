import React from "react";
import Header from "../components/Header";
import NavigationBar from "../components/Navbar";
import Jumbo from "../components/Jumbo";
import Footer from "../components/Footer";

function OpenSourceFinds(){
    return <>
        <Header />
        <div className="body-shown">
            <NavigationBar />
            <Jumbo msg="This is the Open Source Page" />
        </div>
        <Footer />
    </>
}

export default OpenSourceFinds