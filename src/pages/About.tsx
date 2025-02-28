import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Tags from "../components/Tags/Tags";
import { useScroll } from "../providers/ScrollProvider";
import clsx from "clsx";

const tags = [
  { label: "협업" },
  { label: "팀워크" },
  { label: "사용자 중심" },
];

const About = () => {
  const { sections } = useScroll();
  const imgRef = useRef<HTMLImageElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useGSAP(() => {
    // 모바일 환경에서는 애니메이션 실행 안함
    const windowWidth = window.innerWidth;
    if (windowWidth <= 768) return;

    if (windowWidth >= 768) {
      gsap.set(imgRef.current, {
        translateY: -150,
        translateX: -50,
        opacity: 0,
      });

      gsap.set(titleRef.current, {
        translateY: 100,
        opacity: 0,
      });

      gsap.set(textRef.current, {
        translateY: 100,
        opacity: 0,
      });
    }

    const timeline = gsap.timeline();
    timeline.to(imgRef.current, {
      opacity: 1,
      duration: 1.2,
      translateY: -100,
      ease: "power1.out",
    }).to(titleRef.current, {
      opacity: 1,
      duration: 1.2,
      translateY: 30,
      ease: "power1.out",
    }).to(textRef.current, {
      opacity: 1,
      duration: 1.2,
      translateY: 30,
      ease: "power1.out",
    });
  }, []);

  const connClass = clsx(
    'mt-[74px] w-full px-4 sm:max-w-3xl md:max-w-6xl xl:max-w-7xl mx-auto',
    'flex flex-col-reverse items-center justify-center gap-3 md:gap-10',
    'md:flex-row lg:mb-10',);

  const imgClass = clsx(
    'w-62 h-62 md:w-96 md:h-[450px] object-cover ',
    'rounded-full md:rounded-none relative z-10',)

  return (
    <section ref={sections.about} id='about' className={connClass}>
      {/* intro */}
      <div className='relative flex flex-col items-center justify-center gap-10'>
        <article className="mb-0 lg:relative lg:mb-52 font-semibold leading-8">
          <Tags items={tags} />
          <h2 ref={titleRef} className="w-fit mt-8 sm:mt-0 mb-3 text-lg sm:text-xl md:text-3xl lg:text-5xl leading-8 lg:leading-20 font-bold relative z-12">
            {/* 사용자 경험을 디자인하는 */}
            {/* 사용자 경험을 고민하는 */}
            <span className='text-c-blue'>데이터를</span>
            <span className='text-c-red'> 조각하는</span><br />
            <span className='text-c-yellow'>프런트엔드 개발자</span>
            <span className='text-c-green'> 박장환입니다.</span>
          </h2>
          <p ref={textRef} className="md:relative md:z-20 text-md max-w-3xl md:text-xl lg:text-2xl leading-8 md:leading-10 font-normal">
            데이터를 효과적으로 시각화하고, 더 나은 UI를 설계하는 것을 목표로
            사용자 중심의 인터페이스를 고민하며, 팀과 함께 성장하고 있습니다.
            제 포트폴리오에서 다양한 프로젝트와 협업 경험을 확인해보세요.
          </p>
        </article>
        {/* Line */}
        {/*<div className='hidden md:block absolute h-7/12 border-2 border-c-yellow -bottom-56 left-1/5'></div>*/}
      </div>
      {/* Image */}
      <div className='md:relative lg:right-32'>
        <div className="md:w-[410px] md:h-[470px] bg-c-yellow md:absolute md:top-[-30px] md:left-[10px] md:z-0] "></div>
        <img ref={imgRef} className={imgClass} src="/src/assets/images/p3.webp" alt="" />
      </div>
    </section>
  );
};

export default About;