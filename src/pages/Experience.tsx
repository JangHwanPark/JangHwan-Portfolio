import { useRef } from "react";
import { useScroll } from "../providers/ScrollProvider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
// import clsx from "clsx";

// 더미 데이터
const experienceData = [
  {
    year: "2017",
    position: "웹 개발자",
    company: "블루 큐브 디지털",
    description:
      "프론트엔드 및 백엔드 개발을 수행하며 CMS 대시보드를 구축하고, PHP, MySQL, JavaScript를 사용하여 반응형 웹 페이지를 개발했습니다.",
  },
  {
    year: "2020",
    position: "솔루션 리더",
    company: "브레인 엔터프라이즈",
    description:
      "웹 기능 개발, 제품 프로토타입 제작 및 재사용 가능한 컴포넌트/마이크로서비스를 구축하며, UI 개선 및 TypeScript 기반 3D UI 인터페이스를 구현했습니다.",
  },
  {
    year: "NOW",
    position: "프리랜서 & 기술 학습",
    company: "프리랜서",
    description:
      "다양한 클라이언트를 위한 3D 및 웹 서비스를 제공하며, 기술 학습을 통해 여러 분야에서 역량을 키우고 있습니다.",
  },
];

const Experience = () => {
  gsap.registerPlugin(ScrollTrigger);
  const timelineRef = useRef(null);
  const dotRef = useRef(null);
  const { sections } = useScroll();

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sections.experience.current,
        start: '30% center',
        end: '180% bottom',
        scrub: true,
      }
    });
    timeline.fromTo(
      timelineRef.current,
      { height: "0%", opacity: 0 },
      { height: '100%', opacity: 1, duration: 1.2, ease: 'power2.out' },
    ).fromTo(
      dotRef.current,
      { y: 0 },
      { y: 100, ease: 'none' },
    );
  }, [sections.experience]);

  return (
    <section ref={sections.experience} className="flex flex-col items-center justify-center relative opacity-100 h-auto mx-auto lg:mb-[250px] py-[120px]">
      <article className="w-full max-w-6xl">
        <h2 className="font-bold text-4xl lg:text-7xl leading-10 lg:leading-[70px] text-center bg-gradient-to-b dark:from-[#F4B400] dark:to-white bg-clip-text dark:text-transparent mt-12 mb-12 lg:mb-24">
          My career &
          <br /> experience
        </h2>

        <div className="relative flex flex-col mx-auto">
          {/* 타임라인 선 */}
          <div ref={timelineRef} className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 w-[3px] h-full bg-gradient-to-t dark:from-[#F4B400] from-dark-bg via-accent to-transparent"></div>

          {/* 타임라인 요소 */}
          <div ref={dotRef} className="absolute bottom-0 left-1/2 transform -translate-x-1/2 dark:bg-[#ffd700] w-[10px] h-[10px] rounded-full dark:shadow-[0_0_5px_2px_#ffd700,0_0_15px_8px_#ffcc00,0_0_110px_20px_#ffeb3b]"></div>


          {/* 경력 항목 */}
          {experienceData.map((experience, index) => (
            <div key={index} className="flex justify-between mb-[50px] md:flex-col md:gap-2 lg:gap-14 md:mb-[70px] lg:flex-row">
              <div className="flex w-[40%] justify-between gap-[50px] md:w-full md:pl-[10%]">
                <div>
                  <h4 className="text-[33px] leading-[30px] font-medium md:text-[22px] md:w-[180px]">
                    {experience.position}
                  </h4>
                  <h5 className="text-[20px] capitalize mt-[10px] text-accent font-normal md:text-[17px]">
                    {experience.company}
                  </h5>
                </div>
                <h3 className="text-[48px] font-medium leading-[45px] md:text-[40px]">
                  {experience.year}
                </h3>
              </div>
              <p className="w-[40%] text-[18px] font-light md:w-full md:pl-[10%]">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default Experience;