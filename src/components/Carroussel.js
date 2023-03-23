

const Carroussel = (props) => {

    const { picture } = props;
    
    //RENDER
    return (
        <div className="carroussel">
            <img src={picture} alt="image_meuble"></img>
        </div>
    );
};

export default Carroussel;
