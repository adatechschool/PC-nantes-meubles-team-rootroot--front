import "./Card.css";
import meuble from "../assets/meuble.png";
import icon from "../assets/plus.svg";
import { Link } from 'react-router-dom';

function Card(props) {
  const { title, price, description, category, id } = props;
  return (
    
    <div className="completeCard">
      <img src={meuble} alt="meuble" className="pictureMeuble" />
      <div className="bottomCard">
        <div className='price'>
          <p>{price}€</p>
        </div>  
        <div className="description">
          <h2 className="titleDescript">{title}</h2>
          <div className="descrip-button">
            <p className="paraphDescript">
              <span className="category">{category}-</span>
              {description}
            </p>
            <Link to={`/product/${id}`} className='categorie'>
              <img src={icon} alt="icon" className="iconplus" /> 
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
