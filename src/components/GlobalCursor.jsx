import { useRef } from 'react'
import React, { useEffect, useState } from 'react'
const GlobalCursor = () => {
     const [ mousePos, setMousePos] = useState({x:0 , y:0})
    const requestRef = useRef()
     useEffect(()=>{
      const handleMouseMove = (e) => {
        cancelAnimationFrame(requestRef.current);
        requestRef.current = requestAnimationFrame(()=> {
        setMousePos({ x:e.clientX, y:e.clientY})
        })
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        cancelAnimationFrame(requestRef.current)
      }
     },[])
  return (
    <>
       <div className='pointer-events-none fixed inset-0 hidden sm:block z-20 transition-opacity duration-300'
    style={{
      background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, 
      rgba(239, 68, 68, 0.15) 0%,
      rgba(14, 165, 233, 0.08) 40%,
      transparent 100%
    )`
    }}
    />
    </>
  )
}

export default GlobalCursor
