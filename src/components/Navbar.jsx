import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';
const Navbar = () => {
     // 1. Store the active link in component state
  const [activeLink, setActiveLink] = useState('Home');

  // 2. Define your navigation menu items
  const navItems = [
    {name: 'Home',
      to: '/'  
    },
    {name: 'Services',
      to: '/services'  
    },
    {name:  'Projects',
      to: '/projects'  
    },
    {name: 'About',
      to: '/about'  
    },
    {name: 'Careers',
      to: '/careers'  
    },
    {name: 'Contact',
      to: '/contact'  
    },
     ];
  
     const [isScrolled, setIsScrolled] = useState(false)
     useEffect(()=>{
        const handleScroll = () => {
       if (window.scrollY > 20){
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
        }
        window.addEventListener("scroll" , handleScroll)
        return () => window.removeEventListener("scroll" , handleScroll)
     })
  return (
      <>
      <div 
        className={`fixed top-0 left-0 w-full z-60 transition-all max-w-9xl h-20 mx-auto xl:px-20 p-4 md:py-4 duration-300 py-4 md:px-12 flex items-center justify-between ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm"
          : "bg-transparent"
      }`}
      >
        <div className=''>
          <Link to='/'>
        <img className='object-cover w-35' src="https://eigenmcp.eigensol.com/brand/eigensol-wordmark.png" alt="" />
        </Link>
        </div>
      <div className='text-md flex'>
        <ul className='lg:flex gap-8 hidden sm:hidden md:hidden lg:visible'>
{navItems.map((item,idx) => (<Link to={item.to}
      key={idx}
              onClick={() => setActiveLink(item.name)} // Updates state on click
              className={`font-medium transition-colors duration-200 ${
                activeLink === item.name
                  ? 'text-[#E85D2C] font-semibold' // Active link color
                  : 'text-black hover:text-gray-900' // Original/inactive color
              }`}
            >
              {item.name}
</Link>
))}
          </ul>
          </div>
          <div className=' text-gray-300 text-sm space-x-2 items-center flex justify-center'>
<Link to='/startproject'><button className='bg-[#E85D2C]/80 hover:bg-[#E85D2C] text-white px-8 py-3 rounded-full'>
  Start a Project
</button></Link>
          </div>
          </div>
    </>
  )
}

export default Navbar
