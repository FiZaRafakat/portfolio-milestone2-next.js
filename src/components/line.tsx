"use client";
import {motion} from "framer-motion"; 
import { useRef, } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const badges =[
  {
    title: "Wow at First Scroll 🌈",
    top: "80%",
    left: "0%",
    rotate: -7,
  },
  {
    title: "Every Pixel Counts 🔍",
    top : '0%',
    left : '11%',
    rotate : -10
  },
  {
    title: "Animation that Speaks 🎬",
     top : '70%',
    left : '23%',
    rotate : -12
  },
  {
    title : "Users Stay. Clients Smile",
    emoji : "💖",
    top : '-5%',
    left : '35%',
    rotate: -5
  },
  {
    title : "Frontend with Feel",
    emoji : '🎨',
    top : '75%',
    left : '46%',
    rotate : -10,
  },
  {
    title: "Clean Code. Clean Design.",
    emoji : '💎',
    top : '4%',
    left : '57%',
  },{
    title: "Feels like Magic 🎇",
    top: "80%",
    left: "81%",
    rotate: -15,
  },
  {
    title: "Crafted with UX Love 💖",
    top: "-2%",
    left: "98%",
    rotate: 12,
  },
]
const Line = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!wrapperRef.current || !textRef.current) return;

    const wrapperWidth = wrapperRef.current.offsetWidth;
    const textWidth = textRef.current.scrollWidth;
    const moveDistance = textWidth - wrapperWidth;

    gsap.fromTo(
      textRef.current,
      { x: wrapperWidth },
      {
        x: -moveDistance,
        ease: "power2.out",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 30%",
          // markers : true , 
          end: `+=${textWidth}`,
          scrub: 2,
          pin: true,
        },
      }
    );
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="md:min-h-[300px] relative overflow-x-hidden flex items-center" >
         <div ref={textRef} className="relative min-w-max">
        <p className="md:text-[10vw] text-[10vh] text-white font-extrabold whitespace-nowrap relative z-10 mask-image">
          I learned animations — not just to impress,  
          but to make people smile while they scroll.
        </p>

        {/* Absolute Badges inside scrolling textRef */}
        {badges.map((badge, index) => (
          <motion.div
            key={index}
            className="absolute bg-gradient-to-r from-emerald-300 to-sky-400 text-black px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg z-20"
            drag
            dragElastic={0.2}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0, rotate: badge.rotate || 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.1 }}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            style={{
              top: badge.top,
              left: badge.left,
              transform: "translate(-50%, -50%)",
            }}
          >
            <span>{badge.emoji}</span>
            <span>{badge.title}</span>
          </motion.div>
        ))}
        </div>
    </div>
  );
};

export default Line;