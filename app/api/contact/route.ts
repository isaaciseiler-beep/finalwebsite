import { NextResponse } from "next/server";
export async function POST(req: Request){
// TODO: connect to Resend/Sendgrid. For now, swallow input.
return NextResponse.redirect("/contact", { status: 303 });
}
