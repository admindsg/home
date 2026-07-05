(function () {
  const data = window.DSG_SITE_DATA || {};
  const links = data.links || {};

  document.querySelectorAll('[data-link]').forEach((node) => {
    const key = node.getAttribute('data-link');
    if (links[key]) node.setAttribute('href', links[key]);
  });

  const embed = document.querySelector('[data-zeffy-embed]');
  if (embed && links.eventNotifications) embed.setAttribute('src', links.eventNotifications);

  const menuButton = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-mobile-menu]');
  if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
      const expanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!expanded));
      menu.toggleAttribute('data-open', !expanded);
    });

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menuButton.setAttribute('aria-expanded', 'false');
        menu.removeAttribute('data-open');
      });
    });
  }

  const menuButton = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-mobile-menu]');
  if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
      const expanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!expanded));
      menu.toggleAttribute('data-open', !expanded);
    });

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menuButton.setAttribute('aria-expanded', 'false');
        menu.removeAttribute('data-open');
      });
    });
  }

  const pathButtons = Array.from(document.querySelectorAll('[data-path-button]'));
  const pathPanels = Array.from(document.querySelectorAll('[data-path-panel]'));

  function activatePath(id, shouldFocus) {
    pathButtons.forEach((button) => {
      const active = button.getAttribute('data-path-button') === id;
      button.setAttribute('aria-selected', String(active));
      button.setAttribute('tabindex', active ? '0' : '-1');
    });

    pathPanels.forEach((panel) => {
      const active = panel.getAttribute('data-path-panel') === id;
      panel.toggleAttribute('hidden', !active);
      if (active && shouldFocus) panel.focus({ preventScroll: true });
    });
  }

  pathButtons.forEach((button, index) => {
    button.addEventListener('click', () => activatePath(button.getAttribute('data-path-button'), false));
    button.addEventListener('keydown', (event) => {
      const last = pathButtons.length - 1;
      let nextIndex = null;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = index === last ? 0 : index + 1;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = index === 0 ? last : index - 1;
      if (event.key === 'Home') nextIndex = 0;
      if (event.key === 'End') nextIndex = last;
      if (nextIndex !== null) {
        event.preventDefault();
        pathButtons[nextIndex].focus();
        activatePath(pathButtons[nextIndex].getAttribute('data-path-button'), false);
      }
    });
  });

  const impactButtons = document.querySelectorAll('[data-impact]');
  const impactText = document.querySelector('[data-impact-text]');
  impactButtons.forEach((button) => {
    button.addEventListener('click', () => {
      impactButtons.forEach((item) => item.setAttribute('aria-pressed', 'false'));
      button.setAttribute('aria-pressed', 'true');
      if (impactText) impactText.textContent = button.getAttribute('data-impact-copy');
    });
  });

  document.querySelectorAll('details[data-accordion]').forEach((detail) => {
    detail.addEventListener('toggle', () => {
      detail.dataset.state = detail.open ? 'open' : 'closed';
    });
  });

  const impactButtons = Array.from(document.querySelectorAll('[data-impact]'));
  const impactTitle = document.querySelector('[data-impact-title]');
  const impactText = document.querySelector('[data-impact-text]');
  impactButtons.forEach((button) => {
    button.addEventListener('click', () => {
      impactButtons.forEach((item) => item.setAttribute('aria-pressed', 'false'));
      button.setAttribute('aria-pressed', 'true');
      if (impactTitle) impactTitle.textContent = button.getAttribute('data-impact');
      if (impactText) impactText.textContent = button.getAttribute('data-impact-copy');
    });
  });

  document.querySelectorAll('details[data-accordion]').forEach((detail) => {
    detail.addEventListener('toggle', () => {
      detail.dataset.state = detail.open ? 'open' : 'closed';
    });
  });

  const journeyRail = document.querySelector('[data-journey-rail]');
  const journeyLinks = Array.from(document.querySelectorAll('[data-journey-link]'));
  const journeyStages = Array.from(document.querySelectorAll('[data-journey-stage]'));
  const progress = { seed: '0%', roots: '34%', stem: '67%', bloom: '100%' };

  function setJourney(stage) {
    journeyLinks.forEach((link) => {
      const active = link.getAttribute('data-journey-link') === stage;
      if (active) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
    if (journeyRail && Object.prototype.hasOwnProperty.call(progress, stage)) {
      journeyRail.style.setProperty('--journey-progress', progress[stage]);
    }
  }

  if ('IntersectionObserver' in window && journeyStages.length) {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setJourney(visible.target.getAttribute('data-journey-stage'));
    }, { rootMargin: '-26% 0px -48% 0px', threshold: [0.18, 0.35, 0.55] });
    journeyStages.forEach((stage) => observer.observe(stage));
  }

  const revealTargets = Array.from(document.querySelectorAll('.reveal-on-scroll'));
  if ('IntersectionObserver' in window && revealTargets.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });
    revealTargets.forEach((target) => revealObserver.observe(target));
  } else {
    revealTargets.forEach((target) => target.classList.add('is-visible'));
  }
})();
