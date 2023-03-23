import "./FooterFixed.css";
import logo from "../assets/kalaxy_logo_text_white.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import pinterest from "../assets/pinterest.svg";
import { Link } from 'react-router-dom';

const FooterFixed = () => {

    return (
        <div className="footerfixed">
                        
            <ul className="footerfixed-menu">
            <Link
                to='/'
                className='footerfixed-links'            
                >
                Tous nos produits
            </Link>                    
            <Link
                to='/cart'
                className='footerfixed-links'            
                >
                Panier
            </Link>                    
            <Link
                to='/login'
                className='footerfixed-links'            
                >
                Login
            </Link>
            </ul>
            <p className="footerfixed-menu">Votre magasin Kalaxy. 18 route de la redoute 97400 St Denis </p>
            <div className="socialfixed">
                <img src={facebook} alt="logo facebook"></img>
                <img src={instagram} alt="logo instagram"></img>
                <img src={pinterest} alt="logo pinterest"></img>
            </div>
            
            <img src={logo} alt="logo" className="logo" />
        </div>

    );
}

export default FooterFixed;