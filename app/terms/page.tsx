// app/terms/page.tsx
import Link from "next/link";

export default function TermsPage() {
  const effectiveDate = "January 13, 2026";

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
            <Link href="/privacy" className="text-zinc-700 hover:text-zinc-900">
              Privacy
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
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-zinc-500">
            Effective date: {effectiveDate}
          </p>

          <p className="mt-6 text-zinc-600">
            By using this website, you agree to the following terms. If you do
            not agree, please do not use the site.
          </p>

          <h2 className="mt-10 text-xl font-semibold">1. Purpose</h2>
          <p className="mt-4 text-zinc-600">
            This site provides product information and price comparisons. We do
            not directly sell products unless explicitly stated. Purchases are
            completed on retailer websites.
          </p>

          <h2 className="mt-10 text-xl font-semibold">2. No guarantees</h2>
          <p className="mt-4 text-zinc-600">
            Prices, availability, and product details can change at any time.
            We aim to keep information accurate, but we cannot guarantee
            completeness, accuracy, or timeliness.
          </p>

          <h2 className="mt-10 text-xl font-semibold">3. Affiliate links</h2>
          <p className="mt-4 text-zinc-600">
            We may earn commissions from affiliate links. See{" "}
            <Link className="underline" href="/affiliate-disclosure">
              Affiliate Disclosure
            </Link>
            .
          </p>

          <h2 className="mt-10 text-xl font-semibold">4. Third-party sites</h2>
          <p className="mt-4 text-zinc-600">
            We link to third-party websites. We are not responsible for their
            content, policies, checkout processes, shipping, returns, or
            customer service. Please review the retailer’s terms and policies.
          </p>

          <h2 className="mt-10 text-xl font-semibold">5. Acceptable use</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-600">
            <li>Do not misuse the site or attempt to disrupt services.</li>
            <li>Do not scrape or copy large portions of content without permission.</li>
            <li>Do not use the site for unlawful purposes.</li>
          </ul>

          <h2 className="mt-10 text-xl font-semibold">6. Changes</h2>
          <p className="mt-4 text-zinc-600">
            We may update these terms from time to time. Continued use of the
            site indicates acceptance of the updated terms.
          </p>

          <h2 className="mt-10 text-xl font-semibold">7. Contact</h2>
          <p className="mt-4 text-zinc-600">
            Questions? Contact us via{" "}
            <Link className="underline" href="/contact">
              /contact
            </Link>
            .
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/privacy"
              className="rounded-2xl bg-white px-4 py-2 text-sm font-medium text-zinc-900 ring-1 ring-zinc-200 hover:bg-zinc-100"
            >
              Privacy Policy
            </Link>
            <Link
              href="/deals"
              className="rounded-2xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Browse Deals →
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
