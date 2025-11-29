# Visual Representation and Connection Implementation

## Overview

This document provides detailed guidance for implementing the visual representation of the Contextual Quote Journey network, including node visualization, connection rendering, and interactive elements that create an immersive "Labyrinth of Interpretation" experience.

## Visual Design Principles

### 1. Oxford Academic Aesthetic Alignment

The visual design must maintain the established Oxford academic aesthetic:

- **Color Palette**: 
  - Oxford Blue (#002147) - Primary academic color
  - Cream (#F5F5DC) - Background and text
  - Charcoal (#36454F) - Secondary text and elements
  - Gold (#FFD700) - Accent and highlighting

- **Typography**: 
  - Serif fonts for quote text (Times New Roman)
  - Sans-serif for UI elements (Arial)

- **Visual Style**:
  - Subtle textures and gradients
  - Professional, scholarly appearance
  - Clean, uncluttered interface

### 2. Network Visualization Requirements

The visual implementation must support:

- **Interactive nodes** representing quotes
- **Clickable connections** for navigation
- **Smooth animations** for transitions
- **Responsive design** for various screen sizes
- **Accessibility** compliance

## Node Visualization Implementation

### 1. Node Types and Visual Properties

```javascript
// Node visual configuration
const nodeVisualConfig = {
  central: {
    size: 1.2,
    border: { width: 3, color: '#FFD700' },
    glow: { enabled: true, color: 'rgba(255, 215, 0, 0.3)' },
    icon: { size: 24, position: 'center' }
  },
  gateway: {
    size: 0.9,
    border: { width: 2, color: '#002147' },
    glow: { enabled: false },
    icon: { size: 20, position: 'center' }
  },
  terminal: {
    size: 1.0,
    border: { width: 2, color: '#FFD700' },
    glow: { enabled: true, color: 'rgba(255, 215, 0, 0.2)' },
    icon: { size: 22, position: 'center' }
  },
  standard: {
    size: 1.0,
    border: { width: 2, color: '#36454F' },
    glow: { enabled: false },
    icon: { size: 20, position: 'center' }
  }
};

// Node rendering function
function renderNode(ctx, quote, x, y, isHovered = false, isSelected = false) {
  const config = nodeVisualConfig[quote.visual.type];
  const radius = baseNodeSize * config.size * (isHovered ? 1.1 : 1.0);
  
  // Draw glow effect if enabled
  if (config.glow.enabled && (isHovered || isSelected)) {
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius * 1.5);
    gradient.addColorStop(0, config.glow.color);
    gradient.addColorStop(1, 'transparent');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, radius * 1.5, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // Draw main node circle
  ctx.fillStyle = quote.visual.color || '#002147';
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
  
  // Draw border
  ctx.strokeStyle = config.border.color;
  ctx.lineWidth = config.border.width;
  ctx.stroke();
  
  // Draw icon if available
  if (quote.visual.icon) {
    drawIcon(ctx, quote.visual.icon, x, y, config.icon.size);
  }
  
  // Draw selection indicator
  if (isSelected) {
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 3;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.arc(x, y, radius + 5, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
  }
}
```

### 2. Node States and Interactions

```javascript
// Node interaction states
const NodeState = {
  DEFAULT: 'default',
  HOVERED: 'hovered',
  SELECTED: 'selected',
  VISITED: 'visited',
  RECOMMENDED: 'recommended'
};

// Node state management
class NodeStateManager {
  constructor() {
    this.nodeStates = new Map();
    this.hoveredNode = null;
    this.selectedNode = null;
    this.visitedNodes = new Set();
  }
  
  setNodeState(nodeId, state) {
    this.nodeStates.set(nodeId, state);
    this.updateVisualization(nodeId);
  }
  
  setHoveredNode(nodeId) {
    if (this.hoveredNode) {
      this.setNodeState(this.hoveredNode, NodeState.DEFAULT);
    }
    this.hoveredNode = nodeId;
    if (nodeId) {
      this.setNodeState(nodeId, NodeState.HOVERED);
    }
  }
  
  setSelectedNode(nodeId) {
    if (this.selectedNode) {
      this.setNodeState(this.selectedNode, NodeState.DEFAULT);
    }
    this.selectedNode = nodeId;
    if (nodeId) {
      this.setNodeState(nodeId, NodeState.SELECTED);
      this.visitedNodes.add(nodeId);
    }
  }
  
  getNodeVisualClass(nodeId) {
    const state = this.nodeStates.get(nodeId) || NodeState.DEFAULT;
    const isVisited = this.visitedNodes.has(nodeId);
    
    return [
      'quote-node',
      `quote-node--${state}`,
      isVisited ? 'quote-node--visited' : ''
    ].filter(Boolean).join(' ');
  }
}
```

## Connection Visualization

### 1. Connection Types and Styles

```javascript
// Connection visual configuration
const connectionVisualConfig = {
  expands: {
    style: 'solid',
    width: 3,
    color: '#FFD700',
    opacity: 0.8,
    animation: 'pulse'
  },
  contradicts: {
    style: 'dashed',
    width: 2,
    color: '#dc3545',
    opacity: 0.7,
    animation: 'none'
  },
  applies: {
    style: 'dotted',
    width: 2,
    color: '#36454F',
    opacity: 0.6,
    animation: 'none'
  },
  contextualizes: {
    style: 'dashed',
    width: 2,
    color: '#002147',
    opacity: 0.7,
    animation: 'none'
  },
  questions: {
    style: 'dotted',
    width: 2,
    color: '#FFD700',
    opacity: 0.6,
    animation: 'pulse'
  },
  synthesizes: {
    style: 'solid',
    width: 2,
    color: '#FFD700',
    opacity: 0.8,
    animation: 'glow'
  }
};

// Connection rendering function
function renderConnection(ctx, connection, fromNode, toNode, isHighlighted = false) {
  const config = connectionVisualConfig[connection.type];
  const opacity = isHighlighted ? 1.0 : config.opacity;
  
  ctx.strokeStyle = config.color;
  ctx.globalAlpha = opacity;
  ctx.lineWidth = config.width * (isHighlighted ? 1.5 : 1.0);
  
  // Set line style
  switch (config.style) {
    case 'dashed':
      ctx.setLineDash([10, 5]);
      break;
    case 'dotted':
      ctx.setLineDash([2, 3]);
      break;
    default:
      ctx.setLineDash([]);
  }
  
  // Draw connection line
  ctx.beginPath();
  ctx.moveTo(fromNode.x, fromNode.y);
  
  // Add curve for aesthetic appeal
  const controlX = (fromNode.x + toNode.x) / 2;
  const controlY = (fromNode.y + toNode.y) / 2 - 50;
  ctx.quadraticCurveTo(controlX, controlY, toNode.x, toNode.y);
  
  ctx.stroke();
  
  // Draw arrow for directional indication
  if (connection.bidirectional === false) {
    drawArrow(ctx, fromNode, toNode, config.color);
  }
  
  // Reset line dash
  ctx.setLineDash([]);
  ctx.globalAlpha = 1.0;
}
```

### 2. Interactive Connection Elements

```javascript
// Connection hit detection
class ConnectionInteraction {
  constructor(canvas, connections) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.connections = connections;
    this.hoveredConnection = null;
    this.setupEventListeners();
  }
  
  setupEventListeners() {
    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const hoveredConnection = this.findConnectionAtPoint(x, y);
      if (hoveredConnection !== this.hoveredConnection) {
        this.hoveredConnection = hoveredConnection;
        this.updateCursor();
        this.render();
      }
    });
    
    this.canvas.addEventListener('click', (e) => {
      if (this.hoveredConnection) {
        this.handleConnectionClick(this.hoveredConnection);
      }
    });
  }
  
  findConnectionAtPoint(x, y) {
    const threshold = 10; // Pixels from line
    
    for (const connection of this.connections) {
      const fromNode = getNodeById(connection.from);
      const toNode = getNodeById(connection.to);
      
      if (this.isPointNearLine(x, y, fromNode, toNode, threshold)) {
        return connection;
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
  
  handleConnectionClick(connection) {
    // Navigate along the connection
    const targetNodeId = connection.to;
    navigateToQuote(targetNodeId, connection);
    
    // Add to journey history
    journeyTracker.navigateTo(targetNodeId);
    
    // Update visualization
    this.updateVisualization();
  }
  
  updateCursor() {
    this.canvas.style.cursor = this.hoveredConnection ? 'pointer' : 'default';
  }
}
```

## Layout and Animation

### 1. Force-Directed Layout

```javascript
// Force simulation for network layout
class NetworkLayout {
  constructor(nodes, connections, canvas) {
    this.nodes = nodes;
    this.connections = connections;
    this.canvas = canvas;
    this.simulation = null;
    this.initializeLayout();
  }
  
  initializeLayout() {
    // Set initial positions from data
    this.nodes.forEach(node => {
      node.x = node.position.x * this.canvas.width;
      node.y = node.position.y * this.canvas.height;
      node.vx = 0;
      node.vy = 0;
    });
    
    // Start simulation
    this.startSimulation();
  }
  
  startSimulation() {
    const alpha = 0.1; // Cooling factor
    const iterations = 100;
    
    for (let i = 0; i < iterations; i++) {
      this.applyForces(alpha * (1 - i / iterations));
    }
    
    this.render();
  }
  
  applyForces(alpha) {
    // Apply repulsive forces between all nodes
    for (let i = 0; i < this.nodes.length; i++) {
      for (let j = i + 1; j < this.nodes.length; j++) {
        this.applyRepulsiveForce(this.nodes[i], this.nodes[j], alpha);
      }
    }
    
    // Apply attractive forces for connected nodes
    for (const connection of this.connections) {
      const source = this.nodes.find(n => n.id === connection.from);
      const target = this.nodes.find(n => n.id === connection.to);
      this.applyAttractiveForce(source, target, connection.strength, alpha);
    }
    
    // Apply centering force
    this.applyCenteringForce(alpha);
    
    // Update positions
    this.updatePositions(alpha);
  }
  
  applyRepulsiveForce(node1, node2, alpha) {
    const dx = node2.x - node1.x;
    const dy = node2.y - node1.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance > 0) {
      const force = 5000 / (distance * distance);
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
      const force = distance * distance * strength / 1000;
      const fx = (dx / distance) * force * alpha;
      const fy = (dy / distance) * force * alpha;
      
      node1.vx += fx;
      node1.vy += fy;
      node2.vx -= fx;
      node2.vy -= fy;
    }
  }
  
  applyCenteringForce(alpha) {
    const centerX = this.canvas.width / 2;
    const centerY = this.canvas.height / 2;
    
    for (const node of this.nodes) {
      if (!node.position.fixed) {
        const fx = (centerX - node.x) * 0.01 * alpha;
        const fy = (centerY - node.y) * 0.01 * alpha;
        
        node.vx += fx;
        node.vy += fy;
      }
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
}
```

### 2. Smooth Animations

```javascript
// Animation system for transitions
class NetworkAnimator {
  constructor() {
    this.animations = new Map();
    this.isRunning = false;
  }
  
  animateNodeToPosition(nodeId, targetX, targetY, duration = 500) {
    const node = getNodeById(nodeId);
    const startX = node.x;
    const startY = node.y;
    const startTime = Date.now();
    
    const animation = {
      nodeId,
      startX,
      startY,
      targetX,
      targetY,
      startTime,
      duration,
      type: 'position'
    };
    
    this.animations.set(nodeId, animation);
    this.startAnimationLoop();
  }
  
  animateConnectionHighlight(connectionId, highlight = true, duration = 300) {
    const animation = {
      connectionId,
      highlight,
      startTime: Date.now(),
      duration,
      type: 'highlight'
    };
    
    this.animations.set(`conn_${connectionId}`, animation);
    this.startAnimationLoop();
  }
  
  startAnimationLoop() {
    if (this.isRunning) return;
    
    this.isRunning = true;
    this.animationLoop();
  }
  
  animationLoop() {
    const currentTime = Date.now();
    let hasActiveAnimations = false;
    
    for (const [key, animation] of this.animations) {
      const elapsed = currentTime - animation.startTime;
      const progress = Math.min(elapsed / animation.duration, 1);
      const easedProgress = this.easeInOutCubic(progress);
      
      if (animation.type === 'position') {
        const node = getNodeById(animation.nodeId);
        node.x = animation.startX + (animation.targetX - animation.startX) * easedProgress;
        node.y = animation.startY + (animation.targetY - animation.startY) * easedProgress;
      } else if (animation.type === 'highlight') {
        updateConnectionHighlight(animation.connectionId, animation.highlight, easedProgress);
      }
      
      if (progress < 1) {
        hasActiveAnimations = true;
      } else {
        this.animations.delete(key);
      }
    }
    
    this.render();
    
    if (hasActiveAnimations) {
      requestAnimationFrame(() => this.animationLoop());
    } else {
      this.isRunning = false;
    }
  }
  
  easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }
}
```

## Responsive Design

### 1. Viewport Adaptation

```javascript
// Responsive network visualization
class ResponsiveNetwork {
  constructor(container) {
    this.container = container;
    this.canvas = null;
    this.setupCanvas();
    this.setupResizeHandler();
  }
  
  setupCanvas() {
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'network-canvas';
    this.container.appendChild(this.canvas);
    this.resizeCanvas();
  }
  
  setupResizeHandler() {
    window.addEventListener('resize', () => {
      this.resizeCanvas();
      this.render();
    });
  }
  
  resizeCanvas() {
    const rect = this.container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.canvas.style.width = `${rect.width}px`;
    this.canvas.style.height = `${rect.height}px`;
    
    const ctx = this.canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    
    this.updateLayout();
  }
  
  updateLayout() {
    // Recalculate node positions for new viewport
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    
    this.nodes.forEach(node => {
      if (!node.position.fixed) {
        node.x = (node.position.x / 100) * width;
        node.y = (node.position.y / 100) * height;
      }
    });
  }
}
```

### 2. Touch Support

```javascript
// Touch interaction for mobile devices
class TouchInteraction {
  constructor(canvas) {
    this.canvas = canvas;
    this.touches = new Map();
    this.setupTouchListeners();
  }
  
  setupTouchListeners() {
    this.canvas.addEventListener('touchstart', (e) => this.handleTouchStart(e));
    this.canvas.addEventListener('touchmove', (e) => this.handleTouchMove(e));
    this.canvas.addEventListener('touchend', (e) => this.handleTouchEnd(e));
  }
  
  handleTouchStart(e) {
    e.preventDefault();
    
    for (let i = 0; i < e.touches.length; i++) {
      const touch = e.touches[i];
      const rect = this.canvas.getBoundingClientRect();
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;
      
      this.touches.set(touch.identifier, { x, y, startTime: Date.now() });
    }
  }
  
  handleTouchMove(e) {
    e.preventDefault();
    
    for (let i = 0; i < e.touches.length; i++) {
      const touch = e.touches[i];
      const touchData = this.touches.get(touch.identifier);
      
      if (touchData) {
        const rect = this.canvas.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        
        // Handle pinch-to-zoom or pan
        if (this.touches.size === 2) {
          this.handlePinchZoom();
        } else {
          this.handlePan(touchData.x, touchData.y, x, y);
        }
        
        touchData.x = x;
        touchData.y = y;
      }
    }
  }
  
  handleTouchEnd(e) {
    e.preventDefault();
    
    for (let i = 0; i < e.changedTouches.length; i++) {
      const touch = e.changedTouches[i];
      const touchData = this.touches.get(touch.identifier);
      
      if (touchData) {
        const touchDuration = Date.now() - touchData.startTime;
        
        if (touchDuration < 200) {
          // Treat as tap
          this.handleTap(touchData.x, touchData.y);
        }
        
        this.touches.delete(touch.identifier);
      }
    }
  }
  
  handleTap(x, y) {
    const node = this.findNodeAtPoint(x, y);
    if (node) {
      this.selectNode(node.id);
    }
  }
}
```

## CSS Integration

```css
/* Network visualization styles */
.network-container {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #F5F5DC 0%, #E8E8D0 100%);
  border-radius: 8px;
  overflow: hidden;
}

.network-canvas {
  display: block;
  cursor: grab;
}

.network-canvas:active {
  cursor: grabbing;
}

/* Node tooltip styles */
.node-tooltip {
  position: absolute;
  background: rgba(0, 33, 71, 0.95);
  color: #F5F5DC;
  padding: 12px;
  border-radius: 6px;
  font-size: 14px;
  pointer-events: none;
  z-index: 1000;
  max-width: 300px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.node-tooltip__title {
  font-weight: bold;
  margin-bottom: 8px;
  color: #FFD700;
}

.node-tooltip__quote {
  font-style: italic;
  margin-bottom: 8px;
  line-height: 1.4;
}

.node-tooltip__meta {
  font-size: 12px;
  opacity: 0.8;
}

/* Connection label styles */
.connection-label {
  position: absolute;
  background: rgba(255, 215, 0, 0.9);
  color: #002147;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  pointer-events: none;
  z-index: 999;
  white-space: nowrap;
}

/* Journey breadcrumb styles */
.journey-breadcrumbs {
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(0, 33, 71, 0.9);
  padding: 12px;
  border-radius: 6px;
  color: #F5F5DC;
  z-index: 1001;
}

.breadcrumb-item {
  display: inline-block;
  margin-right: 8px;
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
}

.breadcrumb-link:hover {
  color: #FFD700;
  text-decoration: underline;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .network-container {
    border-radius: 0;
  }
  
  .node-tooltip {
    max-width: 200px;
    font-size: 12px;
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
}
```

This visual implementation creates an engaging, interactive network that maintains the Oxford academic aesthetic while providing an immersive "Labyrinth of Interpretation" experience. The system supports smooth animations, responsive design, and intuitive navigation through Miller's interconnected ideas.