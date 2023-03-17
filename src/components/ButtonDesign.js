import './ButtonDesign.css';

const ButtonDesign = (props) => {

    const color = props.color;
    const value = props.value;

    //RENDER
    return (
        <div>
            <button id="button" class={color} value={value}>{value}</button>
        </div>
    );
};

export default ButtonDesign;