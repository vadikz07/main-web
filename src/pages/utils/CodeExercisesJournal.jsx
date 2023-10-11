import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Blip from "../../components/Blip";

function CodeExercisesJournal() {
  //Inicializar variables a 0
  const initialCounters = {
    codewars: 0,
    leetcode: 0,
    sololearn: 0,
    w3schools: 0,
  };

  const [counters, setCounters] = useState(initialCounters);
  const [maxValCounter, setMaxValCounter] = useState(4);
  // Intentar cargar los valores de las cookies al arrancar el componente.
  useEffect(() => {
    const savedCounters = Cookies.get("counters");
    if (savedCounters) {
      setCounters(JSON.parse(savedCounters));
    }
  }, []);

  // Actualizar valores de cookies si hay cambios en counters
  useEffect(() => {
    Cookies.set("counters", JSON.stringify(counters));
  }, [counters]);

  function incrementCounter(website) {
    const updatedCounters = { ...counters };
    if (updatedCounters[website] < maxValCounter) {
      updatedCounters[website]++;
    } else {
      console.log("max value reached");
    }
    setCounters(updatedCounters);
  }
  function modifyMaxValue(value) {
      setMaxValCounter((prevValue) => prevValue + value);
  }

  function resetCounter() {
    if (window.confirm("Are you sure do you want to reset the counters?")) {
      console.log("pressed ok");
      const resetValues = {};
      // Crea un nuevo objeto con las keys de initial counters
      for (const key in initialCounters) {
        resetValues[key] = 0;
      }
      // al terminar actualiza el valor de counters, con el generado.
      setCounters(resetValues);
      // y lo guarda en cookies
      Cookies.set("counters", JSON.stringify(counters));
    } else {
      console.log("pressed cancel");
    }
  }
  function renderBlips(value, colorpassed) {
    const counter = counters[value];
    const output = [];
    for (let i = 0; i < counter; i++) {
      output.push(<Blip color={colorpassed} />);
    }
    return output;
  }

  return (
    <div className="code-journal-container shadow-box">
      <div className="labels-container">
        <div className="blip-container">
          <div className="blip-ind-container" style={{height:maxValCounter*15}}>
            {renderBlips("codewars", "#f05656")}
          </div>
          <div className="blip-ind-container" style={{height:maxValCounter*15}}>
            {renderBlips("leetcode", "#e7a41f")}
          </div>
          <div className="blip-ind-container" style={{height:maxValCounter*15}}>
            {renderBlips("sololearn", "#32b7e9")}
          </div>
          <div className="blip-ind-container" style={{height:maxValCounter*15}}>
            {renderBlips("w3schools", "#04aa6d")}
          </div>
        </div>
      </div>
      <div className="increment-buttons-container">
        <button
          className="butn icon-web"
          onClick={() => incrementCounter("codewars")}
        >
          <object
            data="/imgs/icons/codewars.svg"
            type="image/svg+xml"
            id="cw-icon"
            className="svg-icons"
          ></object>
        </button>
        <button
          className="butn icon-web"
          onClick={() => incrementCounter("leetcode")}
        >
          <object
            data="/imgs/icons/leetcode.svg"
            type="image/svg+xml"
            id="lc-icon"
            className="svg-icons"
          ></object>
        </button>
        <button
          className="butn icon-web"
          onClick={() => incrementCounter("sololearn")}
        >
          <object
            data="/imgs/icons/sololearn.svg"
            type="image/svg+xml"
            id="sl-icon"
            className="svg-icons"
          ></object>
        </button>
        <button
          className="butn icon-web"
          onClick={() => incrementCounter("w3schools")}
        >
          <object
            data="/imgs/icons/w3schools.svg"
            type="image/svg+xml"
            id="w3-icon"
            className="svg-icons"
          ></object>
        </button>
      </div>
      <div className="control-buttons-container">
        <div className="max-amount-container">
          <button onClick={() => modifyMaxValue(-1)} className="butn">
            Dec
          </button>
          <h6>Max amount: {maxValCounter}</h6>
          <button onClick={() => modifyMaxValue(1)} className="butn">
            Inc
          </button>
        </div>
        <button className="butn" onClick={() => resetCounter()}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default CodeExercisesJournal;
