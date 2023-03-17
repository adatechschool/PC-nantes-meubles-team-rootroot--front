import "./Header.css";
import logo from "../assets/kalaxy_logo_icon.svg";
import { Link } from 'react-router-dom';

const Header = () => {
{/* 
    const { isAuthenticated } = useContext(Auth); 
*/}

    return (
        <nav className='navbar'>
            <Link to='/' className='navbar-logo'></Link>
            <div className="header">
            <img src={logo} alt="kalaxy_logo_icon" className="logo" />
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
                    {/*{ (!isAuthenticated && (
                        <>*/}
                        <Link
                            to='/login'
                            className='login'            
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
            </div>
            </div>
        </nav>
    );
}

export default Header;