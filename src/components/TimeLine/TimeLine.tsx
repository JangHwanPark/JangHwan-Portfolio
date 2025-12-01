import { Ref, forwardRef, useRef } from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
const TimeLine = forwardRef<HTMLDivElement, TimeLineProps>(({ data, timelineRef, dotRef }, ref) => {
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
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%', // 화면의 80% 위치에서 시작
            end: 'top 50%', // 화면의 50% 지점까지 애니메이션 적용
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div ref={ref} className="relative mx-auto flex flex-col">
      {/* 타임라인 선 */}
      <div
        ref={timelineRef}
        className="from-white-bg via-accent absolute top-0 -left-3 h-full w-[3px] -translate-x-1/2 transform bg-[#F4B400] bg-gradient-to-t to-transparent md:-left-10 lg:top-[-50px] lg:left-1/2"
      ></div>

      {/* 타임라인 요소 */}
      {/* from-dark-bg bg-[#F4B400] */}
      {/* shadow-[0_0_5px_2px_#F4B400,0_0_15px_8px_#ffcc00,0_0_110px_20px_#ffeb3b] */}
      <div
        ref={dotRef}
        className="absolute -left-3 h-[10px] w-[10px] -translate-x-1/2 transform rounded-full bg-[#ffd700] shadow-[0_0_5px_2px_#ffd700,0_0_15px_8px_#ffcc00,0_0_110px_20px_#ffeb3b] md:-left-10 lg:top-[-50px] lg:left-1/2"
      ></div>

      {/* 경력 항목 */}
      <ul className="space-y-12 md:space-y-16 lg:space-y-32">
        {data.map((experience, index) => (
          /* 각 리스트 요소에 ref 할당 */
          <li
            key={index}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className="mb-12 flex flex-col justify-between md:mb-16 md:gap-2 lg:mb-32 lg:flex-row lg:gap-14 lg:px-[8%] lg:last:mb-14"
          >
            {/* 경력 콘텐츠 */}
            <div className="flex flex-row justify-between gap-[50px] lg:w-[40%]">
              <div className="flex w-full flex-col">
                {/* 포지션 */}
                <h4 className="w-full text-xl leading-8 font-bold md:text-[22px] lg:w-[180px] lg:text-[33px] lg:leading-10">
                  {experience.position}
                </h4>
                {/* 사명 */}
                <h5 className="text-accent mt-[10px] w-full pb-5 text-lg font-normal capitalize md:text-[17px] lg:text-lg xl:text-[20px]">
                  {experience.company}
                </h5>
              </div>
              {/* 연도 */}
              <h3 className="xs:text-2xl text-xl leading-[45px] font-medium md:text-[40px] lg:text-[48px]">
                {experience.year}
              </h3>
            </div>
            {/* 설명 */}
            <p className="xs:text-base w-full text-sm font-light md:text-[18px] lg:w-[40%]">
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
