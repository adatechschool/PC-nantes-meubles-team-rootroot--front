import './IconButtonDesign.css';
import basket from '../assets/basket.svg';
import {useParams} from 'react-router-dom';


const IconButtonDesign = (props) => {
    const param = useParams()

    const color = props.color;
    const value = props.value;

    
    const addToCart=(value)=>{

        if(!localStorage.getItem("cart")){
            localStorage.setItem('cart', value + ",")
        }else if(localStorage.getItem("cart") && value){
            localStorage.cart += value + ","
        }
        console.log(localStorage)

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