import React from "react";
import style from "./Button.module.css";

const Button = (props) => {
  const disnable = props.disnable ? "disnable" : "";
  return (
    <button className={`${style[props.variant]} ${style[disnable]}`}>
      {props.children}
    </button>
  );
};

export default Button;
