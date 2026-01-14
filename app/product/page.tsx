// app/product/page.tsx
import Link from "next/link";
import { products } from "@/src/data/products";

export default function ProductIndexPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Products</h1>
        <Link href="/" className="text-sm text-zinc-700 underline">
          Back to home
        </Link>
      </div>

      <p className="mt-2 text-sm text-zinc-600">
        Click a product to test dynamic routing.
      </p>

      <ul className="mt-6 space-y-3">
        {products.map((p) => (
          <li key={p.id} className="rounded-2xl border border-zinc-200 bg-white p-4">
            <div className="text-xs text-zinc-500">{p.brand}</div>
            <div className="mt-1 font-semibold">{p.name}</div>
            <div className="mt-1 text-sm text-zinc-600">{p.size}</div>

            <Link
              className="mt-3 inline-block text-sm underline"
              href={`/product/${p.id}`}
            >
              Open → /product/{p.id}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
