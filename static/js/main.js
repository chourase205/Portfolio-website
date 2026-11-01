// Interactive Vanilla JavaScript for Mayuri Chourase Portfolio

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }

  // --- Theme Toggle (Dark / Light Mode) ---
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const htmlEl = document.documentElement;

  const applyTheme = (theme) => {
    if (theme === 'light') {
      htmlEl.classList.remove('dark');
      htmlEl.classList.add('light');
      localStorage.setItem('portfolio-theme', 'light');
      document.querySelectorAll('.theme-icon-moon').forEach(el => el.classList.add('hidden'));
      document.querySelectorAll('.theme-icon-sun').forEach(el => el.classList.remove('hidden'));
    } else {
      htmlEl.classList.remove('light');
      htmlEl.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
      document.querySelectorAll('.theme-icon-moon').forEach(el => el.classList.remove('hidden'));
      document.querySelectorAll('.theme-icon-sun').forEach(el => el.classList.add('hidden'));
    }
  };

  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  applyTheme(savedTheme);

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isDark = htmlEl.classList.contains('dark');
      applyTheme(isDark ? 'light' : 'dark');
    });
  });

  // --- Navbar Scroll Blur Effect ---
  const navbar = document.getElementById('navbar');
  const handleScroll = () => {
    if (!navbar) return;
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled', 'py-3', 'bg-[#06080d]/90', 'backdrop-blur-xl', 'border-b', 'border-white/[0.08]', 'shadow-[0_4px_30px_rgba(0,0,0,0.7)]');
      navbar.classList.remove('py-5', 'bg-transparent');
    } else {
      navbar.classList.remove('scrolled', 'py-3', 'bg-[#06080d]/90', 'backdrop-blur-xl', 'border-b', 'border-white/[0.08]', 'shadow-[0_4px_30px_rgba(0,0,0,0.7)]');
      navbar.classList.add('py-5', 'bg-transparent');
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

  // --- Active Nav Indicator (ScrollSpy) ---
  const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
  const desktopLinks = document.querySelectorAll('.desktop-nav-link');

  const updateActiveNav = () => {
    let currentSection = 'hero';
    const scrollPos = window.scrollY + 200;

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollPos) {
        currentSection = id;
      }
    });

    desktopLinks.forEach(link => {
      const href = link.getAttribute('href');
      const pillIndicator = link.querySelector('.nav-pill-indicator');
      if (href === `#${currentSection}`) {
        link.classList.add('text-white', 'font-semibold');
        link.classList.remove('text-slate-400');
        if (pillIndicator) pillIndicator.classList.remove('hidden');
      } else {
        link.classList.remove('text-white', 'font-semibold');
        link.classList.add('text-slate-400');
        if (pillIndicator) pillIndicator.classList.add('hidden');
      }
    });
  };

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();

  // --- Confetti on Resume Download ---
  const resumeDownloadBtns = document.querySelectorAll('.resume-download-trigger');
  resumeDownloadBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 75,
          spread: 60,
          origin: { y: 0.75 },
          colors: ['#00f0ff', '#38bdf8', '#818cf8', '#a855f7']
        });
      }
      alert("Resume download initiated! Mayuri Chourase's software engineering credentials are ready.");
    });
  });

  // --- Smooth Scroll for Anchor Links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // --- Interactive Cybernetic Custom Cursor ---
  const cursorContainer = document.getElementById('custom-cursor-container');
  const cursorOuter = document.getElementById('custom-cursor-outer');
  const cursorInner = document.getElementById('custom-cursor-inner');

  const isFinePointer = window.matchMedia('(pointer: fine)').matches;

  if (isFinePointer && cursorContainer && cursorOuter && cursorInner) {
    cursorContainer.classList.remove('hidden');

    let mouseX = -100;
    let mouseY = -100;
    let outerX = -100;
    let outerY = -100;
    let isHovered = false;
    let isClicking = false;
    let isVisible = false;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        cursorContainer.style.opacity = '1';
      }
      cursorInner.style.left = `${mouseX}px`;
      cursorInner.style.top = `${mouseY}px`;
    }, { passive: true });

    window.addEventListener('mousedown', () => {
      isClicking = true;
      updateCursorAppearance();
    });

    window.addEventListener('mouseup', () => {
      isClicking = false;
      updateCursorAppearance();
    });

    document.addEventListener('mouseleave', () => {
      isVisible = false;
      cursorContainer.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
      isVisible = true;
      cursorContainer.style.opacity = '1';
    });

    const updateCursorAppearance = () => {
      if (isHovered) {
        cursorOuter.style.width = '48px';
        cursorOuter.style.height = '48px';
        cursorOuter.style.borderColor = '#00f0ff';
        cursorOuter.style.backgroundColor = 'rgba(0, 240, 255, 0.08)';
        cursorInner.style.width = '8px';
        cursorInner.style.height = '8px';
      } else if (isClicking) {
        cursorOuter.style.width = '26px';
        cursorOuter.style.height = '26px';
        cursorOuter.style.borderColor = 'rgba(56, 189, 248, 0.6)';
        cursorOuter.style.backgroundColor = 'transparent';
        cursorInner.style.width = '4px';
        cursorInner.style.height = '4px';
      } else {
        cursorOuter.style.width = '34px';
        cursorOuter.style.height = '34px';
        cursorOuter.style.borderColor = 'rgba(56, 189, 248, 0.45)';
        cursorOuter.style.backgroundColor = 'transparent';
        cursorInner.style.width = '6px';
        cursorInner.style.height = '6px';
      }
    };

    document.addEventListener('mouseover', (e) => {
      const target = e.target;
      if (!target) return;
      const interactive = target.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer');
      isHovered = !!interactive;
      updateCursorAppearance();
    });

    // Spring interpolation loop for smooth trailing ring
    function renderCursor() {
      // Spring physics lerp
      outerX += (mouseX - outerX) * 0.18;
      outerY += (mouseY - outerY) * 0.18;

      cursorOuter.style.left = `${outerX}px`;
      cursorOuter.style.top = `${outerY}px`;

      requestAnimationFrame(renderCursor);
    }
    renderCursor();
  }

  // --- Buoyant Micro-Bubbles Canvas Layer (ParticleBackground) ---
  const canvas = document.getElementById('particle-canvas');
  if (canvas && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const ctx = canvas.getContext('2d');
    if (ctx) {
      let width = (canvas.width = window.innerWidth);
      let height = (canvas.height = window.innerHeight);

      window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      });

      const bubbleCount = width < 768 ? 22 : 48;
      const bubbles = [];

      const colors = [
        'rgba(56, 189, 248, ', // electric blue
        'rgba(6, 182, 212, ',  // neon cyan
        'rgba(168, 85, 247, ', // purple
        'rgba(129, 140, 248, ',// indigo
        'rgba(16, 185, 129, '  // emerald
      ];

      for (let i = 0; i < bubbleCount; i++) {
        bubbles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 4 + 2,
          speed: Math.random() * 0.4 + 0.2,
          wobbleSpeed: Math.random() * 0.02 + 0.01,
          wobbleVal: Math.random() * Math.PI * 2,
          wobbleAmp: Math.random() * 0.5 + 0.25,
          baseAlpha: Math.random() * 0.35 + 0.15,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }

      function animateBubbles() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < bubbles.length; i++) {
          const b = bubbles[i];
          b.y -= b.speed;
          b.wobbleVal += b.wobbleSpeed;
          b.x += Math.sin(b.wobbleVal) * b.wobbleAmp;

          if (b.y < -20) {
            b.y = height + 20;
            b.x = Math.random() * width;
          }
          if (b.x < -20) b.x = width + 20;
          if (b.x > width + 20) b.x = -20;

          const currentAlpha = b.baseAlpha + Math.sin(b.wobbleVal * 1.5) * 0.1;
          const safeAlpha = Math.max(0.1, Math.min(0.65, currentAlpha));

          // Translucent sphere body
          ctx.beginPath();
          ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
          ctx.fillStyle = `${b.color}${safeAlpha * 0.25})`;
          ctx.fill();

          // Glowing outer rim
          ctx.lineWidth = 1;
          ctx.strokeStyle = `${b.color}${safeAlpha * 0.8})`;
          ctx.stroke();

          // Specular highlight reflection
          if (b.radius > 2.5) {
            ctx.beginPath();
            ctx.arc(
              b.x - b.radius * 0.3,
              b.y - b.radius * 0.3,
              b.radius * 0.25,
              0,
              Math.PI * 2
            );
            ctx.fillStyle = `rgba(255, 255, 255, ${safeAlpha * 0.85})`;
            ctx.fill();
          }
        }

        requestAnimationFrame(animateBubbles);
      }
      animateBubbles();
    }
  }
});
