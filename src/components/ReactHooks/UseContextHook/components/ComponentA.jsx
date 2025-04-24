import React, { useState, createContext } from "react";
import ComponentB from "./ComponentB";

export const NameContext = createContext();

export default function ComponentA() {
  const [name, setName] = useState("Shaivya");

  return (
    <div className="box">
      <div>ComponentA</div>
      <div>{`Name is ${name}`}</div>
      <NameContext.Provider value={name}>
        <ComponentB />
      </NameContext.Provider>
    </div>
  );
}
