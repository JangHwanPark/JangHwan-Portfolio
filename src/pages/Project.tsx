import { Link } from "react-router-dom";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data";
import { useScroll } from "../providers/ScrollProvider";

const Project = () => {
  gsap.registerPlugin(ScrollTrigger);
  const { sections } = useScroll();
  const horizonRef = useRef<HTMLUListElement | null>(null);

  const projectCnt = projects.length; // 프로젝트 개수
  const itemWidth = 600; // 각 아이템(카드)의 너비
  const totalWidth = projectCnt * itemWidth; // 전체 너비
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

  return (
    <section id='projects' ref={sections.projects} className='flex flex-col items-start justify-start'>
      <h2 className='mt-20 mb-5 px-4 md:my-20 text-4xl md:text-7xl font-bold w-full max-w-3xl md:max-w-6xl mx-auto'>
        My <span>Work</span>
      </h2>
      {/* 3600px */}
      <ul ref={horizonRef} className="relative w-[3600px] lg:w-[3600px] px-24 mb-0 flex gap-10 before:content-[''] before:w-[50000vw] before:h-[2px] before:bg-black before:absolute before:top-0 after:content-[''] after:w-[50000vw] after:h-[2px] after:bg-black after:absolute after:top-[100%]">
        {projects.map((project, index) => (
          <li key={index} className='w-[350px] md:w-[600px] py-10 p-6 bg-white border-r flex flex-col items-center justify-start gap-6 h-[860px] lg:h-[904px] xl:h-[1024px]'>
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
                <h4 className='mb-2 text-xl font-semibold'>Tools and features</h4>
                <div className='flex flex-wrap gap-3'>
                  {project.stack.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
              </div>
            </div>
            {/* 프로젝트 이미지 */}
            <figure className="w-full flex justify-center">
              <Link to={`/projects/${project.name}`} state={{ modal: true, project}}>
                <img src="/src/assets/images/p2.webp" alt="" className='w-96 h-36 lg:w-full lg:h-96'/>
              </Link>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Project;