import { useRef } from "react";
import { gsap } from "gsap";
import clsx from "clsx";
import Tooltip from "../Tooltip/Tooltip";

interface IconSkillsProps {
  skills: SkillsType[];
}

const IconSkills = ({
  skills
}: IconSkillsProps) => {
  const popupRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseEnter = (index: number) => {
    gsap.to(popupRefs.current[index], {
      opacity: 1,
      y: -10,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index: number) => {
    gsap.to(popupRefs.current[index], {
      opacity: 0,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <div className="cursor-pointer grid grid-rows-3 grid-cols-3 gap-6">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="relative flex flex-col items-center"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}>
          <figure className={clsx('w-14 h-14 md:w-16 md:h-16 lg:w-24 lg:h-24 p-4 border-2 rounded-xl', skill.color)}>
            {skill.icon}
          </figure>
          <Tooltip ref={(el) =>{
            if (el) (popupRefs.current[index] = el);
          }} text={skill.name}/>
        </div>
      ))}
    </div>
  );
};

export default IconSkills;