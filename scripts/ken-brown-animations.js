/**
 * Ken Brown Financial Consultant - Conversion-Focused Animations
 * Uses GSAP ScrollTrigger for scroll-triggered reveals
 * Respects prefers-reduced-motion for accessibility
 */

// Check for reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ============================================================
// 1. SCROLL PROGRESS BAR
// ============================================================
function initScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress-bar';
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    progressBar.style.width = progress + '%';
  });
}

// ============================================================
// 2. HERO ENTRANCE ANIMATIONS
// ============================================================
function initHeroAnimations() {
  const heroTitle = document.querySelector('.hero-title');
  const heroSubtitle = document.querySelector('.hero-subtitle');
  const heroButtons = document.querySelector('.hero-buttons');

  if (!heroTitle) return;

  if (prefersReducedMotion) {
    // No animations for users who prefer reduced motion
    heroTitle.style.opacity = '1';
    if (heroSubtitle) heroSubtitle.style.opacity = '1';
    if (heroButtons) heroButtons.style.opacity = '1';
    return;
  }

  // Set initial state
  heroTitle.style.opacity = '0';
  heroTitle.style.transform = 'translateY(30px)';
  if (heroSubtitle) {
    heroSubtitle.style.opacity = '0';
    heroSubtitle.style.transform = 'translateY(30px)';
  }
  if (heroButtons) {
    heroButtons.style.opacity = '0';
    heroButtons.style.transform = 'scale(0.9)';
  }

  // Staggered entrance
  setTimeout(() => {
    heroTitle.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    heroTitle.style.opacity = '1';
    heroTitle.style.transform = 'translateY(0)';

    // Add glow effect to title
    heroTitle.style.textShadow = '0 0 20px rgba(212, 165, 116, 0.3)';
  }, 200);

  setTimeout(() => {
    if (heroSubtitle) {
      heroSubtitle.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      heroSubtitle.style.opacity = '1';
      heroSubtitle.style.transform = 'translateY(0)';
    }
  }, 400);

  setTimeout(() => {
    if (heroButtons) {
      heroButtons.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      heroButtons.style.opacity = '1';
      heroButtons.style.transform = 'scale(1)';
    }
  }, 600);

  // Glow pulse effect on hero buttons
  const buttons = document.querySelectorAll('.hero-buttons .btn-primary');
  buttons.forEach((btn, index) => {
    btn.style.transition = 'all 0.3s ease';
    btn.addEventListener('mouseenter', () => {
      btn.style.boxShadow = '0 0 25px rgba(212, 165, 116, 0.5), 0 0 40px rgba(255, 140, 66, 0.3)';
      btn.style.transform = 'translateY(-3px)';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.boxShadow = 'var(--shadow-md, 0 2px 8px rgba(0, 0, 0, 0.1))';
      btn.style.transform = 'translateY(0)';
    });
  });
}

// ============================================================
// 3. SERVICE CARDS STAGGER REVEAL
// ============================================================
function initServiceCardAnimations() {
  const serviceCards = document.querySelectorAll('.service-card');

  if (!serviceCards.length) return;

  if (prefersReducedMotion) {
    serviceCards.forEach(card => {
      card.style.opacity = '1';
    });
    return;
  }

  // Set initial state for all cards
  serviceCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
  });

  // Use Intersection Observer for scroll reveal
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
        entry.target.classList.add('animated');
        setTimeout(() => {
          entry.target.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100); // Stagger delay
      }
    });
  }, observerOptions);

  serviceCards.forEach(card => observer.observe(card));
}

// ============================================================
// 4. ABOUT SECTION PARALLAX & FADE
// ============================================================
function initAboutSectionAnimations() {
  const aboutSection = document.querySelector('.about-ken-section');
  const kenImage = document.querySelector('.ken-image img');
  const kenBio = document.querySelector('.ken-bio');

  if (!aboutSection) return;

  if (prefersReducedMotion) {
    if (kenImage) kenImage.style.opacity = '1';
    if (kenBio) kenBio.style.opacity = '1';
    return;
  }

  // Parallax effect on image
  if (kenImage) {
    kenImage.style.willChange = 'transform';

    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          window.addEventListener('scroll', () => {
            const rect = entry.target.getBoundingClientRect();
            const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
            const parallaxAmount = (scrollProgress - 0.5) * 20; // -10px to +10px
            entry.target.style.transform = `translateY(${parallaxAmount}px)`;
          });
        }
      });
    }, observerOptions);

    observer.observe(kenImage);
  }

  // Fade in bio text
  if (kenBio) {
    kenBio.style.opacity = '0';

    const bioObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
          entry.target.classList.add('animated');
          entry.target.style.transition = 'opacity 0.8s ease';
          entry.target.style.opacity = '1';
        }
      });
    }, { threshold: 0.3 });

    bioObserver.observe(kenBio);
  }
}

// ============================================================
// 5. TRUST SIGNALS - GLOW PULSE
// ============================================================
function initTrustSignalAnimations() {
  // Badge pulse effects
  const badges = document.querySelectorAll('.location-badge, .expertise-box');

  if (!badges.length) return;

  if (prefersReducedMotion) return;

  badges.forEach(badge => {
    badge.style.transition = 'all 0.3s ease';

    const observerOptions = {
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add subtle pulse animation via CSS
          entry.target.style.animation = 'trustGlow 2s ease-in-out infinite';
        }
      });
    }, observerOptions);

    observer.observe(badge);
  });
}

// ============================================================
// 6. CONTACT CTA BUTTON - RIPPLE & ENTRANCE
// ============================================================
function initContactCTAAnimations() {
  const contactSection = document.querySelector('#contact');

  if (!contactSection) return;

  const ctaButtons = contactSection.querySelectorAll('.btn-primary');

  if (!ctaButtons.length) return;

  if (!prefersReducedMotion) {
    // Fade in buttons on scroll
    ctaButtons.forEach((btn, index) => {
      btn.style.opacity = '0';
      btn.style.transform = 'scale(0.9)';

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            setTimeout(() => {
              entry.target.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'scale(1)';
            }, index * 100);
          }
        });
      }, { threshold: 0.5 });

      observer.observe(btn);
    });
  }

  // Ripple effect on click
  ctaButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      if (prefersReducedMotion) return;

      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');

      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });

    // Glow effect on hover
    btn.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 0 30px rgba(212, 165, 116, 0.6), 0 0 50px rgba(255, 140, 66, 0.4)';
      this.style.transform = 'translateY(-4px)';
    });

    btn.addEventListener('mouseleave', function() {
      this.style.boxShadow = 'var(--shadow-md, 0 2px 8px rgba(0, 0, 0, 0.1))';
      this.style.transform = 'translateY(0)';
    });
  });
}

// ============================================================
// 7. INITIALIZE ALL ANIMATIONS ON DOM READY
// ============================================================
function initAllAnimations() {
  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startAnimations);
  } else {
    startAnimations();
  }
}

function startAnimations() {
  initScrollProgress();
  initHeroAnimations();
  initServiceCardAnimations();
  initAboutSectionAnimations();
  initTrustSignalAnimations();
  initContactCTAAnimations();
}

// Start animations
initAllAnimations();
