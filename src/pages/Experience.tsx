import { useRef } from "react";
import { useScroll } from "../providers/ScrollProvider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TimeLine from "../components/TimeLine/TimeLine";
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

gsap.registerPlugin(ScrollTrigger);
const Experience = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const { sections } = useScroll();

  useGSAP(() => {
    if (!timelineRef.current || !dotRef.current) return;

    // 타임라인의 실제 높이, 점의 크기 가져오기
    const timelineHeight = timelineRef.current.offsetHeight;
    const dotHeight = dotRef.current.offsetHeight;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sections.experience.current,
        start: '30% center',
        // end: '180% bottom',
        end: `+=${timelineHeight}`,
        scrub: true
      }
    });
    timeline.fromTo(
      timelineRef.current,
      { height: "0%", opacity: 0 },
      // { height: '130%', opacity: 1, duration: 1.2, ease: 'power2.out' },
      { height: `${timelineHeight}px`, opacity: 1, duration: 1.2, ease: 'power2.out' },
    ).fromTo(
      dotRef.current,
      { y: '0px' },
      { y: `${timelineHeight - dotHeight}px`, ease: 'none' },
      '<' // dot이 타임라인과 동시에 이동
    );
  }, [sections.experience]);

  return (
    <section ref={sections.experience} className="flex flex-col items-center justify-center relative opacity-100 h-auto mx-auto xl:mb-[250px] py-4 px-12 sm:px-8 md:px-20 lg:px-0 lg:py-[120px] mt-40 lg:mt-0">
      <article className="w-full max-w-6xl">
        <h2 className="font-bold text-4xl lg:text-6xl 2xl:text-7xl leading-10 lg:leading-14 xl:leading-[70px] xs:text-left md:text-center bg-gradient-to-b from-[#F4B400] to-white bg-clip-text text-transparent mt-12 mb-12 lg:mb-24">
          My career &
          <br /> experience
        </h2>
        <TimeLine
          data={experienceData}
          timelineRef={timelineRef}
          dotRef={dotRef}/>
      </article>
    </section>
  );
};

export default Experience;