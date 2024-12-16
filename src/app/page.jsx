import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';
import Projects from '@/components/Projects';


export default function Home() {
  return (
    
    <div>
      <Navbar />
      <Hero />
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}
