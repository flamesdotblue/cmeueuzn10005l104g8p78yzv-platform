import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => setCartCount((c) => c + 1);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar cartCount={cartCount} />
      <main>
        <Hero onShopNow={() => {
          const el = document.getElementById("products");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }} />
        <ProductGrid onAddToCart={handleAddToCart} />
      </main>
      <Footer />
    </div>
  );
}
