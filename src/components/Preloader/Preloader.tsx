import clsx from "clsx";
import { Dispatch, SetStateAction, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from 'gsap';

const Preloader = ({
  setComplete
} : {
  setComplete: Dispatch<SetStateAction<boolean>>;
}) => {
  const spans = useRef<(HTMLElement | null)[]>([]);
  const containerRef = useRef(null);
  const secondOverlayRef = useRef(null);

  const word = ['J', 'a' ,'n', 'g', 'H', 'w', 'a', 'n'];
  const classes = clsx(
    'w-screen h-screen',
    'fixed top-0 left-0 bottom-0 right-0');

  useGSAP(() => {
    const timeline = gsap.timeline();
    // span 요소들을 순회하며 애니메이션 적용
    timeline.to(spans.current, {
      y: '-100%', // span 요소들을 위로 이동
      ease: 'back.out(1.7)', // 이징 함수 (부드러운 종료 효과)
      duration: 1.4, // 애니메이션 지속 시간 (1.4초)
      stagger: 0.05, // 각 span 요소 사이의 지연 시간 (0.05초 간격)
    });

    // 컨테이너(container)와 두 번째 오버레이(overlay)를 거의 동시에 애니메이션 처리
    timeline.to([containerRef.current, secondOverlayRef.current], {
      scaleY: 0,
      transformOrigin: 'top',
      ease: 'back.out(1.7)',
      duration: 1,
      stagger: 0.2,
      onComplete: () => {
        setComplete(true);
      },
    });

    // 한 요소에 약간의 지연 시간을 적용
    timeline.to(secondOverlayRef.current, {
      scaleY: 0, // 요소의 Y축 크기를 0으로 줄임
      transformOrigin: 'top', // 변환 기준점을 상단으로 설정
      ease: [0.83, 0, 0.17, 1] as any, // 사용자 정의 이징 함수 적용
      duration: 1, // 애니메이션 지속 시간 (1초)
      delay: -0.9, // 타이밍을 미세 조정하기 위해 지연 시간 조정 (필요에 따라 수정 가능)
    });
  }, [setComplete]);

  return (
    <>
      <section ref={containerRef} className={`${classes} z-[9999] flex items-end justify-end bg-black text-white`}>
        <div className='h-[20rem] py-20 flex gap-5 items-center overflow-hidden'>
          {word.map((item, index) => (
            <div
              key={index}
              // span 에 ref 할당
              ref={(el) => {
                spans.current[index] = el
              }}
              className='text-8xl font-bold'>
              {item}
            </div>
          ))}
        </div>
      </section>
      <div ref={secondOverlayRef} className={`${classes} bg-[#48d64c] z-[9990]`}></div>
    </>
  );
};

export default Preloader;