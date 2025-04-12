import React from "react";
import useToggle from "./useToggle";

export default function App() {
  const [isOpen, toggleOpen] = useToggle();

  return <div>app</div>;
}
