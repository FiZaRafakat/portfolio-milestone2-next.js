import React from 'react'
import { PiStarFourDuotone } from "react-icons/pi";

const Tape = () => {
 
    const words = [
        "Performant",
        "Accessible",
        "Secure",
        "Interactive",
        "Scalable",
        "User Friendly",
        "Maintainable",
        "Search Optimized",
        "Usable",
        "Reliable"
    ]


  return (
    <div className=' select-none'>
       <div className='bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-3 -mx-2'>
      <div className='flex mask'>
      <div className='flex flex-none gap-12 py-2 px-3' >
       {words.map(word =>(
            <div key={word} className='inline-flex gap-4 items-center animate-moveLeft [animation-delay: 60s]'>
                 < PiStarFourDuotone  className='size-5'/>
                <span className='text-gray-900 uppercase font-extrabold lg:text-base text-sm'>{word}</span>
            </div>
        ))}
       </div>
      </div>
       </div>
    </div>
  )
}

export default Tape