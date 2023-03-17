import React from 'react';
import ButtonDesign from '../components/ButtonDesign';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCart from '../components/ProductCart';
import TotalCart from '../components/TotalCart';
import Adress from '../components/Adress';

const Cart = () => {

    return (
        <div className=''>
            <Header/>
            <ProductCart title="Fauteuil vintage" color="vert sapin" price="79"/>
            <TotalCart price="79"/>
            <Adress/>
            <Footer/>
        </div>
    );
}

export default Cart;