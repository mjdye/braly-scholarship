// Shared site behaviors: mobile nav + scroll reveal
(function () {
  // Mobile nav toggle
  document.addEventListener('click', function (e) {
    var t = e.target.closest('.nav-toggle');
    if (t) {
      var links = document.querySelector('.nav-links');
      if (links) links.classList.toggle('open');
    }
  });

  var els = [].slice.call(document.querySelectorAll('.reveal'));
  if (!els.length) return;

  function show(el) {
    if (el.classList.contains('in')) return;
    var d = el.getAttribute('data-delay');
    if (d) el.style.transitionDelay = d + 'ms';
    el.classList.add('in');
  }

  // Manual viewport check — reliable across embedded/iframe contexts
  function sweep() {
    var vh = window.innerHeight || document.documentElement.clientHeight;
    for (var i = els.length - 1; i >= 0; i--) {
      var el = els[i];
      var r = el.getBoundingClientRect();
      if (r.top < vh * 0.92 && r.bottom > 0) {
        show(el);
        els.splice(i, 1);
      }
    }
  }

  // Prefer IntersectionObserver, but always back it with a scroll sweep.
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { show(en.target); io.unobserve(en.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
    els.forEach(function (el) { io.observe(el); });
  }

  window.addEventListener('scroll', sweep, { passive: true });
  window.addEventListener('resize', sweep);
  window.addEventListener('load', sweep);
  // Initial passes (covers above-the-fold + any IO no-op)
  requestAnimationFrame(sweep);
  setTimeout(sweep, 150);
  setTimeout(function () { els.forEach(show); }, 1800); // failsafe
})();
