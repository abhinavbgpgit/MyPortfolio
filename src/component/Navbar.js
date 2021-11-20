import { div } from 'prelude-ls'
import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import "../App.css";
import "../CSS/navbar2.css";
import { BiUser } from "react-icons/bi";
import { FcMenu,FcBusinessman,FcServices, FcHome,FcContacts,FcInternal} from "react-icons/fc";
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [isActive, setActive] = useState(false);
 

  const toggleClass = () => {
    setActive(!isActive);
   
  };
    return(
           
     
        <div className="nav1 ">
    
        <div className="logo">Portfo<span className="logo1">lio</span></div>
    <div>
      <button className={isActive ? 'bar-button-hide': 'bar-button'} onClick={toggleClass} ><AiOutlineMenu/>   </button>
      <button className={isActive ? 'cancel-button': 'cancel-button-hide'} onClick={toggleClass} ><AiOutlineClose/>   </button>
    </div>
    <div className="ul-container">
      <ul className={isActive ? '': 'ul-hide'} >
        
      <li>
          <NavLink className="nav-link" to="/Div"  onClick={toggleClass} ><div className="icon"><FcHome/> </div><span>Home</span></NavLink>
        </li>
      
        <li>
          <NavLink className="nav-link" to="/Aboutnew" onClick={toggleClass}><div className="icon"><FcBusinessman/> </div><span>About Me</span></NavLink>
        </li>
        
        <li>
          <NavLink className="nav-link" to="/Services" onClick={toggleClass}><div className="icon"><FcServices/></div><span>Services</span></NavLink>
        </li>
        
        
          <li>
          <NavLink className="nav-link" to="/Contact" onClick={toggleClass}><div className="icon" ><FcContacts/></div><span>Contact</span></NavLink>
          </li>
         
          
          <li>
          <NavLink className="nav-link" to="/Contact" onClick={toggleClass}><div className="icon" ><FcInternal/></div><span>More</span></NavLink>
          </li>
          
     </ul>
     </div>
     
    </div>
    
  
     
        )
}
export default Navbar 