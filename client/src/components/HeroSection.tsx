import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileDown, ArrowDown } from "lucide-react";

export default function HeroSection() {
  const handleDownloadResume = () => {
    // Create a link and trigger download
    const link = document.createElement('a');
    link.href = '/api/download-resume';
    link.download = 'Anurag_Patki_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center bg-gradient-to-br from-white via-neutral-50 to-neutral-100"
    >
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I'm Anurag Patki — Java Full‑Stack Developer & AI Enthusiast
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-neutral-600 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Building intelligent, scalable web applications with Java, React, and AI.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-full py-3 px-8 transition-all transform hover:scale-105"
            >
              <a href="#projects">
                View Projects <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
            
            <Button 
              onClick={handleDownloadResume}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white rounded-full py-3 px-8 transition-all transform hover:scale-105"
            >
              Download Résumé <FileDown className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
