"use client";

import { useEffect, useRef } from "react";

export default function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Orb definitions: [cx%, cy%, r%, hue1, hue2, speed, phaseOffset]
    const orbs = [
      { cx: 0.20, cy: 0.25, r: 0.48, hue: 220, alpha: 0.18, speed: 0.00012, ox: 0.10, oy: 0.08 },
      { cx: 0.75, cy: 0.65, r: 0.44, hue: 260, alpha: 0.14, speed: 0.00009, ox: -0.08, oy: 0.10 },
      { cx: 0.50, cy: 0.50, r: 0.36, hue: 195, alpha: 0.12, speed: 0.00015, ox: 0.06, oy: -0.06 },
      { cx: 0.85, cy: 0.18, r: 0.30, hue: 240, alpha: 0.10, speed: 0.00010, ox: -0.05, oy: 0.07 },
      { cx: 0.10, cy: 0.80, r: 0.32, hue: 200, alpha: 0.10, speed: 0.00013, ox: 0.07, oy: -0.05 },
    ];

    const draw = () => {
      const { width, height } = canvas!;
      ctx.clearRect(0, 0, width, height);

      for (const orb of orbs) {
        const px = (orb.cx + Math.sin(t * orb.speed * 1000 + orb.hue) * orb.ox) * width;
        const py = (orb.cy + Math.cos(t * orb.speed * 900 + orb.hue) * orb.oy) * height;
        const radius = orb.r * Math.min(width, height);

        const grad = ctx.createRadialGradient(px, py, 0, px, py, radius);
        grad.addColorStop(0, `hsla(${orb.hue}, 80%, 70%, ${orb.alpha})`);
        grad.addColorStop(0.4, `hsla(${orb.hue + 20}, 70%, 65%, ${orb.alpha * 0.6})`);
        grad.addColorStop(1, `hsla(${orb.hue}, 60%, 60%, 0)`);

        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      t += 16;
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
      style={{ filter: "blur(40px)", opacity: 1, mixBlendMode: "multiply" }}
      aria-hidden="true"
    />
  );
}
