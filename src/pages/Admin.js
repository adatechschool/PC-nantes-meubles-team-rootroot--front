import React from 'react';
import Header from '../components/Header';
import ButtonDesign from './../components/ButtonDesign';
import Footer from '../components/Footer';

//Ici on appele le tableau crée:
import AdminTable from '../components/AdminTable';

//Ici on réuni ensemble les composants de la page
const Admin = () => {
    
    return (
        <div className='adminPage'>
            <Header/>
            <ButtonDesign color='secondary' value='supprimer un article'/>
            <ButtonDesign color='secondary' value='modifier un article'/>
            <AdminTable/>
            <Footer/>
        </div>
    );
}

export default Admin;