import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeScrollDown from "../components/HomeScrollDown";
import GetCard from "../components/GetCard";
import ButtonDesign from "../components/ButtonDesign";
import{ useState } from "react";
import ColorDropdown from "../components/ColorDropDown";

const Home = (props) => {
  const [urlToFetch, setUrlToFetch] = useState("http://127.0.0.1:8000/get_all_card_meuble")

    const handleSortPrice = () =>{
      setUrlToFetch("http://127.0.0.1:8000/get_meuble_price")
    }
    const handleSortColor = (color) =>{
      setUrlToFetch(`http://127.0.0.1:8000/get_meuble_color/${color}`)
    }

    return (
    <div>
      <HomeScrollDown />
      <section className="content" id="content">
        <Header />
        <div className="container">
          <div className="allProducts">
            <h1>Tous nos produits</h1>
            <ButtonDesign value="Classer par prix" color="secondary" onClick={handleSortPrice}></ButtonDesign>
            <ColorDropdown value="Classer par couleur" color="secondary" onClick={() => handleSortColor("Noir")}></ColorDropdown>

          </div>
          <div className="cards">
            <GetCard urlToFetch={urlToFetch}/>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Home;
