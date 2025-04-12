import React from "react";
import useWindowSize from "./useWindowSize";

export default function App() {
  const { width, height } = useWindowSize();

  return <div>app</div>;
}
