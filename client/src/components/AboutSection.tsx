import { motion } from "framer-motion";
import { education, workExperience, certifications, professionalSummary } from "@/lib/resume-data";

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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
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
            <div className="w-60 h-60 rounded-full bg-primary flex items-center justify-center text-white text-5xl font-bold shadow-xl">
              AP
            </div>
          </motion.div>
          
          <div className="md:w-2/3">
            <motion.h3 
              className="text-2xl font-bold mb-4"
              variants={itemVariants}
            >
              Professional Summary
            </motion.h3>
            
            <motion.p 
              className="text-lg mb-6 text-neutral-700"
              variants={itemVariants}
            >
              {professionalSummary}
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6"
              variants={itemVariants}
            >
              <div className="bg-neutral-50 rounded-2xl p-6 shadow-sm">
                <h4 className="font-bold mb-2 text-primary">Education</h4>
                <p className="font-medium">{education.degree}</p>
                <p className="text-neutral-600">{education.institution}</p>
                <p className="text-neutral-500 text-sm">{education.period}</p>
                <p className="text-neutral-600">CGPA: {education.gpa}</p>
              </div>
              
              <div className="bg-neutral-50 rounded-2xl p-6 shadow-sm">
                <h4 className="font-bold mb-2 text-primary">Current Role</h4>
                <p className="font-medium">{workExperience[0].role}</p>
                <p className="text-neutral-600">{workExperience[0].company}</p>
                <p className="text-neutral-500 text-sm">{workExperience[0].period}</p>
              </div>
            </motion.div>
            
            <motion.h3 
              className="text-2xl font-bold mb-4"
              variants={itemVariants}
            >
              Certifications
            </motion.h3>
            
            <motion.div 
              className="flex flex-wrap gap-3"
              variants={itemVariants}
            >
              {certifications.map((cert, index) => (
                <span 
                  key={index} 
                  className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm"
                >
                  {cert.name}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
