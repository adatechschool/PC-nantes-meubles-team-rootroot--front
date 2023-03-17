import "./Adress.css";


//composant "Card" complet
function Adress() {

  return (
    
    <div className="adress-user">

        <h1>Adresse de livraison:</h1>

        <div className="input-adress">

          <div className="name">
            <form method="get" action="">
                <label>Nom  </label>
                <input type="text" name="LastName"></input>

                <label>Prénom  </label>
                <input type="text" name="firtsName"></input>
            </form>
          </div>

          <div className="adress-enter">
            <form method="get" action="">

                <label>Adresse  </label>
                <input type="text" name="adress"></input>

            </form>
          </div>

          <div className="live">
            <form method="get" action="">
                <label>Code postal  </label>
                <input type="text" name="postalCode"></input>

                <label>Ville  </label>
                <input type="text" name="city"></input>
            </form>
          </div> 

        </div>
    </div>
  );
}

export default Adress;