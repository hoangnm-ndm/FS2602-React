import { useEffect, useState } from "react";

const TienAn = () => {
  const [sortType, setSortType] = useState("title-asc");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const sort = sortType.split("-");
      const res = await fetch(
        `https://dummyjson.com/products?sortBy=${sort[0]}&order=${sort[1]}`
      );
      const data = await res.json();
      console.log("🚀 ~ TienAn.tsx ~ fetchData ~ data:", data);
      setProducts(data.products);
    };

    fetchData();
  }, [sortType]);

  return (
    <div>
      <select
        onChange={(e) => {
          setSortType(e.target.value);
        }}
        value={sortType}
      >
        <option value="title-asc">Tên A-Z</option>
        <option value="title-desc">Tên Z-A</option>
        <option value="price-asc">Giá tăng dần</option>
        <option value="price-desc">Giá giảm dần</option>
      </select>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <h3>{p.title}</h3>
            <p>Giá: ${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TienAn;
