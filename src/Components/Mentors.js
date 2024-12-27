import React from 'react';
import img1 from '../images/nrj.png'
import img2 from '../images/mohit_m.png'
import img3 from '../images/manish_m.png'
import style from '../css/style.css';

const Mentors = () => {
  return (
    <>
      <section className='mentor-sec'>
         <h2>Mentors</h2>
         <div className='mentors-container'>
         <div className='mentors'>
             <img src={img2} alt="" />
             <p>MOHIT ANAND DUBEY</p>
             <span> BITS PILANI </span>
             {/* <span>UNIFIED COMMUNICATIONS AND COLLABORATION </span> */}
         </div>
         <div className='mentors'>
             <img src={img1} alt="" />
             <p>NIRANJAN SINGH</p>
             <span>PUNJABI UNIVERSITY PATIALA</span>
         </div>
         <div className='mentors'>
             <img src={img3} alt="" />
             <p>MANISH KUMAR RANA</p>
             <span>BITS PILANI</span>
         </div>
         </div>
      </section>
    </>
  )
}

export default Mentors;
