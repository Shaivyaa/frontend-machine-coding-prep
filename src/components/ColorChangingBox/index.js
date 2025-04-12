import React, { useEffect, useState } from "react";

export default function ColorChangingBox() {
  const [color, setColor] = useState("red");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColor((prev) => {
        switch (prev) {
          case "red":
            return "green";
          case "green":
            return "blue";
          case "blue":
            return "red";
          default:
            return "red";
        }
      });
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div
        style={{ width: "100px", height: "100px", backgroundColor: color }}
      ></div>
    </>
  );
}
