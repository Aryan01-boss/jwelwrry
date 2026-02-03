import { Gem, Shield, Truck, Award } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Gem,
      title: "Certified Purity",
      description: "BIS Hallmarked Gold & IGI Certified Diamonds",
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "100% Safe & Encrypted Transactions",
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Complimentary Insured Delivery Worldwide",
    },
    {
      icon: Award,
      title: "Lifetime Warranty",
      description: "Free Maintenance & Polish Forever",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="trust-badge">
              <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center mb-4 group-hover:border-primary transition-colors duration-300">
                <badge.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-heading text-lg text-foreground tracking-wide mb-2">
                {badge.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
