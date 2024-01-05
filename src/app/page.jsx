import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../pages/Hero'
import About from '../pages/About'
import Contact from '../pages/Contact'


export default function Home() {
  return (
    
    <div>
      <Navbar />
      <Hero />
      <About/>
      <Contact/>
    </div>
  )
}
