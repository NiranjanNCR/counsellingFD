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
                 <p>Our music school was founded in 1999 to help students of all ages from all over the state to pursue their dream of becoming musicians. If you would like to learn how to play any musical instrument, our school is the place for you, regardless of your age and social status. We offer group and private lessons for children and adults.</p>
             </div>

             <div className='f-contant'>
             <h1>Our Programms</h1>
             <ul>
               <li><a href="#">prg</a></li>
               <li><a href="#">prg</a></li>
               <li><a href="#">prg</a></li>
               <li><a href="#">prg</a></li>
               <li><a href="#">prg</a></li>
               <li><a href="#">prg</a></li>
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
