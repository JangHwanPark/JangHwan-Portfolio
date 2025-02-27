import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Tags from "../components/Tags/Tags";

const tags = [
  { label: "협업" },
  { label: "팀워크" },
  { label: "사용자 중심" },
];

const About = () => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useGSAP(() => {
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

  return (
    <section className="w-full bg-blue-200">
      <article
        className="max-w-3xl md:max-w-4xl lg:max-w-5xl min-h-screen mx-auto flex items-center justify-center gap-5">
        <img ref={imgRef} className="w-80 h-[450px] object-cover rounded-xl" src="/src/assets/images/p1.jpg" alt="" />
        <header className="font-semibold leading-8">
          <Tags items={tags} />
          <h2 ref={titleRef} className="w-fit mb-3 text-3xl leading-10 font-bold">
            {/* 사용자 경험을 디자인하는 */}
            {/* 사용자 경험을 고민하는 */}
            데이터를 조각하는<br />
            프런트엔드 개발자 박장환입니다.
          </h2>
          <p ref={textRef} className="w-fit max-w-md text-xl leading-8 font-semibold">
            데이터를 효과적으로 시각화하고, 더 나은 UI를 설계하는 것을 목표로
            사용자 중심의 인터페이스를 고민하며, 팀과 함께 성장하고 있습니다.
            제 포트폴리오에서 다양한 프로젝트와 협업 경험을 확인해보세요.
          </p>
        </header>
      </article>
    </section>
  );
};

export default About;