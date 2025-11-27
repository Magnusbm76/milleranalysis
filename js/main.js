// Import quote data from the newly created js/quote_data.js file
// This will be loaded as a script tag in index.html, so quoteData is available globally

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
        viewMode: 'carousel', // 'carousel' or 'network'
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
    
    // Initialize with first quote if available
    if (this.quoteData.quotes.length > 0) {
      this.setCurrentQuote(this.quoteData.quotes[0].id);
    }
    
    // Try to load persisted state
    this.loadState();
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
  
  // Set view mode (carousel or network)
  setViewMode(viewMode) {
    if (!['carousel', 'network'].includes(viewMode)) {
      console.error('Invalid view mode:', viewMode);
      return false;
    }
    
    this.state.ui.viewMode = viewMode;
    
    // Notify subscribers
    this.notifySubscribers('viewModeChanged', {
      viewMode: viewMode
    });
    
    // Persist state
    this.persistState();
    
    return true;
  }
  
  // Get current view mode
  getViewMode() {
    return this.state.ui.viewMode;
  }
  
  // Toggle between carousel and network views
  toggleViewMode() {
    const newMode = this.state.ui.viewMode === 'carousel' ? 'network' : 'carousel';
    return this.setViewMode(newMode);
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
    // Initialize the new QuoteJourneyState with quote data
    // Note: quoteData should be loaded from js/quote_data.js before this script
    if (typeof quoteData !== 'undefined') {
        // Create global instance of QuoteJourneyState
        window.quoteJourneyState = new QuoteJourneyState(quoteData);
        
        // Initialize QuoteNetwork if canvas is available
        const canvas = document.getElementById('quoteNetworkCanvas');
        if (canvas && typeof QuoteNetwork !== 'undefined') {
            window.quoteNetwork = new QuoteNetwork(canvas, quoteData, window.quoteJourneyState);
            console.log('QuoteNetwork initialized');
        } else {
            console.warn('QuoteNetwork could not be initialized - canvas or QuoteNetwork class not available');
        }
        
        // Initialize view switching
        initializeViewSwitching();
        
        // Initialize insight card interactions
        initializeInsightCards();
        
        // Log initialization
        console.log('QuoteJourneyState initialized with', quoteData.quotes.length, 'quotes');
        
        // Example subscription to demonstrate state changes
        const unsubscribe = window.quoteJourneyState.subscribe((eventType, data, state) => {
            console.log('State change event:', eventType, data);
            
            // Handle view mode changes
            if (eventType === 'viewModeChanged') {
                updateViewDisplay(data.viewMode);
            }
        });
        
        // For debugging: expose unsubscribe function globally
        window.unsubscribeFromQuoteJourney = unsubscribe;
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
 * Initialize view switching functionality
 */
function initializeViewSwitching() {
    const carouselViewBtn = document.getElementById('carouselViewBtn');
    const networkViewBtn = document.getElementById('networkViewBtn');
    
    if (carouselViewBtn && networkViewBtn) {
        // Set initial button states based on current view mode
        updateViewButtons(window.quoteJourneyState.getViewMode());
        
        // Add click event listeners
        carouselViewBtn.addEventListener('click', () => {
            window.quoteJourneyState.setViewMode('carousel');
        });
        
        networkViewBtn.addEventListener('click', () => {
            window.quoteJourneyState.setViewMode('network');
        });
    }
}

/**
 * Update view display based on current mode
 */
function updateViewDisplay(viewMode) {
    const carouselView = document.getElementById('carouselView');
    const networkView = document.getElementById('networkView');
    
    if (carouselView && networkView) {
        if (viewMode === 'carousel') {
            carouselView.classList.remove('hidden');
            networkView.classList.add('hidden');
        } else {
            carouselView.classList.add('hidden');
            networkView.classList.remove('hidden');
            
            // Trigger network resize when switching to network view
            if (window.quoteNetwork) {
                setTimeout(() => {
                    window.quoteNetwork.resizeCanvas();
                }, 100);
            }
        }
    }
    
    // Update button states
    updateViewButtons(viewMode);
}

/**
 * Update view button states
 */
function updateViewButtons(viewMode) {
    const carouselViewBtn = document.getElementById('carouselViewBtn');
    const networkViewBtn = document.getElementById('networkViewBtn');
    
    if (carouselViewBtn && networkViewBtn) {
        if (viewMode === 'carousel') {
            carouselViewBtn.classList.add('bg-cream/30');
            carouselViewBtn.classList.remove('hover:bg-cream/10');
            networkViewBtn.classList.remove('bg-cream/30');
            networkViewBtn.classList.add('hover:bg-cream/10');
        } else {
            networkViewBtn.classList.add('bg-cream/30');
            networkViewBtn.classList.remove('hover:bg-cream/10');
            carouselViewBtn.classList.remove('bg-cream/30');
            carouselViewBtn.classList.add('hover:bg-cream/10');
        }
    }
}

/**
 * Initialize insight card interactions
 */
function initializeInsightCards() {
    const insightCards = document.querySelectorAll('.insight-card');
    insightCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
}