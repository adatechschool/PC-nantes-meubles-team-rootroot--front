import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TotalCart from '../components/TotalCart';
import Adress from '../components/Adress';
import GetProductCart from '../components/GetProductCart';

const Cart = () => {

    return (
        <div className=''>
            <Header/>
            <GetProductCart/>
            <TotalCart price="79"/>
            <Adress/>
            <Footer/>
        </div>
    );
}

export default Cart;