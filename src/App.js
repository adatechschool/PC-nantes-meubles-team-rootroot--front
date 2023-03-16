import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Home from './pages/HomePage';
import Admin from './pages/Admin';

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
      </Routes>   
      </div>
    </Router>
  );
}

export default App;
