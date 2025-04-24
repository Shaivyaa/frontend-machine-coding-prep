// useRef() - it does not cause a component to re-render when it's value changes

import React, { useEffect, useRef } from "react";

export default function UseRefHook() {
  //   const ref = useRef(0);
  const inputRef = useRef(null);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);

  useEffect(() => {
    console.log("Component rendered");
  });

  const handleClick = () => {
    // ref.current = ref.current + 1;
    // console.log(ref.current);
    inputRef.current.focus();
    inputRef.current.style.background = "lightgray";
    inputRef1.current.style.background = "";
    inputRef2.current.style.background = "";
  };

  const handleClick1 = () => {
    // ref.current = ref.current + 1;
    // console.log(ref.current);
    inputRef.current.focus();
    inputRef.current.style.background = "";
    inputRef1.current.style.background = "lightgray";
    inputRef2.current.style.background = "";
  };

  const handleClick2 = () => {
    // ref.current = ref.current + 1;
    // console.log(ref.current);
    inputRef.current.focus();
    inputRef.current.style.background = "";
    inputRef1.current.style.background = "";
    inputRef2.current.style.background = "lightgray";
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <input ref={inputRef} />

      <button onClick={handleClick1}>Click me</button>
      <input ref={inputRef1} />

      <button onClick={handleClick2}>Click me</button>
      <input ref={inputRef2} />
    </div>
  );
}
