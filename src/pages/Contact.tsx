import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <p className="text-primary text-sm tracking-widest uppercase mb-4">Get in Touch</p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-wide mb-4">
            Contact Us
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're here to help with any questions about our collections, orders, or custom designs. 
            Reach out and our team will respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl text-foreground tracking-wide mb-8">
                Visit Our Boutique
              </h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      123 Luxury Avenue, Diamond District<br />
                      New York, NY 10001, USA
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium mb-1">Phone</h3>
                    <p className="text-muted-foreground">
                      +1 (800) 555-JEWEL<br />
                      +1 (212) 555-0123
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      hello@lumierejewelry.com<br />
                      support@lumierejewelry.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium mb-1">Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 10:00 AM - 7:00 PM<br />
                      Saturday: 11:00 AM - 6:00 PM<br />
                      Sunday: By appointment only
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video bg-secondary rounded-sm overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841902584847!2d-73.98823492346897!3d40.75797597138698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(50%) invert(90%)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-secondary p-8 md:p-12 rounded-sm">
              <h2 className="font-heading text-2xl md:text-3xl text-foreground tracking-wide mb-8">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-foreground mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="input-luxury"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input-luxury"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="input-luxury"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-foreground mb-2">
                      Subject *
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="input-luxury"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="order">Order Status</option>
                      <option value="custom">Custom Design</option>
                      <option value="returns">Returns & Exchanges</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-foreground mb-2">
                    Your Message *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="input-luxury min-h-[150px] resize-none"
                    placeholder="Tell us how we can help..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-rose-gold w-full flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
