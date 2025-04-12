import React, { useState } from "react";

export default function Accordian() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBtn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>Accordian</div>
      <button onClick={toggleBtn}>Open</button>
      {isOpen && <div>Hi</div>}
    </>
  );
}
