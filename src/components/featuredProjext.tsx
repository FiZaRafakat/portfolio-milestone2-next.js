import React from 'react'
import { motion } from 'framer-motion'
import { BorderBeam } from "@/components/magicui/border-beam";

const FeaturedProject = () => {




  return (
    <div className='mt-20 px-4 sm:px-6 lg:px-8 max-w-5xl xl:max-w-[84rem] mx-auto relative z-10'>

      {/* Heading */}
      <div className="flex justify-center">
        <p className="uppercase tracking-widest mt-3 text-base xl:text-xl clip-text text-center">
          Real World Projects
        </p>
      </div>


         {/* 1st Project */}
          <motion.h3
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className='lg:text-6xl md:text-4xl text-3xl mt-10 italic text-white text-center lg:text-left'
            >
              Comforty Marketplace
            </motion.h3>
      {/* Project Content */}
      <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }} className="mt-14 flex flex-col lg:flex-row gap-10 items-center justify-between">
        
        {/* Left - Description */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full lg:w-1/2 space-y-6 text-white"
        >
          <p className="text-lg text-gray-300">
            Comforty is a real-world furniture e-commerce app with full-stack capabilities — built for performance, functionality, and user delight.
          </p>

          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li><strong>Tech Stack:</strong> Next.js, Tailwind CSS, Sanity CMS, Stripe, Clerk, Framer Motion</li>
            <li><strong>Authentication</strong> with secure Clerk login/signup flows</li>
            <li><strong>EmailJS Auto-Responses</strong> for user communication</li>
            <li><strong>Order Tracking</strong> integration for customer ease</li>
            <li><strong>Chatbot</strong> for instant support</li>
            <li>Review system + Admin-friendly CMS</li>
            <li>Beautiful responsive design with animation</li>
          </ul>

          <motion.a 
              href="https://comforty-marketplace.vercel.app"
              target="_blank"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-block px-5 py-3 bg-gradient-to-r from-sky-400 to-emerald-400 text-black font-semibold rounded-full hover:scale-105 transition"
            >
              Visit Live Site
            </motion.a>

        </motion.div>

        {/* Right - Video */}
      <motion.div 
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
  className="w-full lg:w-1/2"
>
  <div className="relative flex items-center justify-center">

    {/* OUTER WRAPPER: spacing between video and BorderBeam */}
    <div className="relative z-10 rounded-2xl bg-white/10 p-[3px]">

      {/* INNER video container */}
      <div className="aspect-video overflow-hidden rounded-[14px]">
        <video 
          src="/images/comforty.mp4" 
          autoPlay 
          muted 
          loop 
          controls
          playsInline 
          className="w-full h-full object-cover rounded-[12px]"
        />
      </div>
    </div>

    {/* BORDER BEAMS behind, with spacing */}
    <div className="absolute -inset-2 z-0 pointer-events-none rounded-[22px]">
      <BorderBeam
        duration={6}
        size={400}
        className="from-transparent via-sky-400 to-transparent"
      />
      <BorderBeam
        duration={6}
        delay={3}
        size={400}
        className="from-transparent via-emerald-300 to-transparent"
      />
    </div>
  </div>
</motion.div>



      </motion.div>

      {/* svg */}
      <div>
        <svg
        width={1000}
        height={100}
        xmlns='http://www.w3.org/2000/svg'
        >
          <path d="M 10 100 Q 500 100 980 100" stroke='white' fill='transparent' />
        </svg>
      </div>
      
      {/* 2nd Project */}
        <motion.h3
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='lg:text-6xl md:text-4xl text-3xl mt-20 italic text-white text-center lg:text-left'
        >
          AI Travel Assistant
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="mt-14 flex flex-col lg:flex-row gap-10 items-center justify-between"
        >
          {/* Left - Description */}
          <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full lg:w-1/2 space-y-6 text-white"
        >
          <p className="text-lg text-gray-300">
            AI Travel Planner Chatbot is an intelligent assistant that uses OpenAI Agents SDK and Chainlit to plan entire trips through a natural conversation flow.
          </p>

          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li><strong>Tech Stack:</strong> Chainlit, OpenAI Agents SDK, Gemini 2.0, Railway, Tailwind</li>
            <li><strong>Conversational UI</strong> powered by Chainlit with polite, human-like prompts</li>
            <li><strong>Personalized travel plans</strong> using dynamic reasoning and contextual memory</li>
            {/* <li><strong>Real-time tool usage</strong> via Agent Actions for destinations, dates, and budget</li> */}
            <li><strong>Emotion-aware responses</strong> — politely redirects off-topic messages</li>
            <li>Fully deployed on Railway with instant access</li>
          </ul>

          <motion.a 
            href="https://fizarafakattravelassistant-production.up.railway.app" 
            target="_blank"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-block px-5 py-3 bg-gradient-to-r from-sky-400 to-emerald-400 text-black font-semibold rounded-full hover:scale-105 transition"
          >
            Visit Live Site
          </motion.a>
        </motion.div>


          {/* Right - Video */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative flex items-center justify-center">
              <div className="relative z-10 rounded-2xl bg-white/10 p-[3px]">
                <div className="aspect-video overflow-hidden rounded-[14px]">
                  <video 
                    src="/images/travel-assistance.mp4" 
                    autoPlay 
                    muted 
                    loop 
                    controls
                    playsInline 
                    className="w-full h-full object-cover rounded-[12px]"
                  />
                </div>
              </div>
              <div className="absolute -inset-2 z-0 pointer-events-none rounded-[22px]">
                <BorderBeam duration={6} size={400} className="from-transparent via-sky-400 to-transparent" />
                <BorderBeam duration={6} delay={3} size={400} className="from-transparent via-emerald-300 to-transparent" />
              </div>
            </div>
          </motion.div>
        </motion.div>


      {/* 3rd Project */}
          <motion.h3
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className='lg:text-6xl md:text-4xl text-3xl mt-20 italic text-white text-center lg:text-left'
          >
            DizzyBlog CMS
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="mt-14 flex flex-col lg:flex-row gap-10 items-center justify-between"
          >
            {/* Left - Description */}
            <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-1/2 space-y-6 text-white"
          >
            <p className="text-lg text-gray-300">
              DizzyBlog is a visually refined and fully responsive blog platform built with focus on smooth reading experience, animations, and dynamic interactions.
            </p>

            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li><strong>Tech Stack:</strong> Next.js, Tailwind CSS, AOS, Sanity CMS, React Icons</li>
              <li><strong>Comment system</strong> powered by Sanity — add, update, and delete in real-time</li>
              <li><strong>Beautiful AOS animations</strong> for page transitions and blog reveal</li>
              <li><strong>Clean, hardcoded blog content</strong> for total visual control</li>
              <li><strong>Fully responsive design</strong> built with UI polish in mind</li>
              <li>Interactive layout with a strong focus on user engagement</li>
            </ul>

            <motion.a 
              href="https://dizzyblog.vercel.app" 
              target="_blank"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-block px-5 py-3 bg-gradient-to-r from-sky-400 to-emerald-400 text-black font-semibold rounded-full hover:scale-105 transition"
            >
              Visit Live Site
            </motion.a>
          </motion.div>


            {/* Right - Video */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative flex items-center justify-center">
                <div className="relative z-10 rounded-2xl bg-white/10 p-[3px]">
                  <div className="aspect-video overflow-hidden rounded-[14px]">
                    <video 
                      src="/images/dizzyblog.mp4" 
                      autoPlay 
                      muted 
                      loop 
                      controls
                      playsInline 
                      className="w-full h-full object-cover rounded-[12px]"
                    />
                  </div>
                </div>
                <div className="absolute -inset-2 z-0 pointer-events-none rounded-[22px]">
                  <BorderBeam duration={6} size={400} className="from-transparent via-sky-400 to-transparent" />
                  <BorderBeam duration={6} delay={3} size={400} className="from-transparent via-emerald-300 to-transparent" />
                </div>
              </div>
            </motion.div>
          </motion.div>


    </div>
  )
}

export default FeaturedProject

