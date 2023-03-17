import "./Footer.css";
import logo from "../assets/kalaxy_logo_text_white.svg";
import facebook from "../assets/facebook.svg";

const Footer = () => {

    return (
        <div className="footer">
           <div className="navBar" id="copyright">
                <ul>
                    <li>2023 © kalaxy.com. All Rights Reserved.</li>
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