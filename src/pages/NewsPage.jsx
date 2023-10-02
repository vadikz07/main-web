import React from "react";
import Header from "../components/Header";
import NavigationBar from "../components/Navbar";
import Jumbo from "../components/Jumbo";
import PicCardLink from "../components/PicCardLink";
import news from "../data/news";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Footer from "../components/Footer";

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
      <div className="body-shown">
        <Container className="my-3">
          <Row>{news.map(generateNews)}</Row>
        </Container>
      </div>
      <Footer />    
    </div>
  );
}

export default NewsPage;
