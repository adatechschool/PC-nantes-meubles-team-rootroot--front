import "./Footer.css";
import logo from "../assets/kalaxy_logo_text_white.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import pinterest from "../assets/pinterest.svg";
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <div className="footer">
                        
            <ul className="footer-menu">
            <Link
                to='/'
                className='footer-links'            
                >
                Tous nos produits
            </Link>                    
            <Link
                to='/cart'
                className='footer-links'            
                >
                Panier
            </Link>                    
            <Link
                to='/login'
                className='footer-links'            
                >
                Login
            </Link>
            </ul>

            <div className="social">
                <img src={facebook} alt="logo facebook"></img>
                <img src={instagram} alt="logo instagram"></img>
                <img src={pinterest} alt="logo pinterest"></img>
            </div>
            
            <img src={logo} alt="logo" className="logo" />
        </div>

    );
}

export default Footer;