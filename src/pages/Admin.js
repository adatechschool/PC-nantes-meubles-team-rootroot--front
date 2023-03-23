import React from 'react';
import Header from '../components/Header';
import ButtonDesign from './../components/ButtonDesign';
import Footer from '../components/Footer';

//Ici on appele le tableau crée:
import AdminTable from '../components/AdminTable';

//Ici on réunit ensemble les composants de la page

const Admin = () =>{
    return (
        <div>
            <Header/>
            <div className='table'>
            <AdminTable/>
            </div>
            <Footer/>
        </div>
    );
}
    
export default Admin;