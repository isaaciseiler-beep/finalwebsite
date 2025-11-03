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
{ href: "/contact", label: "Contact" },
];


export function Sidebar(){
const [mini, setMini] = useState(false);
useEffect(()=>{
const saved = localStorage.getItem("nav-mini") === "1";
setMini(saved);
document.body.dataset.nav = saved ? "mini" : "full";
},[]);
function toggle(){
const next = !mini; setMini(next);
document.body.dataset.nav = next ? "mini" : "full";
localStorage.setItem("nav-mini", next ? "1" : "0");
}


return (
<aside className="h-full sticky top-0 sidebar-surface">
<div className="p-4 md:p-5 flex flex-col gap-6">
{/* Logo: same font as hero (uses font-display from layout). Badge remains when collapsed */}
<Link href="/" aria-label="Site home" className="block">
<div className="logo-badge hidden h-8 w-8 items-center justify-center rounded-lg ring-1 ring-white/10">IS</div>
<div className="logo-word font-display text-xl tracking-tight">Isaac Seiler</div>
</Link>


{/* Nav */}
<nav className="flex-1 space-y-1" aria-label="Main">
{links.map(l => (
<motion.div key={l.href} whileHover={{ x: 2 }}>
<Link href={l.href} className="block px-3 py-2 rounded-xl hover:bg-white/5">
<span className="nav-label">{l.label}</span>
</Link>
</motion.div>
))}
</nav>


{/* Collapse button: elegant chevron */}
<motion.button
whileTap={{ scale: 0.98 }}
onClick={toggle}
className="btn btn-ghost justify-center"
aria-pressed={mini}
title={mini ? "Expand" : "Collapse"}
>
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
<path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
<span className="nav-label text-xs">{mini ? "Expand" : "Collapse"}</span>
</motion.button>
</div>
</aside>
);
}
