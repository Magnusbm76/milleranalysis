/**
 * QuoteNetwork - Canvas-based Network Visualization for Contextual Quote Journey
 * 
 * This class implements an interactive force-directed graph visualization
 * for navigating the interconnected quotes in Miller's work.
 * 
 * Features:
 * - Force-directed layout algorithm
 * - Interactive nodes and connections
 * - Mouse and touch interaction handling
 * - Integration with QuoteJourneyState
 * - Responsive canvas sizing
 * - Smooth animations
 */

class QuoteNetwork {
  /**
   * Constructor for QuoteNetwork
   * @param {HTMLCanvasElement|string} canvas - Canvas element or selector
   * @param {Object} quoteData - Quote data structure
   * @param {QuoteJourneyState} journeyState - QuoteJourneyState instance
   */
  constructor(canvas, quoteData, journeyState) {
    // Validate inputs
    if (!canvas || !quoteData || !journeyState) {
      throw new Error('QuoteNetwork requires canvas, quoteData, and journeyState parameters');
    }
    
    // Store references
    this.quoteData = quoteData;
    this.journeyState = journeyState;
    
    // Get or create canvas element
    if (typeof canvas === 'string') {
      this.canvas = document.querySelector(canvas);
      if (!this.canvas) {
        throw new Error(`Canvas element not found: ${canvas}`);
      }
    } else {
      this.canvas = canvas;
    }
    
    // Get canvas context
    this.ctx = this.canvas.getContext('2d');
    
    // Network state
    this.nodes = [];
    this.connections = [];
    this.selectedNode = null;
    this.hoveredNode = null;
    this.hoveredConnection = null;
    this.isDragging = false;
    this.draggedNode = null;
    
    // Animation state
    this.isAnimating = false;
    this.animationFrame = null;
    this.simulationAlpha = 0.1;
    this.simulationRunning = false;
    
    // Visual configuration
    this.config = {
      // Node sizes based on type
      nodeSizes: {
        central: 30,
        gateway: 25,
        terminal: 28,
        standard: 20
      },
      
      // Connection styles based on type
      connectionStyles: {
        expands: {
          color: '#FFD700',
          width: 3,
          style: 'solid',
          opacity: 0.8
        },
        contradicts: {
          color: '#dc3545',
          width: 2,
          style: 'dashed',
          opacity: 0.7
        },
        applies: {
          color: '#36454F',
          width: 2,
          style: 'dotted',
          opacity: 0.6
        },
        contextualizes: {
          color: '#002147',
          width: 2,
          style: 'dashed',
          opacity: 0.7
        },
        questions: {
          color: '#FFD700',
          width: 2,
          style: 'dotted',
          opacity: 0.6
        },
        synthesizes: {
          color: '#FFD700',
          width: 2,
          style: 'solid',
          opacity: 0.8
        }
      },
      
      // Physics simulation parameters
      physics: {
        repulsionForce: 5000,
        attractionForce: 0.001,
        centeringForce: 0.01,
        damping: 0.9,
        minVelocity: 0.01,
        maxVelocity: 5
      },
      
      // Visual settings
      colors: {
        background: '#F5F5DC',
        nodeBorder: '#002147',
        selectedBorder: '#FFD700',
        hoverGlow: 'rgba(255, 215, 0, 0.3)',
        text: '#002147'
      },
      
      // Interaction settings
      interaction: {
        hoverThreshold: 5,
        dragThreshold: 3,
        tooltipDelay: 500
      }
    };
    
    // Performance optimization
    this.needsRedraw = true;
    this.lastRenderTime = 0;
    this.renderThrottle = 16; // ~60fps
    
    // Initialize tooltip
    this.tooltip = null;
    this.tooltipTimeout = null;
    
    // Initialize the network
    this.initialize();
  }
  
  /**
   * Initialize the network visualization
   */
  initialize() {
    // Set up canvas and event listeners
    this.setupCanvas();
    this.setupEventListeners();
    
    // Build network data structures
    this.buildNetwork();
    
    // Subscribe to journey state changes
    this.subscribeToJourneyState();
    
    // Check if canvas is visible and has valid dimensions
    const isVisible = this.canvas.offsetWidth > 0 && this.canvas.offsetHeight > 0;
    
    if (isVisible) {
      // Start animation immediately if canvas is visible
      this.startAnimation();
      console.log('QuoteNetwork initialized with', this.nodes.length, 'nodes and', this.connections.length, 'connections');
      console.log('Canvas dimensions:', this.config.width, 'x', this.config.height);
    } else {
      // Defer animation start until canvas becomes visible
      console.log('QuoteNetwork initialized but canvas not visible, deferring animation start');
      console.log('Canvas dimensions will be set when view becomes active');
      
      // Set up a one-time event listener to detect when network view becomes visible
      const checkVisibility = () => {
        if (this.canvas.offsetWidth > 0 && this.canvas.offsetHeight > 0) {
          // Canvas is now visible, resize and start animation
          this.resizeCanvas();
          this.startAnimation();
          console.log('QuoteNetwork animation started after view became visible');
          console.log('Canvas dimensions:', this.config.width, 'x', this.config.height);
          
          // Remove the event listener
          document.removeEventListener('viewChanged', checkVisibility);
        }
      };
      
      // Listen for custom view change event
      document.addEventListener('viewChanged', checkVisibility);
      
      // Also check periodically as fallback
      const visibilityCheck = setInterval(() => {
        if (this.canvas.offsetWidth > 0 && this.canvas.offsetHeight > 0) {
          clearInterval(visibilityCheck);
          checkVisibility();
        }
      }, 500);
    }
  }
  
  /**
   * Set up canvas and responsive sizing
   */
  setupCanvas() {
    // Set initial canvas size
    this.resizeCanvas();
    
    // Handle window resize
    window.addEventListener('resize', () => {
      this.resizeCanvas();
      this.render();
    });
  }
  
  /**
   * Resize canvas to match container
   */
  resizeCanvas() {
    const container = this.canvas.parentElement;
    if (!container) return;
    
    // Make sure container is visible and has dimensions
    if (container.offsetWidth === 0 || container.offsetHeight === 0) {
      // Container might be hidden, try to show it briefly
      const originalDisplay = container.style.display;
      const originalVisibility = container.style.visibility;
      const originalOpacity = container.style.opacity;
      
      // Make container visible but keep it hidden from user
      container.style.display = 'block';
      container.style.visibility = 'hidden';
      container.style.opacity = '0';
      container.style.position = 'absolute'; // Take it out of flow to get proper dimensions
      container.style.left = '-9999px'; // Move off screen
      
      setTimeout(() => {
        this.performResize(container);
        // Restore original positioning and display
        container.style.position = '';
        container.style.left = '';
        if (originalDisplay !== undefined) {
          container.style.display = originalDisplay;
        }
        if (originalVisibility !== undefined) {
          container.style.visibility = originalVisibility;
        }
        if (originalOpacity !== undefined) {
          container.style.opacity = originalOpacity;
        }
        // Trigger a render after restoring
        this.needsRedraw = true;
        this.render();
      }, 100);
    } else {
      this.performResize(container);
    }
  }
  
  /**
   * Perform the actual canvas resize
   */
  performResize(container) {
    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    
    // Set canvas size
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    
    // Set CSS size
    this.canvas.style.width = `${rect.width}px`;
    this.canvas.style.height = `${rect.height}px`;
    
    // Scale context for high DPI displays
    this.ctx.scale(dpr, dpr);
    
    // Update canvas dimensions in config
    this.config.width = rect.width;
    this.config.height = rect.height;
    
    // Mark for redraw
    this.needsRedraw = true;
    
    console.log('Canvas resized to:', rect.width, 'x', rect.height);
  }
  
  /**
   * Set up event listeners for interaction
   */
  setupEventListeners() {
    // Mouse events
    this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    this.canvas.addEventListener('mousedown', (e) => this.handleMouseDown(e));
    this.canvas.addEventListener('mouseup', (e) => this.handleMouseUp(e));
    this.canvas.addEventListener('click', (e) => this.handleClick(e));
    this.canvas.addEventListener('mouseleave', (e) => this.handleMouseLeave(e));
    
    // Touch events
    this.canvas.addEventListener('touchstart', (e) => this.handleTouchStart(e));
    this.canvas.addEventListener('touchmove', (e) => this.handleTouchMove(e));
    this.canvas.addEventListener('touchend', (e) => this.handleTouchEnd(e));
    
    // Prevent context menu on canvas
    this.canvas.addEventListener('contextmenu', (e) => e.preventDefault());
  }
  
  /**
   * Build network data structures from quote data
   */
  buildNetwork() {
    // Ensure config has width and height before building network
    if (!this.config.width || !this.config.height) {
      const container = this.canvas.parentElement;
      if (container) {
        this.config.width = container.offsetWidth || 800;
        this.config.height = container.offsetHeight || 600;
      } else {
        this.config.width = 800;
        this.config.height = 600;
      }
    }
    
    console.log('Building network with dimensions:', this.config.width, 'x', this.config.height);
    
    // Create nodes from quotes
    this.nodes = this.quoteData.quotes.map(quote => {
      // Calculate initial position
      let x, y;
      if (quote.position?.x !== undefined && quote.position?.y !== undefined) {
        // Use provided position as percentage of canvas dimensions
        x = quote.position.x * this.config.width;
        y = quote.position.y * this.config.height;
      } else {
        // Random position within canvas bounds
        x = Math.random() * (this.config.width - 100) + 50;
        y = Math.random() * (this.config.height - 100) + 50;
      }
      
      // Handle node type - map 'node' type to 'standard' for sizing
      const nodeType = quote.visual?.type || 'standard';
      const normalizedType = nodeType === 'node' ? 'standard' : nodeType;
      
      return {
        id: quote.id,
        quote: quote,
        x: x,
        y: y,
        vx: 0,
        vy: 0,
        fx: quote.position?.fixed ? x : null,

        fy: quote.position?.fixed ? y : null,
        radius: this.config.nodeSizes[normalizedType] || this.config.nodeSizes.standard,
        color: quote.visual?.color || this.config.colors.nodeBorder,
        type: normalizedType,
        isFixed: quote.position?.fixed || false
      };
    });
    
    // Create connections - use both quote relationships and standalone connections
    this.connections = [];
    
    // First, add connections from quote relationships
    this.quoteData.quotes.forEach(quote => {
      if (quote.relatedQuotes) {
        quote.relatedQuotes.forEach(related => {
          // Check if connection already exists
          const exists = this.connections.some(conn =>
            (conn.from === quote.id && conn.to === related.id) ||
            (conn.from === related.id && conn.to === quote.id)
          );
          
          if (!exists) {
            // Validate connection type exists in config
            const connectionType = related.relationship || 'expands';
            const visualStyle = related.visual || this.config.connectionStyles[connectionType] || this.config.connectionStyles.expands;
            
            this.connections.push({
              from: quote.id,
              to: related.id,
              type: connectionType,
              strength: related.strength || 0.5,
              label: related.label || '',
              bidirectional: true,
              visual: visualStyle
            });
          }
        });
      }
    });
    
    // Then, add any standalone connections from data structure
    if (this.quoteData.connections && Array.isArray(this.quoteData.connections)) {
      this.quoteData.connections.forEach(conn => {
        // Check if connection already exists
        const exists = this.connections.some(existingConn =>
          (existingConn.from === conn.from && existingConn.to === conn.to) ||
          (existingConn.from === conn.to && existingConn.to === conn.from)
        );
        
        if (!exists) {
          // Validate connection type exists in config
          const connectionType = conn.type || 'expands';
          const visualStyle = conn.visual || this.config.connectionStyles[connectionType] || this.config.connectionStyles.expands;
          
          this.connections.push({
            from: conn.from,
            to: conn.to,
            type: connectionType,
            strength: conn.strength || 0.5,
            label: conn.label || '',
            bidirectional: conn.bidirectional !== undefined ? conn.bidirectional : true,
            visual: visualStyle
          });
        }
      });
    }
    
    console.log('Created', this.nodes.length, 'nodes and', this.connections.length, 'connections');
    
    // Create lookup maps for performance
    this.nodeMap = new Map(this.nodes.map(node => [node.id, node]));
    this.connectionMap = new Map();
    
    this.connections.forEach(conn => {
      if (!this.connectionMap.has(conn.from)) {
        this.connectionMap.set(conn.from, []);
      }
      this.connectionMap.get(conn.from).push(conn);
    });
  }
  
  /**
   * Subscribe to journey state changes
   */
  subscribeToJourneyState() {
    // Subscribe to quote selection changes
    this.journeyState.subscribe((eventType, data, state) => {
      switch (eventType) {
        case 'currentQuoteChanged':
          this.selectNode(data.currentQuoteId);
          break;
        case 'journeyUpdated':
          this.highlightJourneyPath(state.journeyHistory);
          break;
        case 'filterCriteriaChanged':
          this.applyFilters(data.criteria);
          break;
      }
    });
    
    // Also subscribe to JourneyTracker events if available
    if (typeof window !== 'undefined' && window.journeyTracker) {
      window.journeyTracker.addEventListener('journeyEntryAdded', (data) => {
        this.highlightJourneyPath(data.history);
      });
      
      window.journeyTracker.addEventListener('journeyNavigatedBack', (data) => {
        this.highlightJourneyPath(window.journeyTracker.getJourneyHistory());
      });
      
      window.journeyTracker.addEventListener('journeyNavigatedForward', (data) => {
        this.highlightJourneyPath(window.journeyTracker.getJourneyHistory());
      });
      
      window.journeyTracker.addEventListener('journeyReset', () => {
        this.highlightJourneyPath([]);
      });
      
      window.journeyTracker.addEventListener('journeyNavigatedToPosition', () => {
        this.highlightJourneyPath(window.journeyTracker.getJourneyHistory());
      });
    }
  }
  
  /**
   * Start the animation loop
   */
  startAnimation() {
    if (this.isAnimating) return;
    
    this.isAnimating = true;
    this.simulationRunning = true;
    this.animate();
  }
  
  /**
   * Stop the animation loop
   */
  stopAnimation() {
    this.isAnimating = false;
    this.simulationRunning = false;
    
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
  }
  
  /**
   * Main animation loop
   */
  animate() {
    if (!this.isAnimating) return;
    
    const currentTime = performance.now();
    const deltaTime = currentTime - this.lastRenderTime;
    
    // Throttle rendering
    if (deltaTime >= this.renderThrottle) {
      // Update physics simulation
      if (this.simulationRunning) {
        this.updateLayout();
      }
      
      // Render the network
      this.render();
      
      this.lastRenderTime = currentTime;
    }
    
    // Continue animation loop
    this.animationFrame = requestAnimationFrame(() => this.animate());
  }
  
  /**
   * Update force-directed layout
   */
  updateLayout() {
    // Apply repulsive forces between all nodes
    for (let i = 0; i < this.nodes.length; i++) {
      for (let j = i + 1; j < this.nodes.length; j++) {
        this.applyRepulsiveForce(this.nodes[i], this.nodes[j]);
      }
    }
    
    // Apply attractive forces for connected nodes
    for (const connection of this.connections) {
      const source = this.nodeMap.get(connection.from);
      const target = this.nodeMap.get(connection.to);
      
      if (source && target) {
        this.applyAttractiveForce(source, target, connection.strength);
      }
    }
    
    // Apply centering force
    this.applyCenteringForce();
    
    // Update node positions
    this.updateNodePositions();
    
    // Check if simulation should stop
    this.checkSimulationStability();
  }
  
  /**
   * Apply repulsive force between two nodes
   */
  applyRepulsiveForce(node1, node2) {
    if (node1.isFixed && node2.isFixed) return;
    
    const dx = node2.x - node1.x;
    const dy = node2.y - node1.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // Prevent division by zero and apply minimum distance
    const minDistance = node1.radius + node2.radius + 5;
    const effectiveDistance = Math.max(distance, minDistance);
    
    if (effectiveDistance > 0) {
      const force = this.config.physics.repulsionForce / (effectiveDistance * effectiveDistance);
      const fx = (dx / effectiveDistance) * force;
      const fy = (dy / effectiveDistance) * force;
      
      if (!node1.isFixed) {
        node1.vx -= fx;
        node1.vy -= fy;
      }
      
      if (!node2.isFixed) {
        node2.vx += fx;
        node2.vy += fy;
      }
    }
  }
  
  /**
   * Apply attractive force between connected nodes
   */
  applyAttractiveForce(node1, node2, strength) {
    if (node1.isFixed && node2.isFixed) return;
    
    const dx = node2.x - node1.x;
    const dy = node2.y - node1.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance > 0) {
      const force = distance * distance * strength * this.config.physics.attractionForce;
      const fx = (dx / distance) * force;
      const fy = (dy / distance) * force;
      
      if (!node1.isFixed) {
        node1.vx += fx;
        node1.vy += fy;
      }
      
      if (!node2.isFixed) {
        node2.vx -= fx;
        node2.vy -= fy;
      }
    }
  }
  
  /**
   * Apply centering force to keep nodes in view
   */
  applyCenteringForce() {
    const centerX = this.config.width / 2;
    const centerY = this.config.height / 2;
    
    for (const node of this.nodes) {
      if (!node.isFixed) {
        const fx = (centerX - node.x) * this.config.physics.centeringForce;
        const fy = (centerY - node.y) * this.config.physics.centeringForce;
        
        node.vx += fx;
        node.vy += fy;
      }
    }
  }
  
  /**
   * Update node positions based on velocities
   */
  updateNodePositions() {
    let totalVelocity = 0;
    let movingNodes = 0;
    
    for (const node of this.nodes) {
      if (node.isFixed) continue;
      
      // Apply damping
      node.vx *= this.config.physics.damping;
      node.vy *= this.config.physics.damping;
      
      // Limit velocity
      const velocity = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
      if (velocity > this.config.physics.maxVelocity) {
        node.vx = (node.vx / velocity) * this.config.physics.maxVelocity;
        node.vy = (node.vy / velocity) * this.config.physics.maxVelocity;
      }
      
      // Update position
      node.x += node.vx;
      node.y += node.vy;
      
      // Keep within bounds
      const margin = node.radius + 10;
      node.x = Math.max(margin, Math.min(this.config.width - margin, node.x));
      node.y = Math.max(margin, Math.min(this.config.height - margin, node.y));
      
      // Stop if velocity is very low
      if (Math.abs(node.vx) < this.config.physics.minVelocity &&
          Math.abs(node.vy) < this.config.physics.minVelocity) {
        node.vx = 0;
        node.vy = 0;
      }
      
      // Track total velocity for stability check
      totalVelocity += Math.sqrt(node.vx * node.vx + node.vy * node.vy);
      movingNodes++;
    }
    
    // Store average velocity for stability checking
    this.averageVelocity = movingNodes > 0 ? totalVelocity / movingNodes : 0;
  }
  
  /**
   * Check if simulation has reached stability and should stop
   */
  checkSimulationStability() {
    // Stop simulation if average velocity is very low
    if (this.averageVelocity < this.config.physics.minVelocity) {
      this.simulationRunning = false;
      console.log('Network layout stabilized, stopping simulation');
    }
  }
  
  /**
   * Render the network visualization
   */
  render() {
    if (!this.needsRedraw && !this.isAnimating) return;
    
    // Ensure canvas has valid dimensions before rendering
    if (!this.config.width || !this.config.height || this.config.width <= 0 || this.config.height <= 0) {
      console.warn('Canvas has invalid dimensions, skipping render');
      return;
    }
    
    // Clear canvas
    this.ctx.clearRect(0, 0, this.config.width, this.config.height);
    
    // Draw connections
    this.renderConnections();
    
    // Draw nodes
    this.renderNodes();
    
    // Reset redraw flag
    this.needsRedraw = false;
  }
  
  /**
   * Render all connections
   */
  renderConnections() {
    for (const connection of this.connections) {
      const fromNode = this.nodeMap.get(connection.from);
      const toNode = this.nodeMap.get(connection.to);
      
      if (fromNode && toNode) {
        this.renderConnection(connection, fromNode, toNode);
      }
    }
  }
  
  /**
   * Render a single connection
   */
  renderConnection(connection, fromNode, toNode) {
    const style = this.config.connectionStyles[connection.type] || connection.visual;
    const isHighlighted = this.hoveredConnection === connection;
    const isInJourneyPath = connection.isInJourneyPath || false;
    
    // Set line style
    this.ctx.strokeStyle = isInJourneyPath ? '#FFD700' : style.color;
    this.ctx.globalAlpha = isHighlighted ? 1.0 : (isInJourneyPath ? 1.0 : style.opacity);
    this.ctx.lineWidth = style.width * (isHighlighted ? 1.5 : (isInJourneyPath ? 1.5 : 1.0));
    
    // Set line dash pattern
    if (isInJourneyPath) {
      this.ctx.setLineDash([]); // Solid line for journey path
    } else {
      switch (style.style) {
        case 'dashed':
          this.ctx.setLineDash([10, 5]);
          break;
        case 'dotted':
          this.ctx.setLineDash([2, 3]);
          break;
        default:
          this.ctx.setLineDash([]);
      }
    }
    
    // Draw connection line
    this.ctx.beginPath();
    this.ctx.moveTo(fromNode.x, fromNode.y);
    
    // Add curve for aesthetic appeal
    const controlX = (fromNode.x + toNode.x) / 2;
    const controlY = (fromNode.y + toNode.y) / 2 - 20;
    this.ctx.quadraticCurveTo(controlX, controlY, toNode.x, toNode.y);
    
    this.ctx.stroke();
    
    // Reset line dash
    this.ctx.setLineDash([]);
    this.ctx.globalAlpha = 1.0;
  }
  
  /**
   * Render all nodes
   */
  renderNodes() {
    for (const node of this.nodes) {
      this.renderNode(node);
    }
  }
  
  /**
   * Render a single node
   */
  renderNode(node) {
    const isHovered = this.hoveredNode === node;
    const isSelected = this.selectedNode === node;
    const isInJourneyPath = node.isInJourneyPath || false;
    const isCurrentPosition = node.isCurrentPosition || false;
    
    // Draw journey path highlight
    if (isInJourneyPath) {
      const gradient = this.ctx.createRadialGradient(
        node.x, node.y, 0,
        node.x, node.y, node.radius * 2
      );
      gradient.addColorStop(0, isCurrentPosition ? 'rgba(255, 215, 0, 0.6)' : 'rgba(255, 215, 0, 0.3)');
      gradient.addColorStop(1, 'transparent');
      
      this.ctx.fillStyle = gradient;
      this.ctx.beginPath();
      this.ctx.arc(node.x, node.y, node.radius * 2, 0, Math.PI * 2);
      this.ctx.fill();
    }
    
    // Draw glow effect for hovered or selected nodes
    if (isHovered || isSelected) {
      const gradient = this.ctx.createRadialGradient(
        node.x, node.y, 0,
        node.x, node.y, node.radius * 1.5
      );
      gradient.addColorStop(0, this.config.colors.hoverGlow);
      gradient.addColorStop(1, 'transparent');
      
      this.ctx.fillStyle = gradient;
      this.ctx.beginPath();
      this.ctx.arc(node.x, node.y, node.radius * 1.5, 0, Math.PI * 2);
      this.ctx.fill();
    }
    
    // Draw main node circle
    this.ctx.fillStyle = node.color;
    this.ctx.beginPath();
    this.ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
    this.ctx.fill();
    
    // Draw border
    this.ctx.strokeStyle = isSelected ?
      this.config.colors.selectedBorder :
      (isCurrentPosition ? '#FF6B35' : (isInJourneyPath ? '#FFD700' : this.config.colors.nodeBorder));
    this.ctx.lineWidth = isSelected ? 4 : (isCurrentPosition ? 3 : (isInJourneyPath ? 3 : 2));
    this.ctx.stroke();
    
    // Draw selection indicator
    if (isSelected) {
      this.ctx.strokeStyle = this.config.colors.selectedBorder;
      this.ctx.lineWidth = 3;
      this.ctx.setLineDash([5, 5]);
      this.ctx.beginPath();
      this.ctx.arc(node.x, node.y, node.radius + 5, 0, Math.PI * 2);
      this.ctx.stroke();
      this.ctx.setLineDash([]);
    }
    
    // Draw current position indicator
    if (isCurrentPosition) {
      this.ctx.strokeStyle = '#FF6B35';
      this.ctx.lineWidth = 2;
      this.ctx.setLineDash([3, 3]);
      this.ctx.beginPath();
      this.ctx.arc(node.x, node.y, node.radius + 8, 0, Math.PI * 2);
      this.ctx.stroke();
      this.ctx.setLineDash([]);
    }
    
    // Draw journey position indicator if applicable
    if (isInJourneyPath && node.journeyPosition >= 0) {
      this.ctx.fillStyle = isCurrentPosition ? '#FF6B35' : '#FFD700';
      this.ctx.font = 'bold 12px Arial';
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      this.ctx.fillText(node.journeyPosition + 1, node.x, node.y - node.radius - 10);
    }
    
    // Draw node type indicator
    this.drawNodeTypeIndicator(node);
  }
  
  /**
   * Draw visual indicator for node type
   */
  drawNodeTypeIndicator(node) {
    const { type, x, y, radius } = node;
    
    this.ctx.save();
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.font = `${radius * 0.8}px Arial`;
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    
    let symbol = '';
    switch (type) {
      case 'central':
        symbol = '★';
        break;
      case 'gateway':
        symbol = '◆';
        break;
      case 'terminal':
        symbol = '■';
        break;
      default:
        symbol = '●';
    }
    
    this.ctx.fillText(symbol, x, y);
    this.ctx.restore();
  }
  
  /**
   * Handle mouse move events
   */
  handleMouseMove(event) {
    const rect = this.canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    // Handle dragging
    if (this.isDragging && this.draggedNode) {
      this.draggedNode.x = x;
      this.draggedNode.y = y;
      this.draggedNode.vx = 0;
      this.draggedNode.vy = 0;
      this.needsRedraw = true;
      return;
    }
    
    // Check for node hover
    const hoveredNode = this.getNodeAtPosition(x, y);
    if (hoveredNode !== this.hoveredNode) {
      this.hoveredNode = hoveredNode;
      this.canvas.style.cursor = hoveredNode ? 'pointer' : 'default';
      this.needsRedraw = true;
      
      // Show/hide tooltip
      if (hoveredNode) {
        this.showTooltip(hoveredNode, x, y);
      } else {
        this.hideTooltip();
      }
    }
    
    // Check for connection hover
    const hoveredConnection = this.getConnectionAtPosition(x, y);
    if (hoveredConnection !== this.hoveredConnection) {
      this.hoveredConnection = hoveredConnection;
      this.needsRedraw = true;
    }
  }
  
  /**
   * Handle mouse down events
   */
  handleMouseDown(event) {
    const rect = this.canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const node = this.getNodeAtPosition(x, y);
    if (node) {
      this.isDragging = true;
      this.draggedNode = node;
      this.canvas.style.cursor = 'grabbing';
    }
  }
  
  /**
   * Handle mouse up events
   */
  handleMouseUp(event) {
    this.isDragging = false;
    this.draggedNode = null;
    this.canvas.style.cursor = this.hoveredNode ? 'pointer' : 'default';
  }
  
  /**
   * Handle mouse click events
   */
  handleClick(event) {
    const rect = this.canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    // Check for node click
    const node = this.getNodeAtPosition(x, y);
    if (node) {
      this.selectNode(node.id);
      return;
    }
    
    // Check for connection click
    const connection = this.getConnectionAtPosition(x, y);
    if (connection) {
      this.handleConnectionClick(connection);
    }
  }
  
  /**
   * Handle mouse leave events
   */
  handleMouseLeave(event) {
    this.hoveredNode = null;
    this.hoveredConnection = null;
    this.isDragging = false;
    this.draggedNode = null;
    this.canvas.style.cursor = 'default';
    this.hideTooltip();
    this.needsRedraw = true;
  }
  
  /**
   * Handle touch start events
   */
  handleTouchStart(event) {
    event.preventDefault();
    const touch = event.touches[0];
    const rect = this.canvas.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    
    const node = this.getNodeAtPosition(x, y);
    if (node) {
      this.isDragging = true;
      this.draggedNode = node;
    }
  }
  
  /**
   * Handle touch move events
   */
  handleTouchMove(event) {
    event.preventDefault();
    if (!this.isDragging || !this.draggedNode) return;
    
    const touch = event.touches[0];
    const rect = this.canvas.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    
    this.draggedNode.x = x;
    this.draggedNode.y = y;
    this.draggedNode.vx = 0;
    this.draggedNode.vy = 0;
    this.needsRedraw = true;
  }
  
  /**
   * Handle touch end events
   */
  handleTouchEnd(event) {
    event.preventDefault();
    
    if (this.isDragging && this.draggedNode) {
      const touch = event.changedTouches[0];
      const rect = this.canvas.getBoundingClientRect();
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;
      
      // Check if this was a tap (not a drag)
      const distance = Math.sqrt(
        Math.pow(x - this.draggedNode.x, 2) + 
        Math.pow(y - this.draggedNode.y, 2)
      );
      
      if (distance < 10) {
        this.selectNode(this.draggedNode.id);
      }
    }
    
    this.isDragging = false;
    this.draggedNode = null;
  }
  
  /**
   * Get node at position
   */
  getNodeAtPosition(x, y) {
    for (const node of this.nodes) {
      const distance = Math.sqrt(
        Math.pow(x - node.x, 2) + Math.pow(y - node.y, 2)
      );
      
      if (distance <= node.radius) {
        return node;
      }
    }
    
    return null;
  }
  
  /**
   * Get connection at position
   */
  getConnectionAtPosition(x, y) {
    const threshold = 5; // Pixels from line
    
    for (const connection of this.connections) {
      const fromNode = this.nodeMap.get(connection.from);
      const toNode = this.nodeMap.get(connection.to);
      
      if (fromNode && toNode && this.isPointNearLine(x, y, fromNode, toNode, threshold)) {
        return connection;
      }
    }
    
    return null;
  }
  
  /**
   * Check if point is near line segment
   */
  isPointNearLine(px, py, fromNode, toNode, threshold) {
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
  
  /**
   * Select a node by ID
   */
  selectNode(nodeId) {
    const node = this.nodeMap.get(nodeId);
    if (!node) {
      console.warn('Node not found for ID:', nodeId);
      return;
    }
    
    // Update selected node
    this.selectedNode = node;
    this.needsRedraw = true;
    
    // Update journey state (this will trigger journey tracker automatically)
    if (this.journeyState) {
      this.journeyState.setCurrentQuote(nodeId);
    } else {
      console.warn('JourneyState not available');
    }
    
    // Add to JourneyTracker if available
    if (typeof window !== 'undefined' && window.journeyTracker) {
      window.journeyTracker.addToJourney(nodeId);
    }
    
    // Emit selection event
    this.emitEvent('nodeSelected', {
      nodeId: nodeId,
      node: node,
      quote: node.quote
    });
    
    // Force a render to show selection immediately
    this.render();
  }
  
  /**
   * Handle connection click
   */
  handleConnectionClick(connection) {
    // Navigate to the target node
    this.selectNode(connection.to);
    
    // Emit connection click event
    this.emitEvent('connectionClicked', {
      connection: connection,
      fromNode: this.nodeMap.get(connection.from),
      toNode: this.nodeMap.get(connection.to)
    });
  }
  
  /**
   * Show tooltip for node
   */
  showTooltip(node, x, y) {
    // Clear existing timeout
    if (this.tooltipTimeout) {
      clearTimeout(this.tooltipTimeout);
    }
    
    // Show tooltip after delay
    this.tooltipTimeout = setTimeout(() => {
      this.createTooltip(node, x, y);
    }, this.config.interaction.tooltipDelay);
  }
  
  /**
   * Hide tooltip
   */
  hideTooltip() {
    if (this.tooltipTimeout) {
      clearTimeout(this.tooltipTimeout);
      this.tooltipTimeout = null;
    }
    
    if (this.tooltip) {
      this.tooltip.remove();
      this.tooltip = null;
    }
  }
  
  /**
   * Create tooltip element
   */
  createTooltip(node, x, y) {
    // Remove existing tooltip
    if (this.tooltip) {
      this.tooltip.remove();
    }
    
    // Create tooltip element
    this.tooltip = document.createElement('div');
    this.tooltip.className = 'node-tooltip';
    this.tooltip.innerHTML = `
      <div class="node-tooltip__title">${node.quote.title}</div>
      <div class="node-tooltip__quote">"${node.quote.quote}"</div>
      <div class="node-tooltip__meta">
        ${node.quote.source.work}, ${node.quote.source.year}
      </div>
    `;
    
    // Position tooltip
    const rect = this.canvas.getBoundingClientRect();
    this.tooltip.style.left = `${rect.left + x}px`;
    this.tooltip.style.top = `${rect.top + y - 10}px`;
    
    // Add to DOM
    document.body.appendChild(this.tooltip);
  }
  
  /**
   * Highlight journey path
   */
  highlightJourneyPath(journeyHistory) {
    // Implementation for highlighting the journey path
    // This would visually emphasize the nodes and connections
    // that represent the user's journey through the quotes
    
    // Reset all node highlights
    this.nodes.forEach(node => {
      node.isInJourneyPath = false;
      node.journeyPosition = -1;
      node.isCurrentPosition = false;
    });
    
    // Reset all connection highlights
    this.connections.forEach(conn => {
      conn.isInJourneyPath = false;
    });
    
    // Get current position from JourneyTracker if available
    let currentPosition = -1;
    if (typeof window !== 'undefined' && window.journeyTracker) {
      const pos = window.journeyTracker.getCurrentPosition();
      currentPosition = pos.position - 1; // Convert to 0-based index
    }
    
    // Highlight nodes in journey history
    if (journeyHistory && journeyHistory.length > 0) {
      journeyHistory.forEach((entry, index) => {
        const node = this.nodeMap.get(entry.quoteId);
        if (node) {
          node.isInJourneyPath = true;
          node.journeyPosition = index;
          node.isCurrentPosition = (index === currentPosition);
        }
      });
      
      // Highlight connections between consecutive journey entries
      for (let i = 0; i < journeyHistory.length - 1; i++) {
        const fromId = journeyHistory[i].quoteId;
        const toId = journeyHistory[i + 1].quoteId;
        
        // Find connection between these nodes
        const connection = this.connections.find(conn =>
          (conn.from === fromId && conn.to === toId) ||
          (conn.from === toId && conn.to === fromId)
        );
        
        if (connection) {
          connection.isInJourneyPath = true;
        }
      }
    }
    
    this.needsRedraw = true;
  }
  
  /**
   * Apply filters to network visualization
   */
  applyFilters(criteria) {
    // Implementation for filtering nodes and connections
    // based on the provided criteria
    
    this.needsRedraw = true;
  }
  
  /**
   * Emit custom event
   */
  emitEvent(eventType, data) {
    const event = new CustomEvent(`quoteNetwork:${eventType}`, {
      detail: data
    });
    this.canvas.dispatchEvent(event);
  }
  
  /**
   * Get network statistics
   */
  getStats() {
    return {
      nodeCount: this.nodes.length,
      connectionCount: this.connections.length,
      selectedNode: this.selectedNode?.id || null,
      isAnimating: this.isAnimating,
      simulationRunning: this.simulationRunning
    };
  }
  
  /**
   * Export network state
   */
  exportState() {
    return {
      nodes: this.nodes.map(node => ({
        id: node.id,
        x: node.x,
        y: node.y,
        type: node.type
      })),
      selectedNode: this.selectedNode?.id || null
    };
  }
  
  /**
   * Import network state
   */
  importState(state) {
    if (!state || !state.nodes) return;
    
    // Update node positions
    state.nodes.forEach(exportedNode => {
      const node = this.nodeMap.get(exportedNode.id);
      if (node) {
        node.x = exportedNode.x;
        node.y = exportedNode.y;
        node.vx = 0;
        node.vy = 0;
      }
    });
    
    // Select node if specified
    if (state.selectedNode) {
      this.selectNode(state.selectedNode);
    }
    
    this.needsRedraw = true;
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = QuoteNetwork;
}