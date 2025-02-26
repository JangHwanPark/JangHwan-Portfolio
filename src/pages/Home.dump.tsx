/*
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tags from "../components/Tags/Tags";

const tags = [
  { label: "협업" },
  { label: "팀워크" },
  { label: "사용자 중심" },
];

// gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useGSAP(() => {
    gsap.to(divRef.current, {
      y: "-20vh",
      duration: 2,
      scrollTrigger: {
        trigger: divRef.current,
        start: 'top 50px',
        end: 'top 50px',
        markers: true,
      }
    });

    // ✅ 이미지 등장 애니메이션
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 100px",
          end: "top 130px",
          markers: true,
        },
      }
    );

    // ✅ 텍스트 애니메이션 (헤더와 겹치지 않도록)
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: -50,
        duration: 1.2,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 150px",
          end: "top 180px",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="w-full h-[2200px] px-10 min-h-screen bg-blue-300">
      <div ref={divRef} className='sticky top-[45vh] flex flex-col items-center justify-center gap-10'>
        <header ref={headerRef} className={`font-semibold leading-8`}>
          <Tags items={tags} />
          <h1 className="w-fit text-6xl leading-20 font-bold">
            {/!* 사용자 경험을 디자인하는 *!/}
            {/!* 사용자 경험을 고민하는 *!/}
            데이터를 조각하는<br />
            프런트엔드 개발자 박장환입니다.
          </h1>
          {/!*<h2 className="fixed w-fit text-xl leading-8">
          저는 팀워크와 협업을 중시하는 신입 프론트엔드 개발자입니다.<br />
          사용자 중심의 웹 애플리케이션을 개발하기 위해 팀과 함께 협력하며 성장하고 있습니다.<br />
          제 포트폴리오에서 다양한 프로젝트와 협업 경험을 확인해보세요.
        </h2>*!/}
        </header>
        <div className="w-full max-w-5xl flex items-center gap-5">
          <img ref={imgRef} className='w-96 h-96 rounded-full' src="/src/assets/images/p1.jpg" alt="" />
          <h2 ref={textRef} className="text-xl leading-10 font-semibold">
            데이터를 효과적으로 시각화하고, 더 나은 UI를 설계하는 것을 목표로 합니다.
            사용자 중심의 인터페이스를 고민하며, 팀과 함께 성장하고 있습니다.
            제 포트폴리오에서 다양한 프로젝트와 협업 경험을 확인해보세요.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Home;*/