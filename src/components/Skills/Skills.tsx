import { useRef } from "react";
import { gsap } from "gsap";
import { skills } from "../../data";

const Skills = () => {
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
    <div className="cursor-pointer flex gap-4">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="relative flex flex-col items-center"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}>
          <figure className="w-10 h-10">{skill.icon}</figure>

          {/* 팝업 (툴팁) */}
          <div
            className="absolute bottom-[-40px] bg-gray-900 text-white px-2 py-1 rounded opacity-0 text-sm text-center"
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

export default Skills;