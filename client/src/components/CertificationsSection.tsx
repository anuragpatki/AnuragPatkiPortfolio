import { motion } from "framer-motion";
import { certifications } from "@/lib/resume-data";
import { Award, Code, BookOpen } from "lucide-react";

export default function CertificationsSection() {
  // Group certifications by issuer
  const certificationsByIssuer = certifications.reduce((groups, cert) => {
    if (!groups[cert.issuer]) {
      groups[cert.issuer] = [];
    }
    groups[cert.issuer].push(cert);
    return groups;
  }, {} as Record<string, typeof certifications>);

  // Animation variants
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

  // Get icon for issuer
  const getIssuerIcon = (issuer: string) => {
    switch (issuer) {
      case "Google":
        return <Code className="w-5 h-5 text-primary" />;
      case "LinkedIn Learning":
        return <BookOpen className="w-5 h-5 text-primary" />;
      default:
        return <Award className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <section id="certifications" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <div className="h-px w-12 bg-[#333] mr-4"></div>
          <Award className="text-primary w-6 h-6 mr-2" />
          <span className="text-[#888] font-mono text-sm">05.</span>
          <div className="h-px w-12 bg-[#333] ml-4"></div>
        </div>
        
        <motion.h2 
          className="text-3xl font-bold text-center mb-16 font-mono"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary">{"<"}</span>
          Certifications
          <span className="text-primary">{">"}</span>
        </motion.h2>
        
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.entries(certificationsByIssuer).map(([issuer, certs], issuerIndex) => (
            <motion.div 
              key={issuer}
              className="mb-12"
              variants={itemVariants}
            >
              <div className="bg-[#1E1E1E] border border-[#333] p-6 mb-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 bg-primary/10 border border-primary/30 text-primary flex items-center justify-center mr-4">
                    {getIssuerIcon(issuer)}
                  </div>
                  <div className="font-mono">
                    <div className="text-[#888] text-sm">// certification_provider.js</div>
                    <h3 className="text-xl text-[#E0E0E0] font-semibold">{issuer}</h3>
                  </div>
                </div>
                
                <div className="pl-14">
                  <div className="text-[#888] mb-3 font-mono text-sm">
                    <span className="text-primary">const</span> certifications <span className="text-primary">=</span> {`[`}
                  </div>
                  
                  <ul className="space-y-3 mb-3">
                    {certs.map((cert, index) => (
                      <li key={index} className="font-mono text-[#E0E0E0] pl-6 border-l border-[#333]">
                        <div className="flex items-start">
                          <code className="text-primary mr-2">•</code>
                          <div>
                            <span className="font-mono">{cert.name}</span>
                            <div className="text-xs text-[#888] mt-1">
                              <span className="text-primary mr-1">//</span> 
                              {cert.category}
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-[#888] font-mono text-sm">{`]`}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}