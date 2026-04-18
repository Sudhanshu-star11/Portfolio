"use client";

import { useEffect, useRef } from "react";

export default function StarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number; y: number; radius: number; vx: number; vy: number; alpha: number; deltaAlpha: number }[] = [];
    let shootingStars: { x: number; y: number; length: number; vx: number; vy: number; opacity: number; targetOpacity: number; fadeSpeed: number; delay: number }[] = [];

    const resize = () => {
      // Set canvas size to parent container's size
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
      initStars();
    };

    const initShootingStar = (c: HTMLCanvasElement, initialDelay = false) => {
      return {
        x: Math.random() * c.width * 1.5 - c.width * 0.25, // allow starting outside edges
        y: Math.random() * c.height - c.height, // start above
        length: Math.random() * 100 + 40,
        vx: (Math.random() - 0.2) * 3 + 1, // slight horiz
        vy: Math.random() * 6 + 6, // fast down
        opacity: 0,
        targetOpacity: Math.random() * 0.5 + 0.5,
        fadeSpeed: 0.01 + Math.random() * 0.02,
        delay: initialDelay ? Math.random() * 300 : Math.random() * 100
      };
    };

    const initStars = () => {
      stars = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 8000); 
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          alpha: Math.random(),
          deltaAlpha: (Math.random() * 0.02) + 0.005,
        });
      }

      // Init 4 shooting stars
      shootingStars = Array.from({ length: 4 }).map(() => initShootingStar(canvas, true));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw normal stars
      stars.forEach((star) => {
        star.x += star.vx;
        star.y += star.vy;
        
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;
        
        star.alpha += star.deltaAlpha;
        if (star.alpha <= 0.2 || star.alpha >= 1) {
          star.deltaAlpha = -star.deltaAlpha;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240, 248, 255, ${star.alpha})`; 
        
        if (star.radius > 1.2) {
          ctx.shadowBlur = 4;
          ctx.shadowColor = "rgba(255, 255, 255, 0.8)";
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.fill();
      });

      // Draw shooting stars
      ctx.shadowBlur = 0; // Reset shadow for line tails to avoid weird rendering
      shootingStars.forEach((s) => {
        if (s.delay > 0) {
          s.delay -= 1;
          return;
        }
        s.x += s.vx;
        s.y += s.vy;
        
        // fade logic based on screen position
        if (s.y < canvas.height / 3 && s.opacity < s.targetOpacity) {
          s.opacity += s.fadeSpeed;
        } else if (s.y > canvas.height / 1.5) {
          s.opacity -= s.fadeSpeed;
        }

        // reset if out of bounds or invisible 
        if (s.x > canvas.width || s.y > canvas.height || (s.opacity <= 0 && s.y > canvas.height / 2)) {
          Object.assign(s, initShootingStar(canvas));
        }

        // draw tail
        if (s.opacity > 0) {
          ctx.beginPath();
          const tailX = s.x - (s.vx * s.length) / 10;
          const tailY = s.y - (s.vy * s.length) / 10;
          const gradient = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
          gradient.addColorStop(0, `rgba(255, 255, 255, ${Math.min(1, Math.max(0, s.opacity))})`);
          gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
          
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(tailX, tailY);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      });
      
      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-60" 
    />
  );
}
