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
                <h2>Welcome to Our counselors</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio est neque delectus ratione numquam ipsa dignissimos ex ut, eveniet provident praesentium, illum exercitationem architecto. Enim, ipsa. Similique fugiat voluptate nemo?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio est neque delectus ratione numquam ipsa dignissimos ex ut, eveniet provident praesentium, illum exercitationem architecto. Enim, ipsa. Similique fugiat voluptate nemo?</p>
                 <button className='booking-btn'>See more</button>
            </div>
        </div>
      </section>
    </>
  )
}

export default HomeSecOne;
