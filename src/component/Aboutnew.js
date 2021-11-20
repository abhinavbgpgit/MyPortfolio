import { div } from 'prelude-ls'
import React from 'react'
import "../CSS/aboutNew.css";
import logo from '../images/about/abhinav.png'
import VS_PIC from '../images/about/designer.png'
const About = () => {
    return(
    <div className="about-full-div">

<div className="intro-and-photo">
    <div className="intro-and-photo-inner">
<div className="about-my-intro">
<div className="about-word-first-text">a<span>b</span>out<span>.</span></div>
<div className="about-word-second-text">I'm a web developer based in Bihar, India.</div>
<div className="about-word-third-text">I enjoy turning complex problems into simple, beautiful and intuitive designs. When I'm not pushing pixels, you'll find me cooking, gardening or working out in the park.<span>.</span></div>
</div>
<div className="about-my-photo"><img src={logo} alt="webimage" className="my-photo"></img></div>
</div>
</div>

{/* second start

<div className="intro-and-photo-part">
    <div className="intro-and-photo-inner-part">
<div className="about-my-intro-part">
<div className="about-word-first-text-part">a<span>b</span>out<span>.</span></div>
<div className="about-word-second-text-part">I'm a web developer based in Bihar, India.</div>
<div className="about-word-third-text-part">I enjoy turning complex problems into simple, beautiful and intuitive designs. When I'm not pushing pixels, you'll find me cooking, gardening or working out in the park.<span>.</span></div>
</div>
<div className="about-my-photo-part"><img src={VS_PIC} alt="webimage" className="my-photo-part"></img>
</div>
<div className="about-my-photo-part-3">
    <div> headin</div>
    <div>
        <ul>
            <li>line one </li>
            <li>line two </li>
            <li>line three </li>
            <li>line four </li>
            <li>line five </li>
            </ul>
            </div>
    
    PART 3
</div> */}



    </div>)
}
export default About 