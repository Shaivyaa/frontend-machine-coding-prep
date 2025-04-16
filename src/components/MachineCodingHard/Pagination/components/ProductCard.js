import React from "react";
import "../styles.css";

export default function ProductCard({ title, image }) {
  return (
    <>
      <div className="products_card">
        <div>{title}</div>
        <img src={image} alt={title} height={80} width={80} />
      </div>
    </>
  );
}
