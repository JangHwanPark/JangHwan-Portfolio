/*
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  { year: "2024", title: "프론트엔드 개발자", company: "IBK기업은행" },
  { year: "2023", title: "포트폴리오 제작", company: "개인 프로젝트" },
  { year: "2022", title: "스타트업 개발 인턴", company: "Tech Startup" },
];

const Experience = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    gsap.from(".timeline-item", {
      opacity: 0,
      y: 50,
      stagger: 0.3,
      scrollTrigger: {
        trigger: timelineRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section id="experience" ref={timelineRef} className="min-h-screen py-20 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-10">Experience</h2>

      <div className="relative max-w-4xl mx-auto before:absolute before:left-1/2 before:top-0 before:w-1 before:h-full before:bg-gray-300 before:-translate-x-1/2">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item relative mb-10 flex items-center">
            <div className={`w-1/2 p-4 ${index % 2 === 0 ? "text-right pr-10" : "text-left pl-10"}`}>
              <h3 className="text-xl font-bold">{exp.title}</h3>
              <p className="text-gray-500">{exp.company}</p>
            </div>
            <div className="w-10 h-10 bg-blue-500 rounded-full absolute left-1/2 -translate-x-1/2 border-4 border-white"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;*/

/*
import { useScroll } from "../providers/ScrollProvider";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 임시 데이터
/!*const experiences = [
  { year: "2024", title: "프론트엔드 개발자", description: "Next.js 프로젝트 개발 참여" },
  { year: "2023", title: "포트폴리오 사이트 제작", description: "GSAP과 Three.js 활용" },
];*!/

const Experience = () => {
  gsap.registerPlugin(ScrollTrigger);
  const { sections } = useScroll();

  const connClass = clsx(
    'bg-amber-200',
    'w-full max-w-3xl md:max-w-4xl lg:max-w-6xl mx-auto',
    'py-32',);

  return (
    <section ref={sections.experience} id='experience' className={connClass}>
      <h2>
        My career <span>&</span>
        <br /> experience
      </h2>
      {/!* 타임 라인 *!/}
      <div className='flex flex-col items-center justify-center'>
        <div>
          <div></div>
        </div>
        <div className='h-32 border'></div>
        <div className='w-10 h-10 bg-red-300 rounded-full'></div>
        <div className='h-32 border'></div>
        <div className='w-10 h-10 bg-red-300 rounded-full'></div>
        <div className='h-32 border'></div>
        <div className='w-10 h-10 bg-red-300 rounded-full'></div>
      </div>
    </section>
  );
};