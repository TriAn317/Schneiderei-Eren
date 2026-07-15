// Schneiderei Eren — Interaktion
(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Jahr im Footer ---- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Header: Hintergrund bei Scroll ---- */
  const header = document.getElementById('site-header');
  const onHeaderScroll = () => {
    if (window.scrollY > 40) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  };
  onHeaderScroll();
  document.addEventListener('scroll', onHeaderScroll, { passive: true });

  /* ---- Mobiles Menü ---- */
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      navToggle.classList.toggle('is-open', open);
      navToggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        navToggle.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- Scroll-Reveal ---- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    // Reduced motion oder kein Support: sofort sichtbar
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---- Faden-/Nadel-Scrollanzeige ---- */
  const needle = document.querySelector('.thread-rail__needle');
  const rail = document.querySelector('.thread-rail__svg');
  if (needle && rail && !reduceMotion) {
    let ticking = false;
    const updateNeedle = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      const fraction = maxScroll > 0 ? Math.min(Math.max(scrollTop / maxScroll, 0), 1) : 0;
      const railRect = rail.getBoundingClientRect();
      const top = railRect.top + railRect.height * fraction;
      needle.style.top = `${top}px`;
      ticking = false;
    };
    updateNeedle();
    document.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNeedle);
        ticking = true;
      }
    }, { passive: true });
    window.addEventListener('resize', updateNeedle);
  }

  /* ---- Dezentes Parallax für Galerie-Bilder ---- */
  const parallaxImgs = document.querySelectorAll('.parallax-img');
  if (parallaxImgs.length && !reduceMotion) {
    let ticking2 = false;
    const updateParallax = () => {
      const vh = window.innerHeight;
      parallaxImgs.forEach((img) => {
        const rect = img.parentElement.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const offset = ((center - vh / 2) / vh) * -24; // max ~24px Verschiebung
        img.style.transform = `translateY(${offset.toFixed(1)}px) scale(1.08)`;
      });
      ticking2 = false;
    };
    updateParallax();
    document.addEventListener('scroll', () => {
      if (!ticking2) {
        window.requestAnimationFrame(updateParallax);
        ticking2 = true;
      }
    }, { passive: true });
    window.addEventListener('resize', updateParallax);
  }
})();
