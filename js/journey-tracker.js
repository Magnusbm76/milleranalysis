/**
 * JourneyTracker - Navigation History and Insights for Contextual Quote Journey
 * 
 * This class is responsible for maintaining journey history, handling navigation actions,
 * and calculating journey insights for the Miller Analysis project.
 * 
 * Features:
 * - Journey history management with configurable size limits
 * - Navigation actions (back, forward, reset)
 * - Journey insights calculation and analytics
 * - Event system for journey changes
 * - Data persistence and export capabilities
 * - Integration with QuoteJourneyState
 */

class JourneyTracker {
  /**
   * Constructor for JourneyTracker
   * @param {QuoteJourneyState} journeyState - QuoteJourneyState instance
   * @param {Object} quoteData - Quote data structure
   * @param {number} maxHistorySize - Maximum number of entries in journey history
   */
  constructor(journeyState, quoteData, maxHistorySize = 50) {
    // Validate inputs
    if (!journeyState || !quoteData) {
      throw new Error('JourneyTracker requires journeyState and quoteData parameters');
    }
    
    // Store references
    this.journeyState = journeyState;
    this.quoteData = quoteData;
    
    // Journey history management
    this.journeyHistory = [];
    this.currentIndex = -1; // Current position in journey history
    this.maxHistorySize = Math.max(1, parseInt(maxHistorySize) || 50);
    
    // Journey metadata
    this.journeyStartTime = null;
    this.totalJourneyTime = 0;
    this.lastVisitTime = null;
    
    // Event system
    this.eventListeners = new Map();
    
    // Initialize journey tracking
    this.initialize();
  }
  
  /**
   * Initialize the journey tracker
   */
  initialize() {
    // Subscribe to journey state changes
    this.journeyState.subscribe((eventType, data, state) => {
      switch (eventType) {
        case 'currentQuoteChanged':
          this.handleQuoteChange(data);
          break;
        case 'journeyUpdated':
          this.handleJourneyUpdate(data);
          break;
        case 'stateRestored':
          this.handleStateRestore(state);
          break;
      }
    });
    
    // Load persisted journey data if available
    this.loadJourneyData();
    
    console.log('JourneyTracker initialized with max history size:', this.maxHistorySize);
  }
  
  /**
   * Add a new quote to journey history
   * @param {string} quoteId - ID of the quote to add
   * @returns {boolean} Success status
   */
  addToJourney(quoteId) {
    // Validate quote ID
    const quote = this.quoteData.quotes.find(q => q.id === quoteId);
    if (!quote) {
      console.error(`Invalid quote ID: ${quoteId}`);
      return false;
    }
    
    const currentTime = Date.now();
    
    // If we're not at the end of the history, truncate future entries
    if (this.currentIndex < this.journeyHistory.length - 1) {
      this.journeyHistory = this.journeyHistory.slice(0, this.currentIndex + 1);
    }
    
    // Check if this is a duplicate of the last entry
    if (this.journeyHistory.length > 0 &&
        this.journeyHistory[this.journeyHistory.length - 1].quoteId === quoteId) {
      // Update the timestamp of the last entry instead of adding a new one
      this.journeyHistory[this.journeyHistory.length - 1].timestamp = currentTime;
      this.journeyHistory[this.journeyHistory.length - 1].visitCount++;
    } else {
      // Create new journey entry
      const journeyEntry = {
        quoteId,
        timestamp: currentTime,
        title: quote.title,
        themes: quote.themes || [],
        visitCount: 1,
        duration: 0, // Will be calculated when navigating away
        source: 'navigation' // Can be 'navigation', 'search', 'recommendation', etc.
      };
      
      // Add to journey history
      this.journeyHistory.push(journeyEntry);
      
      // Update current index to point to the new entry
      this.currentIndex = this.journeyHistory.length - 1;
      
      // Enforce maximum history size
      if (this.journeyHistory.length > this.maxHistorySize) {
        this.journeyHistory.shift();
        this.currentIndex--;
      }
    }
    
    // Update journey metadata
    if (!this.journeyStartTime) {
      this.journeyStartTime = currentTime;
    }
    
    // Calculate duration of previous entry if applicable
    if (this.lastVisitTime && this.currentIndex > 0) {
      const duration = currentTime - this.lastVisitTime;
      this.journeyHistory[this.currentIndex - 1].duration = duration;
      this.totalJourneyTime += duration;
    }
    
    this.lastVisitTime = currentTime;
    
    // Emit journey change event
    this.emitEvent('journeyEntryAdded', {
      entry: this.journeyHistory[this.currentIndex],
      history: this.getJourneyHistory(),
      currentIndex: this.currentIndex
    });
    
    // Persist journey data
    this.persistJourneyData();
    
    return true;
  }
  
  /**
   * Navigate to previous quote in journey history
   * @returns {string|null} Quote ID of previous quote, or null if not available
   */
  goBack() {
    if (!this.canGoBack()) {
      return null;
    }
    
    // Move to previous entry
    this.currentIndex--;
    const previousEntry = this.journeyHistory[this.currentIndex];
    
    // Update journey state
    this.journeyState.setCurrentQuote(previousEntry.quoteId);
    
    // Emit navigation event
    this.emitEvent('journeyNavigatedBack', {
      entry: previousEntry,
      currentIndex: this.currentIndex,
      canGoForward: this.canGoForward()
    });
    
    return previousEntry.quoteId;
  }
  
  /**
   * Navigate to next quote in journey history (if available)
   * @returns {string|null} Quote ID of next quote, or null if not available
   */
  goForward() {
    if (!this.canGoForward()) {
      return null;
    }
    
    // Move to next entry
    this.currentIndex++;
    const nextEntry = this.journeyHistory[this.currentIndex];
    
    // Update journey state
    this.journeyState.setCurrentQuote(nextEntry.quoteId);
    
    // Emit navigation event
    this.emitEvent('journeyNavigatedForward', {
      entry: nextEntry,
      currentIndex: this.currentIndex,
      canGoBack: this.canGoBack()
    });
    
    return nextEntry.quoteId;
  }
  
  /**
   * Navigate to a specific position in journey history
   * @param {number} position - Position to navigate to (0-based index)
   * @returns {string|null} Quote ID at the specified position, or null if invalid
   */
  goToPosition(position) {
    if (position < 0 || position >= this.journeyHistory.length) {
      return null;
    }
    
    // Update current index
    this.currentIndex = position;
    const targetEntry = this.journeyHistory[this.currentIndex];
    
    // Update journey state
    this.journeyState.setCurrentQuote(targetEntry.quoteId);
    
    // Emit navigation event
    this.emitEvent('journeyNavigatedToPosition', {
      entry: targetEntry,
      position: position,
      canGoBack: this.canGoBack(),
      canGoForward: this.canGoForward()
    });
    
    return targetEntry.quoteId;
  }
  
  /**
   * Reset journey history
   * @returns {boolean} Success status
   */
  resetJourney() {
    // Store current quote before reset
    const currentQuoteId = this.journeyState.state.currentQuoteId;
    
    // Clear journey history
    this.journeyHistory = [];
    this.currentIndex = -1;
    this.journeyStartTime = null;
    this.totalJourneyTime = 0;
    this.lastVisitTime = null;
    
    // Emit reset event
    this.emitEvent('journeyReset', {
      previousQuoteId: currentQuoteId
    });
    
    // Clear persisted data
    this.clearJourneyData();
    
    return true;
  }
  
  /**
   * Get current position in journey
   * @returns {Object} Current position information
   */
  getCurrentPosition() {
    if (this.currentIndex < 0 || this.currentIndex >= this.journeyHistory.length) {
      return {
        position: -1,
        total: 0,
        percentage: 0,
        entry: null
      };
    }
    
    const total = this.journeyHistory.length;
    const position = this.currentIndex + 1; // 1-based index for user-facing display
    const percentage = total > 0 ? (position / total) * 100 : 0;
    
    return {
      position,
      total,
      percentage: Math.round(percentage),
      entry: this.journeyHistory[this.currentIndex]
    };
  }
  
  /**
   * Check if backward navigation is possible
   * @returns {boolean} True if can go back
   */
  canGoBack() {
    return this.currentIndex > 0;
  }
  
  /**
   * Check if forward navigation is possible
   * @returns {boolean} True if can go forward
   */
  canGoForward() {
    return this.currentIndex >= 0 && this.currentIndex < this.journeyHistory.length - 1;
  }
  
  /**
   * Calculate journey insights and statistics
   * @returns {Object} Journey insights
   */
  getJourneyInsights() {
    if (this.journeyHistory.length === 0) {
      return {
        totalQuotesVisited: 0,
        uniqueQuotesVisited: 0,
        mostVisitedThemes: [],
        journeyDuration: 0,
        averageVisitDuration: 0,
        navigationPatterns: {
          backNavigationCount: 0,
          forwardNavigationCount: 0,
          circularPatterns: []
        },
        efficiencyMetrics: {
          explorationRate: 0,
          revisitRate: 0,
          themeConsistency: 0
        }
      };
    }
    
    // Calculate basic statistics
    const totalQuotesVisited = this.journeyHistory.length;
    const uniqueQuoteIds = new Set(this.journeyHistory.map(entry => entry.quoteId));
    const uniqueQuotesVisited = uniqueQuoteIds.size;
    
    // Calculate most visited themes
    const themeCounts = {};
    this.journeyHistory.forEach(entry => {
      if (entry.themes) {
        entry.themes.forEach(theme => {
          themeCounts[theme] = (themeCounts[theme] || 0) + 1;
        });
      }
    });
    
    const mostVisitedThemes = Object.entries(themeCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([themeId, count]) => {
        const theme = this.quoteData.themes.find(t => t.id === themeId);
        return {
          id: themeId,
          name: theme ? theme.name : themeId,
          count,
          percentage: Math.round((count / totalQuotesVisited) * 100)
        };
      });
    
    // Calculate journey duration
    const journeyDuration = this.journeyStartTime ? 
      (this.lastVisitTime || Date.now()) - this.journeyStartTime : 0;
    
    // Calculate average visit duration
    const completedVisits = this.journeyHistory.filter(entry => entry.duration > 0);
    const totalVisitDuration = completedVisits.reduce((sum, entry) => sum + entry.duration, 0);
    const averageVisitDuration = completedVisits.length > 0 ? 
      totalVisitDuration / completedVisits.length : 0;
    
    // Detect circular navigation patterns
    const circularPatterns = this.detectCircularPatterns();
    
    // Calculate efficiency metrics
    const explorationRate = uniqueQuotesVisited / totalQuotesVisited;
    const revisitRate = 1 - explorationRate;
    const themeConsistency = this.calculateThemeConsistency();
    
    return {
      totalQuotesVisited,
      uniqueQuotesVisited,
      mostVisitedThemes,
      journeyDuration,
      averageVisitDuration,
      navigationPatterns: {
        backNavigationCount: this.countBackNavigations(),
        forwardNavigationCount: this.countForwardNavigations(),
        circularPatterns
      },
      efficiencyMetrics: {
        explorationRate: Math.round(explorationRate * 100) / 100,
        revisitRate: Math.round(revisitRate * 100) / 100,
        themeConsistency: Math.round(themeConsistency * 100) / 100
      }
    };
  }
  
  /**
   * Detect circular navigation patterns in journey history
   * @returns {Array} Array of circular patterns detected
   */
  detectCircularPatterns() {
    const patterns = [];
    const minPatternLength = 3; // Minimum length for a pattern to be considered circular
    const maxPatternLength = 8; // Maximum length to check for patterns
    
    for (let length = minPatternLength; length <= maxPatternLength; length++) {
      if (this.journeyHistory.length < length * 2) continue;
      
      // Check for repeating sequences
      for (let i = 0; i <= this.journeyHistory.length - length * 2; i++) {
        const sequence = this.journeyHistory.slice(i, i + length);
        const nextSequence = this.journeyHistory.slice(i + length, i + length * 2);
        
        // Compare sequences
        let isMatch = true;
        for (let j = 0; j < length; j++) {
          if (sequence[j].quoteId !== nextSequence[j].quoteId) {
            isMatch = false;
            break;
          }
        }
        
        if (isMatch) {
          const quoteIds = sequence.map(entry => entry.quoteId);
          patterns.push({
            length,
            sequence: quoteIds,
            startPosition: i,
            occurrences: this.countPatternOccurrences(quoteIds)
          });
        }
      }
    }
    
    // Remove duplicate patterns
    return patterns.filter((pattern, index, self) =>
      index === self.findIndex(p => 
        p.length === pattern.length && 
        JSON.stringify(p.sequence) === JSON.stringify(pattern.sequence)
      )
    );
  }
  
  /**
   * Count occurrences of a specific pattern in journey history
   * @param {Array} pattern - Array of quote IDs representing the pattern
   * @returns {number} Number of occurrences
   */
  countPatternOccurrences(pattern) {
    let count = 0;
    const patternLength = pattern.length;
    
    for (let i = 0; i <= this.journeyHistory.length - patternLength; i++) {
      let isMatch = true;
      for (let j = 0; j < patternLength; j++) {
        if (this.journeyHistory[i + j].quoteId !== pattern[j]) {
          isMatch = false;
          break;
        }
      }
      if (isMatch) count++;
    }
    
    return count;
  }
  
  /**
   * Count backward navigation instances
   * @returns {number} Number of backward navigations
   */
  countBackNavigations() {
    // This would ideally be tracked during actual navigation
    // For now, estimate based on journey patterns
    let count = 0;
    for (let i = 1; i < this.journeyHistory.length; i++) {
      // Check if current quote was visited before
      const currentQuoteId = this.journeyHistory[i].quoteId;
      const previousOccurrences = this.journeyHistory
        .slice(0, i)
        .filter(entry => entry.quoteId === currentQuoteId)
        .length;
      
      if (previousOccurrences > 0) {
        count++;
      }
    }
    return count;
  }
  
  /**
   * Count forward navigation instances
   * @returns {number} Number of forward navigations
   */
  countForwardNavigations() {
    // This would ideally be tracked during actual navigation
    // For now, estimate based on journey patterns
    // Forward navigation typically follows backward navigation
    return Math.max(0, this.countBackNavigations() - 1);
  }
  
  /**
   * Calculate theme consistency in journey
   * @returns {number} Theme consistency score (0-1)
   */
  calculateThemeConsistency() {
    if (this.journeyHistory.length < 2) return 1;
    
    let totalSimilarity = 0;
    let comparisonCount = 0;
    
    for (let i = 0; i < this.journeyHistory.length - 1; i++) {
      const currentThemes = new Set(this.journeyHistory[i].themes || []);
      const nextThemes = new Set(this.journeyHistory[i + 1].themes || []);
      
      // Calculate Jaccard similarity
      const intersection = new Set([...currentThemes].filter(x => nextThemes.has(x)));
      const union = new Set([...currentThemes, ...nextThemes]);
      
      const similarity = union.size > 0 ? intersection.size / union.size : 0;
      totalSimilarity += similarity;
      comparisonCount++;
    }
    
    return comparisonCount > 0 ? totalSimilarity / comparisonCount : 0;
  }
  
  /**
   * Export journey data
   * @returns {Object} Journey data for export
   */
  exportJourneyData() {
    return {
      journeyHistory: this.journeyHistory,
      currentIndex: this.currentIndex,
      journeyStartTime: this.journeyStartTime,
      totalJourneyTime: this.totalJourneyTime,
      lastVisitTime: this.lastVisitTime,
      insights: this.getJourneyInsights(),
      exportDate: new Date().toISOString()
    };
  }
  
  /**
   * Import journey data
   * @param {Object} data - Journey data to import
   * @returns {boolean} Success status
   */
  importJourneyData(data) {
    if (!data || typeof data !== 'object') {
      console.error('Invalid journey data provided');
      return false;
    }
    
    try {
      // Validate and import journey history
      if (Array.isArray(data.journeyHistory)) {
        this.journeyHistory = data.journeyHistory;
      }
      
      // Import current index
      if (typeof data.currentIndex === 'number') {
        this.currentIndex = data.currentIndex;
      }
      
      // Import metadata
      if (data.journeyStartTime) {
        this.journeyStartTime = data.journeyStartTime;
      }
      
      if (typeof data.totalJourneyTime === 'number') {
        this.totalJourneyTime = data.totalJourneyTime;
      }
      
      if (data.lastVisitTime) {
        this.lastVisitTime = data.lastVisitTime;
      }
      
      // Emit import event
      this.emitEvent('journeyDataImported', {
        historyLength: this.journeyHistory.length,
        currentIndex: this.currentIndex
      });
      
      // Persist imported data
      this.persistJourneyData();
      
      return true;
    } catch (error) {
      console.error('Error importing journey data:', error);
      return false;
    }
  }
  
  /**
   * Get journey history (copy to prevent external mutation)
   * @returns {Array} Copy of journey history
   */
  getJourneyHistory() {
    return JSON.parse(JSON.stringify(this.journeyHistory));
  }
  
  /**
   * Add event listener for journey events
   * @param {string} eventType - Type of event to listen for
   * @param {Function} callback - Callback function
   * @returns {Function} Unsubscribe function
   */
  addEventListener(eventType, callback) {
    if (typeof callback !== 'function') {
      throw new Error('Event callback must be a function');
    }
    
    if (!this.eventListeners.has(eventType)) {
      this.eventListeners.set(eventType, []);
    }
    
    this.eventListeners.get(eventType).push(callback);
    
    // Return unsubscribe function
    return () => {
      const listeners = this.eventListeners.get(eventType);
      if (listeners) {
        const index = listeners.indexOf(callback);
        if (index > -1) {
          listeners.splice(index, 1);
        }
      }
    };
  }
  
  /**
   * Emit journey event
   * @param {string} eventType - Type of event
   * @param {Object} data - Event data
   */
  emitEvent(eventType, data) {
    const listeners = this.eventListeners.get(eventType);
    if (listeners) {
      listeners.forEach(callback => {
        try {
          callback(data);
        } catch (error) {
          console.error(`Error in event listener for ${eventType}:`, error);
        }
      });
    }
  }
  
  /**
   * Handle quote change from journey state
   * @param {Object} data - Quote change data
   */
  handleQuoteChange(data) {
    // This is handled by addToJourney which is called by QuoteJourneyState
    // We can add additional handling here if needed
  }
  
  /**
   * Handle journey update from journey state
   * @param {Object} data - Journey update data
   */
  handleJourneyUpdate(data) {
    // Sync with journey state if needed
    if (data.history && Array.isArray(data.history)) {
      // This would be used if we want to sync with QuoteJourneyState's journey history
      // For now, we maintain our own journey history
    }
  }
  
  /**
   * Handle state restoration from journey state
   * @param {Object} state - Restored state
   */
  handleStateRestore(state) {
    // Load journey data if available in restored state
    if (state.journeyHistory && Array.isArray(state.journeyHistory)) {
      // Find the current quote ID in the journey history
      const currentQuoteId = state.currentQuoteId;
      let targetIndex = state.journeyHistory.length - 1; // Default to last entry
      
      if (currentQuoteId) {
        // Find the index of the current quote in the journey history
        const foundIndex = state.journeyHistory.findIndex(entry => entry.quoteId === currentQuoteId);
        if (foundIndex !== -1) {
          targetIndex = foundIndex;
        }
      }
      
      this.importJourneyData({
        journeyHistory: state.journeyHistory,
        currentIndex: targetIndex
      });
    }
  }
  
  /**
   * Persist journey data to localStorage
   */
  persistJourneyData() {
    try {
      const dataToPersist = {
        journeyHistory: this.journeyHistory,
        currentIndex: this.currentIndex,
        journeyStartTime: this.journeyStartTime,
        totalJourneyTime: this.totalJourneyTime,
        lastVisitTime: this.lastVisitTime
      };
      
      localStorage.setItem('journeyTrackerData', JSON.stringify(dataToPersist));
      return true;
    } catch (error) {
      console.error('Failed to persist journey data:', error);
      return false;
    }
  }
  
  /**
   * Load journey data from localStorage
   */
  loadJourneyData() {
    try {
      const persistedData = localStorage.getItem('journeyTrackerData');
      if (!persistedData) {
        return false;
      }
      
      const data = JSON.parse(persistedData);
      return this.importJourneyData(data);
    } catch (error) {
      console.error('Failed to load journey data:', error);
      return false;
    }
  }
  
  /**
   * Clear journey data from localStorage
   */
  clearJourneyData() {
    try {
      localStorage.removeItem('journeyTrackerData');
      return true;
    } catch (error) {
      console.error('Failed to clear journey data:', error);
      return false;
    }
  }
  
  /**
   * Generate journey report
   * @returns {Object} Comprehensive journey report
   */
  generateJourneyReport() {
    const insights = this.getJourneyInsights();
    const position = this.getCurrentPosition();
    
    return {
      summary: {
        totalJourneyTime: insights.journeyDuration,
        totalQuotesVisited: insights.totalQuotesVisited,
        uniqueQuotesVisited: insights.uniqueQuotesVisited,
        currentPosition: position.position,
        journeyProgress: `${position.position}/${position.total}`
      },
      themes: {
        mostVisited: insights.mostVisitedThemes,
        themeConsistency: insights.efficiencyMetrics.themeConsistency
      },
      navigation: {
        backNavigations: insights.navigationPatterns.backNavigationCount,
        forwardNavigations: insights.navigationPatterns.forwardNavigationCount,
        circularPatterns: insights.navigationPatterns.circularPatterns.length
      },
      efficiency: {
        explorationRate: insights.efficiencyMetrics.explorationRate,
        revisitRate: insights.efficiencyMetrics.revisitRate,
        averageVisitDuration: insights.averageVisitDuration
      },
      detailedHistory: this.getJourneyHistory(),
      generatedAt: new Date().toISOString()
    };
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = JourneyTracker;
}