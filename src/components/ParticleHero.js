import { useEffect, useRef } from "react";

/**
 * ParticleHero — Partikeltypografie-Hero.
 *
 * Tausende Partikel formen nacheinander die übergebenen Wörter, weichen
 * dem Mauszeiger aus und färben sich von warm (links) nach kühl (rechts).
 * Klick springt zum nächsten Wort. Respektiert prefers-reduced-motion.
 *
 * Reines Canvas 2D, keine zusätzlichen Abhängigkeiten.
 *
 * <ParticleHero words={["LUCA","BERATER","FUSSBALLER","PROGRAMMIERER"]} />
 */
export default function ParticleHero({
  words = ["LUCA", "BERATER", "FUSSBALLER", "PROGRAMMIERER"],
  interval = 2800,
  fontFamily = '"Space Grotesk", "Centra", sans-serif',
  caption = "Berater · Fussballer · Programmierer",
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let W, H, DPR;
    let particles = [];
    let idx = 0;
    let raf = 0;
    let timer = 0;
    let disposed = false;
    const mouse = { x: -9999, y: -9999 };

    const off = document.createElement("canvas");
    const octx = off.getContext("2d");

    function targetsFor(word) {
      off.width = W;
      off.height = H;
      octx.clearRect(0, 0, W, H);
      const fs = Math.min((W * 0.86) / (word.length * 0.55), H * 0.34);
      octx.fillStyle = "#fff";
      octx.font = `700 ${fs}px ${fontFamily}`;
      octx.textAlign = "center";
      octx.textBaseline = "middle";
      octx.fillText(word, W / 2, H * 0.5);
      const step = Math.max(3, Math.round(fs / 28));
      const data = octx.getImageData(0, 0, W, H).data;
      const pts = [];
      for (let y = 0; y < H; y += step)
        for (let x = 0; x < W; x += step)
          if (data[(y * W + x) * 4 + 3] > 128) pts.push({ x, y });
      return pts;
    }

    function sample(word, hard) {
      const pts = targetsFor(word);
      for (let i = 0; i < pts.length; i++) {
        const t = pts[i];
        if (particles[i]) {
          particles[i].tx = t.x;
          particles[i].ty = t.y;
        } else {
          particles[i] = {
            x: hard ? t.x : Math.random() * W,
            y: hard ? t.y : Math.random() * H,
            tx: t.x,
            ty: t.y,
            vx: 0,
            vy: 0,
            hue: t.x / W,
          };
        }
      }
      if (particles.length > pts.length) particles.length = pts.length;
    }

    function tick() {
      if (disposed) return;
      ctx.clearRect(0, 0, W, H);
      for (const p of particles) {
        let ax = (p.tx - p.x) * 0.045;
        let ay = (p.ty - p.y) * 0.045;
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 9000) {
          const f = ((9000 - d2) / 9000) * 4.5;
          const d = Math.sqrt(d2) || 1;
          ax += (dx / d) * f;
          ay += (dy / d) * f;
        }
        p.vx = (p.vx + ax) * 0.82;
        p.vy = (p.vy + ay) * 0.82;
        p.x += p.vx;
        p.y += p.vy;
        const r = (55 + p.hue * 145) | 0;
        const g = (130 + p.hue * 40) | 0;
        const b = (90 + (1 - p.hue) * 150) | 0;
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fillRect(p.x, p.y, 1.7, 1.7);
      }
      raf = requestAnimationFrame(tick);
    }

    function resize() {
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = cv.clientWidth;
      H = cv.clientHeight;
      cv.width = W * DPR;
      cv.height = H * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      sample(words[idx], true);
    }

    function onMove(e) {
      const rect = cv.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }
    function onLeave() {
      mouse.x = mouse.y = -9999;
    }
    function advance() {
      idx = (idx + 1) % words.length;
      sample(words[idx], false);
    }

    // Warten bis die Schrift geladen ist, sonst wird mit Fallback gesampelt
    const start = () => {
      if (disposed) return;
      resize();
      if (reduce) {
        sample(words[0], true);
        tick();
      } else {
        tick();
        timer = window.setInterval(advance, interval);
      }
    };
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(start);
    } else {
      start();
    }

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);
    cv.addEventListener("click", advance);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      window.clearInterval(timer);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      cv.removeEventListener("click", advance);
    };
  }, [words, interval, fontFamily]);

  return (
    <section
      style={{
        position: "relative",
        height: "100svh",
        width: "100%",
        background: "#0A0C0F",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%" }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 46,
          textAlign: "center",
          pointerEvents: "none",
          fontFamily: '"Space Grotesk", sans-serif',
          fontSize: 12,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "#8A93A1",
        }}
      >
        {caption}
      </div>
    </section>
  );
}
