"use client";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 500;

      if (window.scrollY > scrollThreshold) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed left-0 w-full bg-black text-white transition-all duration-300 flex justify-center items-center z-50 ${
        showNavbar ? "top-0" : "top-[-100px]"
      } backdrop-blur-md bg-opacity-30`}
    >
      <div className="w-[90%] flex justify-between items-center">
        <img src="ReducLogo.png" alt="logo" className="w-[15px] h-auto" />
        <ul className="flex justify-center space-x-8 p-2 text-sm font-light">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Servicios</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
