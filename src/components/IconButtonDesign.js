import './IconButtonDesign.css';
import basket from '../assets/basket.svg';
import {useParams} from 'react-router-dom';
import React from "react";

const IconButtonDesign = (props) => {
    //use the params in the path
    const param = useParams()

    //retrieve the props in contant
    const color = props.color;
    const value = props.value;

    //retrieve from the local the id that's been store like this "cart": 1,2,3 (id)
    const addToCart=(value)=>{

        //if cart don't exist
        if(!localStorage.getItem("cart")){
            //create cart and add the new id to remember
            localStorage.setItem('cart', value + ",")
        }else if(localStorage.getItem("cart") && value){
            //juste add the value
            localStorage.cart += value + ","
        }
        
    }
    

    //RENDER
    return (
        <div>
            <button onClick={() => addToCart(param.id)} id="button" class={color} value={value}>
                <img src={basket} alt='logo panier' className='svg'></img>
                {value}
            </button>
        </div>
    );
};

export default IconButtonDesign;
