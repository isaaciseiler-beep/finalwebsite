import dynamic from "next/dynamic";
const WorldMap = dynamic(() => import("@/components/WorldMap"), { ssr: false });


export default function Photos(){
return (
<section className="p-8 space-y-6">
<h1 className="font-display text-3xl">Photos</h1>
<WorldMap/>
<div className="grid md:grid-cols-3 gap-4">
<div className="card aspect-[4/3]"></div>
<div className="card aspect-[4/3]"></div>
<div className="card aspect-[4/3]"></div>
</div>
</section>
);
}
