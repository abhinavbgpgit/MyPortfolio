import Typewriter from 'typewriter-effect';
import React from 'react'
import '../div.css'
import logo from '../images/hilo.png'
import { FaBeer } from 'react-icons/fa';
const Div = () => {
    return (
       
       <>
       <div className="train-home">         
       
        

             
          <div className="home-box-content">       
                 <div class="text-1"> Hello, my name is </div>
                 <div class="text-2"> Abhinav Kumar </div>
                 <div class="text-3"> And I'm a </div>
                 <div class="text-4">
                 <Typewriter onInit={(typewriter)=>
                 {
                     typewriter.typeString("Front end Developer")
                     .pauseFor(1000)
                     .deleteAll()
                     .typeString("web Designer")
                     .pauseFor(500)
                     .deleteAll()
                     .typeString("Blogger")
                     .pauseFor(1000)
                     .deleteAll()
                     .typeString("web Designer")
                     .pauseFor(2000)
                     .deleteAll()
                     .typeString("FreeLancer")
                     .pauseFor(1000)
                     .deleteAll()
                     .typeString("web Designer")
                     .pauseFor(500)
                     .deleteAll()
                     .typeString("Blogger")
                     .pauseFor(1000)
                     .deleteAll()
                     .typeString("web Designer")
                     .pauseFor(2000)
                     .deleteAll()
                     .typeString("FreeLancer")
                     .pauseFor(1000)
                     .deleteAll()
                     .typeString("web Designer")
                     .pauseFor(500)
                     .deleteAll()
                     .typeString("Blogger")
                     .pauseFor(1000)
                     .deleteAll()
                     .typeString("web Designer")
                     .pauseFor(2000)
                     .deleteAll()
                     .typeString("FreeLancer")
                     .pauseFor(1000)
                     .deleteAll()
                     .typeString("web Designer")
                     .pauseFor(500)
                     .deleteAll()
                     .typeString("Blogger")
                     .pauseFor(1000)
                     .deleteAll()
                     .typeString("web Designer")
                     .pauseFor(2000)
                     .deleteAll()
                     .typeString("FreeLancer")
                      .start(); 
                     
                }
            }
                     
                     />
                     
                      </div>
                 <div><button class="button1" ><span>Hire Me </span></button> </div>             
          </div>


          <div className="picture">
              <img src={logo} alt="webimage" className="karle"></img>
          </div>
         
       
        </div>
        
    </>
    )
}

export default Div;
