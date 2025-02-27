import { useScroll } from "../providers/ScrollProvider";
import clsx from "clsx";

// 임시 데이터
/*const experiences = [
  { year: "2024", title: "프론트엔드 개발자", description: "Next.js 프로젝트 개발 참여" },
  { year: "2023", title: "포트폴리오 사이트 제작", description: "GSAP과 Three.js 활용" },
];*/

const Experience = () => {
  const { sections } = useScroll();
  const connClass = clsx(
    'bg-amber-200',
    'w-full max-w-3xl md:max-w-4xl lg:max-w-6xl mx-auto',
    'py-32',);

  return (
    <section ref={sections.experience} id='experience' className={connClass}>
      {/* 타임 라인 */}
      <div className='flex flex-col items-center justify-center'>
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

export default Experience;