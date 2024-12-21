import React from 'react';
import sectionOneImg from '../images/hero-img.jpg';
import {useInView} from 'react-intersection-observer'
import '../css/style.css';

const HomeSecOne = () => {

  const [ref, inView] = useInView({
    triggeredOnce: true,
    threshold: .4 // When 40% content show then triggered
  })

  return (
    <>
      <section className='section-one' ref={ref}>
        <div className={`container-one ${inView ? 'normal' : ''}` }>
            <div className='container-one-left'>
                <img src={sectionOneImg} alt="" />
            </div>
            <div className='container-one-right'>
                <h2>Welcome to Pehlakadam</h2>
                <p>Welcome to “PEHLAKADAM”, your trusted companion in unlocking your true potential. Our mission is to empower individuals to transform their lives through comprehensive personality development, expert career guidance, and actionable self-improvement strategies.</p>
                <p>At “PEHLAKADAM”, we believe that growth being with right tools and support. Whether you’re striving for personal confidence personal confidence, professional excellence, or a more fulfilling life.</p>
                <p>We’re here to guide you every step of the way. Join us to explore tailored programs, interactive workshops, and insightful resources designed to help you build skills, achieve clarity, and make confident decision for a brighter future. Let’s grow together!</p>
                 <button className='booking-btn'>See more</button>
            </div>
        </div>
      </section>
    </>
  )
}

export default HomeSecOne;
