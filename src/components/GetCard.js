import React, { useState, useEffect } from "react";
import Card from "./Card";
import ButtonDesign from "./ButtonDesign";

function GetCard() {
  //setter for fetch data
  const [data, setData] = useState([]);
  //setter for num of products to show
  const[displayCount, setDisplayCount] = useState(9)

  //onclick gestion
  const displayMore=()=>{
    setDisplayCount(displayCount + 9)
  }

  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/get_all_card_meuble"
        );
        const jsonData = await response.json();
        //error gestion
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        //set the data with the fetch
        setData(jsonData);
      //error gestion
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchData();
    //the [] is for rerender only on the var inside
  }, []);

  //Call the card and give the 9 (before displayMore) first set of data as props
  //Call the buttondesign component to handle the see more
  return (
    <React.Fragment>
      {data.slice(0, displayCount).map((item) => (
        <Card
          key={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
          category={item.category}
          id={item.id}
          picture = {item.picture}
        />
        
      ))}
          <div className="btnSeeMore">
          <ButtonDesign
            onClick={displayMore}
            color="secondary"
            value="Display more"
          />        
        </div>
    </React.Fragment>
  );
}

export default GetCard;
