"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const FRAME_COUNT = 121;
const FRAME_PATH = "/frames-monarch/frame_";
const FRAME_EXT = ".webp";
const FRAME_OFFSET = 1;
const PHASE_SPLIT = 0.85;
const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
const PHASE_SPLIT_MOBILE = isMobile ? 0.95 : 0.85;

export default function ScrollVideoHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [frameLoaded, setFrameLoaded] = useState(0);
  const [overlayOpacity, setOverlayOpacity] = useState(1);
  const [canvasVisible, setCanvasVisible] = useState(true);
  const frameCache = useRef(new Map<number, HTMLImageElement>());
  const loadListeners = useRef(new Set<number>());
  const lastDrawnFrame = useRef(-1);
  const currentFrame = useRef(-1);
  const targetFrame = useRef(0);
  const ticking = useRef(false);
  const initialized = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    if (!ctx) return;

    function resizeCanvas() {
      const c = canvasRef.current;
      if (!c) return;
      c.width = window.innerWidth;
      c.height = window.innerHeight;
      if (currentFrame.current >= 0 && lastDrawnFrame.current >= 0) {
        drawFrame(currentFrame.current);
      }
    }

    function loadFrame(index: number): HTMLImageElement {
      if (frameCache.current.has(index)) return frameCache.current.get(index)!;
      const img = new Image();
      const frameNum = String(index + FRAME_OFFSET).padStart(3, "0");
      img.src = FRAME_PATH + frameNum + FRAME_EXT;
      img.onerror = function () {
        console.warn("Frame " + index + " failed");
      };
      frameCache.current.set(index, img);
      return img;
    }

    function drawFrame(index: number) {
      const c = canvasRef.current;
      if (!c) return;
      const img = loadFrame(index);
      if (!img.complete || img.naturalWidth === 0) {
        if (!loadListeners.current.has(index)) {
          loadListeners.current.add(index);
          img.addEventListener("load", function () {
            loadListeners.current.delete(index);
            if (index === currentFrame.current) drawFrame(index);
          }, { once: true });
        }
        return;
      }
      const canvasRatio = c.width / c.height;
      const imgRatio = img.naturalWidth / img.naturalHeight;
      let sx = 0, sy = 0, sw = img.naturalWidth, sh = img.naturalHeight;
      if (imgRatio > canvasRatio) {
        sh = img.naturalHeight;
        sw = sh * canvasRatio;
        sy = 0;
        sx = (img.naturalWidth - sw) / 2;
      } else {
        sw = img.naturalWidth;
        sh = sw / canvasRatio;
        sx = 0;
        sy = (img.naturalHeight - sh) / 2;
      }
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, c.width, c.height);
    }

    function animationLoop() {
      const diff = targetFrame.current - currentFrame.current;
      if (Math.abs(diff) >= 1) {
        const step = Math.sign(diff) * Math.max(1, Math.floor(Math.abs(diff) * 0.2));
        currentFrame.current = Math.round(currentFrame.current + step);
        currentFrame.current = Math.max(0, Math.min(FRAME_COUNT - 1, currentFrame.current));
        if (currentFrame.current !== lastDrawnFrame.current) {
          lastDrawnFrame.current = currentFrame.current;
          drawFrame(currentFrame.current);
        }
      }
      requestAnimationFrame(animationLoop);
    }

    function priorityLoad(frameIndex: number) {
      for (let i = -15; i <= 15; i++) {
        const fi = frameIndex + i;
        if (fi >= 0 && fi < FRAME_COUNT) loadFrame(fi);
      }
    }

    function countLoadedFrames(): number {
      let loaded = 0;
      frameCache.current.forEach(function (img) {
        if (img.complete && img.naturalWidth !== 0) loaded++;
      });
      return loaded;
    }

    function init() {
      if (initialized.current) return;
      initialized.current = true;
      resizeCanvas();
      drawFrame(0);
      currentFrame.current = 0;
      targetFrame.current = 0;

      // Preload: first 30 + every 3rd
      for (let i = 0; i < 30; i++) loadFrame(i);
      for (let i = 30; i < FRAME_COUNT; i += 3) loadFrame(i);

      function continueBackgroundLoad(startIdx: number) {
        const endIdx = Math.min(startIdx + 30, FRAME_COUNT);
        for (let i = startIdx; i < endIdx; i++) {
          if (!frameCache.current.has(i)) loadFrame(i);
        }
        setFrameLoaded(endIdx);
        if (endIdx < FRAME_COUNT) {
          setTimeout(function () { continueBackgroundLoad(endIdx); }, 50);
        } else {
          waitForMinFrames();
        }
      }

      function waitForMinFrames() {
        if (countLoadedFrames() >= 40) {
          setTimeout(function () { setLoaded(true); }, 300);
        } else {
          setTimeout(waitForMinFrames, 100);
        }
      }

      setTimeout(function () { continueBackgroundLoad(31); }, 1000);
    }

    const handleScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(function () {
          const scrollFraction = Math.max(0, Math.min(1,
            window.scrollY / (document.body.scrollHeight - window.innerHeight)
          ));
          const effectivePhaseSplit = isMobile ? PHASE_SPLIT_MOBILE : PHASE_SPLIT;

          if (scrollFraction <= effectivePhaseSplit) {
            const frameIndex = scrollFraction < 0.001 ? 0 :
              Math.min(Math.floor((scrollFraction / effectivePhaseSplit) * FRAME_COUNT), FRAME_COUNT - 1);
            targetFrame.current = frameIndex;
            priorityLoad(frameIndex);
          } else {
            targetFrame.current = FRAME_COUNT - 1;
          }

          // Fade out overlay: full opacity at top, gone by 12% scroll
          const FADE_START = 0;
          const FADE_END = 0.12;
          if (scrollFraction <= FADE_START) {
            setOverlayOpacity(1);
          } else if (scrollFraction >= FADE_END) {
            setOverlayOpacity(0);
          } else {
            setOverlayOpacity(1 - (scrollFraction - FADE_START) / (FADE_END - FADE_START));
          }

          // Hide canvas once past the video phase so phase 2 has its own background
          if (scrollFraction > effectivePhaseSplit) {
            setCanvasVisible(false);
          } else {
            setCanvasVisible(true);
          }

          ticking.current = false;
        });
      }
    };

    window.addEventListener("resize", resizeCanvas, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    animationLoop();
    init();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const loaderPct = Math.round((frameLoaded / FRAME_COUNT) * 100);

  return (
    <div className="relative bg-transparent" style={{ height: "500vh" }}>
      {/* Canvas — fills viewport from top edge, sits behind navbar */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-screen z-0"
        style={{ willChange: "transform", transform: "translateZ(0)", opacity: canvasVisible ? 1 : 0, transition: "opacity 0.3s" }}
      />

      {/* Loader overlay */}
      {!loaded && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--charcoal)]">
          <p className="text-[var(--gold)] text-xs tracking-[0.25em] uppercase mb-6">
            Loading Experience
          </p>
          <div className="w-48 h-px bg-[var(--cream)] opacity-20">
            <div
              className="h-full bg-[var(--gold)] transition-all duration-200"
              style={{ width: loaderPct + "%" }}
            />
          </div>
        </div>
      )}

      {/* Hero text overlay — fades as user scrolls */}
      <div
        className="fixed inset-0 z-10 flex items-center justify-center pointer-events-none"
        style={{ opacity: overlayOpacity, transition: "opacity 0.1s" }}
      >
        <div className="text-center px-6 max-w-4xl mx-auto">
          <p
            className="text-[var(--gold)] text-sm md:text-base tracking-[0.3em] uppercase mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Stillwater, Oklahoma
          </p>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-[var(--cream)] mb-6 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            A New American<br />Experience
          </h1>
          <p
            className="text-[var(--gold)] text-base md:text-lg italic mb-10 max-w-xl mx-auto"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Pushes the envelope of New American cuisine — scratch cooking, local ingredients, classical techniques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
            <a
              href="https://tables.hostmeapp.com/restaurants/34277"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-[var(--gold)] text-[var(--charcoal)] text-sm font-medium tracking-wider uppercase md:hover:bg-[var(--cream)] transition-colors duration-300"
            >
              Reserve a Table
            </a>
            <Link
              href="/menu"
              className="px-8 py-3.5 border border-[var(--cream)] border-opacity-60 text-[var(--cream)] text-sm font-medium tracking-wider uppercase md:hover:bg-[var(--cream)] md:hover:text-[var(--charcoal)] transition-all duration-300"
            >
              View Menu
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator — fades as user scrolls */}
      <div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        style={{ opacity: overlayOpacity, transition: "opacity 0.1s" }}
      >
        <span className="text-[var(--cream)] opacity-40 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-[var(--gold)] opacity-40 animate-bounce" />
      </div>
    </div>
  );
}
