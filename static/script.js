
/**
 * Purdue Research Matchmaker - JavaScript
 * Search, filter, and email generation functionality
 */

// ====================================
// PROFESSOR DATA
// ====================================

const professors = [
    {
        id: 1,
        name: "Dan Goldwasser",
        title: "Associate Professor",
        department: "Department of Computer Science",
        research: ["NLP", "Machine Learning", "Text Analysis"],
        keywords: ["nlp", "language", "text", "machine learning", "processing"],
        bestFit: "Students interested in natural language processing and computational linguistics.",
        outreachAngle: "Mention an NLP project or text analysis work you've done."
    },
    {
        id: 2,
        name: "Sooyeon Jeong",
        title: "Assistant Professor",
        department: "Department of Computer Science",
        research: ["Human-Agent Interaction", "HCI", "Interactive AI"],
        keywords: ["hci", "interaction", "human", "ai", "interface"],
        bestFit: "Students interested in how people interact with AI systems.",
        outreachAngle: "Share interest in user interface design or human-centered AI."
    },
    {
        id: 3,
        name: "Jason Wu",
        title: "Assistant Professor",
        department: "Department of Computer Science",
        research: ["HCI", "UI Understanding", "AI Interface Design"],
        keywords: ["hci", "ui", "interface", "design", "human-centered"],
        bestFit: "Students focused on interface design and AI usability.",
        outreachAngle: "Discuss a project involving UI design or usability testing."
    },
    {
        id: 4,
        name: "David Gleich",
        title: "Associate Professor",
        department: "Department of Computer Science",
        research: ["Graph Algorithms", "Data Science", "Network Analysis"],
        keywords: ["graph", "network", "data science", "algorithms", "computing"],
        bestFit: "Students interested in graph algorithms and network analysis.",
        outreachAngle: "Mention a graph-based or network analysis project."
    },
    {
        id: 5,
        name: "Jennifer Neville",
        title: "Associate Professor",
        department: "Department of Computer Science",
        research: ["Machine Learning", "Data Mining", "Relational Data"],
        keywords: ["machine learning", "data mining", "learning", "data science"],
        bestFit: "Students interested in machine learning on complex data.",
        outreachAngle: "Share a machine learning or data mining project."
    },
    {
        id: 6,
        name: "Ninghui Li",
        title: "Professor of Computer Science",
        department: "Department of Computer Science",
        research: ["Privacy", "Security", "Access Control"],
        keywords: ["privacy", "security", "access control", "cybersecurity"],
        bestFit: "Students focused on privacy and security systems.",
        outreachAngle: "Mention interest in privacy-preserving technologies."
    },
    {
        id: 7,
        name: "Aniket Bera",
        title: "Assistant Professor",
        department: "Department of Computer Science",
        research: ["Computer Vision", "Robotics", "Human Behavior Modeling"],
        keywords: ["vision", "robotics", "human", "behavior", "computer vision"],
        bestFit: "Students interested in computer vision and robotics.",
        outreachAngle: "Share a computer vision or robotics project."
    },
    {
        id: 8,
        name: "Elisa Bertino",
        title: "Samuel D. Conte Professor",
        department: "Department of Computer Science",
        research: ["Database Security", "Privacy", "Data Protection"],
        keywords: ["database", "security", "privacy", "data protection", "access"],
        bestFit: "Students interested in database systems and security.",
        outreachAngle: "Discuss interest in secure database systems."
    },
    {
        id: 9,
        name: "Chris Clifton",
        title: "Associate Professor",
        department: "Department of Computer Science",
        research: ["Data Privacy", "Machine Learning Security", "Databases"],
        keywords: ["privacy", "security", "machine learning", "database"],
        bestFit: "Students interested in privacy-preserving machine learning.",
        outreachAngle: "Mention interest in secure machine learning systems."
    },
    {
        id: 10,
        name: "Tiark Rompf",
        title: "Assistant Professor",
        department: "Department of Computer Science",
        research: ["Programming Languages", "Compilers", "Software Systems"],
        keywords: ["programming", "languages", "compiler", "software"],
        bestFit: "Students interested in language design and compilation.",
        outreachAngle: "Share interest in programming language design."
    },
    {
        id: 11,
        name: "Rajiv Khanna",
        title: "Assistant Professor",
        department: "Department of Computer Science",
        research: ["Machine Learning", "AI", "Data Science"],
        keywords: ["machine learning", "ai", "data science", "algorithms"],
        bestFit: "Students interested in machine learning and AI.",
        outreachAngle: "Discuss a machine learning or AI project."
    },
    {
        id: 12,
        name: "Ming Yin",
        title: "Assistant Professor",
        department: "Department of Computer Science",
        research: ["Human-AI Interaction", "Crowdsourcing", "HCI"],
        keywords: ["human", "ai", "interaction", "crowdsourcing", "decision"],
        bestFit: "Students interested in human-AI collaboration.",
        outreachAngle: "Mention interest in human-centered AI systems."
    },
    {
        id: 13,
        name: "Ruqi Zhang",
        title: "Assistant Professor",
        department: "Department of Computer Science",
        research: ["Machine Learning", "Statistics", "Optimization"],
        keywords: ["machine learning", "statistics", "optimization", "algorithms"],
        bestFit: "Students interested in ML theory and statistics.",
        outreachAngle: "Share interest in machine learning algorithms."
    },
    {
        id: 14,
        name: "Yexiang Xue",
        title: "Assistant Professor",
        department: "Department of Computer Science",
        research: ["AI", "Computational Sustainability", "Optimization"],
        keywords: ["ai", "optimization", "machine learning", "sustainability"],
        bestFit: "Students interested in AI for real-world impact.",
        outreachAngle: "Discuss interest in practical AI applications."
    },
    {
        id: 15,
        name: "Raymond Yeh",
        title: "Assistant Professor",
        department: "Department of Computer Science",
        research: ["Computer Vision", "Graphics", "Machine Learning"],
        keywords: ["vision", "graphics", "computer vision", "machine learning"],
        bestFit: "Students interested in computer vision and graphics.",
        outreachAngle: "Share a computer vision or graphics project."
    }
];

// ====================================
// HELPER FUNCTIONS
// ====================================

/**
 * Escape HTML special characters to prevent XSS
 */
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

/**
 * Calculate match score between query and professor
 * Returns percentage 0-100
 */
function calculateMatchScore(query, prof) {
    const q = query.toLowerCase().trim();
    if (!q) return 0;
    
    let hits = 0;
    
    // Check name
    if (prof.name.toLowerCase().includes(q)) hits += 2;
    
    // Check research areas
    prof.research.forEach(area => {
        if (area.toLowerCase().includes(q)) hits += 2;
    });
    
    // Check keywords
    prof.keywords.forEach(keyword => {
        if (keyword.toLowerCase().includes(q)) hits += 1;
    });
    
    // Calculate percentage
    const totalWeight = (prof.research.length * 2) + prof.keywords.length + 2;
    const score = Math.round((hits / totalWeight) * 100);
    
    return Math.min(score, 100);
}

/**
 * Search professors based on query
 */
function searchProfessors(query) {
    if (!query.trim()) {
        showAllProfessors();
        return;
    }
    
    const results = professors
        .map(prof => ({
            ...prof,
            score: calculateMatchScore(query, prof)
        }))
        .filter(prof => prof.score > 0)
        .sort((a, b) => b.score - a.score);
    
    displayResults(results, query);
}

/**
 * Display search results
 */
function displayResults(results, searchTerm) {
    const resultsDiv = document.getElementById('results');
    const noResultsDiv = document.getElementById('noResults');
    const resultsTitle = document.getElementById('resultsTitle');
    const clearBtn = document.getElementById('clearBtn');
    
    resultsDiv.innerHTML = '';
    
    if (results.length === 0) {
        noResultsDiv.style.display = 'block';
        resultsTitle.textContent = `No matches for "${escapeHtml(searchTerm)}"`;
        clearBtn.style.display = 'inline-block';
        return;
    }
    
    noResultsDiv.style.display = 'none';
    clearBtn.style.display = 'inline-block';
    const plural = results.length === 1 ? '' : 's';
    resultsTitle.textContent = `${results.length} professor${plural} match${plural} "${escapeHtml(searchTerm)}"`;
    
    results.forEach(prof => {
        const card = createProfessorCard(prof);
        resultsDiv.appendChild(card);
    });
}

/**
 * Show all professors
 */
function showAllProfessors() {
    const resultsDiv = document.getElementById('results');
    const noResultsDiv = document.getElementById('noResults');
    const resultsTitle = document.getElementById('resultsTitle');
    const clearBtn = document.getElementById('clearBtn');
    
    noResultsDiv.style.display = 'none';
    clearBtn.style.display = 'none';
    resultsTitle.textContent = 'All Professors';
    resultsDiv.innerHTML = '';
    
    const sortedProfs = [...professors].sort((a, b) => a.name.localeCompare(b.name));
    sortedProfs.forEach(prof => {
        const card = createProfessorCard(prof);
        resultsDiv.appendChild(card);
    });
}

/**
 * Create a professor card element
 */
function createProfessorCard(prof) {
    const card = document.createElement('div');
    card.className = 'prof-card';
    
    const matchBadge = prof.score && prof.score > 0 
        ? `<div class="match-badge">${prof.score}% match</div>` 
        : '';
    
    const tags = prof.research
        .map(r => `<span class="prof-tag">${escapeHtml(r)}</span>`)
        .join('');
    
    card.innerHTML = `
        ${matchBadge}
        <div class="prof-name">${escapeHtml(prof.name)}</div>
        <div class="prof-title">${escapeHtml(prof.title)}</div>
        <div class="prof-dept">${escapeHtml(prof.department)}</div>
        
        <div class="prof-section">
            <div class="prof-label">Research Areas</div>
            <div class="prof-tags">${tags}</div>
        </div>
        
        <div class="prof-section">
            <div class="prof-label">Best For</div>
            <div class="prof-text">${escapeHtml(prof.bestFit)}</div>
        </div>
        
        <button class="prof-button" data-prof-id="${prof.id}">
            Generate Email
        </button>
    `;
    
    return card;
}

/**
 * Generate email draft
 */
function generateEmailDraft(profId) {
    const prof = professors.find(p => p.id === profId);
    if (!prof) return;
    
    const lastName = prof.name.split(' ').pop();
    const researchArea = prof.research[0];
    
    const emailText = `Dear Professor ${lastName},

My name is Arshia Sharma, and I will be an incoming freshman at Purdue University majoring in Data Science with a minor in AI. I recently read about your work in ${researchArea}, and I found it especially interesting.

I have been building personal projects involving Python, Flask, JavaScript, data analysis, and research discovery tools. I am interested in gaining undergraduate research experience and would love to learn more about opportunities to contribute through coding, data analysis, testing, or research support.

I would also be happy to reconnect once the semester begins if that would be a better time.

Thank you for your time.

Kind regards,
Arshia Sharma`;
    
    const emailDraft = document.getElementById('emailDraft');
    const emailSection = document.getElementById('emailSection');
    
    if (!emailDraft || !emailSection) return;
    
    emailDraft.value = emailText;
    emailSection.style.display = 'block';
    
    // Smooth scroll
    setTimeout(() => {
        emailSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

/**
 * Copy email to clipboard
 */
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

/**
 * Clear search
 */
function clearSearch() {
    const searchInput = document.getElementById('searchInput');
    const emailSection = document.getElementById('emailSection');
    
    if (searchInput) searchInput.value = '';
    if (emailSection) emailSection.style.display = 'none';
    
    showAllProfessors();
    
    // Remove active chips
    document.querySelectorAll('.chip').forEach(chip => {
        chip.classList.remove('active');
    });
}

// ====================================
// EVENT LISTENERS
// ====================================

document.addEventListener('DOMContentLoaded', function() {
    // Show all professors initially
    showAllProfessors();
    
    // Search button
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const query = document.getElementById('searchInput').value;
            searchProfessors(query);
        });
    }
    
    // Search input - Enter key
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchProfessors(this.value);
            }
        });
    }
    
    // Filter chips
    document.querySelectorAll('.chip').forEach(chip => {
        chip.addEventListener('click', function() {
            const keyword = this.getAttribute('data-keyword');
            const searchInput = document.getElementById('searchInput');
            
            // Toggle active state
            this.classList.toggle('active');
            
            if (this.classList.contains('active')) {
                searchInput.value = keyword;
                searchProfessors(keyword);
            } else {
                searchInput.value = '';
                clearSearch();
            }
        });
    });
    
    // Clear button
    const clearBtn = document.getElementById('clearBtn');
    if (clearBtn) {
        clearBtn.addEventListener('click', clearSearch);
    }
    
    // Copy email button
    const copyBtn = document.getElementById('copyEmailBtn');
    if (copyBtn) {
        copyBtn.addEventListener('click', copyEmailToClipboard);
    }
});

// Email button event delegation
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('prof-button')) {
        const profId = parseInt(e.target.getAttribute('data-prof-id'));
        generateEmailDraft(profId);
    }
});

