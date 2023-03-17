import IconButtonDesign from '../components/IconButtonDesign';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carroussel from '../components/Carroussel';

const Product = (props) => {

    const nameProduct = props.name;
    const typeProduct = props.type;
    const descriptionProduct = props.description;
    const dimensionsProduct = props.dimensions;
    const textureProduct = props.texture;
    const colorProduct = props.color;
    const priceProduct = props.price; 

    return (
        <div>
            <Header/>
            <div className="containerDetailsProduct">
                <Carroussel />
                <div className="boxInfos">
                    <h2>
                        {nameProduct}
                    </h2>
                    <p className="typeProduct">
                        Fauteuil
                    </p>
                    <p className="descriptionProduct">
                    Fauteuil tapissé d’un tissu en lin avec structure en bois de couleur naturelle. Fauteuil tapissé d’un tissu en lin avec structure en bois de couleur naturelle.
                    </p>
                    <p className="dimensionsProduct">
                        <h3>Dimensions</h3>
                        <p>Voici les dimensions.</p>
                    </p>
                    <p className="textureProduct">
                        <h3>Matière</h3>
                        <p>Voici la matière.</p>
                    </p>
                    <p className="colorProduct">
                        <h3>Couleur</h3>
                        <p>Voici la couleur.</p>
                    </p>

                    <div className="footerInfos">
                        <h2 className="priceProduct">
                            100€
                        </h2>
                        <IconButtonDesign color='primary' value='Ajouter au panier'/>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Product;
