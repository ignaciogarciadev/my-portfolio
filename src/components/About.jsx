"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../app/globals.css";

function Home() {
  const sectionRef = useRef(null);

  // Configuramos useScroll para medir el progreso del scroll de la sección.
  // Con offset definimos que cuando la parte superior de la sección esté en el 90% del viewport (casi visible)
  // el progreso sea 0, y cuando la parte inferior esté en el 10% del viewport, el progreso sea 1.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 90%", "end 10%"],
  });

  // Mapeo de scroll:
  // Al 0: scale 0.8 y opacity 0.
  // Al 0.5 (centro): scale 1 y opacity 1.
  // Al 1: scale 0.8 y opacity 0.
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <div
      id="About"
      ref={sectionRef}
      className="bg-black relative flex flex-col items-center justify-center text-center min-h-[200vh]"
    >
      {/* Fondo semitransparente */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-100"></div>
      <div className="flex flex-col items-center justify-center z-99 space-y-4">
        {/* Título: al centro (scrollYProgress = 0.5) se mostrará a 100% de tamaño y opacidad */}
        <motion.h1
          className="text-4xl font-light text-white"
          style={{ scale, opacity }}
        >
          About Me
        </motion.h1>
        {/* Separador (HR) */}
        <motion.hr
          className="border-2 border-green-500 w-[70px]"
          style={{ scale, opacity }}
        />
        {/* Bloque de texto */}
        <motion.div className="w-[60%]" style={{ scale, opacity }}>
          <p className="text-white">
            Hi! I&apos;m Ignacio, a passionate and innovative software developer
            with a knack for problem-solving and a love for creating robust
            applications. I specialize in JavaScript, and I&apos;m always
            excited to explore new technologies and challenges.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
