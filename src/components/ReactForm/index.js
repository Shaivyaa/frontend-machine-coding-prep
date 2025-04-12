import React, { useState } from "react";

export default function ReactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("name", name);
    console.log("email", email);
    setEmail("");
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={onFormSubmit}>
          <input
            value={name}
            onChange={onNameChange}
            placeholder="Name"
            type="text"
          />
          <input
            value={email}
            onChange={onEmailChange}
            placeholder="Email"
            type="email"
          />
          <button type="submit">Button</button>
        </form>
      </div>
    </>
  );
}
