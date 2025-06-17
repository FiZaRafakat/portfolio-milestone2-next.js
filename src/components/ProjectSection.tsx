"use client";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { HiArrowUpRight } from "react-icons/hi2";
import Card from "./Card";
import { ScrollArea } from "@/components/ui/scroll-area"


const portfolioProjects =[
    {
       number : "01",
        image : "/images/web.png",
        title : "Comforty Marketplace",
        description : `<span class="highlight">Comforty</span> is a modern, responsive furniture marketplace built with <span class="highlight">Next.js, Tailwind CSS</span>, and <span class="highlight">Sanity CMS</span>. It features smooth <span class="highlight">Framer Motion animations</span>, real-time <span class="highlight">CMS-powered content</span>, and dynamic product pages. Users can securely sign up or log in using <span class="highlight">Clerk authentication</span>, place orders with <span class="highlight">Stripe payment integration</span>, and receive <span class="highlight">email notifications</span> with order updates. A built-in order <span class="highlight">tracking system</span> keeps users informed, while an integrated <span class="highlight">chatbot</span> enhances support and engagement.`,
        link : "https://comforty-marketplace.vercel.app/"
    },{
        number : "02",
        image : "/images/1st image.png",
        title : " Fiza’s Travel Assistance",
        description : `<span class="highlight">AI Travel Planner Chatbot</span> is an intelligent travel assistant built using <span class="highlight">OpenAI’s Agents SDK</span> and <span class="highlight">Chainlit</span>. It interacts naturally with users to gather preferences like destination, travel dates, and budget, and responds with personalized travel plans. Powered by <span class="highlight">LLMs</span> and <span class="highlight">tool usage through agent actions</span>, it demonstrates how AI can automate real-world tasks with contextual memory, dynamic reasoning, and natural conversations. Chainlit provides a seamless chat UI, making the bot feel like a real travel advisor.`,
        link : "https://fizarafakattravelassistant-production.up.railway.app/"
    },   
    {
        number : '03',
        image : "/images/dizzyblog.png",
        title : "Dizzy Blog",
        description : `<span class="highlight">DizzyBlog</span> is a beautifully designed, fully responsive blog platform built with <span class="highlight">Next.js</span> and <span class="highlight">Tailwind CSS</span>, enhanced with smooth <span class="highlight">AOS animations</span>. While the blog content is hardcoded for full design control, the <span class="highlight">comment system is dynamic and powered by Sanity CMS</span>, allowing users to add, update, and delete their comments in real time. With a focus on UI aesthetics, clean structure, and interactive features, DizzyBlog offers a polished reading and engagement experience.`,  
        link : "https://dizzyblog.vercel.app/"
    },
    {
        number : "04",
        image : "/images/resume.png" ,
        title : "Resume Builder",
        description : `<span class="highlight">Resume Builder</span> is an interactive web application built with <span class="highlight">HTML</span>, <span class="highlight">CSS</span>, and <span class="highlight">JavaScript</span> that allows users to create a personalized resume in real time. Users can input their details, customize the resume’s color theme, and instantly <span class="highlight">download it as a PDF</span>. Additionally, each resume can be <span class="highlight">shared via a unique link</span>, making it easy to access or send to employers. This project highlights my ability to create dynamic, user-focused interfaces using core web technologies.`,
        link : "https://fizarafakat.github.io/Resume-Builder-Hackathon1/"
    },
    {
        number : "05",
        image : "/images/1-3d.png",            
        title : "Interior Design Website",
        description : `<span class="highlight">Interior Design Website</span> is a modern and visually appealing web project built by converting a custom <span class="highlight">Figma layout</span> into responsive, production-ready code using <span class="highlight">Next.js</span> and <span class="highlight">Tailwind CSS</span>. The site features a clean and elegant UI, enhanced with smooth scroll-based <span class="highlight">AOS animations</span>, ensuring a polished and engaging user experience. With pixel-perfect design accuracy and fully responsive layouts, the project reflects my ability to transform creative concepts into high-performance, real-world websites.`,
        link : "https://interior-design-3-page.vercel.app"
    },
    {
        number : "06",
        image : "/images/ai-nexus.png",
        title : "AI Nexus",
        description : `<span class="highlight">AI Nexus Website</span> is a sleek and modern multi-page web project built with <span class="highlight">Next.js</span> and <span class="highlight">Tailwind CSS</span>. It features a visually rich <span class="highlight">hero section</span> with <span class="highlight">neuron-inspired animations</span>, along with a fully functional <span class="highlight">dark/light theme toggle</span>. The site includes essential pages like <span class="highlight">Home, Pricing, Contact,</span> and more — all designed with <span class="highlight">smooth transitions</span> and <span class="highlight">responsive layouts</span>. This project highlights my ability to build engaging, scalable UIs with interactive themes, animation logic, and clean, modern frontend design.`,
        link : "https://ai-agents-lyart.vercel.app/"
    },
    {    number : "07",
        image : "/images/travels.png",
        title : "Travel Agency",
        description : `<span class="highlight">Travel Agency Website</span> is a visually appealing, fully responsive web project developed by converting a modern Figma design into live frontend code using <span class="highlight">Next.js</span> and <span class="highlight">Tailwind CSS</span>. The site features smooth <span class="highlight">AOS scroll animations</span> to enhance the user experience and maintain an elegant flow. With pixel-perfect layout, mobile responsiveness, and clean structure, this project reflects my ability to bring design concepts to life with optimized, high-performance frontend development.`,
        link : "https://travel-agency-nine-neon.vercel.app/"
    },   
    {
        number : "08",
        image : "/images/panacloud.png",
        title : "Panacloud Clone",
        description : `<span class="highlight">Panacloud Website Clone</span> is a clean and responsive clone of the official Panacloud site, built entirely with <span class="highlight">HTML</span> and <span class="highlight">CSS</span>. This project focuses on recreating the layout and visual structure with <span class="highlight">pixel-perfect accuracy</span>, maintaining simplicity and clarity in design. It highlights my frontend skills in building <span class="highlight">responsive static websites</span> with attention to spacing, alignment, and modern UI practices — without using any JavaScript frameworks.`,
        link : "https://panacloud-clone.vercel.app/"
    },
]

const ProjectSection = () => {
  return (
    <div>
        <div className="container mt-24 lg:mb-0 sm:mt-36 mb-10 mx-auto">
            <div className="">
                <div className="flex justify-center">
                <p className="uppercase tracking-widest mt-3 text-base xl:text-xl md:mt-0 clip-text text-center ">Real World Projects</p>
                </div>
                <h2 className="lg:text-4xl md:text-3xl text-2xl text-center xl:text-5xl lg:my-4 my-2 text-white">Featured Projects</h2>
                <p className="text-center p xl:text-[20px] ">See how I transformed concepts into engaging digital experiences.</p>
            </div>
                  <div className="flex flex-col lg:mt-10  mt-5 lg:gap-28 gap-20 mx-2 md:mx-24 lg:mx-48">
                {portfolioProjects.map((project , projectIndex)=>(
                   <Card key={project.title} className="flex lg:justify-between items-center flex-col md:flex-row sticky top-48 lg:top-32"
                    style={{
                        top : `calc(100px + ${projectIndex * 25}px`
                    }}
                   >
                     {/* Left Side */}
                     <div className="lg:px-8 md:p-3 py-2 px-4 md:w-1/2 sm:px-16 lg:h-[400px] md:h-[300px] ">
                        <div className="inline-flex md:items-start items-center ">
                        <h2 className="lg:text-7xl md:text-4xl text-3xl mt-0  font-serif italic clip-text">{project.number}</h2>
                        </div>
                        <h2 className="lg:text-2xl italic sm:text-xl text-lg ">{project.title}</h2>
                        <ScrollArea className="h-[100px] md:h-[135px] lg:h-[165px] sm:h-[160px] overflow-y-auto">
                        <p className="whitespace-pre-line md:mt-3 sm:text-xs xl:text-base leading-relaxed text-[0.6rem] p"
                         dangerouslySetInnerHTML={{ __html: project.description }}
                        ></p>                       
                        </ScrollArea>
                        <hr className="border-t-2 border-white/5 md:mt-4 mt-2 md:mb-5 mb-3" />
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                       
                           <button className="text-gray-950 bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex justify-center items-center gap-2 xl:text-base md:text-sm text-sm rounded-2xl px-3 py-2 xl:px-4 xl:py-2.5" >
                           <span className="">View Live Site</span>
                           <HiArrowUpRight className='md:size-4 size-3 xl:size-5 '/>
                           </button>
                        
                        </a>
                        
                     </div>
                        {/* Image Section */}
                     <div className="flex justify-end">
                        <DirectionAwareHover imageUrl={project.image} className=" w-[300px] lg:h-[400px]  h-[180px] lg:w-[550px] md:w-[285px] md:h-[300px] sm:w-[400px]"> </DirectionAwareHover>
                     </div>
                     </Card>   
                   
                ))}
            </div>
        </div>
    </div>
  )
}

export default ProjectSection