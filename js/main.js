// Import quote data from the newly created js/quote_data.js file
// This will be loaded as a script tag in index.html, so quoteData is available globally

// --- PAGINATION STATE ---
const QUOTES_PER_PAGE = 3;
let currentPage = 0; // Starts at 0
// --- END PAGINATION STATE ---

// QuoteJourneyState - Centralized State Management for Contextual Quote Journey
class QuoteJourneyState {
    constructor(quoteData) {
        // Validate input
        if (!quoteData || !quoteData.quotes || !Array.isArray(quoteData.quotes)) {
            throw new Error('Invalid quote data provided to QuoteJourneyState');
        }

        // Store reference to quote data
        this.quoteData = quoteData;

        // Initialize state
        this.state = {
            // Current active quote
            currentQuoteId: null,

            // Journey history - tracks user navigation through quotes
            journeyHistory: [],

            // UI state
            ui: {
                isJourneyViewActive: false,
                selectedTheme: null,
                filterCriteria: {
                    themes: [],
                    difficulty: null,
                    popularity: null
                }
            },

            // Application metadata
            metadata: {
                sessionStartTime: new Date().toISOString(),
                lastInteraction: null,
                totalInteractions: 0
            }
        };

        // State subscribers
        this.subscribers = [];

        // Try to load persisted state first
        const hasPersistedState = this.loadState();

        // Only initialize with first quote if no persisted state
        if (!hasPersistedState && this.quoteData.quotes.length > 0) {
            this.setCurrentQuote(this.quoteData.quotes[0].id);
        }
    }

    // Get current quote object
    getCurrentQuote() {
        if (!this.state.currentQuoteId) {
            return null;
        }

        const quote = this.quoteData.quotes.find(q => q.id === this.state.currentQuoteId);
        if (!quote) {
            console.error(`Quote with ID ${this.state.currentQuoteId} not found`);
            return null;
        }

        return quote;
    }

    // Set current quote by ID
    setCurrentQuote(quoteId) {
        // Validate quote ID exists
        const quote = this.quoteData.quotes.find(q => q.id === quoteId);
        if (!quote) {
            console.error(`Invalid quote ID: ${quoteId}`);
            return false;
        }

        // Update state
        const previousQuoteId = this.state.currentQuoteId;
        this.state.currentQuoteId = quoteId;

        // Update metadata
        this.state.metadata.lastInteraction = new Date().toISOString();
        this.state.metadata.totalInteractions++;

        // Add to journey history if different from previous
        if (previousQuoteId !== quoteId) {
            this.addToJourney(quoteId);
        }


        // Notify subscribers
        this.notifySubscribers('currentQuoteChanged', {
            previousQuoteId,
            currentQuoteId: quoteId,
            quote
        });

        // Persist state
        this.persistState();

        return true;
    }

    // Get quotes related to the current quote
    getRelatedQuotes() {
        const currentQuote = this.getCurrentQuote();
        if (!currentQuote || !currentQuote.relatedQuotes) {
            return [];
        }

        // Get related quote IDs
        const relatedQuoteIds = currentQuote.relatedQuotes.map(rq => rq.id);

        // Find full quote objects
        return relatedQuoteIds
            .map(id => this.quoteData.quotes.find(q => q.id === id))
            .filter(q => q !== undefined); // Filter out any undefined results
    }

    // Add quote to journey history
    addToJourney(quoteId) {
        // Validate quote ID exists
        const quote = this.quoteData.quotes.find(q => q.id === quoteId);
        if (!quote) {
            console.error(`Invalid quote ID: ${quoteId}`);
            return false;
        }

        // Create journey entry
        const journeyEntry = {
            quoteId,
            timestamp: new Date().toISOString(),
            title: quote.title,
            themes: quote.themes
        };

        // Add to journey history
        this.state.journeyHistory.push(journeyEntry);

        // Notify subscribers
        this.notifySubscribers('journeyUpdated', {
            journeyEntry,
            history: this.state.journeyHistory
        });

        // Persist state
        this.persistState();

        return true;
    }

    // Get journey history
    getJourneyHistory() {
        return [...this.state.journeyHistory]; // Return a copy to prevent external mutation
    }

    // Subscribe to state changes
    subscribe(callback) {
        if (typeof callback !== 'function') {
            console.error('Subscriber callback must be a function');
            return null;
        }

        // Add callback to subscribers
        this.subscribers.push(callback);

        // Return unsubscribe function
        return () => {
            this.subscribers = this.subscribers.filter(sub => sub !== callback);
        };
    }

    // Notify all subscribers of state changes
    notifySubscribers(eventType, data) {
        this.subscribers.forEach(callback => {
            try {
                callback(eventType, data, this.state);
            } catch (error) {
                console.error('Error in subscriber callback:', error);
            }
        });
    }

    // Validate state integrity
    validateState() {
        const errors = [];

        // Check current quote ID exists in quotes
        if (this.state.currentQuoteId) {
            const quoteExists = this.quoteData.quotes.some(q => q.id === this.state.currentQuoteId);
            if (!quoteExists) {
                errors.push(`Current quote ID ${this.state.currentQuoteId} not found in quote data`);
            }
        }

        // Check journey history entries exist in quotes
        this.state.journeyHistory.forEach((entry, index) => {
            const quoteExists = this.quoteData.quotes.some(q => q.id === entry.quoteId);
            if (!quoteExists) {
                errors.push(`Journey history entry at index ${index} references non-existent quote ID ${entry.quoteId}`);
            }
        });

        // Return validation result
        return {
            isValid: errors.length === 0,
            errors
        };
    }

    // Persist state to localStorage
    persistState() {
        try {
            // Create state to persist (exclude large quoteData)
            const stateToPersist = {
                currentQuoteId: this.state.currentQuoteId,
                journeyHistory: this.state.journeyHistory,
                ui: this.state.ui,
                metadata: this.state.metadata
            };

            localStorage.setItem('quoteJourneyState', JSON.stringify(stateToPersist));


            return true;
        } catch (error) {
            console.error('Failed to persist state:', error);
            return false;
        }
    }

    // Load state from localStorage
    loadState() {
        try {
            const persistedState = localStorage.getItem('quoteJourneyState');
            if (!persistedState) {
                return false; // No persisted state found
            }

            const parsedState = JSON.parse(persistedState);

            // Validate loaded state
            if (!parsedState || typeof parsedState !== 'object') {
                console.error('Invalid persisted state format');
                return false;
            }

            // Merge with current state
            this.state = {
                ...this.state,
                currentQuoteId: parsedState.currentQuoteId || this.state.currentQuoteId,
                journeyHistory: Array.isArray(parsedState.journeyHistory) ? parsedState.journeyHistory : this.state.journeyHistory,
                ui: parsedState.ui || this.state.ui,
                metadata: {
                    ...this.state.metadata,
                    ...parsedState.metadata,
                    sessionStartTime: new Date().toISOString(), // Reset session start time
                    totalInteractions: parsedState.metadata?.totalInteractions || 0
                }
            };

            // Notify subscribers of state restoration
            this.notifySubscribers('stateRestored', { state: this.state });


            return true;
        } catch (error) {
            console.error('Failed to load persisted state:', error);
            return false;
        }
    }

    // Clear all persisted state
    clearPersistedState() {
        try {
            localStorage.removeItem('quoteJourneyState');


            // Reset current state
            this.state.journeyHistory = [];
            this.state.ui.isJourneyViewActive = false;
            this.state.ui.selectedTheme = null;
            this.state.ui.filterCriteria.themes = [];
            this.state.ui.filterCriteria.difficulty = null;
            this.state.ui.filterCriteria.popularity = null;

            // Notify subscribers
            this.notifySubscribers('stateCleared', { state: this.state });

            return true;
        } catch (error) {
            console.error('Failed to clear persisted state:', error);
            return false;
        }
    }

    // Get quotes by theme
    getQuotesByTheme(themeId) {
        return this.quoteData.quotes.filter(quote =>
            quote.themes && quote.themes.includes(themeId)
        );
    }

    // Get all available themes
    getAvailableThemes() {
        return this.quoteData.themes || [];
    }

    // Set UI filter criteria
    setFilterCriteria(criteria) {
        // Validate criteria
        if (!criteria || typeof criteria !== 'object') {
            console.error('Invalid filter criteria');
            return false;
        }

        // Update filter criteria
        this.state.ui.filterCriteria = {
            ...this.state.ui.filterCriteria,
            ...criteria
        };

        // Notify subscribers
        this.notifySubscribers('filterCriteriaChanged', {
            criteria: this.state.ui.filterCriteria
        });

        // Persist state
        this.persistState();

        return true;
    }

    // Get filtered quotes based on current criteria
    getFilteredQuotes() {
        let filteredQuotes = [...this.quoteData.quotes];

        // Filter by themes
        if (this.state.ui.filterCriteria.themes && this.state.ui.filterCriteria.themes.length > 0) {
            filteredQuotes = filteredQuotes.filter(quote =>
                this.state.ui.filterCriteria.themes.some(theme =>
                    quote.themes && quote.themes.includes(theme)
                )
            );
        }

        // Filter by difficulty
        if (this.state.ui.filterCriteria.difficulty) {
            filteredQuotes = filteredQuotes.filter(quote =>
                quote.metadata && quote.metadata.difficulty === this.state.ui.filterCriteria.difficulty
            );
        }

        // Filter by popularity (minimum threshold)
        if (this.state.ui.filterCriteria.popularity !== null && this.state.ui.filterCriteria.popularity !== undefined) {
            filteredQuotes = filteredQuotes.filter(quote =>
                quote.metadata && quote.metadata.popularity >= this.state.ui.filterCriteria.popularity
            );
        }

        return filteredQuotes;
    }

}

/**
 * Renders the active page of insights into the grid container.
 */
function renderAllInsightsInGrid() {
    const cardContainer = document.getElementById('insightContainer');
    const counter = document.getElementById('insightCounter');
    const prevBtn = document.getElementById('prevInsightBtn');
    const nextBtn = document.getElementById('nextInsightBtn');

    if (!cardContainer || !window.quoteJourneyState) return;

    const allQuotes = window.quoteJourneyState.quoteData.quotes;
    const totalQuotes = allQuotes.length;
    const totalPages = Math.ceil(totalQuotes / QUOTES_PER_PAGE);

    // Calculate slice
    const startIndex = currentPage * QUOTES_PER_PAGE;
    const endIndex = Math.min(startIndex + QUOTES_PER_PAGE, totalQuotes);
    const quotesToDisplay = allQuotes.slice(startIndex, endIndex);

    // Update Counter (Force update)
    if (counter) {
        // Use a localized format if possible, otherwise standard "Page X / Y"
        counter.textContent = `Page ${currentPage + 1} / ${totalPages}`;
    }

    // Generate HTML
    cardContainer.innerHTML = quotesToDisplay.map((quote, index) => {
        const staggerClass = index < 3 ? ` reveal-stagger-${index + 1}` : '';

        // Determine Book Link
        let bookLink = "#";
        let linkText;

        // Use a simple switch for the three primary languages, defaulting to English,
        // and assuming the language code is available via the URL or a global var.
        const langCode = document.documentElement.lang.substring(0, 2).toUpperCase();

        switch (langCode) {
            case 'FR': linkText = "Voir le contexte du livre →"; break;
            case 'ES': linkText = "Ver contexto del libro →"; break;
            case 'NO': linkText = "Se bokkontekst →"; break;
            case 'PL': linkText = "Zobacz kontekst książki →"; break;
            case 'LA': linkText = "Vide contextum libri →"; break;
            case 'ZH': linkText = "查看书籍语境 →"; break;
            case 'EGY': linkText = "عرض سياق الكتاب →"; break;
            default: linkText = "View Book Context →"; break;
        }

        if (quote.source.work.includes("Do You Read Me")) {
            bookLink = "books/do-you-read-me.html";
        } else if (quote.source.work.includes("Triumphant Victim")) {
            bookLink = "books/triumphant-victim.html";
        }

        return `
        <div class="reveal ${staggerClass} insight-card p-6 text-cream cursor-pointer" tabindex="${index + 1}">
            <h3 class="text-xl font-bold text-gold">${quote.title}</h3>
            <p class="quote-text">"${quote.quote}"</p>
            <div class="insight-reveal-content text-sm mt-4">
                <p>${quote.context}</p>
                <div class="meta-info mt-3 opacity-75 text-xs">
                    <strong>Source:</strong> ${quote.source.work}
                </div>
            </div>
            <div class="mt-6 pt-4 border-t border-gold/30">
                <a href="${bookLink}" class="text-gold font-bold hover:text-cream transition-colors duration-300 inline-flex items-center">
                    ${linkText}
                </a>
            </div>
        </div>
        `;
    }).join('');

    // Update Button States
    if (prevBtn) prevBtn.disabled = currentPage === 0;
    if (nextBtn) nextBtn.disabled = currentPage === totalPages - 1;

    reinitializeScrollObserver();
}

/**
 * Sets up listeners for the Previous/Next pagination buttons.
 * Includes auto-scroll to top of section for better UX.
 */
function setupPaginationControls() {
    const prevBtn = document.getElementById('prevInsightBtn');
    const nextBtn = document.getElementById('nextInsightBtn');
    const insightsSection = document.getElementById('insights');

    // Scroll helper
    const scrollToTop = () => {
        if (insightsSection) {
            // Scroll to the top of the section with a slight offset for the fixed header
            const headerOffset = 100;
            const elementPosition = insightsSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentPage > 0) {
                currentPage--;
                renderAllInsightsInGrid();
                scrollToTop(); // <--- Auto-scroll added
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const totalQuotes = window.quoteJourneyState.quoteData.quotes.length;
            const totalPages = Math.ceil(totalQuotes / QUOTES_PER_PAGE);

            if (currentPage < totalPages - 1) {
                currentPage++;
                renderAllInsightsInGrid();
                scrollToTop(); // <--- Auto-scroll added
            }
        });
    }
}

/*
================================================================================
LEGACY CODE - Temporarily commented out during refactoring
================================================================================

// Quote Carousel Implementation
class QuoteCarousel {
    constructor() {
        this.quotes = [
            {
                title: "The Failure of Language",
                quote: "Every sentence is already a betrayal of the initial thought.",
                context: "This insight explores the fundamental semiotic gap between the signifier and the signified, drawing from Lacan's early work on communication limits."
            },
            {
                title: "Victimhood as Identity",
                quote: "To adopt the role of victim is to achieve the only form of triumph the ego truly understands.",
                context: "An excerpt from Triumphant Victim, discussing how contemporary social structures encourage and validate a performative identity rooted in structural inadequacy."
            },
            {
                title: "Interpretation's End",
                quote: "The purpose of psychoanalysis is not to provide answers, but to terminate the desire for them.",
                context: "A central tenet of Miller's philosophy: that true resolution comes when the subject ceases to project the desire for completion onto external narratives."
            }
        ];
        this.currentIndex = 0;
        this.init();
    }
    
    init() {
        this.setupQuoteCards();
        this.startAutoRotate();
        this.addEventListeners();
    }
    
    setupQuoteCards() {
        const insightCards = document.querySelectorAll('.insight-card');
        if (insightCards.length === 0) return;
        
        // Update the first card to show the first quote
        this.updateQuoteDisplay(insightCards[0], this.quotes[0]);
    }
    
    updateQuoteDisplay(card, quote) {
        const title = card.querySelector('h3');
        const quoteText = card.querySelector('p');
        const context = card.querySelector('.insight-reveal-content p');
        
        if (title) title.textContent = quote.title;
        if (quoteText) quoteText.textContent = `"${quote.quote}"`;
        if (context) context.textContent = quote.context;
    }
    
    startAutoRotate() {
        setInterval(() => {
            this.rotateQuotes();
        }, 8000); // Rotate every 8 seconds
    }
    
    rotateQuotes() {
        const insightCards = document.querySelectorAll('.insight-card');
        if (insightCards.length === 0) return;
        
        this.currentIndex = (this.currentIndex + 1) % this.quotes.length;
        const currentQuote = this.quotes[this.currentIndex];
        
        // Update the first card with the new quote
        this.updateQuoteDisplay(insightCards[0], currentQuote);
        
        // Add a subtle animation effect
        insightCards[0].style.opacity = '0';
        setTimeout(() => {
            insightCards[0].style.opacity = '1';
        }, 300);
    }
    
    addEventListeners() {
        // Add smooth scrolling to navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Mobile menu toggle (if needed in the future)
        this.setupMobileMenu();
    }
    
    setupMobileMenu() {
        // Placeholder for future mobile menu implementation
        // This would typically add a hamburger menu for mobile devices
    }
    
    setupNewsletterForm() {
        const newsletterForm = document.getElementById('newsletterForm');
        if (!newsletterForm) return;
        
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            const successMessage = document.getElementById('newsletterSuccess');
            
            // Simple validation
            if (email && email.includes('@')) {
                // Show success message
                successMessage.classList.remove('hidden');
                
                // Reset form
                this.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.classList.add('hidden');
                }, 5000);
            }
        });
    }
}
*/

// Initialize the QuoteJourneyState when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize scroll animations and smooth scrolling first
    // This ensures they're available for all subsequent content
    window.revealOnScroll = new RevealOnScroll({
        threshold: 0.15, // Trigger when 15% of element is visible
        rootMargin: '0px 0px -50px 0px', // Start revealing 50px before element comes into view
        selector: '.reveal', // Target elements with .reveal class
        activeClass: 'active' // Add .active class when revealed
    });

    // Initialize SmoothScroll
    window.smoothScroll = new SmoothScroll({
        duration: 800, // Animation duration in ms
        easing: 'easeInOutCubic', // Natural easing
        offset: 0, // No additional offset
        selector: 'a[href^="#"]' // All anchor links starting with #
    });

    // Initialize simple scroll listener for glass header effect
    initializeGlassHeader();

    console.log('Scroll animations, smooth scrolling, and glass header initialized');

    // Initialize the new QuoteJourneyState with quote data
    // Note: quoteData should be loaded from js/quote_data.js before this script
    if (typeof quoteData !== 'undefined') {
        // Create global instance of QuoteJourneyState
        window.quoteJourneyState = new QuoteJourneyState(quoteData);

        // Render all insights in grid to restore 3-column visual layout
        renderAllInsightsInGrid();

        // Set up pagination controls
        setupPaginationControls();

        // Initialize insight card interactions
        initializeInsightCards();

        // Log initialization
        console.log('QuoteJourneyState initialized with', quoteData.quotes.length, 'quotes');

        // Set up QuoteJourneyState event listeners
        setupQuoteJourneyStateEvents();

        // Initialize FAQ expand/collapse functionality
        initializeFAQListeners();

        // Initialize the assessment engine
        initializeAssessmentEngine();

        // Single-card navigation logic removed as part of visual layout reversal
    } else {
        console.error('quoteData not available. Make sure js/quote_data.js is loaded before js/main.js');
    }

    /*
    ================================================================================================
    LEGACY INITIALIZATION CODE - Temporarily commented out during refactoring
    ================================================================================================
    
    const carousel = new QuoteCarousel();
    
    // Initialize existing insight card interactions
    const insightCards = document.querySelectorAll('.insight-card');
    insightCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
    
    // Initialize newsletter form
    carousel.setupNewsletterForm();
    */
});




/**
 * Initialize insight card interactions
 */
function initializeInsightCards() {
    try {
        console.log('Initializing insight cards...');

        // Single-card navigation logic removed as part of visual layout reversal

        // Use requestAnimationFrame to ensure DOM is updated before reinitializing observer
        requestAnimationFrame(() => {
            // Add a small delay to ensure all DOM updates are complete
            setTimeout(() => {
                reinitializeScrollObserver();
                setupInsightCardListeners();
            }, 50); // Small delay to ensure DOM is fully updated
        });

    } catch (error) {
        console.error('Error in initializeInsightCards:', error);
    }
}

/**
 * Reinitialize the scroll observer with proper cleanup and error handling
 */
function reinitializeScrollObserver() {
    try {
        console.log('Reinitializing scroll observer...');

        if (window.revealOnScroll) {
            // Properly destroy existing observer to avoid memory leaks
            console.log('Destroying existing observer...');
            window.revealOnScroll.destroy();
            window.revealOnScroll = null;
        }

        // Check if there are any .reveal elements to observe
        const revealElements = document.querySelectorAll('.reveal');
        console.log(`Found ${revealElements.length} .reveal elements to observe`);

        if (revealElements.length > 0) {
            // Create new observer instance
            window.revealOnScroll = new RevealOnScroll({
                threshold: 0.15, // Trigger when 15% of element is visible
                rootMargin: '0px 0px -50px 0px', // Start revealing 50px before element comes into view
                selector: '.reveal', // Target elements with .reveal class
                activeClass: 'active' // Add .active class when revealed
            });

            console.log('Scroll observer successfully reinitialized with', revealElements.length, 'elements');
        } else {
            console.warn('No .reveal elements found to observe');
        }

    } catch (error) {
        console.error('Error reinitializing scroll observer:', error);
        // Attempt to create a basic observer as fallback
        try {
            window.revealOnScroll = new RevealOnScroll({
                threshold: 0.15,
                rootMargin: '0px 0px -50px 0px',
                selector: '.reveal',
                activeClass: 'active'
            });
            console.log('Fallback observer created successfully');
        } catch (fallbackError) {
            console.error('Failed to create fallback observer:', fallbackError);
        }
    }
}

/**
 * Setup event listeners for insight cards
 */
function setupInsightCardListeners() {
    try {
        console.log('Setting up insight card listeners...');

        const insightCards = document.querySelectorAll('.insight-card');
        console.log(`Found ${insightCards.length} insight cards`);

        insightCards.forEach((card, index) => {
            // Remove any existing click listeners to avoid duplicates
            const newCard = card.cloneNode(true);
            card.parentNode.replaceChild(newCard, card);

            // Add click listener
            newCard.addEventListener('click', function () {
                this.classList.toggle('active');

            });
        });

        console.log('Insight card listeners setup complete');

    } catch (error) {
        console.error('Error setting up insight card listeners:', error);
    }
}



/**
 * Set up QuoteJourneyState event listeners
 */
function setupQuoteJourneyStateEvents() {
    if (!window.quoteJourneyState) return;

    // Subscribe to state changes
    window.quoteJourneyState.subscribe((eventType, data, state) => {
        switch (eventType) {
            case 'currentQuoteChanged':
                // Details panel functionality removed
                break;


            case 'journeyUpdated':
                break;
        }
    });
}




// Scroll Reveal with Intersection Observer
class RevealOnScroll {
    constructor(options = {}) {
        // Default configuration
        this.options = {
            threshold: options.threshold || 0.15, // 15% of element visible
            rootMargin: options.rootMargin || '0px 0px -50px 0px', // Trigger slightly before element comes into view
            selector: options.selector || '.reveal', // Elements to observe
            activeClass: options.activeClass || 'active' // Class to add when revealed
        };

        // Store observer instance
        this.observer = null;

        // Initialize
        this.init();
    }

    init() {
        // Check if Intersection Observer is supported
        if (!window.IntersectionObserver) {
            console.warn('Intersection Observer is not supported in this browser');
            this.fallbackInit();
            return;
        }

        // Get all elements to observe
        const elementsToReveal = document.querySelectorAll(this.options.selector);
        if (elementsToReveal.length === 0) {
            console.log(`No elements found with selector "${this.options.selector}"`);
            return;
        }

        // Create Intersection Observer
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // When element comes into view
                if (entry.isIntersecting) {
                    entry.target.classList.add(this.options.activeClass);

                    // Optional: Stop observing after element is revealed
                    // this.observer.unobserve(entry.target);
                }
                // Optional: Remove class when element leaves view
                // else {
                //     entry.target.classList.remove(this.options.activeClass);
                // }
            });
        }, {
            threshold: this.options.threshold,
            rootMargin: this.options.rootMargin
        });

        // Start observing each element
        elementsToReveal.forEach(element => {
            // Set initial state (will be overridden by CSS)
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';

            this.observer.observe(element);
        });

        console.log(`RevealOnScroll initialized with ${elementsToReveal.length} elements`);
    }

    // Fallback for browsers that don't support Intersection Observer
    fallbackInit() {
        const elementsToReveal = document.querySelectorAll(this.options.selector);

        // Simple scroll event listener as fallback
        const checkScroll = () => {
            const triggerBottom = window.innerHeight * 0.8; // 80% of viewport height

            elementsToReveal.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;

                if (elementTop < triggerBottom) {
                    element.classList.add(this.options.activeClass);
                }
            });
        };

        // Initial check
        checkScroll();

        // Throttled scroll event
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    checkScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // Method to manually reveal an element
    revealElement(element) {
        if (element && element.classList.contains(this.options.selector.replace('.', ''))) {
            element.classList.add(this.options.activeClass);
        }
    }

    // Method to manually hide an element
    hideElement(element) {
        if (element && element.classList.contains(this.options.selector.replace('.', ''))) {
            element.classList.remove(this.options.activeClass);
        }
    }

    // Method to destroy the observer
    destroy() {
        if (this.observer) {
            this.observer.disconnect();
            this.observer = null;
        }
    }
}

// Smooth Scroll Implementation
class SmoothScroll {
    constructor(options = {}) {
        this.options = {
            duration: options.duration || 800, // Animation duration in ms
            easing: options.easing || 'easeInOutCubic', // Easing function
            offset: options.offset || 0, // Offset from target position
            selector: options.selector || 'a[href^="#"]' // Links to handle
        };

        // Store animation frame ID for cancellation
        this.animationFrameId = null;

        // Initialize
        this.init();
    }

    init() {
        // Check if CSS smooth-scroll is supported
        const supportsCSSSmoothScroll = 'scrollBehavior' in document.documentElement.style;

        // Get all navigation links
        const scrollLinks = document.querySelectorAll(this.options.selector);

        scrollLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                // Get the target element from href attribute
                const href = link.getAttribute('href');

                // Skip if it's just "#" or empty
                if (!href || href === '#') {
                    return;
                }

                // Try to find the target element
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    e.preventDefault();

                    // Use CSS smooth scroll if supported and no custom easing needed
                    if (supportsCSSSmoothScroll && this.options.easing === 'easeInOutCubic') {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    } else {
                        // Use JavaScript smooth scroll with custom easing
                        this.smoothScrollTo(targetElement);
                    }
                }
            });
        });

        console.log(`SmoothScroll initialized with ${scrollLinks.length} links`);
    }

    // JavaScript smooth scroll implementation with custom easing
    smoothScrollTo(targetElement) {
        // Cancel any ongoing animation
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }

        const startPosition = window.pageYOffset;
        const targetPosition = this.getOffsetTop(targetElement) - this.options.offset;
        const distance = targetPosition - startPosition;
        const duration = this.options.duration;

        let startTime = null;

        // Easing function
        const easing = {
            // Linear
            linear: t => t,

            // Quadratic
            easeInQuad: t => t * t,
            easeOutQuad: t => t * (2 - t),
            easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,

            // Cubic
            easeInCubic: t => t * t * t,
            easeOutCubic: t => (--t) * t * t + 1,
            easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,

            // Exponential
            easeInExpo: t => t === 0 ? 0 : Math.pow(2, 10 * (t - 1)),
            easeOutExpo: t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
            easeInOutExpo: t => t === 0 ? 0 : t === 1 ? 1 : t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2
        };

        // Get the appropriate easing function
        const easingFunction = easing[this.options.easing] || easing.easeInOutCubic;

        // Animation loop
        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);

            // Calculate the new scroll position
            const position = startPosition + distance * easingFunction(progress);

            // Scroll to the new position
            window.scrollTo(0, position);

            // Continue animation if not complete
            if (timeElapsed < duration) {
                this.animationFrameId = requestAnimationFrame(animation);
            }
        };

        // Start the animation
        this.animationFrameId = requestAnimationFrame(animation);
    }

    // Get the element's offset from the top of the document
    getOffsetTop(element) {
        let offsetTop = 0;

        while (element) {
            offsetTop += element.offsetTop;
            element = element.offsetParent;
        }

        return offsetTop;
    }

    // Method to scroll to a specific position
    scrollToPosition(position) {
        // Cancel any ongoing animation
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }

        const startPosition = window.pageYOffset;
        const distance = position - startPosition;
        const duration = this.options.duration;

        let startTime = null;

        // Animation loop
        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);

            // Simple ease-in-out cubic
            const easeProgress = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            // Calculate the new scroll position
            const newPosition = startPosition + distance * easeProgress;

            // Scroll to the new position
            window.scrollTo(0, newPosition);

            // Continue animation if not complete
            if (timeElapsed < duration) {
                this.animationFrameId = requestAnimationFrame(animation);
            }
        };

        // Start the animation
        this.animationFrameId = requestAnimationFrame(animation);
    }

    // Method to destroy the smooth scroll
    destroy() {
        // Cancel any ongoing animation
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }

        // Remove event listeners
        const scrollLinks = document.querySelectorAll(this.options.selector);
        scrollLinks.forEach(link => {
            // Clone the node to remove all event listeners
            const newLink = link.cloneNode(true);
            link.parentNode.replaceChild(newLink, link);
        });
    }
}

// Simple scroll listener for glass header effect
function initializeGlassHeader() {
    const navElement = document.querySelector('nav');

    if (!navElement) {
        console.warn('Navigation element not found');
        return;
    }

    // Initial check
    updateNavBackground();

    // Throttled scroll event
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateNavBackground();
                ticking = false;
            });
            ticking = true;
        }
    });

    function updateNavBackground() {
        if (window.scrollY > 50) {
            navElement.classList.add('scrolled-nav');
        } else {
            navElement.classList.remove('scrolled-nav');
        }
    }

    console.log('Glass header scroll listener initialized');
}

/**
 * Initializes listeners for the FAQ section to enable expand/collapse functionality.
 */
function initializeFAQListeners() {
    // Handle button-based FAQ structure (used in most languages)
    const faqButtons = document.querySelectorAll('.faq-question');

    faqButtons.forEach(button => {
        button.addEventListener('click', function () {
            const answer = this.nextElementSibling; // The answer div
            const icon = this.querySelector('.faq-icon');
            const isExpanded = this.getAttribute('aria-expanded') === 'true';

            // Toggle answer visibility
            if (answer) {
                answer.classList.toggle('hidden');
            }

            // Toggle aria-expanded state
            this.setAttribute('aria-expanded', String(!isExpanded));

            // Toggle icon rotation class (assuming 'rotate-180' exists in CSS)
            if (icon) {
                icon.classList.toggle('rotate-180');
            }
        });
    });

    // Handle details/summary-based FAQ structure (used in Spanish version)
    const faqDetails = document.querySelectorAll('.faq-item details');

    faqDetails.forEach(details => {
        details.addEventListener('toggle', function () {
            const summary = this.querySelector('summary');

            // Update aria-expanded on the summary element
            if (summary) {
                summary.setAttribute('aria-expanded', String(this.open));
            }

            // Note: Spanish version doesn't have faq-icon elements, so we skip icon rotation
            // The default browser behavior for details/summary elements provides the expand/collapse functionality
        });
    });

    // Handle Chinese version FAQ structure (buttons without icons)
    const chineseFaqButtons = document.querySelectorAll('.faq-question:not(:has(.faq-icon))');

    chineseFaqButtons.forEach(button => {
        button.addEventListener('click', function () {
            const answer = this.nextElementSibling; // The answer div
            const isExpanded = this.getAttribute('aria-expanded') === 'true';

            // Toggle answer visibility
            if (answer) {
                answer.classList.toggle('hidden');
            }

            // Toggle aria-expanded state
            this.setAttribute('aria-expanded', String(!isExpanded));

            // Note: Chinese version doesn't have faq-icon elements, so we skip icon rotation
        });
    });
}

// List of the 4 quiz JSON file names (without path)
const quizFiles = [
    'quiz_social_symptom.json',
    'quiz_semiotic_gap.json',
    'quiz_analyst_dilemma.json',
    'quiz_victimhood_architecture.json'
];

/**
 * Fetches a specific JSON file from js/data/ asynchronously
 * @param {string} fileName - The name of the JSON file to fetch
 * @returns {Promise<Object>} - The JSON data from the file
 */
async function fetchAssessmentData(fileName) {
    try {
        const filePath = `js/data/${fileName}`;
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Failed to fetch assessment data: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching assessment data from ${fileName}:`, error);
        throw error;
    }
}

/**
 * Determines active language from document.documentElement.lang and returns corresponding localized data
 * @param {Object} data - The data object containing localized content
 * @returns {Object} - The localized content for the active language
 */
function getLocalizedContent(data) {
    // Get the current language from the HTML document
    const currentLang = document.documentElement.lang || 'en';
    const langCode = currentLang.substring(0, 2).toUpperCase();

    // Verbose logging: Log detected language code
    console.log(`[getLocalizedContent] Detected language code: ${langCode}`);

    // Verbose logging: Log available keys in data object
    const availableKeys = Object.keys(data);
    console.log(`[getLocalizedContent] Available language keys: ${availableKeys.join(', ')}`);

    // Verbose logging: Log fallback logic
    if (data[langCode]) {
        console.log(`[getLocalizedContent] Using localized content for ${langCode}`);
        return data[langCode];
    } else if (data.EN) {
        console.log(`[getLocalizedContent] No content for ${langCode}, falling back to English (EN)`);
        return data.EN;
    } else {
        console.log(`[getLocalizedContent] No content for ${langCode} or English (EN), returning base data object`);
        return data;
    }
}

/**
 * Displays welcome message, disclaimer for first quiz, and "Start" button
 * @param {Array} quizList - List of quiz file names
 */
async function renderInitialScreen(quizList) {
    try {
        // Find the assessments section
        const assessmentsSection = document.getElementById('assessments');
        if (!assessmentsSection) {
            console.error('Assessments section not found');
            return;
        }

        // Fetch the first quiz data to display its title and description
        const firstQuizData = await fetchAssessmentData(quizList[0]);
        const localizedContent = getLocalizedContent(firstQuizData);

        // Localized text based on language
        const currentLang = document.documentElement.lang || 'en';
        const localizedText = {
            startButton: {
                'en': 'Start Assessment',
                'fr': 'Commencer l\'évaluation',
                'es': 'Comenzar evaluación',
                'no': 'Start vurdering',
                'pl': 'Rozpocznij ocenę',
                'la': 'Incepta aestimationem',
                'zh': '开始评估',
                'egy': 'ابدأ التقييم'
            }[currentLang] || 'Start Assessment'
        };

        // Create the assessment content container
        const assessmentContainer = document.createElement('div');
        assessmentContainer.className = 'assessment-container max-w-4xl mx-auto';

        // Add the disclaimer and start button
        assessmentContainer.innerHTML = `
            <div class="bg-oxford-blue/10 border border-oxford-blue rounded-lg p-8 mb-8">
                <h3 class="text-2xl font-bold text-oxford-blue mb-4">${localizedContent.title}</h3>
                <p class="text-charcoal mb-6">${localizedContent.description}</p>
                <div class="disclaimer bg-cream/50 p-6 rounded-md border-l-4 border-gold">
                    <p class="text-charcoal italic mb-4">
                        ${localizedContent.disclaimer || 'This assessment is designed for educational purposes to explore psychoanalytic concepts. It is not a substitute for professional clinical evaluation or diagnosis. Your responses are for personal reflection and learning.'}
                    </p>
                    <p class="text-charcoal text-sm">
                        By proceeding, you acknowledge that this is a self-assessment tool and agree to use it
                        for educational purposes only.
                    </p>
                </div>
                <div class="mt-6 text-center">
                    <button id="startAssessmentBtn" class="px-8 py-3 bg-oxford-blue text-cream font-bold rounded-md hover:bg-charcoal transition duration-300 focus:outline-none focus:ring-2 focus:ring-gold">
                        ${localizedText.startButton}
                    </button>
                </div>
            </div>
            <div id="assessmentContent" class="hidden">
                <!-- Quiz content will be displayed here when the user starts the assessment -->
            </div>
        `;

        // Clear any existing content and add the new container
        assessmentsSection.innerHTML = '';
        assessmentsSection.appendChild(assessmentContainer);

        // Add event listener for the start button
        const startButton = document.getElementById('startAssessmentBtn');
        if (startButton) {
            startButton.addEventListener('click', () => {
                console.log('Start Assessment button clicked');
                startQuiz(quizFiles[0]); // Start with the first quiz
            });
        }

        // ==================== QUIZ ENGINE IMPLEMENTATION ====================

        // Quiz State Management
        let quizState = {
            currentQuizIndex: 0,
            currentQuestionIndex: 0,
            answers: [],
            isComplete: false,
            quizData: null
        };

        /**
         * Starts the quiz with the specified quiz file
         * @param {string} quizFileName - The quiz file to load
         */
        async function startQuiz(quizFileName) {
            try {
                console.log(`[Quiz Engine] Starting quiz: ${quizFileName}`);

                // Find the index of the quiz file in the list
                const quizIndex = quizFiles.indexOf(quizFileName);
                if (quizIndex === -1) {
                    console.error(`Quiz file not found: ${quizFileName}`);
                    return;
                }

                quizState.currentQuizIndex = quizIndex;
                quizState.currentQuestionIndex = 0;
                quizState.answers = [];
                quizState.isComplete = false;

                // Load quiz data
                const data = await loadQuizData(`js/data/${quizFileName}`);
                quizState.quizData = data;

                // Render quiz interface
                renderQuizInterface();

                console.log('[Quiz Engine] Quiz started successfully');
            } catch (error) {
                console.error('[Quiz Engine] Error starting quiz:', error);
                showQuizError();
            }
        }

        /**
         * Loads quiz data from JSON file and normalizes structure
         * @param {string} filePath - Path to the quiz JSON file
         * @returns {Promise<Object>} - Normalized quiz data
         */
        async function loadQuizData(filePath) {
            try {
                const response = await fetch(filePath);
                if (!response.ok) {
                    throw new Error(`Failed to load quiz data: ${response.status}`);
                }

                const data = await response.json();

                // Normalize data structure to handle both top-level and nested formats
                return normalizeQuizData(data);
            } catch (error) {
                console.error('[Quiz Engine] Error loading quiz data:', error);
                throw error;
            }
        }

        /**
         * Normalizes quiz data structure to handle both top-level and nested formats
         * @param {Object} data - Raw quiz data
         * @returns {Object} - Normalized quiz data
         */
        function normalizeQuizData(data) {
            // Check if data has top-level language keys (nested structure)
            const hasLanguageKeys = Object.keys(data).some(key =>
                ['EN', 'FR', 'ES', 'NO', 'PL', 'LA', 'EGY', 'ZH'].includes(key)
            );

            if (hasLanguageKeys) {
                // Already in nested format - return as-is
                return data;
            } else {
                // Top-level structure - convert to nested format
                // This handles quiz_victimhood_architecture.json format
                const normalized = {};
                const languages = ['EN', 'FR', 'ES', 'NO', 'PL', 'LA', 'EGY', 'ZH'];

                languages.forEach(lang => {
                    normalized[lang] = {
                        title: data.title?.[lang] || data.title || 'Assessment',
                        description: data.description?.[lang] || data.description || '',
                        disclaimer: data.disclaimer?.[lang] || data.disclaimer || '',
                        questions: data.questions?.map(q => ({
                            id: q.id,
                            text: q.text?.[lang] || q.text || '',
                            context: q.context?.[lang] || q.context || ''
                        })) || [],
                        results: data.results?.map(r => ({
                            range: r.range,
                            title: r.title?.[lang] || r.title || 'Result',
                            summary: r.summary?.[lang] || r.summary || '',
                            recommendation: r.recommendation?.[lang] || r.recommendation || ''
                        })) || []
                    };
                });

                return normalized;
            }
        }

        /**
         * Gets localized content for the current language
         * @param {Object} quizData - The quiz data object
         * @returns {Object} - Localized quiz content
         */
        function getLocalizedQuizContent(quizData) {
            const currentLang = document.documentElement.lang || 'en';
            const langCode = currentLang.substring(0, 2).toUpperCase();

            // Try to get content for current language, fallback to English
            const content = quizData[langCode] || quizData.EN;

            if (!content) {
                console.warn(`[Quiz Engine] No content found for language: ${langCode}, falling back to EN`);
                return quizData.EN;
            }

            return content;
        }

        /**
         * Renders the quiz interface with progress bar and questions
         */
        function renderQuizInterface() {
            const assessmentsSection = document.getElementById('assessments');
            if (!assessmentsSection) {
                console.error('[Quiz Engine] Assessments section not found');
                return;
            }

            const localizedContent = getLocalizedQuizContent(quizState.quizData);
            const currentLang = document.documentElement.lang || 'en';
            const isRTL = currentLang === 'ar-EG';

            // Set RTL direction on container
            const assessmentContainer = assessmentsSection.querySelector('.assessment-container');
            if (assessmentContainer) {
                assessmentContainer.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
            }

            // Determine scale range based on number of questions
            const numQuestions = localizedContent.questions.length;
            const maxScore = numQuestions * 3; // Assuming 0-3 scale for most quizzes
            const isSocialSymptomQuiz = quizFiles[quizState.currentQuizIndex] === 'quiz_social_symptom.json';
            const scaleMax = isSocialSymptomQuiz ? 4 : 3; // 0-4 for social symptom, 0-3 for others

            // Localized UI text
            const uiText = {
                questionLabel: {
                    'en': 'Question',
                    'fr': 'Question',
                    'es': 'Pregunta',
                    'no': 'Spørsmål',
                    'pl': 'Pytanie',
                    'la': 'Quaestio',
                    'egy': 'سؤال',
                    'zh': '问题'
                }[currentLang] || 'Question',
                ofLabel: {
                    'en': 'of',
                    'fr': 'sur',
                    'es': 'de',
                    'no': 'av',
                    'pl': 'z',
                    'la': 'de',
                    'egy': 'من',
                    'zh': '共'
                }[currentLang] || 'of',
                previousBtn: {
                    'en': 'Previous',
                    'fr': 'Précédent',
                    'es': 'Anterior',
                    'no': 'Forrige',
                    'pl': 'Poprzedni',
                    'la': 'Anterior',
                    'egy': 'السابق',
                    'zh': '上一题'
                }[currentLang] || 'Previous',
                nextBtn: {
                    'en': 'Next',
                    'fr': 'Suivant',
                    'es': 'Siguiente',
                    'no': 'Neste',
                    'pl': 'Następny',
                    'la': 'Sequens',
                    'egy': 'التالي',
                    'zh': '下一题'
                }[currentLang] || 'Next',
                submitBtn: {
                    'en': 'Submit Assessment',
                    'fr': 'Soumettre l\'évaluation',
                    'es': 'Enviar evaluación',
                    'no': 'Send inn vurdering',
                    'pl': 'Wyślij ocenę',
                    'la': 'Mitte aestimationem',
                    'egy': 'إرسال التقييم',
                    'zh': '提交评估'
                }[currentLang] || 'Submit',
                retakeBtn: {
                    'en': 'Retake Assessment',
                    'fr': 'Refaire l\'évaluation',
                    'es': 'Repetir evaluación',
                    'no': 'Ta vurdering på nytt',
                    'pl': 'Ponów ocenę',
                    'la': 'Iterum aestimationem',
                    'egy': 'إعادة التقييم',
                    'zh': '重新评估'
                }[currentLang] || 'Retake',
                scoreLabel: {
                    'en': 'Your Score',
                    'fr': 'Votre Score',
                    'es': 'Su Puntuación',
                    'no': 'Din Poengsum',
                    'pl': 'Twój Wynik',
                    'la': 'Tua Punctuatio',
                    'egy': 'نتيجتك',
                    'zh': '你的分数'
                }[currentLang] || 'Your Score',
                resultLabel: {
                    'en': 'Your Result',
                    'fr': 'Votre Résultat',
                    'es': 'Tu Resultado',
                    'no': 'Ditt Resultat',
                    'pl': 'Twój Wynik',
                    'la': 'Tuum Resultatum',
                    'egy': 'نتيجتك',
                    'zh': '你的结果'
                }[currentLang] || 'Your Result'
            };

            // Generate scale labels
            const scaleLabels = [];
            for (let i = 0; i <= scaleMax; i++) {
                const label = {
                    0: {
                        'en': 'Strongly Disagree',
                        'fr': 'Fortement en désaccord',
                        'es': 'Muy en desacuerdo',
                        'no': 'Helt uenig',
                        'pl': 'Zdecydowanie się nie zgadzam',
                        'la': 'Fortiter dissentio',
                        'egy': 'لا أوافق بشدة',
                        'zh': '强烈不同意'
                    },
                    1: {
                        'en': 'Disagree',
                        'fr': 'En désaccord',
                        'es': 'En desacuerdo',
                        'no': 'Uenig',
                        'pl': 'Nie zgadzam',
                        'la': 'Dissentio',
                        'egy': 'لا أوافق',
                        'zh': '不同意'
                    },
                    2: {
                        'en': 'Neutral',
                        'fr': 'Neutre',
                        'es': 'Neutral',
                        'no': 'Nøytral',
                        'pl': 'Neutralny',
                        'la': 'Neutrum',
                        'egy': 'محايد',
                        'zh': '中立'
                    },
                    3: {
                        'en': 'Agree',
                        'fr': 'D\'accord',
                        'es': 'De acuerdo',
                        'no': 'Enig',
                        'pl': 'Zgadzam',
                        'la': 'Consenio',
                        'egy': 'أوافق',
                        'zh': '同意'
                    },
                    4: {
                        'en': 'Strongly Agree',
                        'fr': 'Fortement d\'accord',
                        'es': 'Muy de acuerdo',
                        'no': 'Helt enig',
                        'pl': 'Zdecydowanie się zgadzam',
                        'la': 'Fortiter consentio',
                        'egy': 'أوافق بشدة',
                        'zh': '强烈同意'
                    }
                }[i] || {
                    'en': `${i}`,
                    'fr': `${i}`,
                    'es': `${i}`,
                    'no': `${i}`,
                    'pl': `${i}`,
                    'la': `${i}`,
                    'egy': `${i}`,
                    'zh': `${i}`
                };
                scaleLabels.push(label[currentLang] || label['en']);
            }

            // Render quiz interface
            const quizHTML = `
                <div class="quiz-interface ${isRTL ? 'rtl' : ''}">
                    <!-- Progress Bar -->
                    <div class="quiz-progress-container">
                        <div class="quiz-progress-bar">
                            <div class="quiz-progress-fill" style="width: 0%"></div>
                        </div>
                        <div class="quiz-progress-text">
                            ${uiText.questionLabel} <span class="current-question">1</span> ${uiText.ofLabel} ${numQuestions}
                        </div>
                    </div>
                    
                    <!-- Question Container -->
                    <div class="quiz-question-container">
                        <div class="quiz-question-text">
                            ${localizedContent.questions[0].text}
                        </div>
                        <div class="quiz-question-context">
                            ${localizedContent.questions[0].context}
                        </div>
                        
                        <!-- Likert Scale -->
                        <div class="quiz-scale-container">
                            ${generateScaleHTML(0, scaleMax, scaleLabels)}
                        </div>
                    </div>
                    
                    <!-- Navigation Buttons -->
                    <div class="quiz-navigation">
                        <button id="quizPrevBtn" class="btn-quiz btn-quiz-prev" disabled>
                            ${uiText.previousBtn}
                        </button>
                        <button id="quizNextBtn" class="btn-quiz btn-quiz-next">
                            ${uiText.nextBtn}
                        </button>
                    </div>
                </div>
            `;

            // Update the assessment content area
            const assessmentContent = document.getElementById('assessmentContent');
            if (assessmentContent) {
                assessmentContent.innerHTML = quizHTML;
                assessmentContent.classList.remove('hidden');
            }

            // Initialize quiz controls
            initializeQuizControls(scaleMax, uiText);

            // Scroll to quiz
            assessmentsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        /**
         * Generates HTML for Likert scale buttons
         * @param {number} questionIndex - Current question index
         * @param {number} maxScore - Maximum score value
         * @param {Array} labels - Scale labels
         * @returns {string} - HTML for scale buttons
         */
        function generateScaleHTML(questionIndex, maxScore, labels) {
            const currentAnswer = quizState.answers[questionIndex];

            let scaleHTML = '<div class="quiz-scale-buttons">';
            for (let i = 0; i <= maxScore; i++) {
                const isSelected = currentAnswer === i;
                scaleHTML += `
                    <button class="quiz-scale-btn ${isSelected ? 'selected' : ''}" data-score="${i}">
                        <span class="score-value">${i}</span>
                        <span class="score-label">${labels[i]}</span>
                    </button>
                `;
            }
            scaleHTML += '</div>';

            return scaleHTML;
        }

        /**
         * Initializes quiz control event listeners
         * @param {number} maxScore - Maximum score value
         * @param {Object} uiText - Localized UI text
         */
        function initializeQuizControls(maxScore, uiText) {
            const prevBtn = document.getElementById('quizPrevBtn');
            const nextBtn = document.getElementById('quizNextBtn');
            const scaleButtons = document.querySelectorAll('.quiz-scale-btn');

            // Previous button
            if (prevBtn) {
                prevBtn.addEventListener('click', () => {
                    if (quizState.currentQuestionIndex > 0) {
                        goToQuestion(quizState.currentQuestionIndex - 1);
                    }
                });
            }

            // Next/Submit button
            if (nextBtn) {
                nextBtn.addEventListener('click', () => {
                    const localizedContent = getLocalizedQuizContent(quizState.quizData);
                    const numQuestions = localizedContent.questions.length;

                    if (quizState.currentQuestionIndex < numQuestions - 1) {
                        // Check if answer is selected
                        if (quizState.answers[quizState.currentQuestionIndex] === undefined) {
                            // Show warning that answer is required
                            showAnswerRequiredWarning();
                            return;
                        }
                        goToQuestion(quizState.currentQuestionIndex + 1);
                    } else {
                        // Submit quiz
                        submitQuiz();
                    }
                });
            }

            // Scale buttons
            scaleButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    const score = parseInt(btn.getAttribute('data-score'));
                    selectAnswer(score);
                });
            });
        }

        /**
         * Clears the selected state from all quiz scale buttons
         */
        function clearQuizButtonState() {
            const scaleButtons = document.querySelectorAll('.quiz-scale-btn');
            scaleButtons.forEach(btn => {
                btn.classList.remove('selected');
            });
        }

        /**
         * Shows warning that answer is required
         */
        function showAnswerRequiredWarning() {
            const currentLang = document.documentElement.lang || 'en';
            const warningText = {
                'en': 'Please select an answer before proceeding.',
                'fr': 'Veuillez sélectionner une réponse avant de continuer.',
                'es': 'Por favor seleccione una respuesta antes de continuar.',
                'no': 'Vennligst velg et svar før du fortsetter.',
                'pl': 'Proszę wybrać odpowiedź przed przejściem dalej.',
                'la': 'Quaeso roga responsum priusquam pergas.',
                'egy': 'يرجى تحديد إجابة قبل المتابعة.',
                'zh': '请选择答案后再继续。'
            }[currentLang] || 'Please select an answer before proceeding.';

            alert(warningText);
        }

        /**
         * Navigates to a specific question
         * @param {number} questionIndex - The question index to navigate to
         */
        function goToQuestion(questionIndex) {
            const localizedContent = getLocalizedQuizContent(quizState.quizData);
            const numQuestions = localizedContent.questions.length;
            const isRTL = document.documentElement.lang === 'ar-EG';

            // Update state
            quizState.currentQuestionIndex = questionIndex;

            // Update progress bar
            const progressPercent = ((questionIndex + 1) / numQuestions) * 100;
            const progressFill = document.querySelector('.quiz-progress-fill');
            const progressText = document.querySelector('.current-question');
            if (progressFill) {
                progressFill.style.width = `${progressPercent}%`;
            }
            if (progressText) {
                progressText.textContent = questionIndex + 1;
            }

            // Update question text
            const questionText = document.querySelector('.quiz-question-text');
            const questionContext = document.querySelector('.quiz-question-context');
            if (questionText) {
                questionText.textContent = localizedContent.questions[questionIndex].text;
            }
            if (questionContext) {
                questionContext.textContent = localizedContent.questions[questionIndex].context;
            }

            // Update scale buttons
            const scaleContainer = document.querySelector('.quiz-scale-container');
            if (scaleContainer) {
                const isSocialSymptomQuiz = quizFiles[quizState.currentQuizIndex] === 'quiz_social_symptom.json';
                const scaleMax = isSocialSymptomQuiz ? 4 : 3;

                const currentLang = document.documentElement.lang || 'en';
                const scaleLabels = {
                    0: {
                        'en': 'Strongly Disagree',
                        'fr': 'Fortement en désaccord',
                        'es': 'Muy en desacuerdo',
                        'no': 'Helt uenig',
                        'pl': 'Zdecydowanie się nie zgadzam',
                        'la': 'Fortiter dissentio',
                        'egy': 'لا أوافق بشدة',
                        'zh': '强烈不同意'
                    },
                    1: {
                        'en': 'Disagree',
                        'fr': 'En désaccord',
                        'es': 'En desacuerdo',
                        'no': 'Uenig',
                        'pl': 'Nie zgadzam',
                        'la': 'Dissentio',
                        'egy': 'لا أوافق',
                        'zh': '不同意'
                    },
                    2: {
                        'en': 'Neutral',
                        'fr': 'Neutre',
                        'es': 'Neutral',
                        'no': 'Nøytral',
                        'pl': 'Neutralny',
                        'la': 'Neutrum',
                        'egy': 'محايد',
                        'zh': '中立'
                    },
                    3: {
                        'en': 'Agree',
                        'fr': 'D\'accord',
                        'es': 'De acuerdo',
                        'no': 'Enig',
                        'pl': 'Zgadzam',
                        'la': 'Consenio',
                        'egy': 'أوافق',
                        'zh': '同意'
                    },
                    4: {
                        'en': 'Strongly Agree',
                        'fr': 'Fortement d\'accord',
                        'es': 'Muy de acuerdo',
                        'no': 'Helt enig',
                        'pl': 'Zdecydowanie się zgadzam',
                        'la': 'Fortiter consentio',
                        'egy': 'أوافق بشدة',
                        'zh': '强烈同意'
                    }
                };

                // Clear existing button state before regeneration
                clearQuizButtonState();

                scaleContainer.innerHTML = generateScaleHTML(questionIndex, scaleMax,
                    scaleLabels.map(l => l[currentLang] || l['en']));

                // Restore selected state after innerHTML replacement
                const currentAnswer = quizState.answers[questionIndex];
                if (currentAnswer !== undefined) {
                    const selectedBtn = document.querySelector(`.quiz-scale-btn[data-score="${currentAnswer}"]`);
                    if (selectedBtn) {
                        selectedBtn.classList.add('selected');
                    }
                }
            }

            // Update navigation buttons
            const prevBtn = document.getElementById('quizPrevBtn');
            const nextBtn = document.getElementById('quizNextBtn');

            if (prevBtn) {
                prevBtn.disabled = questionIndex === 0;
            }

            if (nextBtn) {
                const uiText = {
                    nextBtn: {
                        'en': 'Next',
                        'fr': 'Suivant',
                        'es': 'Siguiente',
                        'no': 'Neste',
                        'pl': 'Następny',
                        'la': 'Sequens',
                        'egy': 'التالي',
                        'zh': '下一题'
                    },
                    submitBtn: {
                        'en': 'Submit Assessment',
                        'fr': 'Soumettre l\'évaluation',
                        'es': 'Enviar evaluación',
                        'no': 'Send inn vurdering',
                        'pl': 'Wyślij ocenę',
                        'la': 'Mitte aestimationem',
                        'egy': 'إرسال التقييم',
                        'zh': '提交评估'
                    }
                };

                const buttonText = questionIndex === numQuestions - 1
                    ? uiText.submitBtn[currentLang] || 'Submit Assessment'
                    : uiText.nextBtn[currentLang] || 'Next';

                nextBtn.textContent = buttonText;
            }

            // Re-initialize scale button listeners
            const scaleButtons = document.querySelectorAll('.quiz-scale-btn');
            scaleButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    const score = parseInt(btn.getAttribute('data-score'));
                    selectAnswer(score);
                });
            });
        }

        /**
         * Selects an answer for the current question
         * @param {number} score - The score value selected
         */
        function selectAnswer(score) {
            quizState.answers[quizState.currentQuestionIndex] = score;

            // Update visual selection
            const scaleButtons = document.querySelectorAll('.quiz-scale-btn');
            scaleButtons.forEach(btn => {
                const btnScore = parseInt(btn.getAttribute('data-score'));
                if (btnScore === score) {
                    btn.classList.add('selected');
                } else {
                    btn.classList.remove('selected');
                }
            });
        }

        /**
         * Submits the quiz and calculates results
         */
        function submitQuiz() {
            const localizedContent = getLocalizedQuizContent(quizState.quizData);

            // Calculate total score
            const totalScore = quizState.answers.reduce((sum, answer) => sum + answer, 0);

            // Find matching result
            const result = findMatchingResult(totalScore, localizedContent.results);

            // Mark quiz as complete
            quizState.isComplete = true;

            // Render results
            renderQuizResults(totalScore, result, localizedContent);
        }

        /**
         * Finds the matching result based on total score
         * @param {number} totalScore - The total quiz score
         * @param {Array} results - Array of result objects
         * @returns {Object} - The matching result object
         */
        function findMatchingResult(totalScore, results) {
            for (const result of results) {
                const [min, max] = result.range;
                if (totalScore >= min && totalScore <= max) {
                    return result;
                }
            }

            // Default to first result if no match found
            return results[0];
        }

        /**
         * Renders the quiz results
         * @param {number} totalScore - The total quiz score
         * @param {Object} result - The result object
         * @param {Object} localizedContent - Localized quiz content
         */
        function renderQuizResults(totalScore, result, localizedContent) {
            const assessmentsSection = document.getElementById('assessments');
            if (!assessmentsSection) {
                console.error('[Quiz Engine] Assessments section not found');
                return;
            }

            const currentLang = document.documentElement.lang || 'en';
            const isRTL = currentLang === 'ar-EG';

            // Localized UI text
            const uiText = {
                scoreLabel: {
                    'en': 'Your Score',
                    'fr': 'Votre Score',
                    'es': 'Su Puntuación',
                    'no': 'Din Poengsum',
                    'pl': 'Twój Wynik',
                    'la': 'Tua Punctuatio',
                    'egy': 'نتيجتك',
                    'zh': '你的分数'
                }[currentLang] || 'Your Score',
                resultLabel: {
                    'en': 'Your Result',
                    'fr': 'Votre Résultat',
                    'es': 'Tu Resultado',
                    'no': 'Ditt Resultat',
                    'pl': 'Twój Wynik',
                    'la': 'Tuum Resultatum',
                    'egy': 'نتيجتك',
                    'zh': '你的结果'
                }[currentLang] || 'Your Result',
                retakeBtn: {
                    'en': 'Retake Assessment',
                    'fr': 'Refaire l\'évaluation',
                    'es': 'Repetir evaluación',
                    'no': 'Ta vurdering på nytt',
                    'pl': 'Ponów ocenę',
                    'la': 'Iterum aestimationem',
                    'egy': 'إعادة التقييم',
                    'zh': '重新评估'
                }[currentLang] || 'Retake'
            };

            // Render results
            const resultsHTML = `
                <div class="quiz-results ${isRTL ? 'rtl' : ''}">
                    <div class="quiz-results-header">
                        <h2 class="quiz-results-title">${uiText.resultLabel}</h2>
                        <div class="quiz-score-display">
                            <span class="score-label">${uiText.scoreLabel}:</span>
                            <span class="score-value">${totalScore}</span>
                        </div>
                    </div>
                    
                    <div class="quiz-result-content">
                        <h3 class="result-title">${result.title}</h3>
                        <p class="result-summary">${result.summary}</p>
                        <div class="result-recommendation">
                            <strong>${localizedContent.disclaimer}</strong>
                            <p>${result.recommendation}</p>
                        </div>
                    </div>
                    
                    <div class="quiz-results-actions">
                        <button id="quizRetakeBtn" class="btn-quiz btn-quiz-retake">
                            ${uiText.retakeBtn}
                        </button>
                    </div>
                </div>
            `;

            // Update the assessment content area
            const assessmentContent = document.getElementById('assessmentContent');
            if (assessmentContent) {
                assessmentContent.innerHTML = resultsHTML;
            }

            // Initialize retake button
            const retakeBtn = document.getElementById('quizRetakeBtn');
            if (retakeBtn) {
                retakeBtn.addEventListener('click', () => {
                    startQuiz(quizFiles[quizState.currentQuizIndex]);
                });
            }

            // Scroll to results
            assessmentsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        /**
         * Shows quiz error message
         */
        function showQuizError() {
            const assessmentsSection = document.getElementById('assessments');
            if (!assessmentsSection) {
                console.error('[Quiz Engine] Assessments section not found');
                return;
            }

            const currentLang = document.documentElement.lang || 'en';
            const errorText = {
                'en': 'An error occurred while loading the quiz. Please try again later.',
                'fr': 'Une erreur s\'est produite lors du chargement du quiz. Veuillez réessayer plus tard.',
                'es': 'Ocurrió un error al cargar el cuestionario. Por favor, inténtelo de nuevo más tarde.',
                'no': 'Det oppstod en feil ved lasting av spørsmålet. Vennligst prøv igjen senere.',
                'pl': 'Wystąpił błąd podczas ładowania quizu. Proszę spróbuj ponownie później.',
                'la': 'Errore factum est dum quaestio onerabatur. Quaeso conare iterum postea.',
                'egy': 'حدث خطأ أثناء تحميل الاختبار. يرجى المحاولة مرة أخرى لاحقًا.',
                'zh': '加载测验时发生错误。请稍后再试。'
            }[currentLang] || 'An error occurred while loading the quiz. Please try again later.';

            const errorHTML = `
                <div class="quiz-error">
                    <p class="error-message">${errorText}</p>
                </div>
            `;

            const assessmentContent = document.getElementById('assessmentContent');
            if (assessmentContent) {
                assessmentContent.innerHTML = errorHTML;
                assessmentContent.classList.remove('hidden');
            }
        }

        console.log('Initial assessment screen rendered successfully');

    } catch (error) {
        console.error('Failed to render initial assessment screen:', error);

        // Display an error message to the user
        const assessmentsSection = document.getElementById('assessments');
        if (assessmentsSection) {
            const currentLang = document.documentElement.lang || 'en';
            const localizedText = {
                errorTitle: {
                    'en': 'Unable to Load Assessment',
                    'fr': 'Impossible de charger l\'évaluation',
                    'es': 'No se puede cargar la evaluación',
                    'no': 'Kan ikke laste vurdering',
                    'pl': 'Nie można załadować oceny',
                    'la': 'Aestimatio non potest onerari',
                    'zh': '无法加载评估',
                    'egy': 'غير قادر على تحميل التقييم'
                }[currentLang] || 'Unable to Load Assessment',
                errorMessage: {
                    'en': 'We\'re sorry, but the assessment could not be loaded at this time. Please try again later.',
                    'fr': 'Nous sommes désolés, mais l\'évaluation n\'a pas pu être chargée pour le moment. Veuillez réessayer plus tard.',
                    'es': 'Lo sentimos, pero la evaluación no se pudo cargar en este momento. Por favor, inténtelo de nuevo más tarde.',
                    'no': 'Vi er lei oss, men vurderingen kunne ikke lastes inn på dette tidspunktet. Vennligst prøv igjen senere.',
                    'pl': 'Przykro namy, ale ocena nie mogła zostać załadowana w tym czasie. Spróbuj ponownie później.',
                    'la': 'Dolemus, sed aestimatio non potest onerari hoc tempore. Quaeso conare iterum postea.',
                    'zh': '很抱歉，评估目前无法加载。请稍后再试。',
                    'egy': 'نحن آسفون ، ولكن لا يمكن تحميل التقييم في هذا الوقت. يرجى المحاولة مرة أخرى لاحقاً.'
                }[currentLang] || 'We\'re sorry, but the assessment could not be loaded at this time. Please try again later.'
            };

            const errorContainer = document.createElement('div');
            errorContainer.className = 'max-w-4xl mx-auto bg-red-50 border border-red-200 rounded-lg p-6';
            errorContainer.innerHTML = `
                <h3 class="text-xl font-bold text-red-800 mb-2">${localizedText.errorTitle}</h3>
                <p class="text-red-700">${localizedText.errorMessage}</p>
            `;
            assessmentsSection.appendChild(errorContainer);
        }
    }
}

/**
 * Loads quiz data from the specified JSON file
 * @param {string} filePath - Path to the JSON file
 * @returns {Promise<Object>} - Quiz data object
 */
async function loadQuizData(filePath) {
    try {
        // Verbose logging: Log file path being loaded
        console.log(`[loadQuizData] Attempting to load quiz data from: ${filePath}`);

        const response = await fetch(filePath);

        // Verbose logging: Log response status
        console.log(`[loadQuizData] Response status: ${response.status} ${response.statusText}`);

        if (!response.ok) {
            throw new Error(`Failed to load quiz data: ${response.status} ${response.statusText}`);
        }

        // Verbose logging: Read as text first for detailed logging
        const responseText = await response.text();
        console.log(`[loadQuizData] Raw response text length: ${responseText.length} characters`);

        // Verbose logging: Log parsing attempt
        console.log(`[loadQuizData] Attempting to parse JSON...`);
        let data;
        try {
            data = JSON.parse(responseText);
            console.log(`[loadQuizData] JSON parsing successful`);
        } catch (parseError) {
            console.error(`[loadQuizData] JSON parsing failed: ${parseError.message}`);
            console.error(`[loadQuizData] Response text preview: ${responseText.substring(0, 200)}...`);
            throw new Error(`Failed to parse quiz data JSON: ${parseError.message}`);
        }

        return data;
    } catch (error) {
        console.error(`[loadQuizData] Error loading quiz data: ${error.message}`);
        console.error(`[loadQuizData] Error details:`, error);
        throw error;
    }
}

/**
 * Initializes the assessment engine for the Conceptual Assessments section
 * Uses the new functions to fetch data and render the initial screen
 */
async function initializeAssessmentEngine() {
    try {
        // Get the current language from the HTML document
        const currentLang = document.documentElement.lang || 'en';
        console.log(`Initializing assessment engine for language: ${currentLang}`);

        // Render the initial screen with the quiz list
        await renderQuizLobby();

        console.log('Assessment engine initialized successfully');

    } catch (error) {
        console.error('Failed to initialize assessment engine:', error);

        // Display an error message to the user
        const assessmentsSection = document.getElementById('assessments');
        if (assessmentsSection) {
            const currentLang = document.documentElement.lang || 'en';
            const localizedText = {
                errorTitle: {
                    'en': 'Unable to Load Assessment',
                    'fr': 'Impossible de charger l\'évaluation',
                    'es': 'No se puede cargar la evaluación',
                    'no': 'Kan ikke laste vurdering',
                    'pl': 'Nie można załadować oceny',
                    'la': 'Aestimatio non potest onerari',
                    'zh': '无法加载评估',
                    'egy': 'غير قادر على تحميل التقييم'
                }[currentLang] || 'Unable to Load Assessment',
                errorMessage: {
                    'en': 'We\'re sorry, but the assessment could not be loaded at this time. Please try again later.',
                    'fr': 'Nous sommes désolés, mais l\'évaluation n\'a pas pu être chargée pour le moment. Veuillez réessayer plus tard.',
                    'es': 'Lo sentimos, pero la evaluación no se pudo cargar en este momento. Por favor, inténtelo de nuevo más tarde.',
                    'no': 'Vi er lei oss, men vurderingen kunne ikke lastes inn på dette tidspunktet. Vennligst prøv igjen senere.',
                    'pl': 'Przykro namy, ale ocena nie mogła zostać załadowana w tym czasie. Spróbuj ponownie później.',
                    'la': 'Dolemus, sed aestimatio non potest onerari hoc tempore. Quaeso conare iterum postea.',
                    'zh': '很抱歉，评估目前无法加载。请稍后再试。',
                    'egy': 'نحن آسفون ، ولكن لا يمكن تحميل التقييم في هذا الوقت. يرجى المحاولة مرة أخرى لاحقاً.'
                }[currentLang] || 'We\'re sorry, but the assessment could not be loaded at this time. Please try again later.'
            };

            const errorContainer = document.createElement('div');
            errorContainer.className = 'max-w-4xl mx-auto bg-red-50 border border-red-200 rounded-lg p-6';
            errorContainer.innerHTML = `
                <h3 class="text-xl font-bold text-red-800 mb-2">${localizedText.errorTitle}</h3>
                <p class="text-red-700">${localizedText.errorMessage}</p>
            `;
            assessmentsSection.appendChild(errorContainer);
        }
    }
}  
  
/**  
 * Renders quiz lobby with all available assessments  
 * Displays cards for all 4 quiz files with localized content  
 */  
async function renderQuizLobby() { 
    try {
        const assessmentsSection = document.getElementById('assessments');
        if (!assessmentsSection) {
            console.error('Assessments section not found');
            return;
        }

        const currentLang = document.documentElement.lang || 'en';
        const isRTL = currentLang === 'ar-EG';

        // Fetch metadata for all quizzes
        const quizMetadata = await Promise.all(
            quizFiles.map(async (fileName) => {
                const data = await fetchAssessmentData(fileName);
                const localized = getLocalizedContent(data);
                return {
                    fileName,
                    title: localized.title,
                    description: localized.description
                };
            })
        );

        // Localized lobby title
        const lobbyTitle = {
            'en': 'Select Assessment',
            'fr': 'Sélectionnez votre évaluation',
            'es': 'Seleccione su evaluación',
            'no': 'Velg din vurdering',
            'pl': 'Wybierz swoją ocenę',
            'la': 'Elige tuam aestimationem',
            'egy': 'اختيار التقييم',
            'zh': '选择评估'
        }[currentLang] || 'Select Assessment';

        // Localized start button text
        const startButtonText = {
            'en': 'Start',
            'fr': 'Commencer',
            'es': 'Comenzar',
            'no': 'Start',
            'pl': 'Rozpocznij',
            'la': 'Incepta',
            'egy': 'ابدأ',
            'zh': '开始'
        }[currentLang] || 'Start';

        // Generate lobby HTML
        const lobbyHTML = `
            <div class="quiz-lobby ${isRTL ? 'rtl' : ''}">
                <h2 class="quiz-lobby-title">${lobbyTitle}</h2>
                <div class="quiz-cards">
                    ${quizMetadata.map((quiz, index) => `
                        <div class="quiz-card" data-quiz-index="${index}">
                            <h3 class="quiz-card-title">${quiz.title}</h3>
                            <p class="quiz-card-description">${quiz.description.substring(0, 150)}...</p>
                            <button class="btn-start-quiz" data-index="${index}">
                                ${startButtonText}
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        assessmentsSection.innerHTML = lobbyHTML;

        // Attach event listeners to start buttons
        document.querySelectorAll('.btn-start-quiz').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const quizIndex = parseInt(e.target.getAttribute('data-index'));
                startQuiz(quizFiles[quizIndex]);
            });
        });

        console.log('Quiz lobby rendered successfully');

    } catch (error) {
        console.error('Failed to render quiz lobby:', error);

        // Display error message
        const assessmentsSection = document.getElementById('assessments');
        if (assessmentsSection) {
            const currentLang = document.documentElement.lang || 'en';
            const errorText = {
                'en': 'Failed to load assessments. Please try again later.',
                'fr': 'Échec du chargement des évaluations. Veuillez réessayer plus tard.',
                'es': 'Error al cargar evaluaciones. Por favor, inténtelo de nuevo más tarde.',
                'no': 'Kunne ikke laste vurderinger. Vennligst prøv igjen senere.',
                'pl': 'Nie udało się załadować ocen. Proszę spróbować ponownie później.',
                'la': 'Aestimationes onerari non potuerunt. Quaeso conare iterum postea.',
                'egy': 'فشل تحميل التقييمات. يرجى المحاولة مرة أخرى لاحقًا.',
                'zh': '加载评估失败。请稍后再试。'
            }[currentLang] || 'Failed to load assessments. Please try again later.';

            const errorContainer = document.createElement('div');
            errorContainer.className = 'max-w-4xl mx-auto bg-red-50 border border-red-200 rounded-lg p-6';
            errorContainer.innerHTML = `<p class="text-red-700">${errorText}</p>`;
            assessmentsSection.appendChild(errorContainer);
        }
    }
}
