"use client";

import { useEffect, useRef } from "react";

interface Line {
  x1: number; y1: number;
  x2: number; y2: number;
  progress: number; // 0..1 draw progress
  speed: number;
  alpha: number;
  delay: number;
  active: boolean;
}

export default function CircuitBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const lines: Line[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      buildLines();
    };

    function buildLines() {
      lines.length = 0;
      const { width, height } = canvas;
      const cols = Math.ceil(width / 80);
      const rows = Math.ceil(height / 80);

      // Horizontal segments on grid
      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (Math.random() > 0.45) continue;
          const y = r * 80 + (Math.random() - 0.5) * 20;
          const x1 = c * 80;
          const x2 = x1 + 80 * (0.5 + Math.random() * 1.5);
          lines.push({
            x1, y1: y, x2, y2: y,
            progress: 0, speed: 0.003 + Math.random() * 0.004,
            alpha: 0.06 + Math.random() * 0.1,
            delay: Math.random() * 300,
            active: false,
          });
        }
      }
      // Vertical segments
      for (let c = 0; c <= cols; c++) {
        for (let r = 0; r < rows; r++) {
          if (Math.random() > 0.45) continue;
          const x = c * 80 + (Math.random() - 0.5) * 20;
          const y1 = r * 80;
          const y2 = y1 + 80 * (0.5 + Math.random() * 1.5);
          lines.push({
            x1: x, y1, x2: x, y2,
            progress: 0, speed: 0.003 + Math.random() * 0.004,
            alpha: 0.06 + Math.random() * 0.1,
            delay: Math.random() * 300,
            active: false,
          });
        }
      }
    }

    resize();
    window.addEventListener("resize", resize);

    let frame = 0;

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      // Subtle dark grid dots
      ctx.fillStyle = "rgba(30,30,40,0.12)";
      const step = 80;
      for (let x = 0; x < width; x += step) {
        for (let y = 0; y < height; y += step) {
          ctx.beginPath();
          ctx.arc(x, y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      for (const line of lines) {
        // Activate after delay
        if (!line.active) {
          if (frame >= line.delay) line.active = true;
          else continue;
        }

        line.progress = Math.min(line.progress + line.speed, 1);

        const cx = line.x1 + (line.x2 - line.x1) * line.progress;
        const cy = line.y1 + (line.y2 - line.y1) * line.progress;

        // Faded full trail
        ctx.beginPath();
        ctx.moveTo(line.x1, line.y1);
        ctx.lineTo(cx, cy);
        ctx.strokeStyle = `rgba(30,60,120,${line.alpha * 0.5})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Bright head glow
        const headGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 10);
        headGrad.addColorStop(0, `rgba(80,140,255,${line.alpha * 1.6})`);
        headGrad.addColorStop(1, "rgba(80,140,255,0)");
        ctx.beginPath();
        ctx.arc(cx, cy, 10, 0, Math.PI * 2);
        ctx.fillStyle = headGrad;
        ctx.fill();

        // Reset when done
        if (line.progress >= 1) {
          line.progress = 0;
          line.delay = frame + 60 + Math.random() * 200;
          line.active = false;
          line.alpha = 0.06 + Math.random() * 0.10;
        }
      }

      frame++;
      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.9 }}
      aria-hidden="true"
    />
  );
}
