"use client"
import { SiHtml5 } from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaChrome } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { MdOutlineStarRate } from "react-icons/md";
import { motion } from "framer-motion";
import Toolbox from '@/components/toolbox';
import EducationCard from '@/components/EduactionCard';
import Card from '@/components/Card';
import "aos/dist/aos.css"
import { useEffect } from "react";


interface EducationEntry {
  title: string;
  date: string;
  level?: string;
  institute: string;
  field : string ; 
  description : string
}

const About = [
  {
    title :"Name :",
    Ans : "Fiza Rafakat"
  },{
    title : "Father Name :",
    Ans : "Rafakat Ali"
  },{
    title : "Date Of Birth :",
    Ans : "11/April/2004"
    },{
    title : "Nationality :",
    Ans : "Pakistani"
  },{
    title : "Experience :",
    Ans : "1 year"
  },{
    title : "Freelance :",
    Ans : "Available"
  },{
    title : "Languages :",
    Ans : "English, Urdu, Punjabi"
  },{
    title : "Email :",
    Ans : "fizarafakat@gmail.com"
  },
]

const toolBoxItem = [
  {
    iconType : SiHtml5  ,
    title : "HTML 5"
  },{
    iconType : FaCss3 ,
    title : "CSS 3"
  },{
    iconType : FaJsSquare ,
    title : "JavaScript"
  },{
    iconType : BiLogoTypescript ,
    title : "TypeScript"
  },{
    iconType : FaReact ,
    title : "React"
  },{
    iconType : RiNextjsFill ,
    title : "Nextjs"
  },{
    iconType : FaGithub ,
    title : "GitHub"
  },{
    iconType : FaChrome ,
    title : "Chrome"
  },{
    iconType : SiTailwindcss,
    title : "Tailwind CSS"
  },{
      iconType : FaPython ,
      title : "Python"
  },
  {
    iconType : SiAdobeillustrator ,
    title : "Adobe Ilustrator"
  },{
    iconType : SiAdobephotoshop ,
    title : "Adobe Photoshop"
  },
  
]

const hobbies =[
  {
    title : "Traveling",
    emoji : '🛤',
    top : '135%',
    left : '18%',
  },{
    title : "Reading",
    emoji : '📚',
    top : '400%',
    left : '5%',
  },{
    title: "Photography",
    emoji : '📸',
    top : '800%',
    left : '50%',
  },{
    title : "Cooking",
    emoji : '👩‍🍳',
    top : '700%',
    left : '10%',
  },{
    title : "Drawing",
    emoji : '✏',
    top : '950%',
    left : '12%',
  },{
    title : "Painting",
    emoji : '🎨',
    top : '550%',
    left : '40%',
  },{
    title : "Gardening",
    emoji : "🌳",
    top : '350%',
    left : '50%',
  }
]

const Education :EducationEntry[] = [
  {
    title : "GenAI , Metaverse & Web3.0",
    date : "2024-Present",
    field : "Quarter-3",
    institute : "Governor House",
    description :"Learning Agentic AI with OpenAI’s SDK after completing advanced Python and modern web development using Next.js in a Governor House IT program. This program focuses on cutting-edge technologies like AI, Metaverse, and Web3.0, equipping me with the skills to innovate in these fields."
  },{
    title : "Chartered Accountancy",
    date : "2022-Present",
    field : "FTS 41",
    level : "CAF / CA-Inter",
    institute : "ICAP",
    description : "Currently pursuing Chartered Accountancy (CA) with PRC and CAF Group A cleared. Actively working on remaining modules to strengthen my expertise in accounting, finance, and related fields.."
  },{
    title : "Intermediate",
    date : "2020-2022",
    field : "FSC Pre-Engineering",
    institute : "Govt-degree XYZ college",
    description : "Completed F.Sc. Pre-Engineering with an A grade, driven by a strong interest in Mathematics—my favorite subject and a key influence in pursuing an analytical, math-focused career path."
  },{
    title : "Matric",
    date : "2018-2022",
    field : "Science",
    institute : "ABC School",
    description : "Completed Matriculation in Science with an A1 grade, building a strong foundation in critical thinking and problem-solving that supports my journey in CA and IT."
  }
]

function Page() {

  useEffect(() => {
    const interval = setInterval(() => {
      const progressContainers = document.querySelectorAll(".progress-container");
      progressContainers.forEach((container) => {
        const element = container as HTMLElement; // Cast to HTMLElement
        element.style.animation = "none";
        void element.offsetWidth; // Trigger reflow
        element.style.animation = "";
      });
    }, 40000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="overflow-x-hidden">
       <div className='md:mt-32 sm:mt-36 mt-28 flex justify-center items-center '>
     <div >
    <div>
        {/* Heading Div */}
     <div className='flex justify-center items-center' >
     <div className='text-center '>
       <h1 className='h lg:text-4xl md:text-3xl xl:text-5xl text-[21px] pb-2'>A Glimpse into my World</h1>
       <p className="p text-sm leading-normal xl:w-[50rem] xl:text-lg px-6 md:w-[40rem] max-[640px]:w-[25rem] sm:w-[30rem] max-[370px]:w-[20rem]">
        Step into my world where passion, creativity, and dedication drive everything I do. From my background and skills to the values that guide me, discover what inspires my work and how I can contribute to your vision.
       </p>

       </div>
     </div>
        {/* Personal Info Div */}
     <div className='pt-3 flex lg:gap-10 gap-2 md:gap-4 lg:pb-10 md:pb-4 pb-2 flex-col md:flex-row  md:mx-40' >
     <Card className='mt-8 lg:w-[40rem] sm:w-[23rem] min-[500px]:w-[470px] w-[300px] mx-auto  py-5 text-center' data-aos="fade-right">
         <div className='flex justify-center items-center gap-2 lg:mb-3'>
          <MdOutlineStarRate className='lg:size-10 md:size-8 size-7  text-emerald-300 '/> 
          <h1 className='lg:text-2xl md:text-xl text-lg xl:text-3xl'>Personal Info</h1>
          </div>
           { About.map((about)=>(
            <div key={about.title} className=''>
              <div className='flex justify-between px-4 md:px-8 py-1 '>
              <h3 className='text-white/70 xl:text-xl md:text-base text-sm'>{about.title}</h3>
              <p className='text-white md:text-base xl:text-xl text-sm'>{about.Ans}</p>
              </div>
            </div>
           ))}
      </Card>
      {/* Skills Section */}
      <Card className='md:mt-8 mt-3 lg:max-w-[25rem] sm:w-[20rem] min-[500px]:w-[470px] w-[300px]  mx-auto py-5 text-center' 
      data-aos="fade-left">
      <div className='flex justify-center items-center gap-2'>
          <MdOutlineStarRate className='md:size-10 size-7 text-emerald-300 '/> 
          <h1 className='lg:text-2xl md:text-xl text-lg xl:text-3xl '>My Skills</h1>
          </div>

     <div className='mx-14 mt-5'>
    <div className="animation flex flex-col md:gap-10 gap-3 justify-center items-center">
  <div className="top flex gap-10  justify-center">
    <div className="flex items-center flex-col justify-center md:gap-3 gap-2">
      <div
        className="progress-container md:w-24 md:h-24 w-20 h-20  flex justify-center items-center rounded-full"
        data-progress="75"
      >
        <div className="progress-border">
          <span className="circle">75%</span>
        </div>
      </div>
      <p className="text-xs md:text-sm  tracking-wider">Communication</p>
    </div>
    <div className="flex items-center flex-col justify-center md:gap-3 gap-2">
      <div
        className="progress-container md:w-24 md:h-24 w-20 h-20 flex justify-center items-center rounded-full"
        data-progress="80"
      >
        <div className="progress-border">
          <span className="circle">80%</span>
        </div>
      </div>
      <p className="text-xs md:text-sm tracking-wider">Creativity</p>
    </div>
  </div>

  <div className="bottom flex gap-10 justify-center">
    <div className="flex items-center flex-col justify-center md:gap-3 gap-2">
      <div
        className="progress-container md:w-24 md:h-24 w-20 h-20 flex justify-center items-center rounded-full"
        data-progress="95"
      >
        <div className="progress-border">
          <span className="circle">95%</span>
        </div>
      </div>
      <p className="text-xs md:text-sm  tracking-wider">Responsibility</p>
    </div>
    <div className="flex items-center flex-col justify-center md:gap-3 gap-2">
      <div
        className="progress-container md:w-24 md:h-24 w-20 h-20 flex justify-center items-center rounded-full"
        data-progress="79"
      >
        <div className="progress-border">
          <span className="circle">79%</span>
        </div>
      </div>
      <p className="text-xs md:text-sm  tracking-wider">Problem Solving</p>
    </div>
  </div>
</div>
 </div>
  </Card>
     </div>
        {/* Div For 2nd Row */}
      <div className='lg:pt-8 md:pt-5 pt-3 flex lg:gap-10 md:gap-4 gap-2 md:pb-10 flex-col sm:flex-row md:mx-40'>
        {/* Toolbox Card */}
         <Card className='lg:w-[40rem] sm:w-[23rem] min-[500px]:w-[470px]  w-[300px] mx-auto py-5 text-center' data-aos="fade-right" >
         <div className='flex justify-center items-center gap-2'>
          <MdOutlineStarRate className='md:size-10 size-7 text-emerald-300 '/> 
          <h1 className='lg:text-2xl md:text-xl text-lg xl:text-3xl'>My Toolbox</h1>
          </div>
           <div className='md:pt-6 pt-3 '>
          <Toolbox items={toolBoxItem} itemsWrapperClassName='animate-moveLeft [animation-duration:30s]' />
           <Toolbox items={toolBoxItem}  itemsWrapperClassName='animate-moveRight [animation-duration:30s]'/>
          </div>
          
            </Card>
        {/* Hobbies Card */}
       <Card className="max-w-[25rem] sm:w-[20rem] min-[500px]:w-[470px] h-[300px] mx-auto w-[300px] py-5" 
           data-aos="fade-left">     
          <div className='flex justify-center items-center gap-2'>
          <MdOutlineStarRate className='size-10  text-emerald-300 '/> 
          <h1 className='lg:text-2xl md:text-xl text-lg xl:text-2.5xl'>Beyond the Code</h1>
          </div >
           <div className='pt-5 relative'>
              {  hobbies.map((hobby)=>(
                  <motion.div key={hobby.title} className='md:px-6 px-3 inline-flex bg-gradient-to-r from-emerald-300 to-sky-400 gap-2 rounded-full py-1.5 items-center absolute' drag   style={{left : hobby.left ,top : hobby.top }}
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} dragElastic={0.2} dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} initial={{ opacity: 0, y: -20 }}  animate={{ opacity: 1, y: 0, }} transition={{ duration: 0.5, ease: "easeInOut" }} whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                 >
                      <span className='text-gray-950 text-sm'>{hobby.title}</span>
                      <span>{hobby.emoji}</span>
                     
                  </motion.div>
                ))
              }
               
          </div>
        </Card>
          </div>
      </div>
        {/* Eduacation Div */}
     <div className='education lg:mt-20 mt-10 lg:mb-20 mb-10 lg:mx-32 md:mx-40 min-[425px]:mx-20 min-[320px]:mx-10'>
    <div className="flex flex-col justify-center items-center">
    <div className='flex justify-center items-center gap-2'>
          <MdOutlineStarRate className='md:size-10 size-7 text-emerald-300 '/> 
          <h1 className='md:text-3xl xl:text-5xl text-2xl '>Education History</h1>
          </div>
          <p className="text-center text-sm xl:text-lg p px-3 xl:w-[50rem] md:w-[40rem] max-[360px]:w-[20rem] mt-3 mb-5 md:mb-8">
  My educational journey reflects my commitment to growth and learning, equipping me with the knowledge and skills necessary to excel in my field. Below is a timeline of the institutions and milestones that have shaped my academic path.
</p>
    </div>

     <div className="flex flex-col gap-5 lg:gap-0 time-line overflow-hidden relative after:content-[''] after:absolute lg:after:right-[50%] after:top-0 after:h-[100%] after:w-2 after:bg-gradient-to-b after:from-emerald-300 after:to-sky-400 after:rounded-3xl after:animate-lineAnimation -z-10 lg:pl-0 pl-5">
      {Education.map((education,index)=>(
        <EducationCard key={index} education={education}  index={index} />
         ))}   
        </div>
       </div>
    </div>
   </div> 
  </div>
  )
}

export default Page