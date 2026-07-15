import React from 'react'
import { Star } from 'lucide-react'

const ServicePage4 = () => {
  return (
    <>
       <div className='w-full h-full bg-white py-24 px-6 md:px:12 lg:px-20 md:py-26 '>
                          <div className='w-full flex flex-col lg:flex-row lg:justify-between'>
                         <div className='flex-col w-full lg:w-[65%] flex'>
                        <h1 className='font-sans text-3xl md:text-5xl max-w-md font-extrabold '>UI/UX Design Systems</h1>
                        <p className='text-black/80 text-lg max-w-lg mt-6'>Comprehensive design systems that ensure consistency and scalability across all touchpoints.</p>
                        <ul className='mt-6 text-lg leading-loose'>
                          <li className='flex gap-3 items-center'><Star size={14} className='text-[#E85D2C]'/>User Research</li>
                          <li className='flex gap-3 items-center'><Star size={14} className='text-[#E85D2C]'/>Prototyping</li>
                          <li className='flex gap-3 items-center'><Star size={14} className='text-[#E85D2C]'/>Design Tokens</li>
                          <li className='flex gap-3 items-center'><Star size={14} className='text-[#E85D2C]'/>Component Libraries</li>
                        </ul>
                         </div>
                         <div className='lg:w-[40%] relative w-full h-full mt-6 md:mt-0'>
                          <img className='w-full  rounded-2xl object-cover max-w-md h-[550px]' src="https://media.istockphoto.com/id/2232843523/photo/ui-ux-design-and-development-concepts-developers-interact-with-cutting-edge-virtual-screens.webp?a=1&b=1&s=612x612&w=0&k=20&c=oRxcqQ6K26SrfueA-zgyxhk28yWC-Mlnlg1GEgVB8FA=" alt="" 
                          />
                           <div className='text-black text-sm font-medium rounded-full bg-white px-4 py-1 absolute bottom-4 left-4'>
                           UI/UX
                          </div>
                         </div>
                        </div>
                        </div>
    </>
  )
}

export default ServicePage4
