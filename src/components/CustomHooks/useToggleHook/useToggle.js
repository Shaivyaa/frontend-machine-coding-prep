import React, { useState } from "react";

export default function useToggle(initialState) {
  const [state, setState] = useState(initialState);

  const toggle = () => setState((prev) => !prev);

  return [state, toggle];
}
