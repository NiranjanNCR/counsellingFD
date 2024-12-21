import React, { useState } from 'react';
import "../css/style.css";
// import HeroImg from "../../public/images/hero-img.jpg"
import HeroImg from "../images/hero-img.jpg";
import logo from "../images/logo PKD.png"
import { FaBars } from "react-icons/fa";

const NavigationBar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [listOpen, setListOpen] = useState(false);

  const toggleMenu = () =>{
    setMenuOpen(!menuOpen);
  }
  const toggleProgram = () =>{
    setListOpen(!listOpen);
  }

  return (
    <>
      <nav className='mainNav'>
       <div className='navContainer'>
           <div className='logo'><img src={logo} alt="logo.." /></div>
           <div className={`nav-Items ${menuOpen ? 'open' : ''}`}>
               <ul>
               <li><a href="#">Home</a></li>
               <li><a href="#">About</a></li>
               <li><a onClick={toggleProgram} href="#">Programs</a>
               <div className={`program-list ${listOpen ? 'open' : '' }`} >
               <ul>
                   <li>DISC</li>
                   <li>Myers-briggs Type Indicator</li>
                   <li>Personality Factor Questionnaire</li>
                   <li>Eysenck Personality Inventory  </li>
                   <li>Enneagram test  </li>
                   <li>Caliper</li>
                   <li>Minnesota Multiphasic Personality Inventory </li>
               </ul>
               </div>
               </li>
               <li><a href="#">Resources</a></li>
               <li><a href="#">Contact</a></li>
               <button className='booking-btn'>Book session</button>
               </ul>
           </div>
       <div className='menubtn' onClick={toggleMenu}><FaBars size={40}/></div> 
       </div>
      </nav>


<main className='hero-section'>

<div className='hero-left'>
    <h1>Take your <span>First</span> Step <span>wisely</span></h1>
    <p>Empower your journey to success build essential skills for growth gain unshakable con</p>
</div>
<div className='hero-image'><img src={HeroImg} alt="" /></div>

</main>

    </>
  )
}

export default NavigationBar;
