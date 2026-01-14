// app/deals/page.tsx
"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { products, getLowestPrice, formatPrice } from "@/src/data/products";

type SortKey = "best" | "priceLow" | "priceHigh" | "name" | "brand";

export default function DealsPage() {
  const sp = useSearchParams();
  const urlQ = sp.get("q") || "";

  const [q, setQ] = useState("");
  const [brand, setBrand] = useState<string>("All");
  const [sort, setSort] = useState<SortKey>("best");

  const lastUpdated = "2026-01-13 09:00 ET";

  // ✅ 页面加载/URL变化时：把 ?q=xxx 同步到输入框并触发过滤
  useEffect(() => {
    setQ(urlQ);
  }, [urlQ]);

  const brandOptions = useMemo(() => {
    const set = new Set<string>();
    for (const p of products) set.add(p.brand);
    return ["All", ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, []);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();

    let list = products.filter((p) => {
      const matchBrand = brand === "All" ? true : p.brand === brand;
      const matchQuery =
        !query ||
        `${p.brand} ${p.name} ${p.size}`.toLowerCase().includes(query);
      return matchBrand && matchQuery;
    });

    list = list.slice();

    list.sort((a, b) => {
      const aLow = getLowestPrice(a);
      const bLow = getLowestPrice(b);

      if (sort === "priceLow") return aLow - bLow;
      if (sort === "priceHigh") return bLow - aLow;
      if (sort === "name") return a.name.localeCompare(b.name);
      if (sort === "brand") return a.brand.localeCompare(b.brand);

      // best：简单综合（后续替换为历史低价/偏离度）
      const aScore = a.offers.length * 2 - aLow / 100;
      const bScore = b.offers.length * 2 - bLow / 100;
      return bScore - aScore;
    });

    return list;
  }, [q, brand, sort]);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* Top Nav */}
      <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-zinc-900" />
            <div className="leading-tight">
              <div className="text-sm font-semibold">Price Compare</div>
              <div className="text-xs text-zinc-500">Skincare Deals</div>
            </div>
          </Link>

          <nav className="flex items-center gap-4 text-sm">
            <Link href="/deals" className="font-medium text-zinc-900">
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
          <div className="grid gap-6 p-8 md:grid-cols-2 md:p-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Updated daily • {lastUpdated}
              </div>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Deals
              </h1>

              <p className="mt-3 max-w-xl text-zinc-600">
                Search and filter products, compare the lowest price, and open
                a product page to see all offers.
              </p>

              <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-600">
                <span className="rounded-full bg-zinc-50 px-3 py-1 ring-1 ring-zinc-200">
                  {filtered.length} results
                </span>
                {q.trim() ? (
                  <span className="rounded-full bg-zinc-50 px-3 py-1 ring-1 ring-zinc-200">
                    Query: “{q.trim()}”
                  </span>
                ) : (
                  <span className="rounded-full bg-zinc-50 px-3 py-1 ring-1 ring-zinc-200">
                    Query: (none)
                  </span>
                )}
              </div>
            </div>

            {/* Filters */}
            <div className="rounded-3xl bg-zinc-50 p-6 ring-1 ring-zinc-200">
              <div className="text-sm font-semibold">Search & Filters</div>

              <div className="mt-4 space-y-3">
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  className="h-12 w-full rounded-2xl border border-zinc-200 bg-white px-4 text-base outline-none focus:ring-4 focus:ring-zinc-200"
                  placeholder='Search e.g. "CeraVe cream"'
                  aria-label="Search"
                />

                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs text-zinc-600">
                      Brand
                    </label>
                    <select
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                      className="h-12 w-full rounded-2xl border border-zinc-200 bg-white px-4 text-sm outline-none focus:ring-4 focus:ring-zinc-200"
                      aria-label="Brand filter"
                    >
                      {brandOptions.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs text-zinc-600">
                      Sort
                    </label>
                    <select
                      value={sort}
                      onChange={(e) => setSort(e.target.value as SortKey)}
                      className="h-12 w-full rounded-2xl border border-zinc-200 bg-white px-4 text-sm outline-none focus:ring-4 focus:ring-zinc-200"
                      aria-label="Sort"
                    >
                      <option value="best">Best (recommended)</option>
                      <option value="priceLow">Price: low to high</option>
                      <option value="priceHigh">Price: high to low</option>
                      <option value="name">Name</option>
                      <option value="brand">Brand</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  <Link
                    href="/deals"
                    className="rounded-2xl bg-white px-4 py-2 text-sm font-medium text-zinc-900 ring-1 ring-zinc-200 hover:bg-zinc-100"
                  >
                    Clear query
                  </Link>

                  <button
                    type="button"
                    onClick={() => {
                      setQ("");
                      setBrand("All");
                      setSort("best");
                      // URL 的 q 也清掉：直接跳转 /deals
                      window.location.href = "/deals";
                    }}
                    className="rounded-2xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
                  >
                    Reset all
                  </button>
                </div>

                <p className="text-xs text-zinc-500">
                  This site may earn commissions when you purchase through
                  links.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="mt-10">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">
              Results ({filtered.length})
            </h2>
            <Link
              className="text-sm text-zinc-700 underline underline-offset-4 hover:text-zinc-900"
              href="/affiliate-disclosure"
            >
              Affiliate disclosure →
            </Link>
          </div>

          {filtered.length === 0 ? (
            <div className="mt-6 rounded-3xl border border-zinc-200 bg-white p-8 text-zinc-600 shadow-sm">
              No results. Try a different keyword or clear the query.
            </div>
          ) : (
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => {
                const low = getLowestPrice(p);
                return (
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
                          ${formatPrice(low)}
                        </div>
                      </div>

                      <div className="mt-2 flex items-center justify-between text-xs text-zinc-500">
                        <span>{p.offers.length} offers</span>
                        <span>Updated: {p.offers[0]?.updatedAt ?? "—"}</span>
                      </div>

                      <div className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-zinc-50 px-3 py-2 text-sm ring-1 ring-zinc-200">
                        View offers →
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
