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
        <a href="#"><img src="ReducLogo.png" alt="logo" className="w-[15px] h-auto" /></a>
        <ul className="flex justify-center space-x-8 p-2 text-sm font-light">
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
