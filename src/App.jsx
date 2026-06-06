import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";

// Viết tên component theo nguyên tắc viết tên pascal case (viết hoa chữ cái đầu tiên của mỗi từ)

function App() {
  // logic ...
  const products = [
    {
      id: 1,
      name: "qua vai",
    },
    {
      id: 2,
      name: "qua du du",
    },
  ];
  return (
    <>
      <Header />
      <main>
        {products.map((item, index) => (
          <Product product={item} />
        ))}
        {[<div>chuoi</div>, <div>vai</div>]}
      </main>
      <Footer />
    </>
  );
}

// Class component
// Function component

// React.createElement("h1", null, "Xin chao");
// <h1>Xin chao</h1>

export default App;
