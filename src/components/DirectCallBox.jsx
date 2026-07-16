import { Phone } from 'lucide-react'
import React from 'react'

const DirectCallBox = () => {
  return (
    <>
      <div className='w-full h-full bg-white py-16 px-6 md:px:12 lg:px-20 md:py-20'>
      <div className='rounded-3xl bg-gradient-to-r from-[#FCF0EC]  to-[#e8f7fc] border border-[#c5c7ca] h-auto py-12 px-4'>
        <div className='flex flex-col gap-4 justify-center items-center'>
        <h1 className='text-black text-3xl font-bold'>
            Prefer a Direct Call?
        </h1>
        <p className='text-[#60636b] text-lg text-center'>Schedule a free 30-minute consultation with our team</p>
         <button className='text-white mt-2 w-fit text-lg bg-gradient-to-r from-[#F4835B]  to-[#43a5cc] gap-2 flex items-center justify-center py-4 px-8 rounded-xl'>
            <Phone/> Schedule a Call
            </button>
        </div>
      </div>
      </div>
    </>
  )
}

export default DirectCallBox
