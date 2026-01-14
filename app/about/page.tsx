// app/about/page.tsx
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-zinc-900" />
            <div className="leading-tight">
              <div className="text-sm font-semibold">Beauty Price Tracker</div>
              <div className="text-xs text-zinc-500">Beauty Price Tracking</div>
            </div>
          </Link>
          <nav className="flex items-center gap-4 text-sm">
            <Link href="/deals" className="text-zinc-700 hover:text-zinc-900">
              Deals
            </Link>
            <Link
              href="/affiliate-disclosure"
              className="text-zinc-700 hover:text-zinc-900"
            >
              Disclosure
            </Link>
            <Link href="/contact" className="text-zinc-700 hover:text-zinc-900">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10">
        <section className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-semibold tracking-tight">About</h1>
          <p className="mt-4 text-zinc-600">
            Beauty Price Tracker is a lightweight product comparison site focused on
            Beauty. We help shoppers quickly compare prices across trusted
            retailers and click through to purchase with transparency.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                t: "Compare",
                d: "Open a product page and view multiple retailer offers in one place.",
              },
              {
                t: "Transparency",
                d: "We show last-updated timestamps so you can judge freshness.",
              },
              {
                t: "Simple",
                d: "Fast browsing and clean pages—built for practical decisions.",
              },
            ].map((x) => (
              <div
                key={x.t}
                className="rounded-2xl bg-zinc-50 p-5 ring-1 ring-zinc-200"
              >
                <div className="font-semibold">{x.t}</div>
                <p className="mt-2 text-sm text-zinc-600">{x.d}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-10 text-xl font-semibold">How it works</h2>
          <ol className="mt-4 space-y-3 text-zinc-600">
            <li className="rounded-2xl bg-white p-4 ring-1 ring-zinc-200">
              <span className="font-medium text-zinc-900">1) Find a product</span>{" "}
              via Deals or search.
            </li>
            <li className="rounded-2xl bg-white p-4 ring-1 ring-zinc-200">
              <span className="font-medium text-zinc-900">2) Compare offers</span>{" "}
              including price and last updated time.
            </li>
            <li className="rounded-2xl bg-white p-4 ring-1 ring-zinc-200">
              <span className="font-medium text-zinc-900">3) Click to buy</span>{" "}
              on the retailer’s website.
            </li>
          </ol>

          <div className="mt-10 rounded-2xl bg-zinc-50 p-5 text-sm text-zinc-600 ring-1 ring-zinc-200">
            <div className="font-medium text-zinc-900">Important note</div>
            <p className="mt-2">
              Prices can change before purchase. We aim to update frequently and
              display timestamps for transparency.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/deals"
              className="rounded-2xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Browse Deals →
            </Link>
            <Link
              href="/affiliate-disclosure"
              className="rounded-2xl bg-white px-4 py-2 text-sm font-medium text-zinc-900 ring-1 ring-zinc-200 hover:bg-zinc-100"
            >
              Affiliate Disclosure
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
