import React from 'react'
import ServiceCard from './ServiceCard'
import ServicePage from './ServicePage'

const Services = () => {
  return (
    <>
      <div className='text-black bg-white w-full h-full xl:h-[130vh] py-24 px-6 md:py-26 gap-6 flex flex-col items-center justify-center transition-all duration-400 ease-out shadow-2xl'>
        <h2 className="text-3xl max-w-3xl text-center md:text-5xl font-sans lg:text-6xl font-bold tracking-tight">
           Services built for launching, scaling, and operating digital products
        </h2>
        <p className="text-base text-center mb-6 md:text-lg font-sans lg:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed">
              Explore each category, then drill into the exact service that fits your product, platform, operations, or delivery needs.
            </p>
            <ServiceCard/>
      </div>
      <ServicePage/>
    </>
  )
}

export default Services
