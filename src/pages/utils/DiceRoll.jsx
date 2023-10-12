import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import SingleDie from "../../components/SingleDie";
import { render } from "@testing-library/react";

function Dice(props) {
  const [roll, setRoll] = useState("Tirar dado/s");
  const [results, setResults] = useState([]);
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
    const target = numDies + 1;
    if (target <= 6) {
      setNumDies(numDies + 1);
    }
  }

  function decreaseNumDies() {
    const target = numDies - 1;
    if (target > 0) {
      setNumDies(numDies - 1);
    }
  }

  function rollAllDies(sides) {
    let results = [];
    for (let i = 0; i < numDies; i++) {
      let rng = getRandomNum(sides);
      results.push(rng);
    }
    console.log(results);
    setResults(results); //TODO: Update formatting on results output (roll state)
  }

  function renderDies() {
    console.log("inside renderdies");
    const target = document.querySelector(".dice-results-container");
  }

  return (
    <div className="dice-container shadow-box">
      <div className="dice-header">Lanzador de dados</div>
      <div className="dice-body-container">
        <div>
          <button id="roll-butn" onClick={() => rollAllDies(sides)}>
            Tirar dado/s
          </button>
        </div>
        <div className="row-grouping">
          {/* <div className="dice-body-grouping">
            <p>Numero de caras:</p>
            <h4>{sides}</h4>
            <div className="row-grouping">
              <button onClick={decreaseSides}>-</button>
              <button onClick={increaseSides}>+</button>
            </div>
          </div> */}
          <div className="dice-body-grouping">
            <p>Numero de dados:</p>
            <h4>{numDies}</h4>
            <div className="row-grouping">
              <button onClick={decreaseNumDies}>-</button>
              <button onClick={increaseNumDies}>+</button>
            </div>
          </div>
        </div>
      </div>
      <div className="dice-results-container">
        Resultados:
        <div className="row-grouping">
          {results.map((result, index) => (
            <SingleDie className="singledie" key={index} result={result} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dice;
