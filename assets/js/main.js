(function () {
  const data = window.DSG_SITE_DATA || {};
  const links = data.links || {};

  document.querySelectorAll('[data-link]').forEach((node) => {
    const key = node.getAttribute('data-link');
    if (links[key]) node.setAttribute('href', links[key]);
  });

  const embed = document.querySelector('[data-zeffy-embed]');
  if (embed && links.eventNotifications) {
    embed.setAttribute('src', links.eventNotifications);
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
})();
