import React from "react";
import Header from "../components/Header";
import NavigationBar from "../components/Navbar";
import Jumbo from "../components/Jumbo";

function NoPage() {
  return (
    <>
      <Header />
      <NavigationBar />
      <Jumbo msg="Page not found" />
    </>
  );
}

export default NoPage;
