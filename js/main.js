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
  const probeY = headerHeight + 32;
  let active = sections[0];
  sections.forEach((item) => {
    const rect = item.section.getBoundingClientRect();
    if (rect.top <= probeY && rect.bottom > probeY) active = item;
  });
  sectionLinks.forEach((link) => link.classList.toggle("is-active", link === active?.link));
};
toggle?.addEventListener("click", () => {
  const open = menu.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});
window.addEventListener("hashchange", () => {
  syncHomeDropdown();
  window.setTimeout(syncHomeDropdown, 350);
});
syncHomeDropdown();
window.addEventListener("resize", syncHomeDropdown);
window.addEventListener("scroll", () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 20);
  syncHomeDropdown();
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
    const msg = form.querySelector(".success-message");
    if (msg) msg.textContent = "Thank you for contacting " + (cfg.companyName || "our team") + ". We will review your request and help connect you with a local independent provider.";
    form.reset();
  });
});
