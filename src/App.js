import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Home from './pages/HomePage';
import Admin from './pages/Admin';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Product from './pages/Product';
//import { hasAuthenticated } from './services/AuthApi';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
/*import AuthenticatedRoute from './components/AuthenticatedRoute';*/

function App() {
  /*const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());*/
  //STATE

  //COMPORTEMENTS

  //RENDER
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/admin' element={ <Admin/> }/>
          <Route path='/' element={ <Home/> }/>
          <Route path='/login' element={ <Login/> }/>
          <Route path='/product' element={ <Product name="fauteeeeeil"/> }/>
          <Route path='/cart' element={ <Cart/> }/>
        </Routes>   
      </div>
    </Router> 
  );
}

export default App;


//pour la partie login, il serait peut-être envisageable d'écrire ce code-ci à la place de celui au dessus
//dans le return

/*
<Auth.Provider value={{isAuthenticated}} >
    <Router>
      <div className="App">
        <Routes>
          <AuthenticatedRoute path='/admin' element={ <Admin/> }/>
          <Route path='/' element={ <Home/> }/>
          <Route path='/login' element={ <Login/> }/>
          <Route path='/product' element={ <Product/> }/>
          <Route path='/cart' element={ <Cart/> }/>
        </Routes>   
      </div>
    </Router> 
  </Auth.Provider>
  );
}

*/
