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
      x: `-${totalWidth - window.innerWidth}px`,
      ease: "none",
      scrollTrigger: {
        // 스크롤 트리거 기준 요소
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${totalWidth}`,
        scrub: 1,
        pin: true,
      },
    });
  }, []);

  const horizontallyClass = clsx(
    "w-[1200px] p-32 flex flex-col items-center justify-start gap-10");

  // style={{ height: `${connHeight}px` }}
  return (
    <section className="bg-green-100">
      <article ref={containerRef} className="min-h-screen flex flex-col items-center justify-center content-stretch">
        <h2>
          My <span>Work</span>
        </h2>
        <ul ref={horizonRef} className="w-full flex relative">
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
      </article>
    </section>
  );
};

export default Project;