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

// Function to add cyber effects to links
function setupCyberEffects() {
  const links = document.querySelectorAll('.cyber-link');
  
  links.forEach(link => {
    // Add random glitch effect on hover
    link.addEventListener('mouseenter', function() {
      // Small chance of glitch effect
      if (Math.random() > 0.7) {
        const originalText = this.textContent;
        this.textContent = '>' + originalText + '_';
        
        setTimeout(() => {
          this.textContent = originalText;
        }, 100);
      }
    });
    
    // Add click sound effect (in console for now)
    link.addEventListener('click', function(e) {
      console.log(`[SYSTEM] Connection established: ${this.textContent}`);
      // You could add actual sound effects here
    });
  });
}

// Function to add terminal-like typing effect
function setupTerminalEffect() {
  const title = document.querySelector('.cyber-title');
  const subtitle = document.querySelector('.cyber-subtitle');
  
  if (title && subtitle) {
    // Store original text
    const titleText = title.textContent;
    const subtitleText = subtitle.textContent;
    
    // Clear text
    title.textContent = '';
    subtitle.textContent = '';
    
    // Type out title
    let i = 0;
    const typeTitle = setInterval(() => {
      if (i < titleText.length) {
        title.textContent += titleText.charAt(i);
        i++;
      } else {
        clearInterval(typeTitle);
        // Start typing subtitle
        let j = 0;
        const typeSubtitle = setInterval(() => {
          if (j < subtitleText.length) {
            subtitle.textContent += subtitleText.charAt(j);
            j++;
          } else {
            clearInterval(typeSubtitle);
          }
        }, 50);
      }
    }, 100);
  }
}

// Function to add matrix-like binary rain in background (optional)
function addBinaryRain() {
  const container = document.querySelector('.cyber-container');
  if (!container) return;
  
  // Create binary rain elements
  for (let i = 0; i < 20; i++) {
    const binary = document.createElement('div');
    binary.textContent = Math.random() > 0.5 ? '1' : '0';
    binary.style.position = 'absolute';
    binary.style.color = 'rgba(0, 240, 255, 0.3)';
    binary.style.fontSize = '14px';
    binary.style.left = Math.random() * 100 + '%';
    binary.style.top = '-20px';
    binary.style.fontFamily = 'monospace';
    binary.style.zIndex = '-1';
    binary.style.animation = `fall ${2 + Math.random() * 3}s linear infinite`;
    binary.style.animationDelay = Math.random() * 2 + 's';
    
    container.appendChild(binary);
  }
  
  // Add the falling animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fall {
      0% {
        transform: translateY(-20px);
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        transform: translateY(400px);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  updateLastUpdated();
  setupCyberEffects();
  
  // Choose one of the following effects (or both by removing comment):
  setupTerminalEffect(); // Typing effect
  // addBinaryRain(); // Binary rain effect (uncomment if wanted)
  
  // Cyber loading effect
  document.body.style.opacity = '0';
  const loader = document.createElement('div');
  loader.innerHTML = '<div class="cyber-loader">[INITIALIZING SYSTEM...]</div>';
  document.body.appendChild(loader);
  
  setTimeout(() => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
    loader.remove();
  }, 1500);
});