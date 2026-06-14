import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export const ProductDetailPage = () => {
  // useParams trả về một object chứa các tham số động trên URL
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  return (
    <div>
      <h2>Chi tiết sản phẩm</h2>
      <div>
        <img src={product.thumbnail} alt={product.title} />
        <h2>{product.title}</h2>
        <p>Price: {product.price}</p>
        <Button>Mua ngay</Button>
        <Button>Them vao gio hang</Button>
      </div>
    </div>
  );
};
