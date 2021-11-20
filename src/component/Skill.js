import React from 'react'
import "../CSS/skill.css";
import skillpic from '../images/Skills/skills.png'
import skilltarget from '../images/Skills/skill-target.png'
import css3 from '../images/Skills/css3.png'
import manholding from '../images/Skills/manholding.png'
import react from '../images/Skills/react.png'
import html from '../images/Skills/html.png'
import java from '../images/Skills/es6.png'
import node from '../images/Skills/node.png'
import redux from '../images/Skills/redux.png'
import mongo from '../images/Skills/mongo.png'
import git from '../images/Skills/git.png'
import firebase from '../images/Skills/firebase.png'
import photoshop from '../images/Skills/photoshop.png'
import jest from '../images/Skills/jest.png'
import mysql from '../images/Skills/mysql.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faAngleDoubleRight
    
} from '@fortawesome/free-solid-svg-icons'
const Skill = () => {
    return (
        <>
        
      
       <div className="train-skill">

          
       
<div class="card-skill"><span className="skill-clip-sadow"> <img src={skilltarget} alt="Avatar" className="skill-pic1"></img></span>
  
  <div className="degree1">Skills I know<span className="double-arrow-color"> <FontAwesomeIcon icon={faAngleDoubleRight} /></span></div>
</div>

<div className="skill-description">
<div className="skill-card-bogas-1"><img src={manholding} className="skill-pic-manholding"/><img src={react} className="skill-pic-css3-react"/></div>
<div className="skill-card-bogas-2"></div>
<div className="skill-card-bogas-3"> </div>
        <div className="skill-card-css3"><img src={css3} className="skill-pic-css3"/> <div className="title">CSS 3</div><div className="dicription-css3">CSS, built effectively can be used to change the look and feel complete by making small changes.</div></div>
        
        
        <div className="skill-card-html"><img src={html} className="skill-pic-css3"/> <div className="title">HTML 5</div><div className="dicription-css3">The term HTML5 means not only HTML, it is a combination of HTML, CSS and Javascript with APIs .</div></div>
        <div className="skill-pic-css3-javascript"><img src={java} className="skill-pic-javascript"/> <div className="title">Java Script</div><div className="dicription-css3">The term HTML5 means not only HTML, it is a combination of HTML, CSS and Javascript with APIs .</div> </div>
       
        <div className="skill-card-react"><img src={react} className="skill-pic-react"/> <div className="title">React</div><div className="dicription-css3">CSS, built effectively can be used to change the look and feel complete by making small changes.</div></div>
        <div className="skill-card-node"><img src={node} className="skill-pic-node"/> <div className="title">Node JS</div><div className="dicription-css3">CSS, built effectively can be used to change the look and feel complete by making small changes.</div></div>
        <div className="skill-card-css3"><img src={redux} className="skill-pic-redux"/> <div className="title">Redux</div><div className="dicription-css3">CSS, built effectively can be used to change the look and feel complete by making small changes.</div></div>
        <div className="skill-card-css3"><img src={mongo} className="skill-pic-css3"/> <div className="title">Mongodb</div><div className="dicription-css3">CSS, built effectively can be used to change the look and feel complete by making small changes.</div></div>
        <div className="skill-card-css3"><img src={git} className="skill-pic-css3"/> <div className="title">Git</div><div className="dicription-css3">CSS, built effectively can be used to change the look and feel complete by making small changes.</div></div>
        <div className="skill-card-css3"><img src={firebase} className="skill-pic-css3"/> <div className="title">Firebase</div><div className="dicription-css3">CSS, built effectively can be used to change the look and feel complete by making small changes.</div></div>
        <div className="skill-card-css3"><img src={photoshop} className="skill-pic-css3"/> <div className="title">Photoshop</div><div className="dicription-css3">I am good at Photoshop , because it helps me to create web diagrams and logoes very efficiently.</div></div>
        <div className="skill-card-css3"><img src={jest} className="skill-pic-css3"/> <div className="title">Jest</div><div className="dicription-css3">I use it for test javascript code, because it is efficient and fast then other similar products.</div></div>
        <div className="skill-card-css3"><img src={mysql} className="skill-pic-css3"/> <div className="title">MySql</div><div className="dicription-css3">I have used mysql in intial stage of progamming but now i am using non-sql mongodb.</div></div>
      </div>



      </div>

      
      </>
    )
}

export default Skill
