import React from "react";
import StickyNote from "../../components/StickyNote";

function StickyNotes() {
  function populateStickyNotes() {
    const result = [];
    for (let i = 0; i < 3; i++) {
      result.push(<StickyNote />);
    }
    return result;
  }

  return (
    <div className="sticky-container shadow-box">
      <div className="sticky-input-container">
        <form>
          <input type="text" placeholder="Enter a note here." />
          <input type="submit" value="Add" />
        </form>
      </div>
      
      <div className="sticky-notes-container">{populateStickyNotes()}</div>
    </div>
  );
}

export default StickyNotes;
