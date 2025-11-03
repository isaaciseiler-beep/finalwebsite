import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const Schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  company: z.string().optional() // honeypot
});

const resend = new Resend(process.env.RESEND_API_KEY!);
const TO = process.env.CONTACT_TO!;
const FROM = process.env.CONTACT_FROM!; // must be a verified domain sender

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const body = Object.fromEntries(form) as Record<string, string>;

    // honeypot
    if (body.company) {
      return NextResponse.redirect("/contact?ok=1", { status: 303 });
    }

    const parsed = Schema.safeParse(body);
    if (!parsed.success) return new NextResponse("Invalid", { status: 400 });

    const { name, email, message } = parsed.data;

    await resend.emails.send({
      from: FROM,
      to: [TO],
      subject: `New portfolio message from ${name}`,
      text: message,
      reply_to: email
    });

    return NextResponse.redirect("/contact?ok=1", { status: 303 });
  } catch (err) {
    console.error(err);
    return new NextResponse("Send failed", { status: 500 });
  }
}
