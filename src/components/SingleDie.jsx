import React from "react";

function SingleDie(props) {
  function dieImage(val) {
    const targetImg = "/imgs/icons/dies/" + val + ".svg"
    return targetImg;
  }
  return (
    <div className="singledie">
      <div className="image">
        <object
          data={dieImage(props.result)}
          aria-label="resultsvg"
          type="image/svg+xml"
          id="result-icon"
          className="svg-icons"
        ></object>
      </div>

      <div className="result-text">{props.result}</div>
    </div>
  );
}

export default SingleDie;
