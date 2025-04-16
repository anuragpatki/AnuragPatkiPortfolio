import { contactInfo } from "@/lib/resume-data";
import { Github, Linkedin, Code, Terminal, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-[#121212] border-t border-[#333] py-12 font-mono">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 bg-primary text-white flex items-center justify-center">
                <Terminal className="h-5 w-5" />
              </div>
              <div>
                <div className="flex items-center">
                  <span className="text-primary mr-1">&lt;</span>
                  <span className="text-white font-bold">Anurag</span>
                  <span className="text-primary">Patki</span>
                  <span className="text-primary ml-1">/&gt;</span>
                </div>
                <div className="flex items-center text-xs text-[#888]">
                  <span className="text-primary mr-1">$</span>
                  <span className="typing-text">Full-Stack Developer & AI Enthusiast</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map(link => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-[#E0E0E0] hover:text-primary transition-colors flex items-center"
              >
                <span className="text-primary text-xs mr-1">#</span>
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="mt-6 md:mt-0">
            <div className="flex space-x-4">
              <a 
                href={contactInfo.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#1E1E1E] hover:bg-primary/10 border border-[#333] hover:border-primary/50 text-[#E0E0E0] p-2 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href={contactInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#1E1E1E] hover:bg-primary/10 border border-[#333] hover:border-primary/50 text-[#E0E0E0] p-2 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#333] mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-[#888]">
            <div className="flex items-center mb-4 md:mb-0">
              <Code className="h-4 w-4 mr-2 text-primary" />
              <span>Designed & Built by Anurag Patki</span>
            </div>
            
            <div className="flex items-center text-xs">
              <span className="text-primary">const</span> <span className="text-[#E0E0E0]">lastUpdated</span> <span className="text-primary">=</span> <span className="text-white">'April 2025'</span>
            </div>
            
            <div className="flex items-center mt-4 md:mt-0">
              <span className="text-[#E0E0E0] mr-2">&copy; {currentYear}</span>
              <span className="text-primary mr-1">with</span>
              <Heart className="h-3 w-3 text-red-500 mr-1" fill="#ef4444" />
              <span className="text-primary">& code</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center text-xs text-[#666] font-mono">
          <pre className="inline-block bg-[#1E1E1E] border border-[#333] px-4 py-2">
            <code>// Always coding, always learning</code>
          </pre>
        </div>
      </div>
    </footer>
  );
}
