import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'


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
