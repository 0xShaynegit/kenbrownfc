/**
 * Ken Brown Financial Consultant - Global Navigation Handler
 * Handles: Mobile drawer open/close, mega menu, scroll effects, keyboard navigation
 */

(function() {
    'use strict';

    // Get all navigation elements
    const navbar = document.getElementById('navbar');
    const navbarToggle = document.getElementById('navbar-toggle');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const drawerClose = document.getElementById('mobile-drawer-close');
    const servicesTrigger = document.getElementById('services-menu-trigger');
    const navHasMega = document.querySelector('.nav-has-mega');

    // Navbar scroll effect - adds 'scrolled' class after 50px
    window.addEventListener('scroll', () => {
        if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        }
    });

    // Open mobile drawer
    function openDrawer() {
        if (!mobileDrawer) return;
        mobileDrawer.classList.add('open');
        if (mobileOverlay) mobileOverlay.classList.add('open');
        mobileDrawer.setAttribute('aria-hidden', 'false');
        if (mobileOverlay) mobileOverlay.setAttribute('aria-hidden', 'false');
        if (navbarToggle) {
            navbarToggle.setAttribute('aria-expanded', 'true');
            navbarToggle.classList.add('active');
        }
        document.body.style.overflow = 'hidden';
        mobileDrawer.focus();
    }

    // Close mobile drawer
    function closeDrawer() {
        if (!mobileDrawer) return;
        mobileDrawer.classList.remove('open');
        if (mobileOverlay) mobileOverlay.classList.remove('open');
        mobileDrawer.setAttribute('aria-hidden', 'true');
        if (mobileOverlay) mobileOverlay.setAttribute('aria-hidden', 'true');
        if (navbarToggle) {
            navbarToggle.setAttribute('aria-expanded', 'false');
            navbarToggle.classList.remove('active');
        }
        document.body.style.overflow = '';
        if (navbarToggle) navbarToggle.focus();
    }

    // Toggle drawer on hamburger click
    if (navbarToggle) {
        navbarToggle.addEventListener('click', () => {
            mobileDrawer && mobileDrawer.classList.contains('open') ? closeDrawer() : openDrawer();
        });
    }

    // Close drawer on X button click
    if (drawerClose) {
        drawerClose.addEventListener('click', closeDrawer);
    }

    // Close drawer when clicking overlay
    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', closeDrawer);
    }

    // Close drawer when any link inside is clicked
    if (mobileDrawer) {
        mobileDrawer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeDrawer);
        });
    }

    // Escape key closes drawer and mega menu
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            if (mobileDrawer && mobileDrawer.classList.contains('open')) {
                closeDrawer();
            }
            if (servicesTrigger) {
                servicesTrigger.setAttribute('aria-expanded', 'false');
            }
        }
    });

    // Desktop mega menu handling
    if (servicesTrigger && navHasMega) {
        // Show menu on hover
        navHasMega.addEventListener('mouseenter', () => {
            servicesTrigger.setAttribute('aria-expanded', 'true');
        });

        // Hide menu on mouse leave
        navHasMega.addEventListener('mouseleave', () => {
            servicesTrigger.setAttribute('aria-expanded', 'false');
        });

        // Show menu on focus
        navHasMega.addEventListener('focusin', () => {
            servicesTrigger.setAttribute('aria-expanded', 'true');
        });

        // Hide menu when focus leaves
        navHasMega.addEventListener('focusout', e => {
            if (!navHasMega.contains(e.relatedTarget)) {
                servicesTrigger.setAttribute('aria-expanded', 'false');
            }
        });

        // Close mega menu when clicking outside (tablet/iPad support)
        document.addEventListener('click', e => {
            if (!navHasMega.contains(e.target) && !servicesTrigger.contains(e.target)) {
                servicesTrigger.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
})();
