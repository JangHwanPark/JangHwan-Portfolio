import { useCallback, useRef } from 'react';

import clsx from 'clsx';
import { gsap } from 'gsap';

import Tooltip from '../Tooltip/Tooltip';

interface IconSkillsProps {
  skills: SkillsType[];
}

const IconSkills = ({ skills }: IconSkillsProps) => {
  const popupRefs = useRef<(HTMLDivElement | null)[]>([]);

  // data-index로 인덱스를 읽어 인라인 함수 생성 제거
  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const index = Number(e.currentTarget.dataset.index);
    gsap.to(popupRefs.current[index], {
      opacity: 1,
      y: -10,
      duration: 0.3,
      ease: 'power2.out',
    });
  }, []);

  const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const index = Number(e.currentTarget.dataset.index);
    gsap.to(popupRefs.current[index], {
      opacity: 0,
      y: 0,
      duration: 0.3,
      ease: 'power2.out',
    });
  }, []);

  return (
    <div className="grid cursor-pointer grid-cols-3 grid-rows-3 gap-6">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="relative flex flex-col items-center"
          data-index={index}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <figure
            className={clsx(
              'h-14 w-14 rounded-xl border-2 p-4 md:h-16 md:w-16 lg:h-24 lg:w-24',
              skill.color
            )}
          >
            {skill.icon}
          </figure>
          <Tooltip
            ref={(el) => {
              if (el) popupRefs.current[index] = el;
            }}
            text={skill.name}
          />
        </div>
      ))}
    </div>
  );
};

export default IconSkills;
