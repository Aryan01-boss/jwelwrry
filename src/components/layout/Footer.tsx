import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary pt-20 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Newsletter Section */}
        <div className="text-center mb-16 pb-16 border-b border-border/30">
          <h3 className="font-heading text-3xl md:text-4xl tracking-widest text-foreground mb-4">
            Join Our World of Luxury
          </h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Be the first to discover new collections, exclusive offers, and jewelry care tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="input-luxury flex-1"
            />
            <button className="btn-luxury whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <h4 className="font-heading text-2xl tracking-luxury text-foreground mb-6">
              LUMIÈRE
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Crafting timeless pieces that celebrate life's precious moments. 
              Each jewel tells a story of elegance, artistry, and enduring beauty.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-sm tracking-widest uppercase text-foreground mb-6">
              Collections
            </h5>
            <ul className="space-y-3">
              {["Necklaces", "Rings", "Earrings", "Bracelets", "Pendants", "Wedding"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={`/shop?category=${item.toLowerCase()}`}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h5 className="text-sm tracking-widest uppercase text-foreground mb-6">
              Information
            </h5>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                >
                  Journal
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping-policy"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                >
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/refund-policy"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                >
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-sm tracking-widest uppercase text-foreground mb-6">
              Contact Us
            </h5>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>
                  123 Luxury Avenue, Diamond District
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+1 (800) 555-JEWEL</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>hello@lumierejewelry.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs tracking-wide">
            © {currentYear} LUMIÈRE. All rights reserved. Crafted with love.
          </p>
          <div className="flex items-center gap-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png"
              alt="Mastercard"
              className="h-6 opacity-60 hover:opacity-100 transition-opacity"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png"
              alt="Visa"
              className="h-4 opacity-60 hover:opacity-100 transition-opacity"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/200px-PayPal.svg.png"
              alt="PayPal"
              className="h-5 opacity-60 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
