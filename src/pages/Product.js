import IconButtonDesign from '../components/IconButtonDesign';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carroussel from '../components/Carroussel';
import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import flower from "../assets/flowers.svg";



const Product = () => {
    const param = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch(
                `http://127.0.0.1:8000/get_meuble/${param.id}`
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

    if (!data) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <Header/>
            <div className="containerDetailsProduct">
                <Carroussel />
                <div className="boxInfos">
                    <h2>
                        {data.title}
                    </h2>
                    <p className="typeProduct">
                        <strong>{data.category}</strong>
                    </p>
                    <p className="descriptionProduct">
                        {data.description}
                    </p>
                    <p className="dimensionsProduct">
                        <h3>Dimensions : {data.dimension}</h3>
                    </p>
                    <p className="textureProduct">
                        <h3>Matière : {data.material}</h3>
                    </p>
                    <p className="colorProduct">
                        <h3>Couleur : {data.color}</h3>
                    </p>

                    <div className="footerInfos">
                        <h2 className="priceProduct">

                            {data.price}€
                        </h2>
                        <IconButtonDesign color='primary' value='Ajouter au panier'/>
                    </div>

                </div>
                <img className='flowerproduct' src={flower} alt='fleur'/>
            </div>
            <Footer/>
        </div>
    );
}

export default Product;
