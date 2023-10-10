import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

function CodeExercisesJournal() {
  //Inicializar variables a 0
  const initialCounters = {
    codewars: 0,
    leetcode: 0,
    sololearn: 0,
    w3schools: 0,
  };

  const [counters, setCounters] = useState(initialCounters);
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
    updatedCounters[website]++;
    setCounters(updatedCounters);
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

  return (
    <div className="code-journal-container shadow-box">
      <div className="labels-container">
        <h6>{counters["codewars"]}</h6>
        <h6>{counters["leetcode"]}</h6>
        <h6>{counters["sololearn"]}</h6>
        <h6>{counters["w3schools"]}</h6>
      </div>
      <div className="increment-buttons-container">
          <button className="butn icon-web" onClick={() => incrementCounter("codewars")}>
            <object data="/imgs/icons/codewars.svg" type="image/svg+xml" id="cw-icon" className="svg-icons"></object>
          </button>
        <button className="butn icon-web" onClick={() => incrementCounter("leetcode")}>
          <object data="/imgs/icons/leetcode.svg" type="image/svg+xml" id="lc-icon" className="svg-icons"></object>
        </button>
        <button className="butn icon-web" onClick={() => incrementCounter("sololearn")}>
          <object data="/imgs/icons/sololearn.svg" type="image/svg+xml" id="sl-icon" className="svg-icons"></object>
        </button>
        <button className="butn icon-web" onClick={() => incrementCounter("w3schools")}>
          <object data="/imgs/icons/w3schools.svg" type="image/svg+xml" id="w3-icon" className="svg-icons"></object>
        </button>
      </div>
      <div className="reset-container">
        <button className="butn" onClick={() => resetCounter()}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default CodeExercisesJournal;
