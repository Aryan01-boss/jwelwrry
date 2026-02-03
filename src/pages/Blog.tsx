import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Calendar, User, ArrowRight } from "lucide-react";
import necklace1 from "@/assets/necklace-1.jpg";
import ring1 from "@/assets/ring-1.jpg";
import earrings1 from "@/assets/earrings-1.jpg";
import bracelet1 from "@/assets/bracelet-1.jpg";
import craftsmanship from "@/assets/craftsmanship.jpg";

const Blog = () => {
  const blogPosts = [
    {
      id: "1",
      title: "The Ultimate Guide to Choosing the Perfect Engagement Ring",
      excerpt: "Discover everything you need to know about selecting the perfect ring that symbolizes your eternal love.",
      image: ring1,
      category: "Buying Guide",
      author: "Sophie Laurent",
      date: "January 15, 2026",
      featured: true,
    },
    {
      id: "2",
      title: "Caring for Your Diamond Jewelry: Expert Tips",
      excerpt: "Learn how to keep your precious diamond pieces sparkling for generations with our comprehensive care guide.",
      image: necklace1,
      category: "Jewelry Care",
      author: "James Chen",
      date: "January 10, 2026",
    },
    {
      id: "3",
      title: "Wedding Jewelry Trends for 2026",
      excerpt: "Explore the latest bridal jewelry trends that are captivating brides-to-be this season.",
      image: earrings1,
      category: "Trends",
      author: "Emma Roberts",
      date: "January 5, 2026",
    },
    {
      id: "4",
      title: "The Art of Layering Necklaces: A Style Guide",
      excerpt: "Master the art of necklace layering with our expert tips for creating the perfect stack.",
      image: bracelet1,
      category: "Style Tips",
      author: "Sophie Laurent",
      date: "December 28, 2025",
    },
    {
      id: "5",
      title: "Understanding Diamond Clarity and Color Grades",
      excerpt: "Demystifying the 4Cs of diamonds to help you make an informed purchase decision.",
      image: craftsmanship,
      category: "Education",
      author: "James Chen",
      date: "December 20, 2025",
    },
    {
      id: "6",
      title: "Gift Ideas: Jewelry for Every Occasion",
      excerpt: "Find the perfect jewelry gift for birthdays, anniversaries, and all of life's special moments.",
      image: ring1,
      category: "Gift Guide",
      author: "Emma Roberts",
      date: "December 15, 2025",
    },
  ];

  const categories = [
    "All",
    "Buying Guide",
    "Jewelry Care",
    "Trends",
    "Style Tips",
    "Education",
    "Gift Guide",
  ];

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <p className="text-primary text-sm tracking-widest uppercase mb-4">Stories & Insights</p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-wide mb-4">
            The Journal
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of articles about jewelry care, styling tips, 
            buying guides, and the latest trends in fine jewelry.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b border-border/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors px-4 py-2"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <Link to={`/blog/${featuredPost.id}`} className="group grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative overflow-hidden rounded-sm aspect-video lg:aspect-square">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground text-xs tracking-widest uppercase px-4 py-2 rounded-sm">
                    Featured
                  </span>
                </div>
              </div>
              <div className="lg:pl-8">
                <span className="text-primary text-sm tracking-widest uppercase">
                  {featuredPost.category}
                </span>
                <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-foreground tracking-wide mt-3 mb-4 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </span>
                </div>
                <span className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-foreground group-hover:text-primary transition-colors">
                  Read Article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group bg-background rounded-sm overflow-hidden shadow-card hover:shadow-luxury transition-shadow duration-500"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="text-primary text-xs tracking-widest uppercase">
                    {post.category}
                  </span>
                  <h3 className="font-heading text-xl text-foreground tracking-wide mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-luxury-outline">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
