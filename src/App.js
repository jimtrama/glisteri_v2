import './App.css';
import React from 'react'
import { HashRouter, Route,Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {
  return (
    <HashRouter basename="/">
            <>
                <Routes>
                    <Route exact path="/" element={<Home  />} />
                   
                </Routes>
            </>
    </HashRouter>
  );
}

export default App;
