import React from "react" ;
import {  Route, Switch } from 'react-router-dom';
import Error from "./Error";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "./component/Footer";
import Aboutnew from "./component/Aboutnew";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";
import Services from "./component/Services";
import Div from "./component/Div";


import "./App.css";
import "./bootstrap.css";
/*import './Fish.png';*/

const App = () => {
  return (
    <>
   <Navbar/>
   <Route exact path="/">
   <Div/>
   </Route>
   
   

   <Route path="/Aboutnew">
   <Aboutnew/>
   </Route>

   <Route path="/Div">
   <Div/>
   </Route>
  
   <Route path="/Services">
   <Services/>
   </Route>
   
   
   
   <Route  path="/Contact">
   <Contact/>
   </Route>

  <Footer/>


   </>
 
  );
};

export default App;