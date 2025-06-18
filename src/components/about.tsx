import { Button } from './ui/moving-border';
import Link from 'next/link';
import { Fragment } from 'react';
import { FaTools } from "react-icons/fa";
import { SiOpenai } from "react-icons/si";
import { FaCreditCard } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineBubbleChart } from "react-icons/md";
import { MdOutlineForum } from "react-icons/md";
import Line from './line';
import {motion} from 'framer-motion';

const badges =[
   {
    title : "Design-Lover",
    emoji : '🎨',
  },{
    title : "AI Curious",
    emoji : '🧠',
  },{
    title: "Performance-Focused",
    emoji : '⚡',
  },{
    title : "UX Obsessed",
    emoji : '💬',
  }
]

const About = () => {
  return (

    <div className='mt-20 px-4 sm:px-6 lg:px-8 max-w-5xl xl:max-w-[84rem]  mx-auto relative z-10'>
  <div className='text-center mb-10' data-aos="fade-up">
    <div className='flex justify-center'>
      <h2 className='text-3xl md:text-5xl sm:text-4xl xl:text-6xl font-extrabold clip-text'>Why Me?</h2>
    </div>
    <p className='mt-5 xl:mt-5 text-white md:text-base xl:text-lg text-sm uppercase tracking-widest'>
      Building frontend experiences that speak for themselves.
    </p>
  </div>

  {/* Glowing Background Accent */}
  {/* <div className='absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] bg-emerald-500 opacity-10 blur-3xl rounded-full z-0'></div> */}

  <div className='relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20 items-start'>
    <div className='space-y-6 flex items-center flex-col'>

<div className='mt-3 xl:mt-28 text-gray-300 max-w-3xl mx-auto px-3 xl:text-2xl text-base leading-relaxed'>
 <p> I don’t just code, I design experiences that feel intuitive and look stunning.  </p>
  <p className='mt-6'>With a blend of development and design expertise, I bring UI to life using motion, micro-interactions, and user psychology.  </p>
  <p className='mt-6'>From concept to deployment, I care about every pixel, every transition, and every user click.</p>
</div>

<div className="flex flex-wrap gap-3 max-w-xl py-3 mx-auto mt-4">
  {badges.map((badge, index) => (
    <motion.div key={index} className='md:px-6 px-3 inline-flex bg-gradient-to-r from-emerald-300 to-sky-400 gap-2 rounded-full py-1.5 items-center' drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} dragElastic={0.2} dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} whileTap={{ scale: 0.95 }}
whileHover={{ scale: 1.05 }}>
                
                      <span className='text-gray-950 text-base'>{badge.title}</span>
                      <span className=''>{badge.emoji}</span>
                     
</motion.div>
  ))}
</div>
      <Link href="/resume" className='flex justify-center'>
        <Button className='bg-gray-900' containerClassName='w-40 xl:w-44 xl:mt-10  md:text-xl mt-2 md:mt-4' borderRadius='1.5rem' data-aos="zoom-in">
          More About Me
        </Button>
      </Link>
    </div>

    <div className="boxes md:py-10 py-1">
  <div className='flex flex-wrap justify-center items-center gap-5  '>
      <Fragment >
        {[
          {
            icon: <LuLayoutDashboard className='md:size-12 sm:size-10 size-8' />,
            title: "Responsive UI",
            description: "Seamless layouts that adapt to all screen sizes with pixel perfection."
          },
          {
            icon: <MdOutlineBubbleChart className='md:size-12 sm:size-10 size-8' />,
            title: "Clean Animations",
            description: "Crafted motion using AOS, Framer Motion, and GSAP to enhance flow."
          },
          {
            icon : <FaTools className='md:size-12 sm:size-10 size-8' />,
            title: "Modern Stack",
            description: "Next.js, Tailwind, TypeScript, Git — for scalable, fast web builds."
          },
          {
            icon: <SiOpenai className='md:size-12 sm:size-10 size-8' />,
            title: "AI Integration",
            description: "Integrated AI agents and chatbots using OpenAI SDK and Chainlit."
          },
          {
            icon: <FaCreditCard className='md:size-12 sm:size-10 size-8' />,
            title: "Stripe Payments",
            description: "Secure checkout flow with authentication, order tracking, and success modals."
          },
          {
            icon: <MdOutlineForum className='md:size-12 sm:size-10 size-8' />,
            title: "CMS & Comments",
            description: "User-generated content and comment systems via Sanity and frontend CRUD."
          },
        ].map((service) => (
          <div key={service.title} className="box flex justify-center items-center flex-col pointer-events-none shadow-emerald-500/10">
            <div
              className='absolute inset-0 -z-30 opacity-5'
              style={{ backgroundImage: `url("/grain_image.jpg")` }}
            ></div>
            <p className='pb-2 text-emerald-300'>{service.icon}</p>
            <h2 className='md:text-xl text-sm text-white md:py-2 mb-1 transition-all ease-in-out delay-75'>
              {service.title}
            </h2>
            <p className='md:text-sm text-xs tracking-wide text-white/70 leading-normal pb-1 px-3 md:px-5'>
              {service.description}
            </p>
          </div>
        ))}
      </Fragment>
   
  </div>
</div>
  </div>

  <div>
    
  </div>

  <div className='mt-0 overflow-x-hidden z-10 md:block hidden'>
   <Line />
  </div>
</div>

  )
}

export default About
