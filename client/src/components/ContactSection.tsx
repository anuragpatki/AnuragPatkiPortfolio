import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Terminal, MessageSquare, FileDown, Code } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { contactInfo } from "@/lib/resume-data";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
        variant: "default",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section id="contact" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <div className="h-px w-12 bg-[#333] mr-4"></div>
          <MessageSquare className="text-primary w-6 h-6 mr-2" />
          <span className="text-[#888] font-mono text-sm">04.</span>
          <div className="h-px w-12 bg-[#333] ml-4"></div>
        </div>
        
        <motion.h2 
          className="text-3xl font-bold text-center mb-16 font-mono"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary">{"{"}</span>
          Get In Touch
          <span className="text-primary">{"}"}</span>
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div 
            className="lg:w-3/5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-[#1E1E1E] border border-[#333] p-8"
              variants={itemVariants}
            >
              <div className="flex items-center mb-6">
                <div className="h-8 w-8 bg-primary text-white flex items-center justify-center mr-3">
                  <Terminal className="h-4 w-4" />
                </div>
                <div className="font-mono text-white">
                  <div className="text-sm text-[#888]">// contact_form.js</div>
                  <div>Send me a message</div>
                </div>
              </div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#E0E0E0] font-medium font-mono flex items-center">
                          <span className="text-primary mr-2">const</span>
                          your_name
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Doe" 
                            {...field} 
                            className="px-4 py-3 border border-[#333] bg-[#121212] text-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-mono"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#E0E0E0] font-medium font-mono flex items-center">
                          <span className="text-primary mr-2">let</span>
                          email_address
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="john@example.com" 
                            type="email" 
                            {...field} 
                            className="px-4 py-3 border border-[#333] bg-[#121212] text-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-mono"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#E0E0E0] font-medium font-mono flex items-center">
                          <span className="text-primary mr-2">function</span>
                          your_message() {'{'} 
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="return 'Your message here';" 
                            rows={5} 
                            {...field} 
                            className="px-4 py-3 border border-[#333] bg-[#121212] text-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-mono"
                          />
                        </FormControl>
                        <div className="text-[#E0E0E0] font-mono">{'}'}</div>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 transition-colors flex items-center justify-center font-mono"
                    disabled={isSubmitting}
                  >
                    <span className="mr-2">{'{'}</span>
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                    <span className="mx-2">{'}'}</span>
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Form>
            </motion.div>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div 
            className="lg:w-2/5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-[#1E1E1E] border border-[#333] p-8 h-full font-mono"
              variants={itemVariants}
            >
              <div className="flex items-center mb-6">
                <div className="h-8 w-8 bg-primary text-white flex items-center justify-center mr-3">
                  <Code className="h-4 w-4" />
                </div>
                <div className="text-white">
                  <div className="text-sm text-[#888]">// contact_info.js</div>
                  <div>Reach out anytime</div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#121212] text-primary p-3 border border-[#333] mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[#888]">// Email</div>
                    <h4 className="font-medium text-white">
                      <span className="text-primary">const</span> email
                    </h4>
                    <a 
                      href={`mailto:${contactInfo.email}`} 
                      className="text-[#E0E0E0] hover:text-primary transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#121212] text-primary p-3 border border-[#333] mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[#888]">// Phone</div>
                    <h4 className="font-medium text-white">
                      <span className="text-primary">const</span> phone
                    </h4>
                    <a 
                      href={`tel:${contactInfo.phone}`} 
                      className="text-[#E0E0E0] hover:text-primary transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#121212] text-primary p-3 border border-[#333] mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[#888]">// Location</div>
                    <h4 className="font-medium text-white">
                      <span className="text-primary">const</span> location
                    </h4>
                    <p className="text-[#E0E0E0]">{contactInfo.location}</p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-[#333]">
                  <div className="text-[#888] mb-3">// Social Profiles</div>
                  <div className="flex space-x-4">
                    <a 
                      href={contactInfo.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-[#121212] hover:bg-primary/10 border border-[#333] hover:border-primary text-[#E0E0E0] p-3 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a 
                      href={contactInfo.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-[#121212] hover:bg-primary/10 border border-[#333] hover:border-primary text-[#E0E0E0] p-3 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button 
                    asChild
                    variant="outline"
                    className="bg-transparent border-primary text-primary hover:bg-primary hover:text-white transition-colors font-mono flex items-center"
                  >
                    <a href="/api/download-resume" download="Anurag_Patki_Resume.pdf">
                      <FileDown className="mr-2 h-4 w-4" />
                      <span className="mr-1">downloadResume()</span>
                    </a>
                  </Button>
                </div>
                
                <div className="pt-4 text-xs text-[#888]">
                  <div className="terminal p-3">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-green-400">
                      $ status --available-for-hire<br />
                      <span className="text-[#E0E0E0]">
                        <span className="status-indicator status-active"></span> Currently available for new opportunities
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
