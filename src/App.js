import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Home from './pages/HomePage';
import Admin from './pages/Admin';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Product from './pages/Product';
import Footer from './components/Footer'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

function App() {
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
          <Route path='/product' element={ <Product/> }/>
          <Route path='/cart' className="cart" element={ <Cart/> }/>
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
