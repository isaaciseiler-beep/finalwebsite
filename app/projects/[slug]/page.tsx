import { notFound } from "next/navigation";
const data: Record<string,{title:string; body:string}> = {
"ai-gov-index": { title: "AI Adoption Index across States", body: "<p>News‑article style writeup with methods, visuals, and links.</p>" },
};
export default function Project({ params }:{ params:{ slug:string }}){
const p = data[params.slug];
if(!p) return notFound();
return (
<article className="p-8 prose prose-invert max-w-3xl">
<h1 className="font-display">{p.title}</h1>
<div dangerouslySetInnerHTML={{__html:p.body}} />
</article>
);
}
