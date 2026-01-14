// app/affiliate-disclosure/page.tsx
import Link from "next/link";

export default function AffiliateDisclosurePage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-zinc-900" />
            <div className="leading-tight">
              <div className="text-sm font-semibold">Price Compare</div>
              <div className="text-xs text-zinc-500">Skincare Deals</div>
            </div>
          </Link>
          <nav className="flex items-center gap-4 text-sm">
            <Link href="/deals" className="text-zinc-700 hover:text-zinc-900">
              Deals
            </Link>
            <Link href="/about" className="text-zinc-700 hover:text-zinc-900">
              About
            </Link>
            <Link href="/contact" className="text-zinc-700 hover:text-zinc-900">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10">
        <section className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-semibold tracking-tight">
            Affiliate Disclosure
          </h1>

          <p className="mt-4 text-zinc-600">
            Some links on this website are affiliate links. This means we may
            earn a commission if you click a link and make a purchase, at no
            additional cost to you.
          </p>

          <div className="mt-6 rounded-2xl bg-zinc-50 p-5 text-sm text-zinc-700 ring-1 ring-zinc-200">
            <div className="font-semibold text-zinc-900">
              Key points (plain language)
            </div>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                We may receive compensation from retailers or affiliate networks.
              </li>
              <li>
                Prices and availability can change. Final terms are determined
                by the retailer at checkout.
              </li>
              <li>
                We aim to show accurate information and update timestamps for
                transparency, but cannot guarantee real-time accuracy.
              </li>
              <li>
                Our goal is to help you compare options quickly and clearly.
              </li>
            </ul>
          </div>

          <p className="mt-6 text-zinc-600">
            If you have questions about our affiliate relationships, please
            contact us via the{" "}
            <Link className="underline" href="/contact">
              Contact page
            </Link>
            .
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/deals"
              className="rounded-2xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Browse Deals →
            </Link>
            <Link
              href="/privacy"
              className="rounded-2xl bg-white px-4 py-2 text-sm font-medium text-zinc-900 ring-1 ring-zinc-200 hover:bg-zinc-100"
            >
              Privacy Policy
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
