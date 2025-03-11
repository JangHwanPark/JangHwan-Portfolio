import { useEffect, useRef } from "react";

export default function Canvas04() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    if (!ctx) return;

    let frame = 0;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();

      for (let x = 0; x < canvas.width; x += 10) {
        const y = Math.sin((x + frame) * 0.05) * 10 + 50;
        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = "white";
      ctx.lineWidth = 3;
      ctx.stroke();

      frame += 2;
      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return <canvas ref={canvasRef} width={100} height={100} />;
}