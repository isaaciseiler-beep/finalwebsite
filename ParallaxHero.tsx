"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxHero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useTransform(my, [-200, 200], [8, -8]);
  const ry = useTransform(mx, [-200, 200], [-8, 8]);

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set(e.clientX - rect.left - rect.width / 2);
    my.set(e.clientY - rect.top - rect.height / 2);
  }

  return (
    <motion.header
      ref={ref}
      onMouseMove={onMove}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      className="card p-10 md:p-14"
      aria-labelledby="home-title"
    >
      <h1 id="home-title" className="font-display text-4xl md:text-6xl tracking-tight">Designerly, minimal, motion-rich.</h1>
      <p className="mt-3 text-muted max-w-2xl">Portfolio and lab for AI, strategy, journalism, and maps.</p>
      <div className="mt-6 flex gap-3">
        <motion.a href="/projects" className="btn btn-primary" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
          See projects
        </motion.a>
        <motion.a href="/photos" className="btn btn-ghost" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
          Photos
        </motion.a>
      </div>
    </motion.header>
  );
}
