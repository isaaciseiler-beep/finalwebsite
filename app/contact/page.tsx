export default function Contact(){
return (
<section className="p-8 max-w-xl">
<h1 className="font-display text-3xl mb-4">Contact</h1>
<form action="/api/contact" method="POST" className="space-y-3 card p-6">
<input name="name" placeholder="Name" className="w-full bg-transparent border rounded-xl px-3 py-2" required/>
<input type="email" name="email" placeholder="Email" className="w-full bg-transparent border rounded-xl px-3 py-2" required/>
<textarea name="message" placeholder="Your message" rows={5} className="w-full bg-transparent border rounded-xl px-3 py-2" required/>
<button className="px-4 py-2 rounded-xl bg-accent text-accent-fg">Send</button>
</form>
</section>
);
}
