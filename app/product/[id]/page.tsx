// app/product/[id]/page.tsx
"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { products, getProductById, getLowestPrice, formatPrice } from "@/src/data/products";

type Offer = {
  merchant: string;
  price: number;
  updatedAt: string;
  url?: string;
};

type Product = {
  id: string;
  brand: string;
  name: string;
  size: string;
  image: string;
  description: string;
  officialUrl: string;
  offers: Offer[];
};

export default function ProductPage() {
  const params = useParams<{ id?: string }>();
  const id = params?.id;

  // 兜底：避免出现 “Missing product id”
  if (!id || typeof id !== "string") {
    return (
      <div className="min-h-screen bg-zinc-50 text-zinc-900">
        <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
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
              <Link href="/about" className="text-zinc-700 hover:text-zinc-900">
                About
              </Link>
              <Link
                href="/contact"
                className="rounded-xl bg-zinc-900 px-3 py-2 font-medium text-white hover:bg-zinc-800"
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-6 py-10">
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
            <h1 className="text-2xl font-semibold">Missing product id</h1>
            <p className="mt-2 text-zinc-600">
              The dynamic route parameter <code>[id]</code> is empty.
            </p>

            <div className="mt-5 rounded-2xl bg-zinc-50 p-4 text-sm text-zinc-700 ring-1 ring-zinc-200">
              Try one of these:
              <div className="mt-2 space-y-1">
                {products.slice(0, 3).map((p: Product) => (
                  <div key={p.id}>
                    <Link className="underline" href={`/product/${p.id}`}>
                      /product/{p.id}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <Link
                href="/deals"
                className="rounded-2xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
              >
                Go to Deals →
              </Link>
              <Link
                href="/"
                className="rounded-2xl bg-white px-4 py-2 text-sm font-medium text-zinc-900 ring-1 ring-zinc-200 hover:bg-zinc-100"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // ✅ 用统一数据层查产品（如果 data/products.ts 提供 getProductById 就用它，否则 fallback）
  const product: Product | undefined =
    typeof getProductById === "function"
      ? (getProductById(id) as Product | undefined)
      : (products as Product[]).find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-zinc-50 text-zinc-900">
        <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
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
              <Link href="/about" className="text-zinc-700 hover:text-zinc-900">
                About
              </Link>
              <Link
                href="/contact"
                className="rounded-xl bg-zinc-900 px-3 py-2 font-medium text-white hover:bg-zinc-800"
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-6 py-10">
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
            <h1 className="text-2xl font-semibold">Product not found</h1>
            <p className="mt-2 text-zinc-600">
              No matching product ID:
              <span className="ml-2 rounded bg-zinc-100 px-2 py-1 font-mono text-sm">
                {id}
              </span>
            </p>
            <p className="mt-2 text-zinc-600">
              Please confirm this ID exists in{" "}
              <span className="font-mono">src/data/products.ts</span>.
            </p>

            <div className="mt-6 flex gap-3">
              <Link
                href="/deals"
                className="rounded-2xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
              >
                Browse Deals →
              </Link>
              <Link
                href="/"
                className="rounded-2xl bg-white px-4 py-2 text-sm font-medium text-zinc-900 ring-1 ring-zinc-200 hover:bg-zinc-100"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const lowest =
    typeof getLowestPrice === "function"
      ? getLowestPrice(product)
      : Math.min(...product.offers.map((o) => o.price));

  const lastUpdated = product.offers?.[0]?.updatedAt ?? "—";

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* Top Nav */}
      <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
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
            <Link href="/about" className="text-zinc-700 hover:text-zinc-900">
              About
            </Link>
            <Link
              href="/contact"
              className="rounded-xl bg-zinc-900 px-3 py-2 font-medium text-white hover:bg-zinc-800"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        {/* Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link href="/deals" className="text-sm text-zinc-700 underline">
            ← Back to Deals
          </Link>
          <div className="text-xs text-zinc-500">Updated: {lastUpdated}</div>
        </div>

        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Left: product */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="text-sm text-zinc-500">{product.brand}</div>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight">
              {product.name}
            </h1>
            <div className="mt-1 text-sm text-zinc-600">{product.size}</div>

            <div className="mt-5 overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-zinc-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.image}
                alt={`${product.brand} ${product.name}`}
                className="h-full w-full object-cover"
              />
            </div>

            <p className="mt-5 text-zinc-600">{product.description}</p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={product.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
              >
                View official page
              </a>

              <div className="text-sm text-zinc-500">
                Lowest today:{" "}
                <span className="font-semibold text-zinc-900">
                  ${formatPrice(lowest)}
                </span>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-zinc-50 p-4 text-xs text-zinc-600 ring-1 ring-zinc-200">
              Prices may change before purchase. We show update timestamps for
              transparency.
            </div>
          </div>

          {/* Right: offers + trend */}
          <div className="space-y-6">
            {/* Offers */}
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">Compare prices</h2>
              <p className="mt-1 text-sm text-zinc-600">
                Prices may change before purchase. We show last updated times
                for transparency.
              </p>

              <div className="mt-5 space-y-3">
                {product.offers.map((o: Offer) => (
                  <div
                    key={`${product.id}-${o.merchant}-${o.price}`}
                    className="flex items-center justify-between rounded-2xl bg-zinc-50 p-4 ring-1 ring-zinc-200"
                  >
                    <div>
                      <div className="font-medium">{o.merchant}</div>
                      <div className="text-xs text-zinc-500">
                        Last updated: {o.updatedAt}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-lg font-semibold">
                        ${formatPrice(o.price)}
                      </div>
                      <a
                        href={o.url ?? product.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-2xl bg-white px-3 py-2 text-sm font-medium text-zinc-900 ring-1 ring-zinc-200 hover:bg-zinc-100"
                      >
                        Go to store →
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-xs text-zinc-500">
                This site may earn commissions when you purchase through links.
              </p>
            </div>

            {/* Price Trend (COMING SOON) */}
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Price trend</h2>
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700">
                  Coming soon
                </span>
              </div>

              <p className="mt-1 text-sm text-zinc-600">
                We’re building price history tracking to show how prices change
                over time and to help you decide when to buy.
              </p>

              <div className="mt-5 overflow-hidden rounded-2xl bg-zinc-50 ring-1 ring-zinc-200">
                <div className="h-44 w-full p-4">
                  <div className="h-full w-full rounded-xl bg-gradient-to-b from-zinc-100 to-white" />
                </div>

                <div className="border-t border-zinc-200 bg-white p-4">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-2xl bg-zinc-50 p-4 ring-1 ring-zinc-200">
                      <div className="text-xs text-zinc-500">Current low</div>
                      <div className="mt-1 text-lg font-semibold">
                        ${formatPrice(lowest)}
                      </div>
                    </div>
                    <div className="rounded-2xl bg-zinc-50 p-4 ring-1 ring-zinc-200">
                      <div className="text-xs text-zinc-500">30-day range</div>
                      <div className="mt-1 text-lg font-semibold">—</div>
                    </div>
                    <div className="rounded-2xl bg-zinc-50 p-4 ring-1 ring-zinc-200">
                      <div className="text-xs text-zinc-500">Best time to buy</div>
                      <div className="mt-1 text-lg font-semibold">Soon</div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl bg-zinc-50 p-4 text-xs text-zinc-600 ring-1 ring-zinc-200">
                    Next step: store daily prices per retailer and render an
                    interactive chart. Later you can add alerts for members.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
