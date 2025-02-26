/*
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Tags from "../components/Tags/Tags";

const tags = [
  { label: "협업" },
  { label: "팀워크" },
  { label: "사용자 중심" },
];

const Home = () => {
  const headerRef = useRef<HTMLElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const animatedSections = useRef({
    header: false,
    img: false,
    text: false
  });

  useGSAP(() => {
    gsap.set(imgRef.current, {
      opacity: 0,
      x: -100
    });

    gsap.set(textRef.current, {
      opacity: 0,
      y: 50
    });

    const timeline = gsap.timeline();
    let lastScrollY = window.scrollY; // 이전 스크롤 위치 저장

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isScrollingDown = scrollY > lastScrollY;

      if (isScrollingDown) {
        // 아래로 스크롤할 때 애니메이션 실행
        if (scrollY > 300 && !animatedSections.current.header) {
          timeline.to(headerRef.current, {
            y: -200,
            duration: 1.2,
            ease: "power2.out"
          });
          animatedSections.current.header = true;
        }

        if (scrollY > 400 && !animatedSections.current.img) {
          timeline.to(imgRef.current, {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: "power2.out"
          });
          animatedSections.current.img = true;
        }

        if (scrollY > 500 && !animatedSections.current.text) {
          timeline.to(textRef.current, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
          });
          animatedSections.current.text = true;
        }
      } else {
        // 위로 스크롤할 때 원래 위치로 복귀
        if (scrollY < 500 && animatedSections.current.text) {
          timeline.to(textRef.current, {
            opacity: 0,
            y: 50,
            duration: 1.2,
            ease: "power2.out"
          });
          animatedSections.current.text = false;
        }

        if (scrollY < 400 && animatedSections.current.img) {
          timeline.to(imgRef.current, {
            opacity: 0,
            x: -100,
            duration: 1.2,
            ease: "power2.out"
          });
          animatedSections.current.img = false;
        }

        if (scrollY < 300 && animatedSections.current.header) {
          timeline.to(headerRef.current, {
            y: 0,
            duration: 1.2,
            ease: "power2.out"
          });
          animatedSections.current.header = false;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="sticky top-0 mx-auto w-full min-h-screen flex flex-col justify-center bg-white">
      <header ref={headerRef} className="sticky top-0 font-semibold leading-8">
        <Tags items={tags} />
        <h1 className="w-fit text-6xl leading-20 font-bold">
          {/!* 사용자 경험을 디자인하는 *!/}
          {/!* 사용자 경험을 고민하는 *!/}
          데이터를 조각하는<br />
          프런트엔드 개발자 박장환입니다.
        </h1>
        {/!*<h2 className="w-fit text-xl leading-8">
          저는 팀워크와 협업을 중시하는 신입 프론트엔드 개발자입니다.<br />
          사용자 중심의 웹 애플리케이션을 개발하기 위해 팀과 함께 협력하며 성장하고 있습니다.<br />
          제 포트폴리오에서 다양한 프로젝트와 협업 경험을 확인해보세요.
        </h2>*!/}
      </header>
      <div className="w-full max-w-5xl flex items-center gap-5">
        <img ref={imgRef} className='w-96 h-96 rounded-xl' src="/src/assets/images/p1.jpg" alt="" />
        <h2 ref={textRef} className="w-fit text-xl leading-8 font-semibold">
          데이터를 효과적으로 시각화하고, 더 나은 UI를 설계하는 것을 목표로 합니다.<br/>
          사용자 중심의 인터페이스를 고민하며, 팀과 함께 성장하고 있습니다.<br/>
          제 포트폴리오에서 다양한 프로젝트와 협업 경험을 확인해보세요.
        </h2>
      </div>
    </section>
  );
};

export default Home;*/