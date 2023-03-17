import "./Card.css";
import meuble from "../assets/meuble.png";
import icon from "../assets/plus.svg";
import { Link } from 'react-router-dom';

//composant "Card" complet
function Card(props) {
  const title = props.title;
  const price = props.price;
  const description = props.description;
  const type = props.type;

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
              <span className="type">{type}-</span>
              {description}
            </p>
            
            <Link to='/product'className='categorie'>
                <img src={icon} alt="icon" className="iconplus" /> 
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
