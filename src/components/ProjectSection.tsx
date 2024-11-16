"use client";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { HiArrowUpRight } from "react-icons/hi2";
import Card from "./Card";


const portfolioProjects =[
    {    number : "01",
        image : "/images/travels.png",
        title : "Travel Agency",
        description : "A responsive travel agency website designed in Figma and developed using Next.js and Tailwind CSS. The site features smooth scroll animations powered by AOS to enhance user experience. It showcases various travel services in a modern, visually appealing layout.",
        link : "https://travel-agency-nine-neon.vercel.app/"
    },{
        number : "02",
        image : "/images/resume.png" ,
        title : "Resume Builder",
        description : "This is an interactive resume builder where you can input your details and generate a personalized resume. Built using HTML, CSS, and JavaScript, it allows you to change the resume's color, download it as a PDF, and share it via a unique link after creation. This project showcases my skills in building dynamic, user-friendly applications.",
        link : "https://fizarafakat.github.io/Resume-Builder-Hackathon1/"
    },{
        number : "03",
        image : "/images/flower-shop.png",
        title : "Flower Shop Templates",
        description : "I have recreated the design of a live website in Figma to showcase my design skills, ensuring a pixel-perfect replica. This project highlights my ability to translate real-world web designs into detailed, precise digital prototypes, demonstrating proficiency in design tools and attention to detail.",
        link : "https://www.figma.com/design/2J72MVtkvW12RrlC735Mz4/Flowers-Template?node-id=0-1&t=9s2kDd8l9LiPKbiS-1"
    },{
        number : "04",
        image : "/images/tic-tac-toe.png",
        title : "Tic Tac Toe Game",
        description : "A dynamic Tic Tac Toe game that offers both single-player (against the computer) and multiplayer (play with a friend) options. It includes a live score tracker to keep users updated throughout the game. The game also features a reset button, allowing players to start a new game at any time. This project demonstrates my skills in JavaScript for game logic, HTML for structure, and CSS for responsive design.",
        link : "https://fizarafakat.github.io/tic-tac-toe-Game/"
    },{
        number : "05",
        image : "/images/password-strength.png",
        title : "Password Strength",
        description : "This project showcases the functionality of a password strength checker, ensuring that passwords meet specific criteria such as a minimum of 8 characters, the inclusion of special characters, and more. It helps users create secure passwords by providing real-time feedback on their password strength. Be sure to check it out!",
        link : "https://fizarafakat.github.io/Password-Strength-JS-Project/"
    },{
        number : "06",
        image : "/images/random-password.png",
        title : "Password Generator",
        description : "This project showcases the functionality of a random password generator, allowing users to select the desired password length and choose which characters to include, such as special characters, numbers, uppercase, or lowercase letters. It provides a secure and customizable way to generate strong passwords based on user preferences.",
        link : "https://fizarafakat.github.io/Random-Password-Generator_JS-Project/"
    }
]

const ProjectSection = () => {
  return (
    <div>
        <div className="container mt-24 lg:mb-0 sm:mt-36 mb-10 mx-auto">
            <div className="">
                <div className="flex justify-center">
                <p className="uppercase tracking-widest mt-3 text-sm md:text-base md:mt-0 clip-text text-center ">Real World Projects</p>
                </div>
                <h2 className="lg:text-4xl md:text-3xl text-xl text-center lg:my-4 my-2 text-white">Featured Projects</h2>
                <p className="text-center p ">See how I transformed concepts into engaging digital experiences.</p>
            </div>
                  <div className="flex flex-col lg:mt-10  mt-5 lg:gap-28 gap-20 mx-2 md:mx-24 lg:mx-48">
                {portfolioProjects.map((project , projectIndex)=>(
                   <Card key={project.title} className="flex lg:justify-between items-center flex-col md:flex-row sticky top-48 lg:top-32"
                    style={{
                        top : `calc(80px + ${projectIndex * 25}px`
                    }}
                   >
                     <div className="lg:px-8 md:p-3 p-2 sm:w-1/2 ">
                        <div className="inline-flex md:items-start items-center ">
                        <h2 className="lg:text-7xl md:text-4xl text-3xl  font-serif italic clip-text">{project.number}</h2>
                        </div>
                        <h2 className="lg:text-3xl italic sm:text-xl text-base ">{project.title}</h2>
                        <p className=" md:mt-3 sm:text-xs text-[0.5rem] p">{project.description}</p>
                        <hr className="border-t-2 border-white/5 md:mt-4 mt-2 md:mb-5 mb-3" />
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                       
                           <button className="text-gray-950 bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex justify-center items-center gap-2 md:text-sm text-xs rounded-2xl px-3 py-2" >
                           <span className="">View Live Site</span>
                           <HiArrowUpRight className='md:size-4 size-3 '/>
                           </button>
                        
                        </a>
                     </div>
                     <div className="flex justify-end">
                        <DirectionAwareHover imageUrl={project.image} className=" w-[300px] h-[150px] lg:h-auto lg:w-[500px] md:w-[250px] md:h-[250px] sm:w-[400px]"> </DirectionAwareHover>
                     </div>
                     </Card>   
                   
                ))}
            </div>
        </div>
    </div>
  )
}

export default ProjectSection