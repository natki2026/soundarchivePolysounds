(function () {
  /* ─── Mobile Nav ─── */
  const toggle = document.getElementById('nav-toggle');
  const nav    = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('is-open'));
    document.addEventListener('click', e => {
      if (!toggle.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('is-open');
      }
    });
  }

  /* ─── FAQ Accordion ─── */
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item   = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const inner  = answer.querySelector('.faq-answer-inner');
      const isOpen = item.classList.contains('is-open');

      document.querySelectorAll('.faq-item.is-open').forEach(open => {
        open.classList.remove('is-open');
        open.querySelector('.faq-answer').style.maxHeight = '0';
      });

      if (!isOpen) {
        item.classList.add('is-open');
        answer.style.maxHeight = inner.scrollHeight + 'px';
      }
    });
  });

  /* ─── Contact Form (Formspree) ─── */
  const form    = document.getElementById('contact-form');
  const success = document.getElementById('form-success');

  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const btn = form.querySelector('[type=submit]');
      btn.disabled    = true;
      btn.textContent = 'Wird gesendet …';

      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        });

        if (res.ok) {
          form.style.display = 'none';
          if (success) success.style.display = 'block';
        } else {
          btn.disabled    = false;
          btn.textContent = 'Kostenlos beraten lassen →';
          alert('Fehler beim Senden. Bitte kontaktieren Sie uns direkt unter office@sound-archive.com');
        }
      } catch {
        btn.disabled    = false;
        btn.textContent = 'Kostenlos beraten lassen →';
        alert('Verbindungsfehler. Bitte versuchen Sie es erneut.');
      }
    });
  }
})();
