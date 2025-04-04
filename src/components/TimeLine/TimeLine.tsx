import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { forwardRef, Ref, useRef } from "react";
import { useGSAP } from "@gsap/react";

interface Experience {
  year: string;
  position: string;
  company: string;
  description: string;
}

interface TimeLineProps {
  data: Experience[];
  timelineRef: Ref<HTMLDivElement>;
  dotRef: Ref<HTMLDivElement>;
}

gsap.registerPlugin(ScrollTrigger);
const TimeLine = forwardRef<HTMLDivElement, TimeLineProps>(({
  data,
  timelineRef,
  dotRef,
}, ref) => {
  // 각 리스트 아이템의 ref 저장
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useGSAP(() => {
    itemRefs.current.forEach((item) => {
      if (!item) return;

      gsap.fromTo(
        item,
        { opacity: 0, y: 50 }, // 초기 상태: 투명 & 아래쪽 위치
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%", // 화면의 80% 위치에서 시작
            end: "top 50%", // 화면의 50% 지점까지 애니메이션 적용
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div ref={ref} className="relative flex flex-col mx-auto">
      {/* 타임라인 선 */}
      <div ref={timelineRef} className="absolute top-0 lg:top-[-50px] -left-3 md:-left-10 lg:left-1/2 transform -translate-x-1/2 w-[3px] h-full bg-gradient-to-t from-white-bg bg-[#F4B400] via-accent to-transparent"></div>

      {/* 타임라인 요소 */}
      {/* from-dark-bg bg-[#F4B400] */}
      {/* shadow-[0_0_5px_2px_#F4B400,0_0_15px_8px_#ffcc00,0_0_110px_20px_#ffeb3b] */}
      <div ref={dotRef} className="absolute lg:top-[-50px] -left-3 md:-left-10 lg:left-1/2 transform -translate-x-1/2 bg-[#ffd700] w-[10px] h-[10px] rounded-full shadow-[0_0_5px_2px_#ffd700,0_0_15px_8px_#ffcc00,0_0_110px_20px_#ffeb3b]"></div>

      {/* 경력 항목 */}
      <ul className="space-y-12 md:space-y-16 lg:space-y-32">
        {data.map((experience, index) => (
          /* 각 리스트 요소에 ref 할당 */
          <li key={index} ref={(el) => {
            itemRefs.current[index] = el
          }} className="lg:px-[8%] flex justify-between mb-12 flex-col md:gap-2 lg:gap-14 md:mb-16 lg:mb-32 lg:last:mb-14 lg:flex-row">
            {/* 경력 콘텐츠 */}
            <div className="flex flex-row  justify-between gap-[50px] lg:w-[40%] ">
              <div className='w-full flex flex-col'>
                {/* 포지션 */}
                <h4 className="w-full text-xl lg:text-[33px] leading-8 lg:leading-10 md:text-[22px] lg:w-[180px] font-bold">
                  {experience.position}
                </h4>
                {/* 사명 */}
                <h5 className="w-full pb-5 text-lg lg:text-lg xl:text-[20px] capitalize mt-[10px] text-accent font-normal md:text-[17px]">
                  {experience.company}
                </h5>
              </div>
              {/* 연도 */}
              <h3 className="text-xl xs:text-2xl lg:text-[48px] font-medium leading-[45px] md:text-[40px]">
                {experience.year}
              </h3>
            </div>
            {/* 설명 */}
            <p className="w-full text-sm xs:text-base lg:w-[40%] md:text-[18px] font-light">
              {experience.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
});

TimeLine.displayName = 'TimeLine'; // forwardRef 사용시 필수
export default TimeLine;