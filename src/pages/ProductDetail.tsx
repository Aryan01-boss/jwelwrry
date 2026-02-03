import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/product/ProductCard";
import TrustBadges from "@/components/common/TrustBadges";
import {
  Heart,
  Share2,
  Minus,
  Plus,
  Truck,
  RotateCcw,
  Shield,
  Award,
  ChevronRight,
} from "lucide-react";
import ring1 from "@/assets/ring-1.jpg";
import ring2 from "@/assets/ring-2.jpg";
import necklace1 from "@/assets/necklace-1.jpg";
import earrings1 from "@/assets/earrings-1.jpg";
import bracelet1 from "@/assets/bracelet-1.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [isZoomed, setIsZoomed] = useState(false);

  // Sample product data
  const product = {
    id: "1",
    name: "Rose Gold Solitaire Diamond Ring",
    price: 2450,
    originalPrice: 2800,
    description:
      "This stunning solitaire ring features a brilliant-cut diamond set in 18k rose gold. The timeless design symbolizes eternal love and makes the perfect engagement ring or anniversary gift.",
    images: [ring1, ring2, ring1, ring2],
    category: "Rings",
    metal: "18K Rose Gold",
    purity: "750 (18K)",
    weight: "3.2 grams",
    stoneType: "Natural Diamond",
    stoneWeight: "0.5 Carat",
    stoneCut: "Brilliant Round",
    stoneClarity: "VS1",
    stoneColor: "F",
    sizes: ["5", "6", "7", "8", "9"],
    inStock: true,
    sku: "RG-SOL-001",
  };

  const similarProducts = [
    { id: "2", name: "Diamond Cascade Necklace", price: 4850, image: necklace1, category: "Necklaces" },
    { id: "3", name: "Teardrop Diamond Earrings", price: 3200, image: earrings1, category: "Earrings" },
    { id: "4", name: "Gold Chain Bracelet", price: 2800, image: bracelet1, category: "Bracelets" },
    { id: "5", name: "Eternal Love Ring", price: 3850, image: ring2, category: "Rings" },
  ];

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="pt-28 pb-6 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/shop?category=rings" className="hover:text-primary transition-colors">{product.category}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <section className="pb-20 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div
                className="relative aspect-square overflow-hidden rounded-sm bg-card cursor-zoom-in"
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
              >
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    isZoomed ? "scale-150" : "scale-100"
                  }`}
                />
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-sm overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === index
                        ? "border-primary"
                        : "border-transparent hover:border-primary/50"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:py-8">
              <p className="text-primary text-sm tracking-widest uppercase mb-2">
                {product.category}
              </p>
              <h1 className="font-heading text-3xl md:text-4xl font-light text-foreground tracking-wide mb-4">
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl text-primary font-medium">
                  ${product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    ${product.originalPrice.toLocaleString()}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="text-sm bg-accent text-accent-foreground px-3 py-1 rounded-sm">
                    Save {Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Size Selector */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm tracking-widest uppercase text-foreground">
                    Select Size
                  </span>
                  <button className="text-sm text-primary hover:underline">
                    Size Guide
                  </button>
                </div>
                <div className="flex gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-sm border text-sm transition-all duration-300 ${
                        selectedSize === size
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border/50 text-foreground hover:border-primary"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & Actions */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="qty-selector">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="qty-btn"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center text-foreground">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="qty-btn"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button className="btn-rose-gold flex-1">
                  Add to Cart
                </button>
                <button className="w-12 h-12 border border-border/50 rounded-sm flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 border border-border/50 rounded-sm flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 mb-8 pb-8 border-b border-border/30">
                <div className="flex items-center gap-3 text-sm">
                  <Truck className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Free Shipping</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <RotateCcw className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">30-Day Returns</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Secure Payment</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Certified Quality</span>
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-4">
                <h3 className="text-sm tracking-widest uppercase text-foreground">
                  Product Details
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex justify-between py-2 border-b border-border/20">
                    <span className="text-muted-foreground">Metal</span>
                    <span className="text-foreground">{product.metal}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/20">
                    <span className="text-muted-foreground">Purity</span>
                    <span className="text-foreground">{product.purity}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/20">
                    <span className="text-muted-foreground">Weight</span>
                    <span className="text-foreground">{product.weight}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/20">
                    <span className="text-muted-foreground">Stone</span>
                    <span className="text-foreground">{product.stoneType}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/20">
                    <span className="text-muted-foreground">Carat</span>
                    <span className="text-foreground">{product.stoneWeight}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/20">
                    <span className="text-muted-foreground">Clarity</span>
                    <span className="text-foreground">{product.stoneClarity}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/20">
                    <span className="text-muted-foreground">Cut</span>
                    <span className="text-foreground">{product.stoneCut}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/20">
                    <span className="text-muted-foreground">SKU</span>
                    <span className="text-foreground">{product.sku}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Similar Products */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="section-title">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {similarProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
