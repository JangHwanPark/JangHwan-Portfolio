import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import { gsap } from "gsap";
import Tags from "../components/Tags/Tags";

const tags = [
  { label: "협업" },
  { label: "팀워크" },
  { label: "사용자 중심" },
];

const About = () => {
  const headerRef = useRef<HTMLElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);

  return (
    <section className="mx-auto w-full min-h-screen flex flex-col justify-center bg-blue-300">
      <header ref={headerRef} className="font-semibold leading-8">
        <Tags items={tags} />
        <h1 className="w-fit text-6xl leading-20 font-bold">
          {/* 사용자 경험을 디자인하는 */}
          {/* 사용자 경험을 고민하는 */}
          데이터를 조각하는<br />
          프런트엔드 개발자 박장환입니다.
        </h1>
        {/*<h2 className="w-fit text-xl leading-8">
          저는 팀워크와 협업을 중시하는 신입 프론트엔드 개발자입니다.<br />
          사용자 중심의 웹 애플리케이션을 개발하기 위해 팀과 함께 협력하며 성장하고 있습니다.<br />
          제 포트폴리오에서 다양한 프로젝트와 협업 경험을 확인해보세요.
        </h2>*/}
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

export default About;