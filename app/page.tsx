import { InTheNews } from "@/components/InTheNews";
import Link from "next/link";


export default function Home(){
return (
<section className="p-8 space-y-10">
<header className="card p-8">
<h1 className="font-display text-4xl md:text-5xl tracking-tight">Designerly, minimal, motion‑rich.</h1>
<p className="mt-3 text-muted max-w-2xl">Portfolio and lab for AI, strategy, journalism, and maps.</p>
<div className="mt-6 flex gap-3">
<Link href="/projects" className="px-4 py-2 rounded-xl bg-accent text-accent-fg">See projects</Link>
<Link href="/photos" className="px-4 py-2 rounded-xl bg-white/5 ring-1 ring-white/10">Photos</Link>
</div>
</header>


<InTheNews />


<section className="grid md:grid-cols-2 gap-6">
<HomeCard title="Projects" href="/projects" blurb="Case‑style writeups with receipts."/>
<HomeCard title="Experience" href="/experience" blurb="Timeline + recruiter assistant."/>
<HomeCard title="Blog" href="/blog" blurb="Notes and field reports."/>
<HomeCard title="Photos" href="/photos" blurb="Gallery + world map."/>
</section>
</section>
);
}


function HomeCard({title, blurb, href}:{title:string; blurb:string; href:string}){
return (
<Link href={href} className="card p-6 block hover:scale-[1.01] transition-transform will-change-transform">
<div className="text-lg font-semibold">{title}</div>
<p className="text-sm text-muted mt-1">{blurb}</p>
</Link>
);
}
