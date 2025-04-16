import { motion } from "framer-motion";
import { projectsData } from "@/lib/resume-data";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github, Info } from "lucide-react";

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
    <section id="projects" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        
        {/* Featured Project */}
        {featuredProject && (
          <div className="mb-20">
            <motion.h3 
              className="text-2xl font-bold mb-6 text-center"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Featured Project
            </motion.h3>
            
            <motion.div 
              className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-6xl mx-auto transform transition hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2">
                  <img 
                    src={featuredProject.imageUrl}
                    alt={`${featuredProject.title} Project Screenshot`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="lg:w-1/2 p-6 lg:p-8">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold">{featuredProject.title}</h4>
                    <span className="bg-primary text-white text-xs px-3 py-1 rounded-full">
                      {featuredProject.role}
                    </span>
                  </div>
                  
                  <p className="text-neutral-600 mb-4">
                    {featuredProject.description}
                  </p>
                  
                  <h5 className="font-bold text-primary mb-2">Key Features</h5>
                  <ul className="list-disc list-inside mb-6 text-neutral-600">
                    <li>Attendance tracking with AI-powered facial recognition</li>
                    <li>Engagement monitoring analyzing facial expressions and body language</li>
                    <li>Utilized DeepFace, OpenCV, VGG, MoveNet, TensorFlow</li>
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.techStack.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-neutral-100 text-neutral-600 text-xs px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {featuredProject.liveUrl && (
                      <a 
                        href={featuredProject.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-primary hover:text-primary/80 font-medium flex items-center transition-colors"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Visit Website
                      </a>
                    )}
                    
                    {featuredProject.githubUrl && (
                      <a 
                        href={featuredProject.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-neutral-700 hover:text-primary font-medium flex items-center transition-colors"
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
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {otherProjects.map((project) => (
            <motion.div 
              key={project.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden transform transition hover:shadow-lg"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <img 
                src={project.imageUrl}
                alt={`${project.title} Project`}
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold">{project.title}</h4>
                  <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
                    {project.role}
                  </span>
                </div>
                
                <p className="text-neutral-600 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-neutral-100 text-neutral-600 text-xs px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href="#" 
                  className="text-primary hover:text-primary/80 font-medium flex items-center transition-colors"
                >
                  <Info className="mr-2 h-4 w-4" /> View Details
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
