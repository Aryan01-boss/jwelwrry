import Layout from "@/components/layout/Layout";

const RefundPolicy = () => (
  <Layout>
    <section className="pt-32 pb-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <h1 className="font-heading text-4xl md:text-5xl text-foreground tracking-wide mb-8 text-center">Refund & Return Policy</h1>
        <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
          <h2 className="font-heading text-2xl text-foreground mt-8 mb-4">30-Day Return Window</h2>
          <p>We offer a 30-day return policy on all unworn items in original condition with tags attached.</p>
          <h2 className="font-heading text-2xl text-foreground mt-8 mb-4">How to Return</h2>
          <p>Contact our support team to initiate a return. We'll provide a prepaid shipping label for your convenience.</p>
          <h2 className="font-heading text-2xl text-foreground mt-8 mb-4">Refund Processing</h2>
          <p>Refunds are processed within 5-7 business days after we receive your return. Original payment method will be credited.</p>
          <h2 className="font-heading text-2xl text-foreground mt-8 mb-4">Exchanges</h2>
          <p>We offer free exchanges for different sizes. Custom or engraved pieces are final sale.</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default RefundPolicy;
