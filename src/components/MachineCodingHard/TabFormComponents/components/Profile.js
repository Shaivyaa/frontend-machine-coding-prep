import React from "react";
import "./styles.css";

export default function Profile({ data, setData, errors }) {
  const { name, age, email } = data;

  const handleDataChange = (e, item) => {
    setData((prev) => ({
      ...prev,
      [item]: e.target.value,
    }));
  };

  return (
    <>
      <div className="wrapper">
        <div>Profile</div>
        <div className="input_field">
          <label>Name :</label>
          <input
            type="text"
            value={name}
            onChange={(e) => handleDataChange(e, "name")}
          />
        </div>
        {errors.name && <span className="errors">{errors.name}</span>}
        <div className="input_field">
          <label>Age :</label>
          <input
            type="number"
            value={age}
            onChange={(e) => handleDataChange(e, "age")}
          />
        </div>
        {errors.age && <span className="errors">{errors.age}</span>}
        <div className="input_field">
          <label>Email :</label>
          <input
            type="email"
            value={email}
            onChange={(e) => handleDataChange(e, "email")}
          />
        </div>
      </div>
      {errors.email && <span className="errors">{errors.email}</span>}
    </>
  );
}
