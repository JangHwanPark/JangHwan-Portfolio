import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useScroll } from '../providers/ScrollProvider';

const Home = () => {
  gsap.registerPlugin(ScrollTrigger);
  const { sections } = useScroll();
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useGSAP(() => {
    gsap.to(textRef.current, {
      scale: 4, // 점점 커짐
      opacity: 0.8, // 부드럽게 유지
      ease: 'power1.out',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top center',
        end: 'top+=500 center',
        scrub: 1, // 스크롤에 따라 변화
      },
    });
  }, []);

  const sectionClass = clsx(
    'w-full min-h-screen flex flex-col items-center justify-start',
    'bg-gray-900 text-white'
  );

  const textClass = clsx('hidden md:block font-bold flex gap-3 text-md', 'lg:text-4xl lg:flex-col');

  const testMobileClass = clsx(
    'text-2xl flex flex-col items-center justify-start gap-6',
    'lg:hidden'
  );

  return (
    <section ref={sections.home} id="home" className={sectionClass}>
      {/* 텍스트 영역 */}
      <article className="flex h-screen items-center justify-center">
        {/* PC / Tablet */}
        <h2 ref={textRef} className={textClass}>
          <span>Hello, I'm JangHwan.</span>
          <span>A Passionate Frontend Developer.</span>
        </h2>
        {/* Mobile */}
        <h2 ref={textRef} className={testMobileClass}>
          <span>Hello,</span>
          <span>I'm JangHwan.</span>
          <span>A Passionate</span>
          <span>Frontend Developer.</span>
        </h2>
      </article>
    </section>
  );
};

export default Home;
