import "./Footer.css";
import logo from "../assets/logo-footer.png";
import facebook from "../assets/facebook.svg";

const Footer = () => {

    return (
        <div className="footer">
           <div className="navBar">
                <ul>
                    <li>Footer</li>
                    <li>Réseaux</li>
                </ul>
           </div>
           <div className="socials">
                <img src={facebook} alt="logo facebook"></img>
           </div>
           <img src={logo} alt="logo" className="logo" />

        </div>

    );
}

export default Footer;