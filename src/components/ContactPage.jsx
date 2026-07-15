import { Mail } from 'lucide-react'
import React from 'react'

const ContactPage = () => {
  return (
    <>
      <div className='w-full h-full bg-white py-24 px-6 md:px:12 lg:px-20 md:py-26 '>
        <div className='flex flex-col items-center'>
           {/* Subtitle */}
                        <span className="inline-block text-sm py-2 px-4 rounded-full bg-[#F3F4F6] font-medium tracking-tight text-[#5D6775] uppercase transition-all duration-1000 transform">
                            Our Approach
                        </span>
                      
                        {/* Main heading reveal transition */}
                        <h2 className="text-3xl md:text-5xl mt-6 text-[#101828] font-sans lg:text-6xl font-bold tracking-tight transition-all duration-1000 delay-200 transform">
                           Let's Build Something <span>Amazing</span>
                        </h2>

                        {/* Description reveal transition */}
                        <p className="text-base text-center mt-6 md:text-lg font-sans lg:text-xl text-[#4A5565] max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400">
                            Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
                        </p>
      </div>
      <div className='w-full flex justify-between'>
        <div className='w-1/2 flex flex-col '>
         <div className='w-full h-[100px] p-5 bg-[#F3F4F6] flex justify-start items-start border border-[#c5c7ca] rounded-2xl'>
            <div className='flex gap-8 items-center justify-center'>
           <div className='bg-gradient-to-br rounded-xl from-[#F4835B]  to-[#43a5cc] w-fit p-4'>
            <Mail className='text-white'/>
           </div>
           <div className='flex flex-col justify-between'>
           <span className='text-[#60636b] font-mono'>EMAIL US</span>
           <p className='text-black text-lg font-medium'>info@eigensol.com</p>
           </div>
           </div>
         </div>
        </div>




        <div className='w-1/2 flex flex-col'>

        </div>
      </div>
      </div>
    </>
  )
}

export default ContactPage
