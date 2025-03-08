import { IconSkills } from "../index";
import clsx from "clsx";

const SkillCategory = ({
  title,
  className,
  skills,
} : {
  title: string;
  className?: string;
  skills: SkillsType[];
}) => {
  const skillsConn = clsx(
    className,
    'lg:first:mb-40 lg:last:mt-40 p-6 md:p-8 bg-none',
    'rounded-2xl shadow-lg border border-gray-200 lg:max-w-2xl lg:mx-auto',
    'hover:shadow-2xl transition-all duration-300 ease-in-out',
    'hover:shadow-[0_0_5px_2px_#ffd700,0_0_15px_8px_#ffcc00,0_0_110px_20px_#ffeb3b]',);

  const subTitleClass = clsx(
    "mb-6 text-xl lg:text-2xl font-bold text-center",
    "bg-gradient-to-b from-[#F4B400] to-white bg-clip-text text-transparent");

  return (
    <article className={skillsConn}>
      <h3 className={subTitleClass}>{title}</h3>
      <IconSkills skills={skills}/>
    </article>
  );
};

export default SkillCategory;