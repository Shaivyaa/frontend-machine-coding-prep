import React, { useContext } from "react";
import { NameContext } from "./ComponentA";

export default function ComponentD() {
  const name = useContext(NameContext);

  return (
    <div className="box">
      <div>ComponentD</div>
      <div> {`Bye ${name}`}</div>
    </div>
  );
}
