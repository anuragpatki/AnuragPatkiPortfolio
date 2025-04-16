export type Skill = {
  name: string;
  proficiency: number;
};

export type SkillCategory = {
  name: string;
  icon: string;
  skills: Skill[];
};

export type Project = {
  id: string;
  title: string;
  role: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
};

export type Certification = {
  name: string;
  issuer: string;
  category: string;
};

export type Education = {
  degree: string;
  institution: string;
  period: string;
  gpa: string;
};

export type WorkExperience = {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
  githubUrl?: string;
};

// Resume data
export const skillsData: SkillCategory[] = [
  {
    name: "Programming",
    icon: "fa-code",
    skills: [
      { name: "Java", proficiency: 95 },
      { name: "Python", proficiency: 85 },
      { name: "C/C++", proficiency: 80 }
    ]
  },
  {
    name: "Frontend",
    icon: "fa-laptop-code",
    skills: [
      { name: "HTML/CSS", proficiency: 90 },
      { name: "JavaScript", proficiency: 85 },
      { name: "Angular", proficiency: 75 }
    ]
  },
  {
    name: "Databases",
    icon: "fa-database",
    skills: [
      { name: "MySQL", proficiency: 90 },
      { name: "MongoDB", proficiency: 80 },
      { name: "SQL", proficiency: 85 }
    ]
  },
  {
    name: "AI/ML",
    icon: "fa-brain",
    skills: [
      { name: "TensorFlow", proficiency: 85 },
      { name: "OpenCV", proficiency: 80 },
      { name: "Deep Learning", proficiency: 75 }
    ]
  },
  {
    name: "Tools & Cloud",
    icon: "fa-tools",
    skills: [
      { name: "Git/GitHub", proficiency: 90 },
      { name: "AWS", proficiency: 75 },
      { name: "IDEs (Eclipse, VSCode)", proficiency: 95 }
    ]
  },
  {
    name: "Soft Skills",
    icon: "fa-users",
    skills: [
      { name: "Team Leadership", proficiency: 90 },
      { name: "Problem Solving", proficiency: 95 },
      { name: "Communication", proficiency: 85 }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "edumetrics",
    title: "EduMetrics",
    role: "Team Leader",
    description: "A revolutionary step in education featuring AI-powered facial recognition for attendance tracking and engagement monitoring through facial expressions, body language, and gestures.",
    techStack: ["Java", "TensorFlow", "OpenCV", "DeepFace", "JavaScript"],
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    liveUrl: "https://edumetrics.netlify.app/",
    githubUrl: "https://github.com/anuragpatki",
    featured: true
  },
  {
    id: "graphical-password",
    title: "Graphical Password Authentication",
    role: "Team Leader",
    description: "A novel authentication system using graphical passwords as a secure and user-friendly alternative to traditional text passwords.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    featured: false
  },
  {
    id: "fire-alarm",
    title: "Fire Alarm System",
    role: "Team Leader",
    description: "An IoT-powered fire alarm system using Arduino, ensuring swift and effective response to fire emergencies.",
    techStack: ["Arduino", "IoT", "C++"],
    imageUrl: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    featured: false
  },
  {
    id: "image-recommendation",
    title: "Image Recommendation System",
    role: "Developer",
    description: "A system using ResNet for personalized, high-accuracy content recommendations based on image analysis.",
    techStack: ["Python", "ResNet", "Deep Learning"],
    imageUrl: "https://images.unsplash.com/photo-1558346547-4439467bd1d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    featured: false
  }
];

export const certifications: Certification[] = [
  // Google Certifications
  { 
    name: "Introduction to Generative AI", 
    issuer: "Google",
    category: "AI & Machine Learning"
  },
  { 
    name: "Introduction to Large Language Models", 
    issuer: "Google",
    category: "AI & Machine Learning"
  },
  { 
    name: "Introduction to Responsible AI", 
    issuer: "Google",
    category: "AI & Machine Learning"
  },
  { 
    name: "Generative AI Fundamentals", 
    issuer: "Google",
    category: "AI & Machine Learning"
  },
  
  // Capgemini, Edubridge Certification
  { 
    name: "Certified Java Full Stack Professional", 
    issuer: "Capgemini, Edubridge",
    category: "Software Development"
  },
  
  // State Institute of Information Technology Certifications
  { 
    name: "Certificate course in C programming", 
    issuer: "State Institute of Information Technology",
    category: "Programming Languages"
  },
  { 
    name: "Certificate course in C++ programming", 
    issuer: "State Institute of Information Technology",
    category: "Programming Languages"
  },
  { 
    name: "Certificate course in Java programming", 
    issuer: "State Institute of Information Technology",
    category: "Programming Languages"
  },
  
  // LinkedIn Learning Certification
  { 
    name: "Generative AI: The Evolution of Thoughtful Online Search", 
    issuer: "LinkedIn Learning",
    category: "AI & Machine Learning"
  }
];

export const education: Education = {
  degree: "B.Tech in Computer Science and Engineering",
  institution: "Dr. Babasaheb Ambedkar Technological University",
  period: "Jun 2020 – Jun 2024",
  gpa: "8.10/10.0"
};

export const workExperience: WorkExperience[] = [
  {
    role: "Java Full Stack Developer",
    company: "ACME Infovision Systems Pvt. Ltd.",
    period: "Feb 2024 – Present",
    responsibilities: [
      "Automated data extraction and integration from databases to Google Sheets, improving accessibility and accuracy.",
      "Developing an image recommendation system using ResNet, optimizing deep learning for personalized, high-accuracy content suggestions."
    ],
    githubUrl: "https://github.com/anuragpatki/Acme-Infovision-Projects"
  },
  {
    role: "Java Developer Intern",
    company: "Oasis Infobyte",
    period: "Sep 2023 – Oct 2023",
    responsibilities: [
      "Successfully developed various Java applications like an online reservation system, a number guessing game with three difficulty levels, an ATM interface, an online examination portal, and a digital library management system."
    ],
    githubUrl: "https://github.com/anuragpatki/OIBSIP"
  }
];

export const professionalSummary = "Java Full Stack Developer with expertise in AI-driven solutions, database management, and full-Stack development. Proficient in Java, Python, SQL, and AI frameworks. Led projects in AI-powered facial recognition, IoT, and authentication systems. Strong problem solving, leadership, and cloud technology experience (AWS, GitHub).";

export const contactInfo = {
  email: "patkianurag@gmail.com",
  phone: "+91 8263060120",
  location: "India",
  github: "https://github.com/anuragpatki",
  linkedin: "https://linkedin.com/in/anurag-patki",
  profileImage: "/assets/anurag_profile.jpg"
};
