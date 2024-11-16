import { FaGraduationCap } from "react-icons/fa6";

interface Education {
  title: string;
  institute: string;
  field: string;
  level?: string;
  description: string;
  date: string;
}

interface EducationCardProps {
  education: Education;
  index: number;
}

const EducationCard: React.FC<EducationCardProps> = ({ education, index }) =>{

    return ( 
  <section className="container z-10 mx-3 my-auto relative  lg:even:right-[-50%] before:even:content-[''] before:even:absolute before:even:h-10 before:even:w-10 before:even:bg-gradient-to-t before:even:from-emerald-300 before:even:to-sky-400 before:even:top-0 lg:before:even:-left-9 before:even:-left-7  before:even:rounded-full before:odd:content-[''] before:odd:absolute before:odd:w-10 before:odd:h-10 before:odd:bg-gradient-to-b before:odd:from-emerald-300 before:odd:to-sky-400 lg:before:odd:top-0 lg:before:odd:left-[31rem] before:odd:top-0 before:odd:-left-7 before:odd:rounded-full max-w-[65rem] before:even:z-20"  style={{ animationDelay: `${index * 1}s` }} 
  data-aos={index % 2 === 0 ? 'fade-up-right' : 'fade-up-left'} 
   >
     <FaGraduationCap
        className={`absolute text-white md:text-3xl text-[1.75rem] z-20 ${
          index % 2 === 0
            ? "lg:top-1 lg:left-[31.5rem] top-1 left-[-1.3rem]" // Position for even elements
            : "lg:top-1 lg:left-[-1.8rem] top-1 left-[-1.3rem] " // Position for odd elements
        }`}
      />
    <div className="after:z-10 overflow-hidden after:content-[''] after:absolute after:inset-0 after:outline-4 after:outline after:-outline-offset-2  after:outline-white/5  shadow-[0_0_80px_inset] shadow-emerald-300/5 relative z-0 rounded-3xl after:rounded-3xl py-[20px] px-[10px] md:w-[600px] min-[500px]:w-[470px] w-[280px] lg:w-1/2 ">
        <div className='absolute inset-0 -z-30 opacity-5' 
            style={{backgroundImage : `url("/grain_image.jpg")`}}
       ></div> 
<div className="content p-2 ">
  
     <div className="flex justify-center ">
     <h2 className='md:text-xl text-lg text-center clip-text uppercase  mb-2'>{education.title}</h2>
     </div>
          <h3 className="md:text-lg text-base italic">{education.institute}</h3>
          
         <div className="py-1 flex gap-3">
          <span className="text-emerald-300 md:text-base text-xs">{education.field}</span>
           <span className="text-emerald-300 md:text-base text-xs">{education.level}</span>
          </div>
          <p className="text-white/60 md:text-sm text-[0.6rem] font-thin tracking-widest md:tracking-wider leading-relaxed mb-3">{education.description}</p>
          <span className=" bg-white/10 py-1 px-3 rounded-xl text-white md:text-base text-xs" >{education.date}</span>
</div>

  </div>
  </section>
    )  
}   
  
export  default EducationCard