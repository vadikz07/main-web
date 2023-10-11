import React from "react";

function StickyNote(props) {
  return (
    <div className="sticky-note-group">
      <div className="sticky-check-text-div">
        <button className="btn-check-sticky btn-sticky"/>
        <div className="sticky-text">This is the text</div>
      </div>
       <button className="btn-remove-sticky btn-sticky"></button>
    </div>
  );
}

export default StickyNote;
