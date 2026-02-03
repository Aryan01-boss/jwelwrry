import Layout from "@/components/layout/Layout";

const Terms = () => (
  <Layout>
    <section className="pt-32 pb-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <h1 className="font-heading text-4xl md:text-5xl text-foreground tracking-wide mb-8 text-center">Terms & Conditions</h1>
        <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
          <p className="text-lg">By using our website, you agree to these terms and conditions.</p>
          <h2 className="font-heading text-2xl text-foreground mt-8 mb-4">Products</h2>
          <p>All products are subject to availability. We reserve the right to limit quantities and discontinue items.</p>
          <h2 className="font-heading text-2xl text-foreground mt-8 mb-4">Pricing</h2>
          <p>Prices are in USD and subject to change. We are not responsible for typographical errors.</p>
          <h2 className="font-heading text-2xl text-foreground mt-8 mb-4">Intellectual Property</h2>
          <p>All content, designs, and trademarks are property of Lumière Jewelry and may not be used without permission.</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Terms;
