import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/product/ProductCard";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import necklace1 from "@/assets/necklace-1.jpg";
import necklace2 from "@/assets/necklace-2.jpg";
import ring1 from "@/assets/ring-1.jpg";
import ring2 from "@/assets/ring-2.jpg";
import earrings1 from "@/assets/earrings-1.jpg";
import earrings2 from "@/assets/earrings-2.jpg";
import bracelet1 from "@/assets/bracelet-1.jpg";
import bracelet2 from "@/assets/bracelet-2.jpg";
import pendant1 from "@/assets/pendant-1.jpg";

const Shop = () => {
  const [searchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState("featured");

  const products = [
    { id: "1", name: "Diamond Cascade Necklace", price: 4850, image: necklace1, category: "Necklaces", isNew: true },
    { id: "2", name: "Rose Gold Solitaire Ring", price: 2450, image: ring1, category: "Rings", isNew: true },
    { id: "3", name: "Teardrop Diamond Earrings", price: 3200, image: earrings1, category: "Earrings" },
    { id: "4", name: "Heart Pendant", price: 1850, image: pendant1, category: "Pendants" },
    { id: "5", name: "Eternal Love Ring", price: 3850, originalPrice: 4200, image: ring2, category: "Rings", isBestseller: true },
    { id: "6", name: "Tennis Diamond Bracelet", price: 5200, image: bracelet2, category: "Bracelets", isBestseller: true },
    { id: "7", name: "Classic Stud Earrings", price: 2100, image: earrings2, category: "Earrings" },
    { id: "8", name: "Delicate Drop Necklace", price: 1650, image: necklace2, category: "Necklaces" },
    { id: "9", name: "Gold Chain Bracelet", price: 2800, image: bracelet1, category: "Bracelets", isNew: true },
    { id: "10", name: "Princess Cut Ring", price: 4500, image: ring1, category: "Rings" },
    { id: "11", name: "Pearl Drop Earrings", price: 1950, image: earrings1, category: "Earrings" },
    { id: "12", name: "Layered Gold Necklace", price: 2250, image: necklace2, category: "Necklaces" },
  ];

  const categories = ["All", "Necklaces", "Rings", "Earrings", "Bracelets", "Pendants"];
  const materials = ["All", "Gold", "White Gold", "Rose Gold", "Platinum", "Silver"];
  const priceRanges = ["All", "Under $1,000", "$1,000 - $2,500", "$2,500 - $5,000", "Above $5,000"];
  const occasions = ["All", "Wedding", "Daily Wear", "Party", "Anniversary", "Gift"];

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <p className="text-primary text-sm tracking-widest uppercase mb-4">Explore</p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-wide mb-4">
            Our Collections
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our curated selection of fine jewelry, crafted with the finest materials 
            and designed to celebrate life's most precious moments.
          </p>
        </div>
      </section>

      {/* Shop Content */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Toolbar */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12 pb-8 border-b border-border/30">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 text-sm tracking-widest uppercase text-foreground hover:text-primary transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>
              <span className="text-muted-foreground text-sm">
                {products.length} Products
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border border-border/50 rounded-sm px-4 py-2 pr-10 text-sm text-foreground focus:outline-none focus:border-primary cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="popular">Most Popular</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="flex gap-12">
            {/* Filters Sidebar */}
            <aside
              className={`fixed lg:relative inset-0 z-50 lg:z-auto bg-background lg:bg-transparent w-80 lg:w-64 flex-shrink-0 transition-transform duration-500 ${
                isFilterOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
              }`}
            >
              <div className="h-full overflow-y-auto p-6 lg:p-0">
                {/* Mobile Close Button */}
                <div className="flex items-center justify-between mb-8 lg:hidden">
                  <h3 className="font-heading text-xl text-foreground">Filters</h3>
                  <button onClick={() => setIsFilterOpen(false)}>
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Category Filter */}
                <div className="mb-8">
                  <h4 className="text-sm tracking-widest uppercase text-foreground mb-4">
                    Category
                  </h4>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="category"
                          className="w-4 h-4 accent-primary"
                          defaultChecked={category === "All"}
                        />
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          {category}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Material Filter */}
                <div className="mb-8">
                  <h4 className="text-sm tracking-widest uppercase text-foreground mb-4">
                    Material
                  </h4>
                  <div className="space-y-3">
                    {materials.map((material) => (
                      <label key={material} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          className="w-4 h-4 accent-primary"
                        />
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          {material}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div className="mb-8">
                  <h4 className="text-sm tracking-widest uppercase text-foreground mb-4">
                    Price Range
                  </h4>
                  <div className="space-y-3">
                    {priceRanges.map((range) => (
                      <label key={range} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="price"
                          className="w-4 h-4 accent-primary"
                          defaultChecked={range === "All"}
                        />
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          {range}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Occasion Filter */}
                <div className="mb-8">
                  <h4 className="text-sm tracking-widest uppercase text-foreground mb-4">
                    Occasion
                  </h4>
                  <div className="space-y-3">
                    {occasions.map((occasion) => (
                      <label key={occasion} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          className="w-4 h-4 accent-primary"
                        />
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          {occasion}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <button className="w-full btn-luxury text-xs">
                  Apply Filters
                </button>
              </div>
            </aside>

            {/* Filter Overlay */}
            {isFilterOpen && (
              <div
                className="fixed inset-0 bg-background/80 z-40 lg:hidden"
                onClick={() => setIsFilterOpen(false)}
              />
            )}

            {/* Products Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-16">
                <button className="btn-luxury-outline">
                  Load More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
