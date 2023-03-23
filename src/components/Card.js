import "./Card.css";
import icon from "../assets/plus.svg";
import { Link } from 'react-router-dom';

function Card(props) {
  const { title, price, description, id, picture } = props;
  console.log(description)
  //when the link for the pictures will be ready change 'meuble' l.13 by picture
  return (
    
    <div className="completeCard">
      <img src={picture} alt="meuble" className="pictureMeuble" />
      <div className="bottomCard">
        <div className='price'>
          <p>{price}€</p>
        </div>  
        <div className="description">
          <h2 className="titleDescript">{title}</h2>
          <div className="descrip-button">
            <p className="paraphDescript">
              {/* <span className="category">{category}-</span> */}
              <span className="descriptionmeuble">{description}</span>
            </p>
            <Link to={`/product/${id}`} className="positionimage">
              <img src={icon} alt="icon" className="iconplus" /> 
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
