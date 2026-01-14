// app/contact/page.tsx
import Link from "next/link";

export default function ContactPage() {
  const contactEmail = "support@yourdomain.com"; // TODO: 换成你的真实邮箱

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
            <Link href="/about" className="text-zinc-700 hover:text-zinc-900">
              About
            </Link>
            <Link
              href="/affiliate-disclosure"
              className="text-zinc-700 hover:text-zinc-900"
            >
              Disclosure
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10">
        <section className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
          <p className="mt-4 text-zinc-600">
            For support, questions, or corrections (pricing/product details),
            please reach out. We typically respond within 1–2 business days.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-zinc-50 p-6 ring-1 ring-zinc-200">
              <div className="text-sm font-semibold">Email</div>
              <p className="mt-2 text-sm text-zinc-600">
                The fastest way to contact us:
              </p>
              <a
                className="mt-3 inline-block rounded-2xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
                href={`mailto:${contactEmail}?subject=Price%20Compare%20Support`}
              >
                {contactEmail}
              </a>

              <p className="mt-4 text-xs text-zinc-500">
                Tip: If reporting an incorrect price, include the product name,
                retailer, and screenshot if possible.
              </p>
            </div>

            <div className="rounded-3xl bg-zinc-50 p-6 ring-1 ring-zinc-200">
              <div className="text-sm font-semibold">Quick form (UI only)</div>
              <p className="mt-2 text-sm text-zinc-600">
                This form is a placeholder for future integration. For now,
                please use email above.
              </p>

              <div className="mt-4 space-y-3">
                <input
                  className="h-12 w-full rounded-2xl border border-zinc-200 bg-white px-4 text-sm outline-none focus:ring-4 focus:ring-zinc-200"
                  placeholder="Your email"
                  aria-label="Your email"
                />
                <input
                  className="h-12 w-full rounded-2xl border border-zinc-200 bg-white px-4 text-sm outline-none focus:ring-4 focus:ring-zinc-200"
                  placeholder="Subject"
                  aria-label="Subject"
                />
                <textarea
                  className="min-h-[120px] w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-zinc-200"
                  placeholder="Message"
                  aria-label="Message"
                />
                <button
                  type="button"
                  className="h-12 w-full rounded-2xl bg-zinc-200 text-sm font-medium text-zinc-700"
                  disabled
                >
                  Submit (coming soon)
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/privacy"
              className="rounded-2xl bg-white px-4 py-2 text-sm font-medium text-zinc-900 ring-1 ring-zinc-200 hover:bg-zinc-100"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="rounded-2xl bg-white px-4 py-2 text-sm font-medium text-zinc-900 ring-1 ring-zinc-200 hover:bg-zinc-100"
            >
              Terms of Service
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
