import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Event01() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const moveCursor = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      const { clientX: x, clientY: y } = e;

      // GSAP을 사용하여 부드럽게 커서 이동
      gsap.to(cursorRef.current, {
        x,
        y,
        duration: 0.2,
        ease: "power2.out",
      });

      // 커서 주변의 배경을 그레디언트로 변경
      document.body.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 0, 150, 0.3), rgba(0, 0, 0, 1))`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="transition">
      {/* 마우스를 따라다니는 커서 효과 */}
      <div
        ref={cursorRef}
        className="fixed w-10 h-10 bg-white rounded-full pointer-events-none mix-blend-difference"
        style={{ transform: "translate(-50%, -50%)" }}
      ></div>
    </div>
  );
}