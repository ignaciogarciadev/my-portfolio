import React from 'react';
import '../app/globals.css';
import Test2 from './AboutGpt';


function home() {
    return (
        <div id='About' className="bg-black relative flex items-center justify-center text-center h-[100vh]">
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>
        <div className="relative z-20 w-[70%]">
          <h1 className="text-6xl font-normal text-white">About Me</h1>
          <hr className=' ' />
          <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. A corrupti voluptatibus cupiditate et minima molestias deleniti reprehenderit ab laudantium rerum dignissimos facilis, laboriosam veritatis aperiam necessitatibus velit asperiores reiciendis? Aliquam delectus quibusdam error facere veniam est quo explicabo quam. Magnam voluptas impedit alias facere natus velit ad modi cumque. Id beatae pariatur hic sit ea nihil, voluptatum, cupiditate porro quisquam eveniet, recusandae saepe omnis ipsum provident est quae at nam soluta consectetur necessitatibus esse aliquid dignissimos delectus expedita? Non enim repellat esse dignissimos deserunt nostrum, et numquam? Ratione minus amet quisquam dolorum fugiat enim! Alias eius dignissimos dicta delectus sint?</p>

        </div>
        </div>

    )
}

export default home;