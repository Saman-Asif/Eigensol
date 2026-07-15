import { Check, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const ContactPage = () => {
    const data = [
        {
            icon: <Mail/>,
            span: 'EMAIL US',
            p: 'info@eigensol.com'
        },
         {
            icon: <Phone/> ,
            span: 'CALL US',
            p: '+92 326 0335144'
        },
         {
            icon: <MapPin/> ,
            span: 'VISIT US',
            p: 'N2 Block Khayaban-e-Amin Lahore'
        },
    ]
  return (
    <>
      <div className='w-full h-full bg-white py-24 px-6 md:px:12 lg:px-20 md:py-26 '>
        <div className='flex flex-col items-center'>
           {/* Subtitle */}
                        <span className="inline-block text-sm py-2 px-4 rounded-full bg-[#F3F4F6] font-medium tracking-tight text-[#5D6775] uppercase transition-all duration-1000 transform">
                            Our Approach
                        </span>
                      
                        {/* Main heading reveal transition */}
                        <h2 className="text-3xl md:text-5xl mt-6 text-[#101828] font-sans lg:text-6xl font-bold tracking-tight transition-all text-center duration-1000 delay-200 transform">
                           Let's Build Something <span>Amazing</span>
                        </h2>

                        {/* Description reveal transition */}
                        <p className="text-base text-center mt-6 md:text-lg font-sans lg:text-xl text-[#4A5565] max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400">
                            Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
                        </p>
      </div>
      <div className='w-full mt-16 flex justify-between'>
        <div className='lg:w-1/2 w-full flex flex-col gap-4'>
       {data.map((data, idx)=>(
         <div key={idx} className='w-full h-[100px]  p-5 transition-all duration-600 ease-out bg-[#f5f5f5] flex justify-start items-start hover:bg-[#F3F4F6] hover:border-[#ff5a50] hover:shadow-lg hover:scale-101 border border-[#c5c7ca] rounded-2xl'>
            <div className='flex gap-8 items-center justify-center'>
           <div className='bg-gradient-to-br text-white rounded-xl from-[#F4835B]  to-[#43a5cc] w-fit p-4'>
            {data.icon}
           </div>
           <div className='flex flex-col justify-between'>
           <span className='text-[#60636b] font-mono'>{data.span}</span>
           <p className='text-black text-lg font-medium'>{data.p}</p>
           </div>
           </div>
            </div>
       ))} 
       <div className='w-full lg:h-[300px] h-auto mt-4 p-8 shadow-xs bg-[#f5f5f5] flex flex-col justify-start items-start  border border-[#c5c7ca] rounded-2xl'>
        <h2 className='text-black text-xl font-semibold'>Why Work With Us?</h2>
        <ul className='mt-6 flex flex-col gap-4 text-[#4b4d53]'>
            <li className='flex items-center gap-3'><Check size={23} className='bg-gradient-to-br text-white rounded-lg from-[#F4835B]  to-[#43a5cc] w-fit p-1'/> 24-hour response time</li>
        <li className='flex items-center gap-3'><Check size={23} className='bg-gradient-to-br text-white rounded-lg from-[#F4835B]  to-[#43a5cc] w-fit p-1'/>Dedicated project manager</li>
         <li className='flex items-center gap-3'><Check size={23} className='bg-gradient-to-br text-white rounded-lg from-[#F4835B]  to-[#43a5cc] w-fit p-1'/> Transparent pricing</li>
          <li className='flex items-center gap-3'><Check size={23} className='bg-gradient-to-br text-white rounded-lg from-[#F4835B]  to-[#43a5cc] w-fit p-1'/> Agile development process</li>
           <li className='flex items-center gap-3'><Check size={23} className='bg-gradient-to-br text-white rounded-lg from-[#F4835B]  to-[#43a5cc] w-fit p-1'/> Post-launch support</li>
        </ul>
       </div>
         </div>
        

        <div className='lg:w-1/2 w-full flex flex-col'>

        </div>
      </div>
      </div>
    </>
  )
}

export default ContactPage
