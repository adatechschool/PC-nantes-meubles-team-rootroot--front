import React from 'react';
import ButtonDesign from './../components/ButtonDesign';
import Card from '../components/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeScrollDown from '../components/HomeScrollDown'; 

const Home = () => {

    return (
        <div>
            <HomeScrollDown/>
            <section className='content' id='content'>
                <Header/>
                <div className='container'>
                    <ButtonDesign color='secondary' value='text aléatoire'/>
                    <ButtonDesign color='primary' value='Panier'/>
                    <h1>Tous nos produits</h1>
                    <div className='cards'>
                        <Card title='fauteuil Louis XVI' price='79' type='fauteuil' description="voici un magnifique fauteuil non genré achetez-le"/>
                        <Card title='fauteuil Louis XVI' price='79' type='fauteuil' description="voici un magnifique fauteuil non genré achetez-le"/>
                        <Card title='fauteuil Louis XVI' price='79' type='fauteuil' description="voici un magnifique fauteuil non genré achetez-le"/>
                        <Card title='fauteuil Louis XVI' price='79' type='fauteuil' description="voici un magnifique fauteuil non genré achetez-le"/>
                        <Card title='fauteuil Louis XVI' price='79' type='fauteuil' description="voici un magnifique fauteuil non genré achetez-le"/>
                        <Card title='fauteuil Louis XVI' price='79' type='fauteuil' description="voici un magnifique fauteuil non genré achetez-le"/>
                        <Card title='fauteuil Louis XVI' price='79' type='fauteuil' description="voici un magnifique fauteuil non genré achetez-le"/>
                        <Card title='fauteuil Louis XVI' price='79' type='fauteuil' description="voici un magnifique fauteuil non genré achetez-le"/>
                        <Card title='fauteuil Louis XVI' price='79' type='fauteuil' description="voici un magnifique fauteuil non genré achetez-le"/>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Home;