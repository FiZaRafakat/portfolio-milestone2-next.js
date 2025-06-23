"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const StringLine = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const path = pathRef.current;
    if (!wrapper || !path) return;

    const defaultPath = "M 0 100 Q 250 100 500 100";
    gsap.set(path, { attr: { d: defaultPath } });

    const handleMove = (e: MouseEvent) => {
      const rect = wrapper.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const d = `M 0 100 Q ${mouseX} ${mouseY} 500 100`;

      gsap.to(path, {
        attr: { d },
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleLeave = () => {
      gsap.to(path, {
        attr: { d: defaultPath },
        duration: 1.4,
        ease: "elastic.out(1, 0.3)",
      });
    };

    wrapper.addEventListener("mousemove", handleMove);
    wrapper.addEventListener("mouseleave", handleLeave);

    return () => {
      wrapper.removeEventListener("mousemove", handleMove);
      wrapper.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="w-full h-[200px] md:h-[250px] relative overflow-hidden"
    >
      <svg width="100%" height="100%" viewBox="0 0 1000 200">
        <path
          ref={pathRef}
          d="M 0 100 Q 250 100 500 100"
          stroke="white"
          strokeWidth="2"
          fill="transparent"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default StringLine;





