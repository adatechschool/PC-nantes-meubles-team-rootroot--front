import React, { useEffect, useState, useContext } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import ButtonDesign from './../components/ButtonDesign';
import Auth from "../contexts/Auth";
import { login } from "../services/AuthApi";


 const Login = ({ history }) => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Auth);

  const [user, setUser] = useState({
    username: "",
    password: ""
  })
  
  const handleChange = ({currentTarget}) => {
    const { name, value } = currentTarget;

    setUser({...user, [name]: value})
  }

  const handleSubmit = async event => {
    event.preventDefault();
    console.log("formulaire envoyé");

    try {
      const response = await login(user);
      setIsAuthenticated(response);
      history.replace('/account');
    } catch ({ response }) {
      console.log(response);
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      history.replace('/account');
    }
  }, [history, isAuthenticated]);

  return (
    <div className="tab-content">
        <Header/>
        <form className="form-profile" onSubmit={handleSubmit}>
            <fieldset>
            <legend>Se connecter</legend>
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
                type="hidden"
                name="password"
                className="form-control"
                id="password"
                placeholder="Password"
                onChange={handleChange}
                />
            </div>
            <div>
                <ButtonDesign type='submit' color='secondary' value='Se connecter'/>
            </div>
            </fieldset>
        </form>
        <Footer/>
    </div>
  );
};

export default Login;