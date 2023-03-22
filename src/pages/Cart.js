import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Adress from "../components/Adress";
import GetProductCart from "../components/GetProductCart";

const Cart = () => {
  //render of the cart page, l.12 if local.cart exist call the componant that render it, if not, render "panier vide"
  return (
    <div className="">
      <Header />
      {localStorage.cart ? (<GetProductCart /> ):(<span>panier vide</span>)}
      <Adress />
      <Footer />
    </div>
  );
};

export default Cart;
