import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ProjectCard from '../components/ProjectCard/ProjectCard';
import { projects } from '../data';
import { useScroll } from '../providers/ScrollProvider';

gsap.registerPlugin(ScrollTrigger);
const Project = ({
  onSelectProject,
}: {
  onSelectProject?: (project: ProjectsType | null) => void;
}) => {
  const { sections } = useScroll();
  const horizonRef = useRef<HTMLUListElement | null>(null);

  const projectCnt = projects.length; // 프로젝트 개수
  const itemWidth = 500; // 각 아이템(카드)의 너비
  const totalWidth = projectCnt * itemWidth; // 전체 너비

  useGSAP(() => {
    // null 체크
    if (!horizonRef.current || !sections.projects.current) return;

    gsap.to(horizonRef.current, {
      x: `-${totalWidth - window.innerWidth}px`, // 가로 스크롤 이동
      ease: 'none',
      scrollTrigger: {
        trigger: sections.projects.current, // 트리거 기준 요소
        // top top : article 의 Top 이 뷰포트 상단(top)에 도달하면 실행
        // bottom bottom : article 의 바텀이 `뷰포트 바텀`과 만나면 고정 시작
        start: 'top top',
        end: `+=${totalWidth} + window.innerHeight}px`, // 스크롤이 totalWidth 만큼 진행될 때까지 효과 유지
        scrub: 1, // 부드러운 애니메이션 효과
        pin: true, // 활성화 시 article이 고정됨
      },
    });
  }, []);

  console.log(totalWidth);
  return (
    /* work-section */
    <section
      id="projects"
      ref={sections.projects}
      className="flex h-[100vh] flex-col items-start justify-start"
    >
      {/* mt-26 */}
      <h2 className="mx-auto mt-32 mb-5 w-full max-w-3xl bg-gradient-to-b from-[#F4B400] to-white bg-clip-text px-4 text-4xl font-bold text-transparent md:mt-10 md:mb-16 md:max-w-6xl lg:ml-20 lg:text-6xl 2xl:text-7xl">
        My Work
      </h2>
      <ul
        ref={horizonRef}
        // w-[3600px]
        style={{ width: `${totalWidth}px` }}
        className="relative mb-0 flex w-full gap-10 before:absolute before:top-0 before:h-[2px] before:w-[50000vw] before:bg-white before:content-[''] after:absolute after:top-[100%] after:h-[2px] after:w-[50000vw] after:bg-white after:content-[''] lg:h-[80%]"
      >
        {projects?.map((project) => (
          <ProjectCard
            key={project.id}
            isModal={true}
            project={project}
            onSelectProject={onSelectProject}
          />
        ))}
      </ul>
    </section>
  );
};

export default Project;
