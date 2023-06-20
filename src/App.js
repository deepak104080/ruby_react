import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Counter from "./pages/Counter";
import ClassComp from './class/ClassComp';
import ToDo from './state/ToDo';
import ToDo1 from './state/ToDo1';
import Conditionals from './state/Conditionals';
import TextColorToggle from './state/TextColorToggle';
import TextColorChange from './state/TextColorChange';

import Header from "./template/Header";
import Menubar from "./template/Menubar";
import LeftSideBar from "./template/LeftSideBar";
import RightSideBar from "./template/RightSideBar";
import Footer from "./template/Footer";

// import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <div className="container">
        <Header/>
        <Menubar/>
        <div className="row bg-danger-subtle">
          <LeftSideBar/>

          <div className="col-6 bg-warning-subtle">
            
              <Routes>
                  <Route path="/home" element={<Home/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/services" element={<Services/>}/>
                  <Route path="/contact" element={<Contact/>}/>
                  <Route path="/counter" element={<Counter/>}/>

                  <Route path="/class" element={<ClassComp/>}/>
                  <Route path="/todo" element={<ToDo/>}/>
                  <Route path="/todo1" element={<ToDo1/>}/>
                  <Route path="/conditionals" element={<Conditionals/>}/>
                  <Route path="/colortoggle" element={<TextColorToggle/>}/>
                  <Route path="/colorchange" element={<TextColorChange/>}/>

                  <Route path="/" element={<Home/>}/>
              </Routes>
          </div>

          <RightSideBar/>
        </div>
        <Footer/>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
