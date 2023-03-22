import React, { useEffect, useState, useContext } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import ButtonDesign from './../components/ButtonDesign';
import Auth from "../contexts/Auth";
import { login } from "../services/AuthApi";


 const Login = ({ history }) => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Auth);

  // Initialisation des constantes user et password pour pouvoir les comparer avec les
  // utilisateurs enregistrés de la BDD (et éventuellement le statut admin/user)
  const [user, setUser] = useState({
    username: "",
    password: ""
  })
  
  // Vérifie que les champs des formulaires ne sont pas nuls
  const handleChange = ({currentTarget}) => {
    const { name, value } = currentTarget;

    setUser({...user, [name]: value})
  }

  // Gère l'envoi du formulaire (clic bouton se connecter ou appui touche entrée)
  // Si l'user est bien enregistré -> setter pour faire passer isAuthenticated à true
  const handleSubmit = async event => {
    event.preventDefault();
    console.log("formulaire envoyé");

    try {
      const response = await login(user);
      setIsAuthenticated(response);
      // ICI route URL à changer selon la page vers laquelle on veut rediriger
      history.replace('/homepage');
    } catch ({ response }) {
      console.log(response);
    }
  }
  // Conséquence du handleSubmit :
  //vérifie que isAuthenticated est bien passé à true et affiche la page que l'on souhaite en tant qu'user connecté
  useEffect(() => {
    if (isAuthenticated) {
      // ICI route URL à changer selon la page vers laquelle on veut rediriger
      history.replace('/homepage');
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