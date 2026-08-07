// ==========================================================================
// SMILECRAFT DENTAL STUDIO — JavaScript Interactions
// ==========================================================================

document.addEventListener('DOMContentLoaded', function() {

  // ===== STICKY HEADER =====
  const header = document.querySelector('.site-header');
  const topBtn = document.querySelector('.to-top');

  window.addEventListener('scroll', function() {
    const scrolled = window.scrollY > 12;
    if (header) header.classList.toggle('scrolled', scrolled);
    if (topBtn) topBtn.classList.toggle('show', window.scrollY > 480);
  });

  // ===== MOBILE NAVIGATION =====
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.primary-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Close nav when clicking a link
    nav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ===== BACK TO TOP =====
  if (topBtn) {
    topBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===== SCROLL REVEAL ANIMATIONS =====
  const reveals = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && reveals.length) {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -30px 0px'
    });

    reveals.forEach(function(el) {
      observer.observe(el);
    });
  } else {
    // Fallback for older browsers
    reveals.forEach(function(el) {
      el.classList.add('in-view');
    });
  }

  // ===== FAQ ACCORDION =====
  document.querySelectorAll('.faq-item .faq-q').forEach(function(q) {
    q.addEventListener('click', function() {
      const item = q.closest('.faq-item');
      if (item) {
        item.classList.toggle('open');
      }
    });
  });

});