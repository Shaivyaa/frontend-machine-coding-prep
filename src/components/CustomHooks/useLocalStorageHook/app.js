import React from "react";
import useLocalStorage from "./useLocalStorage";

export default function App() {
  const { userName, setUserName } = useLocalStorage("shaivya", "shukla");

  const onClickBtn = () => {
    setUserName("Kavya");
  };

  return (
    <div>
      {userName}
      <button onClick={onClickBtn}>hhh</button>
    </div>
  );
}
