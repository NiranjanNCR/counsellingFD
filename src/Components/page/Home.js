import React from 'react'
import Footer from '../footer'
import ContactForm from '../ContactForm'
import NavigationBar from '../NavigationBar'
import HomeSecOne from '../homeSecOne'
import HomeSecTwo from '../homeSecTwo'
import Mentors from '../Mentors'
// import Link from 'react-router-dom'
import HeroSection from '../HeroSection'


const Home = () => {
  return (
    <>
      <NavigationBar/>
      <HeroSection/>
      <HomeSecOne/>
      <HomeSecTwo/>
      <Mentors/>
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default Home