// Debug script for NavigationObserver
// This script adds detailed logging to track navigation color switching

// Store original NavigationObserver class
const OriginalNavigationObserver = window.NavigationObserver;

// Enhanced NavigationObserver with debugging
class DebugNavigationObserver extends OriginalNavigationObserver {
    constructor() {
        console.log('🔍 DebugNavigationObserver: Initializing...');
        super();
        
        // Add debug properties
        this.debugLog = true;
        this.lastSection = null;
        this.lastDarkMode = null;
        
        console.log('🔍 DebugNavigationObserver: Initialized with', this.sections.length, 'sections');
        console.log('🔍 DebugNavigationObserver: Navigation element:', this.navElement);
        
        // Log all sections and their classes
        this.sections.forEach((section, index) => {
            console.log(`🔍 DebugNavigationObserver: Section ${index} (${section.id}):`, section.className);
        });
        
        // Start monitoring
        this.startDebugMonitoring();
    }
    
    updateNavigationColor(section) {
        if (this.debugLog) {
            console.log('🔍 DebugNavigationObserver: updateNavigationColor called with section:', section.id, section.className);
        }
        
        // Call original method
        super.updateNavigationColor(section);
        
        // Check result
        const hasDarkMode = this.navElement.classList.contains('nav-dark-mode');
        if (this.debugLog) {
            console.log('🔍 DebugNavigationObserver: nav-dark-mode class is now:', hasDarkMode);
        }
        
        // Track changes
        if (this.lastSection !== section.id) {
            console.log(`🎯 DebugNavigationObserver: Section changed from "${this.lastSection}" to "${section.id}"`);
            this.lastSection = section.id;
        }
        
        if (this.lastDarkMode !== hasDarkMode) {
            console.log(`🎨 DebugNavigationObserver: Dark mode changed from ${this.lastDarkMode} to ${hasDarkMode}`);
            this.lastDarkMode = hasDarkMode;
        }
    }
    
    startDebugMonitoring() {
        // Monitor scroll position
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;
            const scrollCenter = scrollY + (viewportHeight / 2);
            
            // Find current section at center of viewport
            let currentSection = null;
            this.sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                const absoluteTop = rect.top + scrollY;
                const absoluteBottom = absoluteTop + rect.height;
                
                if (scrollCenter >= absoluteTop && scrollCenter < absoluteBottom) {
                    currentSection = section;
                }
            });
            
            if (currentSection && currentSection.id !== this.lastSection) {
                console.log(`📍 DebugNavigationObserver: Viewport center at ${scrollCenter}px, entering section: ${currentSection.id}`);
            }
        });
        
        // Monitor intersection observer events
        if (this.observer) {
            const originalCallback = this.observer.callback;
            this.observer.callback = (entries) => {
                console.log('👁️ DebugNavigationObserver: IntersectionObserver entries:', 
                    entries.map(e => ({
                        section: e.target.id,
                        isIntersecting: e.isIntersecting,
                        intersectionRatio: e.intersectionRatio,
                        boundingClientRect: e.boundingClientRect
                    }))
                );
                
                if (originalCallback) {
                    originalCallback(entries);
                }
            };
        }
    }
}

// Replace the original NavigationObserver
window.NavigationObserver = DebugNavigationObserver;

console.log('🔧 DebugNavigationObserver: Patched NavigationObserver with debugging capabilities');