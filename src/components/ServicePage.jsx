import { Star } from 'lucide-react'
import React from 'react'

const ServicePage = () => {
  return (
    <>
      <div className='w-full h-full bg-white py-24 px-6 md:py-26 '>
        <div className='w-full flex flex-col lg:flex-row lg:justify-between'>
       <div className='flex-col w-full lg:w-[45%] flex'>
      <h1 className='font-sans text-5xl max-w-md font-extrabold'>Custom Software Development</h1>
      <p className='text-black/80 text-lg max-w-lg'>Tailored solutions designed to solve your unique business challenges and drive growth.</p>
      <ul>
        <li className='flex gap-3 items-center'><Star size={14} className='text-[#E85D2C]'/>Enterprise Applications</li>
        <li className='flex gap-3 items-center'><Star size={14} className='text-[#E85D2C]'/>Legacy System Modernization</li>
        <li className='flex gap-3 items-center'><Star size={14} className='text-[#E85D2C]'/>API Development</li>
        <li className='flex gap-3 items-center'><Star size={14} className='text-[#E85D2C]'/>Database Design</li>
      </ul>
       </div>
       <div className='lg:w-[50%] w-full h-full'>
        <img className='w-full rounded-2xl max-w-xl h-[500px]' src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTEVxKruRegQQw2XycJzbhRqHpzMwvxenDtXHcfGdGLAjkYAHbb" alt="" />
       </div>
      </div>
      </div>
    </>
  )
}

export default ServicePage
