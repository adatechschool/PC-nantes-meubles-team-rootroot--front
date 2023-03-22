//Get Card
import React, { useState, useEffect } from "react";
import Card from "./Card";
import ButtonDesign from "./ButtonDesign";

function GetCard(props) {
  const { urlToFetch } = props;
  //setter for fetch data
  const [data, setData] = useState([]);
  //setter for num of products to show
  const [displayCount, setDisplayCount] = useState(9);
  //onclick gestion
  const displayMore = () => {
    setDisplayCount(displayCount + 9);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(urlToFetch);
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
    //the [] is for rerender only when the var inside changes
  }, [urlToFetch]);

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
