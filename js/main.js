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
document.addEventListener('DOMContentLoaded', function() {
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
            newCard.addEventListener('click', function() {
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
        button.addEventListener('click', function() {
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
        details.addEventListener('toggle', function() {
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
        button.addEventListener('click', function() {
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