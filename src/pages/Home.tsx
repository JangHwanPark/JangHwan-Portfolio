import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScroll } from "../providers/ScrollProvider";

const Home = () => {
  gsap.registerPlugin(ScrollTrigger);
  const { sections } = useScroll();
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useGSAP(() => {
    gsap.to(textRef.current, {
      scale: 4, // 점점 커짐
      opacity: 0.8, // 부드럽게 유지
      ease: "power1.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top center",
        end: "top+=500 center",
        scrub: 1, // 스크롤에 따라 변화
      },
    });
  }, []);

  return (
    <section ref={sections.home} id='home' className="w-full min-h-screen bg-gray-900 text-white flex flex-col items-center justify-start">
      {/* 텍스트 영역 */}
      <article className="h-screen flex items-center justify-center">
        <h2 ref={textRef} className="text-4xl font-bold flex flex-col gap-3">
          <span>Hello, I'm JangHwan.</span>
          <span>A Passionate Frontend Developer.</span>
        </h2>
      </article>
    </section>
  );
};

export default Home;