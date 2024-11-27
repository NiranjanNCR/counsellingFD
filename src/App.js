import React from 'react';
import ContactForm from './Components/ContactForm';
import Footer from './Components/footer';
import HomeSecOne from './Components/homeSecOne';
import HomeSecTwo from './Components/homeSecTwo';
import Mentors from './Components/Mentors';
import NavigationBar from './Components/NavigationBar';

const App = () => {
  return (
    <>
      <NavigationBar/>
      <HomeSecOne/>
      <HomeSecTwo/>
      <Mentors/>
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default App




