// src/components/SiteFooter.tsx
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-14 border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-zinc-900" />
              <div className="leading-tight">
                <div className="text-sm font-semibold">Beauty Price Tracker</div>
                <div className="text-xs text-zinc-500">Beauty Price Tracking</div>
              </div>
            </Link>

            <p className="mt-4 max-w-sm text-sm text-zinc-600">
              Compare Beauty prices across trusted retailers. Open a product,
              review offers, then click through to purchase.
            </p>

            <p className="mt-4 text-xs text-zinc-500">
              Prices may change before purchase. We show update timestamps for
              transparency.
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="text-sm font-semibold text-zinc-900">Site</div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
              <Link className="text-zinc-700 hover:text-zinc-900 hover:underline" href="/deals">
                Deals
              </Link>
              <Link className="text-zinc-700 hover:text-zinc-900 hover:underline" href="/product">
                Products
              </Link>
              <Link className="text-zinc-700 hover:text-zinc-900 hover:underline" href="/about">
                About
              </Link>
              <Link className="text-zinc-700 hover:text-zinc-900 hover:underline" href="/contact">
                Contact
              </Link>
            </div>
          </div>

          {/* Compliance */}
          <div>
            <div className="text-sm font-semibold text-zinc-900">Transparency</div>
            <div className="mt-3 space-y-2 text-sm">
              <Link
                className="block text-zinc-700 hover:text-zinc-900 hover:underline"
                href="/affiliate-disclosure"
              >
                Affiliate Disclosure
              </Link>
              <Link
                className="block text-zinc-700 hover:text-zinc-900 hover:underline"
                href="/privacy"
              >
                Privacy Policy
              </Link>
              <Link
                className="block text-zinc-700 hover:text-zinc-900 hover:underline"
                href="/terms"
              >
                Terms of Service
              </Link>
            </div>

            <div className="mt-4 rounded-2xl bg-zinc-50 p-4 text-xs text-zinc-600 ring-1 ring-zinc-200">
              This site may earn commissions when you purchase through links.
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-zinc-200 pt-6 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Beauty Price Tracker. All rights reserved.</div>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link className="hover:text-zinc-900 hover:underline" href="/affiliate-disclosure">
              Disclosure
            </Link>
            <Link className="hover:text-zinc-900 hover:underline" href="/privacy">
              Privacy
            </Link>
            <Link className="hover:text-zinc-900 hover:underline" href="/terms">
              Terms
            </Link>
            <Link className="hover:text-zinc-900 hover:underline" href="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
