"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  hue: number;
  pulse: number;
  pulseSpeed: number;
}

export default function ConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: Particle[] = [];
    const CONNECTION_DIST = 140;
    const PARTICLE_COUNT = 55;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      spawnParticles();
    };

    function spawnParticles() {
      const { width, height } = canvas!;
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: 1.5 + Math.random() * 2,
        alpha: 0.3 + Math.random() * 0.5,
        hue: 210 + Math.random() * 60, // indigo-teal range
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.01 + Math.random() * 0.015,
      }));
    }

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const { width, height } = canvas!;
      ctx.clearRect(0, 0, width, height);

      // Update + wrap
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
      }

      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const strength = 1 - dist / CONNECTION_DIST;
            const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
            grad.addColorStop(0, `hsla(${a.hue}, 70%, 60%, ${strength * 0.25})`);
            grad.addColorStop(1, `hsla(${b.hue}, 70%, 60%, ${strength * 0.25})`);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = grad;
            ctx.lineWidth = strength * 1.2;
            ctx.stroke();
          }
        }
      }

      // Particles
      for (const p of particles) {
        const pulsedAlpha = p.alpha * (0.7 + 0.3 * Math.sin(p.pulse));
        const pulsedR = p.radius * (0.85 + 0.15 * Math.sin(p.pulse));

        // Outer glow
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, pulsedR * 6);
        glow.addColorStop(0, `hsla(${p.hue}, 80%, 65%, ${pulsedAlpha * 0.35})`);
        glow.addColorStop(1, `hsla(${p.hue}, 80%, 65%, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, pulsedR * 6, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, pulsedR, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 70%, ${pulsedAlpha})`;
        ctx.fill();
      }

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
      style={{ opacity: 0.85 }}
      aria-hidden="true"
    />
  );
}
