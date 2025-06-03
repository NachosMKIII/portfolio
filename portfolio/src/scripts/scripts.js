// Fantasy Portfolio JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Initialize components
  initTextbox();
  initNavigation();
  initThemeToggle();
  initMobileMenu();
  initMagicalEffects();
});

// Textbox functionality
function initTextbox() {
  const messageInput = document.getElementById("message-input");
  const messageDisplay = document.getElementById("message-display");
  const defaultText =
    "The ancient texts shall appear here, once you've inscribed your message below...";

  messageInput.addEventListener("input", function () {
    const message = this.value.trim();
    messageDisplay.textContent = message || defaultText;

    // Add magical effect when typing
    if (message) {
      messageDisplay.classList.add("mystical-glow");
    } else {
      messageDisplay.classList.remove("mystical-glow");
    }
  });

  // Add focus effects
  messageInput.addEventListener("focus", function () {
    this.parentElement.parentElement.classList.add("mystical-glow");
  });

  messageInput.addEventListener("blur", function () {
    this.parentElement.parentElement.classList.remove("mystical-glow");
  });
}

// Navigation functionality
function initNavigation() {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove active class from all links
      navLinks.forEach((l) => l.classList.remove("active"));

      // Add active class to clicked link
      this.classList.add("active");

      // Add magical effect
      this.style.textShadow = "0 0 10px rgba(139, 92, 246, 0.8)";
      setTimeout(() => {
        this.style.textShadow = "";
      }, 1000);

      console.log(`Navigating to: ${this.textContent}`);
    });
  });
}

// Theme toggle functionality
function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  let isDark = true;

  themeToggle.addEventListener("click", function () {
    isDark = !isDark;

    if (isDark) {
      // Switch to dark theme (current)
      document.body.className =
        "min-h-screen bg-gradient-to-b from-slate-900 to-indigo-950 font-serif";
      this.innerHTML = `
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                </svg>
            `;
    } else {
      // Switch to light theme
      document.body.className =
        "min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 font-serif";
      this.innerHTML = `
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
            `;
    }

    // Add magical transition effect
    this.classList.add("mystical-glow");
    setTimeout(() => {
      this.classList.remove("mystical-glow");
    }, 1000);
  });
}

// Mobile menu functionality
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const nav = document.querySelector("nav");
  let isMenuOpen = false;

  mobileMenuBtn.addEventListener("click", function () {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
      // Show mobile menu
      nav.classList.add("mobile-menu", "active");
      this.innerHTML = `
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            `;
    } else {
      // Hide mobile menu
      nav.classList.remove("mobile-menu", "active");
      this.innerHTML = `
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            `;
    }
  });
}

// Magical effects
function initMagicalEffects() {
  // Add hover effects to ornamental elements
  const ornaments = document.querySelectorAll(".w-6.h-6, .w-8.h-8");

  ornaments.forEach((ornament) => {
    ornament.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.1) rotate(5deg)";
      this.style.transition = "transform 0.3s ease";
    });

    ornament.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1) rotate(0deg)";
    });
  });

  // Add magical sparkle effect on scroll
  let ticking = false;

  function updateScrollEffects() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;

    // Add subtle parallax to decorative elements
    const decorativeElements = document.querySelectorAll(".fantasy-border");
    decorativeElements.forEach((element) => {
      element.style.transform = `translateY(${rate * 0.1}px)`;
    });

    ticking = false;
  }

  function requestScrollUpdate() {
    if (!ticking) {
      requestAnimationFrame(updateScrollEffects);
      ticking = true;
    }
  }

  window.addEventListener("scroll", requestScrollUpdate);

  // Add typing sound effect simulation
  const messageInput = document.getElementById("message-input");
  messageInput.addEventListener("keydown", function () {
    // Visual feedback for typing
    this.style.boxShadow = "0 0 15px rgba(139, 92, 246, 0.4)";
    setTimeout(() => {
      this.style.boxShadow = "";
    }, 100);
  });
}

// Utility functions
function addMagicalEffect(element, duration = 1000) {
  element.classList.add("mystical-glow");
  setTimeout(() => {
    element.classList.remove("mystical-glow");
  }, duration);
}

// Console welcome message
console.log(`
🧙‍♂️ Welcome to the Mystical Realms Portfolio! 🧙‍♂️
═══════════════════════════════════════════════════
✨ Built with vanilla JavaScript and Tailwind CSS
🎨 Featuring custom scrollbars and magical effects
🌟 Responsive design with mobile-first approach
📜 Interactive elements with smooth animations
═══════════════════════════════════════════════════
`);
