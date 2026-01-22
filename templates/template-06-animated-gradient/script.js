// Update the current date
function updateDate() {
  const dateElement = document.getElementById('current-date');
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  });
  dateElement.textContent = formattedDate;
}

// Add hover effect for profile image
function addProfileImageHover() {
  const profileImg = document.getElementById('profile-img');
  profileImg.addEventListener('mouseenter', () => {
    profileImg.style.transform = 'scale(1.05)';
    profileImg.style.transition = 'transform 0.3s ease';
  });
  
  profileImg.addEventListener('mouseleave', () => {
    profileImg.style.transform = 'scale(1)';
  });
}

// Add click animation for links
function addLinkAnimations() {
  const links = document.querySelectorAll('.link-btn');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      // Create ripple effect
      const ripple = document.createElement('span');
      const rect = link.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        width: ${size}px;
        height: ${size}px;
        top: ${y}px;
        left: ${x}px;
        pointer-events: none;
      `;
      
      link.style.position = 'relative';
      link.appendChild(ripple);
      
      // Remove ripple after animation
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
}

// Add styles for ripple animation
function addRippleStyles() {
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

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  updateDate();
  addProfileImageHover();
  addRippleStyles();
  addLinkAnimations();
});
