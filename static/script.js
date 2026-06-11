/**
 * PREMIUM RESEARCH MATCHMAKER
 * Modern, interactive UX with smart search, autocomplete, pathways
 */

const professors = [
    { id: 1, name: "Dan Goldwasser", title: "Associate Professor", research: ["NLP", "Machine Learning", "Text Analysis"], keywords: ["nlp", "language", "text", "machine learning", "processing"], description: "Researches natural language processing and computational linguistics", interests: "natural language processing and text analysis" },
    { id: 2, name: "Sooyeon Jeong", title: "Assistant Professor", research: ["Human-Agent Interaction", "HCI", "Interactive AI"], keywords: ["hci", "interaction", "human", "ai", "interface"], description: "Studies how people interact with AI systems and agents", interests: "human-centered AI and interactive systems" },
    { id: 3, name: "Jason Wu", title: "Assistant Professor", research: ["HCI", "UI Understanding", "AI Interface Design"], keywords: ["hci", "ui", "interface", "design", "human-centered"], description: "Works on interface design and AI usability research", interests: "interface design and user experience" },
    { id: 4, name: "David Gleich", title: "Associate Professor", research: ["Graph Algorithms", "Data Science", "Network Analysis"], keywords: ["graph", "network", "data science", "algorithms", "computing"], description: "Develops algorithms for network and graph analysis", interests: "data science and network analysis" },
    { id: 5, name: "Jennifer Neville", title: "Associate Professor", research: ["Machine Learning", "Data Mining", "Relational Data"], keywords: ["machine learning", "data mining", "learning", "data science"], description: "Advances machine learning methods for complex data", interests: "machine learning and data mining" },
    { id: 6, name: "Ninghui Li", title: "Professor of Computer Science", research: ["Privacy", "Security", "Access Control"], keywords: ["privacy", "security", "access control", "cybersecurity"], description: "Focuses on privacy and security in computing systems", interests: "privacy and security systems" },
    { id: 7, name: "Aniket Bera", title: "Assistant Professor", research: ["Computer Vision", "Robotics", "Human Behavior Modeling"], keywords: ["vision", "robotics", "human", "behavior", "computer vision"], description: "Researches computer vision and robotics applications", interests: "computer vision and robotics" },
    { id: 8, name: "Elisa Bertino", title: "Samuel D. Conte Professor", research: ["Database Security", "Privacy", "Data Protection"], keywords: ["database", "security", "privacy", "data protection", "access"], description: "Expert in database systems and data security", interests: "database security and data protection" },
    { id: 9, name: "Chris Clifton", title: "Associate Professor", research: ["Data Privacy", "Machine Learning Security", "Databases"], keywords: ["privacy", "security", "machine learning", "database"], description: "Works on privacy-preserving machine learning systems", interests: "secure machine learning systems" },
    { id: 10, name: "Tiark Rompf", title: "Assistant Professor", research: ["Programming Languages", "Compilers", "Software Systems"], keywords: ["programming", "languages", "compiler", "software"], description: "Designs programming languages and compiler systems", interests: "programming language design and optimization" },
    { id: 11, name: "Rajiv Khanna", title: "Assistant Professor", research: ["Machine Learning", "AI", "Data Science"], keywords: ["machine learning", "ai", "data science", "algorithms"], description: "Advances machine learning and AI methodologies", interests: "machine learning and artificial intelligence" },
    { id: 12, name: "Ming Yin", title: "Assistant Professor", research: ["Human-AI Interaction", "Crowdsourcing", "HCI"], keywords: ["human", "ai", "interaction", "crowdsourcing", "decision"], description: "Studies human-AI collaboration and decision-making", interests: "human-AI interaction and collaboration" },
    { id: 13, name: "Ruqi Zhang", title: "Assistant Professor", research: ["Machine Learning", "Statistics", "Optimization"], keywords: ["machine learning", "statistics", "optimization", "algorithms"], description: "Develops ML theory and optimization algorithms", interests: "machine learning algorithms and optimization" },
    { id: 14, name: "Yexiang Xue", title: "Assistant Professor", research: ["AI", "Computational Sustainability", "Optimization"], keywords: ["ai", "optimization", "machine learning", "sustainability"], description: "Applies AI to real-world impact problems", interests: "AI applications and computational sustainability" },
    { id: 15, name: "Raymond Yeh", title: "Assistant Professor", research: ["Computer Vision", "Graphics", "Machine Learning"], keywords: ["vision", "graphics", "computer vision", "machine learning"], description: "Researches computer vision and graphics methods", interests: "computer vision and graphics" }
];

const researchAreas = [
    { title: "Artificial Intelligence", description: "AI systems and intelligent automation", keywords: ["ai", "machine learning", "learning", "algorithms"] },
    { title: "Machine Learning", description: "Learning algorithms and data-driven systems", keywords: ["machine learning", "learning", "algorithms", "data science", "optimization"] },
    { title: "NLP", description: "Natural language and text processing", keywords: ["nlp", "language", "text", "processing"] },
    { title: "Human Computer Interaction", description: "Design and interaction systems", keywords: ["hci", "interaction", "human", "interface", "design", "ui"] },
    { title: "Security & Privacy", description: "Cybersecurity and data protection", keywords: ["security", "privacy", "access control", "cybersecurity", "protection"] },
    { title: "Computer Vision", description: "Visual understanding systems", keywords: ["vision", "computer vision", "image", "graphics", "robotics"] }
];

const researchPathways = [
    { interest: "AI & Machine Learning", professors: ["Jennifer Neville", "Ruqi Zhang", "Dan Goldwasser"] },
    { interest: "Security & Privacy", professors: ["Ninghui Li", "Elisa Bertino", "Chris Clifton"] },
    { interest: "HCI & Design", professors: ["Jason Wu", "Sooyeon Jeong"] },
    { interest: "Computer Vision", professors: ["Aniket Bera", "Raymond Yeh"] },
    { interest: "Data Science", professors: ["David Gleich", "Rajiv Khanna", "Jennifer Neville"] }
];

// ====================================
// INITIALIZATION
// ====================================

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

// ====================================
// SEARCH & AUTOCOMPLETE
// ====================================

function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const clearBtn = document.getElementById('clearBtn');
    
    // Autocomplete
    if (searchInput) {
        searchInput.addEventListener('input', handleAutocomplete);
        searchInput.addEventListener('keydown', handleAutocompleteKeys);
        document.addEventListener('click', (e) => {
            if (e.target !== searchInput && !e.target.closest('.autocomplete-menu')) {
                closeAutocomplete();
            }
        });
    }
    
    // Search
    if (searchBtn) searchBtn.addEventListener('click', () => {
        const query = searchInput.value;
        search(query);
    });
    
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                search(searchInput.value);
            }
        });
    }
    
    // Clear
    if (clearBtn) {
        clearBtn.addEventListener('click', clearSearch);
    }
    
    // Research area clicks
    document.querySelectorAll('.research-card.interactive').forEach(card => {
        card.addEventListener('click', function() {
            const keyword = this.getAttribute('data-keyword');
            if (keyword) {
                searchInput.value = keyword;
                search(keyword);
                scrollToResults();
            }
        });
    });
    
    // Spotlight buttons
    document.querySelectorAll('.spotlight-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const profName = this.getAttribute('data-prof-name');
            searchInput.value = profName;
            search(profName);
            scrollToResults();
        });
    });
    
    // CTA button scroll
    const ctaBtn = document.querySelector('[data-scroll-to]');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', function() {
            const target = this.getAttribute('data-scroll-to');
            const section = document.getElementById(target);
            if (section) section.scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // Modal close
    const modal = document.getElementById('emailModal');
    const overlay = document.getElementById('emailModalOverlay');
    if (overlay) {
        overlay.addEventListener('click', closeEmailModal);
    }
    
    // Email button delegation
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('prof-button')) {
            e.preventDefault();
            const profId = parseInt(e.target.getAttribute('data-prof-id'));
            openEmailModal(profId);
        }
    });
    
    // Expand buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('expand-btn')) {
            e.preventDefault();
            const card = e.target.closest('.prof-card');
            const expanded = card.querySelector('.prof-expanded');
            expanded.classList.toggle('show');
            e.target.textContent = expanded.classList.contains('show') ? 'Show Less' : 'Show More';
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
    
    // Research areas
    researchAreas.forEach(area => {
        if (area.title.toLowerCase().includes(query)) {
            suggestions.add(area.title);
        }
    });
    
    // Keywords
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
    menu.innerHTML = suggestions.map((s, i) => 
        `<div class="autocomplete-item" data-value="${s}" data-index="${i}">${s}</div>`
    ).join('');
    menu.style.display = 'block';
    
    document.querySelectorAll('.autocomplete-item').forEach(item => {
        item.addEventListener('click', function() {
            document.getElementById('searchInput').value = this.getAttribute('data-value');
            closeAutocomplete();
            search(this.getAttribute('data-value'));
        });
    });
}

function closeAutocomplete() {
    const menu = document.getElementById('autocompleteMenu');
    if (menu) menu.style.display = 'none';
}

function handleAutocompleteKeys(e) {
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
        document.getElementById('searchInput').value = selected.getAttribute('data-value');
        closeAutocomplete();
        search(selected.getAttribute('data-value'));
    }
}

// ====================================
// SEARCH LOGIC
// ====================================

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
    return Math.min(Math.round((hits / totalWeight) * 100), 100);
}

function search(query) {
    if (!query.trim()) {
        showAllProfessors();
        return;
    }
    
    const results = professors
        .map(prof => ({ ...prof, score: calculateMatchScore(query, prof) }))
        .filter(prof => prof.score > 0)
        .sort((a, b) => b.score - a.score);
    
    displayResults(results, query);
    closeAutocomplete();
}

function displayResults(results, searchTerm) {
    const resultsDiv = document.getElementById('results');
    const noResultsDiv = document.getElementById('noResults');
    const resultsTitle = document.getElementById('resultsTitle');
    const clearBtn = document.getElementById('clearBtn');
    
    resultsDiv.innerHTML = '';
    
    if (results.length === 0) {
        noResultsDiv.style.display = 'block';
        resultsTitle.textContent = `No results for "${searchTerm}"`;
        clearBtn.style.display = 'inline-block';
        return;
    }
    
    noResultsDiv.style.display = 'none';
    clearBtn.style.display = 'inline-block';
    resultsTitle.textContent = `${results.length} professor${results.length > 1 ? 's' : ''} found`;
    
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
    
    noResultsDiv.style.display = 'none';
    clearBtn.style.display = 'none';
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
    
    const tags = prof.research.map(r => `<span class="prof-tag">${r}</span>`).join('');
    
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
        <div class="prof-description">${prof.description}</div>
        <button class="prof-button" data-prof-id="${prof.id}">Generate Outreach Draft</button>
        <button class="expand-btn">Show More</button>
        <div class="prof-expanded">
            <div class="expanded-section">
                <div class="expanded-label">Research Interests</div>
                <div class="expanded-text">${prof.interests}</div>
            </div>
            <div class="expanded-section">
                <div class="expanded-label">Suggested Angle</div>
                <div class="expanded-text">Share your interest in ${prof.interests.toLowerCase()} and discuss relevant projects you've worked on.</div>
            </div>
        </div>
    `;
    
    return card;
}

function clearSearch() {
    document.getElementById('searchInput').value = '';
    document.getElementById('resultsTitle').textContent = 'All Professors';
    showAllProfessors();
    closeAutocomplete();
}

// ====================================
// RESEARCH AREAS
// ====================================

function populateResearchAreas() {
    const grid = document.querySelector('.research-areas-grid.premium');
    if (!grid) return;
    
    researchAreas.forEach((area, i) => {
        const count = professors.filter(prof =>
            area.keywords.some(kw => prof.keywords.some(pk => pk.includes(kw) || kw.includes(pk)))
        ).length;
        
        const card = document.createElement('div');
        card.className = 'research-card interactive';
        card.setAttribute('data-keyword', area.keywords[0]);
        card.innerHTML = `
            <div class="research-title">${area.title}</div>
            <div class="research-description">${area.description}</div>
            <div class="research-count">${count} Professor${count > 1 ? 's' : ''}</div>
        `;
        
        grid.appendChild(card);
    });
}

// ====================================
// SPOTLIGHT
// ====================================

function populateSpotlight() {
    const grid = document.querySelector('.spotlight-grid');
    if (!grid) return;
    
    // Randomize 3 professors
    const shuffled = [...professors].sort(() => Math.random() - 0.5);
    const featured = shuffled.slice(0, 3);
    
    featured.forEach(prof => {
        const card = document.createElement('div');
        card.className = 'spotlight-card';
        card.innerHTML = `
            <div class="spotlight-name">${prof.name}</div>
            <div class="spotlight-area">${prof.research[0]}</div>
            <div class="spotlight-desc">${prof.description}</div>
            <button class="spotlight-btn" data-prof-name="${prof.name}">Explore Research</button>
        `;
        grid.appendChild(card);
    });
}

// ====================================
// PATHWAYS
// ====================================

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
                        <div class="pathway-prof-area">${prof.research[0]}</div>
                    </div>
                `;
            }
        });
        
        div.innerHTML = html;
        grid.appendChild(div);
    });
}

// ====================================
// EMAIL MODAL
// ====================================

function openEmailModal(profId) {
    const prof = professors.find(p => p.id === profId);
    if (!prof) return;
    
    const lastName = prof.name.split(' ').pop();
    const studentName = "[Your Name]";
    const researchArea = prof.research[0];
    const interests = prof.interests;
    const skills = "Python, Flask, JavaScript, data analysis, and research tools";
    
    const emailText = `Dear Professor ${lastName},

My name is ${studentName}, and I am interested in undergraduate research opportunities related to ${researchArea}.

I recently learned about your work in ${researchArea}, and I found it particularly interesting because of my interests in ${interests}.

I have experience with ${skills}, and I would love to learn more about opportunities to contribute to your research group.

Thank you for your time and consideration. I would be happy to discuss any potential opportunities further.

Best regards,
${studentName}`;
    
    document.getElementById('modalProfName').textContent = prof.research[0];
    document.getElementById('emailDraft').value = emailText;
    document.getElementById('emailModal').style.display = 'block';
    document.getElementById('emailModalOverlay').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeEmailModal() {
    document.getElementById('emailModal').style.display = 'none';
    document.getElementById('emailModalOverlay').style.display = 'none';
    document.body.style.overflow = 'auto';
}

document.addEventListener('DOMContentLoaded', function() {
    const copyBtn = document.getElementById('copyEmailBtn');
    if (copyBtn) {
        copyBtn.addEventListener('click', function() {
            const textarea = document.getElementById('emailDraft');
            textarea.select();
            document.execCommand('copy');
            
            const originalText = this.textContent;
            this.textContent = 'Copied!';
            setTimeout(() => {
                this.textContent = originalText;
            }, 2000);
        });
    }
});

// ====================================
// NAVIGATION
// ====================================

function updateActiveNav() {
    window.addEventListener('scroll', () => {
        const sections = ['home', 'search-section', 'explore', 'spotlight', 'pathways'];
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section && section.offsetTop <= window.scrollY + 100) {
                current = sectionId;
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

function scrollToResults() {
    const section = document.getElementById('results-section');
    if (section) {
        setTimeout(() => {
            section.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    }
}

