import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';
import Services from '@/components/Services';
import Migueria from '@/components/portfolio/Migueria';
import NavbarHero from '@/components/NavbarHero';


export default function Home() {
  return (
    
    <div>
      <NavbarHero/>
      <Navbar />
      <Hero />
    
      <About />

      <Services/>
      <Contact/>
    </div>
  )
}
