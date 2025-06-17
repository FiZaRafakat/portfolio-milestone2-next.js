import React from 'react'
import { twMerge } from 'tailwind-merge'

const TechIcon  = ({
  component,
  className,
}: {
  component: React.ElementType
  className?: string
}) =>  {
    const Component = component
  return (
   <>
    <Component className= {twMerge("fill-[url(#tech-icon-gradient)] ",className)} />
    <svg className='size-0 absolute'>
       <linearGradient id='tech-icon-gradient'>
        <stop offset="0%" stopColor='rgb(110 231 183)' />
        <stop offset="100%" stopColor='rgb(56 189 248)' />
        </linearGradient> 
    </svg>
   </>
  )
}

export default TechIcon