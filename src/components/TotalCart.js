import "./TotalCart.css";
import { Link } from 'react-router-dom';
import Button from './ButtonDesign';

function TotalCart(props) {

    const price = props.price;
   
  
  return (

    <div className="total-cart">
     
      <div className="total">
        <p className="totalarticle">Total</p>
        <p className="totalarticle">(1 article)</p>
        <p id="price-total">{price}€</p>
      </div>
      <div className="boutoncommande">
        <Button color="primary" value="Passer commande"/>
      </div>
      

   </div>
  );
}


export default TotalCart;