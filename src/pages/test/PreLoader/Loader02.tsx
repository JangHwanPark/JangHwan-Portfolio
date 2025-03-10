import { Dispatch, SetStateAction, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Loader = ({ setComplete }: { setComplete: Dispatch<SetStateAction<boolean>>; }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const loadingWrappRef = useRef<HTMLDivElement>(null);
  const percentageRef = useRef<HTMLDivElement>(null);
  // const cursorRef = useRef<HTMLDivElement>(null);

  // 검은색 배경 퍼지는 효과
  const blackOverlayRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    // 커서 깜빡임 (초기 상태)
    /*gsap.to(cursorRef.current, {
      opacity: 0,
      duration: 0.5, // 0.5초마다 깜빡임
      repeat: -1, // 무한 반복
      yoyo: true, // 보였다가 사라지는 효과
      ease: "power1.inOut",
    });*/

    // 진행률 증가
    tl.to(percentageRef.current, {
      textContent: '100%',
      duration: 1,
      ease: "power1.out",
      snap: { textContent: 1 }, // 정수 값으로 반올림
    });

    tl.to(loadingWrappRef.current, {
      textContent: 'WELCOME',
      duration: 111111111,
      ease: "power1.out",
    });

    // 검은색 배경이 중앙에서 확장
    /*tl.to(blackOverlayRef.current, {
      scale: 15, // 중앙에서부터 확대
      duration: 1.5,
      ease: "power2.inOut",
      onComplete: () => setComplete(false), // 배경 확장 후 setComplete 실행
    });*/

    // 커서 애니메이션
    // 이동 중 깜빡임 OFF
    /*tl.to(cursorRef.current, {
      x: '-310',
      duration: 1.2,
      ease: "power1.out",
      onStart: () => {
        gsap.killTweensOf(cursorRef.current, 'opacity')
        gsap.set(cursorRef.current, { opacity: 1, });
      },
    });*/
  }, [setComplete]);

  return (
    <div ref={blackOverlayRef} className="fixed top-0 left-0 w-full h-full bg-[#eae5ec] flex items-center justify-center z-50">
      <div ref={containerRef} className="w-[450px] relative py-8 px-20 flex items-center justify-center border-2 border-yellow-400 rounded-full bg-black text-[#eae5ec] overflow-hidden gap-2">
        {/* 로딩 텍스트 */}
        <div ref={loadingWrappRef} className='text-4xl font-bold'>
          <span className="mr-5">LOADING</span>
          <span ref={percentageRef} className="text-gray-400">0%</span>
        </div>
        {/* 커서 */}
        {/*<div ref={cursorRef} className='absolute right-14 w-5 h-10 bg-[#eae5ec]'></div>*/}
      </div>
    </div>
  );
};

export default function Loader02() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <Loader setComplete={() => setIsLoaded(true)} />}
      {isLoaded && (
        <main className="flex items-center justify-center h-screen text-white bg-gray-900">
          메인 컨텐츠
        </main>
      )}
    </>
  );
}