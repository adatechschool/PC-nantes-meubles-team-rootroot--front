import "./Card.css";
import meuble from "../assets/meuble.png";
import icon from "../assets/iconplus.png";

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
          <h1 className="titleDescript">{title}</h1>

          <div className="descrip-button">
            <p className="paraphDescript">
              <span className="type">{type}-</span>
              {description}
            </p>
            
            <a href="https://forum.alsacreations.com/topic-1-50155-1-Superposer-deux-div-ou-deux-images-en-csshtml-Y.html">
            <img src={icon} alt="icon" className="iconplus" /> 
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
