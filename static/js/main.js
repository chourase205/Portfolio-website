// Main Interactive JavaScript for Mayuri Chourase Portfolio

function initPortfolio() {
  // Initialize Lucide Icons if available
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    try {
      lucide.createIcons();
    } catch (e) {
      console.warn('Lucide icon initialization note:', e);
    }
  }

  // --- Theme Management (Dark / Light Mode) ---
  const htmlEl = document.documentElement;

  function applyTheme(theme) {
    const sunIcons = document.querySelectorAll('.theme-icon-sun');
    const moonIcons = document.querySelectorAll('.theme-icon-moon');
    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');

    if (theme === 'light') {
      htmlEl.classList.remove('dark');
      htmlEl.classList.add('light');
      htmlEl.setAttribute('data-theme', 'light');
      localStorage.setItem('portfolio-theme', 'light');
      localStorage.setItem('theme', 'light');

      // In Light Mode: Show Moon icon (click to switch to Dark Mode)
      sunIcons.forEach(el => el.classList.add('hidden'));
      moonIcons.forEach(el => el.classList.remove('hidden'));
      toggleBtns.forEach(btn => btn.setAttribute('title', 'Switch to Dark Mode'));
    } else {
      htmlEl.classList.remove('light');
      htmlEl.classList.add('dark');
      htmlEl.setAttribute('data-theme', 'dark');
      localStorage.setItem('portfolio-theme', 'dark');
      localStorage.setItem('theme', 'dark');

      // In Dark Mode: Show Sun icon (click to switch to Light Mode)
      sunIcons.forEach(el => el.classList.remove('hidden'));
      moonIcons.forEach(el => el.classList.add('hidden'));
      toggleBtns.forEach(btn => btn.setAttribute('title', 'Switch to Light Mode'));
    }

    // Notify listeners (e.g. Three.js canvas particles)
    window.dispatchEvent(new CustomEvent('portfolioThemeChange', { detail: { theme } }));
  }

  // Read saved theme, default to dark
  const savedTheme = localStorage.getItem('portfolio-theme') || localStorage.getItem('theme') || 'dark';
  applyTheme(savedTheme);

  // Attach click listener to all theme toggle buttons
  document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const isCurrentlyDark = htmlEl.classList.contains('dark');
      applyTheme(isCurrentlyDark ? 'light' : 'dark');
    });
  });

  // --- Navbar Scroll Styling ---
  const navbar = document.getElementById('navbar');
  const handleScroll = () => {
    if (!navbar) return;
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --- Mobile Drawer Menu ---
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuCloseBtn = document.getElementById('mobile-menu-close-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileDrawerBackdrop = document.getElementById('mobile-drawer-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  const openMobileMenu = () => {
    if (mobileDrawer) mobileDrawer.classList.remove('hidden');
    if (mobileDrawerBackdrop) mobileDrawerBackdrop.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileMenu = () => {
    if (mobileDrawer) mobileDrawer.classList.add('hidden');
    if (mobileDrawerBackdrop) mobileDrawerBackdrop.classList.add('hidden');
    document.body.style.overflow = '';
  };

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileMenu);
  if (mobileMenuCloseBtn) mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);
  if (mobileDrawerBackdrop) mobileDrawerBackdrop.addEventListener('click', closeMobileMenu);
  mobileLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

  // --- Resume Download Confetti Trigger ---
  document.querySelectorAll('.resume-download-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.75 },
          colors: ['#00f0ff', '#38bdf8', '#818cf8', '#a855f7']
        });
      }
      alert("Resume download initiated! (Connect your PDF URL in the Django admin or views.py)");
    });
  });

  // --- Scroll Spy for Active Navigation Link ---
  const sections = ['hero', 'about', 'education', 'skills', 'projects', 'experience', 'certifications', 'contact'];
  const navLinks = document.querySelectorAll('.desktop-nav-link');

  const updateActiveNavLink = () => {
    let currentSection = '';
    const scrollPosition = window.scrollY + 200;

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          currentSection = id;
        }
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      const indicator = link.querySelector('.nav-pill-indicator');
      if (href === `#${currentSection}`) {
        link.classList.add('active-link');
        if (indicator) indicator.classList.remove('hidden');
      } else {
        link.classList.remove('active-link');
        if (indicator) indicator.classList.add('hidden');
      }
    });
  };

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
  updateActiveNavLink();
}

// Execute immediately if DOM is already ready, or wait for DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPortfolio);
} else {
  initPortfolio();
}
