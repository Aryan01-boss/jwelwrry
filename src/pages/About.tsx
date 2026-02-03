import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-jewelry.jpg";
import craftsmanship from "@/assets/craftsmanship.jpg";
import necklace1 from "@/assets/necklace-1.jpg";

const About = () => {
  const values = [
    {
      title: "Exceptional Craftsmanship",
      description: "Every piece is meticulously handcrafted by our master artisans with generations of expertise.",
    },
    {
      title: "Ethical Sourcing",
      description: "We are committed to using only conflict-free diamonds and responsibly sourced materials.",
    },
    {
      title: "Timeless Design",
      description: "Our designs blend classic elegance with contemporary aesthetics, creating pieces that transcend trends.",
    },
    {
      title: "Uncompromising Quality",
      description: "Each gemstone is carefully selected and every detail is perfected to meet our exacting standards.",
    },
  ];

  const milestones = [
    { year: "1998", event: "Founded in the heart of the Diamond District" },
    { year: "2005", event: "Launched our signature bridal collection" },
    { year: "2012", event: "Opened our flagship atelier" },
    { year: "2018", event: "Celebrated 20 years of excellence" },
    { year: "2023", event: "Expanded to international markets" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="About Lumière"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <div className="relative container mx-auto px-6 lg:px-12 text-center">
          <p className="text-primary text-sm tracking-widest uppercase mb-4">Our Story</p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-wide mb-6">
            A Legacy of Brilliance
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            For over two decades, Lumière has been creating jewelry that captures 
            life's most precious moments with unparalleled artistry and passion.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-primary text-sm tracking-widest uppercase mb-4">Our Philosophy</p>
              <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground tracking-wide mb-6">
                Where Art Meets Emotion
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Lumière was born from a simple belief: that jewelry is more than adornment—it's 
                a keeper of memories, a symbol of love, and a reflection of one's unique journey. 
                Our founder, inspired by generations of master jewelers, set out to create pieces 
                that would become treasured heirlooms.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Today, that vision continues to guide everything we do. From the moment a raw 
                diamond arrives in our atelier to the final polish of a completed piece, every 
                step is infused with passion, precision, and an unwavering commitment to excellence.
              </p>
              <p className="font-accent text-xl italic text-primary">
                "We don't just make jewelry—we create legacies."
              </p>
            </div>
            <div className="relative">
              <img
                src={craftsmanship}
                alt="Master Craftsmanship"
                className="w-full rounded-sm shadow-luxury"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-primary text-sm tracking-widest uppercase mb-4">What We Stand For</p>
            <h2 className="section-title">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center mx-auto mb-6">
                  <span className="font-heading text-2xl text-primary">{index + 1}</span>
                </div>
                <h3 className="font-heading text-xl text-foreground tracking-wide mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-primary text-sm tracking-widest uppercase mb-4">Our Journey</p>
            <h2 className="section-title">Milestones</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex gap-8 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="font-heading text-sm text-primary-foreground">
                      {milestone.year}
                    </span>
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-px flex-1 bg-border/50 mt-4" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-foreground text-lg">
                    {milestone.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground tracking-wide mb-6">
            Experience the Art of Fine Jewelry
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
            Visit our collections and discover pieces that will become part of your story.
          </p>
          <Link to="/shop" className="btn-rose-gold inline-flex items-center gap-2">
            Explore Collections
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
