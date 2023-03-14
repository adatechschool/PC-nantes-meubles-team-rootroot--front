import "./Header.css";
import logo from "../assets/logo.png";

const Header = () => {

    return (
        <div className="header">
           <img src={logo} alt="logo" className="logo" />
           <div className="navBar">
                <ul>
                    <li>Type</li>
                    <li>Tous nos produits</li>
                    <li>Panier</li>
                    <li>Login</li>
                </ul>

           </div>
        </div>

    );
}

export default Header;