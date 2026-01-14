// src/data/products.ts

export type Offer = {
  merchant: string;
  price: number;
  updatedAt: string; // e.g. "2026-01-13 09:00 ET"
  url?: string;
};

export type Product = {
  id: string; // used in /product/[id]
  brand: string;
  name: string;
  size: string;
  image: string;
  description: string;
  officialUrl: string;
  offers: Offer[];
};

export const products: Product[] = [
  {
    id: "lancome-absolue-soft-cream-60ml",
    brand: "Lancôme",
    name: "Absolue Soft Cream",
    size: "60ml / 2oz",
    image:
      "https://dummyimage.com/900x900/f4f4f5/111111.png&text=Lanc%C3%B4me+Absolue+Soft+Cream",
    description:
      "Rich moisturizing cream. Compare prices across trusted retailers.",
    officialUrl: "https://www.lancome-usa.com/",
    offers: [
      { merchant: "Sephora", price: 289, updatedAt: "2026-01-13 09:00 ET" },
      { merchant: "Nordstrom", price: 295, updatedAt: "2026-01-13 09:00 ET" },
      { merchant: "Brand Site", price: 300, updatedAt: "2026-01-13 09:00 ET" }
    ]
  },
  {
    id: "esteelauder-advanced-night-repair-50ml",
    brand: "Estée Lauder",
    name: "Advanced Night Repair Serum",
    size: "50ml / 1.7oz",
    image:
      "https://dummyimage.com/900x900/f4f4f5/111111.png&text=Est%C3%A9e+Lauder+ANR+Serum",
    description:
      "Iconic serum. Track price changes and choose the best offer today.",
    officialUrl: "https://www.esteelauder.com/",
    offers: [
      { merchant: "Ulta", price: 115, updatedAt: "2026-01-13 09:00 ET" },
      { merchant: "Sephora", price: 119, updatedAt: "2026-01-13 09:00 ET" },
      { merchant: "Brand Site", price: 120, updatedAt: "2026-01-13 09:00 ET" }
    ]
  },
  {
    id: "cerave-moisturizing-cream-jar",
    brand: "CeraVe",
    name: "Moisturizing Cream",
    size: "16oz",
    image:
      "https://dummyimage.com/900x900/f4f4f5/111111.png&text=CeraVe+Moisturizing+Cream",
    description:
      "Everyday moisturizer. Compare prices across major stores quickly.",
    officialUrl: "https://www.cerave.com/",
    offers: [
      { merchant: "Target", price: 16.99, updatedAt: "2026-01-13 09:00 ET" },
      { merchant: "Walmart", price: 15.97, updatedAt: "2026-01-13 09:00 ET" },
      { merchant: "Amazon", price: 17.49, updatedAt: "2026-01-13 09:00 ET" }
    ]
  }
];

export function formatPrice(n: number) {
  return n.toFixed(2);
}

export function getLowestPrice(p: Product) {
  return Math.min(...p.offers.map((o) => o.price));
}

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}
