import { NextResponse } from "next/server";
// Connect to OpenAI later. For now return deterministic stub.
export async function POST(req: Request){
const { q } = await req.json();
const a = `Stubbed: I parsed your question: "${q}". I can map it to experience bullets or projects.`;
return NextResponse.json({ a });
}
