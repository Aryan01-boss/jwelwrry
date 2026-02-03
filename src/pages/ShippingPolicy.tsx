import Layout from "@/components/layout/Layout";

const ShippingPolicy = () => (
  <Layout>
    <section className="pt-32 pb-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <h1 className="font-heading text-4xl md:text-5xl text-foreground tracking-wide mb-8 text-center">Shipping Policy</h1>
        <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
          <h2 className="font-heading text-2xl text-foreground mt-8 mb-4">Free Worldwide Shipping</h2>
          <p>We offer complimentary insured shipping on all orders. Every package is fully insured and requires signature upon delivery.</p>
          <h2 className="font-heading text-2xl text-foreground mt-8 mb-4">Delivery Times</h2>
          <p>Standard: 5-7 business days | Express: 2-3 business days | International: 7-14 business days</p>
          <h2 className="font-heading text-2xl text-foreground mt-8 mb-4">Packaging</h2>
          <p>All jewelry arrives in our signature luxury gift box, perfect for gifting or personal keepsakes.</p>
          <h2 className="font-heading text-2xl text-foreground mt-8 mb-4">Tracking</h2>
          <p>You'll receive tracking information via email once your order ships.</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default ShippingPolicy;
