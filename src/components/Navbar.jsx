import { ShoppingCart, Bot } from "lucide-react";

export default function Navbar({ cartCount = 0 }) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
            <Bot className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight">Axiom Robotics</span>
        </a>
        <nav className="hidden gap-6 text-sm font-medium text-gray-700 md:flex">
          <a href="#products" className="hover:text-gray-900">Robots</a>
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#support" className="hover:text-gray-900">Support</a>
        </nav>
        <button className="relative inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500/30">
          <ShoppingCart className="h-5 w-5" />
          <span className="hidden sm:inline">Cart</span>
          {cartCount > 0 && (
            <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-indigo-600 px-1 text-xs font-bold text-white">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
