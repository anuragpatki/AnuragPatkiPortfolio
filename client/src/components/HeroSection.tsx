import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileDown, ArrowDown, Code, Terminal, Database, TerminalSquare, FileText } from "lucide-react";
import { contactInfo } from "@/lib/resume-data";

export default function HeroSection() {
  // Download and view resume are handled through links directly

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center bg-[#121212] relative overflow-hidden"
    >
      {/* Developer elements overlay */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-[10%] left-[5%] text-[#333] text-7xl">
          <Terminal />
        </div>
        <div className="absolute top-[30%] right-[10%] text-[#333] text-7xl">
          <Code />
        </div>
        <div className="absolute bottom-[20%] left-[15%] text-[#333] text-7xl">
          <Database />
        </div>
        <div className="absolute top-[60%] right-[20%] text-[#333] text-7xl">
          <TerminalSquare />
        </div>
        <div className="absolute text-xs text-[#444] whitespace-pre font-mono top-[5%] left-[25%]">
{`function optimizeCode(algorithm) {
  const optimized = analyze(algorithm);
  return enhancePerformance(optimized);
}`}
        </div>
        <div className="absolute text-xs text-[#444] whitespace-pre font-mono bottom-[15%] right-[5%]">
{`class AISystem {
  constructor() {
    this.models = [];
    this.accuracy = 0;
  }
  
  train(data) {
    // Implementation
  }
}`}
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block border border-[#333] bg-[#1E1E1E] px-3 py-1 mb-6">
            <code className="text-[#E0E0E0] font-mono text-sm">// Java Full-Stack Developer & AI Enthusiast</code>
          </div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-primary">{`<`}</span>
            Anurag Patki
            <span className="text-primary">{`/>`}</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-[#E0E0E0] mb-10 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Building intelligent, scalable web applications 
            <br className="hidden md:block" /> 
            with <span className="text-primary">Java</span>, <span className="text-secondary">React</span>, and <span className="text-primary">AI</span>.
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
              className="bg-primary hover:bg-primary/90 text-white py-3 px-8 transition-all font-mono"
            >
              <a href="#projects">
                <span className="mr-2">{'{'}</span>
                View Projects 
                <span className="ml-2">{'}'}</span>
                <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white py-3 px-8 transition-all font-mono"
            >
              <a href={contactInfo.resumeViewLink} target="_blank" rel="noopener noreferrer">
                <span className="mr-2">{'<'}</span>
                View Resume
                <span className="ml-2">{'>'}</span>
                <FileText className="ml-2 h-4 w-4" />
              </a>
            </Button>

            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-secondary text-secondary hover:bg-secondary hover:text-white py-3 px-8 transition-all font-mono"
            >
              <a href={contactInfo.resumeDownloadLink} download="Anurag_Patki_Resume.pdf">
                <span className="mr-2">{'{'}</span>
                Download CV
                <span className="ml-2">{'}'}</span>
                <FileDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
          
          <motion.div
            className="mt-16 inline-block terminal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="font-mono text-sm text-[#E0E0E0]">
              <span className="text-primary">user@portfolio</span>:<span className="text-secondary">~</span>$ Status: <span className="status-indicator status-active"></span><span>Available for work</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
