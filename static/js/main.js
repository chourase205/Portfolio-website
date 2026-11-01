// Main JavaScript for Portfolio Web Application
document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle (Dark / Light Mode)
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const htmlEl = document.documentElement;

  // Saved theme or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'light') {
    htmlEl.classList.remove('dark');
    htmlEl.classList.add('light');
  } else {
    htmlEl.classList.add('dark');
    htmlEl.classList.remove('light');
  }

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (htmlEl.classList.contains('dark')) {
        htmlEl.classList.remove('dark');
        htmlEl.classList.add('light');
        localStorage.setItem('theme', 'light');
      } else {
        htmlEl.classList.remove('light');
        htmlEl.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    });
  });

  // Mobile Drawer Menu
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.add('hidden');
      });
    });
  }

  // Resume Download Confetti Effect
  const resumeBtn = document.getElementById('resume-download-btn');
  if (resumeBtn && typeof confetti === 'function') {
    resumeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#00f0ff', '#38bdf8', '#818cf8', '#a855f7']
      });
      alert("Resume download initiated! Mayuri Chourase's resume details are loaded on this portfolio.");
    });
  }

  // Interactive 3D Perspective Tilt on Mouse Movement
  const tiltCard = document.getElementById('interactive-tilt-card');
  if (tiltCard) {
    tiltCard.addEventListener('mousemove', (e) => {
      const rect = tiltCard.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      tiltCard.style.transform = `rotateX(${-y * 12}deg) rotateY(${x * 14}deg)`;
    });

    tiltCard.addEventListener('mouseleave', () => {
      tiltCard.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
  }

  // Skill Filter Category Tabs
  const skillCategoryBtns = document.querySelectorAll('.skill-tab-btn');
  const skillBlocks = document.querySelectorAll('.skill-category-block');

  skillCategoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetCat = btn.getAttribute('data-category');

      skillCategoryBtns.forEach(b => {
        b.classList.remove('bg-cyan-500', 'text-slate-950', 'font-bold');
        b.classList.add('bg-slate-800/80', 'text-slate-300');
      });
      btn.classList.remove('bg-slate-800/80', 'text-slate-300');
      btn.classList.add('bg-cyan-500', 'text-slate-950', 'font-bold');

      skillBlocks.forEach(block => {
        if (targetCat === 'all' || block.getAttribute('data-category') === targetCat) {
          block.style.display = 'block';
        } else {
          block.style.display = 'none';
        }
      });
    });
  });

  // Intersection Observer for Active Nav Link
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      const sectionTop = sec.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-cyan-400', 'font-bold');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-cyan-400', 'font-bold');
      }
    });
  });
});
