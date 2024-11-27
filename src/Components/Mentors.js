import React from 'react';
import img1 from '../images/nrj.png'
import style from '../css/style.css';

const Mentors = () => {
  return (
    <>
      <section className='mentor-sec'>
         <h2>Mentors</h2>
         <div className='mentors-container'>
         <div className='mentors'>
             <img src={img1} alt="" />
             <p>Name</p>
             <span>Title name</span>
         </div>
         <div className='mentors'>
             <img src={img1} alt="" />
             <p>Name</p>
             <span>Title name</span>
         </div>
         <div className='mentors'>
             <img src={img1} alt="" />
             <p>Name</p>
             <span>Title name</span>
         </div>
         </div>
      </section>
    </>
  )
}

export default Mentors;
