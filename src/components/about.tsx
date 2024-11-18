import { Button } from './ui/moving-border';
import Link from 'next/link';
import Services from './services';



const About = () => {
  return (

    <div className='flex mt-10 justify-center overflow-hidden'>
     <div className='flex items-center flex-col lg:gap-y-10 gap-y-5 overflow-x-clip '>
     <div className='text-center mb-3 lg:mb-10'>
     <div className='flex justify-center'><h2 className='h font-bold clip-text'>Why Me ?</h2></div>
      <p className='p mx-auto max-w-[40rem] sm:w-[30rem] px-3 min-[420px]:px-3 w-[20rem] '>
        As a frontend developer and designer based in Pakistan, I&apos;m dedicated to turning concepts into captivating digital platforms. With expertise in <span className='font-semibold text-emerald-300 italic'>HTML, CSS, JavaScript, TypeScript, Tailwind CSS, and Next.js</span>, I create responsive, user-centered websites that combine aesthetics with top-tier performance.
        <br />
      I bring depth to user interactions with animations powered by <span className='font-semibold text-emerald-300 italic'>GSAP, AOS, and Framer Motion</span>, enhancing the visual flow and engagement. Additionally, my experience with <span className='font-semibold text-emerald-300 italic'>Git</span> and <span className='font-semibold text-emerald-300 italic'>GitHub</span> supports smooth collaboration and efficient project workflow.
      <br />
       If you&apos;re ready to elevate your online presence, let&apos;s create something truly <span className='font-semibold text-emerald-300 italic'>remarkable</span> together!
    </p>
    <div className='mt-6'>
     <Link href={"/resume"}>
     <Button className='bg-gray-900 ' containerClassName='w-40 ' borderRadius='1.5rem' data-aos="zoom-in">More about me</Button>
     </Link>
      </div>
      </div>
      <Services />
     </div>
    </div>
  )
}

export default About