import { Cpu, Cog, Shield } from "lucide-react";

export default function Hero({ onShopNow }) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24 lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 text-white">
              <Cpu className="h-3 w-3" />
            </span>
            Next‑gen robotics for home & work
          </div>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Intelligent robots that amplify what you can do
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-7 text-gray-600">
            From autonomous helpers to industrial assistants, Axiom robots combine advanced AI with robust engineering to deliver reliability, safety, and delightful experiences.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button onClick={onShopNow} className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/30">
              Shop robots
            </button>
            <a href="#about" className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-800 shadow-sm transition hover:shadow-md">
              Learn more
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-6 text-sm">
            <div className="flex items-start gap-2">
              <Shield className="mt-0.5 h-5 w-5 text-indigo-600" />
              <div>
                <dt className="font-semibold text-gray-900">Safety first</dt>
                <dd className="text-gray-600">Certified for home & workspace</dd>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Cog className="mt-0.5 h-5 w-5 text-indigo-600" />
              <div>
                <dt className="font-semibold text-gray-900">Modular</dt>
                <dd className="text-gray-600">Expand with toolheads & sensors</dd>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Cpu className="mt-0.5 h-5 w-5 text-indigo-600" />
              <div>
                <dt className="font-semibold text-gray-900">AI onboard</dt>
                <dd className="text-gray-600">Edge compute for private inference</dd>
              </div>
            </div>
          </dl>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1581091014534-8987c1d647b2?q=80&w=1600&auto=format&fit=crop"
              alt="Sleek white home robot on a wooden table"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          <div className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl sm:h-40 sm:w-[28rem]" />
        </div>
      </div>
    </section>
  );
}
