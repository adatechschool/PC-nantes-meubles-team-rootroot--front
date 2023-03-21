import React from 'react';
import "./ProductCart.css";
import { Link } from 'react-router-dom';
import meuble from "../assets/meuble.png";
import Button from '../components/ButtonDesign';


function ProductCart(props) {

    const title = props.title;
    const price = props.price;
    const color = props.color;
  
  return (
    <div className="product-cart">

      <div className="complete-elements">
       
        <div className="picture-meuble">
          <img src={meuble} alt="meuble" className="pictureMeuble" />
        </div>

        <div className="details-product">
          <h1>{title}</h1>
          <p>couleur: {color}</p>
          <p>Quantité: 1</p> 
          <p id="price">Prix: <span id="price-product">{price}€</span></p>
        </div>

        <div className="button-product">
            <Button color="secondary" value="Détail du produit"/>
            <Button color="secondary" value="Supprimer du panier" />
        </div>

      </div>
    </div>
  );
}

export default ProductCart;