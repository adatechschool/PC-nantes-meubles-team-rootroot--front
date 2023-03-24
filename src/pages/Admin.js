import React from "react";
import Header from "../components/Header";
import ButtonDesign from "./../components/ButtonDesign";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

//Ici on appele le tableau crée:
import AdminTable from "../components/AdminTable";

//Ici on réunit ensemble les composants de la page

const Admin = () => {
  const navigate = useNavigate();

  if (!localStorage.isAdmin) {
    navigate("/");
  } else {
    return (
        <div>
            <Header/>
            <div className='container'>
                <div className='table'>
                <AdminTable/>
                </div>
            </div>
            <Footer/>
        </div>

    );
  }
};

export default Admin;
