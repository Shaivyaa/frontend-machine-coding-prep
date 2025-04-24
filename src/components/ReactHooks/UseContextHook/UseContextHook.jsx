// useContext()

// Provider Component
// 1- import {createContext} from "react"
// 2- export const MyContext = createContext()
// 3- <MyContext.Provider value={value}>
//       <Child />
//    </MyContext.Provider >

// Consumer Component
// 1- import react {useContext} from "react"
//    import MyContext from ".ComponentA";
// 2- const value = createContext(MyContext)

import React from "react";
import ComponentA from "./components/ComponentA";
import "./styles.css";

export default function UseContextHook() {
  return (
    <div>
      <ComponentA />
    </div>
  );
}
