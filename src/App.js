import React from 'react';
import Home from './pages/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import About from './pages/About';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home/>}/>
    </Routes>

    <Routes>
      <Route path="/home" element = {<Home/>}/>
    </Routes>

    <Routes>
      <Route path="/about" element = {<About/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;