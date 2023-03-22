import "./ProductCart.css";
import meuble from "../assets/meuble.png";
import { Link } from "react-router-dom";
import Button from "../components/ButtonDesign";

function ProductCart(props) {
  //retrieve the props in constants
  const { id, title, color, price } = props;

  //"supprimer du panier" handler
  const handleRemove = () => {
    //separate the ids in the local
    const cardId = localStorage.cart.split(",");

    for (let i = 0; i < cardId.length; i++) {
      //if the id in cart === id of the product that's been clicked 
      if (cardId[i] === id.toString()) {
        //yeet the id
        cardId.splice(i, 1);
        //update the local
        localStorage.cart = cardId;
        //reload the page
        window.location.reload(true);
      }
    }
  };

  //render template of the item in cart
  return (
    <div className="product-cart">
      <div className="complete-elements">
        <div className="picture-meuble">
          <img src={meuble} alt="meuble" className="pictureMeuble" />
        </div>
        <div className="details-product">
          <h1>{title}</h1>
          <p className="couleur">couleur: {color}</p>
          <p id="price">
            Prix: <span id="price-product">{price}€</span>
          </p>
        </div>

        <div className="button-product">
          <Link to={`/product/${id}`} className="boutonmodifier"> <Button color="secondary" value="Plus de détails"></Button></Link>
          <Button
            onClick={handleRemove}
            color="secondary"
            value="Supprimer du panier"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
