import SkillBox from './skillcard'
import { MdDevices, MdSpeed } from 'react-icons/md'
import { SiFramer, SiSanity, SiOpenai, SiStripe, SiTailwindcss } from 'react-icons/si'
import { FiLock } from 'react-icons/fi'
import { FaRegComments } from 'react-icons/fa'

const skills = [
  {
    icon: MdDevices,
    title: 'Responsive UI',
    description: 'Adaptive layouts for all screen sizes with pixel perfection.',
  },
  {
    icon: SiFramer,
    title: 'Smooth Animations',
    description: 'Using AOS, GSAP, Framer Motion for interactive UI flows.',
  },
  {
    icon: SiSanity,
    title: 'CMS & Comments',
    description: 'Sanity-based user comments with full CRUD support.',
  },
  {
    icon: SiOpenai,
    title: 'AI Integrations',
    description: 'Built chatbots and tools with OpenAI SDK and Chainlit.',
  },
  {
    icon: SiStripe,
    title: 'Stripe Payments',
    description: 'Secure checkout with auth, tracking & success modal.',
  },
  {
    icon: FiLock,
    title: 'Clerk Auth',
    description: 'Protected routes and secure authentication.',
  },
  {
    icon: MdSpeed,
    title: 'Optimized Builds',
    description: 'Performance-focused frontend with best practices.',
  },
  {
    icon: FaRegComments,
    title: 'User Interactions',
    description: 'Comment-based engagement via CMS logic.',
  },
  {
    icon: SiTailwindcss,
    title: 'Tailwind Design',
    description: 'Utility-first CSS for rapid and clean UI builds.',
  },
]

const SkillsSection = () => {
  return (
    <section className='mt-20 text-center'>
      <h2 className='clip-text xl:text-5xl lg:text-4xl md:text-3xl font-bold mb-2'>Skills I Offer</h2>
      <p className='p max-w-xl mx-auto text-lg uppercase text-white px-4 lg:mb-10  mb-5 my-5'>
        From frontend magic to AI integration — here’s what I bring to the table.
      </p>

      <div className='flex flex-wrap justify-center gap-4 md:gap-6'>
        {skills.map((skill, i) => (
          <SkillBox
            key={i}
            icon={skill.icon}
            title={skill.title}
            description={skill.description}
          />
        ))}
      </div>
    </section>
  )
}

export default SkillsSection


