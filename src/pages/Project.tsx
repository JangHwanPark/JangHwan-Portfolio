import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data";
import { useScroll } from "../providers/ScrollProvider";
import ProjectCard from "../components/ProjectCard/ProjectCard";

gsap.registerPlugin(ScrollTrigger);
const Project = ({
  onSelectProject
} : {
  onSelectProject: (project: ProjectsType | null) => void;
}) => {
  const { sections } = useScroll();
  const horizonRef = useRef<HTMLUListElement | null>(null);

  const projectCnt = projects.length; // 프로젝트 개수
  const itemWidth = 600; // 각 아이템(카드)의 너비
  const totalWidth = projectCnt * itemWidth; // 전체 너비
  // const connHeight = window.innerHeight + itemWidth;

  useGSAP(() => {
    // null 체크
    if (!horizonRef.current || !sections.projects.current) return;

    gsap.to(horizonRef.current, {
      x: `-${totalWidth - window.innerWidth}px`, // 가로 스크롤 이동
      ease: "none",
      scrollTrigger: {
        trigger: sections.projects.current, // 트리거 기준 요소
        // top top : article 의 Top 이 뷰포트 상단(top)에 도달하면 실행
        // bottom bottom : article 의 바텀이 `뷰포트 바텀`과 만나면 고정 시작
        start: "bottom bottom",
        end: `+=${totalWidth}`, // 스크롤이 totalWidth 만큼 진행될 때까지 효과 유지
        scrub: 1, // 부드러운 애니메이션 효과
        pin: true, // 활성화 시 article이 고정됨
      },
    });
  }, []);

  return (
    <section id="projects" ref={sections.projects} className="flex flex-col items-start justify-start">
      <h2 className="mt-20 mb-5 px-4 md:mt-26 md:mb-16 text-4xl lg:text-6xl 2xl:text-7xl font-bold w-full max-w-3xl md:max-w-6xl mx-auto dark:from-[#F4B400] dark:to-white bg-gradient-to-b bg-clip-text dark:text-transparent">
        My Work
      </h2>
      <ul ref={horizonRef}
          className="relative w-[3600px] lg:w-[3600px] mb-0 flex gap-10 before:content-[''] before:w-[50000vw] before:h-[2px] before:bg-black dark:before:bg-white before:absolute before:top-0 after:content-[''] after:w-[50000vw] after:h-[2px] after:bg-black after:absolute after:top-[100%] dark:after:bg-white">
        {projects?.map(project => (
          <ProjectCard key={project.id} isModal={true} project={project} onSelectProject={onSelectProject}/>
        ))}
      </ul>
    </section>
  );
};

export default Project;