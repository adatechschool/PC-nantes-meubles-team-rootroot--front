import "./ButtonDesign.css";

const ButtonDesign = (props) => {
  const color = props.color;
  const value = props.value;
  const onClick = props.onClick;

  //RENDER
  return (
    <div>
      <button className={`button ${color}`} onClick={onClick} value={value}> {value} </button>
    </div>
  );
};

export default ButtonDesign;
