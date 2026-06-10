import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=4&skip=${4 * (page - 1)}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, [page]);

  // * Cach 1: deps là array rỗng
  // * Cach 2: deps có chứa sự phụ thuộc, mỗi lần các dữ liệu phụ thuộc thay đổi thì callback trong useEffect được gọi
  const handlePage = (value) => {
    setPage(page + value);
  };

  //** Hãy tạo lại tính năng sort theo title và price với dummyjson và useEffect. */
  return (
    <>
      {products.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <img src={item.thumbnail} alt={item.title} height={"80px"} />
        </div>
      ))}
      <div>
        <button onClick={() => handlePage(-1)}>{"<"}</button>
        <button>{page}</button>
        <button onClick={() => handlePage(1)}>{">"}</button>
      </div>
    </>
  );
}

export default App;
