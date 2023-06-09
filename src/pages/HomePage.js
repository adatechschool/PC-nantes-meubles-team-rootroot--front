import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeScrollDown from "../components/HomeScrollDown";
import GetCard from "../components/GetCard";
import ButtonDesign from "../components/ButtonDesign";
import{ useState } from "react";
import ColorDropDownButton from "../components/ColorDropDownButton";
import CategoryDropDownButton from "../components/CategoryDropDownButton";


const Home = (props) => {
  const [urlToFetch, setUrlToFetch] = useState("http://127.0.0.1:8000/get_all_card_meuble")


    const handleSortPrice = () =>{
      switch (urlToFetch){
        case "http://127.0.0.1:8000/get_all_card_meuble" :
          setUrlToFetch("http://127.0.0.1:8000/get_meuble_price")
        break
        case "http://127.0.0.1:8000/get_meuble_price" :
          setUrlToFetch("http://127.0.0.1:8000/get_all_card_meuble")
        break
        default : 
          setUrlToFetch("http://127.0.0.1:8000/get_all_card_meuble")
        break


      }
    }

    const handleSortColor = (selectedColor) =>{
      console.log(selectedColor)
      setUrlToFetch(`http://127.0.0.1:8000/get_meuble_color/${selectedColor}`)
    }
    const handleSortCategory = (selectedCategory) =>{
      console.log(selectedCategory)
      setUrlToFetch(`http://127.0.0.1:8000/get_meuble_category/${selectedCategory}`)
    }

    return (
    <div>
      <HomeScrollDown />
      <section className="content" id="content">
        <Header />
        <div className="container">
          <div className="allProducts">
              <h1 className="title_Home">Tous nos produits</h1>
            <div className="filter_button">
              <ButtonDesign value="Classer par prix" color="secondary" onClick={handleSortPrice} />
              <ColorDropDownButton onColorSelect={handleSortColor} />
              <CategoryDropDownButton onCategorySelect={handleSortCategory} />
            </div>
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
