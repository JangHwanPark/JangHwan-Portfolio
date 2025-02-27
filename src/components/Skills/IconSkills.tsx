import { useRef } from "react";
import { gsap } from "gsap";

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
    <div className="cursor-pointer grid grid-rows-3 grid-cols-3 gap-8">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="relative flex flex-col items-center"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}>
          <figure className="w-14 h-14 md:w-28 md:h-28">{skill.icon}</figure>

          {/* 팝업 (툴팁) */}
          <div
            className="absolute bottom-[-50px] bg-gray-900 text-white px-2 py-1 rounded opacity-0 text-sm text-center"
            ref={(el) =>{
              if (el) (popupRefs.current[index] = el);
            }}>
            {skill.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default IconSkills;