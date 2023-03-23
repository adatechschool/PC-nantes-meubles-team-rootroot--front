import meuble from "../assets/meuble.png";
import React from "react";

const Carroussel = () => {
  //RENDER
  return (
    <div className="carroussel">
      <img src={meuble} alt="image_meuble"></img>
    </div>
  );
};

export default Carroussel;
