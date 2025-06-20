"use client"
import About from "@/components/about";
import FeaturedProject from "@/components/featuredProjext";
import Hero from "@/components/hero"
import Line from "@/components/line";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    AOS.init({
       easing : "ease-out-back",
       duration : 1200,
       delay : 100 ,
       mirror : true ,
       anchorPlacement : "bottom-bottom",
       offset : 160,
    }) ;
    AOS.refresh()
    },[])

  return (
  <main>
    <Hero />
    <About />

       <div className="mt-20 px-4 sm:px-6 lg:px-8 max-w-5xl xl:max-w-[84rem]  mx-auto relative z-10">
        <div className='mb-10 '>
          <FeaturedProject />
        </div>

        <div className='mt-0 overflow-x-hidden z-10 md:block hidden'>
        <Line />
        </div>

   </div>

  </main>
  );
}