import Navbar from "../components/Navbar/Navbar";
import ProductCarousel from "../components/ProductCarousel/ProductCarousel";
import ProductGrid from "../components/ProductGrid/ProductGrid";

function Homepage() {
  return (
    <div className="font-roboto bg-zinc-950 min-h-screen">
      <Navbar />
      <ProductCarousel />
      <ProductGrid />
    </div>
  );
}

export default Homepage;
