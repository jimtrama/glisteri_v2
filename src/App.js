import './App.css';
import React, { useState } from 'react'
import { HashRouter, Route,Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Entry from './Pages/Entry/Entry';
import Cart from './Pages/Cart/Cart';
function App() {
  const [pro,setPro] = useState([]);
  return (
    <HashRouter basename="/">
            <>
                <Routes>
                    <Route exact path="/catalog" element={<Home pro={pro} setPro={setPro} />} />
                    <Route exact path="/" element={<Entry/>} /> 
                    <Route exact path="/cart" element={<Cart pro={pro} setPro={setPro}/>} /> 
                </Routes>
            </>
    </HashRouter>
  );
}

export default App;
