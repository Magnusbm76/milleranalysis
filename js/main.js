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
    
    // Also add to JourneyTracker if available
    if (typeof window !== 'undefined' && window.journeyTracker) {
      window.journeyTracker.addToJourney(quoteId);
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
      
      // Also persist JourneyTracker data if available
      if (typeof window !== 'undefined' && window.journeyTracker) {
        window.journeyTracker.persistJourneyData();
      }
      
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
      
      // Load JourneyTracker data after a delay to ensure it's initialized
      setTimeout(() => {
        if (typeof window !== 'undefined' && window.journeyTracker) {
          window.journeyTracker.loadJourneyData();
        }
      }, 200);
      
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
      
      // Also clear JourneyTracker data if available
      if (typeof window !== 'undefined' && window.journeyTracker) {
        window.journeyTracker.clearJourneyData();
      }
      
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
    
    console.log('Scroll animations and smooth scrolling initialized');
    
    // Initialize the new QuoteJourneyState with quote data
    // Note: quoteData should be loaded from js/quote_data.js before this script
    if (typeof quoteData !== 'undefined') {
        // Create global instance of QuoteJourneyState
        window.quoteJourneyState = new QuoteJourneyState(quoteData);
        
        // Initialize JourneyTracker if available
        if (typeof JourneyTracker !== 'undefined') {
            window.journeyTracker = new JourneyTracker(window.quoteJourneyState, quoteData, 50);
            
            // Initialize JourneyTracker with existing journey history from QuoteJourneyState
            const existingHistory = window.quoteJourneyState.getJourneyHistory();
            if (existingHistory.length > 0) {
                existingHistory.forEach(entry => {
                    window.journeyTracker.addToJourney(entry.quoteId);
                });
            }
            
            console.log('JourneyTracker initialized with', existingHistory.length, 'existing journey entries');
            
            // Set up JourneyTracker event listeners for UI updates
            setupJourneyTrackerEvents();
        } else {
            console.warn('JourneyTracker could not be initialized - JourneyTracker class not available');
        }
        
        // Initialize journey navigation controls
        initializeJourneyNavigation();
        
        // Initialize view switching
        initializeViewSwitching();
        
        // Initialize insight card interactions
        initializeInsightCards();
        
        // Initialize details panel
        initializeDetailsPanel();
        
        // Initialize breadcrumbs
        initializeBreadcrumbs();
        
        // Log initialization
        console.log('QuoteJourneyState initialized with', quoteData.quotes.length, 'quotes');
        
        // Set up QuoteJourneyState event listeners
        setupQuoteJourneyStateEvents();
        
        // Initialize QuoteNetwork after a delay to ensure DOM elements are ready
        setTimeout(() => {
            const canvas = document.getElementById('quoteNetworkCanvas');
            if (canvas && typeof QuoteNetwork !== 'undefined') {
                window.quoteNetwork = new QuoteNetwork(canvas, quoteData, window.quoteJourneyState);
                console.log('QuoteNetwork initialized');
            } else {
                console.warn('QuoteNetwork could not be initialized - canvas or QuoteNetwork class not available');
                if (!canvas) {
                    console.error('Canvas element with ID "quoteNetworkCanvas" not found');
                }
                if (typeof QuoteNetwork === 'undefined') {
                    console.error('QuoteNetwork class is not defined');
                }
            }
            
            // Populate carousel view with quote data after a short delay to ensure DOM is ready
            if (typeof populateCarouselView === 'function') {
                populateCarouselView();
            }
            
            // Synchronize state across all systems after initialization
            synchronizeState();
        }, 100);
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
            updateViewDisplay('carousel'); // Immediately update display
        });
        
        networkViewBtn.addEventListener('click', () => {
            window.quoteJourneyState.setViewMode('network');
            updateViewDisplay('network'); // Immediately update display
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
            
            // Emit custom event to notify QuoteNetwork that view is now visible
            document.dispatchEvent(new CustomEvent('viewChanged', {
                detail: { viewMode: 'network' }
            }));
            
            // Trigger network resize when switching to network view
            if (window.quoteNetwork) {
                // Make sure the canvas container is visible before resizing
                networkView.style.display = 'block';
                
                setTimeout(() => {
                    window.quoteNetwork.resizeCanvas();
                    // Sync journey path with network view
                    if (window.journeyTracker) {
                        window.quoteNetwork.highlightJourneyPath(window.journeyTracker.getJourneyHistory());
                    }
                }, 300);
            } else {
                // Try to initialize QuoteNetwork if it failed earlier
                const canvas = document.getElementById('quoteNetworkCanvas');
                if (canvas && typeof QuoteNetwork !== 'undefined' && window.quoteJourneyState) {
                    window.quoteNetwork = new QuoteNetwork(canvas, quoteData, window.quoteJourneyState);
                    console.log('QuoteNetwork initialized on view switch');
                }
            }
        }
    }
    
    // Update button states
    updateViewButtons(viewMode);
    
    // Synchronize state across systems when view changes
    synchronizeState();
}

/**
 * Synchronize state across all systems
 */
function synchronizeState() {
    if (!window.quoteJourneyState) return;
    
    // Get current quote ID from QuoteJourneyState
    const currentQuoteId = window.quoteJourneyState.state.currentQuoteId;
    
    // Sync with JourneyTracker if available
    if (window.journeyTracker) {
        // Check if current quote is in JourneyTracker history
        const isInHistory = window.journeyTracker.journeyHistory.some(entry => entry.quoteId === currentQuoteId);
        
        if (!isInHistory && currentQuoteId) {
            // Add current quote to JourneyTracker if not already there
            window.journeyTracker.addToJourney(currentQuoteId);
        } else if (isInHistory) {
            // Update JourneyTracker current position to match QuoteJourneyState
            const currentIndex = window.journeyTracker.journeyHistory.findIndex(entry => entry.quoteId === currentQuoteId);
            if (currentIndex !== -1 && currentIndex !== window.journeyTracker.currentIndex) {
                window.journeyTracker.currentIndex = currentIndex;
            }
        }
    }
    
    // Update UI elements
    updateNavigationButtons();
    updateBreadcrumbs();
    updateDetailsPanel();
    
    // Update network view if available
    if (window.quoteNetwork && window.journeyTracker) {
        window.quoteNetwork.highlightJourneyPath(window.journeyTracker.getJourneyHistory());
    }
}

/**
 * Initialize journey navigation functionality
 */
function initializeJourneyNavigation() {
    // Back button
    const backButton = document.getElementById('journeyBackBtn');
    if (backButton && window.journeyTracker) {
        backButton.addEventListener('click', () => {
            const previousQuoteId = window.journeyTracker.goBack();
            if (previousQuoteId) {
                console.log('Navigated back to quote:', previousQuoteId);
            }
        });
        
        // Update button state initially
        backButton.disabled = !window.journeyTracker.canGoBack();
    }
    
    // Forward button
    const forwardButton = document.getElementById('journeyForwardBtn');
    if (forwardButton && window.journeyTracker) {
        forwardButton.addEventListener('click', () => {
            const nextQuoteId = window.journeyTracker.goForward();
            if (nextQuoteId) {
                console.log('Navigated forward to quote:', nextQuoteId);
            }
        });
        
        // Update button state initially
        forwardButton.disabled = !window.journeyTracker.canGoForward();
    }
    
    // Reset journey button
    const resetButton = document.getElementById('journeyResetBtn');
    if (resetButton && window.journeyTracker) {
        resetButton.addEventListener('click', () => {
            if (confirm('Are you sure you want to reset your journey history?')) {
                window.journeyTracker.resetJourney();
                console.log('Journey history reset');
            }
        });
    }
    
    // Journey insights button
    const insightsButton = document.getElementById('journeyInsightsBtn');
    if (insightsButton && window.journeyTracker) {
        insightsButton.addEventListener('click', () => {
            const insights = window.journeyTracker.getJourneyInsights();
            const report = window.journeyTracker.generateJourneyReport();
            console.log('Journey Insights:', insights);
            console.log('Journey Report:', report);
            
            // Display insights in a modal or panel if available
            displayJourneyInsights(insights, report);
        });
    }
    
    // Subscribe to journey tracker events to update navigation buttons
    if (window.journeyTracker) {
        window.journeyTracker.addEventListener('journeyEntryAdded', (data) => {
            updateNavigationButtons();
            
            // Update network view if available
            if (window.quoteNetwork) {
                window.quoteNetwork.highlightJourneyPath(data.history);
            }
        });
        
        window.journeyTracker.addEventListener('journeyNavigatedBack', () => {
            updateNavigationButtons();
            
            // Update network view if available
            if (window.quoteNetwork) {
                window.quoteNetwork.highlightJourneyPath(window.journeyTracker.getJourneyHistory());
            }
        });
        
        window.journeyTracker.addEventListener('journeyNavigatedForward', () => {
            updateNavigationButtons();
            
            // Update network view if available
            if (window.quoteNetwork) {
                window.quoteNetwork.highlightJourneyPath(window.journeyTracker.getJourneyHistory());
            }
        });
        
        window.journeyTracker.addEventListener('journeyReset', () => {
            updateNavigationButtons();
            
            // Update network view if available
            if (window.quoteNetwork) {
                window.quoteNetwork.highlightJourneyPath([]);
            }
        });
    }
}

/**
 * Update navigation button states based on current journey position
 */
function updateNavigationButtons() {
    if (!window.journeyTracker) return;
    
    const backButton = document.getElementById('journeyBackBtn');
    const forwardButton = document.getElementById('journeyForwardBtn');
    
    if (backButton) {
        backButton.disabled = !window.journeyTracker.canGoBack();
    }
    
    if (forwardButton) {
        forwardButton.disabled = !window.journeyTracker.canGoForward();
    }
    
    // Update journey position display if available
    const positionDisplay = document.getElementById('journeyPositionDisplay');
    if (positionDisplay) {
        const position = window.journeyTracker.getCurrentPosition();
        positionDisplay.textContent = `${position.position}/${position.total}`;
    }
}

/**
 * Display journey insights in the UI
 * @param {Object} insights - Journey insights object
 * @param {Object} report - Journey report object
 */
function displayJourneyInsights(insights, report) {
    // Use the existing journey insights panel from HTML
    const journeyInsightsPanel = document.getElementById('journeyInsightsPanel');
    const insightsContent = document.getElementById('insightsContent');
    const closeInsightsBtn = document.getElementById('closeInsightsBtn');
    
    if (!journeyInsightsPanel || !insightsContent) {
        console.error('Journey insights panel not found in HTML');
        return;
    }
    
    // Add close button functionality if not already added
    if (closeInsightsBtn) {
        // Remove existing listeners to avoid duplicates
        const newCloseBtn = closeInsightsBtn.cloneNode(true);
        closeInsightsBtn.parentNode.replaceChild(newCloseBtn, closeInsightsBtn);
        
        newCloseBtn.addEventListener('click', () => {
            journeyInsightsPanel.classList.add('hidden');
        });
    }
    
    // Generate insights HTML
    const insightsHTML = `
        <div class="insights-section">
            <h3 class="insights-title">Summary</h3>
            <div class="insights-metric">
                <span class="insights-label">Total quotes visited:</span>
                <span class="insights-value">${insights.totalQuotesVisited}</span>
            </div>
            <div class="insights-metric">
                <span class="insights-label">Unique quotes visited:</span>
                <span class="insights-value">${insights.uniqueQuotesVisited}</span>
            </div>
            <div class="insights-metric">
                <span class="insights-label">Journey duration:</span>
                <span class="insights-value">${Math.round(insights.journeyDuration / 1000)} seconds</span>
            </div>
            <div class="insights-metric">
                <span class="insights-label">Current position:</span>
                <span class="insights-value">${report.summary.journeyProgress}</span>
            </div>
        </div>
        
        <div class="insights-section">
            <h3 class="insights-title">Most Visited Themes</h3>
            ${insights.mostVisitedThemes.length > 0 ?
                insights.mostVisitedThemes.map(theme =>
                    `<div class="insights-metric">
                        <span class="insights-label">${theme.name}:</span>
                        <span class="insights-value">${theme.count} visits (${theme.percentage}%)</span>
                    </div>`
                ).join('') :
                '<p class="text-charcoal/60">No themes visited yet</p>'
            }
        </div>
        
        <div class="insights-section">
            <h3 class="insights-title">Navigation Patterns</h3>
            <div class="insights-metric">
                <span class="insights-label">Back navigations:</span>
                <span class="insights-value">${insights.navigationPatterns.backNavigationCount}</span>
            </div>
            <div class="insights-metric">
                <span class="insights-label">Forward navigations:</span>
                <span class="insights-value">${insights.navigationPatterns.forwardNavigationCount}</span>
            </div>
            <div class="insights-metric">
                <span class="insights-label">Circular patterns detected:</span>
                <span class="insights-value">${insights.navigationPatterns.circularPatterns.length}</span>
            </div>
        </div>
        
        <div class="insights-section">
            <h3 class="insights-title">Efficiency Metrics</h3>
            <div class="insights-metric">
                <span class="insights-label">Exploration rate:</span>
                <span class="insights-value">${Math.round(insights.efficiencyMetrics.explorationRate * 100)}%</span>
            </div>
            <div class="insights-metric">
                <span class="insights-label">Revisit rate:</span>
                <span class="insights-value">${Math.round(insights.efficiencyMetrics.revisitRate * 100)}%</span>
            </div>
            <div class="insights-metric">
                <span class="insights-label">Theme consistency:</span>
                <span class="insights-value">${Math.round(insights.efficiencyMetrics.themeConsistency * 100)}%</span>
            </div>
        </div>
    `;
    
    // Set the HTML
    insightsContent.innerHTML = insightsHTML;
    
    // Show the panel
    journeyInsightsPanel.classList.remove('hidden');
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
    try {
        console.log('Initializing insight cards...');
        
        // First populate carousel with quote data
        populateCarouselView();
        
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
                
                // If JourneyTracker is available, try to navigate to this quote
                if (window.journeyTracker && window.quoteJourneyState) {
                    // Try to find a matching quote based on the title
                    const titleElement = this.querySelector('h3');
                    if (titleElement) {
                        const title = titleElement.textContent.trim();
                        const matchingQuote = window.quoteJourneyState.quoteData.quotes.find(q => q.title === title);
                        
                        if (matchingQuote) {
                            window.quoteJourneyState.setCurrentQuote(matchingQuote.id);
                            console.log('Navigated to quote from insight card:', matchingQuote.id);
                        } else {
                            console.warn('No matching quote found for title:', title);
                        }
                    }
                }
            });
        });
        
        console.log('Insight card listeners setup complete');
        
    } catch (error) {
        console.error('Error setting up insight card listeners:', error);
    }
}

/**
 * Populate carousel view with quote data
 */
function populateCarouselView() {
    const carouselView = document.getElementById('carouselView');
    if (!carouselView || !window.quoteJourneyState) return;
    
    // Get first 6 quotes for carousel display
    const quotesToDisplay = window.quoteJourneyState.quoteData.quotes.slice(0, 6);
    
    // Generate HTML for each quote
    const quoteCardsHTML = quotesToDisplay.map((quote, index) => {
        // Add staggered delay classes for reveal animation
        const staggerClass = index < 5 ? ` reveal-stagger-${index + 1}` : '';
        return `
        <div class="reveal ${staggerClass} insight-card p-6 text-cream cursor-pointer">
            <h3 class="text-xl font-bold text-gold">${quote.title}</h3>
            <p class="mt-4 italic opacity-80">"${quote.quote}"</p>
            <div class="insight-reveal-content text-sm">
                <p>${quote.context}</p>
                <p class="mt-2 text-gold font-bold">Click to hide.</p>
            </div>
        </div>
    `;
    }).join('');
    
    // Set the HTML content
    carouselView.innerHTML = quoteCardsHTML;
}

/**
 * Set up JourneyTracker event listeners for UI updates
 */
function setupJourneyTrackerEvents() {
    if (!window.journeyTracker) return;
    
    // Listen for journey entry added
    window.journeyTracker.addEventListener('journeyEntryAdded', (data) => {
        updateNavigationButtons();
        updateBreadcrumbs();
        updateDetailsPanel();
        
        // Update network view if available
        if (window.quoteNetwork) {
            window.quoteNetwork.highlightJourneyPath(data.history);
        }
    });
    
    // Listen for journey navigation back
    window.journeyTracker.addEventListener('journeyNavigatedBack', (data) => {
        updateNavigationButtons();
        updateBreadcrumbs();
        updateDetailsPanel();
        
        // Update network view if available
        if (window.quoteNetwork) {
            window.quoteNetwork.highlightJourneyPath(window.journeyTracker.getJourneyHistory());
        }
    });
    
    // Listen for journey navigation forward
    window.journeyTracker.addEventListener('journeyNavigatedForward', (data) => {
        updateNavigationButtons();
        updateBreadcrumbs();
        updateDetailsPanel();
        
        // Update network view if available
        if (window.quoteNetwork) {
            window.quoteNetwork.highlightJourneyPath(window.journeyTracker.getJourneyHistory());
        }
    });
    
    // Listen for journey reset
    window.journeyTracker.addEventListener('journeyReset', (data) => {
        updateNavigationButtons();
        updateBreadcrumbs();
        updateDetailsPanel();
        
        // Update network view if available
        if (window.quoteNetwork) {
            window.quoteNetwork.highlightJourneyPath([]);
        }
    });
    
    // Listen for journey navigation to specific position
    window.journeyTracker.addEventListener('journeyNavigatedToPosition', (data) => {
        updateNavigationButtons();
        updateBreadcrumbs();
        updateDetailsPanel();
        
        // Update network view if available
        if (window.quoteNetwork) {
            window.quoteNetwork.highlightJourneyPath(window.journeyTracker.getJourneyHistory());
        }
    });
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
                updateDetailsPanel();
                updateBreadcrumbs();
                
                // Update network view if available
                if (window.quoteNetwork) {
                    window.quoteNetwork.selectNode(data.currentQuoteId);
                }
                
                // Show quote details panel when quote changes
                const quoteDetailsPanel = document.getElementById('quoteDetailsPanel');
                if (quoteDetailsPanel && data.currentQuoteId) {
                    quoteDetailsPanel.classList.add('open');
                }
                break;
                
            case 'viewModeChanged':
                updateViewDisplay(data.viewMode);
                break;
                
            case 'journeyUpdated':
                updateBreadcrumbs();
                break;
        }
    });
}

/**
 * Initialize details panel
 */
function initializeDetailsPanel() {
    // Initialize the sliding quote details panel
    const quoteDetailsPanel = document.getElementById('quoteDetailsPanel');
    const closeDetailsBtn = document.getElementById('closeDetailsBtn');
    
    if (quoteDetailsPanel && closeDetailsBtn) {
        // Add close button functionality
        closeDetailsBtn.addEventListener('click', () => {
            quoteDetailsPanel.classList.remove('open');
        });
    }
    
    // Create inline details panel if it doesn't exist
    let detailsPanel = document.getElementById('detailsPanel');
    if (!detailsPanel) {
        detailsPanel = document.createElement('div');
        detailsPanel.id = 'detailsPanel';
        detailsPanel.className = 'bg-white rounded-lg shadow-lg p-6 mb-6';
        
        // Insert after view controls
        const viewControls = document.querySelector('.view-controls');
        if (viewControls) {
            viewControls.parentNode.insertBefore(detailsPanel, viewControls.nextSibling);
        } else {
            // Fallback: add to main content area
            const mainContent = document.querySelector('main');
            if (mainContent) {
                mainContent.insertBefore(detailsPanel, mainContent.firstChild);
            }
        }
    }
    
    // Initialize with current quote
    updateDetailsPanel();
}

/**
 * Update details panel with current quote information
 */
function updateDetailsPanel() {
    // Update both the inline details panel and the sliding panel
    const detailsPanel = document.getElementById('detailsPanel');
    const quoteDetailsPanel = document.getElementById('quoteDetailsPanel');
    const detailsContent = document.getElementById('detailsContent');
    
    if (!window.quoteJourneyState) return;
    
    const currentQuote = window.quoteJourneyState.getCurrentQuote();
    if (!currentQuote) {
        if (detailsPanel) {
            detailsPanel.innerHTML = '<p class="text-gray-500">No quote selected</p>';
        }
        if (detailsContent) {
            detailsContent.innerHTML = '<div class="text-center py-8 text-cream/60"><p>Select a quote to view details</p></div>';
        }
        return;
    }
    
    // Get journey position if available
    let journeyPosition = '';
    if (window.journeyTracker) {
        const position = window.journeyTracker.getCurrentPosition();
        journeyPosition = `<div class="text-sm text-cream/70 mb-2">Journey Position: ${position.position}/${position.total}</div>`;
    }
    
    // Generate themes HTML
    const themesHTML = currentQuote.themes && currentQuote.themes.length > 0 ?
        currentQuote.themes.map(themeId => {
            const theme = window.quoteJourneyState.quoteData.themes.find(t => t.id === themeId);
            return theme ? `<span class="theme-tag">${theme.name}</span>` : '';
        }).join('') : '';
    
    // Generate related quotes HTML
    const relatedQuotesHTML = currentQuote.relatedQuotes && currentQuote.relatedQuotes.length > 0 ?
        currentQuote.relatedQuotes.map(related => {
            const relatedQuote = window.quoteJourneyState.quoteData.quotes.find(q => q.id === related.id);
            return relatedQuote ? `
                <div class="border-l-4 border-gold pl-4 mb-2">
                    <h4 class="font-semibold text-sm text-cream">${relatedQuote.title}</h4>
                    <p class="text-xs text-cream/70 italic">"${relatedQuote.quote.substring(0, 100)}..."</p>
                    <button class="text-xs text-gold hover:text-cream mt-1" onclick="window.quoteJourneyState.setCurrentQuote('${related.id}')">
                        View Quote →
                    </button>
                </div>
            ` : '';
        }).join('') : '<p class="text-cream/60 text-sm">No related quotes</p>';
    
    const detailsHTML = `
        <div class="quote-details">
            ${journeyPosition}
            <h2 class="quote-details-title">${currentQuote.title}</h2>
            <div class="quote-details-text">
                <p>"${currentQuote.quote}"</p>
            </div>
            <div class="quote-details-context">
                <p>${currentQuote.context}</p>
            </div>
            <div class="quote-details-source">
                <p><strong>Source:</strong> ${currentQuote.source.work}, ${currentQuote.source.year}</p>
            </div>
            <div class="quote-details-themes">
                <h3 class="quote-details-themes-title">Themes:</h3>
                ${themesHTML}
            </div>
            <div class="related-quotes">
                <h3 class="text-sm font-semibold text-cream mb-2">Related Quotes:</h3>
                ${relatedQuotesHTML}
            </div>
        </div>
    `;
    
    // Update inline details panel
    if (detailsPanel) {
        detailsPanel.innerHTML = detailsHTML;
    }
    
    // Update sliding panel content
    if (detailsContent) {
        detailsContent.innerHTML = detailsHTML;
    }
}

/**
 * Initialize breadcrumbs
 */
function initializeBreadcrumbs() {
    // Create breadcrumbs container if it doesn't exist
    let breadcrumbsContainer = document.getElementById('breadcrumbsContainer');
    if (!breadcrumbsContainer) {
        breadcrumbsContainer = document.createElement('div');
        breadcrumbsContainer.id = 'breadcrumbsContainer';
        breadcrumbsContainer.className = 'bg-gray-100 rounded-lg p-3 mb-4 text-sm';
        
        // Insert after details panel
        const detailsPanel = document.getElementById('detailsPanel');
        if (detailsPanel) {
            detailsPanel.parentNode.insertBefore(breadcrumbsContainer, detailsPanel.nextSibling);
        } else {
            // Fallback: add to main content area
            const mainContent = document.querySelector('main');
            if (mainContent) {
                mainContent.insertBefore(breadcrumbsContainer, mainContent.firstChild);
            }
        }
    }
    
    // Initialize with current journey
    updateBreadcrumbs();
}

/**
 * Update breadcrumbs with current journey history
 */
function updateBreadcrumbs() {
    const breadcrumbsContainer = document.getElementById('breadcrumbsContainer');
    if (!breadcrumbsContainer || !window.journeyTracker) return;
    
    const journeyHistory = window.journeyTracker.getJourneyHistory();
    const currentPosition = window.journeyTracker.getCurrentPosition();
    
    if (journeyHistory.length === 0) {
        breadcrumbsContainer.innerHTML = '<div class="text-gray-500">No journey history</div>';
        return;
    }
    
    // Generate breadcrumb HTML
    const breadcrumbsHTML = journeyHistory.map((entry, index) => {
        const isCurrent = index === currentPosition.position - 1;
        const isPast = index < currentPosition.position - 1;
        const isFuture = index > currentPosition.position - 1;
        
        let className = 'breadcrumb-item inline-block mx-1 ';
        if (isCurrent) {
            className += 'font-bold text-blue-600';
        } else if (isPast) {
            className += 'text-gray-600 hover:text-blue-600 cursor-pointer';
        } else {
            className += 'text-gray-400';
        }
        
        return `
            <span class="${className}"
                  ${isPast ? `onclick="window.journeyTracker.goToPosition(${index})"` : ''}>
                ${entry.title}
            </span>
            ${index < journeyHistory.length - 1 ? '→' : ''}
        `;
    }).join('');
    
    breadcrumbsContainer.innerHTML = `
        <div class="flex items-center flex-wrap">
            <span class="text-gray-500 mr-2">Journey:</span>
            ${breadcrumbsHTML}
        </div>
    `;
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