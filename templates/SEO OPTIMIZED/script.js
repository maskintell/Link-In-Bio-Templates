// Configuration Object
const CONFIG = {
  subtitles: [
    "Available for collaborations",
    "Open to new projects",
    "Currently working remotely",
    "Follow for daily updates",
    "Let's build something amazing"
  ],
  animationSpeed: {
    subtitleDisplay: 3, // seconds each subtitle shows
    subtitleTransition: 0.8, // seconds for transition
    floatSpeed: 2.5, // seconds for float animation
    linkHover: 0.25 // seconds for link hover animation
  },
  analytics: {
    enabled: true,
    maxVisits: 50
  }
};

// Main initialization
document.addEventListener('DOMContentLoaded', function() {
  console.log('MASK INTELLIGENCE Profile Page Initializing...');
  
  try {
    // Initialize all components
    initComponents();
    
    // Setup event listeners
    setupEventListeners();
    
    // Optional: Setup analytics
    if (CONFIG.analytics.enabled) {
      trackPageView();
    }
    
    console.log('Profile page loaded successfully!');
  } catch (error) {
    console.error('Error initializing page:', error);
    // Fallback: Show static content if JS fails
    showStaticSubtitles();
  }
});

// Initialize all components
function initComponents() {
  // Create dynamic subtitles if they don't exist
  setupDynamicSubtitles();
  
  // Initialize animations
  initSubtitlesAnimation();
  initBoxFloatAnimation();
  initLinkHoverEffects();
  
  // Add loading class for fade-in effect
  const box = document.querySelector('.box');
  if (box) {
    box.classList.add('loading');
  }
}

// Setup dynamic subtitles from config
function setupDynamicSubtitles() {
  const container = document.querySelector('.subtitle-container');
  if (!container) return;
  
  // Clear existing subtitles
  container.innerHTML = '';
  
  // Create new subtitles from config
  CONFIG.subtitles.forEach((text, index) => {
    const subtitle = document.createElement('div');
    subtitle.className = 'dynamic-subtitle';
    subtitle.id = `subtitle-${index + 1}`;
    subtitle.innerHTML = `
      <span class="subtitle-dot"></span> 
      <span class="gradient-text">${text}</span>
    `;
    container.appendChild(subtitle);
  });
}

// Dynamic Subtitles Animation
function initSubtitlesAnimation() {
  const subtitles = document.querySelectorAll('.dynamic-subtitle');
  const totalSubtitles = subtitles.length;
  
  if (totalSubtitles === 0) {
    console.warn('No subtitles found for animation');
    return;
  }
  
  // Set initial state
  gsap.set(subtitles, { 
    opacity: 0, 
    y: 15,
    scale: 0.95 
  });
  
  // Show first subtitle
  gsap.to(subtitles[0], {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 1,
    ease: "back.out(1.2)"
  });
  
  // Create subtitle rotation animation
  const subtitleTimeline = createSubtitleTimeline(subtitles);
  
  // Setup hover interactions
  setupSubtitleInteractions(subtitleTimeline);
}

function createSubtitleTimeline(subtitles) {
  const totalSubtitles = subtitles.length;
  const tl = gsap.timeline({ 
    repeat: -1,
    defaults: { 
      duration: CONFIG.animationSpeed.subtitleTransition,
      ease: "power2.inOut" 
    }
  });
  
  subtitles.forEach((subtitle, index) => {
    const nextIndex = (index + 1) % totalSubtitles;
    
    // Fade out current subtitle
    tl.to(subtitle, {
      opacity: 0,
      y: -15,
      scale: 0.95,
      duration: 0.6
    }, `+=${CONFIG.animationSpeed.subtitleDisplay}`);
    
    // Fade in next subtitle
    tl.to(subtitles[nextIndex], {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "back.out(1.1)"
    }, "<0.4");
  });
  
  return tl;
}

function setupSubtitleInteractions(timeline) {
  const subtitleContainer = document.querySelector('.subtitle-container');
  if (!subtitleContainer) return;
  
  subtitleContainer.addEventListener('mouseenter', function() {
    timeline.pause();
    gsap.to(subtitleContainer, {
      scale: 1.03,
      duration: 0.3,
      ease: "power2.out"
    });
    gsap.to('.dynamic-subtitle', {
      filter: 'brightness(1.2)',
      duration: 0.3
    });
  });
  
  subtitleContainer.addEventListener('mouseleave', function() {
    timeline.play();
    gsap.to(subtitleContainer, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
    gsap.to('.dynamic-subtitle', {
      filter: 'brightness(1)',
      duration: 0.3
    });
  });
}

// Box floating animation
function initBoxFloatAnimation() {
  const box = document.querySelector('.box');
  if (!box) return;
  
  gsap.to(box, {
    y: -5,
    duration: CONFIG.animationSpeed.floatSpeed,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
}

// Link hover effects
function initLinkHoverEffects() {
  const links = document.querySelectorAll('a');
  
  links.forEach(link => {
    // Mouse enter effect
    link.addEventListener('mouseenter', function() {
      gsap.to(this, {
        scale: 1.04,
        y: -3,
        duration: CONFIG.animationSpeed.linkHover,
        ease: "power2.out",
        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)"
      });
    });
    
    // Mouse leave effect
    link.addEventListener('mouseleave', function() {
      gsap.to(this, {
        scale: 1,
        y: 0,
        duration: CONFIG.animationSpeed.linkHover,
        ease: "power2.out",
        boxShadow: "none"
      });
    });
    
    // Click effect
    link.addEventListener('mousedown', function() {
      gsap.to(this, {
        scale: 0.98,
        duration: 0.1,
        ease: "power2.out"
      });
    });
    
    link.addEventListener('mouseup', function() {
      gsap.to(this, {
        scale: 1.04,
        duration: 0.1,
        ease: "power2.out"
      });
    });
  });
}

// Fallback: Show static subtitles if JS fails
function showStaticSubtitles() {
  const container = document.querySelector('.subtitle-container');
  if (!container) return;
  
  container.innerHTML = '';
  const staticSubtitle = document.createElement('div');
  staticSubtitle.className = 'static-subtitle';
  staticSubtitle.innerHTML = `
    <span class="subtitle-dot"></span> 
    <span class="gradient-text">Available for collaborations & projects</span>
  `;
  container.appendChild(staticSubtitle);
  
  // Add basic CSS for static subtitle
  const style = document.createElement('style');
  style.textContent = `
    .static-subtitle {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      color: #60a5fa;
      font-family: 'Pacifico', cursive;
    }
  `;
  document.head.appendChild(style);
}

// Page view tracking
function trackPageView() {
  try {
    const visitData = {
      timestamp: new Date().toISOString(),
      referrer: document.referrer || 'direct',
      userAgent: navigator.userAgent,
      path: window.location.pathname
    };
    
    const visits = JSON.parse(localStorage.getItem('pageVisits') || '[]');
    visits.push(visitData);
    
    // Keep only last X visits
    if (visits.length > CONFIG.analytics.maxVisits) {
      visits.splice(0, visits.length - CONFIG.analytics.maxVisits);
    }
    
    localStorage.setItem('pageVisits', JSON.stringify(visits));
    
    // Log to console in development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      console.log('Page view tracked:', visitData);
      console.log('Total visits:', visits.length);
    }
  } catch (e) {
    console.log('Analytics disabled:', e.message);
  }
}

// Setup event listeners
function setupEventListeners() {
  // Window resize handler
  window.addEventListener('resize', debounce(handleResize, 250));
  
  // Online/offline status
  window.addEventListener('online', handleOnlineStatus);
  window.addEventListener('offline', handleOnlineStatus);
  
  // Image error handling
  const avatarImg = document.querySelector('img[src*="avatar"]');
  if (avatarImg) {
    avatarImg.addEventListener('error', handleImageError);
  }
}

// Debounce function for resize events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function handleResize() {
  // Adjust animations based on screen size
  const isMobile = window.innerWidth <= 480;
  const timeScale = isMobile ? 0.8 : 1;
  gsap.globalTimeline.timeScale(timeScale);
}

function handleOnlineStatus() {
  const isOnline = navigator.onLine;
  const statusIndicator = document.createElement('div');
  statusIndicator.className = 'connection-status';
  statusIndicator.textContent = isOnline ? 'Online' : 'Offline';
  statusIndicator.style.cssText = `
    position: fixed;
    top: 10px;
    right: 10px;
    padding: 5px 10px;
    border-radius: 5px;
    background: ${isOnline ? '#10b981' : '#ef4444'};
    color: white;
    font-size: 12px;
    z-index: 1000;
    animation: fadeOut 2s forwards;
  `;
  
  document.body.appendChild(statusIndicator);
  
  // Remove after animation
  setTimeout(() => {
    if (statusIndicator.parentNode) {
      statusIndicator.parentNode.removeChild(statusIndicator);
    }
  }, 2000);
}

function handleImageError(event) {
  const img = event.target;
  console.warn('Failed to load avatar image:', img.src);
  
  // Use placeholder or fallback
  img.src = 'https://ui-avatars.com/api/?name=Your+Name&background=0f172a&color=60a5fa&size=90';
  img.alt = 'Default avatar for Your Name';
}

// Utility: Check for reduced motion preference
function isReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Adjust animations based on user preference
if (isReducedMotion()) {
  gsap.globalTimeline.timeScale(0.5);
}

// Export functions for debugging (optional)
if (typeof window !== 'undefined') {
  window.profilePage = {
    CONFIG,
    initComponents,
    trackPageView,
    showStaticSubtitles
  };
}