"use client";

import "../app/globals.css";

import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo.svg";
import hamburgerBtn from "../assets/hamburgerBtn.svg";
import closeBtn from "../assets/closeBtn.svg";
import Image from "next/image";

function Navbar() {
    const [toggle, setToggle] = useState(false);
    const handleClick = () => setToggle(!toggle);
    return (
        <div className=" z-50 w-full h-[80px] bg-white fixed">
            <div className=" bg-white 2xl:max-w-[1400px] 2xl:px-[0] xl:max-w-[1180px] lg:max-w-[924px] md:max-w-[668px] sm:max-w-[640px] max-w-[560px] md:px-[0px] sm:px-[40px] px-[30px] m-auto w-full h-full flex justify-between items-center">
                <a href="#Hero"><Image src={Logo} alt="logo" className="sm:h-[40px] h-[30px] w-[auto] " /></a>
                <div className="hidden md:flex items-center">
                    <ul className="flex gap-6">
                        <li><a href="#Hero">Home</a></li>
                        <li><a href="#About">About</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </ul>
                </div>

                <div className="md:hidden" onClick={handleClick}>
                    <Image className="sm:h-[25px] h-[20px] " src={toggle ? closeBtn : hamburgerBtn} alt="menu icon" />
                </div>
            </div>

            <div className={toggle ? 'md:max-w-[668px] sm:max-w-[640px] max-w-[560px] md:px-[0px] sm:px-[40px] px-[30px] m-auto w-full absolute left-1/2 transform -translate-x-1/2 p-4 bg-white px-16 md:hidden border-b' : 'hidden'}>
                <ul className="">
                    <li><a href="#Hero" onClick={handleClick}>Home</a></li>
                    <li><a href="#About" onClick={handleClick}>About</a></li>
                    <li><a href="#Contact" onClick={handleClick}>Contact</a></li>
                </ul>
            </div>


        </div>
    );
}

export default Navbar;
