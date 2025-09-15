import { useRef } from "react";
import { useScroll } from "../providers/ScrollProvider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TimeLine from "../components/TimeLine/TimeLine";

// 더미 데이터
const experienceData = [
  {
    year: "2020",
    position: "Game Play QA",
    company: "Adecco Korea",
    description:
      "EA Korea FIFA Online 프로젝트의 게임 플레이 QA로 근무하며 경기 AI, 플레이 밸런스, 선수 움직임, 물리 엔진, 스킬 시스템 등을 집중적으로 테스트했습니다.\n" +
      "플레이 경험을 분석해 개선안을 제안하고, 재현이 어려운 버그를 사내 QA 툴(TestBad)을 활용하여 분석·보고하는 업무를 담당했습니다.\n" +
      "PC/모바일 플랫폼에서 호환성 테스트를 수행하고, JIRA 기반의 버그 리포트 작성 및 개발/기획팀과 협업하여 품질 안정성 확보에 기여했습니다."
  },
  {
    year: "NOW",
    position: "Computer Science 학사 과정",
    company: "안산 대학교",
    description:
      "학부 과정에서 운영체제, 네트워크, 데이터베이스, 알고리즘, 소프트웨어 공학 등 컴퓨터공학 기초 지식을 습득하고 있습니다.\n" +
      "컴퓨터 정보학회 학술대회에 논문을 투고하여 연구 경험과 학문적 글쓰기 능력을 습득했습니다.\n" +
      "교내 졸업작품 경진대회에서 2등(우수상)을 수상하며 협업 능력과 개발 성과를 인정받았습니다.\n" +
      "교내 멘토링 프로그램에 참여하여 후배 대상 코딩 교육과 알고리즘 강의를 진행하며 지식 전달 및 커뮤니케이션 역량을 강화했습니다."
  }
];

gsap.registerPlugin(ScrollTrigger);
const Experience = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const { sections } = useScroll();

  useGSAP(() => {
    if (!timelineRef.current || !dotRef.current) return;

    // 타임라인의 실제 높이, 점의 크기 가져오기
    const timelineHeight = timelineRef.current.offsetHeight + 100;
    const dotHeight = dotRef.current.offsetHeight;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sections.experience.current,
        start: '30% center',
        end: `+=${timelineHeight}`,
        scrub: true
      }
    });
    timeline.fromTo(
      timelineRef.current,
      { height: "0%", opacity: 0 },
      { height: `${timelineHeight}px`, opacity: 1, duration: 1.2, ease: 'power2.out' },
    ).fromTo(
      dotRef.current,
      { y: '0px' },
      { y: `${timelineHeight - dotHeight}px`, duration: 1.2, ease: 'power2.out' },
      '<' // dot이 타임라인과 동시에 이동
    );
  }, [sections.experience]);

  return (
    <section ref={sections.experience} className="flex flex-col items-center justify-center relative opacity-100 h-auto mx-auto mb-28 xl:mb-32 py-4 px-12 sm:px-8 md:px-20 lg:px-0 lg:py-[60px] mt-40 lg:mt-0">
      <article className="w-full max-w-6xl">
        <h2 className="font-bold text-4xl lg:text-6xl 2xl:text-7xl leading-10 lg:leading-14 xl:leading-[70px] xs:text-left md:text-center bg-gradient-to-b from-[#F4B400] to-white bg-clip-text text-transparent mt-32 mb-12 lg:mb-24">
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