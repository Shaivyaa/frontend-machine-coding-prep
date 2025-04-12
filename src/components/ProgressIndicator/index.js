import React, { useState } from "react";

export default function ProgressIndicator() {
  const [progress, setProgress] = useState(0);

  const incProgress = () => {
    setProgress((prev) => (prev < 100 ? prev + 10 : 100));
  };

  const decProgress = () => {
    setProgress((prev) => (prev > 0 ? prev - 10 : 0));
  };

  return (
    <>
      <div>ProgressIndicator</div>
      <div>{progress}%</div>
      <button onClick={incProgress}>inc</button>
      <button onClick={decProgress}>dec</button>
    </>
  );
}
