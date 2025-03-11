import { useEffect, useRef } from "react";

export default function Canvas03() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    if (!ctx) return;

    let angle = 0;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(50, 50, 30, angle, angle + Math.PI * 1.5);
      ctx.strokeStyle = "white";
      ctx.lineWidth = 5;
      ctx.stroke();
      angle += 0.1;
      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return <canvas ref={canvasRef} width={100} height={100} />;
}