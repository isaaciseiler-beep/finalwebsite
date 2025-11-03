"use client";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function ParallaxHero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0), my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 15 });
  const sy = useSpring(my, { stiffness: 60, damping: 15 });
  const rx = useTransform(sy, [-200, 200], [6, -6]);
  const ry = useTransform(sx, [-200, 200], [-6, 6]);

  function onMove(e: React.MouseEvent) {
    const el = ref.current; if (!el) return;
    const b = el.getBoundingClientRect();
    mx.set(e.clientX - b.left - b.width / 2);
    my.set(e.clientY - b.top - b.height / 2);
  }

  return (
    <motion.header
      ref={ref}
      onMouseMove={onMove}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      className="card p-10 md:p-14"
      aria-labelledby="home-title"
    >
      <h1 id="home-title" className="font-display text-4xl md:text-6xl tracking-tight">What can I help with?</h1>
      <p className="mt-3 text-muted max-w-2xl">Portfolio and lab for AI, strategy, journalism, and maps.</p>
      <div className="mt-6 flex gap-3">
        <motion.a href="/projects" className="btn btn-primary" whileHover={{ y: -2, opacity: 0.95 }} whileTap={{ scale: 0.98 }}>See projects</motion.a>
        <motion.a href="/photos" className="btn btn-ghost" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>Photos</motion.a>
      </div>
    </motion.header>
  );
}
