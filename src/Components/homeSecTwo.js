import React from 'react';
import '../css/style.css';
import Item from '../images/hero-img.jpg';

const HomeSecTwo = () => {
  return (
    <>
     <section className='sectionTwo'>
     <h2>EXPLORE</h2>
         <div className='sectionTwoContainer'>

             <div className='sectionTwoItem'>
                 <img src={Item} alt="" />
                 <h3>Beginner</h3>
                 <p>It's specially design for the primary school students</p>
             </div>
             
             <div className='sectionTwoItem'>
                 <img src={Item} alt="" />
                 <h3> Intermediate </h3>
                 <p>It's your time to explore more about your future scope</p>
             </div>

             <div className='sectionTwoItem'>
                 <img src={Item} alt="" />
                 <h3>Advance</h3>
                 <p>Know every right steps to achieve your dream with fullproof strategy</p>
             </div>

             <div className='sectionTwoItem'>
                 <img src={Item} alt="" />
                 <h3>Technical</h3>
                 <p>Technical career Roadmap for your bright future</p>
             </div>

             <div className='sectionTwoItem'>
                 <img src={Item} alt="" />
                 <h3>Non-Technical</h3>
                 <p>Non-Technical career Roadmap for your bright future</p>
             </div>
{/* 
             <div className='sectionTwoItem'>
                 <img src={Item} alt="" />
                 <h3>class</h3>
                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, atque?</p>
             </div> */}

         </div>
     </section>
    </>
  )
}

export default HomeSecTwo;
