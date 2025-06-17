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
      projectsCompleted: 20,
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
        <div className='flex-col sm:flex-row flex justify-center md:mb-20 mb-8'>
          {/* Left Side  */}
           <div className='left sm:w-1/2  sm:mt-36 mt-24 md:mt-40  flex items-center justify-center h-auto  '>
        <div className='text-center md:leading-relaxed tracking-wide md:space-y-4 space-y-1 px-2'>
          <h1 className='lg:text-5xl xl:text-7xl sm:text-4xl min-[420px]:text-3xl text-3xl mt-5 animate-fadeIn cursor-default min-w-[10px]'>
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
          <div className='md:max-w-[30rem] xl:max-w-[43rem]  max-w-[20rem] space-y-2 md:space-y-4 md:leading-loose md:tracking-widest tracking-wide'>
          <h2 className='md:text-xl text-[19px] my-2  xl:text-3xl lg:font-semibold animate-fadeIn min-w-[10px] cursor-default'>
          { <AnimatedLetters letterClass={letterClass} 
           strArray={jobTitles[jobIndex]}
            idx = {30}
            /> }
            </h2>
            {/* Description */}
          <h2 className=' leading-relaxed tracking-widest lg:text-base xl:text-xl  md:text-base text-sm px-3 text-white/70  animate-fadeIn2 font-aclonica my-6'>
          Offering tailored web solutions to bring your vision to life with seamless functionality and engaging design. Explore a portfolio crafted to elevate your digital presence.</h2>
          </div>
          {/* Buttons */}
          <div className='flex gap-3 items-center justify-center pt-2 lg:pt-8 sm:pt-4' data-aos="zoom-in">
            <a >
            <Button borderRadius='1.5rem' className='bg-gray-900 w-full h-full xl:text-xl text-base' containerClassName='w-24 h-[2.3rem] md:h-12 md:w-40' onClick={scrollToServices}> Services </Button>
            </a>
          <Link href={"/resume"}>
          <Button borderRadius='1.5rem' className='bg-gray-900 w-full h-full text-base xl:text-xl ' containerClassName=''> Resume </Button>
          </Link>
          </div>
        </div>
      </div>
      {/* Right Side Pic  */}
         <div className='right overflow-x-clip sm:w-1/2 mt-10 mb-10  md:flex lg:items-start min-[370px]:ml-14 ml-10 sm:ml-0 items-center sm:mt-28 lg:mt-18  bottom-0 top-auto left-0 right-auto   lg:pr-20 min-[500px]:ml-32 xl:pl-40'  >  
        <div className='image lg:h-[200px] xl:h-[300px] relative'>
         <img src={"/girl_pic.png"}  alt='Girl Image' className='lg:w-[320px] xl:w-[370px] md:w-[290px]  min-[500px]:w-[210px] w-[200px]'/>
         {/* Circle Div */}
         <div className="portrait border-2 border-white/15 absolute top-[20%] left-[25%] lg:top-[45%] lg:left-[33%] md:top-[25%] md:left-[35%] lg:w-[290px] lg:h-[290px] h-[200px] w-[200px]  rounded-full md:w-[250px] md:h-[250px] min-[500px]:w-[230px] min-[500px]:h-[230px]
         after:content-[''] after:absolute after:border-2 lg:after:w-[370px] lg:after:h-[370px] after:top-1/2 after:left-1/2 after:translate-x-[-50%] after:translate-y-[-50%]  after:border-white/15 after:rounded-full md:after:block after:hidden md:after:h-[320px] md:after:w-[320px]
          before:content-[''] before:absolute before:border-2 before:border-white/15 lg:before:w-[200px] lg:before:h-[200px] before:top-1/2 before:left-1/2 before:translate-x-[-50%] before:translate-y-[-50%] before:rounded-full md:before:block before:hidden -z-10 md:before:w-[180px] md:before:h-[180px] 
         " ></div>
         {/* Icons */}
          <div className='social-icons -mb-[20px] absoulte'>
            <Link href="https://www.linkedin.com/in/fiza-rafakat-9b6728275/" target='_blank' className='absolute xl:left-[300px] lg:top-[80px]  md:top-[80px] lg:left-[285px] md:left-[250px]  top-[40px] left-[180px] min-[500px]:left-[180px] transition-all duration-75 ease-linear'>
            <BiLogoLinkedin className='hover:bg-white hover:text-emerald-300 hover:animate-spin icon'/>
            </Link>
            <Link href='https://github.com/FiZaRafakat' target='_blank' className='absolute xl:top-[220px] lg:top-[190px] min-[450px]:left-[240px]  md:top-[190px] lg:left-[370px] md:left-[325px] sm:left-[260px] sm:top-[125px] top-[130px] left-[250px] min-[500px]:left-[275px] min-[500px]:top-[120px] min-[400px]:left-[235px] '>
            <FiGithub className=' hover:bg-white hover:text-emerald-300 hover:animate-spin icon' />
            </Link>
            <Link href='https://www.facebook.com/share/o7QNDcVAchkiiKTb/' className='absolute xl:top-[390px] xl:left-[360px] lg:top-[310px]   md:top-[290px] lg:left-[320px] md:left-[285px]  top-[210px] left-[210px] min-[500px]:left-[230px] min-[500px]:top-[230px] min-[400px]:left-[190px] min-[400px]:top-[200px] sm:left-[210px] '>
            <TiSocialFacebook  className='hover:animate-spin icon '/>
            </Link>
         </div>
       </div>
     </div>
   </div>
   {/* Counter animation */}
   <div ref={counterRef} className='flex sm:flex-row flex-col md:gap-14 gap-5 justify-center md:mb-12 xl:mt-10 xl:mb-28 ' data-aos="fade-up">
     <div className='flex justify-center flex-col items-center md:gap-3 gap-1 '>
      <p className='lg:text-6xl xl:text-8xl text-4xl'> {projectsCompleted} <sub className='text-emerald-300'>+</sub></p>
       <span className='text-white/70 xl:text-2xl  lg:text-lg md:text-base text-sm tracking-widest md:tracking-wider'>Projects Completed</span>
      </div>
      <div className='flex justify-center flex-col items-center md:gap-3 gap-1'>
      <p className='lg:text-6xl xl:text-8xl text-4xl'> {dailyLearningHours} <sub className='text-emerald-300'>h</sub></p>
       <span className='text-white/70 xl:text-2xl lg:text-lg md:text-base text-sm tracking-widest md:tracking-wider'>Daily Learning Hours</span>
      </div>
      <div className='flex justify-center flex-col items-center md:gap-3 gap-1 '>
      <p  className='lg:text-6xl xl:text-8xl text-4xl'> {typescriptScore} <sub className='text-emerald-300'>%</sub></p>
       <span className='text-white/70 xl:text-2xl  lg:text-lg md:text-base text-sm tracking-widest md:tracking-wider' >Typescript Q1 score</span>
      </div>
   </div>
</div>
  )
}

export default Hero