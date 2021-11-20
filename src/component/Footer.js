import React from 'react'
import "../CSS/footer.css";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faBars,
    faTimes,
  
    
} from '@fortawesome/free-solid-svg-icons'
import { 
    faFacebook ,
    faTwitter,
    faInstagram,
    faYoutube
} from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div className="footer">
           <div className="waves">
               <div className="wave" id="wave1"></div>
               <div className="wave" id="wave2"></div>
               <div className="wave" id="wave3"></div>
               <div className="wave" id="wave4"></div>
</div>


           <ul className="social_icon">
<li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
<li><a href="#"><FontAwesomeIcon icon={faTwitter}/></a></li>
<li><a href="#"><FontAwesomeIcon  icon={faInstagram} /></a></li>
<li><a href="#"><FontAwesomeIcon icon={faYoutube}/></a></li>
           </ul>

           <ul className="menu">        
     
     <li className="nav-item">
        <NavLink className="nav-link" to="/Div" >
         
        Home</NavLink>
       </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/About" >
         
        AboutMe</NavLink>
       </li>
        
               
       <li className="nav-item">
         <NavLink className="nav-link" to="/Services" >Services</NavLink>
         </li>

         <li className="nav-item">
         <NavLink className="nav-link" to="/Calculator" >Skills</NavLink>
         </li>

         <li className="nav-item">
         <NavLink className="nav-link" to="/Calculator" >Contact</NavLink>
         </li>

         <li className="nav-item">
         <NavLink className="nav-link" to="/Calculator" o>Projects</NavLink>
         </li>

        
       
    </ul>
<div className="copyright">
© 2021 A new approach to website developement
</div>

        </div>
    )
}

export default Footer
