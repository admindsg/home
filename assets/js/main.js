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

  document.querySelectorAll('[data-image]').forEach((img) => {
    const key = img.getAttribute('data-image');
    const imagePath = data.images && data.images.placeholders && data.images.placeholders[key];
    if (data.images && data.images.base && imagePath) {
      img.setAttribute('src', `${data.images.base}/${imagePath}`);
    }
  });
})();
