import React, { useState } from "react";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://avatars.githubusercontent.com/u/50256353?v=4",
    "https://avatars.githubusercontent.com/u/22092047?v=4",
    "https://avatars.githubusercontent.com/u/48334430?v=4",
  ];

  const prevBtn = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const nextBtn = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="carousel">
        <button onClick={prevBtn}>Prev</button>
        <img src={images[currentIndex]} alt={`${currentIndex + 1}`} />
        <button onClick={nextBtn}>Next</button>
      </div>
    </>
  );
}
