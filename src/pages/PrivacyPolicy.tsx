import Layout from "@/components/layout/Layout";

const PrivacyPolicy = () => (
  <Layout>
    <section className="pt-32 pb-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <h1 className="font-heading text-4xl md:text-5xl text-foreground tracking-wide mb-8 text-center">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
          <p className="text-lg">Last updated: January 2026</p>
          <h2 className="font-heading text-2xl text-foreground mt-8 mb-4">Information We Collect</h2>
          <p>We collect information you provide directly, including name, email, shipping address, and payment details when you make a purchase.</p>
          <h2 className="font-heading text-2xl text-foreground mt-8 mb-4">How We Use Your Information</h2>
          <p>Your information is used to process orders, communicate about your purchases, and improve our services. We never sell your personal data.</p>
          <h2 className="font-heading text-2xl text-foreground mt-8 mb-4">Data Security</h2>
          <p>We implement industry-standard security measures to protect your personal information and payment data.</p>
          <h2 className="font-heading text-2xl text-foreground mt-8 mb-4">Contact Us</h2>
          <p>For privacy inquiries, email us at privacy@lumierejewelry.com</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default PrivacyPolicy;
