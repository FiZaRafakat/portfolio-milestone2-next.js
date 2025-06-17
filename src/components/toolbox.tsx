import React, { Fragment } from 'react'
import TechIcon from './Techicon'
import { twMerge } from 'tailwind-merge'

const Toolbox = (
    {
        items,
        className,
        itemsWrapperClassName ,
    }:{
    items :{
        title : string ,
        iconType : React.ElementType ,
    }[] ,
    className? : string
    itemsWrapperClassName? : string
}) => {
  return (
    <div className= {twMerge("flex  mask",className)}>
         <div className={twMerge('flex md:my-2 my-1 flex-none',itemsWrapperClassName)}>
            {[...new Array(2)].fill(0).map((_,index)=>(
                <Fragment key={index}>         
             {items.map((item)=>(
               <div key={item.title} className='inline-flex items-center md:gap-4 gap-2 py-2 md:py-3 md:px-4 px-3 outline outline-2 outline-white/15 md:m-2 m-1 mx-2 rounded-xl'>
                    <TechIcon component={item.iconType} className='size-7 md:size-10'/>
                    <span className=' md:text-base text-sm'>{item.title}</span>
              </div>    
            ))
           }
                </Fragment>
            ))}
        
         </div>
          </div>
  )
}

export default Toolbox