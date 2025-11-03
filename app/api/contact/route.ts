import { NextResponse } from "next/server";

export async function POST(_req: Request) {
  // Placeholder only. No email provider wired in V1.
  return NextResponse.redirect("/contact?ok=1", { status: 303 });
}
