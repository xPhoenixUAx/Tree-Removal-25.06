const cfg = window.siteConfig || {};
const setText = (el, value) => { if (value) el.textContent = value; };
document.querySelectorAll("[data-config]").forEach((el) => {
  const key = el.dataset.config;
  setText(el, cfg[key]);
  const attr = el.dataset.attr;
  if (attr === "href:tel") el.href = "tel:" + (cfg.phone || "").replace(/[^+\d]/g, "");
  if (attr === "href:mailto") el.href = "mailto:" + (cfg.email || "");
  if (attr === "href") el.href = cfg[key] || "#";
});
document.querySelectorAll("[data-service-area]").forEach((el) => setText(el, cfg.serviceArea));
const header = document.querySelector("[data-header]");
const toggle = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-menu]");
const pageLoader = document.querySelector("[data-page-loader]");
const hidePageLoader = () => pageLoader?.classList.remove("is-active");
const showPageLoader = () => pageLoader?.classList.add("is-active");
window.addEventListener("load", () => window.setTimeout(hidePageLoader, 280));
document.addEventListener("click", (event) => {
  const link = event.target.closest("a[href]");
  if (!link || !pageLoader || event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  if (link.target && link.target !== "_self") return;
  if (link.hasAttribute("download")) return;
  const url = new URL(link.href, window.location.href);
  if (url.origin !== window.location.origin || ["tel:", "mailto:"].includes(url.protocol)) return;
  const samePageHash = url.pathname === window.location.pathname && url.search === window.location.search && url.hash;
  if (samePageHash) return;
  event.preventDefault();
  showPageLoader();
  window.setTimeout(() => {
    window.location.href = url.href;
  }, 420);
});
const syncHomeDropdown = () => {
  if (!menu) return;
  const path = window.location.pathname;
  const isHome = path === "/" || path.endsWith("/index.html") || path.endsWith("index.html");
  if (!isHome) return;
  const sectionLinks = [...menu.querySelectorAll("[data-section-link]")];
  const sections = sectionLinks
    .map((link) => ({ link, section: document.getElementById(link.dataset.sectionLink) }))
    .filter((item) => item.section);
  const headerHeight = header?.getBoundingClientRect().height || 0;
  const probeY = headerHeight + 80;
  let active = sections[0];
  sections.forEach((item) => {
    const rect = item.section.getBoundingClientRect();
    if (rect.top <= probeY) active = item;
  });
  sectionLinks.forEach((link) => link.classList.toggle("is-active", link === active?.link));
};
const syncAboutDropdown = () => {
  if (!menu) return;
  const path = window.location.pathname;
  const isAbout = path.endsWith("/about.html") || path.endsWith("about.html");
  if (!isAbout) return;
  const sectionLinks = [...menu.querySelectorAll("[data-about-section-link]")];
  const sections = sectionLinks
    .map((link) => ({ link, section: document.getElementById(link.dataset.aboutSectionLink) }))
    .filter((item) => item.section);
  const headerHeight = header?.getBoundingClientRect().height || 0;
  const probeY = headerHeight + 80;
  let active = sections[0];
  sections.forEach((item) => {
    const rect = item.section.getBoundingClientRect();
    if (rect.top <= probeY) active = item;
  });
  sectionLinks.forEach((link) => link.classList.toggle("is-active", link === active?.link));
};
toggle?.addEventListener("click", () => {
  const open = menu.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});
window.addEventListener("hashchange", () => {
  syncHomeDropdown();
  syncAboutDropdown();
  window.setTimeout(syncHomeDropdown, 350);
  window.setTimeout(syncAboutDropdown, 350);
});
syncHomeDropdown();
syncAboutDropdown();
window.addEventListener("resize", () => {
  syncHomeDropdown();
  syncAboutDropdown();
});
window.addEventListener("scroll", () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 20);
  syncHomeDropdown();
  syncAboutDropdown();
}, { passive: true });
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
document.querySelectorAll("[data-process-section]").forEach((section) => {
  section.querySelectorAll("[data-process-bg]").forEach((step) => {
    const activate = () => section.dataset.processBg = step.dataset.processBg;
    step.addEventListener("pointerenter", activate);
    step.addEventListener("focusin", activate);
  });
  section.addEventListener("pointerleave", () => delete section.dataset.processBg);
  section.addEventListener("focusout", (event) => {
    if (!section.contains(event.relatedTarget)) delete section.dataset.processBg;
  });
});
document.querySelectorAll("[data-contact-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
    const modal = document.querySelector("[data-confirmation-modal]");
    if (modal) {
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
      modal.querySelector("[data-modal-close]")?.focus();
    }
  });
});
document.querySelectorAll("[data-confirmation-modal]").forEach((modal) => {
  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  };
  modal.querySelectorAll("[data-modal-close]").forEach((button) => button.addEventListener("click", closeModal));
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) closeModal();
  });
});
