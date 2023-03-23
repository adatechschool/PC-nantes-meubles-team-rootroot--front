import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
      <div className="tab-content">
        <Header />
        <form className="form-profile" onSubmit={userLogin}>
          <fieldset>
            <legend>Se connecter</legend>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                className="form-control"
                id="email"
                placeholder="mail@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button type="submit" color="secondary" value="Se connecter">
                submit
              </button>
            </div>
          </fieldset>
        </form>
        <Footer />
      </div>
    );
};

export default Login;
