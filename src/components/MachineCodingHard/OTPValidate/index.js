import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

const OTP_DIGIT_COUNT = 5;

export default function OTPValidate() {
  const [inputArr, setInputArr] = useState(new Array(OTP_DIGIT_COUNT).fill(""));

  const refArr = useRef([]);

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  const handleOnChange = (value, index) => {
    if (isNaN(value)) return;
    console.log(value);

    const newValue = value.trim();
    const newArr = [...inputArr];
    newArr[index] = newValue.slice(-1);
    setInputArr(newArr);
    newValue && refArr.current[index + 1]?.focus();
  };

  const handleKeyDown = (e, index) => {
    if (!e.target.value && e.key === "Backspace") {
      refArr.current[index - 1]?.focus();
    }
  };

  return (
    <>
      <div className="otp_container">
        <div style={{ fontSize: "40px", fontWeight: "bold", padding: "15px" }}>
          OTP Validate
        </div>
        <div className="otp_box">
          {inputArr.map((input, index) => (
            <>
              <input
                className="otp_input"
                key={index}
                onChange={(e) => handleOnChange(e.target.value, index)}
                type="text"
                value={inputArr[index]}
                ref={(input) => (refArr.current[index] = input)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
}
