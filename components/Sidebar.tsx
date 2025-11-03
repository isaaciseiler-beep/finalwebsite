"use client";
import Link from "next/link";
import { motion } from "framer-motion";


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
return (
<div className="h-full sticky top-0 p-6 border-r border-white/10">
<motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="space-y-8">
<Link href="/" className="block">
<div className="text-2xl font-bold tracking-tight">Your Name</div>
<div className="text-sm text-muted/80">Strategy • AI • Design</div>
</Link>


<StatusCard />


<nav className="space-y-1">
{links.map((l) => (
<Link key={l.href} href={l.href} className="block px-3 py-2 rounded-xl hover:bg-white/5 transition-colors">
{l.label}
</Link>
))}
</nav>


<div className="text-xs text-muted/80">
© {new Date().getFullYear()} • Built with Next.js
</div>
</motion.div>
</div>
);
}


function StatusCard(){
return (
<div className="card p-4">
<div className="text-xs uppercase tracking-widest text-muted">Current status</div>
<div className="mt-1 text-sm">Open to 2026 roles. Building AI+Gov index v2.</div>
<div className="mt-3 flex gap-2 flex-wrap">
<span className="px-2 py-1 text-xs rounded-full bg-accent/15 ring-1 ring-accent/30">Now: Taipei → DC</span>
<span className="px-2 py-1 text-xs rounded-full bg-white/5 ring-1 ring-white/10">Writing: Thesis</span>
</div>
</div>
);
}
