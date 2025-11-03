import Link from "next/link";
const posts = [{ slug: "taipei-field-notes", title: "Taipei field notes", summary: "Impressions and data." }];

export default function Blog() {
  return (
    <section className="p-8">
      <h1 className="font-display text-3xl mb-6">Blog</h1>
      <div className="space-y-4">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="block card p-6">
            <div className="text-lg font-semibold">{p.title}</div>
            <p className="text-sm text-muted mt-1">{p.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
