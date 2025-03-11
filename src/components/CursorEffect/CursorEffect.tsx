import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CursorEffect = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const moveCursor = (e: MouseEvent) => {
      if (!cursorRef.current || !gradientRef.current) return;
      const { clientX: x, clientY: y } = e;

      // GSAP을 사용하여 부드럽게 커서 이동
      gsap.to(cursorRef.current, {
        x,
        y,
        duration: 0.2,
        ease: "power2.out",
      });

      // 그레디언트 배경을 따라다니도록 설정
      gsap.to(gradientRef.current, {
        x,
        y,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      {/* 배경 그레디언트 효과 (마우스를 따라다님) */}
      <div ref={gradientRef} className="fixed w-[1200px] h-[1200px] rounded-full bg-gradient-to-r from-pink-500 to-purple-700 opacity-30 blur-3xl pointer-events-none" style={{ transform: "translate(-50%, -50%)" }}></div>

      {/* 마우스 커서 효과 */}
      <div
        ref={cursorRef}
        className="hidden lg:block fixed w-6 h-6 bg-white rounded-full pointer-events-none mix-blend-difference"
        style={{ transform: "translate(-50%, -50%)" }}
      ></div>
    </>
  );
}

export default CursorEffect;