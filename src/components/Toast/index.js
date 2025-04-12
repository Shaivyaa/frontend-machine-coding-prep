import React, { useState } from "react";

export default function Toast() {
  const [msg, setMsg] = useState(null);

  const showToast = () => {
    setMsg("This is toast");
    setTimeout(() => {
      setMsg(null);
    }, 3000);
  };

  return (
    <>
      <div>Toast</div>
      <button onClick={showToast}>Show Toast</button>

      {msg && <div>{msg}</div>}
    </>
  );
}
