import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CookieApi from './components/Cookiesapi';

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
  const [cookies, setCookies] = useState([]);
  return (
    <div className="App vh-100">
      <div>
        <CookieApi setCookies={setCookies}/>
      </div>
      <header id="header">
      <Header />
      </header>
      <Routes>
          <Route exact path="/" element={<Home cookies={cookies}/>}/>
          <Route path="/category/:id" element={<Info/>}/>
          <Route path="/:category" element={<CategoryIndex />}/>
          <Route path="/about" element={<About />}/> 
      </Routes>
     <Footer fixed="bottom"/>
    </div>
  );
}

export default App;
