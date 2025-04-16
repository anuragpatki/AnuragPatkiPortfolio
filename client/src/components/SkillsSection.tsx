import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { skillsData } from "@/lib/resume-data";
import { Code, Cpu, Database, Brain, Wrench, Users, Terminal } from "lucide-react";

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setShouldAnimate(true), 300);
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Map category names to appropriate icons
  const getCategoryIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'programming':
        return <Code className="w-5 h-5 mr-3 text-primary" />;
      case 'frontend':
        return <Cpu className="w-5 h-5 mr-3 text-primary" />;
      case 'databases':
        return <Database className="w-5 h-5 mr-3 text-primary" />;
      case 'ai/ml':
        return <Brain className="w-5 h-5 mr-3 text-primary" />;
      case 'tools & cloud':
        return <Wrench className="w-5 h-5 mr-3 text-primary" />;
      case 'soft skills':
        return <Users className="w-5 h-5 mr-3 text-primary" />;
      default:
        return <Code className="w-5 h-5 mr-3 text-primary" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-[#1E1E1E]" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <div className="h-px w-12 bg-[#333] mr-4"></div>
          <Code className="text-primary w-6 h-6 mr-2" />
          <span className="text-[#888] font-mono text-sm">03.</span>
          <div className="h-px w-12 bg-[#333] ml-4"></div>
        </div>
        
        <motion.h2 
          className="text-3xl font-bold text-center mb-16 font-mono"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary">{'<'}</span>
          My Skills
          <span className="text-primary">{'/>'}</span>
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          viewport={{ once: true }}
        >
          {skillsData.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              className="bg-[#121212] border border-[#333] p-6"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold mb-6 text-white flex items-center font-mono">
                {getCategoryIcon(category.name)}
                {category.name}
              </h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-[#E0E0E0] font-mono">{skill.name}</span>
                      <span className="text-primary font-mono">{skill.proficiency}%</span>
                    </div>
                    <div className="skill-progress">
                      <motion.div 
                        className="skill-progress-fill"
                        initial={{ width: "0%" }}
                        animate={{ width: shouldAnimate ? `${skill.proficiency}%` : "0%" }}
                        transition={{ duration: 1, delay: 0.1 * skillIndex }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 max-w-4xl mx-auto bg-[#121212] border border-[#333] p-6">
          <div className="flex items-center mb-4">
            <Terminal className="w-5 h-5 mr-3 text-primary" />
            <h3 className="text-xl font-bold text-white font-mono">Terminal Output</h3>
          </div>
          <div className="terminal">
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="font-mono text-sm text-green-400">
              <div className="mb-1">$ skill --check proficiency</div>
              <div className="mb-1 text-[#E0E0E0]">Checking skill proficiency levels...</div>
              <div className="mb-1 text-[#E0E0E0]">
                <span className="text-primary">→</span> Java: ████████████████████ 95%
              </div>
              <div className="mb-1 text-[#E0E0E0]">
                <span className="text-primary">→</span> Problem Solving: ████████████████████ 95%
              </div>
              <div className="mb-1 text-[#E0E0E0]">
                <span className="text-primary">→</span> IDEs (Eclipse, VSCode): ████████████████████ 95%
              </div>
              <div className="mb-1 text-green-400">$ status --show</div>
              <div className="flex items-center">
                <span className="status-indicator status-active"></span>
                <span className="text-[#E0E0E0]">Ready for new challenges</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
