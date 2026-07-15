import { Star } from 'lucide-react'
import React from 'react'

const ServicePage = () => {
  return (
    <>
      <div className='w-full h-full bg-white py-24 px-6 md:px:12 lg:px-20 md:py-26 '>
        <div className='w-full flex flex-col lg:flex-row lg:justify-between'>
       <div className='flex-col w-full lg:w-[65%] flex'>
      <h1 className='font-sans text-3xl md:text-5xl max-w-md font-extrabold '>Custom Software Development</h1>
      <p className='text-black/80 text-lg max-w-lg mt-6'>Tailored solutions designed to solve your unique business challenges and drive growth.</p>
      <ul className='mt-6 leading-loose text-lg'>
        <li className='flex gap-3 items-center'><Star size={14} className='text-[#E85D2C]'/>Enterprise Applications</li>
        <li className='flex gap-3 items-center'><Star size={14} className='text-[#E85D2C]'/>Legacy System Modernization</li>
        <li className='flex gap-3 items-center'><Star size={14} className='text-[#E85D2C]'/>API Development</li>
        <li className='flex gap-3 items-center'><Star size={14} className='text-[#E85D2C]'/>Database Design</li>
      </ul>
       </div>
       <div className='lg:w-[40%] relative w-full h-full mt-6 md:mt-0'>
        <img className='w-full  rounded-2xl object-cover max-w-md h-[550px]' src="https://images.unsplash.com/photo-1607706189992-eae578626c86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D" alt="" 
        />
         <div className='text-black text-sm font-medium rounded-full bg-white px-4 py-1 absolute bottom-4 left-4'>
         Custom Software
        </div>
       </div>
      </div>
      </div>
    </>
  )
}

export default ServicePage
