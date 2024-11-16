import React, { Fragment } from 'react'
import { FaCode } from "react-icons/fa";
import { FiPenTool } from "react-icons/fi";
import { IoColorPalette } from "react-icons/io5";

const services =[
    {
      icon : <FiPenTool className='md:size-12 sm:size-10 size-8' /> ,
      title : "UI UX Designer",
      description : "Crafting intuitive, visually compelling designs that balance aesthetics with seamless user interaction, ensuring your brand leaves a lasting impression.",
    },
    {
      icon : < FaCode className='md:size-12 sm:size-10 size-8'/>,
      title : "Frontend Developer",
      description : "Building engaging, responsive web interfaces optimized for performance and user experience, bringing your ideas to life on any device."
    },
    {
      icon : <IoColorPalette className='md:size-12 sm:size-10 size-8'/>,
      title : "Graphic Designer",
      description : "Creating visually captivating designs that resonate with your brand identity, transforming concepts into impactful visual storytelling."
    }
  ]

const Services = () => {
  return (
    <div >
         <div className='text-center'>
      <div className='flex justify-center' id='services'><h2 className='h font-bold'>Services</h2></div>
      <p className='p mx-auto max-w-[40rem] px-3 min-[420px]:px-8 '>I create tailored digital solutions that enhance your brand and deliver seamless, engaging user experiences. Explore my work and contact me to discuss how we can bring your vision to life.</p>
      </div>
      <div>
  <div className="boxes md:py-10 py-3">
    <div className='flex gap-12 animate-moveLeft [animation-duration:120s] hover:[animation-play-state:paused]'>
    {[...new Array(10)].fill(0).map((_,idx)=>(   
          <Fragment key={idx}>
          {services.map((service)=>(
             <div key={service.title} className="about-box pointer-events-none">
            <div className='absolute inset-0 -z-30 opacity-5' 
            style={{backgroundImage : `url("/grain_image.jpg")`}}
            ></div> 
            <p className=' pb-2 text-emerald-300 '>{service.icon}</p>
            <h2 className='md:text-xl text-lg text-white md:py-2 mb-1  transition-all ease-in-out delay-75'>{service.title}</h2>
            <p className='md:text-sm text-xs tracking-wide text-white/70  leading-normal  pb-1 px-3 md:px-5'>{service.description}</p>
            </div>
           ))}
          </Fragment>
    ))}   
    </div>  
     </div>
</div>
    </div>
  )
}

export default Services