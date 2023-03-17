import "./Header.css";
import logo from "../assets/kalaxy_logo_icon.svg";
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <nav className='header'>
            <Link to='/'><img src={logo} alt="logo" className="logo" /></Link>
            <ul className="header-menu">
            <Link
                to='/categories'
                className='header-links'            
                >
                Catégories
            </Link>
            <Link
                to='/tousnosproduits'
                className='header-links'            
                >
                Tous nos produits
            </Link>                    
            <Link
                to='/panier'
                className='header-links'            
                >
                Panier
            </Link>                    
            <Link
                to='/login'
                className='header-links'            
                >
                Login
            </Link>
            </ul>
        </nav>
    );
}

export default Header;