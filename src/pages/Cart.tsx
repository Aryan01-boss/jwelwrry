import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag } from "lucide-react";
import ring1 from "@/assets/ring-1.jpg";
import necklace1 from "@/assets/necklace-1.jpg";
import earrings1 from "@/assets/earrings-1.jpg";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "Rose Gold Solitaire Ring",
      price: 2450,
      image: ring1,
      size: "7",
      quantity: 1,
    },
    {
      id: "2",
      name: "Diamond Cascade Necklace",
      price: 4850,
      image: necklace1,
      size: "18 inches",
      quantity: 1,
    },
    {
      id: "3",
      name: "Teardrop Diamond Earrings",
      price: 3200,
      image: earrings1,
      size: "Standard",
      quantity: 2,
    },
  ]);

  const [promoCode, setPromoCode] = useState("");

  const updateQuantity = (id: string, change: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 0; // Free shipping
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <Layout>
        <section className="pt-32 pb-20 bg-background min-h-screen flex items-center">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <div className="w-24 h-24 rounded-full border border-border/50 flex items-center justify-center mx-auto mb-8">
              <ShoppingBag className="w-10 h-10 text-muted-foreground" />
            </div>
            <h1 className="font-heading text-3xl md:text-4xl text-foreground tracking-wide mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any jewelry to your cart yet.
            </p>
            <Link to="/shop" className="btn-rose-gold inline-flex items-center gap-2">
              Continue Shopping
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-8 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-light text-foreground tracking-wide">
            Shopping Cart
          </h1>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              {/* Header */}
              <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-border/30 text-sm text-muted-foreground uppercase tracking-widest">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-right">Total</div>
              </div>

              {/* Items */}
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 py-6 border-b border-border/30 items-center"
                >
                  {/* Product Info */}
                  <div className="md:col-span-6 flex gap-4">
                    <Link to={`/product/${item.id}`} className="w-24 h-24 flex-shrink-0 rounded-sm overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </Link>
                    <div className="flex-1">
                      <Link
                        to={`/product/${item.id}`}
                        className="font-heading text-lg text-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                      <p className="text-sm text-muted-foreground mt-1">
                        Size: {item.size}
                      </p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="flex items-center gap-1 text-sm text-destructive hover:underline mt-2 md:hidden"
                      >
                        <Trash2 className="w-4 h-4" />
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="md:col-span-2 flex items-center justify-center">
                    <div className="qty-selector">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="qty-btn"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-foreground text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="qty-btn"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="md:col-span-2 text-center text-muted-foreground">
                    ${item.price.toLocaleString()}
                  </div>

                  {/* Total */}
                  <div className="md:col-span-2 flex items-center justify-end gap-4">
                    <span className="text-foreground font-medium">
                      ${(item.price * item.quantity).toLocaleString()}
                    </span>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="hidden md:block text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}

              {/* Continue Shopping */}
              <div className="mt-8">
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-foreground hover:text-primary transition-colors"
                >
                  <ArrowRight className="w-4 h-4 rotate-180" />
                  Continue Shopping
                </Link>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-secondary p-8 rounded-sm sticky top-32">
                <h2 className="font-heading text-xl text-foreground tracking-wide mb-6">
                  Order Summary
                </h2>

                {/* Promo Code */}
                <div className="mb-6">
                  <div className="flex gap-2">
                    <div className="flex-1 relative">
                      <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Promo code"
                        className="input-luxury pl-10"
                      />
                    </div>
                    <button className="btn-luxury text-xs px-4">
                      Apply
                    </button>
                  </div>
                </div>

                {/* Totals */}
                <div className="space-y-4 pb-6 border-b border-border/30">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-primary">Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Estimated Tax</span>
                    <span className="text-foreground">${tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-between py-6">
                  <span className="font-heading text-lg text-foreground">Total</span>
                  <span className="font-heading text-xl text-primary">
                    ${total.toFixed(2)}
                  </span>
                </div>

                <Link to="/checkout" className="btn-rose-gold w-full text-center block">
                  Proceed to Checkout
                </Link>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Secure checkout powered by industry-leading encryption
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cart;
