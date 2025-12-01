import { memo, useRef } from 'react';

import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import gsap from 'gsap';

import Avatar from '../components/Avatar/Avatar';
import { useScroll } from '../providers/ScrollProvider';

const About = () => {
  const { sections } = useScroll();
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    console.log('titleRef 애니메인션 실행');
    tl.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        duration: 1.2,
        y: 0,
      }
    );

    tl.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        duration: 1.2,
        y: 0,
      },
      '-=0.5'
    );

    tl.fromTo(
      imgRef.current,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        duration: 1.2,
        x: 0,
      },
      '-=0.5'
    );
  }, [titleRef, textRef, imgRef]);

  const titleTexts = [
    '안녕하세요. 데이터를 조각하는',
    '프론트엔드 개발자 박장환입니다.',
    '데이터를 조각하여 경험을 만들고,',
    '경험을 연결하여 가치를 만듭니다.',
  ];

  const aboutTextClass = clsx(
    'md:relative md:z-20 xs:text-sm sm:text-base lg:text-lg xl:text-xl font-normal text-t-sub'
  );

  return (
    <section
      id="about"
      ref={sections.about}
      className={clsx(
        'mx-auto sm:max-w-3xl md:max-w-6xl xl:max-w-7xl',
        'flex flex-col justify-center'
      )}
    >
      <div className="mt-24 flex w-full flex-col-reverse items-center justify-center gap-10 px-4 py-16 sm:px-8 lg:mt-0 lg:mb-10 lg:min-h-[500px] lg:flex-row lg:gap-5 lg:py-0 xl:mb-0 xl:gap-10">
        {/* intro */}
        <article className="relative flex flex-col items-center justify-center md:gap-5 lg:gap-2">
          {/*<h2 className="w-full pb-3 font-bold lg:pb-8 text-xl lg:text-3xl text-left">
            <span >&lt;</span>h1<span >&gt;</span>
            <span>About</span>
            <span >&lt;</span>h1<span >/&gt;</span>
          </h2>*/}
          <h3
            ref={titleRef}
            className="relative z-12 w-full text-center leading-8 font-bold lg:mb-3 lg:text-left lg:leading-12"
          >
            {titleTexts.map((text, index) => (
              <p
                key={index}
                className={clsx(
                  'text-xl sm:text-2xl',
                  index < 2
                    ? 'text-t-primary md:text-2xl xl:text-3xl'
                    : 'text-t-sub text-left md:text-3xl xl:text-5xl',
                  index % 2 === 0 ? 'mb-1' : 'mb-5 md:mb-2 lg:mb-5',
                  index === 2 && 'mt-12 md:mt-20 lg:mt-0'
                )}
              >
                {text}
              </p>
            ))}
          </h3>
          <div ref={textRef} className="mr-auto w-full lg:max-w-lg xl:max-w-2xl">
            <p className={`${aboutTextClass} mb-2`}>제 홈페이지에 방문해 주셔서 감사합니다.</p>
            <p className={`${aboutTextClass} leading-7`}>
              저는 데이터를 시각화하고, 더 나은 UI를 설계하며 사용자 입장에서 경험을 고민하는
              프론트엔드 개발자입니다. 저의 다양한 프로젝트와 협업 경험을 담았습니다. 함께 성장하고
              만들어가는 과정이 궁금하시다면, 포트폴리오를 확인해 주세요.
            </p>
          </div>
        </article>
        {/* Image */}
        <Avatar ref={imgRef} />
      </div>
    </section>
  );
};

export default memo(About);
