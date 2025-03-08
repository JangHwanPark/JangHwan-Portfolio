import { useRef, memo } from "react";
import { useScroll } from "../providers/ScrollProvider";
import Avatar from "../components/Avatar/Avatar";
import clsx from "clsx";

const About = () => {
  const { sections } = useScroll();
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  const titleTexts = [
    "안녕하세요. 데이터를 조각하는",
    "프론트엔드 개발자 박장환입니다.",
    "데이터를 조각하여 경험을 만들고,",
    "경험을 연결하여 가치를 만듭니다.",
  ];

  const aboutTextClass = clsx(
    'md:relative md:z-20 xs:text-sm sm:text-base lg:text-lg xl:text-xl font-normal text-t-sub')

  return (
    <section ref={sections.about} id='about' className='py-16 lg:py-0 w-full px-4 sm:px-8 sm:max-w-3xl md:max-w-6xl xl:max-w-7xl mx-auto flex flex-col-reverse items-center justify-center gap-3 lg:gap-10 lg:flex-row lg:mb-10 xl:mb-0 lg:min-h-[500px]'>
      {/* intro */}
      <article className='relative flex flex-col items-center justify-center gap-2'>
        <h2 ref={titleRef} className="w-full mb-3 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl leading-8 md:leading-12 font-bold relative z-12">
          {titleTexts.map((text, index) => (
            <p key={index} className={clsx(
              'text-2xl md:text-4xl',
              index < 2 ? 'text-2xl text-t-primary' : 'xl:text-5xl text-t-sub',
              index % 2 === 0 ? "mb-1" : "mb-5"
            )}>{text}</p>
          ))}
        </h2>
        <div className='w-full lg:max-w-2xl mr-auto'>
          <p ref={textRef} className={`${aboutTextClass} mb-2`}>
            제 홈페이지에 방문해 주셔서 감사합니다.
          </p>
          <p className={`${aboutTextClass} leading-7`}>
            저는 데이터를 시각화하고, 더 나은 UI를 설계하며 사용자 입장에서 경험을 고민하는 프론트엔드 개발자입니다. 저의 다양한 프로젝트와 협업 경험을 담았습니다. 함께 성장하고 만들어가는 과정이 궁금하시다면, 포트폴리오를 확인해 주세요.
          </p>
        </div>
      </article>
      {/* Image */}
      <Avatar/>
    </section>
  );
};

export default memo(About);