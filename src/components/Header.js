import "./Header.css";
import logo from "../assets/kalaxy_logo_icon.svg";
import { Link } from 'react-router-dom';

const Header = () => {
{/* 
    const { isAuthenticated } = useContext(Auth); 
*/}

    return (
        <nav className='header'>
            <Link to='/'><img src={logo} alt="logo" className="logo" /></Link>
            <ul className="header-menu">
            <Link
                to='/'
                className='header-links'            
                >
                Tous nos produits
            </Link>                    
            <Link
                to='/cart'
                className='header-links'            
                >
                Panier
            </Link>                    
                                {/*{ (!isAuthenticated && (
                        <>*/}
                        <Link
                            to='/login'
                            className='header-links'            
                            >
                            Se connecter
                        </Link>
                        {/*<Link
                            to='/register'
                            className='register'            
                            >
                            S'enregistrer
                        </Link>
                        </>
                    )) || (
                        <>
                            <Link
                                to='/account'
                                className='account'            
                                >
                                Mon compte
                            </Link>
                        </>
                    )}
                    */}
                </ul>
        </nav>
    );
}

export default Header;