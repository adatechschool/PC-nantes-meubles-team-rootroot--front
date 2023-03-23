import "./TotalCart.css";
import { Link } from "react-router-dom";
import Button from "./ButtonDesign";
import React from "react";

function TotalCart(props) {
  const price = props.price;

  return (
    <div className="total-cart">
      <div className="total">
        <p className="totalarticle">Total :</p>
        <p id="price-total">{price}€</p>
        <p className="totalarticle">{localStorage.cart.length === 1 ? (<span>({localStorage.cart.length/2} article)</span>):(<span>({localStorage.cart.length/2} articles)</span>)} </p>
      </div>
      <div className="boutoncommande">
        <Button color="primary" value="Passer commande"/>
      </div>
      

   </div>
  );
}

export default TotalCart;
