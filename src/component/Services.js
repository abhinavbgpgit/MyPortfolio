import React from 'react'
import '../service.css'
import logo from '../images/service.png'
import sign from '../images/signature.png'
import aboutme from '../images/service2.png'
import kaka from '../images/services/web-degine-logo.jpg'
import responsive from '../images/services/responsive.png'
import hosting from '../images/services/hosting.png'
import webmaintain from '../images/services/website-maintenance.png'

const Services = () => {
    return (
      <>
      <div className="our-services"><img src={aboutme} className="about-us"/> </div>
       <div className="train-service">


        <div className="intro">    
<div class="card-service1"> <img src={logo} alt="Avatar" className="service-cartoon"></img>

  </div>
</div>
         
        <div className="discription1 ">
            
            

                  {/* card1 strats*/}
                  <div className="service-grid1 ">
                  <div class="card-service" >
            <div class="a-box">
  <div class="img-container">
    <div class="img-inner">
      <div class="inner-skew">
        <img src={kaka} className="webdegine-pic"/>
      </div>
    </div>
   </div>
  
   <div class="text-container">
    <h3>Website Design</h3>
    <div>
    Our approach to website design is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience.
  </div>
  <div><button class="button" ><span>View more</span></button> </div> 
  </div> 
</div>
</div>

                  {/* card1 ends */}
           

            </div>


            <div className="service-grid2 ">
            
              {/* card 2 strats Responsive Website Design*/}

              <div class="card-service" >
            <div class="a-box">
  <div class="img-container">
    <div class="img-inner">
      <div class="inner-skew">
        <img src={responsive} className="responsive-pic"/>
      </div>
    </div>
   </div>
  
   <div class="text-container">
    <h3>Responsive Website Design</h3>
    <div>
    Having a responsive layout means that your website fluidly resizes for optimal viewing regardless of the screen size or device (e.g. iPhone, iPad).
  </div>
  <div><button class="button" ><span>View more</span></button> </div> 
  </div> 
</div>
</div>

                  {/* card2 ends */}
           
            
            
            </div>
            <div className="service-grid3">
            
            
              {/* card3 strats*/}

              <div class="card-service" >
            <div class="a-box">
  <div class="img-container">
    <div class="img-inner">
      <div class="inner-skew">
        <img src={hosting} className="hosting-pic"/>
      </div>
    </div>
   </div>
  
   <div class="text-container">
    <h3>Hosting</h3>
    <div>
      This a demo experiment to skew image container.This a demo experiment to skew image container.  It looks good.
      This a demo experiment to skew image container.This a demo experiment to skew image container.  It looks good.
  </div>
  <div><button class="button" ><span>View more</span></button> </div> 
  </div> 
</div>
</div>

                  {/* card 3 ends */}
           
            
            
            </div>
            <div className="service-grid4">
            
              {/* card 4   strats*/}

              <div class="card-service4" >
            <div class="a-box">
  <div class="img-container">
    <div class="img-inner">
      <div class="inner-skew">
        <img src={webmaintain} className="webmaintain-pic"/>
      </div>
    </div>
   </div>
  
   <div class="text-container">
    <h3>Ongoing Website Maintenance</h3>
    <div>
      This a demo experiment to skew image container.This a demo experiment to skew image container.  It looks good.
      This a demo experiment to skew image container.This a demo experiment to skew image container.  It looks good.
  </div>
  <div><button class="button" ><span>View more</span></button> </div> 
  </div> 
</div>
</div>

                  {/* card 4 ends */}
           
            
            
            </div>
            
        </div>
          
     



      </div>
      </>
    )
}

export default Services
