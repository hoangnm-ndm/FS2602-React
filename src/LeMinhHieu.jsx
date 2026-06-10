import { useState, useEffect } from "react";
import "./App.css";

function LeMinhHieu() {
  const [dataSort, setData] = useState([]);
  const [sort, setSort] = useState("");
  useEffect(() => {
    const fecthApi = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      console.log(data.products);

      setData(data.products);
    };

    fecthApi();
  }, []);
  let sortProduct = [...dataSort];
  switch (sort) {
    case "price-asc":
      sortProduct.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      sortProduct.sort((a, b) => b.price - a.price);
      break;
    case "title-asc":
      sortProduct.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "title-desc":
      sortProduct.sort((a, b) => b.title.localeCompare(a.title));
      break;

    default:
      break;
  }

  return (
    <>
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="">mac dinh</option>
        <option value="title-asc">a-z</option>
        <option value="title-desc">z-a</option>
        <option value="price-asc">tang dan</option>
        <option value="price-desc">gam dan</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {sortProduct.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default LeMinhHieu;
