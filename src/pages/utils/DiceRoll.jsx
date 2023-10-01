import React, { useState } from "react";

function Dice(props) {
  const [roll, setRoll] = useState("Pulsa Roll");
  const [sides, setSides] = useState(6);

  function getRandomNum(sides) {
    var num = Math.floor(Math.random() * sides + 1);
    setRoll(num);
    return num;
  }

  function increaseSides() {
    setSides(sides + 1);
  }

  function decreaseSides() {
    setSides(sides - 1);
  }

  return (
    <div>
      <div>
        Roll: {roll} // Sides: {sides}
      </div>
      <div>
        <button onClick={() => getRandomNum(sides)}>Roll!</button>
      </div>
      <div>
        <button onClick={increaseSides}>Increase</button>
        <button onClick={decreaseSides}>Decrease</button>
      </div>
    </div>
  );
}

export default Dice;
