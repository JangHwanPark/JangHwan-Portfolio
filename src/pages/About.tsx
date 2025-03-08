import { useRef, memo } from "react";
import { useScroll } from "../providers/ScrollProvider";
import profileImg from "../assets/images/p1.webp";

const About = () => {
  const { sections } = useScroll();
  const imgRef = useRef<HTMLImageElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  return (
    <section ref={sections.about} id='about' className='mt-[74px] py-16 lg:py-0 w-full px-4 sm:px-8 sm:max-w-3xl md:max-w-6xl xl:max-w-7xl mx-auto flex flex-col-reverse items-center justify-center gap-3 lg:gap-10 lg:flex-row lg:mb-10 xl:mb-0'>
      {/* intro */}
      <div className='relative flex flex-col items-center justify-center gap-10'>
        <article className="mb-0 lg:relative lg:mb-10 xl:mb-52 font-semibold leading-8">
          <h2 ref={titleRef} className="w-fit mb-3 text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl leading-8 md:leading-12 xl:leading-20 font-bold relative z-12">
            <span className='text-c-blue'>데이터를</span>
            <span className='text-c-red'> 조각하는</span><br />
            <span className='text-c-yellow'>프론트엔드 개발자</span>
            <span className='text-c-green'> 박장환입니다.</span>
          </h2>
          <p ref={textRef} className="md:relative md:z-20 xs:text-sm sm:text-base max-w-3xl lg:text-lg xl:text-xl leading-8 lg:leading-10 font-normal lg:max-w-xl">
            데이터를 효과적으로 시각화하고, 더 나은 UI를 설계하는 것을 목표로
            사용자 중심의 인터페이스를 고민하며, 팀과 함께 성장하고 있습니다.
            제 포트폴리오에서 다양한 프로젝트와 협업 경험을 확인해보세요.
          </p>
        </article>
      </div>
      {/* Image */}
      <div className='lg:relative'>
        <div className="lg:w-[350px] xl:w-[410px] lg:h-[450px] bg-c-yellow"></div>
        <img ref={imgRef} src={profileImg} alt="Profile" className='w-62 h-62 lg:w-[450px] xl:w-[410px] lg:h-[450px] object-cover rounded-full lg:rounded-none relative z-10'/>
      </div>
    </section>
  );
};

export default memo(About);