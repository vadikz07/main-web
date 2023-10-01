import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Jumbo from "../components/Jumbo";
import PicCardLink from "../components/PicCardLink";

function NewsPage() {
  return (
    <>
      <Header />
      <Navbar />
      <Jumbo msg="This is the Newspage" />
      <PicCardLink
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
