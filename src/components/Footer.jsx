import React from 'react'
import {Link} from "react-router-dom"

const Footer = () => {
  return (
     <div className='bg-[#131926] p-4'>
    <div className='h-auto mx-auto lg:gap-10 w-full grid md:grid-cols-[1.5fr_1fr_1fr_1fr] px-6 py-12 grid-col'>
        <div1 className='pt-6'>
      <img className='object-cover w-30' src="https://eigenmcp.eigensol.com/brand/eigensol-wordmark.png" alt="" />
      <p className='text-white/80 opacity-80 text-sm mt-4 mb-4'>Skills and speed that turn any LLM into mastery over your local codebase. In active development.</p>
    </div1>
    <div2 className='pt-6'>
        <p className='text-white/40 text-xs tracking-widest uppercase font-semibold'>Product</p>
        <ul className='space-y-3 mt-3'>
            <li>
                  <Link className="nav-link  hover:text-white text-white/70 text-sm " to="/features">Features</Link>
            </li>
            <li>
                  <Link className="nav-link hover:text-white text-white/70 text-sm" to="/skills">Skills</Link>
            </li>
            <li>
                  <Link className="nav-link  hover:text-white text-white/70 text-sm" to="/howitworks">How it works</Link>
            </li>
            <li>
                  <Link className="nav-link hover:text-white text-white/70 text-sm" to="/usecases">Usecases</Link>
            </li>
            <li>
                  <Link className="nav-link hover:text-white text-white/70 text-sm" to="/pricing">Pricing</Link>
            </li>
            </ul>
    </div2>
    <div3 className='pt-6'>
        <p className='text-white/40 font-semibold text-xs tracking-widest uppercase'>GET STARTED</p>
        <ul className='space-y-3 mt-3'>
            <li>
                  <Link className="nav-link hover:text-white text-white/70 text-sm" to="/requestaccess">Request Access</Link>
            </li>
            <li>
                  <Link className="nav-link hover:text-white text-white/70 text-sm" to="/faq">FAQ</Link>
            </li>
             <li>
                  <Link className="nav-link hover:text-white text-white/70 text-sm" to="/signin">Sign In</Link>
            </li>
            </ul>
    </div3>
    <div4 className='pt-6 space-y-3'>
        <p className='text-white/40 text-xs tracking-widest uppercase font-semibold'>LEGAL</p>
       <ul className='space-y-3 mt-3'>
            <li>
                  <Link className="nav-link hover:text-white text-white/70 text-sm" to="/terms">Terms and Conditions</Link>
            </li>
            <li>
                  <Link className="nav-link hover:text-white text-white/70 text-sm" to="/privacy">Privacy</Link>
            </li>
             <li>
                  <Link className="nav-link hover:text-white text-white/70 text-sm" to="/">Eigensol</Link>
            </li>
            </ul>
    </div4>
     <div5 className='pt-6 space-y-3'>
        <p className='text-white/40 text-xs tracking-widest uppercase font-semibold'>LEGAL</p>
       <ul className='space-y-3 mt-3'>
            <li>
                  <Link className="nav-link hover:text-white text-white/70 text-sm" to="/terms">Terms and Conditions</Link>
            </li>
            <li>
                  <Link className="nav-link hover:text-white text-white/70 text-sm" to="/privacy">Privacy</Link>
            </li>
             <li>
                  <Link className="nav-link hover:text-white text-white/70 text-sm" to="/">Eigensol</Link>
            </li>
            </ul>
    </div5>
    </div>
    <div className='border-t border-white/10 w-full lg:flex lg:justify-between pt-4'>
    <p className='text-white/70 opacity-80 text-fg font-serif'>© 2026 EigenSol · EigenMCP</p>
    <p className='text-white/70 opacity-80 text-sm flex gap-2 items-center justify-center'>Powered by<Link to='/'><img className='object-cover w-25' src="https://eigenmcp.eigensol.com/brand/eigensol-wordmark.png" alt="" /></Link></p>
    </div>
    </div>
  )
}

export default Footer
