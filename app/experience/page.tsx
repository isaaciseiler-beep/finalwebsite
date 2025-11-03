"use client";
import { useState } from "react";


type QA = { q: string; a: string };


export default function Experience(){
const [history, setHistory] = useState<QA[]>([]);
const [q, setQ] = useState("");


async function ask(){
const res = await fetch("/api/recruiter-assistant", {
method: "POST",
body: JSON.stringify({ q }),
});
const { a } = await res.json();
setHistory(h => [...h, { q, a }]);
setQ("");
}


return (
<section className="p-8 grid gap-6 md:grid-cols-[1fr_420px]">
<div className="space-y-4">
<h1 className="font-display text-3xl">Experience</h1>
<div className="card p-6">
<ul className="space-y-2 text-sm">
<li><b>Fulbright Taiwan</b> — ETA • 2025–26</li>
<li><b>Council of State Governments</b> — Researcher • 2024</li>
<li><b>AI Projects</b> — Portfolio ongoing</li>
</ul>
</div>
</div>
<div className="card p-4">
<div className="text-sm font-medium">Recruiter Assistant</div>
<div className="mt-2 h-64 overflow-auto space-y-3">
{history.map((h,i)=> (
<div key={i} className="text-sm">
<div className="opacity-70">Q: {h.q}</div>
<div>A: {h.a}</div>
</div>
))}
</div>
<div className="mt-3 flex gap-2">
<input value={q} onChange={e=>setQ(e.target.value)} placeholder="Ask about roles, skills, fit…" className="w-full bg-transparent border rounded-xl px-3 py-2"/>
<button onClick={ask} className="px-3 py-2 rounded-xl bg-accent text-accent-fg">Ask</button>
</div>
</div>
</section>
);
}
