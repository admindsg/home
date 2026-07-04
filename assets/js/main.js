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

  function setupTabs(buttonSelector, panelSelector, idAttribute, options = {}) {
    const buttons = Array.from(document.querySelectorAll(buttonSelector));
    const panels = panelSelector ? Array.from(document.querySelectorAll(panelSelector)) : [];
    if (!buttons.length) return;

    function activate(button, shouldFocusPanel) {
      const id = button.getAttribute(idAttribute);
      buttons.forEach((item) => {
        const active = item === button;
        item.setAttribute('aria-selected', String(active));
        item.setAttribute('tabindex', active ? '0' : '-1');
      });

      panels.forEach((panel) => {
        const active = panel.getAttribute(options.panelAttribute || '') === id;
        panel.toggleAttribute('hidden', !active);
        if (active && shouldFocusPanel) panel.focus({ preventScroll: true });
      });

      if (typeof options.onActivate === 'function') options.onActivate(button, id);
    }

    buttons.forEach((button, index) => {
      button.addEventListener('click', () => activate(button, false));
      button.addEventListener('keydown', (event) => {
        const last = buttons.length - 1;
        let nextIndex = null;
        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = index === last ? 0 : index + 1;
        if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = index === 0 ? last : index - 1;
        if (event.key === 'Home') nextIndex = 0;
        if (event.key === 'End') nextIndex = last;
        if (nextIndex !== null) {
          event.preventDefault();
          buttons[nextIndex].focus();
          activate(buttons[nextIndex], false);
        }
      });
    });
  }

  setupTabs('[data-path-button]', '[data-path-panel]', 'data-path-button', {
    panelAttribute: 'data-path-panel'
  });

  setupTabs('[data-build]', null, 'data-build', {
    onActivate(button) {
      const panel = document.querySelector('#build-panel');
      if (!panel) return;
      const title = button.getAttribute('data-build');
      const copy = button.getAttribute('data-build-copy');
      panel.replaceChildren();
      const kicker = document.createElement('p');
      kicker.className = 'response-kicker';
      kicker.textContent = title;
      const paragraph = document.createElement('p');
      paragraph.textContent = copy;
      panel.append(kicker, paragraph);
    }
  });

  setupTabs('[data-record]', null, 'data-record', {
    onActivate(button) {
      const panel = document.querySelector('#record-panel');
      if (!panel) return;
      const title = button.getAttribute('data-record');
      const copy = button.getAttribute('data-record-copy');
      panel.replaceChildren();
      const kicker = document.createElement('p');
      kicker.className = 'response-kicker';
      kicker.textContent = title;
      const paragraph = document.createElement('p');
      paragraph.textContent = copy;
      panel.append(kicker, paragraph);
    }
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
