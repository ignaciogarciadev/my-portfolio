import React from 'react'

function Migueria() {
  return (
    <div className='w-full bg-black h-screen grid grid-cols-1 md:grid-cols-2'>
      <div className='text-white h-[100vh] p-4 flex flex-col justify-center items-start text-left'>
        <h2 className='text-3xl font-semibold'>Panadería La Miguería</h2>
        <h3 className='text-md font-light'>Página de pedidos</h3>
      </div>
      <div className='flex justify-center items-end'>
        <img src="lamigueria.png" alt="" className='max-w-[350px]' />
      </div>


        
    </div>
  )
}

export default Migueria