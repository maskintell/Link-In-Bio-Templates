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

// Function to add floating leaves to the background
function addFloatingLeaves() {
  const body = document.body;
  const leafChars = ['❧', '🍃', '🍂', '🌿'];
  
  for (let i = 0; i < 8; i++) {
    const leaf = document.createElement('div');
    leaf.className = 'floating-leaf';
    leaf.textContent = leafChars[Math.floor(Math.random() * leafChars.length)];
    leaf.style.position = 'fixed';
    leaf.style.fontSize = (Math.random() * 2 + 1.5) + 'rem';
    leaf.style.left = Math.random() * 100 + 'vw';
    leaf.style.top = Math.random() * 100 + 'vh';
    leaf.style.opacity = Math.random() * 0.1 + 0.05;
    leaf.style.animation = `float-leaf ${15 + Math.random() * 10}s ease-in-out infinite`;
    leaf.style.animationDelay = Math.random() * 5 + 's';
    leaf.style.zIndex = '-1';
    leaf.style.pointerEvents = 'none';
    
    body.appendChild(leaf);
  }
}

// Function to add seasonal colors based on current month
function applySeasonalTheme() {
  const month = new Date().getMonth();
  const container = document.querySelector('.earth-container');
  const links = document.querySelectorAll('.earth-link');
  
  if (!container) return;
  
  // Spring (Mar-May)
  if (month >= 2 && month <= 4) {
    container.style.background = '#4d7c0f';
    container.style.borderColor = '#65a30d';
    container.style.boxShadow = '0 15px 35px rgba(77, 124, 15, 0.2)';
    
    links.forEach(link => {
      link.style.background = '#65a30d';
      link.style.borderColor = '#84cc16';
    });
    
    document.querySelector('.earth-title').style.color = '#84cc16';
    document.querySelector('.earth-subtitle').style.color = '#a3e635';
  }
  // Summer (Jun-Aug)
  else if (month >= 5 && month <= 7) {
    container.style.background = '#d97706';
    container.style.borderColor = '#f59e0b';
    container.style.boxShadow = '0 15px 35px rgba(217, 119, 6, 0.2)';
    
    links.forEach(link => {
      link.style.background = '#f59e0b';
      link.style.borderColor = '#fbbf24';
    });
    
    document.querySelector('.earth-title').style.color = '#fbbf24';
    document.querySelector('.earth-subtitle').style.color = '#fde68a';
  }
  // Autumn (Sep-Nov) - default theme
  // Winter (Dec-Feb)
  else if (month === 11 || month <= 1) {
    container.style.background = '#374151';
    container.style.borderColor = '#4b5563';
    container.style.boxShadow = '0 15px 35px rgba(55, 65, 81, 0.2)';
    
    links.forEach(link => {
      link.style.background = '#4b5563';
      link.style.borderColor = '#6b7280';
    });
    
    document.querySelector('.earth-title').style.color = '#d1d5db';
    document.querySelector('.earth-subtitle').style.color = '#9ca3af';
  }
}

// Function to add paper texture effect
function addPaperTexture() {
  const container = document.querySelector('.earth-container');
  if (container) {
    container.style.backgroundImage = `
      linear-gradient(rgba(120, 53, 15, 0.9), rgba(120, 53, 15, 0.9)),
      url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2392400e' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")
    `;
  }
}

// Function to add gentle page entrance animation
function addEntranceAnimation() {
  const container = document.querySelector('.earth-container');
  if (container) {
    container.style.opacity = '0';
    container.style.transform = 'translateY(30px) scale(0.95)';
    container.style.transition = 'opacity 1s ease, transform 1s ease';
    
    setTimeout(() => {
      container.style.opacity = '1';
      container.style.transform = 'translateY(0) scale(1)';
    }, 200);
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  updateLastUpdated();
  addFloatingLeaves();
  addPaperTexture();
  addEntranceAnimation();
  
  // Optional: Uncomment to enable seasonal themes
  // applySeasonalTheme();
  
  // Add ink blot effect on link hover
  const links = document.querySelectorAll('.earth-link');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      console.log(`Ink pressed: ${this.textContent}`);
      // You could add ink animation here
    });
  });
  
  // Gentle page fade in
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 1s ease';
    document.body.style.opacity = '1';
  }, 100);
});