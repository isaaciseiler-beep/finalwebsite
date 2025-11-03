import ParallaxHero from "@/components/ParallaxHero";
import { InTheNews } from "@/components/InTheNews";
import Link from "next/link";


export default function Home(){
return (
<section className="p-6 md:p-8 space-y-10">
<ParallaxHero/>


<section className="grid md:grid-cols-2 gap-6">
<HomeCard title="Projects" href="/projects" blurb="Case-style writeups with receipts."/>
<HomeCard title="Experience" href="/experience" blurb="Timeline + recruiter assistant."/>
<HomeCard title="Blog" href="/blog" blurb="Notes and field reports."/>
<HomeCard title="Photos" href="/photos" blurb="Gallery + world map."/>
</section>


<section className="card p-6">
<div className="text-xs uppercase tracking-widest opacity-70">Current status</div>
<div className="mt-1 text-sm">Open to 2026 roles. Building AI+Gov index v2.</div>
<div className="mt-3 flex gap-2 flex-wrap">
<span className="px-2 py-1 text-xs rounded-full ring-1 ring-white/20">Now: Taipei → DC</span>
<span className="px-2 py-1 text-xs rounded-full ring-1 ring-white/10">Writing: Thesis</span>
</div>
</section>


<InTheNews/>
</section>
);
}


function HomeCard({title, blurb, href}:{title:string; blurb:string; href:string}){
return (
<Link href={href} className="card p-6 block hover:bg-white/5 transition-colors">
<div className="text-lg font-semibold">{title}</div>
<p className="text-sm text-muted mt-1">{blurb}</p>
</Link>
);
}

