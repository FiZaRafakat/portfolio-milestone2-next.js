import React, { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

const Card = ({
    className ,
    children,
    ...other
}:ComponentPropsWithoutRef<'div'>)=> {
  return (
    <div className={twMerge("box4 after:z-10 bg-gray-800 overflow-hidden after:content-[''] after:absolute after:inset-0 after:outline-4 after:outline after:-outline-offset-2  after:outline-white/5  shadow-[0_0_80px_inset] shadow-emerald-300/5 relative z-0 after:pointer-events-none rounded-3xl after:rounded-3xl ",className)} {...other} >

    <div className='absolute inset-0 -z-10 opacity-5 overflow-x-clip' 
    style={{backgroundImage : `url("/grain_image.jpg")`}}
    ></div>
    {children}
     </div>
  )
}

export default Card