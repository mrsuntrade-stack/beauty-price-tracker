// app/deals/page.tsx
import Link from "next/link";
import { products, getLowestPrice, formatPrice } from "@/src/data/products";

type SearchParams = {
  q?: string;
  brand?: string;
  sort?: string;
};

export default async function DealsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const sp = await searchParams;
  const q = (sp.q ?? "").trim().toLowerCase();
  const brand = (sp.brand ?? "").trim().toLowerCase();
  const sort = (sp.sort ?? "best").trim().toLowerCase(); // best | price-asc | price-desc

  let list = [...products];

  // filter by q
  if (q) {
    list = list.filter((p) => {
      const hay = `${p.brand} ${p.name} ${p.size}`.toLowerCase();
      return hay.includes(q);
    });
  }

  // filter by brand
  if (brand) {
    list = list.filter((p) => p.brand.toLowerCase() === brand);
  }

  // sort
  list.sort((a, b) => {
    const ap = getLowestPrice(a);
    const bp = getLowestPrice(b);
    if (sort === "price-asc") return ap - bp;
    if (sort === "price-desc") return bp - ap;
    // best: 先按最低价，再按商家数（越多越好）
    const ao = a.offers.length;
    const bo = b.offers.length;
    if (ap !== bp) return ap - bp;
    return bo - ao;
  });

  const brands = Array.from(new Set(products.map((p) => p.brand))).sort();

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-zinc-900" />
            <div className="leading-tight">
              <div className="text-sm font-semibold">Beauty Price Tracker</div>
              <div className="text-xs text-zinc-500">Deals</div>
            </div>
          </Link>

          <nav className="flex items-center gap-4 text-sm">
            <Link href="/deals" className="text-zinc-900 font-medium">
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
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">Deals</h1>
            <p className="mt-2 text-zinc-600">
              Browse products and compare offers across trusted retailers.
            </p>
          </div>

          <Link
            href="/affiliate-disclosure"
            className="text-sm text-zinc-700 underline underline-offset-4 hover:text-zinc-900"
          >
            This site may earn commissions. Learn more →
          </Link>
        </div>

        {/* Filters */}
        <section className="mt-6 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <form className="grid gap-3 sm:grid-cols-3" action="/deals" method="get">
            <div className="sm:col-span-1">
              <label className="text-xs text-zinc-500">Search</label>
              <input
                name="q"
                defaultValue={sp.q ?? ""}
                placeholder='e.g. "Lancôme Absolue Soft Cream"'
                className="mt-1 h-11 w-full rounded-2xl border border-zinc-200 bg-white px-4 outline-none focus:ring-4 focus:ring-zinc-200"
              />
            </div>

            <div className="sm:col-span-1">
              <label className="text-xs text-zinc-500">Brand</label>
              <select
                name="brand"
                defaultValue={sp.brand ?? ""}
                className="mt-1 h-11 w-full rounded-2xl border border-zinc-200 bg-white px-4 outline-none focus:ring-4 focus:ring-zinc-200"
              >
                <option value="">All</option>
                {brands.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-1">
              <label className="text-xs text-zinc-500">Sort</label>
              <select
                name="sort"
                defaultValue={sp.sort ?? "best"}
                className="mt-1 h-11 w-full rounded-2xl border border-zinc-200 bg-white px-4 outline-none focus:ring-4 focus:ring-zinc-200"
              >
                <option value="best">Best</option>
                <option value="price-asc">Lowest price</option>
                <option value="price-desc">Highest price</option>
              </select>
            </div>

            <div className="sm:col-span-3 flex gap-3 pt-1">
              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-2xl bg-zinc-900 px-6 text-sm font-medium text-white hover:bg-zinc-800"
              >
                Apply
              </button>
              <Link
                href="/deals"
                className="inline-flex h-11 items-center justify-center rounded-2xl bg-white px-6 text-sm font-medium text-zinc-900 ring-1 ring-zinc-200 hover:bg-zinc-100"
              >
                Reset
              </Link>
            </div>
          </form>
        </section>

        {/* Grid */}
        <section className="mt-8">
          <div className="flex items-center justify-between">
            <div className="text-sm text-zinc-500">
              Showing <span className="font-medium text-zinc-900">{list.length}</span>{" "}
              results
            </div>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
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
                    Offers: {p.offers.length} • Last updated: {p.offers[0]?.updatedAt}
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
