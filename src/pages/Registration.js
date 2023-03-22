import Header from "../components/Header";
import ButtonDesign from "../components/ButtonDesign";
import Footer from "../components/Footer";
import React, { useState } from 'react';

 const Registration = () => {
    const [user, setUser] = useState({
        username: "",
        password: "" 
      })
      

    const handleSubmit=()=>{
        console.log("envoyé")
    }
    const handleChange =(currentTarget)=>{
        const { name, value } = currentTarget;
        setUser({...user, [name]: value})
    }
  return (
    <div className="tab-content">
        <Header/>
        <form className="form-profile" onSubmit={handleSubmit}>
            <fieldset>
            <legend>Inscrivez vous</legend>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                type="text"
                name="username"
                className="form-control"
                id="email"
                placeholder="mail@mail.com"
                onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                type="password"
                name="password"
                className="form-control"
                id="password"
                placeholder="Password"
                onChange={handleChange}
                />
            </div>
            <div>
                <ButtonDesign type='submit' color='secondary' value='Se connecter' onClick={handleSubmit}/>
            </div>
            </fieldset>
        </form>
        <Footer/>
    </div>
  );
};

export default Registration;