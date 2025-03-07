import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const TestPage01 = () => {
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // 초기 설정: 글자 숨기기
    gsap.set(textRef.current, { scale: 0.8, opacity: 0 });

    tl.to(containerRef.current, {
      duration: 1.2,
      backgroundColor: "#000",
      ease: "power2.out",
    })
      .to(
        textRef.current,
        {
          scale: 1.2,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
        },
        "-=1"
      )
      .to(textRef.current, {
        scale: 4,
        opacity: 0,
        duration: 1.2,
        ease: "power2.inOut",
      })
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.in",
        onComplete: () => {
          // 애니메이션 종료 후 컨텐츠 표시 로직 추가 가능
        },
      });
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "#141414",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <h1
        ref={textRef}
        style={{
          color: "#E50914",
          fontSize: "4rem",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        JangHwan
      </h1>
    </div>
  );
};

export default TestPage01;