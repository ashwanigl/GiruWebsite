import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  title: string;
  description: string;
  tags: string[];
  gradient?: string;
  status?: string;
}

export default function ProductCard({ title, description, tags, gradient, status = "Live" }: ProductCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-card p-1"
    >
      <div className={`absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity ${gradient || 'bg-gradient-to-br from-white/20 to-transparent'}`} />
      
      <div className="relative h-full bg-background/50 backdrop-blur-xl rounded-[20px] p-6 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${gradient ? gradient.replace('bg-gradient-to-br', 'bg') : 'bg-primary'} bg-opacity-20 text-white`}>
              <span className="font-display font-bold text-xl">{title.substring(0, 1)}</span>
            </div>
            <Badge variant="outline" className={`border-white/10 ${status === "Beta" ? "text-yellow-400 bg-yellow-400/10" : "text-secondary bg-secondary/10"}`}>
              {status}
            </Badge>
          </div>
          
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
            {title}
            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>
          <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 rounded-md bg-white/5 text-muted-foreground border border-white/5">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
