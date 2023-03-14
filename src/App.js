import './App.css';
import ButtonDesign from './components/ButtonDesign';
import Card from './components/Card';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScrollDown from './components/HomeScrollDown'; 

function App() {
  //STATE

  //COMPORTEMENTS

  //RENDER
  return (
    <div className="App">
      <HomeScrollDown/>
      <Header/>
      <ButtonDesign color='secondary' value='text aléatoire'/>
      <ButtonDesign color='primary' value='Panier'/>
      <Card title='fauteuil Louis XVI' price='79' type='fauteuil' description="voici un magnifique fauteuil non genré achetez-le"/>
      <Footer/>
    </div>
  );
}

export default App;
