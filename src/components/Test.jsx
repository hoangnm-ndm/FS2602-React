import React from "react";
import styled from "styled-components";

// Tạo một component tên là 'Card' đại diện cho thẻ <div> có sẵn style
const Card = styled.div`
  background-color: #00ff00;
  border: 1px solid #333333;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  max-width: 300px;
  margin: 20px auto;
  text-align: center;
`;

const Butont = styled.button`
  backgroundcolor: #ccc;
`;

// Tạo component 'Title' đại diện cho thẻ <h2>
const Title = styled.h2`
  color: #333333;
  font-size: 20px;
  margin-bottom: 10px;
`;

const Test = () => {
  return (
    <Card>
      <Title>Học CSS-in-JS</Title>
      <p>
        Viết CSS trực tiếp trong mã nguồn JavaScript cực kỳ thú vị và tiện lợi.
      </p>
    </Card>
  );
};

export default Test;
