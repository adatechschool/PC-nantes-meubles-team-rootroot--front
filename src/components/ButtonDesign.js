import "./ButtonDesign.css";
import React from "react";


const ButtonDesign = (props) => {
  const color = props.color;
  const value = props.value;

  //RENDER
  return (
    <div>
      <button className={`button ${color}`} value={value}>
        {value}
      </button>
    </div>
  );
};

export default ButtonDesign;
