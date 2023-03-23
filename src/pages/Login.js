import React, { useState } from "react";
import Header from "../components/Header";
import FooterFixed from "../components/FooterFixed";
import ButtonDesign from "./../components/ButtonDesign";
import { Link } from "react-router-dom";

const Login = () => {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const userLogin = (event) => {
      event.preventDefault();
      console.log("email:", email);
      console.log("password:", password);
      let result = true;
      if (result) {
      }
    };

    return (
        <div>
            <Header/>
            <FooterFixed/>
        </div>
    );
};

export default Login;
