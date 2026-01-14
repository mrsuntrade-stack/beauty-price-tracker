// app/page.tsx
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { products, getLowestPrice, formatPrice } from "@/src/data/products";

export default function Home() {
  const lastUpdated = "2026-01-13 09:00 ET";
  const [q, setQ] = useState("");

  const topDeals = useMemo(() => {
    // 先简单：按最低价从低到高取前 3
    return [...products]
      .sort((a, b) => getLowestPrice(a) - getLowestPrice(b))
      .slice(0, 3);
  }, []);

  const goSearchHref = useMemo(() => {
    const s = q.trim();
    return s ? `/deals?q=${encodeURIComponent(s)}` : `/deals`;
  }, [q]);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* Top Nav */}
      <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-zinc-900" />
            <div className="leading-tight">
              <div className="text-sm font-semibold">Beauty Price Tracker</div>
              <div className="text-xs text-zinc-500">Beauty Deals</div>
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
        {/* Hero */}
        <section className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
          <div className="grid gap-8 p-8 md:grid-cols-2 md:p-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Updated daily • {lastUpdated}
              </div>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight">
                Compare Beauty prices across trusted retailers
              </h1>
              <p className="mt-4 max-w-xl text-zinc-600">
                Search a product, compare offers, and click through to buy.
                Transparent pricing, clean product pages, and fast discovery.
              </p>

              {/* Search (WORKING) */}
              <form
                className="mt-6 flex flex-col gap-3 sm:flex-row"
                action={goSearchHref}
              >
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  className="h-12 w-full rounded-2xl border border-zinc-200 bg-white px-4 text-base outline-none focus:ring-4 focus:ring-zinc-200"
                  placeholder='Search e.g. "Lancôme Absolue Soft Cream"'
                  aria-label="Search products"
                />

                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center rounded-2xl bg-zinc-900 px-6 font-medium text-white hover:bg-zinc-800"
                >
                  Search →
                </button>
              </form>

              <div className="mt-3 text-sm text-zinc-500">
                Or browse{" "}
                <Link
                  className="text-zinc-700 underline underline-offset-2 hover:text-zinc-900"
                  href="/deals"
                >
                  Today’s Deals
                </Link>
                .
              </div>

              <p className="mt-4 text-sm text-zinc-500">
                This site may earn commissions when you purchase through links.{" "}
                <Link
                  className="text-zinc-700 underline underline-offset-2 hover:text-zinc-900"
                  href="/affiliate-disclosure"
                >
                  Learn more
                </Link>
                .
              </p>

              {/* Quick stats */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { k: "Products", v: "30+" },
                  { k: "Retailers", v: "10+" },
                  { k: "Focus", v: "Beauty" },
                ].map((x) => (
                  <div
                    key={x.k}
                    className="rounded-2xl bg-zinc-50 p-4 ring-1 ring-zinc-200"
                  >
                    <div className="text-xs text-zinc-500">{x.k}</div>
                    <div className="mt-1 text-lg font-semibold">{x.v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side “feature card” */}
            <div className="relative">
              <div className="rounded-3xl bg-zinc-900 p-6 text-white shadow-sm">
                <div className="text-sm font-medium text-zinc-200">
                  How it works
                </div>
                <ol className="mt-4 space-y-4">
                  {[
                    {
                      t: "Find a product",
                      d: "Search or browse deals to open a product page.",
                    },
                    {
                      t: "Compare offers",
                      d: "See multiple stores with price + update time.",
                    },
                    {
                      t: "Click to buy",
                      d: "We route you to the retailer (links may be affiliate links).",
                    },
                  ].map((x) => (
                    <li key={x.t} className="rounded-2xl bg-white/10 p-4">
                      <div className="font-semibold">{x.t}</div>
                      <div className="mt-1 text-sm text-zinc-200">{x.d}</div>
                    </li>
                  ))}
                </ol>

                <div className="mt-6 flex gap-3">
                  <Link
                    href="/deals"
                    className="rounded-2xl bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-100"
                  >
                    Explore deals
                  </Link>
                  <Link
                    href="/about"
                    className="rounded-2xl border border-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
                  >
                    About this site
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deals grid (show 3) */}
        <section className="mt-10">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">
              Today’s Best Deals
            </h2>
            <Link
              className="text-sm text-zinc-700 underline underline-offset-4 hover:text-zinc-900"
              href="/deals"
            >
              See all deals →
            </Link>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topDeals.map((p) => (
              <Link
                key={p.id}
                href={`/product/${p.id}`}
                className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="aspect-square bg-zinc-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={`${p.brand} ${p.name}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="p-5">
                  <div className="text-xs text-zinc-500">{p.brand}</div>
                  <div className="mt-1 line-clamp-2 text-base font-semibold group-hover:underline">
                    {p.name}
                  </div>
                  <div className="mt-1 text-sm text-zinc-600">{p.size}</div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm text-zinc-500">From</div>
                    <div className="text-lg font-semibold">
                      ${formatPrice(getLowestPrice(p))}
                    </div>
                  </div>

                  <div className="mt-2 text-xs text-zinc-500">
                    Updated: {p.offers[0]?.updatedAt ?? "—"}
                  </div>

                  <div className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-zinc-50 px-3 py-2 text-sm ring-1 ring-zinc-200">
                    Compare prices →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
