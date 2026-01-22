// Console log to confirm script is loaded
console.log("🎨 Animated Gradient Template - JavaScript Loaded!");

// Function to update the last updated date
function updateLastUpdated() {
  const lastUpdatedElement = document.getElementById('last-updated');
  if (lastUpdatedElement) {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric'
    });
    lastUpdatedElement.textContent = formattedDate;
  }
}

// Function to create animated particles
function createParticles() {
  const particlesContainer = document.querySelector('.particles');
  if (!particlesContainer) return;
  
  const colors = [
    'rgba(238, 119, 82, 0.3)',   // #ee7752
    'rgba(231, 60, 126, 0.3)',   // #e73c7e
    'rgba(35, 166, 213, 0.3)',   // #23a6d5
    'rgba(35, 213, 171, 0.3)'    // #23d5ab
  ];
  
  // Create particles
  for (let i = 0; i < 60; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random properties
    const size = Math.random() * 15 + 5;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const duration = Math.random() * 20 + 20;
    const delay = Math.random() * 5;
    
    // Apply styles
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.background = color;
    particle.style.left = `${left}vw`;
    particle.style.top = `${top}vh`;
    particle.style.opacity = Math.random() * 0.5 + 0.1;
    particle.style.boxShadow = `0 0 ${size}px ${color}`;
    
    // Create unique animation
    particle.style.animation = `particle-float-${i} ${duration}s ease-in-out infinite`;
    particle.style.animationDelay = `${delay}s`;
    
    // Add to container
    particlesContainer.appendChild(particle);
    
    // Create unique keyframes for each particle
    const style = document.createElement('style');
    style.textContent = `
      @keyframes particle-float-${i} {
        0%, 100% {
          transform: translate(0, 0) rotate(0deg);
          opacity: ${Math.random() * 0.3 + 0.1};
        }
        25% {
          transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px) rotate(90deg);
          opacity: ${Math.random() * 0.6 + 0.2};
        }
        50% {
          transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px) rotate(180deg);
          opacity: ${Math.random() * 0.3 + 0.1};
        }
        75% {
          transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px) rotate(270deg);
          opacity: ${Math.random() * 0.6 + 0.2};
        }
      }
    `;
    document.head.appendChild(style);
  }
}

// Function to add ripple effect to links
function addRippleEffect() {
  const links = document.querySelectorAll('.gradient-link');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      // Create ripple
      const ripple = document.createElement('div');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%);
        transform: scale(0);
        animation: ripple-expand 0.6s ease-out;
        width: ${size}px;
        height: ${size}px;
        top: ${y}px;
        left: ${x}px;
        pointer-events: none;
        z-index: 1;
      `;
      
      this.appendChild(ripple);
      
      // Remove ripple after animation
      setTimeout(() => {
        ripple.remove();
      }, 600);
      
      console.log(`🌊 Flow to: ${this.textContent}`);
    });
  });
}

// Function to add color shift to links on hover
function addColorShiftEffect() {
  const links = document.querySelectorAll('.gradient-link');
  
  links.forEach(link => {
    link.addEventListener('mouseenter', function() {
      // Random color shift
      const hue = Math.floor(Math.random() * 360);
      this.style.borderColor = `hsla(${hue}, 70%, 70%, 0.5)`;
      this.style.boxShadow = `0 15px 30px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1), 0 0 20px hsla(${hue}, 100%, 70%, 0.3)`;
    });
    
    link.addEventListener('mouseleave', function() {
      // Reset to original
      setTimeout(() => {
        this.style.borderColor = '';
        this.style.boxShadow = '';
      }, 300);
    });
  });
}

// Function to add breathing effect to container
function addBreathingEffect() {
  const container = document.querySelector('.gradient-container');
  if (!container) return;
  
  let scale = 1;
  let direction = 0.0005;
  
  function breathe() {
    scale += direction;
    
    if (scale > 1.005 || scale < 0.995) {
      direction *= -1;
    }
    
    container.style.transform = `scale(${scale})`;
    requestAnimationFrame(breathe);
  }
  
  // Start subtle breathing animation
  setTimeout(() => {
    breathe();
  }, 1000);
}

// Function to add loading animation
function showLoadingAnimation() {
  const loadingDiv = document.createElement('div');
  loadingDiv.className = 'loading';
  loadingDiv.innerHTML = '<div class="loading-text">Loading Energy...</div>';
  
  document.body.appendChild(loadingDiv);
  
  // Remove loading after delay
  setTimeout(() => {
    loadingDiv.style.opacity = '0';
    loadingDiv.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
      loadingDiv.remove();
    }, 500);
  }, 1500);
}

// Function to add interactive gradient to container
function addInteractiveGradient() {
  const container = document.querySelector('.gradient-container');
  
  container.addEventListener('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    // Update gradient based on mouse position
    this.style.background = `
      radial-gradient(circle at ${x}% ${y}%, 
        rgba(255, 255, 255, 0.2) 0%,
        rgba(255, 255, 255, 0.15) 50%,
        rgba(255, 255, 255, 0.1) 100%
      )
    `;
  });
  
  container.addEventListener('mouseleave', function() {
    // Reset gradient
    setTimeout(() => {
      this.style.background = 'rgba(255, 255, 255, 0.15)';
    }, 300);
  });
}

// Function to add dynamic title effect
function addDynamicTitleEffect() {
  const title = document.querySelector('.gradient-title');
  if (!title) return;
  
  const originalText = title.textContent;
  const letters = originalText.split('');
  
  // Create spans for each letter
  title.innerHTML = letters.map(letter => 
    `<span class="title-letter">${letter === ' ' ? '&nbsp;' : letter}</span>`
  ).join('');
  
  const letterSpans = document.querySelectorAll('.title-letter');
  
  // Add hover effect to each letter
  letterSpans.forEach(letter => {
    letter.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px) scale(1.2)';
      this.style.transition = 'transform 0.2s ease';
      this.style.display = 'inline-block';
      
      // Random color
      const hue = Math.floor(Math.random() * 360);
      this.style.color = `hsl(${hue}, 100%, 70%)`;
    });
    
    letter.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.color = '';
    });
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log("🚀 DOM fully loaded - Initializing animations...");
  
  // Show loading animation first
  showLoadingAnimation();
  
  // Initialize after loading animation completes
  setTimeout(() => {
    console.log("✨ Initializing template features...");
    
    updateLastUpdated();
    createParticles();
    addRippleEffect();
    addColorShiftEffect();
    addBreathingEffect();
    addInteractiveGradient();
    addDynamicTitleEffect();
    
    // Page entrance animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s ease';
    
    setTimeout(() => {
      document.body.style.opacity = '1';
      console.log("✅ Page fully loaded and animated!");
    }, 100);
    
    // Add keyboard interaction
    document.addEventListener('keydown', function(e) {
      if (e.code === 'Space') {
        console.log("🎹 Spacebar pressed - pulse effect!");
        // Pulse effect on spacebar
        const container = document.querySelector('.gradient-container');
        container.style.transform = 'scale(1.05)';
        container.style.transition = 'transform 0.3s ease';
        
        setTimeout(() => {
          container.style.transform = 'scale(1)';
        }, 300);
      }
    });
    
    // Add music visualization effect (simulated)
    const links = document.querySelectorAll('.gradient-link');
    setInterval(() => {
      links.forEach(link => {
        if (Math.random() > 0.9) {
          link.style.transform = `translateY(${Math.random() * 4 - 2}px)`;
          setTimeout(() => {
            link.style.transform = '';
          }, 100);
        }
      });
    }, 500);
    
  }, 1500); // Match loading animation duration
});
