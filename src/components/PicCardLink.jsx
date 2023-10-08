import React from "react";
import Col from "react-bootstrap/Col";

//properties of PicCardLink
// title, description, img, altimg , textURL, linkURL
// postedby, date ,stateevent

function PicCardLink(props) {
  return (
    <Col>
      <div className="">{props.header}</div>
      <div className="">{props.date}</div>
      <div>{props.title}</div>
      <div>{props.description}</div>
      <img className="image-news" src={props.img} />
    </Col>
  );
}

export default PicCardLink;
