import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Canvas02() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    if (!ctx) return;

    // 원 한개 생성
    /*let bubble = { x: 250, y: 250, radius: 20 };

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();
      requestAnimationFrame(draw);
    }

    gsap.to(bubble, {
      y: "+=30",
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "power1.inOut",
    });

    draw();
  }, []);*/
    const numBubbles = 30; // 버블 개수 설정
    const bubbles = Array.from({ length: numBubbles }, () => ({
      x: Math.random() * canvas.width, // 랜덤한 시작 x 좌표
      y: Math.random() * canvas.height, // 랜덤한 시작 y 좌표
      radius: Math.random() * 15 + 10, // 크기 10~25px 랜덤 설정
      speedX: Math.random() * 2 - 1, // x축 속도 (-1 ~ 1)
      speedY: Math.random() * 2 - 1, // y축 속도 (-1 ~ 1)
    }));

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bubbles.forEach((bubble) => {
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
        ctx.fill();
      });

      requestAnimationFrame(draw);
    }

    // GSAP 애니메이션 적용 (랜덤 이동)
    bubbles.forEach((bubble) => {
      gsap.to(bubble, {
        x: `+=${Math.random() * 500 - 200}`, // 좌우로 랜덤 이동 (-50 ~ 50)
        y: `+=${Math.random() * 500 - 100}`, // 위아래로 랜덤 이동 (-50 ~ 50)
        repeat: -1, // 무한 반복
        yoyo: true, // 왕복 애니메이션
        duration: Math.random() * 3 + 1, // 1~4초 사이 랜덤 지속 시간
        ease: "power1.inOut",
      });
    });

    draw();
  }, []);

  return <canvas ref={canvasRef} width={500} height={500} />;
}