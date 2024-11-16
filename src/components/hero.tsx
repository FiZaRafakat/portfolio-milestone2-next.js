"use client"
import React from 'react'
import AnimatedLetters from './animated-letters'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import Link from 'next/link'
import { BiLogoLinkedin } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { TiSocialFacebook } from "react-icons/ti";
import { Button } from "@/components/ui/moving-border";


function Hero() {

  const counterRef = useRef(null);

  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [dailyLearningHours, setDailyLearningHours] = useState(0);
  const [typescriptScore, setTypescriptScore] = useState(0);

 //countdown function 
  const countUp = () => {
    const targets = {
      projectsCompleted: 10,
      dailyLearningHours: 8,
      typescriptScore: 100,
    };

    const counts = {
      projectsCompleted: 0,
      dailyLearningHours: 0,
      typescriptScore: 0,
    };

    const duration = 3; 
    const framesPerSecond = 60; 
    const totalFrames = duration * framesPerSecond;

    let frame = 0;

    const animate = () => {
      if (frame < totalFrames) {
        counts.projectsCompleted = Math.min(
          targets.projectsCompleted,
          (targets.projectsCompleted * frame) / totalFrames
        );
        counts.dailyLearningHours = Math.min(
          targets.dailyLearningHours,
          (targets.dailyLearningHours * frame) / totalFrames
        );
        counts.typescriptScore = Math.min(
          targets.typescriptScore,
          (targets.typescriptScore * frame) / totalFrames
        );
        setProjectsCompleted(Math.round(counts.projectsCompleted));
        setDailyLearningHours(Math.round(counts.dailyLearningHours));
        setTypescriptScore(Math.round(counts.typescriptScore));

        frame++;

        requestAnimationFrame(animate); 
      }
    };
    animate();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          countUp(); 
          observer.disconnect(); 
        }
      },
      { threshold: 0.5 } 
    );
    const currentRef = counterRef.current; 
  if (currentRef) {
    observer.observe(currentRef);
  }

  return () => {
    if (currentRef) {
      observer.disconnect();
    }
  };
 
  },
   []);

// Letters animate 
const [letterClass] = useState('animate-bounce-in opacity-0 lg:min-w-[10px] min-w-[5px] inline-block ');
const [jobIndex, setJobIndex] = useState(0);


const HiArray = ['H' , 'i' , ',' ];
const imArray = ["I'",'m'," "]
const nameArray = ['F','i', 'z','a' ,' ','R','a','f','a','k','a','t'];
const jobTitles = [
  ['U', 'I', '/', 'U', 'X', ' ', 'D', 'e', 's', 'i', 'g', 'n', 'e', 'r'],
  ['F', 'r', 'o', 'n', 't', 'e', 'n', 'd', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'],
  ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
];
useEffect(() => {
  const jobTimer = setInterval(() => {
    setJobIndex((prevIndex) => (prevIndex + 1) % jobTitles.length); 
  }, 4000); 

  return () => clearInterval(jobTimer);
}, [jobTitles.length]);




const scrollToServices = () => {
  const servicesSection = document.getElementById('services');
  if (servicesSection) {
    servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

  return (
<div className='flex flex-col '>
        <div className='flex-col sm:flex-row flex justify-center mb-8'>
          {/* Left Side  */}
           <div className='left sm:w-1/2 lg:mt-0 min-[800px]:mt-36 mt-24 md:mt-40  flex items-center justify-center lg:h-[40rem] h-auto  '>
        <div className='text-center md:leading-relaxed tracking-wide md:space-y-4 space-y-1 px-2'>
          <h1 className='md:text-5xl  min-[420px]:text-4xl text-2xl animate-fadeIn cursor-default min-w-[10px]'>
         { <AnimatedLetters letterClass={letterClass}
          strArray={HiArray}
          idx={11}
          /> }
          <br />
           {  <AnimatedLetters letterClass={letterClass}
            strArray={imArray}
            idx={14} />  }
           <span className={` text-emerald-300 inline-block animate-fadeIn`}>
           { <AnimatedLetters letterClass={letterClass} 
            strArray = {nameArray}
            idx = {17}
            /> }
            </span>
            <span className={`${letterClass} _29`}>,</span>
          </h1>
          <div className='md:max-w-[30rem] max-w-[20rem] space-y-2 md:space-y-4 md:leading-loose md:tracking-widest tracking-wide'>
          <h2 className='md:text-xl text-base  lg:font-semibold animate-fadeIn min-w-[10px] cursor-default'>
          { <AnimatedLetters letterClass={letterClass} 
           strArray={jobTitles[jobIndex]}
            idx = {30}
            /> }
            </h2>
            {/* Description */}
          <h2 className=' leading-relaxed tracking-widest  md:text-sm text-xs px-3 text-white/70  animate-fadeIn2 font-aclonica'>
          Offering tailored web solutions to bring your vision to life with seamless functionality and engaging design. Explore a portfolio crafted to elevate your digital presence.</h2>
          </div>
          {/* Buttons */}
          <div className='flex gap-3 items-center justify-center pt-2 lg:pt-8 sm:pt-4' data-aos="zoom-in">
            <a >
            <Button borderRadius='1.5rem' className='bg-gray-900 w-full h-full  text-sm md:text-base' containerClassName='w-24 h-[2.3rem] md:h-12 md:w-40' onClick={scrollToServices}> Services </Button>
            </a>
          <Link href={"/resume"}>
          <Button borderRadius='1.5rem' className='bg-gray-900 w-full h-full ' containerClassName=''> Resume </Button>
          </Link>
          </div>
        </div>
      </div>
      {/* Right Side Pic  */}
         <div className='right overflow-x-clip sm:w-1/2  md:flex lg:items-start min-[370px]:ml-14 ml-10 sm:ml-0 items-center md:mt-28 lg:mt-14  bottom-0 top-auto left-0 right-auto   lg:pr-10'  >  
        <div className='image lg:h-[200px]  relative'>
         <img src={"/girl_pic.png"}  alt='Girl Image' className='lg:w-[400px] md:w-[290px] w-[180px]'/>
         {/* Circle Div */}
         <div className="portrait border-2 border-white/15 absolute top-[15%] left-[15%] lg:top-[55%] lg:left-[33%] md:top-[25%] md:left-[35%] lg:w-[370px] lg:h-[370px] h-[200px] w-[200px]  rounded-full md:w-[250px] md:h-[250px] 
         after:content-[''] after:absolute after:border-2 lg:after:w-[470px] lg:after:h-[470px] after:top-1/2 after:left-1/2 after:translate-x-[-50%] after:translate-y-[-50%]  after:border-white/15 after:rounded-full md:after:block after:hidden md:after:h-[320px] md:after:w-[320px]
          before:content-[''] before:absolute before:border-2 before:border-white/15 lg:before:w-[270px] lg:before:h-[270px] before:top-1/2 before:left-1/2 before:translate-x-[-50%] before:translate-y-[-50%] before:rounded-full md:before:block before:hidden -z-10 md:before:w-[180px] md:before:h-[180px] 
         " ></div>
         {/* Icons */}
          <div className='social-icons -mb-[20px] absoulte'>
            <Link href="https://www.linkedin.com/in/fiza-rafakat-9b6728275/" target='_blank' className='absolute lg:top-[100px]  md:top-[80px] lg:left-[340px] md:left-[250px]  top-[30px] left-[160px] '>
            <BiLogoLinkedin className='hover:bg-white hover:text-emerald-300 hover:animate-spin icon' data-aos="fade-left"/>
            </Link>
            <Link href='https://github.com/FiZaRafakat' target='_blank' className='absolute lg:top-[240px] min-[420px]:left-[230px]  md:top-[190px] lg:left-[470px] md:left-[325px]  top-[100px] left-[220px]'>
            <FiGithub className=' hover:bg-white hover:text-emerald-300 hover:animate-spin icon' data-aos="fade-left"/>
            </Link>
            <Link href='https://www.facebook.com/share/o7QNDcVAchkiiKTb/' className='absolute lg:top-[410px]  md:top-[290px] lg:left-[400px] md:left-[285px]  top-[190px] left-[190px]'>
            <TiSocialFacebook  className='hover:animate-spin icon 'data-aos="fade-left"/>
            </Link>
         </div>
       </div>
     </div>
   </div>
   {/* Counter animation */}
   <div ref={counterRef} className='flex md:flex-row flex-col md:gap-14 gap-5 justify-center md:mb-10 ' data-aos="fade-up">
     <div className='flex justify-center flex-col items-center md:gap-3 gap-1 '>
      <p className='lg:text-5xl text-3xl'> {projectsCompleted} <sub className='text-emerald-300'>+</sub></p>
       <span className='text-white/70  lg:text-lg md:text-base text-xs tracking-widest md:tracking-wider'>Projects Completed</span>
      </div>
      <div className='flex justify-center flex-col items-center md:gap-3 gap-1'>
      <p className='lg:text-5xl text-3xl'> {dailyLearningHours} <sub className='text-emerald-300'>h</sub></p>
       <span className='text-white/70  lg:text-lg md:text-base text-xs tracking-widest md:tracking-wider'>Daily Learning Hours</span>
      </div>
      <div className='flex justify-center flex-col items-center md:gap-3 gap-1 '>
      <p  className='lg:text-5xl text-3xl'> {typescriptScore} <sub className='text-emerald-300'>%</sub></p>
       <span className='text-white/70  lg:text-lg md:text-base text-xs tracking-widest md:tracking-wider' >Typescript Q1 score</span>
      </div>
   </div>
</div>
  )
}

export default Hero