import { ArrowRight, Dot } from 'lucide-react'
import React, { useState } from 'react'
import Approach from '../components/Approach'
import Navbar from '../components/Navbar'
import GridBackground from '../components/GridBackground'
import GlobalCursor from '../components/GlobalCursor'

const Home = () => {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <>
            <div className='relative min-h-screen'>
                {/* 2. SHARED CONTAINER (Covers both Navbar & Hero Section) */}
                <div
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="relative w-full min-h-screen flex flex-col overflow-hidden cursor-none"
                >
                    {/* The Grid Background & Custom Cursor live here, covering everything inside */}
                    <GridBackground />
                    {isHovered && <GlobalCursor />}

                    {/* Navbar sits at the top, inside the custom cursor boundary */}
                    <Navbar />
                    {/* Hero Content Section*/}
                    <div className='relative min-h-screen z-10 flex flex-col items-center justify-center pt-40 px-6 text-center w-full overflow-hidden text-black '>
                        {/* LAYER 2: Stationary Blurred Background Orbs */}
                        {/* Soft Pink Orb (Bottom Left) */}
                        <div className="absolute left-20 bottom-10 w-[300px] h-[300px] rounded-full bg-[#E85D2C]/10 blur-[50px] pointer-events-none" />

                        {/* Soft Red/Pink Orb (Top Right) */}
                        <div className="absolute right-30 top-20 w-[300px] h-[300px] rounded-full bg-[#E85D2C]/10 blur-[50px] pointer-events-none" />

                        {/* Soft Blue/Teal Orb (Middle Right) */}
                        <div className="absolute right-30 top-50 w-[300px] h-[300px] rounded-full bg-sky-300/10 blur-[80px] pointer-events-none" />
                        {/* Hero Content */}
                        <div className="max-w-5xl mx-auto ">
                            <span className="inline-block px-4 py-2 mb-6 text-sm text-center items-center justify-center font-mono tracking-wide capitalize bg-slate-200/50 text-slate-600 rounded-full backdrop-blur-sm">
                                Software Solutions for Ambitious Businesses
                            </span>
                            <h1 className="text-5xl heading md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
                                <span className="inline-block mr-4 mb-2">We</span>
                                <span className="inline-block mr-4 mb-2">Build</span>
                                <span className="inline-block mr-4 mb-2">Scalable</span>
                                <span className="inline-block mr-4 mb-2">Web,</span>
                                <span className="inline-block mr-4 mb-2">Mobile,</span>
                                <span className="inline-block mr-4 mb-2">and</span>
                                <span className="inline-block mr-4 mb-2">AI</span>
                                <span className="inline-block mr-4 mb-2">Products</span>
                            </h1>
                            <p className="mt-6 text-lg font-sans text-black/70 max-w-2xl mx-auto leading-relaxed">
                                We design and develop reliable digital products for startups, SMEs, and enterprises. From MVPs to enterprise systems, we turn your vision into reality.
                            </p>
                            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <button className="flex items-center justify-center gap-2 sm:w-auto bg-[#E85D2C]/90 hover:bg-[#E85D2C] text-white ease-in-out hover:scale-105 duration-300 px-8 py-4 rounded-full font-medium transition-all">
                                    Start a Project <ArrowRight size={20} />
                                </button>
                                <button className="sm:w-auto border-2 border-black bg-white/50 backdrop-blur-sm px-8 py-4 rounded-full hover:bg-black hover:text-white font-medium text-slate-700 transition-all">
                                    View Our Work
                                </button>
                            </div>
                            <div className="mt-10 text-sm font-mono text-black/70 flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <p className='flex items-center justify-center'><Dot size={45} className='text-[#5ca32c]' /> 120+ Projects Delivered</p>
                                <p className='flex items-center justify-center'><Dot size={45} className='text-[#E85D2C]' />15+ Industries</p>
                                <p className='flex items-center justify-center'><Dot size={45} className='text-[#E85D2C]' />10+ Years Experience</p>
                            </div>
                            <div
                                className="flex mt-8 justify-center items-center p-4">
                                <style>{`
    @keyframes scrollMove {
      0% {
        transform: translateY(0);
      }
      25% {
        transform: translateY(12px);
      }
      50% {
        transform: translateY(0px);
      }
        75% {
        transform: translateY(12px);
      }
      100% {
        transform: translateY(0px);
      }
    }
    .force-scroll-animation {
      display: block !important;
      animation: scrollMove 3s cubic-bezier(0.15, 0.41, 0.69, 0.94) infinite !important;
    }
  `}</style>
                                {/* Outer Mouse Shell */}
                                <div className="relative flex justify-center w-6 h-10 border-2 border-[#3f4756] rounded-[20px] box-border pt-2">
                                    {/* Inner Scroll Wheel Dot */}
                                    <span className="w-1 h-2 bg-[#3f4756] rounded-full force-scroll-animation"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Approach />
        </>
    )
}

export default Home
