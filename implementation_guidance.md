# Implementation Guidance for Contextual Quote Journey

## Overview

This document provides comprehensive guidance for implementing the Contextual Quote Journey system in the existing Miller Analysis codebase. It outlines the step-by-step process for integrating the new network-based navigation system with the current quote carousel functionality.

## Integration Strategy

### 1. Phased Implementation Approach

The implementation should be completed in phases to ensure smooth transition and maintain functionality:

**Phase 1: Data Structure Integration** (Day 1-2)
- Create the `quote_data.js` file with the new data structure
- Update existing `QuoteCarousel` class to work with new data format
- Maintain backward compatibility with current HTML structure

**Phase 2: Network Visualization** (Day 3-4)
- Implement the canvas-based network visualization
- Add interactive node and connection rendering
- Integrate with existing CSS styling

**Phase 3: Navigation System** (Day 5-6)
- Implement network navigation logic
- Add journey tracking and breadcrumb navigation
- Integrate with existing smooth scrolling

**Phase 4: Enhanced Features** (Day 7-8)
- Add theme filtering and search functionality
- Implement responsive design for mobile devices
- Add accessibility features

### 2. File Structure

```
js/
├── main.js (modified)
├── quote_data.js (new)
├── quote-network.js (new)
├── journey-tracker.js (new)
└── contact.js (unchanged)

css/
├── styles.css (modified)
└── network-styles.css (new)

assets/
├── icons/ (new)
│   ├── language-icon.svg
│   ├── identity-icon.svg
│   └── ...
└── images/
    └── quote-cards/ (existing)
```

## Step-by-Step Implementation

### Step 1: Create the Data File

Create `js/quote_data.js` using the structure from `quote_data_sample.md`:

```javascript
// js/quote_data.js
const quoteData = {
  // Copy the complete data structure from quote_data_sample.md
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = quoteData;
}
```

### Step 2: Update the Insights Section HTML

Modify the insights section in `index.html` to support both carousel and network views:

```html
<!-- Replace existing insights section -->
<section id="insights" class="min-h-screen bg-oxford-blue py-24">
    <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-5xl text-cream font-bold mb-12 border-b border-gold pb-4 text-center">
            Insights from the Labyrinth
        </h2>

        <!-- View Toggle -->
        <div class="flex justify-center mb-8">
            <div class="bg-cream/10 rounded-lg p-1 inline-flex">
                <button id="carouselView" class="px-6 py-2 rounded-md text-cream font-bold transition bg-gold text-oxford-blue">
                    Carousel View
                </button>
                <button id="networkView" class="px-6 py-2 rounded-md text-cream font-bold transition hover:bg-cream/20">
                    Network Journey
                </button>
            </div>
        </div>

        <!-- Carousel View (existing) -->
        <div id="carouselContainer" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Existing insight cards will be populated by JavaScript -->
        </div>

        <!-- Network View (new) -->
        <div id="networkContainer" class="hidden">
            <div class="network-container relative h-[600px] bg-cream rounded-lg shadow-xl">
                <canvas id="networkCanvas" class="network-canvas"></canvas>
                
                <!-- Journey Breadcrumbs -->
                <div id="journeyBreadcrumbs" class="journey-breadcrumbs hidden">
                    <div class="text-sm font-bold mb-2 text-gold">Your Journey:</div>
                    <div id="breadcrumbPath"></div>
                </div>
                
                <!-- Theme Filter -->
                <div class="absolute top-4 right-4 bg-cream/90 rounded-lg p-3 shadow-lg">
                    <div class="text-sm font-bold text-oxford-blue mb-2">Filter by Theme:</div>
                    <div id="themeFilter" class="space-y-2">
                        <!-- Theme filters will be populated by JavaScript -->
                    </div>
                </div>
                
                <!-- Quote Details Panel -->
                <div id="quoteDetails" class="absolute bottom-4 left-4 right-4 bg-oxford-blue/95 rounded-lg p-4 text-cream hidden">
                    <div class="flex justify-between items-start">
                        <div class="flex-1">
                            <h3 id="detailTitle" class="text-xl font-bold text-gold mb-2"></h3>
                            <p id="detailQuote" class="italic mb-2"></p>
                            <p id="detailContext" class="text-sm opacity-90"></p>
                        </div>
                        <button id="closeDetails" class="ml-4 text-cream hover:text-gold">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
```

### Step 3: Update CSS Styles

Add network-specific styles to `css/styles.css`:

```css
/* Add to existing css/styles.css */

/* Network View Styles */
.network-container {
    position: relative;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #F5F5DC 0%, #E8E8D0 100%);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 33, 71, 0.2);
}

.network-canvas {
    display: block;
    cursor: grab;
    width: 100%;
    height: 100%;
}

.network-canvas:active {
    cursor: grabbing;
}

/* View Toggle Styles */
.view-toggle button {
    transition: all 0.3s ease;
}

.view-toggle button.active {
    background-color: var(--color-gold);
    color: var(--color-oxford-blue);
}

/* Journey Breadcrumbs */
.journey-breadcrumbs {
    position: absolute;
    top: 20px;
    left: 20px;
    background: rgba(0, 33, 71, 0.9);
    padding: 12px;
    border-radius: 6px;
    color: #F5F5DC;
    z-index: 1001;
    backdrop-filter: blur(4px);
}

.breadcrumb-item {
    display: inline-block;
    margin-right: 8px;
    font-size: 14px;
}

.breadcrumb-item::after {
    content: '→';
    margin-left: 8px;
    color: #FFD700;
}

.breadcrumb-item:last-child::after {
    content: '';
}

.breadcrumb-link {
    color: #F5F5DC;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.2s ease;
}

.breadcrumb-link:hover {
    color: #FFD700;
    text-decoration: underline;
}

/* Quote Details Panel */
#quoteDetails {
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 215, 0, 0.3);
    animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
    from {
        transform: translateY(20px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

/* Theme Filter Styles */
#themeFilter {
    max-height: 200px;
    overflow-y: auto;
}

.theme-filter-item {
    display: flex;
    align-items: center;
    padding: 4px 8px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.theme-filter-item:hover {
    background-color: rgba(0, 33, 71, 0.1);
}

.theme-filter-item.active {
    background-color: var(--color-oxford-blue);
    color: var(--color-cream);
}

.theme-color-indicator {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 8px;
    border: 1px solid rgba(0, 0, 0, 0.2);
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .network-container {
        height: 400px;
    }
    
    .journey-breadcrumbs {
        top: 10px;
        left: 10px;
        right: 10px;
        padding: 8px;
    }
    
    .breadcrumb-item {
        font-size: 12px;
        margin-right: 4px;
    }
    
    #quoteDetails {
        bottom: 10px;
        left: 10px;
        right: 10px;
        padding: 12px;
    }
    
    .absolute.top-4.right-4 {
        top: 10px;
        right: 10px;
    }
}
```

### Step 4: Create Network Visualization Class

Create `js/quote-network.js`:

```javascript
// js/quote-network.js
class QuoteNetwork {
    constructor(canvasId, quoteData) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.quoteData = quoteData;
        this.nodes = [];
        this.connections = [];
        this.selectedNode = null;
        this.hoveredNode = null;
        this.hoveredConnection = null;
        this.isDragging = false;
        this.dragNode = null;
        this.offset = { x: 0, y: 0 };
        this.scale = 1;
        
        this.initializeNetwork();
        this.setupEventListeners();
        this.render();
    }
    
    initializeNetwork() {
        // Create nodes from quote data
        this.nodes = this.quoteData.quotes.map(quote => ({
            ...quote,
            x: quote.position.x * this.canvas.width,
            y: quote.position.y * this.canvas.height,
            vx: 0,
            vy: 0,
            radius: this.getNodeRadius(quote.visual.type)
        }));
        
        // Create connections
        this.connections = this.quoteData.connections;
        
        // Apply force-directed layout
        this.applyLayout();
    }
    
    getNodeRadius(type) {
        const radii = {
            central: 30,
            gateway: 25,
            terminal: 28,
            standard: 25
        };
        return radii[type] || 25;
    }
    
    setupEventListeners() {
        // Mouse events
        this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        this.canvas.addEventListener('mousedown', (e) => this.handleMouseDown(e));
        this.canvas.addEventListener('mouseup', (e) => this.handleMouseUp(e));
        this.canvas.addEventListener('click', (e) => this.handleClick(e));
        this.canvas.addEventListener('wheel', (e) => this.handleWheel(e));
        
        // Touch events
        this.canvas.addEventListener('touchstart', (e) => this.handleTouchStart(e));
        this.canvas.addEventListener('touchmove', (e) => this.handleTouchMove(e));
        this.canvas.addEventListener('touchend', (e) => this.handleTouchEnd(e));
        
        // Window resize
        window.addEventListener('resize', () => this.handleResize());
    }
    
    handleMouseMove(e) {
        const rect = this.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        if (this.isDragging && this.dragNode) {
            this.dragNode.x = x - this.offset.x;
            this.dragNode.y = y - this.offset.y;
            this.render();
            return;
        }
        
        // Check for node hover
        const previousHoveredNode = this.hoveredNode;
        this.hoveredNode = this.findNodeAtPoint(x, y);
        this.hoveredConnection = this.findConnectionAtPoint(x, y);
        
        if (this.hoveredNode !== previousHoveredNode) {
            this.canvas.style.cursor = this.hoveredNode ? 'pointer' : 
                                   this.hoveredConnection ? 'pointer' : 'grab';
            this.render();
        }
        
        // Show tooltip for hovered node
        if (this.hoveredNode) {
            this.showTooltip(this.hoveredNode, x, y);
        } else {
            this.hideTooltip();
        }
    }
    
    handleClick(e) {
        const rect = this.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Check for connection click
        if (this.hoveredConnection) {
            this.handleConnectionClick(this.hoveredConnection);
            return;
        }
        
        // Check for node click
        if (this.hoveredNode) {
            this.selectNode(this.hoveredNode);
            return;
        }
    }
    
    selectNode(node) {
        this.selectedNode = node;
        this.showQuoteDetails(node);
        this.render();
        
        // Add to journey tracker
        if (window.journeyTracker) {
            window.journeyTracker.navigateTo(node.id);
        }
    }
    
    showQuoteDetails(node) {
        const detailsPanel = document.getElementById('quoteDetails');
        const title = document.getElementById('detailTitle');
        const quote = document.getElementById('detailQuote');
        const context = document.getElementById('detailContext');
        
        title.textContent = node.title;
        quote.textContent = `"${node.quote}"`;
        context.textContent = node.context;
        
        detailsPanel.classList.remove('hidden');
    }
    
    render() {
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Apply transformations
        this.ctx.save();
        this.ctx.translate(this.offset.x, this.offset.y);
        this.ctx.scale(this.scale, this.scale);
        
        // Draw connections
        this.connections.forEach(conn => this.drawConnection(conn));
        
        // Draw nodes
        this.nodes.forEach(node => this.drawNode(node));
        
        // Restore transformations
        this.ctx.restore();
    }
    
    drawNode(node) {
        const isSelected = node === this.selectedNode;
        const isHovered = node === this.hoveredNode;
        const isVisited = window.journeyTracker?.visitedNodes.has(node.id);
        
        // Set node style
        const config = this.getNodeConfig(node.visual.type);
        
        // Draw glow effect
        if (isSelected || isHovered) {
            const gradient = this.ctx.createRadialGradient(
                node.x, node.y, 0,
                node.x, node.y, node.radius * 1.5
            );
            gradient.addColorStop(0, 'rgba(255, 215, 0, 0.3)');
            gradient.addColorStop(1, 'transparent');
            this.ctx.fillStyle = gradient;
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, node.radius * 1.5, 0, Math.PI * 2);
            this.ctx.fill();
        }
        
        // Draw node circle
        this.ctx.fillStyle = isVisited ? '#FFD700' : node.visual.color || '#002147';
        this.ctx.beginPath();
        this.ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Draw border
        this.ctx.strokeStyle = isSelected ? '#FFD700' : config.borderColor;
        this.ctx.lineWidth = isSelected ? 3 : 2;
        this.ctx.stroke();
        
        // Draw selection indicator
        if (isSelected) {
            this.ctx.strokeStyle = '#FFD700';
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([5, 5]);
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, node.radius + 5, 0, Math.PI * 2);
            this.ctx.stroke();
            this.ctx.setLineDash([]);
        }
        
        // Draw icon or title
        this.ctx.fillStyle = '#F5F5DC';
        this.ctx.font = '12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        
        // Truncate title if too long
        const maxChars = 15;
        const displayTitle = node.title.length > maxChars ? 
                           node.title.substring(0, maxChars) + '...' : 
                           node.title;
        
        this.ctx.fillText(displayTitle, node.x, node.y);
    }
    
    drawConnection(conn) {
        const fromNode = this.nodes.find(n => n.id === conn.from);
        const toNode = this.nodes.find(n => n.id === conn.to);
        
        if (!fromNode || !toNode) return;
        
        const isHighlighted = conn === this.hoveredConnection;
        const config = this.getConnectionConfig(conn.type);
        
        this.ctx.strokeStyle = config.color;
        this.ctx.globalAlpha = isHighlighted ? 1.0 : config.opacity;
        this.ctx.lineWidth = isHighlighted ? config.width * 1.5 : config.width;
        
        // Set line style
        switch (config.style) {
            case 'dashed':
                this.ctx.setLineDash([10, 5]);
                break;
            case 'dotted':
                this.ctx.setLineDash([2, 3]);
                break;
            default:
                this.ctx.setLineDash([]);
        }
        
        // Draw connection line
        this.ctx.beginPath();
        this.ctx.moveTo(fromNode.x, fromNode.y);
        
        // Add curve for aesthetic appeal
        const controlX = (fromNode.x + toNode.x) / 2;
        const controlY = (fromNode.y + toNode.y) / 2 - 30;
        this.ctx.quadraticCurveTo(controlX, controlY, toNode.x, toNode.y);
        
        this.ctx.stroke();
        
        // Reset styles
        this.ctx.setLineDash([]);
        this.ctx.globalAlpha = 1.0;
    }
    
    getNodeConfig(type) {
        const configs = {
            central: { borderColor: '#FFD700', glowColor: 'rgba(255, 215, 0, 0.3)' },
            gateway: { borderColor: '#002147', glowColor: 'rgba(0, 33, 71, 0.3)' },
            terminal: { borderColor: '#FFD700', glowColor: 'rgba(255, 215, 0, 0.2)' },
            standard: { borderColor: '#36454F', glowColor: 'transparent' }
        };
        return configs[type] || configs.standard;
    }
    
    getConnectionConfig(type) {
        const configs = {
            expands: { style: 'solid', width: 3, color: '#FFD700', opacity: 0.8 },
            contradicts: { style: 'dashed', width: 2, color: '#dc3545', opacity: 0.7 },
            applies: { style: 'dotted', width: 2, color: '#36454F', opacity: 0.6 },
            contextualizes: { style: 'dashed', width: 2, color: '#002147', opacity: 0.7 },
            questions: { style: 'dotted', width: 2, color: '#FFD700', opacity: 0.6 },
            synthesizes: { style: 'solid', width: 2, color: '#FFD700', opacity: 0.8 }
        };
        return configs[type] || configs.expands;
    }
    
    findNodeAtPoint(x, y) {
        for (const node of this.nodes) {
            const dx = x - node.x;
            const dy = y - node.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance <= node.radius) {
                return node;
            }
        }
        return null;
    }
    
    findConnectionAtPoint(x, y) {
        const threshold = 10;
        
        for (const conn of this.connections) {
            const fromNode = this.nodes.find(n => n.id === conn.from);
            const toNode = this.nodes.find(n => n.id === conn.to);
            
            if (this.isPointNearLine(x, y, fromNode, toNode, threshold)) {
                return conn;
            }
        }
        return null;
    }
    
    isPointNearLine(px, py, fromNode, toNode, threshold) {
        // Calculate distance from point to line segment
        const A = px - fromNode.x;
        const B = py - fromNode.y;
        const C = toNode.x - fromNode.x;
        const D = toNode.y - fromNode.y;
        
        const dot = A * C + B * D;
        const lenSq = C * C + D * D;
        let param = -1;
        
        if (lenSq !== 0) {
            param = dot / lenSq;
        }
        
        let xx, yy;
        
        if (param < 0) {
            xx = fromNode.x;
            yy = fromNode.y;
        } else if (param > 1) {
            xx = toNode.x;
            yy = toNode.y;
        } else {
            xx = fromNode.x + param * C;
            yy = fromNode.y + param * D;
        }
        
        const dx = px - xx;
        const dy = py - yy;
        
        return Math.sqrt(dx * dx + dy * dy) < threshold;
    }
    
    applyLayout() {
        // Simple force-directed layout
        const iterations = 50;
        const alpha = 0.1;
        
        for (let i = 0; i < iterations; i++) {
            this.applyForces(alpha * (1 - i / iterations));
        }
    }
    
    applyForces(alpha) {
        // Apply repulsive forces between all nodes
        for (let i = 0; i < this.nodes.length; i++) {
            for (let j = i + 1; j < this.nodes.length; j++) {
                this.applyRepulsiveForce(this.nodes[i], this.nodes[j], alpha);
            }
        }
        
        // Apply attractive forces for connected nodes
        for (const conn of this.connections) {
            const source = this.nodes.find(n => n.id === conn.from);
            const target = this.nodes.find(n => n.id === conn.to);
            this.applyAttractiveForce(source, target, conn.strength, alpha);
        }
        
        // Update positions
        this.updatePositions(alpha);
    }
    
    applyRepulsiveForce(node1, node2, alpha) {
        const dx = node2.x - node1.x;
        const dy = node2.y - node1.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > 0 && distance < 200) {
            const force = 1000 / (distance * distance);
            const fx = (dx / distance) * force * alpha;
            const fy = (dy / distance) * force * alpha;
            
            node1.vx -= fx;
            node1.vy -= fy;
            node2.vx += fx;
            node2.vy += fy;
        }
    }
    
    applyAttractiveForce(node1, node2, strength, alpha) {
        const dx = node2.x - node1.x;
        const dy = node2.y - node1.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > 0) {
            const force = distance * distance * strength / 10000;
            const fx = (dx / distance) * force * alpha;
            const fy = (dy / distance) * force * alpha;
            
            node1.vx += fx;
            node1.vy += fy;
            node2.vx -= fx;
            node2.vy -= fy;
        }
    }
    
    updatePositions(alpha) {
        for (const node of this.nodes) {
            if (!node.position.fixed) {
                node.vx *= 0.9; // Damping
                node.vy *= 0.9;
                
                node.x += node.vx * alpha;
                node.y += node.vy * alpha;
                
                // Keep within bounds
                node.x = Math.max(50, Math.min(this.canvas.width - 50, node.x));
                node.y = Math.max(50, Math.min(this.canvas.height - 50, node.y));
            }
        }
    }
    
    handleResize() {
        const container = this.canvas.parentElement;
        const rect = container.getBoundingClientRect();
        
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
        
        // Recalculate node positions
        this.nodes.forEach(node => {
            if (!node.position.fixed) {
                node.x = node.position.x * rect.width;
                node.y = node.position.y * rect.height;
            }
        });
        
        this.render();
    }
    
    showTooltip(node, x, y) {
        // Implementation for tooltip display
        // This would show a tooltip with quote preview
    }
    
    hideTooltip() {
        // Hide tooltip implementation
    }
    
    handleConnectionClick(connection) {
        // Navigate to the target quote
        const targetNode = this.nodes.find(n => n.id === connection.to);
        if (targetNode) {
            this.selectNode(targetNode);
        }
    }
}
```

### Step 5: Create Journey Tracker

Create `js/journey-tracker.js`:

```javascript
// js/journey-tracker.js
class JourneyTracker {
    constructor() {
        this.currentPath = [];
        this.visitedNodes = new Set();
        this.journeyHistory = [];
        this.maxJourneyLength = 10;
    }
    
    navigateTo(nodeId) {
        if (this.currentPath.length > 0) {
            const lastNodeId = this.currentPath[this.currentPath.length - 1];
            if (lastNodeId === nodeId) return; // Already at this node
        }
        
        this.currentPath.push(nodeId);
        this.visitedNodes.add(nodeId);
        this.updateBreadcrumbs();
        this.saveJourney();
    }
    
    reset() {
        this.currentPath = [];
        this.visitedNodes.clear();
        this.updateBreadcrumbs();
    }
    
    updateBreadcrumbs() {
        const breadcrumbPath = document.getElementById('breadcrumbPath');
        const breadcrumbsContainer = document.getElementById('journeyBreadcrumbs');
        
        if (this.currentPath.length === 0) {
            breadcrumbsContainer.classList.add('hidden');
            return;
        }
        
        breadcrumbsContainer.classList.remove('hidden');
        
        breadcrumbPath.innerHTML = this.currentPath.map((nodeId, index) => {
            const node = window.quoteNetwork.nodes.find(n => n.id === nodeId);
            if (!node) return '';
            
            const isLast = index === this.currentPath.length - 1;
            const clickable = !isLast ? `onclick="journeyTracker.jumpToNode(${index})"` : '';
            
            return `
                <span class="breadcrumb-item">
                    ${!isLast ? `<a href="#" class="breadcrumb-link" ${clickable}>${node.title}</a>` : node.title}
                </span>
            `;
        }).join('');
    }
    
    jumpToNode(index) {
        if (index >= 0 && index < this.currentPath.length) {
            this.currentPath = this.currentPath.slice(0, index + 1);
            const nodeId = this.currentPath[index];
            
            // Update network visualization
            const node = window.quoteNetwork.nodes.find(n => n.id === nodeId);
            if (node) {
                window.quoteNetwork.selectNode(node);
            }
            
            this.updateBreadcrumbs();
        }
    }
    
    saveJourney() {
        if (this.currentPath.length > 1) {
            this.journeyHistory.push({
                path: [...this.currentPath],
                timestamp: Date.now(),
                themes: this.getExploredThemes()
            });
            
            // Limit history size
            if (this.journeyHistory.length > 50) {
                this.journeyHistory.shift();
            }
        }
    }
    
    getExploredThemes() {
        const themes = new Set();
        for (const nodeId of this.currentPath) {
            const node = window.quoteNetwork.nodes.find(n => n.id === nodeId);
            if (node && node.themes) {
                node.themes.forEach(theme => themes.add(theme));
            }
        }
        return Array.from(themes);
    }
    
    getJourneyInsights() {
        return {
            length: this.currentPath.length,
            themes: this.getExploredThemes(),
            nodesVisited: this.visitedNodes.size,
            completionRate: this.visitedNodes.size / window.quoteNetwork.nodes.length
        };
    }
}

// Initialize journey tracker
window.journeyTracker = new JourneyTracker();
```

### Step 6: Update Main JavaScript

Modify `js/main.js` to integrate the new system:

```javascript
// js/main.js - Modified version

// Import quote data
// Note: In production, this would be loaded from a separate file
// For now, we'll assume quoteData is available globally

class QuoteCarousel {
    constructor() {
        // Keep existing carousel functionality
        this.quotes = window.quoteData ? window.quoteData.quotes : [];
        this.currentIndex = 0;
        this.currentView = 'carousel'; // 'carousel' or 'network'
        this.quoteNetwork = null;
        
        this.init();
    }
    
    init() {
        this.setupQuoteCards();
        this.setupViewToggle();
        this.startAutoRotate();
        this.addEventListeners();
    }
    
    setupViewToggle() {
        const carouselBtn = document.getElementById('carouselView');
        const networkBtn = document.getElementById('networkView');
        const carouselContainer = document.getElementById('carouselContainer');
        const networkContainer = document.getElementById('networkContainer');
        
        if (carouselBtn && networkBtn) {
            carouselBtn.addEventListener('click', () => {
                this.switchToCarouselView();
            });
            
            networkBtn.addEventListener('click', () => {
                this.switchToNetworkView();
            });
        }
    }
    
    switchToCarouselView() {
        this.currentView = 'carousel';
        
        // Update button states
        document.getElementById('carouselView').classList.add('bg-gold', 'text-oxford-blue');
        document.getElementById('carouselView').classList.remove('hover:bg-cream/20');
        document.getElementById('networkView').classList.remove('bg-gold', 'text-oxford-blue');
        document.getElementById('networkView').classList.add('hover:bg-cream/20');
        
        // Show/hide containers
        document.getElementById('carouselContainer').classList.remove('hidden');
        document.getElementById('networkContainer').classList.add('hidden');
        
        // Restart carousel
        this.startAutoRotate();
    }
    
    switchToNetworkView() {
        this.currentView = 'network';
        
        // Update button states
        document.getElementById('networkView').classList.add('bg-gold', 'text-oxford-blue');
        document.getElementById('networkView').classList.remove('hover:bg-cream/20');
        document.getElementById('carouselView').classList.remove('bg-gold', 'text-oxford-blue');
        document.getElementById('carouselView').classList.add('hover:bg-cream/20');
        
        // Show/hide containers
        document.getElementById('carouselContainer').classList.add('hidden');
        document.getElementById('networkContainer').classList.remove('hidden');
        
        // Stop carousel
        this.stopAutoRotate();
        
        // Initialize network if not already done
        if (!this.quoteNetwork && window.quoteData) {
            this.initializeNetwork();
        }
    }
    
    initializeNetwork() {
        // Initialize network visualization
        this.quoteNetwork = new QuoteNetwork('networkCanvas', window.quoteData);
        window.quoteNetwork = this.quoteNetwork;
        
        // Setup theme filter
        this.setupThemeFilter();
        
        // Setup close button for quote details
        const closeBtn = document.getElementById('closeDetails');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                document.getElementById('quoteDetails').classList.add('hidden');
                this.quoteNetwork.selectedNode = null;
                this.quoteNetwork.render();
            });
        }
    }
    
    setupThemeFilter() {
        const themeFilter = document.getElementById('themeFilter');
        if (!themeFilter || !window.quoteData.themes) return;
        
        themeFilter.innerHTML = window.quoteData.themes.map(theme => `
            <div class="theme-filter-item" data-theme="${theme.id}">
                <span class="theme-color-indicator" style="background-color: ${theme.color}"></span>
                <span>${theme.name}</span>
            </div>
        `).join('');
        
        // Add click handlers
        themeFilter.querySelectorAll('.theme-filter-item').forEach(item => {
            item.addEventListener('click', () => {
                const themeId = item.dataset.theme;
                this.toggleThemeFilter(themeId, item);
            });
        });
    }
    
    toggleThemeFilter(themeId, element) {
        element.classList.toggle('active');
        
        // Filter network visualization
        const activeThemes = Array.from(
            document.querySelectorAll('.theme-filter-item.active')
        ).map(item => item.dataset.theme);
        
        if (activeThemes.length === 0) {
            // Show all nodes
            this.quoteNetwork.nodes.forEach(node => {
                node.visible = true;
            });
        } else {
            // Show only nodes with active themes
            this.quoteNetwork.nodes.forEach(node => {
                node.visible = node.themes.some(theme => activeThemes.includes(theme));
            });
        }
        
        this.quoteNetwork.render();
    }
    
    // Keep existing carousel methods
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
        if (this.autoRotateInterval) {
            clearInterval(this.autoRotateInterval);
        }
        
        this.autoRotateInterval = setInterval(() => {
            if (this.currentView === 'carousel') {
                this.rotateQuotes();
            }
        }, 8000);
    }
    
    stopAutoRotate() {
        if (this.autoRotateInterval) {
            clearInterval(this.autoRotateInterval);
            this.autoRotateInterval = null;
        }
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
        
        // Keep existing insight card interactions for carousel view
        const insightCards = document.querySelectorAll('.insight-card');
        insightCards.forEach(card => {
            card.addEventListener('click', function() {
                if (document.getElementById('carouselContainer').classList.contains('hidden')) {
                    return; // Don't toggle in network view
                }
                this.classList.toggle('active');
            });
        });
    }
    
    setupMobileMenu() {
        // Placeholder for future mobile menu implementation
    }
    
    setupNewsletterForm() {
        // Keep existing newsletter form functionality
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

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load quote data first
    loadQuoteData().then(() => {
        // Initialize the carousel/network system
        const carousel = new QuoteCarousel();
        
        // Initialize newsletter form
        carousel.setupNewsletterForm();
    }).catch(error => {
        console.error('Failed to load quote data:', error);
        // Fallback to existing carousel functionality
        const carousel = new QuoteCarousel();
        carousel.setupNewsletterForm();
    });
});

// Function to load quote data
async function loadQuoteData() {
    try {
        // In production, this would load from an external file
        // For now, we'll use the data from quote_data_sample.md
        if (typeof quoteData !== 'undefined') {
            window.quoteData = quoteData;
            return Promise.resolve();
        }
        
        // Try to load from external file
        const response = await fetch('js/quote_data.js');
        const text = await response.text();
        
        // Execute the JavaScript file to get the data
        eval(text);
        
        if (typeof quoteData !== 'undefined') {
            window.quoteData = quoteData;
            return Promise.resolve();
        }
        
        throw new Error('Quote data not found');
    } catch (error) {
        console.warn('Could not load quote data, using fallback:', error);
        return Promise.reject(error);
    }
}
```

### Step 7: Final Integration Steps

1. **Create the quote data file**:
   - Copy the JavaScript code from `quote_data_sample.md`
   - Save as `js/quote_data.js`
   - Ensure proper formatting and syntax

2. **Update HTML structure**:
   - Replace the existing insights section with the new structure
   - Ensure all IDs match the JavaScript references

3. **Add CSS styles**:
   - Add the network-specific styles to `css/styles.css`
   - Ensure responsive design works properly

4. **Test the implementation**:
   - Test carousel view functionality
   - Test network view functionality
   - Test view switching
   - Test mobile responsiveness

5. **Add accessibility features**:
   - Add ARIA labels for network elements
   - Ensure keyboard navigation works
   - Add screen reader support

6. **Performance optimization**:
   - Implement lazy loading for quote data
   - Add canvas rendering optimizations
   - Minimize JavaScript execution

## Testing Checklist

- [ ] Carousel view displays quotes correctly
- [ ] Network view renders nodes and connections
- [ ] View switching works smoothly
- [ ] Node selection shows quote details
- [ ] Connection clicking navigates to related quotes
- [ ] Journey tracking displays breadcrumbs
- [ ] Theme filtering works correctly
- [ ] Mobile responsive design functions
- [ ] Keyboard navigation is supported
- [ ] Accessibility features are implemented
- [ ] Performance is acceptable on all devices

## Future Enhancements

After the initial implementation, consider adding:

1. **Advanced Visualizations**:
   - 3D network visualization
   - Animated connection flows
   - Interactive timeline view

2. **Enhanced Navigation**:
   - Voice-guided journeys
   - AI-powered recommendations
   - Collaborative exploration features

3. **Analytics Integration**:
   - User journey tracking
   - Popular path highlighting
   - Engagement metrics

4. **Content Management**:
   - Admin interface for adding quotes
   - Dynamic relationship management
   - Import/export functionality

This implementation provides a solid foundation for the Contextual Quote Journey system while maintaining compatibility with the existing Miller Analysis codebase and preserving the Oxford academic aesthetic.