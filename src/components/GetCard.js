import React, { useState, useEffect } from "react";
import Card from "./Card";

function GetCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/get_all_card_meuble"
        );
        const jsonData = await response.json();

        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        setData(jsonData);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchData();
  }, []);

  return (
    <React.Fragment>
      {data.slice(0, 9).map((item) => (
        <Card
          key={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
          category={item.category}
          id={item.id}
        />
      ))}
    </React.Fragment>
  );
}

export default GetCard;
