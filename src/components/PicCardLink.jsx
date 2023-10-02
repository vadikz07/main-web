import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';


//properties of PicCardLink
// title, description, img, altimg , textURL, linkURL
// postedby, date ,stateevent

function PicCardLink(props) {
  return (
    <Col>
      <Card bg="dark my-2" text="light" border="primary">
        <Card.Header className="news-title-date gradient-background">
          <div className="">{props.header}</div>
          <div className="">{props.date}</div>
          </Card.Header>
        <Card.Body className="body-news pt-1">
          <div className="news-left-content">
            <Card.Title style={{"color":"deepskyblue"}}>{props.title}</Card.Title>
            <Card.Text>
              {props.description}
            </Card.Text>
          </div>
          <div className="news-right-image">
            <img className="image-news" src={props.img}/>
          </div>
        </Card.Body>
        <Card.Footer className="news-link">
          <Button className="link"href={props.linkURL}>{props.textURL}</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
}

export default PicCardLink;
