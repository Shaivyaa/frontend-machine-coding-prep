import React, { useState } from "react";
import "./styles.css";

export default function ResponsiveNavwithHamBurger() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">Mysite</div>
          <button className="hamburger" onClick={onToggle}>
            =
          </button>
          <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
