import './App.css';
import React, { useState } from 'react'
import { HashRouter, Route,Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {
  const [pro,setPro] = useState([]);
  return (
    <HashRouter basename="/">
            <>
                <Routes>
                    <Route exact path="/" element={<Home pro={pro} setPro={setPro} />} />
                </Routes>
            </>
    </HashRouter>
  );
}

export default App;
