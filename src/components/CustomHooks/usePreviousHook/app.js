import React from "react";
import usePrevious from "./usePrevious";

export default function App(currentValue) {
  const previousValue = usePrevious(currentValue);

  return <div>app</div>;
}
