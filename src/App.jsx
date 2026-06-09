import React, { useState } from "react";
import "./App.css";

const data = [
  { id: 1, name: "San pham A", price: 100 },
  { id: 2, name: "San pham B", price: 300 },
  { id: 3, name: "San pham C", price: 200 },
];

/**
 * * 1. Làm hiển thị danh sách sản phẩm ra màn hình dạng bảng.
 * * 2. tạo chức năng select option để sort theo tên a-z, z-a, giá tăng dần, giảm dần, reset sort.
 */

const options = [
  { value: 1, name: "Tên từ A đến Z" },
  { value: 2, name: "Tên từ Z đến A" },
  { value: 3, name: "Giá tăng dần" },
  { value: 4, name: "Giá giảm dần" },
];

function App() {
  const [products, setProducts] = useState(data);

  const handleChangeSort = () => {
    const newProducts = [...products].sort((a, b) => {
      switch (event.target.value) {
        case "1":
          return a.name > b.name ? 1 : -1;
        case "2":
          return a.name > b.name ? -1 : 1;
        case "3":
          return a.price - b.price;
        case "4":
          return b.price - a.price;
        default:
          break;
      }
    });
    setProducts(newProducts);
  };

  return (
    <>
      <select onChange={() => handleChangeSort()}>
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
