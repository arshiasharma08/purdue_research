/**
 * Purdue Research Matchmaker - JavaScript (Updated v2)
 * Professional email template
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
        interests: "natural language processing and text analysis"
    },
    {
        id: 2,
        name: "Sooyeon Jeong",
        title: "Assistant Professor",
        department: "Department of Computer Science",
        research: ["Human-Agent Interaction", "HCI", "Interactive AI"],
        keywords: ["hci", "interaction", "human", "ai", "interface"],
        bestFit: "Students interested in how people interact with AI systems.",
        interests: "human-centered AI and interactive systems"
    },
    {
        id: 3,
        name: "Jason Wu",
        title: "Assistant Professor",
        department: "Department of Computer Science",
        research: ["HCI", "UI Understanding", "AI Interface Design"],
        keywords: ["hci", "ui", "interface", "design", "human-centered"],
        bestFit: "Students focused on interface design and AI usability.",
        interests: "interface design and user experience"
    },
    {
        id: 4,
        name: "David Gleich",
        title: "Associate Professor",
        department: "Department of Computer Science",
        research: ["Graph Algorithms", "Data Science", "Network Analysis"],
        keywords: ["graph", "network", "data science", "algorithms", "computing"],
        bestFit: "Students interested in graph algorithms and network analysis.",
        interests: "data science and network analysis"
    },
    {
        id: 5,
        name: "Jennifer Neville",
        title: "Associate Professor",
        department: "Department of Computer Science",
        research: ["Machine Learning", "Data Mining", "Relational Data"],
        keywords: ["machine learning", "data mining", "learning", "data science"],
        bestFit: "Students interested in machine learning on complex data.",
        interests: "machine learning and data mining"
    },
    {
        id: 6,
        name: "Ninghui Li",
        title: "Professor of Computer Science",
        department: "Department of Computer Science",
        research: ["Privacy", "Security", "Access Control"],
        keywords: ["privacy", "security", "access control", "cybersecurity"],
        bestFit: "Students focused on privacy and security systems.",
        interests: "privacy and security systems"
    },
    {
        id: 7,
        name: "Aniket Bera",
        title: "Assistant Professor",
        department: "Department of Computer Science",
        research: ["Computer Vision", "Robotics", "Human Behavior Modeling"],
        keywords: ["vision", "robotics", "human", "behavior", "computer vision"],
        bestFit: "Students interested in computer vision and robotics.",
        interests: "computer vision and robotics"
    },
    {
        id: 8,
        name: "Elisa Bertino",
        title: "Samuel D. Conte Professor",
        department: "Department of Computer Science",
        research: ["Database Security", "Privacy", "Data Protection"],
        keywords: ["database", "security", "privacy", "data protection", "access"],
        bestFit: "Students interested in database systems and security.",
        interests: "database security and data protection"
    },
    {
        id: 9,
        name: "Chris Clifton",
        title: "Associate Professor",
        department: "Department of Computer Science",
        research: ["Data Privacy", "Machine Learning Security", "Databases"],
        keywords: ["privacy", "security", "machine learning", "database"],
        bestFit: "Students interested in privacy-preserving machine learning.",
        interests: "secure machine learning systems"
    },
    {
        id: 10,
        name: "Tiark Rompf",
        title: "Assistant Professor",
        department: "Department of Computer Science",
        research: ["Programming Languages", "Compilers", "Software Systems"],
        keywords: ["programming", "languages", "compiler", "software"],
        bestFit: "Students interested in language design and compilation.",
        interests: "programming language design and optimization"
    },
    {
        id: 11,
        name: "Rajiv Khanna",
        title: "Assistant Professor",
        department: "Department of Computer Science",
        research: ["Machine Learning", "AI", "Data Science"],
        keywords: ["machine learning", "ai", "data science", "algorithms"],
        bestFit: "Students interested in machine learning and AI.",
        interests: "machine learning and artificial intelligence"
    },
    {
        id: 12,
        name: "Ming Yin",
        title: "Assistant Professor",
        department: "Department of Computer Science",
        research: ["Human-AI Interaction", "Crowdsourcing", "HCI"],
        keywords: ["human", "ai", "interaction", "crowdsourcing", "decision"],
        bestFit: "Students interested in human-AI collaboration.",
        interests: "human-AI interaction and collaboration"
    },
    {
        id: 13,
        name: "Ruqi Zhang",
        title: "Assistant Professor",
        department: "Department of Computer Science",
        research: ["Machine Learning", "Statistics", "Optimization"],
        keywords: ["machine learning", "statistics", "optimization", "algorithms"],
        bestFit: "Students interested in ML theory and statistics.",
        interests: "machine learning algorithms and optimization"
    },
    {
        id: 14,
        name: "Yexiang Xue",
        title: "Assistant Professor",
        department: "Department of Computer Science",
        research: ["AI", "Computational Sustainability", "Optimization"],
        keywords: ["ai", "optimization", "machine learning", "sustainability"],
        bestFit: "Students interested in AI for real-world impact.",
        interests: "AI applications and computational sustainability"
    },
    {
        id: 15,
        name: "Raymond Yeh",
        title: "Assistant Professor",
        department: "Department of Computer Science",
        research: ["Computer Vision", "Graphics", "Machine Learning"],
        keywords: ["vision", "graphics", "computer vision", "machine learning"],
        bestFit: "Students interested in computer vision and graphics.",
        interests: "computer vision and graphics"
    }
];

// Research areas configuration
const researchAreas = [
    {
        title: "Artificial Intelligence",
        description: "Explore AI systems, machine learning models, and intelligent automation.",
        keywords: ["ai", "machine learning", "learning", "algorithms"]
    },
    {
        title: "Machine Learning",
        description: "Dive into algorithms that learn from data and drive modern applications.",
        keywords: ["machine learning", "learning", "algorithms", "data science", "optimization"]
    },
    {
        title: "NLP",
        description: "Work with natural language processing and computational linguistics research.",
        keywords: ["nlp", "language", "text", "processing"]
    },
    {
        title: "Human Computer Interaction",
        description: "Design and study how humans interact with technology systems.",
        keywords: ["hci", "interaction", "human", "interface", "design", "ui"]
    },
    {
        title: "Security",
        description: "Research cybersecurity, privacy, and protection systems.",
        keywords: ["security", "privacy", "access control", "cybersecurity", "protection"]
    },
    {
        title: "Computer Vision",
        description: "Develop visual understanding systems and image processing technologies.",
        keywords: ["vision", "computer vision", "image", "graphics", "robotics"]
    }
];

// ====================================
// HELPER FUNCTIONS
// ====================================

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

function calculateMatchScore(query, prof) {
    const q = query.toLowerCase().trim();
    if (!q) return 0;
    
    let hits = 0;
    
    if (prof.name.toLowerCase().includes(q)) hits += 2;
    
    prof.research.forEach(area => {
        if (area.toLowerCase().includes(q)) hits += 2;
    });
    
    prof.keywords.forEach(keyword => {
        if (keyword.toLowerCase().includes(q)) hits += 1;
    });
    
    const totalWeight = (prof.research.length * 2) + prof.keywords.length + 2;
    const score = Math.round((hits / totalWeight) * 100);
    
    return Math.min(score, 100);
}

function countProfessorsInArea(areaKeywords) {
    return professors.filter(prof => {
        return areaKeywords.some(keyword => 
            prof.keywords.some(k => k.includes(keyword) || keyword.includes(k))
        );
    }).length;
}

// ====================================
// POPULATE FEATURED RESEARCH AREAS
// ====================================

function populateResearchAreas() {
    const grid = document.querySelector('.research-areas-grid');
    if (!grid) return;
    
    researchAreas.forEach(area => {
        const count = countProfessorsInArea(area.keywords);
        const card = document.createElement('div');
        card.className = 'research-card';
        
        card.innerHTML = `
            <div class="research-title">${escapeHtml(area.title)}</div>
            <div class="research-description">${escapeHtml(area.description)}</div>
            <div class="research-count">${count} Professor${count !== 1 ? 's' : ''}</div>
        `;
        
        grid.appendChild(card);
    });
}

// ====================================
// SEARCH FUNCTIONS
// ====================================

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

// ====================================
// EMAIL GENERATION - PROFESSIONAL TEMPLATE
// ====================================

function generateEmailDraft(profId) {
    const prof = professors.find(p => p.id === profId);
    if (!prof) return;
    
    const lastName = prof.name.split(' ').pop();
    const researchArea = prof.research[0];
    const studentName = "Arshia Sharma";
    const interests = prof.interests;
    const skills = "Python, Flask, JavaScript, data analysis, and research tools";
    
    const emailText = `Dear Professor ${lastName},

My name is ${studentName}, and I am interested in undergraduate research opportunities related to ${researchArea}.

I recently learned about your work in ${researchArea}, and I found it particularly interesting because of my interests in ${interests}.

I have experience with ${skills}, and I would love to learn more about opportunities to contribute to your research group.

Thank you for your time and consideration. I would be happy to discuss any potential opportunities further.

Best regards,
${studentName}`;
    
    const emailDraft = document.getElementById('emailDraft');
    const emailSection = document.getElementById('emailSection');
    
    if (!emailDraft || !emailSection) return;
    
    emailSection.innerHTML = `
        <h3>Email Draft</h3>
        <div class="progress-container">
            <div class="progress-label">Personalization Complete</div>
            <div class="progress-bar">
                <div class="progress-fill" style="--progress: 100%;"></div>
            </div>
        </div>
        <textarea id="emailDraft" class="email-input" readonly>${escapeHtml(emailText)}</textarea>
        <button id="copyEmailBtn" class="btn-copy">Copy Email</button>
    `;
    
    emailSection.style.display = 'block';
    
    const copyBtn = document.getElementById('copyEmailBtn');
    if (copyBtn) {
        copyBtn.addEventListener('click', copyEmailToClipboard);
    }
    
    setTimeout(() => {
        emailSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
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

function clearSearch() {
    const searchInput = document.getElementById('searchInput');
    const emailSection = document.getElementById('emailSection');
    
    if (searchInput) searchInput.value = '';
    if (emailSection) emailSection.style.display = 'none';
    
    showAllProfessors();
    
    document.querySelectorAll('.chip').forEach(chip => {
        chip.classList.remove('active');
    });
}

// ====================================
// EVENT LISTENERS
// ====================================

document.addEventListener('DOMContentLoaded', function() {
    // Populate featured research areas
    populateResearchAreas();
    
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
});

// Email button event delegation
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('prof-button')) {
        const profId = parseInt(e.target.getAttribute('data-prof-id'));
        generateEmailDraft(profId);
    }
});

