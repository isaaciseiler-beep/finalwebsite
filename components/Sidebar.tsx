"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/photos", label: "Photos" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export function Sidebar() {
  const [mini, setMini] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("nav-mini") === "1";
    setMini(saved);
    document.body.dataset.nav = saved ? "mini" : "full";
  }, []);
  function toggle() {
    const next = !mini;
    setMini(next);
    document.body.dataset.nav = next ? "mini" : "full";
    localStorage.setItem("nav-mini", next ? "1" : "0");
  }

  return (
    <div className="h-full sticky top-0 sidebar-surface">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-4 md:p-6 flex flex-col gap-6"
      >
        {/* Logo — thin, elegant wordmark */}
        <Link href="/" aria-label="Site home" className="block">
          <div className="font-semibold tracking-[0.18em] text-sm uppercase opacity-90">
            <span className="align-middle">I S A A C</span>
          </div>
          <div className="text-[11px] opacity-60 nav-label">Strategy • AI • Design</div>
        </Link>

        {/* Nav */}
        <nav className="flex-1 space-y-1" aria-label="Main">
          {links.map(l => (
            <motion.div key={l.href} whileHover={{ x: 2 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
              <Link
                href={l.href}
                className="block px-3 py-2 rounded-xl hover:bg-white/6 ring-1 ring-transparent hover:ring-white/10"
                title={l.label}
              >
                <span className="nav-label">{l.label}</span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Collapse / expand */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={toggle}
          className="btn btn-ghost justify-center"
          aria-pressed={mini}
          title={mini ? "Expand" : "Collapse"}
        >
          <span className="text-xs">{mini ? "›" : "‹"}</span>
          <span className="nav-label text-xs">{mini ? "Expand" : "Collapse"}</span>
        </motion.button>
      </motion.div>
    </div>
  );
}
