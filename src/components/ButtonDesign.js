import './ButtonDesign.css';

const ButtonDesign = (props) => {

    const color = props.color;
    const value = props.value;

    //RENDER
    return (
        <div>
            <button className={`button ${color}`}  value={value}>{value}</button>
            <button class="button secondary">Second bouton</button>
        </div>
    );
};

export default ButtonDesign;