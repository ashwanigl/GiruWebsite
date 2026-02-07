import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div className="w-8 h-8 relative overflow-hidden rounded bg-black">
              <img 
                src="/attached_assets/Giruai_Logo_1770448650362.png" 
                alt="Giru.ai Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">
              giru<span className="text-primary">.ai</span>
            </span>
          </a>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#products" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Products
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Vision
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:flex hover:bg-white/5">
            Log in
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-white font-medium shadow-[0_0_20px_rgba(24,116,255,0.3)] hover:shadow-[0_0_30px_rgba(24,116,255,0.5)] transition-all">
            Get Started
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
