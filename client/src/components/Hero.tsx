import { motion } from "framer-motion";
import { MessageSquare, Globe, Zap, ArrowRight, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[128px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.15]" />
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Global Communication Revolution
            </span>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Talk to Anyone, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Anywhere.</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            The future of organizational knowledge starts with universal connection. 
            Chat seamlessly across languages and borders with Giru.ai.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="h-12 px-8 text-base bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(24,116,255,0.4)] transition-all">
              Start Chatting <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base border-white/10 hover:bg-white/5 hover:text-white">
              Explore Products
            </Button>
          </motion.div>

          {/* Feature Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 text-left"
          >
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Universal Translation</h3>
              <p className="text-sm text-muted-foreground">Real-time translation for seamless cross-border communication.</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4 text-secondary group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Knowledge Capture</h3>
              <p className="text-sm text-muted-foreground">Automatically index and organize business insights from conversations.</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-blue-400/20 flex items-center justify-center mb-4 text-blue-400 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Instant Connection</h3>
              <p className="text-sm text-muted-foreground">Zero latency messaging optimized for global teams.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
