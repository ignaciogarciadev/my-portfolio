"use client";
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Contact from '../components/Contact';
import NavbarHero from '@/components/NavbarHero';
import Skills from '@/components/Skills';
import { List } from '@/components/List';
import { Item } from '@/components/Item';

export default function Home() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div>
      <NavbarHero />
      <Navbar />
      <Hero />
      <About />
       {/* Siempre renderizamos la lista */}
       <List selectedId={selectedId} setSelectedId={setSelectedId} />

{/* Superponemos el Item como overlay */}
<AnimatePresence>
  {selectedId && (
    <Item id={selectedId} setSelectedId={setSelectedId} key="item" />
  )}
</AnimatePresence>
      <Skills />
      <Contact />
    </div>
  );
}
