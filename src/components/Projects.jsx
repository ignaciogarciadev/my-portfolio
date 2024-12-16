import React from "react";
import projects from "../../projects.json"; // Import the JSON into a variable

export default function Projects() {
  return (
    <div
      id="Projects"
      className="relative flex-col flex items-end justify-center text-center min-h-screen"
    >
      <div className="border-t border-gray-200  w-full h-full flex justify-between items-center pt-10">
        <div className="2xl:max-w-[1400px]  2xl:px-[0] xl:max-w-[1180px] lg:max-w-[924px] md:max-w-[668px] sm:max-w-[640px] max-w-[560px] md:p-[0px] sm:px-[40px] px-[30px] m-auto w-full h-full flex flex-col md:flex-row justify-between items-center">
          <div className="text-left h-full w-full md:w-1/2 flex flex-col items-center justify-center gap-6">
            <div>
              <h2 className="lg:text-7xl md:text-6xl sm:text-7xl text-5xl font-semibold">
                Bakery La Miguería
              </h2>
              <p className="md:text-xl text-md">Website and order page</p>
            </div>
            <div className="w-full h-full text-left flex items-start">
              <a
                className="md:w-3/6 w-full text-center bg-black text-white p-2 my-10 "
                href="https://www.lamigueria.uy"
                target="_blank"
                rel="noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end">
            <img
              src="./lamigueria.png"
              alt="La Miguería"
              className=" pt-10 w-[90%] md:w-[60%] h-auto"
            />
          </div>
        </div>
      </div>
      <div className=" border-b border-t border-gray-200  w-full h-full flex justify-between items-center pt-10">
        <div className="2xl:max-w-[1400px]  2xl:px-[0] xl:max-w-[1180px] lg:max-w-[924px] md:max-w-[668px] sm:max-w-[640px] max-w-[560px] md:p-[0px] sm:px-[40px] px-[30px] m-auto w-full h-full flex flex-col md:flex-row justify-between items-center">
          <div className="text-left h-full w-full md:w-1/2 flex flex-col items-center justify-center gap-6">
            <div>
              <h2 className="lg:text-7xl md:text-6xl sm:text-7xl text-5xl font-semibold">
                Pizzería La Nonna
              </h2>
              <p className="md:text-xl text-md">Website and order page</p>
            </div>
            <div className="w-full h-full text-left flex items-start">
              <a
                className="md:w-3/6 w-full text-center bg-black text-white p-2 my-10 "
                href="https://www.lanonna.uy"
                target="_blank"
                rel="noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end">
            <img
              src="./lanonna.png"
              alt="La Miguería"
              className=" pt-10 w-[90%] md:w-[60%] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
