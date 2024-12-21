import React from 'react';
import '../css/style.css';
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
     <footer>
         <div className='footer-container'>
             <div className='f-contant'>
                 <h1>About US</h1>
                 <p>Welcome to “PEHLAKADAM”, your trusted companion in unlocking your true potential. Our mission is to empower individuals to transform their lives through comprehensive personality development, expert career guidance, and actionable self-improvement strategies.</p>
             </div>

             <div className='f-contant'>
             <h1>Our Programms</h1>
             <ul>
               <li><a href="#">DISC</a></li>
               <li><a href="#">Myers-briggs Type Indicator </a></li>
               <li><a href="#">Personality Factor Questionnaire</a></li>
               <li><a href="#">Eysenck Personality Inventory</a></li>
               <li><a href="#">Enneagram test</a></li>
               <li><a href="#">Caliper</a></li>
               <li><a href="#">Minnesota Multiphasic Personality Inventory </a></li>
             </ul>
             </div>

             <div className='f-contant'>
             <h1>Connect On</h1>
             <div className='footer-media-icons'>
             <a href="#"><FaInstagram/></a>
             <a href="#"><FaYoutube /></a>
             <a href="#"><FaWhatsapp /></a>
             </div>

             </div>

         </div>
         <div className='rights'>
             <p>ALL RIGHTS RESERVED AT N & M MENTO</p>
         </div>
     </footer> 
    </>
  )
}

export default Footer
