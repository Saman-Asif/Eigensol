import React from 'react'
import { Star } from 'lucide-react'

const ServicePage5 = () => {
  return (
    <>
       <div className='w-full h-full bg-white py-24 px-6 md:px:12 lg:px-20 md:py-26 '>
                          <div className='w-full flex flex-col lg:flex-row lg:justify-between'>
                         <div className='flex-col w-full lg:w-[65%] flex'>
                        <h1 className='font-sans text-3xl md:text-5xl max-w-md font-extrabold '>AI Automation & DevOps</h1>
                        <p className='text-black/80 text-lg max-w-lg mt-6'>Intelligent automation and robust infrastructure to accelerate delivery and ensure reliability.</p>
                        <ul className='mt-6 text-lg leading-loose'>
                          <li className='flex gap-3 items-center'><Star size={14} className='text-[#E85D2C]'/>Machine Learning</li>
                          <li className='flex gap-3 items-center'><Star size={14} className='text-[#E85D2C]'/>CI/CD Pipelines</li>
                          <li className='flex gap-3 items-center'><Star size={14} className='text-[#E85D2C]'/>Cloud Infrastructure</li>
                          <li className='flex gap-3 items-center'><Star size={14} className='text-[#E85D2C]'/>Monitoring & Analytics</li>
                        </ul>
                         </div>
                         <div className='lg:w-[40%] relative w-full h-full mt-6 md:mt-0'>
                          <img className='w-full  rounded-2xl object-cover max-w-md h-[550px]' src="https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWl8ZW58MHx8MHx8fDA%3D" alt="" 
                          />
                           <div className='text-black text-sm font-medium rounded-full bg-white px-4 py-1 absolute bottom-4 left-4'>
                           AI & DevOps
                          </div>
                         </div>
                        </div>
                        </div>
    </>
  )
}

export default ServicePage5
