import React from "react";

//properties of PicCardLink
// title, description, img, altimg , textURL, linkURL

function PicCardLink(props) {
  return (
    <div className="card-container">
      <div className="card-title">
        <h3>{props.title}</h3>
      </div>
      <div className="card-body">
        <div className="card-image">
          <img src={props.img} alt={props.altimg} />
        </div>
        <div className="card-description">
          <p>{props.description}</p>
        </div>
      </div>
      <div className="card-footer">
        <div className="card-links">
          <a href={props.linkURL}>{props.textURL}</a>
        </div>
      </div>
    </div>
  );
}

export default PicCardLink;
