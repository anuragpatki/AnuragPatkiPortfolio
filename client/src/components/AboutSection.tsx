import { motion } from "framer-motion";
import { education, workExperience, certifications, professionalSummary, contactInfo } from "@/lib/resume-data";
import { Database, User, GraduationCap, Briefcase, Award, Terminal } from "lucide-react";

export default function AboutSection() {
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
    <section id="about" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <div className="h-px w-12 bg-[#333] mr-4"></div>
          <User className="text-primary w-6 h-6 mr-2" />
          <span className="text-[#888] font-mono text-sm">01.</span>
          <div className="h-px w-12 bg-[#333] ml-4"></div>
        </div>
        
        <motion.h2 
          className="text-3xl font-bold text-center mb-16 font-mono"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary">#</span> About Me
        </motion.h2>
        
        <motion.div 
          className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="md:w-1/3 flex justify-center"
            variants={itemVariants}
          >
            <div className="relative">
              <div className="w-64 h-64 bg-[#1E1E1E] border border-[#333] p-2 overflow-hidden">
                {contactInfo.profileImage ? (
                  <img 
                    src={contactInfo.profileImage} 
                    alt="Anurag Patki" 
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Terminal className="text-primary h-16 w-16" />
                  </div>
                )}
                <div className="absolute top-3 right-3 text-xs text-primary font-mono bg-[#121212] border border-primary px-2 py-1">
                  developer.profile
                </div>
              </div>
              <div className="absolute top-0 left-0 border-t border-l border-primary w-10 h-10 -mt-1 -ml-1"></div>
              <div className="absolute bottom-0 right-0 border-b border-r border-primary w-10 h-10 -mb-1 -mr-1"></div>
            </div>
          </motion.div>
          
          <div className="md:w-2/3">
            <motion.div 
              className="flex items-center mb-4"
              variants={itemVariants}
            >
              <Terminal className="w-5 h-5 mr-3 text-primary" />
              <h3 className="text-2xl font-bold text-white font-mono">
                Professional Summary
              </h3>
            </motion.div>
            
            <motion.div
              className="mb-6 bg-[#1E1E1E] p-4 border-l-4 border-primary"
              variants={itemVariants}
            >
              <div className="font-mono text-xs text-[#888] mb-2">/* professional_summary.js */</div>
              <p className="text-[#E0E0E0] font-mono">
                {professionalSummary}
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6"
              variants={itemVariants}
            >
              <div className="bg-[#1E1E1E] border border-[#333] p-6">
                <div className="flex items-center mb-3">
                  <GraduationCap className="w-5 h-5 mr-2 text-primary" />
                  <h4 className="font-bold text-white font-mono">Education</h4>
                </div>
                <div className="font-mono">
                  <p className="font-medium text-white">{education.degree}</p>
                  <p className="text-[#E0E0E0]">{education.institution}</p>
                  <p className="text-[#888] text-sm">{education.period}</p>
                  <div className="flex items-center mt-1">
                    <span className="text-primary mr-2">CGPA:</span>
                    <span className="text-[#E0E0E0]">{education.gpa}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#1E1E1E] border border-[#333] p-6">
                <div className="flex items-center mb-3">
                  <Briefcase className="w-5 h-5 mr-2 text-primary" />
                  <h4 className="font-bold text-white font-mono">Current Role</h4>
                </div>
                <div className="font-mono">
                  <p className="font-medium text-white">{workExperience[0].role}</p>
                  <p className="text-[#E0E0E0]">{workExperience[0].company}</p>
                  <p className="text-[#888] text-sm">{workExperience[0].period}</p>
                  <div className="mt-1">
                    <span className="inline-flex items-center bg-[#333] px-2 py-1 text-xs">
                      <span className="status-indicator status-active"></span>
                      <span>Active</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-end mt-6"
              variants={itemVariants}
            >
              <a 
                href="#certifications" 
                className="text-primary hover:text-primary/80 transition-all font-mono flex items-center group"
              >
                <span>View my certifications</span>
                <span className="ml-2 text-lg group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
