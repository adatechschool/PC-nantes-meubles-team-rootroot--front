import "./IconButtonDesign.css";
import basket from "../assets/basket.svg";
import React from "react";

const IconButtonDesign = (props) => {
  const color = props.color;
  const value = props.value;

  //RENDER
  return (
    <div>
      <button id="button" class={color} value={value}>
        <img src={basket} alt="logo panier" className="svg"></img>
        {value}
      </button>
    </div>
  );
};

export default IconButtonDesign;
