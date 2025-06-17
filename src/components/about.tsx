import { Button } from './ui/moving-border';
import Link from 'next/link';
import { Fragment } from 'react';
import { FaTools } from "react-icons/fa";
import { SiOpenai } from "react-icons/si";
import { FaCreditCard } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineBubbleChart } from "react-icons/md";
import { MdOutlineForum } from "react-icons/md";
import SkillsSection from './skills';

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
    <div className='space-y-6'>
      <p className='mt-3 xl:mt-20 text-gray-300 max-w-3xl mx-auto px-3 xl:text-2xl text-base leading-relaxed'>
    I’m not just writing code — I’m crafting immersive digital experiences that feel effortless, intuitive, and bold.  
    With strong expertise in <span className='text-emerald-300 font-semibold'>HTML, CSS, JavaScript, TypeScript, Tailwind, and Next.js</span>, I specialize in building responsive UIs that not only perform, but impress.
    <br className='block  mt-5' />
    I bring ideas to life with fluid motion using <span className='text-emerald-300 font-semibold'>GSAP, Framer Motion, and AOS</span>, while integrating real-world systems like <span className='text-emerald-300 font-semibold'>Stripe payments, CMS-powered blogs, and AI chatbots</span>.
    <br className='block' />
    Every project I take on blends thoughtful design, clean logic, and modern tools.  
    If you’re looking for someone who cares about the little details and the big picture — you’ve found your dev.
  </p>

      <Link href="/resume" className='flex justify-center'>
        <Button className='bg-gray-900' containerClassName='w-40 xl:w-44  md:text-xl mt-2 md:mt-4' borderRadius='1.5rem' data-aos="zoom-in">
          More About Me
        </Button>
      </Link>
    </div>

    {/* Optional Feature Highlights */}
    {/* <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
      {[
        { title: "Responsive UI", desc: "Layouts that adapt to all devices with seamless flow." },
        { title: "Clean Animation", desc: "Subtle motion using AOS, GSAP & Framer Motion." },
        { title: "Modern Stack", desc: "Next.js, Tailwind, TypeScript & Git-based workflows." },
        { title: "Real-World Projects", desc: "CMS, chatbots, payment systems & more." },
      ].map((item, i) => (
        <div key={i} className='bg-[#111] border border-gray-800 rounded-xl p-4 shadow-md hover:shadow-emerald-500/20 transition'>
          <h4 className='font-semibold text-emerald-300 mb-1'>{item.title}</h4>
          <p className='text-sm text-gray-400'>{item.desc}</p>
        </div>
      ))}
    </div> */}
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

  <div className='mt-16 relative z-10'>
   <SkillsSection />
  </div>
</div>

  )
}

export default About
