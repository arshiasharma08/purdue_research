/**
 * Purdue Research Matchmaker - EXPANDED DATASET
 * 30 Faculty + 12 Research Areas
 */

// ============================================
// EXPANDED PROFESSOR DATA (30 FACULTY)
// ============================================

const professors = [
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
    bestFit: "Students interested in human-in-the-loop AI and crowdsourced systems.",
    outreachAngle: "Share interest in human-in-the-loop AI and collaborative systems."
  },
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
  {
    id: 24,
    name: "George Chiu",
    title: "Professor of Mechanical Engineering",
    department: "Department of Mechanical Engineering",
    researchAreas: ["Robotics & Autonomous Systems", "Algorithms & Theory"],
    keywords: ["robotics", "autonomous systems", "control", "intelligent machines", "perception"],
    shortSummary: "Develops autonomous robotic systems with intelligent control and perception capabilities.",
    bestFit: "Students interested in robotics, autonomous vehicles, and intelligent control systems.",
    outreachAngle: "Discuss your interest in autonomous systems and robot control."
  },
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
// EXPANDED RESEARCH AREAS (12 TOTAL)
// ============================================

const researchAreas = [
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
// EXPANDED RESEARCH PATHWAYS
// ============================================

const researchPathways = [
  { interest: "Core Machine Learning", professors: ["Jennifer Neville", "Rajiv Khanna", "Ruqi Zhang", "Petar Drineas"] },
  { interest: "AI & Optimization", professors: ["Yexiang Xue", "Mohit Tawarmalani", "Mung Chiang"] },
  { interest: "Data Science & Analytics", professors: ["David Gleich", "Aravind Machanavajjhala", "Samuel Labi"] },
  { interest: "Security & Privacy", professors: ["Ninghui Li", "Elisa Bertino", "Chris Clifton", "Bharat Bhargava", "Dongyan Xu", "Adam Bates"] },
  { interest: "Computer Vision & Graphics", professors: ["Aniket Bera", "Raymond Yeh", "Bedrich Benes", "Voicu Popescu"] },
  { interest: "Human-AI Interaction", professors: ["Sooyeon Jeong", "Jason Wu", "Ming Yin"] },
  { interest: "Natural Language Processing", professors: ["Dan Goldwasser"] },
  { interest: "Programming Languages & Systems", professors: ["Tiark Rompf", "Suresh Jagannathan", "Shreyas Sundaraman"] },
  { interest: "Robotics & Autonomous Systems", professors: ["Aniket Bera", "George Chiu"] },
  { interest: "Database & Data Management", professors: ["Elisa Bertino", "Chris Clifton", "Aravind Machanavajjhala"] },
  { interest: "Computational Science", professors: ["Jan Allebach", "Andrew Christlieb"] }
];

// ============================================
// ALL FUNCTIONS (SAME AS BEFORE)
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    populateResearchAreas();
    populateSpotlight();
    populatePathways();
    showAllProfessors();
    setupEventListeners();
    updateActiveNav();
}

function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const clearBtn = document.getElementById('clearBtn');
    const emailModalOverlay = document.getElementById('emailModalOverlay');
    const copyEmailBtn = document.getElementById('copyEmailBtn');
    
    if (searchInput) {
        searchInput.addEventListener('input', handleAutocomplete);
        searchInput.addEventListener('keydown', handleAutocompleteKeys);
    }
    
    document.addEventListener('click', function(e) {
        if (e.target.id !== 'searchInput' && !e.target.closest('.autocomplete-menu')) {
            closeAutocomplete();
        }
    });
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            if (searchInput) {
                const query = searchInput.value.trim();
                search(query);
                scrollToResults();
            }
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                search(this.value.trim());
                scrollToResults();
            }
        });
    }
    
    if (clearBtn) {
        clearBtn.addEventListener('click', clearSearch);
    }
    
    if (emailModalOverlay) {
        emailModalOverlay.addEventListener('click', closeEmailModal);
    }
    
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', copyEmailToClipboard);
    }
    
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('chip')) {
            const keyword = e.target.getAttribute('data-keyword');
            if (searchInput && keyword) {
                searchInput.value = keyword;
                e.target.classList.add('active');
                search(keyword);
                scrollToResults();
                closeAutocomplete();
            }
        }
    });
    
    document.addEventListener('click', function(e) {
        const card = e.target.closest('.research-card');
        if (card && !e.target.classList.contains('research-count')) {
            const keyword = card.getAttribute('data-keyword');
            if (searchInput && keyword) {
                searchInput.value = keyword;
                search(keyword);
                scrollToResults();
                closeAutocomplete();
            }
        }
    });
    
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('spotlight-btn')) {
            const profName = e.target.getAttribute('data-prof-name');
            if (searchInput && profName) {
                searchInput.value = profName;
                search(profName);
                scrollToResults();
                closeAutocomplete();
            }
        }
    });
    
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('prof-button')) {
            e.preventDefault();
            const profId = parseInt(e.target.getAttribute('data-prof-id'));
            openEmailModal(profId);
        }
    });
    
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('expand-btn')) {
            e.preventDefault();
            const card = e.target.closest('.prof-card');
            if (card) {
                const expanded = card.querySelector('.prof-expanded');
                if (expanded) {
                    expanded.classList.toggle('show');
                    e.target.textContent = expanded.classList.contains('show') ? 'Show Less' : 'Show More';
                }
            }
        }
    });
}

function handleAutocomplete(e) {
    const query = e.target.value.toLowerCase().trim();
    if (!query || query.length < 1) {
        closeAutocomplete();
        return;
    }
    
    const suggestions = new Set();
    
    researchAreas.forEach(area => {
        if (area.title.toLowerCase().includes(query)) {
            suggestions.add(area.title);
        }
    });
    
    professors.forEach(prof => {
        prof.keywords.forEach(kw => {
            if (kw.includes(query)) {
                const formatted = kw.charAt(0).toUpperCase() + kw.slice(1);
                suggestions.add(formatted);
            }
        });
    });
    
    if (suggestions.size === 0) {
        closeAutocomplete();
        return;
    }
    
    showAutocomplete(Array.from(suggestions).slice(0, 8));
}

function showAutocomplete(suggestions) {
    const menu = document.getElementById('autocompleteMenu');
    if (!menu) return;
    
    menu.innerHTML = suggestions.map((s, i) => 
        `<div class="autocomplete-item" data-value="${s.replace(/"/g, '&quot;')}" data-index="${i}">${s}</div>`
    ).join('');
    menu.style.display = 'block';
    
    document.querySelectorAll('.autocomplete-item').forEach(item => {
        item.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.value = value;
            }
            closeAutocomplete();
            search(value);
            scrollToResults();
        });
    });
}

function closeAutocomplete() {
    const menu = document.getElementById('autocompleteMenu');
    if (menu) menu.style.display = 'none';
}

function handleAutocompleteKeys(e) {
    const menu = document.getElementById('autocompleteMenu');
    if (!menu || menu.style.display === 'none') return;
    
    const items = document.querySelectorAll('.autocomplete-item');
    const selected = document.querySelector('.autocomplete-item.selected');
    
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (!selected && items.length) {
            items[0].classList.add('selected');
        } else if (selected) {
            const next = selected.nextElementSibling;
            if (next) {
                selected.classList.remove('selected');
                next.classList.add('selected');
                next.scrollIntoView({ block: 'nearest' });
            }
        }
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (selected) {
            const prev = selected.previousElementSibling;
            if (prev) {
                selected.classList.remove('selected');
                prev.classList.add('selected');
                prev.scrollIntoView({ block: 'nearest' });
            }
        }
    } else if (e.key === 'Enter' && selected) {
        e.preventDefault();
        const value = selected.getAttribute('data-value');
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.value = value;
        }
        closeAutocomplete();
        search(value);
        scrollToResults();
    }
}

function calculateMatchScore(query, prof) {
    const q = query.toLowerCase().trim();
    if (!q) return 0;
    
    let hits = 0;
    if (prof.name.toLowerCase().includes(q)) hits += 2;
    prof.researchAreas.forEach(area => {
        if (area.toLowerCase().includes(q)) hits += 2;
    });
    prof.keywords.forEach(keyword => {
        if (keyword.toLowerCase().includes(q)) hits += 1;
    });
    
    const totalWeight = (prof.researchAreas.length * 2) + prof.keywords.length + 2;
    return Math.min(Math.round((hits / totalWeight) * 100), 100);
}

function search(query) {
    const trimmed = query.trim();
    if (!trimmed) {
        showAllProfessors();
        return;
    }
    
    const results = professors
        .map(prof => ({ ...prof, score: calculateMatchScore(trimmed, prof) }))
        .filter(prof => prof.score > 0)
        .sort((a, b) => b.score - a.score);
    
    displayResults(results, trimmed);
}

function displayResults(results, searchTerm) {
    const resultsDiv = document.getElementById('results');
    const noResultsDiv = document.getElementById('noResults');
    const resultsTitle = document.getElementById('resultsTitle');
    const clearBtn = document.getElementById('clearBtn');
    
    if (!resultsDiv || !noResultsDiv || !resultsTitle) return;
    
    resultsDiv.innerHTML = '';
    
    if (results.length === 0) {
        noResultsDiv.style.display = 'block';
        resultsTitle.textContent = `No results for "${searchTerm}"`;
        if (clearBtn) clearBtn.style.display = 'inline-block';
        return;
    }
    
    noResultsDiv.style.display = 'none';
    if (clearBtn) clearBtn.style.display = 'inline-block';
    
    const plural = results.length === 1 ? '' : 's';
    resultsTitle.textContent = `${results.length} professor${plural} found`;
    
    results.forEach((prof, index) => {
        const card = createProfessorCard(prof, index === 0);
        resultsDiv.appendChild(card);
    });
}

function showAllProfessors() {
    const resultsDiv = document.getElementById('results');
    const noResultsDiv = document.getElementById('noResults');
    const resultsTitle = document.getElementById('resultsTitle');
    const clearBtn = document.getElementById('clearBtn');
    
    if (!resultsDiv || !noResultsDiv || !resultsTitle) return;
    
    noResultsDiv.style.display = 'none';
    if (clearBtn) clearBtn.style.display = 'none';
    resultsTitle.textContent = 'All Professors';
    resultsDiv.innerHTML = '';
    
    const sorted = [...professors].sort((a, b) => a.name.localeCompare(b.name));
    sorted.forEach((prof, index) => {
        const card = createProfessorCard(prof, false);
        resultsDiv.appendChild(card);
    });
}

function createProfessorCard(prof, isBestMatch = false) {
    const card = document.createElement('div');
    card.className = `prof-card ${isBestMatch ? 'best-match' : ''}`;
    
    const bestMatchBadge = isBestMatch ? '<div class="best-match-badge">⭐ Best Match</div>' : '';
    const matchBadge = prof.score && prof.score > 0 ? `<div class="match-badge">${prof.score}%</div>` : '';
    
    const tags = prof.researchAreas.map(r => `<span class="prof-tag">${r}</span>`).join('');
    
    const matchBar = prof.score && prof.score > 0 ? `
        <div class="match-bar-container">
            <div class="match-bar-label">Research Match</div>
            <div class="match-bar">
                <div class="match-bar-fill" style="--bar-width: ${prof.score}%;"></div>
            </div>
        </div>
    ` : '';
    
    card.innerHTML = `
        ${bestMatchBadge}
        ${matchBadge}
        <div class="prof-name">${prof.name}</div>
        <div class="prof-title">${prof.title}</div>
        <div class="prof-tags">${tags}</div>
        ${matchBar}
        <div class="prof-description">${prof.shortSummary}</div>
        <button class="prof-button" data-prof-id="${prof.id}">Generate Outreach Draft</button>
        <button class="expand-btn">Show More</button>
        <div class="prof-expanded">
            <div class="expanded-section">
                <div class="expanded-label">Best Fit</div>
                <div class="expanded-text">${prof.bestFit}</div>
            </div>
            <div class="expanded-section">
                <div class="expanded-label">Outreach Angle</div>
                <div class="expanded-text">${prof.outreachAngle}</div>
            </div>
        </div>
    `;
    
    return card;
}

function clearSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = '';
        document.querySelectorAll('.chip.active').forEach(chip => {
            chip.classList.remove('active');
        });
    }
    document.getElementById('resultsTitle').textContent = 'All Professors';
    showAllProfessors();
    closeAutocomplete();
}

function populateResearchAreas() {
    const grid = document.querySelector('.research-areas-grid');
    if (!grid) return;
    
    researchAreas.forEach((area, i) => {
        const count = professors.filter(prof =>
            prof.researchAreas.some(ar => ar.toLowerCase().includes(area.title.toLowerCase()) || area.title.toLowerCase().includes(ar.toLowerCase()))
        ).length;
        
        const card = document.createElement('div');
        card.className = 'research-card';
        card.setAttribute('data-keyword', area.keywords[0]);
        card.innerHTML = `
            <div class="research-title">${area.title}</div>
            <div class="research-description">${area.description}</div>
            <div class="research-count">${count} Professor${count > 1 ? 's' : ''}</div>
        `;
        
        grid.appendChild(card);
    });
}

function populateSpotlight() {
    const grid = document.querySelector('.spotlight-grid');
    if (!grid) return;
    
    const shuffled = [...professors].sort(() => Math.random() - 0.5);
    const featured = shuffled.slice(0, 3);
    
    featured.forEach(prof => {
        const card = document.createElement('div');
        card.className = 'spotlight-card';
        card.innerHTML = `
            <div class="spotlight-name">${prof.name}</div>
            <div class="spotlight-area">${prof.researchAreas[0]}</div>
            <div class="spotlight-desc">${prof.shortSummary}</div>
            <button class="spotlight-btn" data-prof-name="${prof.name}">Explore Research</button>
        `;
        grid.appendChild(card);
    });
}

function populatePathways() {
    const grid = document.querySelector('.pathways-grid');
    if (!grid) return;
    
    researchPathways.forEach(pathway => {
        const div = document.createElement('div');
        div.className = 'pathway';
        
        let html = `<div class="pathway-title">${pathway.interest}</div>`;
        
        pathway.professors.forEach(profName => {
            const prof = professors.find(p => p.name === profName);
            if (prof) {
                html += `
                    <div class="pathway-item">
                        <div class="pathway-prof-name">${prof.name}</div>
                        <div class="pathway-prof-area">${prof.researchAreas[0]}</div>
                    </div>
                `;
            }
        });
        
        div.innerHTML = html;
        grid.appendChild(div);
    });
}

function openEmailModal(profId) {
    const prof = professors.find(p => p.id === profId);
    if (!prof) return;
    
    const lastName = prof.name.split(' ').pop();
    const studentName = "[Your Name]";
    const researchArea = prof.researchAreas[0];
    const interests = prof.outreachAngle;
    const skills = "Python, Flask, JavaScript, data analysis, and research tools";
    
    const emailText = `Dear Professor ${lastName},

My name is ${studentName}, and I am interested in undergraduate research opportunities related to ${researchArea}.

I recently learned about your work in ${researchArea}, and I found it particularly interesting because of my interests in this field.

I have experience with ${skills}, and I would love to learn more about opportunities to contribute to your research group.

Thank you for your time and consideration. I would be happy to discuss any potential opportunities further.

Best regards,
${studentName}`;
    
    const modalProfName = document.getElementById('modalProfName');
    const emailDraft = document.getElementById('emailDraft');
    const emailModal = document.getElementById('emailModal');
    const emailModalOverlay = document.getElementById('emailModalOverlay');
    
    if (modalProfName) modalProfName.textContent = prof.researchAreas[0];
    if (emailDraft) emailDraft.value = emailText;
    if (emailModal) emailModal.style.display = 'block';
    if (emailModalOverlay) emailModalOverlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeEmailModal() {
    const emailModal = document.getElementById('emailModal');
    const emailModalOverlay = document.getElementById('emailModalOverlay');
    
    if (emailModal) emailModal.style.display = 'none';
    if (emailModalOverlay) emailModalOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function copyEmailToClipboard() {
    const emailDraft = document.getElementById('emailDraft');
    const copyBtn = document.getElementById('copyEmailBtn');
    
    if (!emailDraft || !copyBtn) return;
    
    emailDraft.select();
    document.execCommand('copy');
    
    const originalText = copyBtn.textContent;
    copyBtn.textContent = 'Copied!';
    setTimeout(() => {
        copyBtn.textContent = originalText;
    }, 2000);
}

function updateActiveNav() {
    window.addEventListener('scroll', () => {
        const sections = ['home', 'search-section', 'explore', 'spotlight', 'results-section'];
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = 'home';
        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section && section.offsetTop <= window.scrollY + 100) {
                current = sectionId;
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

function scrollToResults() {
    const section = document.getElementById('results-section');
    if (section) {
        setTimeout(() => {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
}

