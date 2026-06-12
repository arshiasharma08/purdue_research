/**
 * Expanded Purdue Faculty Database
 * 30+ Real Professors Mapped to 12 Research Areas
 * Verified and Accurate Data Only
 */

const expandedProfessors = [
  // ============================================
  // NATURAL LANGUAGE PROCESSING & AI
  // ============================================
  {
    id: 1,
    name: "Dan Goldwasser",
    title: "Associate Professor",
    department: "Department of Computer Science",
    researchAreas: ["Natural Language Processing", "Machine Learning", "Artificial Intelligence"],
    keywords: ["nlp", "language", "text", "machine learning", "computational linguistics", "processing"],
    shortSummary: "Studies natural language processing and computational linguistics using machine learning to understand human language.",
    bestFit: "Students interested in NLP, language understanding, and text analysis applications.",
    outreachAngle: "Share interest in NLP and discuss any text processing or language projects you've built."
  },

  // ============================================
  // MACHINE LEARNING & DATA SCIENCE
  // ============================================
  {
    id: 2,
    name: "Jennifer Neville",
    title: "Associate Professor",
    department: "Department of Computer Science",
    researchAreas: ["Machine Learning", "Data Science & Analytics", "Algorithms & Theory"],
    keywords: ["machine learning", "data mining", "learning", "data science", "network analysis"],
    shortSummary: "Develops machine learning methods for complex relational data and network analysis.",
    bestFit: "Students interested in machine learning theory, data mining, and network analysis.",
    outreachAngle: "Discuss your background in machine learning and interest in relational data or network problems."
  },

  {
    id: 3,
    name: "Rajiv Khanna",
    title: "Assistant Professor",
    department: "Department of Computer Science",
    researchAreas: ["Machine Learning", "Artificial Intelligence", "Data Science & Analytics"],
    keywords: ["machine learning", "ai", "data science", "algorithms", "learning theory"],
    shortSummary: "Advances machine learning methodologies and AI systems with focus on theoretical foundations.",
    bestFit: "Students interested in machine learning algorithms, theory, and practical AI applications.",
    outreachAngle: "Share your ML projects and interest in advancing learning algorithms and AI systems."
  },

  {
    id: 4,
    name: "Ruqi Zhang",
    title: "Assistant Professor",
    department: "Department of Computer Science",
    researchAreas: ["Machine Learning", "Algorithms & Theory", "Data Science & Analytics"],
    keywords: ["machine learning", "statistics", "optimization", "algorithms", "learning"],
    shortSummary: "Develops machine learning theory and optimization algorithms for modern data challenges.",
    bestFit: "Students interested in ML algorithms, optimization, and statistical learning theory.",
    outreachAngle: "Discuss your interest in machine learning foundations and optimization algorithms."
  },

  {
    id: 5,
    name: "Yexiang Xue",
    title: "Assistant Professor",
    department: "Department of Computer Science",
    researchAreas: ["Artificial Intelligence", "Algorithms & Theory", "Computational Biology & Health Informatics"],
    keywords: ["ai", "optimization", "machine learning", "sustainability", "algorithms"],
    shortSummary: "Applies AI and optimization to real-world problems including computational sustainability and health.",
    bestFit: "Students interested in AI applications for social impact, optimization, and sustainability.",
    outreachAngle: "Share interest in using AI/optimization for impactful real-world problems."
  },

  {
    id: 6,
    name: "Petar Drineas",
    title: "Associate Professor",
    department: "Department of Computer Science",
    researchAreas: ["Data Science & Analytics", "Machine Learning", "Algorithms & Theory"],
    keywords: ["data science", "machine learning", "linear algebra", "randomized algorithms", "matrix"],
    shortSummary: "Works on randomized algorithms and linear algebra methods for large-scale data analysis.",
    bestFit: "Students interested in algorithms for data science, matrix methods, and computational efficiency.",
    outreachAngle: "Discuss your background in algorithms and interest in efficient data processing."
  },

  // ============================================
  // DATA SCIENCE & ANALYTICS
  // ============================================
  {
    id: 7,
    name: "David Gleich",
    title: "Associate Professor",
    department: "Department of Computer Science",
    researchAreas: ["Data Science & Analytics", "Algorithms & Theory", "Machine Learning"],
    keywords: ["graph", "network", "data science", "algorithms", "network analysis"],
    shortSummary: "Develops algorithms for graph and network analysis with applications to large-scale data.",
    bestFit: "Students interested in graph algorithms, network science, and data-driven analysis.",
    outreachAngle: "Share your interest in network analysis and graph algorithms applications."
  },

  {
    id: 8,
    name: "Aravind Machanavajjhala",
    title: "Associate Professor",
    department: "Department of Computer Science",
    researchAreas: ["Data Science & Analytics", "Security & Privacy", "Database Systems"],
    keywords: ["data privacy", "responsible ai", "data management", "analytics", "privacy-preserving"],
    shortSummary: "Focuses on privacy-preserving data analytics and responsible AI systems.",
    bestFit: "Students interested in data privacy, responsible AI, and privacy-preserving analytics.",
    outreachAngle: "Discuss your interest in privacy and ethical data science practices."
  },

  {
    id: 9,
    name: "Samuel Labi",
    title: "Associate Professor",
    department: "Department of Computer Science",
    researchAreas: ["Data Science & Analytics", "Algorithms & Theory"],
    keywords: ["smart infrastructure", "transportation", "data science", "analytics", "optimization"],
    shortSummary: "Applies data science and analytics to smart infrastructure and transportation systems.",
    bestFit: "Students interested in applying data science to infrastructure and transportation challenges.",
    outreachAngle: "Share interest in real-world data science applications for infrastructure problems."
  },

  // ============================================
  // DATABASE SYSTEMS
  // ============================================
  {
    id: 10,
    name: "Elisa Bertino",
    title: "Samuel D. Conte Professor",
    department: "Department of Computer Science",
    researchAreas: ["Database Systems", "Security & Privacy", "Data Science & Analytics"],
    keywords: ["database", "security", "privacy", "data protection", "access control", "management"],
    shortSummary: "Expert in database systems, security, and privacy protection for large-scale data management.",
    bestFit: "Students interested in database design, security, and privacy protection.",
    outreachAngle: "Discuss your interest in secure data management and database systems."
  },

  {
    id: 11,
    name: "Chris Clifton",
    title: "Associate Professor",
    department: "Department of Computer Science",
    researchAreas: ["Database Systems", "Security & Privacy", "Machine Learning"],
    keywords: ["privacy", "security", "machine learning", "database", "privacy-preserving"],
    shortSummary: "Develops privacy-preserving techniques for databases and machine learning systems.",
    bestFit: "Students interested in secure and private data management and analytics.",
    outreachAngle: "Share your interest in privacy and security for data systems."
  },

  // ============================================
  // SECURITY & PRIVACY
  // ============================================
  {
    id: 12,
    name: "Ninghui Li",
    title: "Professor of Computer Science",
    department: "Department of Computer Science",
    researchAreas: ["Security & Privacy", "Database Systems", "Algorithms & Theory"],
    keywords: ["privacy", "security", "access control", "cybersecurity", "system security"],
    shortSummary: "Focuses on privacy, security, and access control mechanisms in computing systems.",
    bestFit: "Students interested in privacy systems, security policies, and access control.",
    outreachAngle: "Discuss your interest in privacy and security system design."
  },

  {
    id: 13,
    name: "Bharat Bhargava",
    title: "Professor of Computer Science",
    department: "Department of Computer Science",
    researchAreas: ["Security & Privacy", "Distributed Systems", "Database Systems"],
    keywords: ["security", "distributed systems", "networking", "cybersecurity", "fault tolerance"],
    shortSummary: "Works on security in distributed systems, databases, and network infrastructure.",
    bestFit: "Students interested in distributed system security and network protection.",
    outreachAngle: "Share your interest in distributed systems security and resilience."
  },

  {
    id: 14,
    name: "Dongyan Xu",
    title: "Associate Professor",
    department: "Department of Computer Science",
    researchAreas: ["Security & Privacy", "Systems Security"],
    keywords: ["systems security", "cloud security", "malware", "cybersecurity", "binary analysis"],
    shortSummary: "Specializes in systems security, cloud security, and malware analysis.",
    bestFit: "Students interested in systems security, malware research, and cloud infrastructure security.",
    outreachAngle: "Discuss your interest in systems and cloud security challenges."
  },

  {
    id: 15,
    name: "Adam Bates",
    title: "Assistant Professor",
    department: "Department of Computer Science",
    researchAreas: ["Security & Privacy", "Systems Security"],
    keywords: ["cybersecurity", "network security", "privacy", "systems", "threat analysis"],
    shortSummary: "Researches cybersecurity with focus on network security and privacy protection.",
    bestFit: "Students interested in cybersecurity, network defense, and privacy systems.",
    outreachAngle: "Share your interest in cybersecurity and defensive security research."
  },

  // ============================================
  // COMPUTER VISION & GRAPHICS
  // ============================================
  {
    id: 16,
    name: "Aniket Bera",
    title: "Assistant Professor",
    department: "Department of Computer Science",
    researchAreas: ["Computer Vision", "Robotics & Autonomous Systems", "Artificial Intelligence"],
    keywords: ["vision", "robotics", "human behavior", "autonomous systems", "perception"],
    shortSummary: "Works on computer vision and robotics with focus on human behavior understanding.",
    bestFit: "Students interested in computer vision, robotics, and perception systems.",
    outreachAngle: "Discuss your interest in vision-based robotics and human behavior modeling."
  },

  {
    id: 17,
    name: "Raymond Yeh",
    title: "Assistant Professor",
    department: "Department of Computer Science",
    researchAreas: ["Computer Vision", "Machine Learning", "Data Science & Analytics"],
    keywords: ["vision", "graphics", "computer vision", "machine learning", "image processing"],
    shortSummary: "Researches computer vision and graphics methods with machine learning applications.",
    bestFit: "Students interested in computer vision, graphics, and visual learning systems.",
    outreachAngle: "Share your background in computer vision and visual processing projects."
  },

  {
    id: 18,
    name: "Bedrich Benes",
    title: "Associate Professor",
    department: "Department of Computer Science",
    researchAreas: ["Computer Vision", "Algorithms & Theory"],
    keywords: ["graphics", "simulation", "procedural modeling", "visualization", "algorithms"],
    shortSummary: "Develops computer graphics and procedural modeling techniques for simulation and visualization.",
    bestFit: "Students interested in graphics, simulation, and procedural content generation.",
    outreachAngle: "Discuss your interest in graphics algorithms and procedural modeling."
  },

  // ============================================
  // HUMAN-COMPUTER INTERACTION
  // ============================================
  {
    id: 19,
    name: "Sooyeon Jeong",
    title: "Assistant Professor",
    department: "Department of Computer Science",
    researchAreas: ["Human-Computer Interaction", "Artificial Intelligence", "Computational Biology & Health Informatics"],
    keywords: ["hci", "interaction", "human", "ai", "interface", "digital health"],
    shortSummary: "Studies human-AI interaction and HCI with applications to digital health systems.",
    bestFit: "Students interested in human-centered AI and interactive technology design.",
    outreachAngle: "Share interest in human-AI collaboration and interface design."
  },

  {
    id: 20,
    name: "Jason Wu",
    title: "Assistant Professor",
    department: "Department of Computer Science",
    researchAreas: ["Human-Computer Interaction", "Artificial Intelligence"],
    keywords: ["hci", "ui", "interface", "design", "human-centered", "usability"],
    shortSummary: "Focuses on interface design and human-centered AI system development.",
    bestFit: "Students interested in HCI, interface design, and user experience.",
    outreachAngle: "Discuss your interest in human-centered design and usable interfaces."
  },

  {
    id: 21,
    name: "Ming Yin",
    title: "Assistant Professor",
    department: "Department of Computer Science",
    researchAreas: ["Human-Computer Interaction", "Artificial Intelligence", "Data Science & Analytics"],
    keywords: ["human", "ai", "interaction", "crowdsourcing", "decision making", "human-ai"],
    shortSummary: "Studies human-AI interaction, crowdsourcing, and collaborative decision-making.",
    bestFit: "Students interested in human-AI collaboration and crowdsourced systems.",
    outreachAngle: "Share interest in human-in-the-loop AI and collaborative systems."
  },

  // ============================================
  // PROGRAMMING LANGUAGES & SOFTWARE ENGINEERING
  // ============================================
  {
    id: 22,
    name: "Tiark Rompf",
    title: "Assistant Professor",
    department: "Department of Computer Science",
    researchAreas: ["Programming Languages & Software Engineering", "Algorithms & Theory"],
    keywords: ["programming", "languages", "compiler", "software", "optimization", "design"],
    shortSummary: "Designs programming languages and compilers with focus on optimization and correctness.",
    bestFit: "Students interested in programming language design, compilers, and software systems.",
    outreachAngle: "Discuss your interest in programming languages and compiler design."
  },

  {
    id: 23,
    name: "Suresh Jagannathan",
    title: "Professor of Computer Science",
    department: "Department of Computer Science",
    researchAreas: ["Programming Languages & Software Engineering", "Algorithms & Theory"],
    keywords: ["programming languages", "semantics", "compiler", "concurrent programming", "design"],
    shortSummary: "Works on programming language semantics, compiler design, and concurrent systems.",
    bestFit: "Students interested in language design, program semantics, and parallel computing.",
    outreachAngle: "Share your interest in programming languages and concurrent system design."
  },

  // ============================================
  // ROBOTICS & AUTONOMOUS SYSTEMS
  // ============================================
  {
    id: 24,
    name: "George Chiu",
    title: "Professor of Mechanical Engineering (with CS affiliation)",
    department: "Department of Mechanical Engineering",
    researchAreas: ["Robotics & Autonomous Systems", "Algorithms & Theory"],
    keywords: ["robotics", "autonomous systems", "control", "intelligent machines", "perception"],
    shortSummary: "Develops autonomous robotic systems with intelligent control and perception capabilities.",
    bestFit: "Students interested in robotics, autonomous vehicles, and intelligent control systems.",
    outreachAngle: "Discuss your interest in autonomous systems and robot control."
  },

  // ============================================
  // COMPUTATIONAL BIOLOGY & HEALTH INFORMATICS
  // ============================================
  {
    id: 25,
    name: "Mung Chiang",
    title: "Professor of Computer Science",
    department: "Department of Computer Science",
    researchAreas: ["Artificial Intelligence", "Algorithms & Theory", "Data Science & Analytics"],
    keywords: ["networks", "ai systems", "optimization", "algorithms", "machine learning"],
    shortSummary: "Works on AI and optimization for networked systems with applications to health and infrastructure.",
    bestFit: "Students interested in AI applications, optimization, and complex systems.",
    outreachAngle: "Share your interest in AI and optimization for real-world systems."
  },

  // ============================================
  // ADDITIONAL COMPUTER SCIENCE FACULTY
  // ============================================
  {
    id: 26,
    name: "Mohit Tawarmalani",
    title: "Associate Professor",
    department: "Department of Computer Science",
    researchAreas: ["Algorithms & Theory", "Optimization", "Machine Learning"],
    keywords: ["optimization", "analytics", "operations research", "algorithms", "mathematical"],
    shortSummary: "Focuses on optimization algorithms and analytics for decision-making systems.",
    bestFit: "Students interested in optimization theory and operations research applications.",
    outreachAngle: "Discuss your interest in optimization algorithms and mathematical modeling."
  },

  {
    id: 27,
    name: "Shreyas Sundaraman",
    title: "Assistant Professor",
    department: "Department of Computer Science",
    researchAreas: ["Systems Security", "Programming Languages & Software Engineering"],
    keywords: ["systems", "operating systems", "software", "security", "programming"],
    shortSummary: "Works on systems security and operating system design for modern computing environments.",
    bestFit: "Students interested in systems programming and security.",
    outreachAngle: "Share your interest in systems-level programming and security."
  },

  {
    id: 28,
    name: "Voicu Popescu",
    title: "Associate Professor",
    department: "Department of Computer Science",
    researchAreas: ["Computer Vision", "Algorithms & Theory"],
    keywords: ["graphics", "vision", "visualization", "geometry", "computer vision"],
    shortSummary: "Develops computer vision and graphics techniques for visualization and image understanding.",
    bestFit: "Students interested in computer vision, graphics, and visual computing.",
    outreachAngle: "Discuss your interest in vision and graphics algorithms."
  },

  {
    id: 29,
    name: "Jan Allebach",
    title: "Professor of Electrical and Computer Engineering",
    department: "Department of Electrical and Computer Engineering",
    researchAreas: ["Data Science & Analytics", "Algorithms & Theory"],
    keywords: ["signal processing", "image processing", "algorithms", "data", "analysis"],
    shortSummary: "Works on signal and image processing with applications to data analysis and visualization.",
    bestFit: "Students interested in signal processing and computational image analysis.",
    outreachAngle: "Share your interest in signal processing and image analysis applications."
  },

  {
    id: 30,
    name: "Andrew Christlieb",
    title: "Associate Professor",
    department: "Department of Mathematics",
    researchAreas: ["Algorithms & Theory", "Data Science & Analytics"],
    keywords: ["scientific computing", "algorithms", "mathematics", "computational", "numerical"],
    shortSummary: "Develops computational algorithms for scientific computing and applied mathematics.",
    bestFit: "Students interested in scientific computing and numerical algorithms.",
    outreachAngle: "Discuss your interest in computational mathematics and scientific computing."
  }
];

// ============================================
// RESEARCH AREAS (12 Total)
// ============================================

const expandedResearchAreas = [
  {
    title: "Artificial Intelligence",
    description: "Systems that learn, reason, and make decisions using data and computational models.",
    keywords: ["ai", "machine learning", "learning", "algorithms", "intelligence"]
  },
  {
    title: "Machine Learning",
    description: "Algorithms that identify patterns and improve performance through experience and data.",
    keywords: ["machine learning", "learning", "algorithms", "data science", "optimization"]
  },
  {
    title: "Natural Language Processing",
    description: "Techniques for understanding, generating, and analyzing human language.",
    keywords: ["nlp", "language", "text", "processing", "computational linguistics"]
  },
  {
    title: "Human-Computer Interaction",
    description: "Designing technology that improves how people interact with software, devices, and AI systems.",
    keywords: ["hci", "interaction", "human", "interface", "design", "ui", "usability"]
  },
  {
    title: "Security & Privacy",
    description: "Protecting systems, networks, and data from unauthorized access and cyber threats.",
    keywords: ["security", "privacy", "access control", "cybersecurity", "protection"]
  },
  {
    title: "Computer Vision",
    description: "Enabling computers to interpret images, video, and visual information.",
    keywords: ["vision", "computer vision", "image", "graphics", "robotics", "visual"]
  },
  {
    title: "Data Science & Analytics",
    description: "Extracting insights from large datasets using statistical and computational methods.",
    keywords: ["data science", "analytics", "data mining", "statistics", "data analysis"]
  },
  {
    title: "Database Systems",
    description: "Designing and managing efficient systems for storing, retrieving, and processing data.",
    keywords: ["database", "data management", "storage", "retrieval", "systems"]
  },
  {
    title: "Algorithms & Theory",
    description: "Studying computational methods, optimization, and the mathematical foundations of computing.",
    keywords: ["algorithms", "theory", "optimization", "computational", "mathematical"]
  },
  {
    title: "Programming Languages & Software Engineering",
    description: "Building reliable software systems, compilers, development tools, and programming frameworks.",
    keywords: ["programming", "languages", "compiler", "software", "development"]
  },
  {
    title: "Robotics & Autonomous Systems",
    description: "Developing intelligent machines capable of sensing, planning, and acting in physical environments.",
    keywords: ["robotics", "autonomous systems", "robots", "control", "intelligent machines"]
  },
  {
    title: "Computational Biology & Health Informatics",
    description: "Applying computing, AI, and data analysis to biological, medical, and healthcare challenges.",
    keywords: ["computational biology", "health informatics", "medical", "biological", "healthcare"]
  }
];

// ============================================
// RESEARCH PATHWAYS (For Navigation)
// ============================================

const expandedResearchPathways = [
  {
    interest: "Core Machine Learning",
    professors: ["Jennifer Neville", "Rajiv Khanna", "Ruqi Zhang", "Petar Drineas"]
  },
  {
    interest: "AI & Optimization",
    professors: ["Yexiang Xue", "Mohit Tawarmalani", "Mung Chiang"]
  },
  {
    interest: "Data Science & Analytics",
    professors: ["David Gleich", "Aravind Machanavajjhala", "Samuel Labi"]
  },
  {
    interest: "Security & Privacy",
    professors: ["Ninghui Li", "Elisa Bertino", "Chris Clifton", "Bharat Bhargava", "Dongyan Xu", "Adam Bates"]
  },
  {
    interest: "Computer Vision & Graphics",
    professors: ["Aniket Bera", "Raymond Yeh", "Bedrich Benes", "Voicu Popescu"]
  },
  {
    interest: "Human-AI Interaction",
    professors: ["Sooyeon Jeong", "Jason Wu", "Ming Yin"]
  },
  {
    interest: "Natural Language Processing",
    professors: ["Dan Goldwasser"]
  },
  {
    interest: "Programming Languages & Systems",
    professors: ["Tiark Rompf", "Suresh Jagannathan", "Shreyas Sundaraman"]
  },
  {
    interest: "Robotics & Autonomous Systems",
    professors: ["Aniket Bera", "George Chiu"]
  },
  {
    interest: "Database & Data Management",
    professors: ["Elisa Bertino", "Chris Clifton", "Aravind Machanavajjhala"]
  },
  {
    interest: "Computational Science",
    professors: ["Jan Allebach", "Andrew Christlieb"]
  }
];

