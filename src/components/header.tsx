"use client"
import Link from 'next/link'
import { IoHomeOutline } from "react-icons/io5";
import { RxEnvelopeClosed } from "react-icons/rx";
import { SlBriefcase } from "react-icons/sl";
import { AiOutlineFileText } from "react-icons/ai";
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
    const [isHovered , setIsHovered] =  useState<string | null>(null)
    const pathname = usePathname(); 

  return (
    <div className='bg-white/10 backdrop-blur border-b-4 border-white/15 text-white/70  w-full fixed top-0 z-20 max-w-[1440px] mx-auto'>
      <div className='absolute inset-0 -z-30 opacity-5' 
      style={{backgroundImage : `url("/grain_image.jpg")`}}
      ></div>  
    <div className='flex lg:pt-3 sm:py-3 py-2 sm:gap-2 gap-1 items-center lg:justify-between justify-center px-10 flex-col lg:flex-row lg:gap-10 lg:px-32 '>
      {/* Logo */}
      <div>
        <h2 className='font-serif text-2xl sm:text-4xl font-bold lg:text-5xl text-white'>&lt; <Link href="/"><span className='clip-text cursor-pointer'>F!Za</span></Link> / &gt;</h2>
      </div>
      {/* Navbar */}
      <div>
        <nav className='flex sm:gap-24  gap-10 text-2xl items-center lg:text-3xl '>
  
          {/* Home Link */}
          <Link href="/" 
          onMouseEnter={() => setIsHovered("home")} 
          onMouseLeave={() => setIsHovered(null)} 
          className={`relative flex items-center justify-center text-white`} data-aos="fade-down"
        >
          <span 
            className={`transition-transform duration-100 transform delay-0 ${isHovered === "home" || pathname === '/' ? 'sm:translate-y-10 translate-y-7' : 'translate-y-0 '}`}
          >
          <IoHomeOutline className='icon' />
          </span>
          {(isHovered === "home" || pathname === '/') && (
            <span className="absolute top-0 text-sm sm:text-lg lg:text-xl  font-aclonica">Home</span>
          )}
        </Link>
  
         {/* Resume Link */}
        <Link href="/resume" 
          onMouseEnter={() => setIsHovered("resume")} 
          onMouseLeave={() => setIsHovered(null)} 
          className={`relative flex items-center justify-center text-white`} 
          data-aos="fade-down" 
        >
          <span 
            className={`transition-transform duration-100 transform ${isHovered === "resume" || pathname === '/resume' ? 'sm:translate-y-10 translate-y-7 ' : 'translate-y-0 '}`}
          >
            <AiOutlineFileText className='icon' />
          </span>
          {(isHovered === "resume" || pathname === '/resume') && (
            <span className="absolute top-0 text-sm sm:text-lg lg:text-xl font-aclonica">Resume</span>
          )}
        </Link>

        {/* Portfolio Link */}
        <Link href="/portfolio" 
          onMouseEnter={() => setIsHovered("portfolio")} 
          onMouseLeave={() => setIsHovered(null)} 
          className={`relative flex items-center justify-center text-white`} data-aos="fade-down"
        >
          <span 
            className={`transition-transform delay-75 duration-100 transform ${isHovered === "portfolio" || pathname === '/portfolio' ? 'sm:translate-y-10 translate-y-7' : 'translate-y-0 '}`}
          >
            <SlBriefcase  className='icon'/>
          </span>
          {(isHovered === "portfolio" || pathname === '/portfolio') && (
            <span className="absolute top-0 text-sm sm:text-lg lg:text-xl  font-aclonica">Portfolio</span>
          )}
        </Link>

        {/* Contact Link */}
        <Link href="/contact" 
          onMouseEnter={() => setIsHovered("contact")} 
          onMouseLeave={() => setIsHovered(null)} 
          className={`relative flex items-center justify-center text-white`} data-aos="fade-down"
        >
          <span 
            className={`transition-transform duration-100 transform ${isHovered === "contact" || pathname === '/contact' ? 'sm:translate-y-10 translate-y-7' : 'translate-y-0 '}`}
          >
            <RxEnvelopeClosed  className='icon'/>
          </span>
          {(isHovered === "contact" || pathname === '/contact') && (
            <span className="absolute top-0 text-sm sm:text-lg lg:text-xl font-aclonica">Contact</span>
          )}
        </Link>
  
        </nav>
      </div>
    </div>
  </div> 
  )
}

export default Header
