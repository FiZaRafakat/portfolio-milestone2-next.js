import Link from 'next/link';
import { HiArrowUpRight } from "react-icons/hi2";
import { Button } from './ui/moving-border';

const Footer = () => {
  return (
    <div className=''>
      <div className='overflow-x-clip'>
      {/* Connect Section */}
     <div className="Connect md:py-16 py-5 -z-0  md:pt-20 lg:mx-36 md:mx-20 mx-8" data-aos="zoom-in-up">
        <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 md:py-8 py-4 px-3 md:px-10 rounded-3xl text-center relative overflow-hidden z-0 md:text-left'>
        <div className='absolute inset-0 opacity-5 -z-10' 
           style={{backgroundImage : `url("/grain_image.jpg")`}}> 
        </div>
        <div className='flex flex-col lg:gap-16 md:gap-8 gap-4 items-center md:flex-row'>
          <div>
        <h2 className='md:text-2xl text-lg lg:text-3xl  '>Let&apos;s make your Website Shine</h2>
         <p className='leading-normal md:text-base text-xs tracking-wide mt-2 text-gray-900'>Ready to bring your next project to life? Let&apos;s connect and discuss how I can help you achive your goals.</p>
         </div>
         <div className='inline-flex'>
         
       <Link href={"/contact"}>
       <Button className='bg-gray-900 text-sm flex justify-center items-center gap-3'  borderClassName=' bg-[radial-gradient(var(--white)_40%,transparent_60%)]' containerClassName='hover:bg-white w-36' data-aos="zoom-in" >
       <span className=''>Hire Me</span>
       <HiArrowUpRight className='size-4 '/>
       </Button>
       </Link>
         
         </div>
        </div>
       </div>
      </div>
      {/* Footer  */}
      <footer className='relative  -z-10 lg:mx-36 md:mx-20 mx-8'>
        <div className='absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30  [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]  -z-10'></div>
        <div className="footer">
          <div className='border-t border-white/15 py-6 text-xs flex justify-center md:px-10 items-center gap-4 tracking-wider'>
            <div className='text-white/40'>&copy; 2024 Fiza Rafakat. All rights reserved.</div>            
          </div>
        </div>
      </footer>
    </div>
    </div>
  )
}

export default Footer