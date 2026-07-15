import React from 'react'
import { Star } from 'lucide-react'

const ServicePage3 = () => {
  return (
    <>
       <div className='w-full h-full bg-white py-24 px-6 md:px:12 lg:px-20 md:py-26 '>
                    <div className='w-full flex flex-col lg:flex-row lg:justify-between'>
                   <div className='flex-col w-full lg:w-[65%] flex'>
                  <h1 className='font-sans text-3xl md:text-5xl max-w-md font-extrabold '>Mobile App Development</h1>
                  <p className='text-black/80 text-lg max-w-lg mt-6'>Native and cross-platform mobile applications that deliver exceptional user experiences.</p>
                  <ul className='mt-6 text-lg leading-loose'>
                    <li className='flex gap-3 items-center'><Star size={14} className='text-[#E85D2C]'/>iOS & Android</li>
                    <li className='flex gap-3 items-center'><Star size={14} className='text-[#E85D2C]'/>React Native</li>
                    <li className='flex gap-3 items-center'><Star size={14} className='text-[#E85D2C]'/>Flutter</li>
                    <li className='flex gap-3 items-center'><Star size={14} className='text-[#E85D2C]'/>App Store Optimization</li>
                  </ul>
                   </div>
                   <div className='lg:w-[40%] relative w-full h-full mt-6 md:mt-0'>
                    <img className='w-full  rounded-2xl object-cover max-w-md h-[550px]' src="https://images.unsplash.com/photo-1633250391894-397930e3f5f2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" 
                    />
                     <div className='text-black text-sm font-medium rounded-full bg-white px-4 py-1 absolute bottom-4 left-4'>
                     Mobile
                    </div>
                   </div>
                  </div>
                  </div>
    </>
  )
}

export default ServicePage3
