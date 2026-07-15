import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { Menu, X } from 'lucide-react'
const Navbar = () => {
    // 1. Store the active link in component state
    const [activeLink, setActiveLink] = useState('Home');
    {/* sidebar on phone */ }
    const [isOpen, setIsOpen] = useState("false")
    // 2. Define your navigation menu items
    const navItems = [
        {
            name: 'Home',
            to: '/'
        },
        {
            name: 'Services',
            to: '/services'
        },
        {
            name: 'Projects',
            to: '/projects'
        },
        {
            name: 'About',
            to: '/about'
        },
        {
            name: 'Careers',
            to: '/careers'
        },
        {
            name: 'Contact',
            to: '/contact'
        },
    ];

    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    })
    return (
        <>
            <div
                className={`fixed top-0 left-0 w-full z-60 transition-all max-w-9xl h-20 mx-auto xl:px-20 p-4 md:py-4 duration-300 py-4 md:px-12 flex items-center justify-between ${isScrolled
                    ? "bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm"
                    : "bg-transparent"
                    }`}
            >
                    <Link to='/'>
                        <img className='object-cover w-35' src="https://eigenmcp.eigensol.com/brand/eigensol-wordmark.png" alt="" />
                    </Link>
                    {/* MOBILE TOGGLE BUTTON (Swaps cleanly between ☰ and ✕ inside the header bar) */}
                       <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="sm:hidden text-2xl text-gray-700 transition-transform duration-200"
      >
        {isOpen ? '✕' : '☰'}
      </button>
                    <ul className={`flex items-center text-md gap-6 text-gray-700 dark:text-white transition-all duration-300
  max-sm:flex max-sm:top-20 max-sm:left-0 max-sm:gap-6 max-sm:fixed max-sm:w-full max-sm:h-[calc(100vh-64px)]
  max-sm:bg-white max-sm:text-black max-sm:flex-col max-sm:items-start 
  max-sm:px-6 max-sm:pt-24 max-sm:pb-8 max-sm:z-50
  ${isOpen ? 'max-sm:translate-x-0' : 'max-sm:translate-x-full'}
  /* Slide & Fade Animation from the Top */
        transition-all duration-300 ease-in-out
        ${isOpen 
          ? 'max-sm:opacity-100 max-sm:translate-y-0' 
          : 'max-sm:opacity-0 max-sm:translate-y-[-20px] max-sm:pointer-events-none'
        }
`}>
                        {navItems.map((item, idx) => (<Link to={item.to}
                            key={idx}
                            onClick={() => {
                                setActiveLink(item.name),
                                setIsOpen(false)
                            }} // Updates state on click
                            className={`font-medium transition-colors duration-200 ${activeLink === item.name
                                ? 'text-[#E85D2C] font-semibold' // Active link color
                                : 'text-black hover:text-gray-900' // Original/inactive color
                                }`}
                        >
                            {item.name}
                        </Link>
                        ))}
                    {/* 2. MOBILE ONLY BUTTON (Pushed down to the bottom of the drawer panel) */}
        <div className="w-full mt-auto sm:hidden">
          <Link
            to="/startproject"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-[#E85D2C] text-white font-medium py-3 px-6 rounded-full"
          >
            Start a Project
          </Link>
           
        </div>
</ul>
        <div>       <Link className=' text-gray-300 text-sm space-x-2 items-center flex justify-center' to='/startproject'><button className='bg-[#E85D2C]/80 lg:flex hidden hover:bg-[#E85D2C] text-white px-8 py-3 rounded-full'>
                        Start a Project
                    </button></Link> 
                    </div>
                </div>
        </>
    )
}

export default Navbar
