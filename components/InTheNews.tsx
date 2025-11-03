"use client";
import { motion } from "framer-motion";


const items = [
{ title: "Interview on AI in gov", outlet: "FSE", href: "#" },
{ title: "Photo essay: North Coast", outlet: "Medium", href: "#" },
{ title: "Dataset: State AI index", outlet: "CSG", href: "#" },
];


export function InTheNews(){
return (
<motion.section initial={{opacity:0}} whileInView={{opacity:1}} viewport={{ once: true }} className="card p-0 overflow-hidden">
<div className="px-6 py-4 text-sm font-medium tracking-wide">In the news</div>
<div className="divide-y divide-white/10">
{items.map((it, i)=> (
<a key={i} href={it.href} className="flex items-center justify-between px-6 py-4 hover:bg-white/5">
<span>{it.title}</span>
<span className="text-xs text-muted">{it.outlet}</span>
</a>
))}
</div>
</motion.section>
);
}
