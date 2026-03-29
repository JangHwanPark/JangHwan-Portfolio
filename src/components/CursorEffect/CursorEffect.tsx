import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CursorEffect = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!cursorRef.current || !gradientRef.current) return;

    // quickTo: tween을 재생성하지 않고 값만 업데이트 → 프레임 드롭 방지
    const cursorX = gsap.quickTo(cursorRef.current, 'x', { duration: 0.2, ease: 'power2.out' });
    const cursorY = gsap.quickTo(cursorRef.current, 'y', { duration: 0.2, ease: 'power2.out' });
    const gradientX = gsap.quickTo(gradientRef.current, 'x', { duration: 0.4, ease: 'power2.out' });
    const gradientY = gsap.quickTo(gradientRef.current, 'y', { duration: 0.4, ease: 'power2.out' });

    const moveCursor = (e: MouseEvent) => {
      cursorX(e.clientX);
      cursorY(e.clientY);
      gradientX(e.clientX);
      gradientY(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      {/* 배경 그래디언트 효과 (마우스를 따라다님) */}
      <div
        ref={gradientRef}
        className="pointer-events-none fixed h-[1200px] w-[1200px] rounded-full bg-gradient-to-r from-pink-500 to-purple-700 opacity-30 blur-2xl"
        style={{ transform: 'translate(-50%, -50%)', willChange: 'transform' }}
      ></div>

      {/* 마우스 커서 효과 */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed hidden h-6 w-6 rounded-full bg-white mix-blend-difference lg:block"
        style={{ transform: 'translate(-50%, -50%)', willChange: 'transform' }}
      ></div>
    </>
  );
};

export default CursorEffect;
