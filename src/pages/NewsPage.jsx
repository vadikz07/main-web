import React from "react";
import Header from "../components/Header";
import NavigationBar from "../components/Navbar";
import Jumbo from "../components/Jumbo";
import PicCardLink from "../components/PicCardLink";

function NewsPage() {
  return (
    <>
      <Header />
      <NavigationBar />
      <Jumbo msg="This is the Newspage" />
      <PicCardLink
        postedby="Juan"
        date="1/10/23"
        title="NewsTest Card"
        description="This is a test description for a news card"
        img="http://img.jpg"
        altimg="Alternative text to photo"
        linkURL="http://www.google.es"
        textURL="Link a google"
      />
    </>
  );
}

export default NewsPage;
