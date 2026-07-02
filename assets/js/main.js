import { DSG_LINKS } from "./site-data.js";

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function trackDsgEvent(eventName, detail = {}) {
  // TODO: Wire this to GA4/GTM/Meta Pixel after final tracking IDs are approved.
  if (window.console && typeof window.console.info === "function") {
    console.info("DSG tracking placeholder:", eventName, detail);
  }
}

window.trackDsgEvent = trackDsgEvent;

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const siteNav = document.querySelector("[data-site-nav]");

  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      siteNav.toggleAttribute("data-open", !isOpen);
      document.body.toggleAttribute("data-menu-open", !isOpen);
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
      if (menuToggle && siteNav) {
        menuToggle.setAttribute("aria-expanded", "false");
        siteNav.removeAttribute("data-open");
        document.body.removeAttribute("data-menu-open");
      }
    });
  });

  document.querySelectorAll("[data-track]").forEach((element) => {
    element.addEventListener("click", () => {
      trackDsgEvent(element.getAttribute("data-track"), { href: element.getAttribute("href") || "" });
    });
  });

  document.querySelectorAll("[data-dsg-link]").forEach((element) => {
    const path = element.getAttribute("data-dsg-link");
    const value = path?.split(".").reduce((acc, key) => acc && acc[key], DSG_LINKS);
    if (value && element.tagName === "A") element.setAttribute("href", value);
  });
});
