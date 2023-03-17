import React from 'react';
import ButtonDesign from './../components/ButtonDesign';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Login = () => {

    return (
        <div>
            <Header/>
            <ButtonDesign color='secondary' value='text aléatoire'/>
            <ButtonDesign color='primary' value='Panier'/>
            <Footer/>
        </div>
    );
}

export default Login;