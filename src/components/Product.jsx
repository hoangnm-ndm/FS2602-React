import React from "react";

const Product = ({ product }) => {
  return (
    <div
      style={{
        backgroundColor: "green",
        border: "2px solid #ccc",
        color: "#fff",
      }}
    >
      {product.id}-{product.name}
    </div>
  );
};

export default Product;
