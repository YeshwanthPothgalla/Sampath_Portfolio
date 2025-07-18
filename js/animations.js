// Advanced animations and interactive features

class PortfolioAnimations {
  constructor() {
    this.init();
  }

  init() {
    this.setupParticles();
    this.setupVideoLazyLoading();
    this.setupAdvancedScrollEffects();
    this.setupTypewriterEffect();
    this.setupVideoPlayOverlays();
  }

  // Create floating particles background
  setupParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles fixed inset-0 pointer-events-none';
    document.body.appendChild(particlesContainer);

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.width = Math.random() * 4 + 2 + 'px';
      particle.style.height = particle.style.width;
      particle.style.animationDelay = Math.random() * 20 + 's';
      particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
      particlesContainer.appendChild(particle);
    }
  }

  // Lazy load videos for better performance
  setupVideoLazyLoading() {
    const videos = document.querySelectorAll('video[data-src]');
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const video = entry.target;
          video.src = video.dataset.src;
          video.load();
          videoObserver.unobserve(video);
        }
      });
    });

    videos.forEach(video => videoObserver.observe(video));
  }

  // Advanced scroll-triggered animations
  setupAdvancedScrollEffects() {
    const scrollElements = document.querySelectorAll('[data-scroll]');
    
    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const animationType = element.dataset.scroll;
          
          switch(animationType) {
            case 'slide-left':
              element.style.transform = 'translateX(0)';
              element.style.opacity = '1';
              break;
            case 'slide-right':
              element.style.transform = 'translateX(0)';
              element.style.opacity = '1';
              break;
            case 'zoom-in':
              element.style.transform = 'scale(1)';
              element.style.opacity = '1';
              break;
            case 'rotate-in':
              element.style.transform = 'rotate(0deg) scale(1)';
              element.style.opacity = '1';
              break;
          }
        }
      });
    }, { threshold: 0.1 });

    scrollElements.forEach(el => scrollObserver.observe(el));
  }

  // Typewriter effect for hero text
  setupTypewriterEffect() {
    const typewriterElements = document.querySelectorAll('.typewriter');
    
    typewriterElements.forEach(element => {
      const text = element.textContent;
      element.textContent = '';
      element.style.borderRight = '2px solid #3b82f6';
      
      let i = 0;
      const typeInterval = setInterval(() => {
        element.textContent += text.charAt(i);
        i++;
        
        if (i >= text.length) {
          clearInterval(typeInterval);
          // Remove cursor after typing is complete
          setTimeout(() => {
            element.style.borderRight = 'none';
          }, 1000);
        }
      }, 100);
    });
  }

  // Video play overlays
  setupVideoPlayOverlays() {
    const videoContainers = document.querySelectorAll('.video-container');
    
    videoContainers.forEach(container => {
      const iframe = container.querySelector('iframe');
      if (iframe) {
        const overlay = document.createElement('div');
        overlay.className = 'video-play-overlay';
        overlay.innerHTML = '<i class="fas fa-play text-white text-2xl"></i>';
        
        overlay.addEventListener('click', () => {
          // Add autoplay parameter to iframe src
          const src = iframe.src;
          if (src.includes('youtube.com')) {
            iframe.src = src + (src.includes('?') ? '&' : '?') + 'autoplay=1';
          }
          overlay.style.display = 'none';
        });
        
        container.appendChild(overlay);
      }
    });
  }
}

// Smooth scroll with easing
class SmoothScroll {
  constructor() {
    this.setupSmoothScroll();
  }

  setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        
        if (target) {
          const targetPosition = target.offsetTop - 80; // Account for fixed navbar
          const startPosition = window.pageYOffset;
          const distance = targetPosition - startPosition;
          const duration = 1000;
          let start = null;

          const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const ease = this.easeInOutCubic(progress / duration);
            
            window.scrollTo(0, startPosition + distance * ease);
            
            if (progress < duration) {
              window.requestAnimationFrame(step);
            }
          };

          window.requestAnimationFrame(step);
        }
      });
    });
  }

  easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }
}

// Performance monitoring
class PerformanceMonitor {
  constructor() {
    this.monitorPerformance();
  }

  monitorPerformance() {
    // Monitor video loading
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      video.addEventListener('loadstart', () => {
        console.log('Video loading started');
      });
      
      video.addEventListener('canplaythrough', () => {
        console.log('Video can play through');
      });
      
      video.addEventListener('error', (e) => {
        console.error('Video error:', e);
        this.handleVideoError(video);
      });
    });
  }

  handleVideoError(video) {
    // Fallback to image if video fails
    const fallbackImage = document.createElement('img');
    fallbackImage.src = 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop';
    fallbackImage.className = video.className;
    fallbackImage.style.objectFit = 'cover';
    
    video.parentNode.replaceChild(fallbackImage, video);
  }
}

// Initialize all animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new PortfolioAnimations();
  new SmoothScroll();
  new PerformanceMonitor();
});

// Preloader
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  }
});