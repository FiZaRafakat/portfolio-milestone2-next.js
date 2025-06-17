import TechIcon from "./Techicon";



const SkillBox = ({
    icon,
    title,
    description,
    }: {
    icon: React.ElementType
    title: string
    description: string
    }
) => {
  return (
    <div className='inline-flex items-center gap-3 md:gap-4 py-2 md:py-3 md:px-4 px-3 outline outline-2 outline-white/10 bg-white/5 backdrop-blur-md mx-2 rounded-xl w-[18rem]'>
      <TechIcon component={icon} className="size-9 md:size-14" />
      <div>
        <h3 className='text-white font-semibold text-sm md:text-base'>{title}</h3>
        <p className='text-white/60 text-xs md:text-sm'>{description}</p>
      </div>
    </div>
  );
};

export default SkillBox;
