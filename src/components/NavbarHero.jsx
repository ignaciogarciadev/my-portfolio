"use client";

import "../app/globals.css";

import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import hamburgerBtn from "../assets/hamburgerBtn.svg";
import closeBtn from "../assets/closebtn.svg";
import Image from "next/image";

function NavbarHero() {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);
  return (
    <div className=" w-[100%] h-[40px] bg-black">
      <nav
        className=" left-0 w-full bg-black text-white transition-all duration-300 flex justify-center items-center z-50"  >
        <div className="w-[90%] flex justify-between items-center">
          <div></div>
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

      <div className="md:hidden" onClick={handleClick}>
        <Image
          className="sm:h-[25px] h-[20px] "
          src={toggle ? closeBtn : hamburgerBtn}
          alt="menu icon"
        />
      </div>
    </div>
  );
}

export default NavbarHero;
