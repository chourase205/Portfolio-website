// Three.js 3D Interactive Constellation & Sparkling White Dots Background
(function () {
  const container = document.getElementById('three-bg-canvas');
  if (!container || typeof THREE === 'undefined') return;

  // Clear any existing canvas
  container.innerHTML = '';

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 32;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0); // Transparent canvas background
  container.appendChild(renderer.domElement);

  // Soft Circular Glow Texture generator (makes dots look like glowing round stars)
  function createParticleTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');

    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.25, 'rgba(255, 255, 255, 0.9)');
    gradient.addColorStop(0.55, 'rgba(255, 255, 255, 0.35)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }

  const particleTexture = createParticleTexture();

  // Particle Settings
  const particleCount = 320;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  // Color palettes
  const darkPalette = {
    white: new THREE.Color('#ffffff'),
    cyan: new THREE.Color('#00f0ff'),
    sky: new THREE.Color('#38bdf8'),
    indigo: new THREE.Color('#818cf8')
  };

  const lightPalette = {
    cyan: new THREE.Color('#0284c7'),
    indigo: new THREE.Color('#6366f1'),
    sky: new THREE.Color('#0ea5e9'),
    slate: new THREE.Color('#64748b')
  };

  // Assign random initial 3D positions
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 95;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 95;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 65;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  // Points Material
  const material = new THREE.PointsMaterial({
    size: 2.0,
    map: particleTexture,
    vertexColors: true,
    transparent: true,
    opacity: 0.9,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const particleSystem = new THREE.Points(geometry, material);
  scene.add(particleSystem);

  // Update particle colors according to current theme
  function updateParticleColors(isLight) {
    const colorAttr = geometry.attributes.color;
    for (let i = 0; i < particleCount; i++) {
      const rand = Math.random();
      let c;

      if (isLight) {
        // Light mode: High-contrast cyan, indigo, sky blue, and slate dots
        c = rand < 0.45 ? lightPalette.cyan : rand < 0.75 ? lightPalette.indigo : rand < 0.9 ? lightPalette.sky : lightPalette.slate;
      } else {
        // Dark mode: 65% Brilliant White Sparkling Dots, 25% Electric Cyan, 10% Sky/Indigo
        c = rand < 0.65 ? darkPalette.white : rand < 0.90 ? darkPalette.cyan : rand < 0.96 ? darkPalette.sky : darkPalette.indigo;
      }

      colorAttr.setXYZ(i, c.r, c.g, c.b);
    }
    colorAttr.needsUpdate = true;

    if (isLight) {
      material.blending = THREE.NormalBlending;
      material.opacity = 0.65;
      material.size = 2.4;
    } else {
      material.blending = THREE.AdditiveBlending;
      material.opacity = 0.92;
      material.size = 2.0;
    }
    material.needsUpdate = true;
  }

  // Initial Theme Check
  const isInitiallyLight = document.documentElement.classList.contains('light');
  updateParticleColors(isInitiallyLight);

  // Listen for theme change events
  window.addEventListener('portfolioThemeChange', (e) => {
    updateParticleColors(e.detail && e.detail.theme === 'light');
  });

  // Also observe html class changes as a fallback
  const observer = new MutationObserver(() => {
    const isLightNow = document.documentElement.classList.contains('light');
    updateParticleColors(isLightNow);
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

  // Mouse Parallax Effect (smooth damping)
  let targetMouseX = 0;
  let targetMouseY = 0;
  let currentMouseX = 0;
  let currentMouseY = 0;

  window.addEventListener('mousemove', (e) => {
    targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  }, { passive: true });

  // Window Resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // Animation Loop with Clock
  const clock = new THREE.Clock();
  function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    // Smooth lerp mouse parallax
    currentMouseX += (targetMouseX - currentMouseX) * 0.05;
    currentMouseY += (targetMouseY - currentMouseY) * 0.05;

    // Slow organic 3D rotation
    particleSystem.rotation.y = elapsedTime * 0.035 + currentMouseX * 0.08;
    particleSystem.rotation.x = elapsedTime * 0.018 - currentMouseY * 0.08;

    renderer.render(scene, camera);
  }

  animate();
})();
