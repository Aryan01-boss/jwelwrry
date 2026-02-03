import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Search, Heart, ShoppingBag, User } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Collections", path: "/shop" },
    { name: "New Arrivals", path: "/shop?filter=new" },
    { name: "About", path: "/about" },
    { name: "Journal", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path.split("?")[0]);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="font-heading text-2xl md:text-3xl tracking-luxury text-foreground hover:text-primary transition-colors duration-300"
            >
              LUMIÈRE
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative text-sm tracking-widest uppercase transition-colors duration-300 ${
                    isActive(link.path)
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-primary" />
                  )}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4 md:gap-6">
              <button className="text-foreground/80 hover:text-primary transition-colors duration-300">
                <Search className="w-5 h-5" />
              </button>
              <Link
                to="/wishlist"
                className="hidden md:block text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                <Heart className="w-5 h-5" />
              </Link>
              <Link
                to="/cart"
                className="relative text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center">
                  3
                </span>
              </Link>
              <button className="hidden md:block text-foreground/80 hover:text-primary transition-colors duration-300">
                <User className="w-5 h-5" />
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-foreground"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-background transition-all duration-500 lg:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl font-heading tracking-widest transition-all duration-300 ${
                isActive(link.path) ? "text-primary" : "text-foreground"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-6 mt-8">
            <Link
              to="/wishlist"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              <Heart className="w-6 h-6" />
            </Link>
            <button className="text-foreground/80 hover:text-primary transition-colors">
              <User className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
