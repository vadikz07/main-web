import React, { useState } from "react";

function CodeExercisesJournal() {
  const [counters, setCounters] = useState({
    codewars: 0,
    leetcode: 0,
    sololearn: 0,
    w3schools: 0,
  });
  function incrementCounter(website) {
    const updatedCounters = {...counters};
    updatedCounters[website]++;
    setCounters(updatedCounters);
    console.log(updatedCounters);
  }
  return (
    <div className="code-journal-container">
      <div className="labels-container">
        <h6>0</h6>
        <h6>0</h6>
        <h6>0</h6>
        <h6>0</h6>
      </div>
      <div className="increment-buttons-container">
          <button className="butn" onClick={() => incrementCounter("codewars")}>CW</button>
          <button className="butn" onClick={() => incrementCounter("leetcode")}>LC</button>
          <button className="butn" onClick={() => incrementCounter("sololearn")}>SL</button>
          <button className="butn" onClick={() => incrementCounter("w3schools")}>W3</button>
      </div>
    </div>
  );
}

export default CodeExercisesJournal;
