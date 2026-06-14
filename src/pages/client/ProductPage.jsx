import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const getProducts = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data;
  } catch (error) {}
};

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const { products } = await getProducts();
      setProducts(products);
    })();
    // * IIFE
  }, []);

  return (
    <div>
      {products.map((item) => (
        <div key={item.id}>
          <img src={item.thumbnail} alt={item.title} />
          <h2>{item.title}</h2>
          <p>Price: {item.price}</p>
          <Link to={`/products/${item.id}`}>Xem chi tiet</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
