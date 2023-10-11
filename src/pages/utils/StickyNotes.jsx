import React, { useState } from "react";
import StickyNote from "../../components/StickyNote";

function StickyNotes() {
  //   const notes = [<StickyNote text="1" />, <StickyNote text="2" />]; //Lista de objetos sticky
  const [notes, setNotes] = useState([]);

  function generateSticky(valuetext) {
    var newItem = <StickyNote key={notes.length} text={valuetext} />;
    setNotes((prevNotes) => {
      const newNotes = [...prevNotes, newItem];
      console.log(newNotes);
      return newNotes;
    });
  }

  return (
    <div className="sticky-container shadow-box">
      <div className="sticky-input-container">
        <div className="form-add-sticky">
          <input id="form-text" type="text" placeholder="Enter a note here." />
          <button
            onClick={() =>
              generateSticky(document.querySelector("#form-text").value)
            }
            type="submit"
            value="Add"
          >
            Add
          </button>
        </div>
      </div>

      <div className="sticky-notes-container">{notes.map((elem) => elem)}</div>
    </div>
  );
}

export default StickyNotes;
