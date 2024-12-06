import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import ProductCarousel from "../components/ProductCarousel/ProductCarousel";
import ProductGrid from "../components/ProductGrid/ProductGrid";

function Homepage() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchFocus = (focused) => {
    setIsSearchFocused(focused);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <div className="font-roboto bg-zinc-950 min-h-screen">
      <Navbar onSearchFocus={handleSearchFocus} onSearch={handleSearch} />
      <main className="flex-grow">
        {!isSearchFocused && searchQuery === "" && <ProductCarousel />}
        <ProductGrid searchQuery={searchQuery} />
      </main>
    </div>
  );
}

export default Homepage;
