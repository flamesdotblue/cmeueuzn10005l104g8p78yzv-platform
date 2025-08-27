import { useMemo } from "react";
import { Bot, Battery, Cpu, Cog } from "lucide-react";

const products = [
  {
    id: "axiom-home",
    name: "Axiom Home",
    price: 1299,
    blurb: "Friendly autonomous helper for everyday tasks.",
    image:
      "https://images.unsplash.com/photo-1581093588401-16ec672b0d20?q=80&w=1600&auto=format&fit=crop",
    features: ["Voice + app control", "Room mapping", "Pet-safe navigation"],
    icon: Bot,
    tag: "Best seller",
  },
  {
    id: "axiom-pro",
    name: "Axiom Pro",
    price: 3899,
    blurb: "Industrial-grade mobile base with modular payloads.",
    image:
      "https://images.unsplash.com/photo-1581093588401-2ec13552c38a?q=80&w=1600&auto=format&fit=crop",
    features: ["120kg payload", "Lidar + depth", "8h battery"],
    icon: Cog,
    tag: "New",
  },
  {
    id: "axiom-desk",
    name: "Axiom Desk",
    price: 2199,
    blurb: "Robotic arm for makers, labs, and education.",
    image:
      "https://images.unsplash.com/photo-1581093588401-1f9d3fdfdb79?q=80&w=1600&auto=format&fit=crop",
    features: ["0.1mm repeatability", "6 DOF", "Open SDK"],
    icon: Cpu,
    tag: "Creator favorite",
  },
  {
    id: "axiom-clean",
    name: "Axiom Clean",
    price: 1599,
    blurb: "Autonomous floor care with HEPA filtration.",
    image:
      "https://images.unsplash.com/photo-1505577082258-3f5c5a1c94d2?q=80&w=1600&auto=format&fit=crop",
    features: ["Li-ion 6000mAh", "Obstacle avoidance", "Quiet mode"],
    icon: Battery,
    tag: "Eco",
  },
];

function formatPrice(n) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);
}

function ProductCard({ product, onAddToCart }) {
  const Icon = product.icon;
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
        <div className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-gray-800 shadow-sm backdrop-blur">
          {product.tag}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
              <Icon className="h-4 w-4" />
            </span>
            <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
          </div>
          <p className="text-right text-base font-bold text-gray-900">{formatPrice(product.price)}</p>
        </div>
        <p className="text-sm text-gray-600">{product.blurb}</p>
        <ul className="mt-1 grid grid-cols-1 gap-1 text-sm text-gray-600 sm:grid-cols-2">
          {product.features.map((f) => (
            <li key={f} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-3">
          <button
            onClick={() => onAddToCart?.(product)}
            className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
            aria-label={`Add ${product.name} to cart`}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductGrid({ onAddToCart }) {
  const items = useMemo(() => products, []);

  return (
    <section id="products" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Shop robots</h2>
          <p className="mt-2 text-gray-600">Purpose-built robots engineered for safety, performance, and upgradability.</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" /> In stock and ready to ship
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} onAddToCart={() => onAddToCart?.(p)} />
        ))}
      </div>

      <div id="about" className="mt-16 grid gap-6 rounded-2xl border border-gray-200 bg-white p-6 sm:grid-cols-3">
        <Stat value="30k+" label="Robots deployed" />
        <Stat value="42" label="Countries served" />
        <Stat value="4.9/5" label="Average rating" />
      </div>

      <div id="support" className="mt-16 rounded-2xl border border-indigo-100 bg-indigo-50 p-6 text-indigo-900">
        <h3 className="text-lg font-semibold">World‑class support</h3>
        <p className="mt-1 text-sm opacity-90">Every robot includes 2‑year warranty, remote diagnostics, and access to our developer portal. Need help choosing? Chat with an expert 7 days a week.</p>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-xl bg-white p-5 text-center shadow-sm">
      <div className="text-2xl font-extrabold text-gray-900">{value}</div>
      <div className="mt-1 text-sm text-gray-600">{label}</div>
    </div>
  );
}
