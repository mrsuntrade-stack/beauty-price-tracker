// app/privacy/page.tsx
import Link from "next/link";

export default function PrivacyPage() {
  const effectiveDate = "January 13, 2026";

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
            <Link href="/terms" className="text-zinc-700 hover:text-zinc-900">
              Terms
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
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-zinc-500">
            Effective date: {effectiveDate}
          </p>

          <p className="mt-6 text-zinc-600">
            This Privacy Policy explains what information we collect, how we use
            it, and the choices you have when using this website.
          </p>

          <h2 className="mt-10 text-xl font-semibold">Information we collect</h2>
          <div className="mt-4 space-y-4 text-zinc-600">
            <div className="rounded-2xl bg-zinc-50 p-5 ring-1 ring-zinc-200">
              <div className="font-medium text-zinc-900">Non-personal data</div>
              <p className="mt-2 text-sm">
                We may collect basic usage data such as pages visited, device
                type, and approximate location (e.g., city/state) via analytics.
                This helps us improve site performance and content.
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-50 p-5 ring-1 ring-zinc-200">
              <div className="font-medium text-zinc-900">
                Email (optional, future feature)
              </div>
              <p className="mt-2 text-sm">
                If we offer price alerts or newsletters in the future, you may
                provide an email address. We will use it only for the requested
                alerts/updates and provide an unsubscribe option.
              </p>
            </div>
          </div>

          <h2 className="mt-10 text-xl font-semibold">Cookies</h2>
          <p className="mt-4 text-zinc-600">
            We may use cookies or similar technologies to remember preferences
            and measure site performance. You can control cookies through your
            browser settings.
          </p>

          <h2 className="mt-10 text-xl font-semibold">Affiliate links</h2>
          <p className="mt-4 text-zinc-600">
            This website may contain affiliate links. When you click an affiliate
            link, the retailer may use cookies or tracking parameters to
            attribute purchases for commission purposes. See our{" "}
            <Link className="underline" href="/affiliate-disclosure">
              Affiliate Disclosure
            </Link>
            .
          </p>

          <h2 className="mt-10 text-xl font-semibold">Data sharing</h2>
          <p className="mt-4 text-zinc-600">
            We do not sell your personal information. We may share limited data
            with service providers (e.g., analytics, hosting) strictly to operate
            and improve the site.
          </p>

          <h2 className="mt-10 text-xl font-semibold">Your choices</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-600">
            <li>Disable cookies in your browser settings.</li>
            <li>
              If we offer email alerts, unsubscribe anytime using the link in
              the email.
            </li>
            <li>
              Contact us to request deletion of data we may store (if any).
            </li>
          </ul>

          <h2 className="mt-10 text-xl font-semibold">Contact</h2>
          <p className="mt-4 text-zinc-600">
            For privacy-related questions, please contact us via{" "}
            <Link className="underline" href="/contact">
              /contact
            </Link>
            .
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
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
