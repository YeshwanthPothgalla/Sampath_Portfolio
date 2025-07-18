// Professional Portfolio Animations and Interactions

class PortfolioManager {
  constructor() {
    this.init();
  }

  init() {
    this.setupScrollAnimations();
    this.setupVideoInteractions();
    this.setupNavigation();
    this.setupFormHandling();
    this.setupPerformanceOptimizations();
  }

  // Scroll-triggered animations
  setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
      observer.observe(el);
    });
  }

  // Video interactions and optimizations
  setupVideoInteractions() {
    const portfolioVideos = document.querySelectorAll('.portfolio-video');
    
    portfolioVideos.forEach(video => {
      const container = video.closest('.portfolio-item');
      
      // Play video on hover
      container.addEventListener('mouseenter', () => {
        video.play().catch(e => console.log('Video play failed:', e));
      });
      
      // Pause video when not hovering
      container.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
      });
      
      // Handle video loading errors
      video.addEventListener('error', () => {
        this.handleVideoError(video);
      });
      
      // Lazy load videos
      this.setupVideoLazyLoading(video);
    });

    // Hero video handling
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
      heroVideo.addEventListener('error', () => {
        this.handleVideoError(heroVideo);
      });
    }
  }

  // Lazy loading for videos
  setupVideoLazyLoading(video) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const video = entry.target;
          const sources = video.querySelectorAll('source');
          
          sources.forEach(source => {
            if (source.dataset.src) {
              source.src = source.dataset.src;
            }
          });
          
          video.load();
          observer.unobserve(video);
        }
      });
    });

    observer.observe(video);
  }

  // Handle video loading errors
  handleVideoError(video) {
    const container = video.parentElement;
    const poster = video.getAttribute('poster');
    
    if (poster) {
      // Replace video with poster image
      const img = document.createElement('img');
      img.src = poster;
      img.className = video.className;
      img.style.objectFit = 'cover';
      img.alt = 'Video thumbnail';
      
      container.replaceChild(img, video);
    }
  }

  // Navigation functionality
  setupNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        navbar.style.background = 'rgba(26, 26, 26, 0.98)';
      } else {
        navbar.style.background = 'rgba(26, 26, 26, 0.95)';
      }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        
        if (target) {
          const offsetTop = target.offsetTop - 80; // Account for fixed navbar
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });

    // Mobile menu toggle (basic implementation)
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', () => {
        // Add mobile menu functionality here
        console.log('Mobile menu clicked');
      });
    }
  }

  // Contact form handling
  setupFormHandling() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleFormSubmission(contactForm);
      });
    }
  }

  handleFormSubmission(form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
      // Reset button
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      
      // Show success message
      this.showNotification('Thank you! Your message has been sent successfully.', 'success');
      
      // Reset form
      form.reset();
    }, 2000);
  }

  // Show notification messages
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full`;
    
    // Set notification style based on type
    switch(type) {
      case 'success':
        notification.classList.add('bg-green-600', 'text-white');
        break;
      case 'error':
        notification.classList.add('bg-red-600', 'text-white');
        break;
      default:
        notification.classList.add('bg-blue-600', 'text-white');
    }
    
    notification.innerHTML = `
      <div class="flex items-center gap-3">
        <i class="fas fa-${type === 'success' ? 'check' : type === 'error' ? 'exclamation' : 'info'}-circle"></i>
        <span>${message}</span>
        <button class="ml-2 hover:opacity-70" onclick="this.parentElement.parentElement.remove()">
          <i class="fas fa-times"></i>
        </button>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
      notification.classList.remove('translate-x-full');
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      notification.classList.add('translate-x-full');
      setTimeout(() => {
        if (notification.parentElement) {
          notification.remove();
        }
      }, 300);
    }, 5000);
  }

  // Performance optimizations
  setupPerformanceOptimizations() {
    // Preload critical images
    this.preloadCriticalImages();
    
    // Optimize scroll performance
    this.optimizeScrollPerformance();
    
    // Monitor performance
    this.monitorPerformance();
  }

  preloadCriticalImages() {
    const criticalImages = [
      'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
    ];
    
    criticalImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }

  optimizeScrollPerformance() {
    let ticking = false;
    
    const updateScrollEffects = () => {
      // Add any scroll-based effects here
      ticking = false;
    };
    
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
      }
    });
  }

  monitorPerformance() {
    // Monitor video loading performance
    const videos = document.querySelectorAll('video');
    
    videos.forEach(video => {
      video.addEventListener('loadstart', () => {
        console.log('Video loading started');
      });
      
      video.addEventListener('canplaythrough', () => {
        console.log('Video ready to play');
      });
      
      video.addEventListener('error', (e) => {
        console.error('Video loading error:', e);
      });
    });
  }
}

// Utility functions
class Utils {
  static debounce(func, wait) {
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

  static throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new PortfolioManager();
});

// Handle page load
window.addEventListener('load', () => {
  // Remove any loading states
  document.body.classList.add('loaded');
  
  // Trigger initial animations
  setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add('visible');
      }
    });
  }, 100);
});