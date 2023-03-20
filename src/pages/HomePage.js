import React from 'react';
import ButtonDesign from './../components/ButtonDesign';
import Card from '../components/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeScrollDown from '../components/HomeScrollDown'; 
import GetCard from '../components/GetCard'

const Home = () => {

    return (
        <div>
            <HomeScrollDown/>
            <section className='content' id='content'>
                <Header/>
                <div className='container'>
                    <h1>Tous nos produits</h1>
                    <div className='cards'>
                        <GetCard/>
                        
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Home;