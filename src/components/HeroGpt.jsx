"use client";
import "../app/globals.css";
import React, { useState, useEffect, useRef } from 'react';

const TypeWriterEffect = () => {
  const res = [
    "Welcome to my portfolio",
  ];

  const [textPosition, setTextPosition] = useState(0);
  const [showBlinker, setShowBlinker] = useState(true);
  const speed = 150;

  const typeWriter = () => {
    if (textPosition < res[0].length) {
      setTextPosition((prevPosition) => prevPosition + 1);
    } else {
      setTimeout(() => {
        setShowBlinker(false);
      }, 3000);
    }
  };

  const containerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.9, // El 50% del elemento debe estar visible
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Comienza la animación cuando el elemento es visible
          const interval = setInterval(typeWriter, speed);
          return () => clearInterval(interval);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef, textPosition]);

  return (
    <div className="mb-3 product-description-holder row" ref={containerRef}>
      <div className="col-12 p-2">
        <div className="form-control holder">
          {res[0].substring(0, textPosition)}
          {showBlinker && <span id="blinker" className="w-[10px] h-[20px] bg-black">||</span>}
        </div>
      </div>
    </div>
  );
};

export default TypeWriterEffect;
