import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//IMPORT COMPONENTS AND ROUTES
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
//IMPORT PAGES
import Home from "./pages/Home";
import CategoryIndex from "./pages/CategoryIndex";
import About from "./pages/About";
import Info from './pages/Info';


function App() {
  return (
    <div className="App vh-100">
      <header id="header">
      <Header />
      </header>
      <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/category/:id" element={<Info/>}/>
          <Route path="/:category" element={<CategoryIndex />}/>
          <Route path="/about" element={<About />}/> 
      </Routes>
     
    </div>
  );
}

export default App;
