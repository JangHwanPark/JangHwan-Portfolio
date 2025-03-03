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
    "first:mb-32 last:mt-32 p-6 md:p-8 bg-white rounded-2xl shadow-lg border border-gray-200",
    "hover:shadow-2xl transition-all duration-300 ease-in-out",
    className
  );

  const subTitleClass = clsx(
    "mb-6 text-xl font-bold text-center text-gray-800",
    "bg-gradient-to-r from-blue-500 to-indigo-500 text-transparent bg-clip-text"
  );

  return (
    <article className={skillsConn}>
      <h3 className={subTitleClass}>{title}</h3>
      <IconSkills skills={skills}/>
    </article>
  );
};

export default SkillCategory;