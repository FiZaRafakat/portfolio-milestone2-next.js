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
  const smileRef = useRef<HTMLSpanElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

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
          start: "top 20%",
          end: `+=${textWidth}`,
          scrub: 2,
          pin: true,
        },
      }
    );

  ScrollTrigger.create({
  trigger: wrapperRef.current,
  start: "top 30%",
  end: `+=${textWidth}`,
  scrub: true,
  onUpdate: (self) => {
    const progress = self.progress;

    const face = svgRef.current?.querySelector("#face");
    const eyeLeft = svgRef.current?.querySelector("#eyeLeft");
    const eyeRight = svgRef.current?.querySelector("#eyeRight");
    const smile = svgRef.current?.querySelector("#smile");

    if (!face || !eyeLeft || !eyeRight || !smile || !svgRef.current) return;

    // Animate IN
    if (progress > 0.5) {
      gsap.to(svgRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "back.out(2)",
      });

      gsap.to(face, {
        strokeDashoffset: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.to([eyeLeft, eyeRight], {
        opacity: 1,
        scale: 1.2,
        duration: 0.4,
        delay: 0.8,
        stagger: 0.2,
        ease: "back.out(3)",
      });

      gsap.to(smile, {
        strokeDashoffset: 0,
        duration: 0.6,
        delay: 1.2,
        ease: "power2.out",
      });
    }

    // Animate OUT (Reset if scrolling back)
    else {
      gsap.to(svgRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
      });

      gsap.set(face, { strokeDashoffset: 251 });
      gsap.set([eyeLeft, eyeRight], { opacity: 0, scale: 1 });
      gsap.set(smile, { strokeDashoffset: 50 });
    }
  },
});



  }, []);

  return (
    <div
      ref={wrapperRef}
      className="min-h-[450px] relative overflow-x-hidden flex items-center"
    >
      <div ref={textRef} className="relative min-w-max">
        <p className="md:text-[10vw] text-white font-extrabold whitespace-nowrap relative z-10 mask-image">
          I learned animations — not just to impress, but to make{" "} <span ref={smileRef}>people</span>{" "}
          <span className="relative z-20 text-emerald-300">
            smile
          </span>{" "}
          while they scroll.
        </p>

        <svg
  ref={svgRef}
  width="150"
  height="150"
  viewBox="0 0 100 100"
  className="absolute z-30"
  style={{ top: "-5%", left: "73%", transform: "translate(-50%, -50%) rotate(-10deg)", opacity: 0 }}
>
  {/* Face Circle */}
  <circle
    id="face"
    cx="50"
    cy="50"
    r="40"
    stroke="#38bdf8"
    strokeWidth="4"
    fill="transparent"
    strokeDasharray="251"
    strokeDashoffset="251"
  />

  {/* Eyes */}
  <circle id="eyeLeft" cx="35" cy="40" r="5" fill="#38bdf8" opacity="0" />
  <circle id="eyeRight" cx="65" cy="40" r="5" fill="#38bdf8" opacity="0" />

  {/* Smile Path */}
  <path
    id="smile"
    d="M35 65 Q50 80 65 65"
    stroke="#38bdf8"
    strokeWidth="4"
    fill="transparent"
    strokeDasharray="50"
    strokeDashoffset="50"
  />
</svg>





        {/* Badges */}
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
