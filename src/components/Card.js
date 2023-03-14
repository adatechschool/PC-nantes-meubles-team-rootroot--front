import "./Card.css";
import meuble from "../assets/meuble.png";

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
        <div className="description">
          <h1 className="titleDescript">{title}</h1>
          <p className="price">{price}</p>
          <p className="paraphDescript">
            <span className="type">{type}</span>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
