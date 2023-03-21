import React from 'react';
import "./TotalCart.css";
import { Link } from 'react-router-dom';
import Button from './ButtonDesign';

function TotalCart(props) {

    const price = props.price;
   
  
  return (

    <div className="total-cart">
     
      <div className="total">
        <h1>Total</h1>
        <p id="price-total">{price}€</p>
        <p>(1 article)</p>
      </div>

      <Button color="primary" value="Passer commande"/>

   </div>
  );
}


export default TotalCart;