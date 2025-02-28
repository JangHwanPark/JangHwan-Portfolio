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
    'p-10 border rounded-xl',className);

  const subTitleClass = clsx(
    'mb-10 text-xl font-semibold text-center');
  return (
    <article className={skillsConn}>
      <h3 className={subTitleClass}>{title}</h3>
      <IconSkills skills={skills}/>
    </article>
  );
};

export default SkillCategory;