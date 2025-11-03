import { notFound } from "next/navigation";
const data: Record<string,{title:string; html:string}> = {
"taipei-field-notes": { title:"Taipei field notes", html:"<p>Write MDX or HTML here. Swap in Contentlayer later.</p>" }
};
export default function Post({ params }:{ params:{ slug:string }}){
const p = data[params.slug];
if(!p) return notFound();
return (
<article className="p-8 prose prose-invert max-w-3xl">
<h1 className="font-display">{p.title}</h1>
<div dangerouslySetInnerHTML={{__html:p.html}}/>
</article>
);
}
