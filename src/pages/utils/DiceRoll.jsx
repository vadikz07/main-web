import React, { useState } from "react";

function Dice(props) {
  const [roll, setRoll] = useState("Pulsa Roll");
  const possibleDies = [4, 6, 8, 10, 12, 20];
  const [pointer, setPointer] = useState(1);
  const [sides, setSides] = useState(possibleDies[pointer]);

  function getRandomNum(sides) {
    var num = Math.floor(Math.random() * sides + 1);
    setRoll(num);
    return num;
  }

  function increaseSides() {
    if (pointer < possibleDies.length - 1) {
      setPointer((elem) => elem + 1);
    } else {
      console.log("already at max sides");
    }
    setSides(possibleDies[pointer]);
  }

  function decreaseSides() {
    if (pointer > 0) {
      setPointer((elem) => elem - 1);
    } else {
      console.log("already at min sides");
    }
    setSides(possibleDies[pointer]);
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
        <button onClick={decreaseSides}>Decrease</button>
        <button onClick={increaseSides}>Increase</button>
      </div>
    </div>
  );
}

export default Dice;
