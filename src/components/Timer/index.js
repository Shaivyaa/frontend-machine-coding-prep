import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setSeconds(0);
  };

  return (
    <div>
      <h1>Timer</h1>
      <p>Seconds: {seconds}</p>
      <button onClick={handleStart} disabled={isActive}>
        Start
      </button>
      <button onClick={handleStop} disabled={!isActive}>
        Stop
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Timer;
