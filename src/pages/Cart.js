import React from 'react';
import ButtonDesign from '../components/ButtonDesign';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Cart = () => {

    return (
        <div className=''>
            <Header/>
            <ButtonDesign color='secondary' value='text aléatoire'/>
            <ButtonDesign color='primary' value='Panier'/>
            <Footer/>
        </div>
    );
}

export default Cart;