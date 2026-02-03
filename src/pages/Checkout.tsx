import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { CreditCard, Truck, Shield, Lock, ChevronRight, Check } from "lucide-react";
import ring1 from "@/assets/ring-1.jpg";
import necklace1 from "@/assets/necklace-1.jpg";

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("card");

  const orderItems = [
    { id: "1", name: "Rose Gold Solitaire Ring", price: 2450, image: ring1, size: "7", quantity: 1 },
    { id: "2", name: "Diamond Cascade Necklace", price: 4850, image: necklace1, size: "18 inches", quantity: 1 },
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <Layout>
      {/* Progress Bar */}
      <section className="pt-28 pb-6 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-center gap-4">
            {["Shipping", "Payment", "Review"].map((label, index) => (
              <div key={label} className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                      step > index + 1
                        ? "bg-primary text-primary-foreground"
                        : step === index + 1
                        ? "bg-primary text-primary-foreground"
                        : "bg-border/30 text-muted-foreground"
                    }`}
                  >
                    {step > index + 1 ? <Check className="w-4 h-4" /> : index + 1}
                  </div>
                  <span
                    className={`text-sm tracking-wide ${
                      step >= index + 1 ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {label}
                  </span>
                </div>
                {index < 2 && (
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checkout Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form Section */}
            <div className="lg:col-span-2">
              {/* Step 1: Shipping */}
              {step === 1 && (
                <div className="bg-secondary p-8 rounded-sm">
                  <h2 className="font-heading text-2xl text-foreground tracking-wide mb-6">
                    Shipping Information
                  </h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm text-foreground mb-2">First Name *</label>
                        <input type="text" className="input-luxury" placeholder="John" required />
                      </div>
                      <div>
                        <label className="block text-sm text-foreground mb-2">Last Name *</label>
                        <input type="text" className="input-luxury" placeholder="Doe" required />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-foreground mb-2">Email Address *</label>
                      <input type="email" className="input-luxury" placeholder="john@example.com" required />
                    </div>
                    <div>
                      <label className="block text-sm text-foreground mb-2">Phone Number *</label>
                      <input type="tel" className="input-luxury" placeholder="+1 (555) 000-0000" required />
                    </div>
                    <div>
                      <label className="block text-sm text-foreground mb-2">Street Address *</label>
                      <input type="text" className="input-luxury" placeholder="123 Main Street" required />
                    </div>
                    <div>
                      <label className="block text-sm text-foreground mb-2">Apartment, suite, etc.</label>
                      <input type="text" className="input-luxury" placeholder="Apt 4B" />
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm text-foreground mb-2">City *</label>
                        <input type="text" className="input-luxury" placeholder="New York" required />
                      </div>
                      <div>
                        <label className="block text-sm text-foreground mb-2">State *</label>
                        <input type="text" className="input-luxury" placeholder="NY" required />
                      </div>
                      <div>
                        <label className="block text-sm text-foreground mb-2">ZIP Code *</label>
                        <input type="text" className="input-luxury" placeholder="10001" required />
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="btn-rose-gold w-full"
                    >
                      Continue to Payment
                    </button>
                  </form>
                </div>
              )}

              {/* Step 2: Payment */}
              {step === 2 && (
                <div className="bg-secondary p-8 rounded-sm">
                  <h2 className="font-heading text-2xl text-foreground tracking-wide mb-6">
                    Payment Method
                  </h2>
                  
                  {/* Payment Options */}
                  <div className="space-y-4 mb-8">
                    <label
                      className={`flex items-center gap-4 p-4 rounded-sm border cursor-pointer transition-all ${
                        paymentMethod === "card"
                          ? "border-primary bg-primary/5"
                          : "border-border/50 hover:border-primary/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value="card"
                        checked={paymentMethod === "card"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="accent-primary"
                      />
                      <CreditCard className="w-5 h-5 text-primary" />
                      <span className="text-foreground">Credit / Debit Card</span>
                    </label>
                    <label
                      className={`flex items-center gap-4 p-4 rounded-sm border cursor-pointer transition-all ${
                        paymentMethod === "paypal"
                          ? "border-primary bg-primary/5"
                          : "border-border/50 hover:border-primary/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value="paypal"
                        checked={paymentMethod === "paypal"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="accent-primary"
                      />
                      <span className="text-foreground">PayPal</span>
                    </label>
                  </div>

                  {paymentMethod === "card" && (
                    <form className="space-y-6">
                      <div>
                        <label className="block text-sm text-foreground mb-2">Card Number *</label>
                        <input type="text" className="input-luxury" placeholder="1234 5678 9012 3456" required />
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm text-foreground mb-2">Expiry Date *</label>
                          <input type="text" className="input-luxury" placeholder="MM/YY" required />
                        </div>
                        <div>
                          <label className="block text-sm text-foreground mb-2">CVV *</label>
                          <input type="text" className="input-luxury" placeholder="123" required />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-foreground mb-2">Name on Card *</label>
                        <input type="text" className="input-luxury" placeholder="John Doe" required />
                      </div>
                    </form>
                  )}

                  <div className="flex gap-4 mt-8">
                    <button
                      onClick={() => setStep(1)}
                      className="btn-luxury-outline flex-1"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      className="btn-rose-gold flex-1"
                    >
                      Review Order
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Review */}
              {step === 3 && (
                <div className="bg-secondary p-8 rounded-sm">
                  <h2 className="font-heading text-2xl text-foreground tracking-wide mb-6">
                    Review Your Order
                  </h2>
                  
                  {/* Order Items */}
                  <div className="space-y-4 mb-8 pb-8 border-b border-border/30">
                    {orderItems.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-sm" />
                        <div className="flex-1">
                          <h4 className="text-foreground">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">Size: {item.size}</p>
                          <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                        <span className="text-primary">${item.price.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>

                  {/* Summary Sections */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-sm tracking-widest uppercase text-foreground mb-3">Shipping Address</h3>
                      <p className="text-muted-foreground text-sm">
                        John Doe<br />
                        123 Main Street, Apt 4B<br />
                        New York, NY 10001
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm tracking-widest uppercase text-foreground mb-3">Payment Method</h3>
                      <p className="text-muted-foreground text-sm">
                        Credit Card ending in 3456
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setStep(2)}
                      className="btn-luxury-outline flex-1"
                    >
                      Back
                    </button>
                    <button className="btn-rose-gold flex-1">
                      Place Order - ${total.toFixed(2)}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Order Summary Sidebar */}
            <div>
              <div className="bg-secondary p-8 rounded-sm sticky top-32">
                <h3 className="font-heading text-xl text-foreground tracking-wide mb-6">
                  Order Summary
                </h3>

                {/* Items */}
                <div className="space-y-4 pb-6 border-b border-border/30">
                  {orderItems.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="relative">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-sm" />
                        <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-foreground line-clamp-1">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.size}</p>
                      </div>
                      <span className="text-sm text-foreground">${item.price.toLocaleString()}</span>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="space-y-3 py-6 border-b border-border/30">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-primary">Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="text-foreground">${tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-between py-6">
                  <span className="font-heading text-lg text-foreground">Total</span>
                  <span className="font-heading text-xl text-primary">${total.toFixed(2)}</span>
                </div>

                {/* Security Badges */}
                <div className="flex items-center justify-center gap-4 pt-4 border-t border-border/30">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Lock className="w-3 h-3" />
                    <span>Secure</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Shield className="w-3 h-3" />
                    <span>Protected</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Truck className="w-3 h-3" />
                    <span>Insured</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Checkout;
