import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/product/ProductCard";
import CollectionCard from "@/components/product/CollectionCard";
import TrustBadges from "@/components/common/TrustBadges";
import heroImage from "@/assets/hero-jewelry.jpg";
import necklace1 from "@/assets/necklace-1.jpg";
import ring1 from "@/assets/ring-1.jpg";
import earrings1 from "@/assets/earrings-1.jpg";
import bracelet1 from "@/assets/bracelet-1.jpg";
import pendant1 from "@/assets/pendant-1.jpg";
import necklace2 from "@/assets/necklace-2.jpg";
import ring2 from "@/assets/ring-2.jpg";
import earrings2 from "@/assets/earrings-2.jpg";
import bracelet2 from "@/assets/bracelet-2.jpg";
import craftsmanship from "@/assets/craftsmanship.jpg";
import lifestyleBanner from "@/assets/lifestyle-banner.jpg";
import { ArrowRight, Play } from "lucide-react";

const Index = () => {
  const collections = [
    { name: "Necklaces", image: necklace1, itemCount: 48, href: "/shop?category=necklaces" },
    { name: "Rings", image: ring1, itemCount: 64, href: "/shop?category=rings" },
    { name: "Earrings", image: earrings1, itemCount: 52, href: "/shop?category=earrings" },
    { name: "Bracelets", image: bracelet1, itemCount: 36, href: "/shop?category=bracelets" },
  ];

  const newArrivals = [
    { id: "1", name: "Diamond Cascade Necklace", price: 4850, image: necklace1, category: "Necklaces", isNew: true },
    { id: "2", name: "Rose Gold Solitaire Ring", price: 2450, image: ring1, category: "Rings", isNew: true },
    { id: "3", name: "Teardrop Diamond Earrings", price: 3200, image: earrings1, category: "Earrings", isNew: true },
    { id: "4", name: "Heart Pendant", price: 1850, image: pendant1, category: "Pendants", isNew: true },
  ];

  const bestsellers = [
    { id: "5", name: "Eternal Love Ring", price: 3850, originalPrice: 4200, image: ring2, category: "Rings", isBestseller: true },
    { id: "6", name: "Tennis Diamond Bracelet", price: 5200, image: bracelet2, category: "Bracelets", isBestseller: true },
    { id: "7", name: "Classic Stud Earrings", price: 2100, image: earrings2, category: "Earrings", isBestseller: true },
    { id: "8", name: "Delicate Drop Necklace", price: 1650, image: necklace2, category: "Necklaces", isBestseller: true },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Luxury Jewelry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
        </div>

        <div className="relative container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl animate-fade-up">
            <p className="font-accent text-lg md:text-xl italic text-primary mb-4 opacity-0 animate-fade-up stagger-1">
              Timeless Elegance
            </p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-tight mb-6 opacity-0 animate-fade-up stagger-2">
              Where Brilliance
              <br />
              <span className="text-primary">Meets Artistry</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-lg opacity-0 animate-fade-up stagger-3">
              Discover our exquisite collection of handcrafted jewelry, 
              where every piece tells a story of exceptional craftsmanship 
              and eternal beauty.
            </p>
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up stagger-4">
              <Link to="/shop" className="btn-rose-gold">
                Explore Collections
              </Link>
              <button className="btn-luxury-outline flex items-center gap-3">
                <span className="w-10 h-10 rounded-full border border-foreground/30 flex items-center justify-center group-hover:border-primary transition-colors">
                  <Play className="w-4 h-4 ml-0.5" />
                </span>
                Watch Story
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-xs tracking-widest uppercase text-foreground">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-primary text-sm tracking-widest uppercase mb-4">Curated For You</p>
            <h2 className="section-title">Explore Collections</h2>
            <p className="section-subtitle">
              Discover pieces that reflect your unique style and story
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((collection) => (
              <CollectionCard key={collection.name} {...collection} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <p className="text-primary text-sm tracking-widest uppercase mb-4">Fresh Designs</p>
              <h2 className="section-title text-left">New Arrivals</h2>
            </div>
            <Link
              to="/shop?filter=new"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 text-sm tracking-widest uppercase text-foreground hover:text-primary transition-colors group"
            >
              View All
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Banner */}
      <section className="relative py-32 md:py-40">
        <div className="absolute inset-0">
          <img
            src={lifestyleBanner}
            alt="Luxury Lifestyle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/60" />
        </div>
        <div className="relative container mx-auto px-6 lg:px-12 text-center">
          <p className="font-accent text-xl md:text-2xl italic text-primary mb-6">
            "Elegance is the only beauty that never fades"
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-wide mb-8">
            Celebrate Every Moment
          </h2>
          <Link to="/shop" className="btn-rose-gold">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <p className="text-primary text-sm tracking-widest uppercase mb-4">Most Loved</p>
              <h2 className="section-title text-left">Bestsellers</h2>
            </div>
            <Link
              to="/shop?filter=bestseller"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 text-sm tracking-widest uppercase text-foreground hover:text-primary transition-colors group"
            >
              View All
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <img
                src={craftsmanship}
                alt="Master Craftsmanship"
                className="w-full rounded-sm shadow-luxury"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-8 rounded-sm hidden md:block">
                <p className="font-heading text-4xl font-light">25+</p>
                <p className="text-sm tracking-wide">Years of Excellence</p>
              </div>
            </div>
            <div>
              <p className="text-primary text-sm tracking-widest uppercase mb-4">Our Heritage</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground tracking-wide mb-6">
                The Art of Fine Jewelry
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Each piece in our collection represents the pinnacle of jewelry 
                craftsmanship. Our master artisans blend time-honored techniques 
                with contemporary design, creating jewelry that transcends trends 
                and becomes a treasured heirloom.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From selecting the finest ethically-sourced gemstones to the 
                final polish, every step is executed with meticulous attention 
                to detail and an unwavering commitment to excellence.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-primary hover:text-foreground transition-colors group"
              >
                Discover Our Story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Instagram Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12 text-center mb-12">
          <p className="text-primary text-sm tracking-widest uppercase mb-4">@lumierejewelry</p>
          <h2 className="section-title">Follow Our Journey</h2>
        </div>
        <div className="insta-grid">
          {[necklace1, ring1, earrings1, bracelet1, pendant1, necklace2].map((img, index) => (
            <div key={index} className="insta-item">
              <img src={img} alt={`Instagram ${index + 1}`} />
              <div className="absolute inset-0 bg-primary/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-foreground">♥</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
