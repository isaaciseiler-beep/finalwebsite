import Link from "next/link";
const projects = [
{ slug: "ai-gov-index", title: "AI Adoption Index across States", summary: "900‑signal index. Methods + repo." },
{ slug: "press-showcase", title: "Press Showcase", summary: "Gradient‑driven UI component library." },
];
export default function Projects(){
return (
<section className="p-8">
<h1 className="font-display text-3xl mb-6">Projects</h1>
<div className="grid md:grid-cols-2 gap-6">
{projects.map(p => (
<Link key={p.slug} href={`/projects/${p.slug}`} className="card p-6 block">
<div className="text-lg font-semibold">{p.title}</div>
<p className="text-sm text-muted mt-1">{p.summary}</p>
</Link>
))}
</div>
</section>
);
}
