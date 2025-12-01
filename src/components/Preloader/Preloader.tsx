import { Dispatch, SetStateAction, useRef, useState } from 'react';

import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import gsap from 'gsap';

import PreloaderText from './PreloaderText';

const Preloader = ({ setComplete }: { setComplete: Dispatch<SetStateAction<boolean>> }) => {
  const [text, setText] = useState('');
  const containerRef = useRef<HTMLDivElement | null>(null);
  const installConnRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const welcomeRef = useRef<(HTMLDivElement | null)[]>([]);
  const welcome = ['W', 'E', 'L', 'C', 'O', 'M', 'E'];

  useGSAP(() => {
    const fullText = 'npm install';
    const tl = gsap.timeline();

    // 타이핑 애니메이션
    tl.to(
      {},
      {
        // 전체 텍스트 길이에 따른 타이핑 시간
        duration: 0.1 * fullText.length,
        onUpdate: function () {
          // 현재 진행 상태 기반으로 글자 계산
          const index = Math.floor(this.progress() * fullText.length);
          setText(fullText.slice(0, index + 1)); // 한 글자씩 추가
        },
      }
    );

    // 프로그레스 바 애니메이션
    tl.to(progressBarRef.current, {
      width: '100%',
      duration: 2, // 2초 동안 진행
      ease: 'power2.out',
      repeat: 0,
    });

    tl.to(
      installConnRef.current,
      {
        y: -200,
        duration: 1,
        opacity: 0,
      },
      '+=0.3'
    );

    tl.fromTo(
      welcomeRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        y: '-100%',
        ease: 'back.out(1.7)',
        duration: 0.5,
        stagger: 0.05,
      },
      '+=0.1'
    );

    tl.to(containerRef.current, {
      scaleY: 0,
      transformOrigin: 'bottom',
      duration: 1,
      ease: 'back.out(1.7)',
      stagger: 0.2,
      delay: 1,
      onComplete: () => {
        setComplete(true);
      },
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className={clsx(
        'h-screen w-screen',
        'fixed top-0 right-0 bottom-0 left-0',
        'z-[9999] bg-black text-white'
      )}
    >
      <div
        ref={installConnRef}
        className={clsx(
          'mx-auto w-full max-w-2xl',
          'flex flex-col items-start',
          'relative top-1/2 -translate-y-1/2',
          'rounded-md p-6 text-green-400'
        )}
      >
        {/* 터미널 스타일 타이핑 애니메이션 */}
        <div className="font-mono text-2xl">
          <span className="text-gray-400">JangHwanPark &gt;</span>
          <span> {text} </span>
          <span>▋</span>
        </div>

        {/* 프로그레스 바 */}
        <div className="mt-2 h-2 w-full rounded-md bg-gray-700">
          <div ref={progressBarRef} className="h-full w-0 rounded-md bg-green-400"></div>
        </div>
      </div>

      <PreloaderText
        className="relative top-1/2 h-[20rem] -translate-y-1/2 justify-center"
        items={welcome}
        itemRef={welcomeRef}
      />
    </section>
  );
};

export default Preloader;
