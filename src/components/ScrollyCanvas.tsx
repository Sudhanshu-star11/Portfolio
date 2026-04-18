"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

function pad(num: number, size: number): string {
  let s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
}

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const totalFrames = 164; // frame_000 to frame_164

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Load images
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i <= totalFrames; i++) {
      const img = new window.Image();
      const frameStr = pad(i, 3);
      img.src = `/sequence/frame_${frameStr}_delay-0.033s.webp`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalFrames + 1) {
          setImagesLoaded(true);
        }
      };
      images.push(img);
    }
    imagesRef.current = images;
  }, []);

  // Update canvas on scroll
  useEffect(() => {
    if (!imagesLoaded) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const renderFrame = (index: number) => {
      const img = imagesRef.current[index];
      if (!img || !img.complete) return;
      
      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.width / img.height;
      let renderWidth = canvas.width;
      let renderHeight = canvas.height;
      let x = 0;
      let y = 0;

      // Object fit cover
      if (canvasRatio > imgRatio) {
        renderHeight = canvas.width / imgRatio;
        y = (canvas.height - renderHeight) / 2;
      } else {
        renderWidth = canvas.height * imgRatio;
        x = (canvas.width - renderWidth) / 2;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, x, y, renderWidth, renderHeight);
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame(Math.round(scrollYProgress.get() * totalFrames));
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas(); // initial draw

    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const frameIndex = Math.round(latest * totalFrames);
      requestAnimationFrame(() => renderFrame(frameIndex));
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      unsubscribe();
    };
  }, [scrollYProgress, imagesLoaded]);

  // Overlay animations
  const textOpacity = useTransform(scrollYProgress, [0, 0.05, 0.15], [1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.15], [0, -100]);

  return (
    <div ref={containerRef} className="h-[500vh] relative w-full bg-white z-0">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#f4f4f4]">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" />
        
        {/* Loading State or Overlay Content */}
        {!imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-white z-50">
            <span className="text-neutral-500 font-medium tracking-widest text-sm uppercase animate-pulse">Loading Experience...</span>
          </div>
        )}

        <motion.div 
          style={{ opacity: textOpacity, y: textY }}
          className="absolute inset-0 flex flex-col justify-center pointer-events-none z-10"
        >
          {/* Subtle gradient to ensure the text on the left is always perfectly readable against any background */}
          <div className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-gradient-to-r from-[#f4f4f4] via-[#f4f4f4]/80 to-transparent -z-10" />

          <div className="w-full max-w-7xl mx-auto px-8 md:px-16 flex flex-col items-start space-y-6">
            <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-neutral-900 drop-shadow-sm text-left leading-[1.1]">
              Sudhanshu <br />
              <span className="font-semibold">Khandelwal</span>
            </h1>
            <p className="text-xl md:text-3xl font-light text-neutral-600 text-left">
              Senior QA Engineer
            </p>
            <div className="mt-12 flex flex-col items-start gap-2 text-neutral-500">
              <span className="text-xs uppercase tracking-[0.3em] font-medium ml-1">Scroll to Discover</span>
              <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-[2px] h-12 bg-gradient-to-b from-neutral-400 to-transparent ml-12"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
