import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TotalCart from '../components/TotalCart';
import Adress from '../components/Adress';
import GetProductCart from '../components/GetProductCart';
import flower from "../assets/flowers.svg";

const Cart = () => {

    return (
        <>
        <Header/>
        <div className='bodycartpage'>  
            <img className='flower' src={flower} alt='fleur'/>
            <div className='cartcontainer'>
                {localStorage.cart ? (<GetProductCart /> ):(<span><strong>Votre panier est vide!</strong></span>)}
                {/* <TotalCart price="79"/> */}
                 {/* <Adress/> */}
            </div>
        </div> 
        <Footer/>
        </>
    );
}

export default Cart;
