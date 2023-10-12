import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function Dice(props) {
  const [roll, setRoll] = useState("Tirar dado/s");
  const [sides, setSides] = useState(6);
  const [numDies, setNumDies] = useState(2);

  function getRandomNum(sides) {
    var num = Math.floor(Math.random() * sides + 1);
    setRoll(num);
    return num;
  }

  function increaseSides() {
    if (sides < 20) {
      setSides(sides + 2);
    }
  }

  function decreaseSides() {
    if (sides > 4) {
      setSides(sides - 2);
    }
  }

  function increaseNumDies() {
    setNumDies(numDies + 1);
  }

  function decreaseNumDies() {
    setNumDies(numDies - 1);
  }

  function rollAllDies(sides) {
    let results = [];
    for (let i = 0; i < numDies; i++) {
      let rng = getRandomNum(sides);
      results.push(rng);
    }
    console.log(results);
    setRoll(results); //TODO: Update formatting on results output (roll state)
  }

  return (
    <div className="dice-container shadow-box">
      <div className="dice-header">Lanzador de dados</div>
      <div className="dice-body-container">
        Caras: {sides} || Numero de dados: {numDies}
        <div>
          <button id="roll-butn" onClick={() => rollAllDies(sides)}>Tirar dado/s</button>
        </div>
        <div className="row-grouping">
          <div className="dice-body-grouping">
            <p>Numero de caras:</p>
            <div className="row-grouping">
              <button onClick={decreaseSides}>-</button>
              <button onClick={increaseSides}>+</button>
            </div>
          </div>
          <div className="dice-body-grouping">
            <p>Numero de dados</p>
            <div className="row-grouping">
              <button onClick={decreaseNumDies}>-</button>
              <button onClick={increaseNumDies}>+</button>
            </div>
          </div>
        </div>
      </div>
      <div className="dice-results-container">
        <div>Resultados: {roll}</div>
      </div>
    </div>
  );
}

export default Dice;
