import React, { useEffect, useState } from "react";
import "./styles.css";

const ProgressBar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setAnimatedProgress(progress);
    }, 100);
  });

  return (
    <>
      <div className="outer">
        <div
          className="inner"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemax={100}
          aria-valuemin={0}
          style={{
            // width: ` ${progress}%`,
            transform: `translate(${animatedProgress - 100}%)`,
            color: animatedProgress < 5 ? "green" : "white",
          }}
        >
          {progress} %
        </div>
      </div>
    </>
  );
};

export default function index() {
  const bars = [0, 5, 20, 40, 80, 100];

  return (
    <>
      <div className="container">
        <div style={{ fontSize: "40px", fontWeight: "bold", padding: "15px " }}>
          Progress Bar
        </div>
        {bars.map((index) => (
          <ProgressBar key={index} progress={index} />
        ))}
      </div>
    </>
  );
}
