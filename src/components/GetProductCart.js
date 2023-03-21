import React, { useState, useEffect } from "react";
import ProductCart from "./ProductCart";

function GetProductCard() {
  const [data, setData] = useState([]);

  var cartId = localStorage.cart && localStorage.cart.split(",");
  cartId.pop()//en attendant de pouvoir retirer le dernier index vide
  console.log(cartId);

  useEffect(() => {
    console.log("coucou")

    async function fetchData(id) {
      try {
        console.log(id, "fetch")
        
        const response = await fetch(`http://127.0.0.1:8000/get_meuble/${id}`);
        const jsonData = await response.json();
  
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return jsonData;
      } catch (err) {
        console.log(err.message);
      }
    }
  
    if (cartId && cartId.length > 0) {
       /* console.log(cartId.length)
        cartId.forEach(id => {
            fetchData(id).then((data)=>{
                setData(data)
            })
        });*/
        
      const promises = cartId.map((id) => fetchData(id));
      Promise.all(promises).then((data) => setData(data));
      console.log(data)
    }
  }, []);
  return (
    <React.Fragment>
      {data.map((data) => (
        <ProductCart
          key={data.id}
          title={data.title}
          price={data.price}
          color={data.color}
        />
      ))}
    </React.Fragment>
    //<span>helo</span>
  );
}

export default GetProductCard;
