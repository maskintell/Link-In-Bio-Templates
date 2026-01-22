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

// Function to add floating decorative elements
function addFloatingElements() {
  const body = document.body;
  const symbols = ['✦', '❀', '🦋', '💫', '✨', '🌸', '💖'];
  
  for (let i = 0; i < 12; i++) {
    const element = document.createElement('div');
    element.className = 'floating-element';
    element.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    element.style.position = 'fixed';
    element.style.fontSize = (Math.random() * 1 + 1) + 'rem';
    element.style.left = Math.random() * 100 + 'vw';
    element.style.top = Math.random() * 100 + 'vh';
    element.style.opacity = Math.random() * 0.2 + 0.1;
    element.style.animation = `gentle-float ${15 + Math.random() * 20}s ease-in-out infinite`;
    element.style.animationDelay = Math.random() * 5 + 's';
    element.style.zIndex = '-1';
    element.style.pointerEvents = 'none';
    element.style.filter = 'blur(0.5px)';
    
    body.appendChild(element);
  }
}

// Function to add ripple effect to links
function addRippleEffect() {
  const links = document.querySelectorAll('.soft-link');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      // Create ripple element
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(167, 139, 250, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        width: ${size}px;
        height: ${size}px;
        top: ${y}px;
        left: ${x}px;
        pointer-events: none;
      `;
      
      this.appendChild(ripple);
      
      // Remove ripple after animation
      setTimeout(() => {
        ripple.remove();
      }, 600);
      
      console.log(`Soft touch: ${this.textContent}`);
    });
  });
  
  // Add ripple animation CSS
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple-animation {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

// Function to add gentle entrance animation
function addEntranceAnimation() {
  const container = document.querySelector('.soft-container');
  if (container) {
    // Start hidden
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px) scale(0.98)';
    container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    // Animate in
    setTimeout(() => {
      container.style.opacity = '1';
      container.style.transform = 'translateY(0) scale(1)';
    }, 200);
  }
}

// Function to add time-based greeting
function addTimeBasedGreeting() {
  const hour = new Date().getHours();
  const subtitle = document.querySelector('.soft-subtitle');
  
  if (subtitle) {
    let greeting = '';
    
    if (hour < 5) {
      greeting = '✨ Late Night Dreamer •';
    } else if (hour < 12) {
      greeting = '🌼 Morning Artist •';
    } else if (hour < 17) {
      greeting = '☀️ Afternoon Creator •';
    } else if (hour < 21) {
      greeting = '🌙 Evening Visionary •';
    } else {
      greeting = '🌌 Nighttime Artist •';
    }
    
    // Add greeting to existing subtitle
    subtitle.innerHTML = `${greeting} <span style="opacity:0.8">Dreamer • Creator</span>`;
  }
}

// Function to add sparkling effect on hover
function addSparkleEffect() {
  const container = document.querySelector('.soft-container');
  
  container.addEventListener('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Create sparkle
    if (Math.random() > 0.97) { // 3% chance on mousemove
      const sparkle = document.createElement('div');
      sparkle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 50%;
        pointer-events: none;
        z-index: 10;
        box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.8);
        left: ${x}px;
        top: ${y}px;
        animation: sparkle-fade 0.6s ease-out forwards;
      `;
      
      this.appendChild(sparkle);
      
      setTimeout(() => {
        sparkle.remove();
      }, 600);
    }
  });
  
  // Add sparkle animation CSS
  const style = document.createElement('style');
  style.textContent = `
    @keyframes sparkle-fade {
      0% {
        transform: scale(0);
        opacity: 1;
      }
      100% {
        transform: scale(1);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  updateLastUpdated();
  addFloatingElements();
  addRippleEffect();
  addEntranceAnimation();
  addTimeBasedGreeting();
  addSparkleEffect();
  
  // Gentle page fade in
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 1s ease';
  
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 300);
  
  // Add gentle music note animation on title hover
  const title = document.querySelector('.soft-title');
  title.addEventListener('mouseenter', function() {
    const musicNote = document.createElement('span');
    musicNote.textContent = '♪';
    musicNote.style.position = 'absolute';
    musicNote.style.right = '-40px';
    musicNote.style.top = '50%';
    musicNote.style.transform = 'translateY(-50%)';
    musicNote.style.fontSize = '1.2rem';
    musicNote.style.opacity = '0';
    musicNote.style.animation = 'fadeInOut 2s ease';
    
    this.appendChild(musicNote);
    
    setTimeout(() => {
      musicNote.remove();
    }, 2000);
  });
  
  // Add fadeInOut animation
  const animationStyle = document.createElement('style');
  animationStyle.textContent = `
    @keyframes fadeInOut {
      0%, 100% { opacity: 0; transform: translateY(-50%) translateY(10px); }
      50% { opacity: 1; transform: translateY(-50%) translateY(0); }
    }
  `;
  document.head.appendChild(animationStyle);
});