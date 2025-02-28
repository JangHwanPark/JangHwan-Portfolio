// import { Tab, TabList, TabPanel, TabPanels, Tabs } from "../components";
// import { TabItem } from "../types/tabs";
// import PageHeader from "../layout/PageHeader/PageHeader";
// import ProjectCard from "../components/ProjectCard/ProjectCard";
// import Horizontally from "../components/Scroll/Horizontally";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data";
import { useScroll } from "../providers/ScrollProvider";

/*const tabs: TabItem[] = [
  { key: "tab1", label: "전체" },
  { key: "tab2", label: "프런트엔드" },
  { key: "tab3", label: "백엔드" },
  { key: "tab4", label: "풀스택" },
];*/

const Project = () => {
  gsap.registerPlugin(ScrollTrigger);
  const { sections } = useScroll();
  const horizonRef = useRef<HTMLUListElement | null>(null);

  const projectCnt = projects.length;
  const itemWidth = 600;
  const totalWidth = projectCnt * itemWidth;
  // const connHeight = window.innerHeight + itemWidth;

  useGSAP(() => {
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

  const connClass = clsx('w-full max-w-3xl md:max-w-6xl mx-auto')

  const horizontallyClass = clsx(
    'w-[600px] py-10 p-6 bg-white border-r',
    'flex flex-col items-center justify-start gap-6',
    //'transition-transform duration-300 hover:scale-105'
  );

  // content-stretch
  return (
    <section id='projects' ref={sections.projects} className='flex flex-col items-start justify-center gap-6'>
      <h2 className={`my-20 text-4xl md:text-7xl font-bold ${connClass}`}>
        My <span>Work</span>
      </h2>
      {/* 3600px */}
      <ul ref={horizonRef} className="w-[4800px] px-24 mb-48 flex relative gap-10 border-y">
        {projects.map((project, index) => (
          <li key={index} className={horizontallyClass}>
            {/* 프로젝트 헤더 */}
            <div className='w-full'>
              <header className='w-full my-10 flex items-center justify-between'>
                <h3 className='text-3xl font-semibold'>0{String(index + 1)}.</h3>
                <div className='text-end'>
                  <h4 className='text-xl font-semibold'>{project.name}</h4>
                  <p>웹 애플리케이션</p>
                </div>
              </header>
              <div className='mb-10'>
                <h4 className='text-xl font-semibold'>Tools and features</h4>
                <p>Javascript, TypeScript, React, Threejs</p>
              </div>
            </div>
            {/* 프로젝트 이미지 */}
            <figure className="w-full flex justify-center">
              <Link to={`/projects/${project.name}`} state={{ modal: true, project}}>
                <img src="/src/assets/images/p2.webp" alt="" className='w-full h-full'/>
              </Link>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Project;