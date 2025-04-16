import { motion } from "framer-motion";
import { projectsData } from "@/lib/resume-data";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github, Info, Code, Terminal, Braces } from "lucide-react";

export default function ProjectsSection() {
  // Get the featured project
  const featuredProject = projectsData.find(project => project.featured);
  // Get the other projects
  const otherProjects = projectsData.filter(project => !project.featured);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <div className="h-px w-12 bg-[#333] mr-4"></div>
          <Terminal className="text-primary w-6 h-6 mr-2" />
          <span className="text-[#888] font-mono text-sm">02.</span>
          <div className="h-px w-12 bg-[#333] ml-4"></div>
        </div>
        
        <motion.h2 
          className="text-3xl font-bold text-center mb-16 font-mono"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary">{'{'}</span>
          My Projects
          <span className="text-primary">{'}'}</span>
        </motion.h2>
        
        {/* Featured Project */}
        {featuredProject && (
          <div className="mb-20">
            <motion.h3 
              className="text-xl font-bold mb-6 text-center text-[#E0E0E0] font-mono"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="text-primary">/**</span> Featured Project <span className="text-primary">*/</span>
            </motion.h3>
            
            <motion.div 
              className="dev-card bg-[#1E1E1E] overflow-hidden max-w-6xl mx-auto transform transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                  <div className="absolute top-0 left-0 bg-[#1E1E1E] border-r border-b border-[#333] px-3 py-1 z-10 font-mono text-xs text-[#888]">
                    <Code className="inline-block mr-1 w-4 h-4 text-primary" /> project_screenshot.png
                  </div>
                  <img 
                    src={featuredProject.imageUrl}
                    alt={`${featuredProject.title} Project Screenshot`}
                    className="w-full h-full object-cover object-center brightness-75"
                  />
                </div>
                <div className="lg:w-1/2 p-6 lg:p-8">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold text-white font-mono">{featuredProject.title}</h4>
                    <span className="bg-primary text-white text-xs px-3 py-1 font-mono">
                      {featuredProject.role}
                    </span>
                  </div>
                  
                  <p className="text-[#E0E0E0] mb-4 font-mono text-sm">
                    {featuredProject.description}
                  </p>
                  
                  <div className="code-block mb-4" data-language="Features">
                    <h5 className="font-bold text-primary mb-2 font-mono">// Key Features</h5>
                    <ul className="list-none ml-2 text-[#E0E0E0] space-y-1">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">→</span> 
                        <span className="font-mono text-sm">Attendance tracking with AI-powered facial recognition</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">→</span> 
                        <span className="font-mono text-sm">Engagement monitoring analyzing facial expressions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">→</span> 
                        <span className="font-mono text-sm">Utilized DeepFace, OpenCV, VGG, MoveNet, TensorFlow</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.techStack.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-[#333] text-[#E0E0E0] text-xs px-3 py-1 font-mono inline-flex items-center"
                      >
                        <Braces className="inline-block mr-1 w-3 h-3 text-primary" />{tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-4 border-t border-[#333] pt-4">
                    {featuredProject.liveUrl && (
                      <a 
                        href={featuredProject.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-primary hover:text-primary/80 font-medium flex items-center transition-colors font-mono"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Visit Website
                      </a>
                    )}
                    
                    {featuredProject.githubUrl && (
                      <a 
                        href={featuredProject.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#E0E0E0] hover:text-primary font-medium flex items-center transition-colors font-mono"
                      >
                        <Github className="mr-2 h-4 w-4" /> View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
        
        {/* Other Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 gap-12 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {otherProjects.map((project) => (
            <motion.div 
              key={project.id}
              className="dev-card bg-[#1E1E1E] overflow-hidden transform transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                  <div className="absolute top-0 left-0 bg-[#1E1E1E] border-r border-b border-[#333] px-3 py-1 z-10 font-mono text-xs text-[#888]">
                    <Code className="inline-block mr-1 w-4 h-4 text-primary" /> project_screenshot.png
                  </div>
                  <img 
                    src={project.imageUrl}
                    alt={`${project.title} Project Screenshot`}
                    className="w-full h-full object-cover object-center brightness-75"
                  />
                </div>
                <div className="lg:w-1/2 p-6 lg:p-8">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold text-white font-mono">{project.title}</h4>
                    <span className="bg-primary text-white text-xs px-3 py-1 font-mono">
                      {project.role}
                    </span>
                  </div>
                  
                  <p className="text-[#E0E0E0] mb-4 font-mono text-sm">
                    {project.description}
                  </p>
                  
                  <div className="code-block mb-4" data-language="Features">
                    <h5 className="font-bold text-primary mb-2 font-mono">// Key Features</h5>
                    <ul className="list-none ml-2 text-[#E0E0E0] space-y-1">
                      {project.id === "graphical-password" && (
                        <>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">→</span> 
                            <span className="font-mono text-sm">Secure and user-friendly alternative to text passwords</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">→</span> 
                            <span className="font-mono text-sm">Pattern-based authentication using custom graphics</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">→</span> 
                            <span className="font-mono text-sm">Enhanced security through visual memory capabilities</span>
                          </li>
                        </>
                      )}
                      
                      {project.id === "fire-alarm" && (
                        <>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">→</span> 
                            <span className="font-mono text-sm">Rapid fire detection and notification system</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">→</span> 
                            <span className="font-mono text-sm">Arduino-based implementation with IoT connectivity</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">→</span> 
                            <span className="font-mono text-sm">Automated emergency response triggering capabilities</span>
                          </li>
                        </>
                      )}
                      
                      {project.id === "image-recommendation" && (
                        <>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">→</span> 
                            <span className="font-mono text-sm">Deep learning-powered image analysis with ResNet</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">→</span> 
                            <span className="font-mono text-sm">Personalized content recommendations based on user preferences</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">→</span> 
                            <span className="font-mono text-sm">High-accuracy classification and similarity detection</span>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-[#333] text-[#E0E0E0] text-xs px-3 py-1 font-mono inline-flex items-center"
                      >
                        <Braces className="inline-block mr-1 w-3 h-3 text-primary" />{tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-4 border-t border-[#333] pt-4">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-primary hover:text-primary/80 font-medium flex items-center transition-colors font-mono"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Visit Website
                      </a>
                    )}
                    
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#E0E0E0] hover:text-primary font-medium flex items-center transition-colors font-mono"
                      >
                        <Github className="mr-2 h-4 w-4" /> View Code
                      </a>
                    )}
                    
                    {!project.githubUrl && !project.liveUrl && (
                      <span className="text-[#888] font-medium flex items-center font-mono">
                        <Info className="mr-2 h-4 w-4" /> Project details available on request
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
