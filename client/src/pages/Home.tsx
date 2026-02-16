import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";

export default function Home() {
  const products = [
    {
      title: "Giru Chat",
      description: "The core engine. Connect with anyone globally with real-time AI translation and context awareness.",
      tags: ["Communication", "AI Translation", "Global"],
      gradient: "bg-gradient-to-br from-primary to-blue-600",
      status: "Live"
    },
    {
      title: "Knowledge Base",
      description: "Automatically index your organization's conversations into a searchable, intelligent knowledge vault.",
      tags: ["Enterprise", "Storage", "Search"],
      gradient: "bg-gradient-to-br from-secondary to-green-600",
      status: "Beta"
    },
    {
      title: "Voice Sync",
      description: "Real-time voice translation for meetings and calls. Speak your language, they hear theirs.",
      tags: ["Audio", "Real-time", "Voice"],
      gradient: "bg-gradient-to-br from-purple-500 to-indigo-600",
      status: "Coming Soon"
    },
    {
      title: "Giru Connect",
      description: "API infrastructure for developers to build cross-language features into their own apps.",
      tags: ["API", "DevTools", "Infrastructure"],
      gradient: "bg-gradient-to-br from-orange-500 to-red-600",
      status: "Alpha"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />

      <main>
        <Hero />

        <section id="products" className="py-24 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Ecosystem</h2>
              <p className="text-muted-foreground">Tools built to power the global workforce.</p>
            </div>
            <div className="text-sm text-muted-foreground">
              Explore all products &rarr;
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-24 border-t border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-left" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to go global?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Join thousands of users breaking down barriers with Giru.ai.
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              <a
                href={`${import.meta.env.VITE_EKP_URL}/signup`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/10 bg-black/50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 transition-all">
            <img
              src="/attached_assets/Giruai_Logo_1770448650362.png"
              alt="Giru.ai Logo"
              className="w-6 h-6 object-contain"
            />
            <span className="font-display font-bold text-lg">giru.ai</span>
          </div>
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Giru AI Inc. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
