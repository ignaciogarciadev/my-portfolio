import React from 'react';
import { name } from 'react-lorem-ipsum';

function Skills() {
  // Lista de habilidades con sus respectivos logos en color
  const skills = [
    {
      name: 'ReactJs',
      logoColor: '/skills/reactjs_c.png',
    },
    {
      name: 'Next.js',
      logoColor: '/skills/nextjs_c.png',
    }, 
    {
      name: 'JavaScript',
      logoColor: '/skills/js_c.png',

    },
    {
      name: 'TypeScript',
      logoColor: '/skills/ts_c.png',
    },
    {
      name: 'Tailwind CSS',
      logoColor: '/skills/tailwindcss_c.png',
    },
    {
      name: 'Node.js',
      logoColor: '/skills/nodejs_c.png',
    },
    {
      name: 'Python',
      logoColor: '/skills/python_c.png',
    },
    {
      name:'MongoDB',
      logoColor: '/skills/mongodb_c.png',
    },
    {
      name: 'Figma',
      logoColor: '/skills/figma_c.png',
    }
    // Agrega más habilidades aquí
  ];

  return (
    <div id='Skills' className='bg-black h-[100vh] text-white flex flex-col items-center justify-center px-8'>
      <h1 className='text-5xl font-light mb-6 text-center'>Skills</h1>
      <div className='flex flex-row overflow-auto scroll-smooth gap-4 [&::-webkit-scrollbar]:w-[5px] [&::-webkit-scrollbar]:h-[5px] [&::-webkit-scrollbar]:bg-gray-800 [&::-webkit-scrollbar-thumb]:bg-gray-700 dark:[&::-webkit-scrollbar]:w-[5px] dark:[&::-webkit-scrollbar]:h-[5px] dark:[&::-webkit-scrollbar-track]:bg-gray-900 dark:[&::-webkit-scrollbar-thumb]:bg-green-500 dark:[&::-webkit-scrollbar-track]:bg-neutral-700'>
        {skills.map((skill, index) => (
            <img
            key={index}
              src={skill.logoColor}
              alt={`${skill.name} Skill logo`}
              className=' h-[250px] w-auto filter grayscale transition-all duration-500 ease-in-out hover:filter-none'
            />
        ))}
        </div>
    </div>
  );
}

export default Skills;
