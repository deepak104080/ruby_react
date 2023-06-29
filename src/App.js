import React, { useState } from "react";
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
import Form_Basic from "./form/Form_Basic";
import Lifecycle from "./class/Lifecycle";
import UseEffect from "./hook/UseEffect";
import Register from "./form/Register";
import EMI from "./lift_state/EMI";
import Props_Parent from './props_drilling/Props_Parent';
import Props_Parent_Context from "./props_drilling_context/Props_Parent_Context";
import Api_Func from "./api/Api_Func";
import Api_Func_Onload from "./api/Api_Func_OnLoad";
import MovieApp from "./api/MovieApp";

import Header from "./template/Header";
import Menubar from "./template/Menubar";
import LeftSideBar from "./template/LeftSideBar";
import RightSideBar from "./template/RightSideBar";
import Footer from "./template/Footer";

// import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//Global Context Variable created
export const GlobalContext = React.createContext();

function App() {

  let temp = {
    globalname: 'Global Name',
    globalcity: 'Global City'
  }

  const [globalState, setGlobalState] = useState(temp);

  return (
    <div>
      <BrowserRouter>
        <GlobalContext.Provider value={{globalState, setGlobalState}}>
          <div className="container">
            <Header />
            <Menubar />
            <div className="row bg-danger-subtle">
              {/* <LeftSideBar /> */}

              {/* <div className="col-6 bg-warning-subtle"> */}
              <div className="col-12 bg-warning-subtle">

                <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/counter" element={<Counter />} />

                  <Route path="/class" element={<ClassComp />} />
                  <Route path="/todo" element={<ToDo />} />
                  <Route path="/todo1" element={<ToDo1 />} />
                  <Route path="/conditionals" element={<Conditionals />} />
                  <Route path="/colortoggle" element={<TextColorToggle />} />
                  <Route path="/colorchange" element={<TextColorChange />} />
                  <Route path="/formbasic" element={<Form_Basic />} />
                  <Route path="/lifecycle" element={<Lifecycle />} />
                  <Route path="/useeffect" element={<UseEffect />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/emi" element={<EMI />} />
                  <Route path="/propsdrilling" element={<Props_Parent />} />
                  <Route path="/propsdrillingcontext" element={<Props_Parent_Context />} />
                  {/* <Route path="/apifunc" element={<Api_Func_Onload />} /> */}
                  <Route path="/apifunc" element={<Api_Func />} />
                  <Route path="/movieapp" element={<MovieApp />} />

                  <Route path="/" element={<Home />} />
                </Routes>
              </div>

              {/* <RightSideBar /> */}
            </div>
            <Footer />
          </div>
        </GlobalContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
