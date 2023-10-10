import React, { useState, useEffect } from "react";

function ProgressTimer() {
  const [counter, setCounter] = useState(0);
  const [widthbar, setWidth] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [minutes, setMinutes] = useState(0);

  function handleChange(value) {
    if (value === "-") {
      counter > 0 && setCounter(counter - 1);
      updatePBar(counter - 1);
    } else if (value === "+") {
      counter < 10 && setCounter(counter + 1);
      updatePBar(counter + 1);
    } else {
      console.log("unrecognized value");
    }
  }
  function updatePBar(value) {
    let newWidth = value * 10;
    if (newWidth <= 100) {
      setWidth(newWidth);
    }
  }
  function getColorBar(value) {
    if (value > 80) {
      return "#77dd77";
    } else if (value >= 40) {
      return "#fdfd96";
    } else {
      return "#ff6961";
    }
  }
  function toggleTimer() {
    setIsTimeRunning(!isTimeRunning);
    console.log(isTimeRunning);
  }
  function resetCounter() {
    setIsTimeRunning(false);
    setTimeElapsed(0);
    setMinutes(0);
    console.log("restarting");
  }

  useEffect(() => {
    let interval;
    if (isTimeRunning) {
      interval = setInterval(() => {
        setTimeElapsed((prevTimeElapsed) => {
          if (prevTimeElapsed >= 59) {
            setMinutes((prevMinutes) => prevMinutes + 1);
            return 0;
          } else {
            return prevTimeElapsed + 1;
          }
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isTimeRunning, minutes]);

  return (
    <div className="container-pbar df-ver centered shadow-box">
      <div className="prog-bar">
        <div
          className="prog-bar prog-bar-fill"
          style={{
            width: `${widthbar}%`,
            backgroundColor: getColorBar(widthbar),
            visibility: counter === 0 ? "hidden" : "visible",
          }}
        ></div>
      </div>
      <div className="counter-container">
        <button
          className="butn"
          onClick={() => {
            handleChange("-");
          }}
        >
          -1
        </button>
        <h3>{counter}</h3>
        <button
          className="butn"
          onClick={() => {
            handleChange("+");
          }}
        >
          +1
        </button>
      </div>
      <button className="butn" onClick={toggleTimer}>
        {isTimeRunning ? "Pause" : "Start"}
      </button>
      <button
        className="butn"
        onClick={resetCounter}
        style={
          isTimeRunning
            ? { backgroundColor: "#e46962" }
            : { backgroundColor: "#ddd" }
        }
      >
        Restart timer
      </button>
      <div className="timer-container">
        <>
          Time elapsed:{" "}
          <span className="sec-counter">
            {minutes < 10 ? "0" + minutes : minutes}:
            {timeElapsed < 10 ? "0" + timeElapsed : timeElapsed}
          </span>
        </>
      </div>
    </div>
  );
}

export default ProgressTimer;
