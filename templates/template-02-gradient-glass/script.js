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

// Function to add click tracking to links (optional)
function setupLinkTracking() {
  const links = document.querySelectorAll('.link-btn');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      console.log(`Link clicked: ${this.textContent} (${this.href})`);
      // You could add analytics tracking here
      // Example: send data to your analytics service
    });
  });
}

// Function to add hover effect to profile image
function setupProfileImage() {
  const profileImg = document.querySelector('.profile-img');
  if (profileImg) {
    profileImg.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
      this.style.transition = 'transform 0.3s ease';
    });
    
    profileImg.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  updateLastUpdated();
  setupLinkTracking();
  setupProfileImage();
  
  // Optional: Add a subtle fade-in animation
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});