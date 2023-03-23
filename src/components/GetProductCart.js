import React, { useState, useEffect } from "react";
import ProductCart from "./ProductCart";
import TotalCart from "./TotalCart";

function GetProductCard() {
  const [data, setData] = useState([]);

  var cartId = localStorage.cart && localStorage.cart.split(",");
  //en attendant de pouvoir retirer le dernier index vide, a été rajouter pour être sur que ce n'est pas lui qui cause de bug 
  cartId.pop()
  //prevent writing directly on the data itself
  cartId = [...new Set(cartId)];

  
  useEffect(() => {

    async function fetchData(id) {
      try {
        
        const response = await fetch(`http://127.0.0.1:8000/get_meuble/${id}`);
        const jsonData = await response.json();
        
        //handling errors
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return jsonData;
      //handling errors
      } catch (err) {
        console.log(err.message);
      }
    }
    
    //if there's something in cartId
    if (cartId && cartId.length > 0) {   
      //fetch for each     
      const promises = cartId.map((id) => fetchData(id));
      //when ALL the promises are done set data with it
      Promise.all(promises).then((data) => setData(data));
    }
        //the [] is for rerender only on the var inside
  }, []);

  //calcul the total price for all the data
  const TotalPrice = data.reduce((total, item) => total + item.price, 0);
  
  //call products cart and give the param via props
  //call the total cart and give it the result
  return (
    <React.Fragment>
      {data.map((data) => (
        <ProductCart
          id={data.id}
          picture={data.picture}
          title={data.title}
          price={data.price}
          color={data.color}
        />
      ))}
      <TotalCart price = {TotalPrice}/> </React.Fragment>
  );
}

export default GetProductCard;
