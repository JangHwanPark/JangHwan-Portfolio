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

/*const tabs: TabItem[] = [
  { key: "tab1", label: "전체" },
  { key: "tab2", label: "프런트엔드" },
  { key: "tab3", label: "백엔드" },
  { key: "tab4", label: "풀스택" },
];*/

const Project = () => {
  gsap.registerPlugin(ScrollTrigger);
  const projects = ["Project 1", "Project 2", "Project 3", "Project 4", "Project 5", "Project 6"];

  const containerRef = useRef<HTMLElement | null>(null);
  // const containerRef = useRef<HTMLUListElement | null>(null);
  // const horizonRef = useRef<HTMLLIElement[]>([]);
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
        trigger: containerRef.current, // 트리거 기준 요소
        // top top : article 의 Top 이 뷰포트 상단(top)에 도달하면 실행
        // bottom bottom : article 의 바텀이 `뷰포트 바텀`과 만나면 고정 시작
        start: "bottom bottom",
        end: `+=${totalWidth}`, // 스크롤이 totalWidth 만큼 진행될 때까지 효과 유지
        scrub: 1, // 부드러운 애니메이션 효과
        pin: true, // 활성화 시 article이 고정됨
      },
    });
  }, []);

  const horizontallyClass = clsx(
    "w-[600px] p-32 flex flex-col items-center justify-start gap-10");

  // content-stretch
  return (
    <section ref={containerRef} className="min-h-screen flex flex-col items-start justify-end gap-10 bg-gray-200">
      <h2 className="max-w-6xl mb-10 ml-32 mr-auto text-7xl font-bold">
        My <span>Work</span>
      </h2>
      <ul ref={horizonRef} className="w-full mb-20 flex relative">
        {projects.map((item, index) => (
          <li key={index} className={horizontallyClass}>
            <div>
              <div>
                <div>
                  <h3>{item}</h3>
                  <div>
                    <h4>Project Name</h4>
                    <p>Category</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>Javascript, TypeScript, React, Threejs</p>
              </div>
              <div className="w-full flex justify-center">
                <Link to="/">
                  <div>img</div>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Project;