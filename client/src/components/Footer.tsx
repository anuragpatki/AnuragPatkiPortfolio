import { contactInfo } from "@/lib/resume-data";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-neutral-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                AP
              </div>
              <span className="font-bold text-xl">Anurag Patki</span>
            </div>
            <p className="text-neutral-400 mt-2">Java Full-Stack Developer & AI Enthusiast</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map(link => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-neutral-300 hover:text-white transition-colors"
              >
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
                className="text-neutral-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href={contactInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 mt-8 pt-8 text-center text-neutral-400">
          <p>&copy; {currentYear} Anurag Patki. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
