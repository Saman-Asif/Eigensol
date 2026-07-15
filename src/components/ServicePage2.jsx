import React from 'react'
import { Star } from 'lucide-react'
const ServicePage2 = () => {
  return (
    <>
       <div className='w-full h-full bg-white py-24 px-6 md:px:12 lg:px-20 md:py-26 '>
              <div className='w-full flex flex-col lg:flex-row lg:justify-between'>
             <div className='flex-col w-full lg:w-[65%] flex'>
            <h1 className='font-sans text-3xl md:text-5xl max-w-md font-extrabold '>Web Application Development</h1>
            <p className='text-black/80 text-lg max-w-lg mt-6'>High-performance web applications built with modern frameworks and best practices.</p>
            <ul className='mt-6 text-lg leading-loose'>
              <li className='flex gap-3 items-center'><Star size={14} className='text-[#E85D2C]'/>React & Next.js</li>
              <li className='flex gap-3 items-center'><Star size={14} className='text-[#E85D2C]'/>Progressive Web Apps</li>
              <li className='flex gap-3 items-center'><Star size={14} className='text-[#E85D2C]'/>E-commerce Platforms</li>
              <li className='flex gap-3 items-center'><Star size={14} className='text-[#E85D2C]'/>SaaS Solutions</li>
            </ul>
             </div>
             <div className='lg:w-[40%] relative w-full h-full mt-6 md:mt-0'>
              <img className='w-full  rounded-2xl object-cover max-w-md h-[550px]' src="https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww" alt="" 
              />
               <div className='text-black text-sm font-medium rounded-full bg-white px-4 py-1 absolute bottom-4 left-4'>
               Web Apps
              </div>
             </div>
            </div>
            </div>
    </>
  )
}

export default ServicePage2
