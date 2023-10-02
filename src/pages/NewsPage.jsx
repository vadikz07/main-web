import React from "react";
import Header from "../components/Header";
import NavigationBar from "../components/Navbar";
import Jumbo from "../components/Jumbo";
import PicCardLink from "../components/PicCardLink";
import Accordion from "react-bootstrap/Accordion";
import news from "../data/news";

function generateNews(props) {
  return (
    <PicCardLink
      header={props.header}
      stateevent="0"
      title={props.title}
      date={props.date}
      description={props.description}
      img={props.img}
      altimg={props.altimg}
      textURL={props.textURL}
      linkURL={props.linkURL}
    />
  );
}

function NewsPage() {
  return (
    <div>
      <Header />
      <NavigationBar />
      {/* <Jumbo msg="This is the Newspage" /> */}
      <div className="news-container m-4">
          {news.map(generateNews)}
      </div>
    </div>
  );
}

export default NewsPage;
