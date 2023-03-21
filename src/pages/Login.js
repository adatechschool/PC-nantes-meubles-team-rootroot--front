//import React, { useEffect, useState, useContext } from "react";
import React from "react";
// import Auth from "../../contexts/Auth";
// import { login } from "../../services/AuthApi";

import Header from '../components/Header';
import Footer from '../components/Footer';


// const Login = ({ history }) => {
//   const { isAuthenticated, setIsAuthenticated } = useContext(Auth);

//   const [user, setUser] = useState({
//     username: "",
//     password: ""
//   })
  
//   const handleChange = ({currentTarget}) => {
//     const { name, value } = currentTarget;

//     setUser({...user, [name]: value})
//   }

//   const handleSubmit = async event => {
//     event.preventDefault();

//     try {
//       const response = await login(user);
//       setIsAuthenticated(response);
//       history.replace('/account');
//     } catch ({ response }) {
//       console.log(response);
//     }
//   }

//   useEffect(() => {
//     if (isAuthenticated) {
//       history.replace('/account');
//     }
//   }, [history, isAuthenticated]);

//   return (
//     <div className="tab-content">
//       <form className="form-profile" onSubmit={handleSubmit}>
//         <fieldset>
//           <legend>Se connecter</legend>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="text"
//               name="username"
//               className="form-control"
//               id="email"
//               placeholder="mail@mail.com"
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="hidden"
//               name="password"
//               className="form-control"
//               id="password"
//               placeholder="Password"
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <ButtonDesign type='submit' color='secondary' value='Se connecter'/>
//           </div>
//         </fieldset>
//       </form>
//     </div>
//   );
// };

// Étapes visuelles :
// je créé un container qui va présenter les champs input email et/ou pseudo et mot de passe
// à côté des input j'ajoute un bouton Login
// je propose un lien vers une page Register pour créer un nouveau compte utilisateur

const Login = () => {

    return (
        <div>
            <Header/>

            <div className='container'>
                <form type='email' placeholder='exemple@email.com'></form>
                <form type='hidden' placeholder='mot de passe'></form>
                <ButtonDesign color='secondary' value='Login'/>
                
                <ButtonDesign color='secondary' value='Register' link=''/>

            </div>

            <Footer/>
        </div>
    );
}

export default Login;

// Étapes process d'authentification
// requete vérifier que (mail||pseudo) && password correspondent dans la table users
// si true : passer isAuthenticated à true
// verifier ensuite statut admin ou user
// afficher le site en fonction du statut