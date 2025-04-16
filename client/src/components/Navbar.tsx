import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-mobile";
import { Menu, X, Github, Linkedin, Code, Terminal } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Toggle the menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close mobile menu when clicking links
  const closeMenu = () => setIsMenuOpen(false);

  // Handle scroll events for navbar styling changes
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#1E1E1E] shadow-md" : "bg-[#121212]/90 backdrop-blur-md"}`}>
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 bg-primary text-white flex items-center justify-center font-bold text-xl font-mono">
            <Terminal className="w-5 h-5" />
          </div>
          <div className="hidden sm:flex items-center">
            <span className="font-bold text-xl text-white font-mono">Anurag</span>
            <span className="font-bold text-xl text-primary font-mono">Patki</span>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[#E0E0E0] hover:text-primary transition-colors font-mono"
            >
              {link.name}
            </a>
          ))}
        </div>
        
        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="https://github.com/anuragpatki" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#E0E0E0] hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com/in/anurag-patki" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#E0E0E0] hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <div className="flex items-center ml-4 bg-[#1E1E1E] px-3 py-1 border border-[#333]">
            <span className="status-indicator status-active"></span>
            <span className="text-[#E0E0E0] text-sm font-mono">Available for work</span>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-[#E0E0E0]" 
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      {isMobile && (
        <motion.div 
          className={`md:hidden bg-[#1E1E1E] border-t border-[#333] ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={false}
          animate={isMenuOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: "auto" },
            closed: { opacity: 0, height: 0 }
          }}
        >
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            {navLinks.map(link => (
              <a 
                key={link.name}
                href={link.href} 
                className="py-2 text-[#E0E0E0] hover:text-primary transition-colors font-mono border-b border-[#333]"
                onClick={closeMenu}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 pt-2">
              <a 
                href="https://github.com/anuragpatki" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#E0E0E0] hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/anurag-patki" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#E0E0E0] hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
