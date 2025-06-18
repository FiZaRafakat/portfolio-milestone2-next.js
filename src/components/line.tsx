// import { useRef, useLayoutEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const Line = () => {
//   const wrapperRef = useRef(null);
//   const textRef = useRef(null);

//   useGSAP(() => {
//     const wrapperWidth = wrapperRef.current.offsetWidth;
//     const textWidth = textRef.current.scrollWidth;

//     const moveDistance = textWidth - wrapperWidth;

//     gsap.fromTo(
//       textRef.current,
//       { x: wrapperWidth },
//       {
//         x: -moveDistance,
//         ease: "power1.inOut",
//         scrollTrigger: {
//           trigger: wrapperRef.current,
//           start: "top 40%",
//           end: `+=${textWidth}`, // scroll based on actual width
//           scrub: 2,
//           pin: true,
//         },
//       }
//     );
//   }, []);

//   return (
//     <div ref={wrapperRef} className="min-h-[100px] flex items-center relative overflow-hidden">
//       <p
//         ref={textRef}
//         className="text-[10vw] text-white font-extrabold whitespace-nowrap"
//       >
//         I didn’t just learn <span className="clip-text inline-block">animations</span> to impress, I learned them to make people smile while they scroll.
//       </p>
//     </div>
//   );
// };

// export default Line;



"use client";
import {motion} from "framer-motion"; 
import { useRef, } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const badges =[
  {
    title : "Pixel-Perfect Every Time",
    emoji : '✨',
    top : '-10%',
    left : '5%',
    rotate : -10
  },
  {
    title : "Lightning-Fast Interfaces",
    emoji : '⚡',
    top : '90%',
    left : '8%',
    rotate : -10
  },
  {
    title: "Clean Code. Clean Design.",
    emoji : '💎',
    top : '4%',
    left : '65%',
  },
  {
    title : "Frontend with Feel",
    emoji : '🎨',
    top : '-10%',
    left : '50%',
    rotate : -10,
  },
  //{
  //   title : "Smart UI Decisions",
  //   emoji : '🧠',
  //   top : '20%',
  //   left : '12%',
  // },

  {
    title : "Built for Business Needs",
    emoji : '💼',
    top : '80%',
    left : '45%',
    rotate : -12
  },
  {
    title: "Made to Convert 🛒",
    top: "80%",
    left: "88%",
    rotate: -10,
  },
  {
    title: "Crafted with UX Love 💖",
    top: "-2%",
    left: "98%",
    rotate: 12,
  },
  {
    title: "Animation that Speaks 🎬",
     top : '-10%',
    left : '20%',
    rotate : -12
  },
  {
    title: "Scroll That Sells 💰",
    top : '80%',
    left : '30%',
    rotate : -15
  },
  {
    title: "Interfaces with Soul 🧿",
    top: "75%",
    left: "16%",
    rotate: -10,
  },
  {
    title: "Designed to Impress 👀",
    top: "70%",
    left: "73%",
    rotate: -8,
  },
  {
    title: "Feels like Magic 🎇",
    top: "-3%",
    left: "81%",
    rotate: -15,
  },
  {
    title: "Every Pixel Counts 🔍",
    top: "75%",
    left: "36%",
    rotate: -5,
  },
  // {
  //   title: "Built for Speed ⚡",
  //   top: "15%",
  //   left: "60%",
  //   rotate: 10,
  // },
  {
    title: "Wow at First Scroll 🌈",
    top: "80%",
    left: "0%",
    rotate: -7,
  },
  {
    title : "Accessible & SEO Ready",
    emoji : '🌐',
    top : '80%',
    left : '58%',
    rotate : -12
  },
  {
    title : "Users Stay. Clients Smile",
    emoji : "💖",
    top : '-5%',
    left : '39%',
    rotate: -5
  }
]



const Line = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  // const [showSmile, setShowSmile] = useState(false);

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
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 40%",
          end: `+=${textWidth}`,
          scrub: 2,
          pin: true,
          // onUpdate: (self) => {
          //   const progress = self.progress;
          //   setShowSmile(progress > 0.5);
          // },
        },
      }
    );
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="md:min-h-[300px] relative overflow-x-hidden flex items-center" >
         <div ref={textRef} className="relative min-w-max">
        <p className="md:text-[10vw] text-[10vh] text-white font-extrabold whitespace-nowrap relative z-10">
          I didn’t just learn{" "}
          <span className=" inline-block">animations</span> to impress,
          I learned them to make people{" "}
          {/* {showSmile && (
            <span className="inline-block animate-bounce text-yellow-300">
              😊
            </span>
          )}{" "} */}
          smile while they scroll.
        </p>

        {/* Absolute Badges inside scrolling textRef */}
        {badges.map((badge, index) => (
          <motion.div
            key={index}
            className="absolute bg-gradient-to-r from-emerald-300 to-sky-400 text-black px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg"
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} dragElastic={0.2} dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} initial={{ opacity: 0, y: -20 }}  animate={{ opacity: 1, y: 0, rotate: badge.rotate || 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} whileTap={{ scale: 0.95 }}
             whileHover={{ scale: 1.05 }}
            style={{
              top: badge.top,
              left: badge.left,
              transform: `translate(-50%, -50%)`,
              zIndex: 20,
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
