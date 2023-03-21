import "./ButtonDesign.css";

const ButtonDesign = (props) => {
  const color = props.color;
  const value = props.value;
  const onClick = props.onClick;

  //RENDER
  return (
    <div>
      <button className={`button ${color}`} value={value} onClick={onClick}>
        {value}
      </button>
    </div>
  );
};

export default ButtonDesign;
