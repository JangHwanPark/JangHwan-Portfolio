import { useEffect, useRef } from "react";
import gsap from "gsap";

const Canvas01 = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    if (!canvas) return;
    const ctx = canvas?.getContext("2d")!;
    if (!ctx) return;

    const particles = Array.from({ length: 50 }, () => ({
      x: 250,
      y: 250,
      radius: Math.random() * 5 + 2,
      alpha: 1,
    }));

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;
        ctx.fill();
      });

      requestAnimationFrame(drawParticles);
    }

    drawParticles();

    particles.forEach((p) => {
      gsap.to(p, {
        x: `+=${Math.random() * 200 - 100}`,
        y: `+=${Math.random() * 200 - 100}`,
        alpha: 0,
        duration: 2,
        ease: "power2.out",
      });
    });
  }, []);

  return <canvas ref={canvasRef} width={500} height={500} />;
}

export default Canvas01;