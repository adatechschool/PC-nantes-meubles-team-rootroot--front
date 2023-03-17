import "./Header.css";
import logo from "../assets/kalaxy_logo_icon.svg";
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <nav className='navbar'>
            <Link to='/' className='navbar-logo'></Link>
            <div className="header">
            <img src={logo} alt="logo" className="logo" />
            <div className="navBar">
                    <ul>
                    <Link
                        to='/categories'
                        className='categorie'            
                        >
                        Catégories
                    </Link>
                    <Link
                        to='/tousnosproduits'
                        className='tous-nos-produits'            
                        >
                        Tous nos Produits
                    </Link>                    
                    <Link
                        to='/panier'
                        className='panier'            
                        >
                        Panier
                    </Link>                    
                    <Link
                        to='/login'
                        className='login'            
                        >
                        Login
                    </Link>
                    </ul>
            </div>
            </div>
        </nav>
    );
}

export default Header;