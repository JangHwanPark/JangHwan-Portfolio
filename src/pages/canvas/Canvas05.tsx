import { useEffect, useRef } from "react";

export default function Canvas05() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    if (!ctx) return;

    let particles = Array.from({ length: 20 }, () => ({
      x: canvas.width / 2,
      y: canvas.height / 2,
      radius: Math.random() * 5 + 2,
      speedX: Math.random() * 4 - 2,
      speedY: Math.random() * 4 - 2,
      opacity: 1,
    }));

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity -= 0.02;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
        ctx.fill();

        if (p.opacity <= 0) particles.splice(i, 1);
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return <canvas ref={canvasRef} width={100} height={100} />;
}