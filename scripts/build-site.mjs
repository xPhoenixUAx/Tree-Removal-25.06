import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const root = process.cwd();
const out = (file, content) => {
  mkdirSync(dirname(join(root, file)), { recursive: true });
  writeFileSync(join(root, file), content.trimStart(), "utf8");
};

const services = [
  {
    slug: "tree-removal",
    title: "Tree Removal",
    image: "tree-removal.webp",
    summary: "Connection support for hazardous, declining, crowded, or unwanted tree removals.",
    intro: "Tree removal can involve access limits, heavy limbs, nearby structures, utility concerns, and urgent safety decisions. Our role is to help homeowners describe the situation clearly and connect with local independent providers who handle this type of work.",
    includes: ["Hazard and access request intake", "Connection with local removal providers", "Support for urgent or planned requests", "Help sharing photos and property details", "Clear next-step communication"],
    details: ["Independent providers may evaluate lean, canopy weight, visible defects, underground constraints, and nearby utilities before any work begins.", "When a tree cannot be felled in one piece, qualified contractors may use sectional removal, rigging, or other methods based on the site.", "Homeowners should confirm licensing, insurance, scope, pricing, cleanup terms, and wood disposal directly with the hired contractor."]
  },
  {
    slug: "emergency-tree-removal",
    title: "Emergency Tree Removal",
    image: "emergency-tree-removal.webp",
    summary: "Fast connection requests for storm-damaged, split, leaning, or blocked-access trees.",
    intro: "Emergency tree situations can change quickly. Fallen limbs, cracked stems, blocked driveways, and trees leaning toward structures often require a prompt review by a local provider.",
    includes: ["Urgent request routing", "Basic hazard detail collection", "Driveway or access issue notes", "Storm damage description support", "Provider follow-up coordination"],
    details: ["Independent providers may identify active hazards such as hanging limbs, cracked stems, wet slopes, and compressed branches before cleanup starts.", "Large storm debris may require specialized sequencing because branches can hold stored tension.", "Homeowners can ask the hired contractor about photos, written notes, and documentation for insurance conversations."]
  },
  {
    slug: "tree-trimming-pruning",
    title: "Tree Trimming & Pruning",
    image: "tree-trimming-pruning.webp",
    summary: "Provider matching for structural pruning, clearance trimming, and deadwood removal.",
    intro: "Pruning requests are often about safety, clearance, tree structure, or long-term health. We help homeowners connect with local providers who can inspect the tree and recommend a practical scope.",
    includes: ["Pruning request intake", "Roof and walkway clearance notes", "Deadwood and broken branch details", "Young tree structure concerns", "Connection with local trimming providers"],
    details: ["Qualified providers may plan cuts around branch collars, species response, canopy balance, and clearance needs.", "Homeowners should ask whether topping or heavy thinning is being proposed and why.", "Clearance goals should be discussed directly with the contractor so the result fits the property and the tree's condition."]
  },
  {
    slug: "stump-grinding",
    title: "Stump Grinding",
    image: "stump-grinding.webp",
    summary: "Connection support for stump grinding around lawns, beds, fence lines, and walkways.",
    intro: "A stump can delay landscaping, create a trip hazard, or keep a yard from being usable. We help homeowners reach independent providers who offer stump grinding and related cleanup options.",
    includes: ["Stump location and size details", "Access and gate width notes", "Surface root concern intake", "Mulch or haul-away preference capture", "Local provider connection"],
    details: ["Independent providers may check the work area for rocks, metal edging, irrigation heads, and other hidden obstructions.", "Grinding depth can vary by the next use of the area, from turf repair to planting bed prep.", "Homeowners should confirm whether grindings are left on site, hauled away, or used as rough mulch."]
  },
  {
    slug: "land-lot-clearing",
    title: "Land & Lot Clearing",
    image: "land-lot-clearing.webp",
    summary: "Provider matching for brush, saplings, downed limbs, and small-tree clearing.",
    intro: "Overgrown areas can block access, delay projects, or create ongoing maintenance problems. We help homeowners request local provider help for clearing, hauling, chipping, and site preparation.",
    includes: ["Overgrowth request intake", "Keep-zone and removal-zone notes", "Slope and access details", "Debris handling preferences", "Connection with clearing providers"],
    details: ["Independent providers may separate keep zones from removal zones before equipment enters the property.", "Material may be chipped, hauled, or staged depending on access, disposal needs, and the hired contractor's scope.", "Selective clearing can preserve desirable shade and screening while removing growth that blocks use or creates hazards."]
  },
  {
    slug: "storm-damage-cleanup",
    title: "Storm Damage Cleanup",
    image: "storm-damage-cleanup.webp",
    summary: "Connection support for fallen limbs, split trunks, blocked drives, and storm debris.",
    intro: "Storm cleanup requests are often urgent because debris can block access or create secondary hazards. We help collect the key details and connect homeowners with local providers who handle storm-related tree cleanup.",
    includes: ["Storm damage request routing", "Blocked driveway or walkway notes", "Hanging limb concern intake", "Wood and brush disposal preferences", "Provider response coordination"],
    details: ["Independent providers may work from the safest access point first, especially when branches are tangled or under pressure.", "Debris handling can include logs, branches, chips, and fine cleanup depending on the contractor's scope.", "After cleanup, homeowners can ask the provider whether weakened trees need pruning, monitoring, or removal."]
  },
  {
    slug: "tree-health-assessment",
    title: "Tree Health Assessment",
    image: "tree-health-assessment.webp",
    summary: "Connection requests for decline, decay, pests, root issues, and risk indicators.",
    intro: "A tree health concern can be hard to judge from the ground. We help homeowners organize the symptoms they see and request help from local providers who can evaluate the tree in person.",
    includes: ["Visible symptom intake", "Canopy and leaf concern notes", "Trunk, bark, and root issue details", "Risk and clearance request routing", "Local assessment provider connection"],
    details: ["Qualified providers may look for fungal growth, included bark, dead tops, cavities, soil changes, and other visible risk signals.", "Recommendations can range from monitoring to pruning or removal, depending on the provider's assessment.", "When advanced testing is needed, homeowners should ask whether a specialized arborist report is appropriate."]
  },
  {
    slug: "brush-removal",
    title: "Brush Removal",
    image: "brush-removal.webp",
    summary: "Provider matching for brush piles, vines, cut limbs, hedge waste, and overgrowth.",
    intro: "Brush can pile up after trimming, storms, yard projects, or seasonal cleanup. We help homeowners connect with independent local providers who can quote removal, chipping, or haul-away.",
    includes: ["Brush pile detail intake", "Vine and overgrowth notes", "Chipping or haul-away preference capture", "Fence-line and backyard access details", "Local provider connection"],
    details: ["Independent providers may protect turf and planting beds while moving material to a chipper, trailer, or truck.", "Brush removal can be requested as a standalone job or paired with trimming, clearing, and storm work.", "Homeowners should confirm whether the final scope includes raking, tarp cleanup, and small scattered debris."]
  }
];

const brandLogo = (depth = "", extraClass = "") => `
<a class="brand${extraClass ? ` ${extraClass}` : ""}" href="${depth}index.html" aria-label="ArborLine Connect home">
  <span class="brand-mark" aria-hidden="true">
    <i class="fa-solid fa-tree"></i>
  </span>
  <span class="brand-copy">
    <span class="brand-name" data-config="companyName"></span>
    <span class="brand-tagline">Local tree provider network</span>
  </span>
</a>`;

const activeClass = (active, key) => active === key ? ` class="is-active"` : "";

const nav = (depth = "", active = "") => `
<header class="site-header" data-header>
  <div class="container navrow">
${brandLogo(depth, "header-brand")}
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-menu" data-menu-toggle><span></span><span></span><span></span></button>
    <nav id="site-menu" class="menu" data-menu>
      <div class="nav-item home-menu${active === "home" ? " is-active" : ""}" data-home-menu>
        <a class="nav-link" href="${depth}index.html">Home <i class="fa-solid fa-chevron-right"></i></a>
        <div class="home-dropdown" data-home-dropdown>
          <a href="${depth}index.html#home" data-section-link="home">Top</a>
          <a href="${depth}index.html#start-request" data-section-link="start-request">Start request</a>
          <a href="${depth}index.html#provider-categories" data-section-link="provider-categories">Provider categories</a>
          <a href="${depth}index.html#how-it-works" data-section-link="how-it-works">How it works</a>
          <a href="${depth}index.html#faq" data-section-link="faq">FAQ</a>
        </div>
      </div>
      <a class="nav-link${active === "about" ? " is-active" : ""}" href="${depth}about.html">About <i class="fa-solid fa-chevron-right"></i></a>
      <a class="nav-link${active === "contact" ? " is-active" : ""}" href="${depth}contact.html">Contact <i class="fa-solid fa-chevron-right"></i></a>
      <a class="nav-phone header-phone" data-config="phoneLabel" data-attr="href:tel" href="#"></a>
    </nav>
  </div>
</header>`;

const footer = (depth = "") => `
<footer class="footer">
  <div class="container footer-grid">
    <div>
${brandLogo(depth, "footer-brand")}
      <p data-config="footerText"></p>
      <p class="company-line"><span data-config="companyName"></span> - <span data-config="address"></span> - ID <span data-config="companyId"></span></p>
    </div>
    <div>
      <h3>Services</h3>
      ${services.slice(0, 5).map(s => `<a href="${depth}services/${s.slug}.html">${s.title}</a>`).join("")}
    </div>
    <div>
      <h3>Contact</h3>
      <a data-config="phoneLabel" data-attr="href:tel" href="#"></a>
      <a data-config="email" data-attr="href:mailto" href="#"></a>
      <a data-config="website" data-attr="href" href="#"></a>
      <span data-config="businessHours"></span>
    </div>
    <div>
      <h3>Company</h3>
      <a href="${depth}privacy-policy.html">Privacy Policy</a>
      <a href="${depth}terms-and-conditions.html">Terms & Conditions</a>
      <a href="${depth}cookie-policy.html">Cookie Policy</a>
    </div>
  </div>
  <div class="container footer-disclaimer">
    <strong>Disclaimer:</strong> This site is a free service to assist homeowners in connecting with local service providers. All contractors/providers are independent and this site does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the hired contractor furnishes the necessary license and insurance required for the work being performed. All persons depicted in a photo or video are actors or models and not contractors listed on this site.
  </div>
  <div class="container copyright" data-config="copyright"></div>
</footer>
<script src="${depth}js/site-config.js"></script>
<script src="${depth}js/main.js"></script>`;

const page = ({ title, description, body, depth = "", active = "" }) => `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${description}">
  <title>${title}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://cdnjs.cloudflare.com">
  <link rel="icon" href="${depth}assets/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Roboto:wght@100;300;400;500;700;800&display=swap">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
  <link rel="stylesheet" href="${depth}css/styles.css">
</head>
<body>
${nav(depth, active)}
${body}
${footer(depth)}
</body>
</html>`;

const serviceCard = (s, depth = "") => `
<article class="service-card reveal">
  <a class="image-link" href="${depth}services/${s.slug}.html"><img src="${depth}assets/images/${s.image}" alt="${s.title} provider category" loading="lazy"></a>
  <div class="service-card-body">
    <span class="kicker">Provider Category</span>
    <h3>${s.title}</h3>
    <p>${s.summary}</p>
    <a class="text-link" href="${depth}services/${s.slug}.html">Explore service <i class="fa-solid fa-arrow-right"></i></a>
  </div>
</article>`;

const serviceGroups = [
  {
    title: "Urgent tree hazards",
    image: "emergency-tree-removal.webp",
    summary: "For leaning trees, storm damage, blocked access, cracked trunks, and removal requests that may need fast provider follow-up.",
    links: ["emergency-tree-removal", "tree-removal", "storm-damage-cleanup"]
  },
  {
    title: "Tree care and assessment",
    image: "tree-trimming-pruning.webp",
    summary: "For pruning, clearance, deadwood, canopy concerns, visible decline, pest signs, decay, or questions about whether a tree should be monitored.",
    links: ["tree-trimming-pruning", "tree-health-assessment"]
  },
  {
    title: "Cleanup and property clearing",
    image: "land-lot-clearing.webp",
    summary: "For stumps, brush piles, vines, saplings, overgrowth, downed limbs, and yard areas that need to be opened up or hauled away.",
    links: ["stump-grinding", "brush-removal", "land-lot-clearing"]
  }
];

const serviceBySlug = Object.fromEntries(services.map((service) => [service.slug, service]));

const serviceGroupCard = (group) => `
<article class="service-card service-group-card reveal" style="--card-image:url('../assets/images/${group.image}')">
  <div class="service-card-body">
    <span class="kicker">Service group</span>
    <h3>${group.title}</h3>
    <p>${group.summary}</p>
    <div class="group-links">
      ${group.links.map((slug) => {
        const service = serviceBySlug[slug];
        return `<a class="text-link" href="services/${service.slug}.html">${service.title} <i class="fa-solid fa-arrow-right"></i></a>`;
      }).join("")}
    </div>
  </div>
</article>`;

out("js/site-config.js", `
window.siteConfig = {
  companyName: "ArborLine Connect",
  phone: "+1-720-555-0186",
  phoneLabel: "(720) 555-0186",
  email: "hello@arborlinetreeservices.com",
  website: "https://arborlinetreeservices.com",
  address: "1847 Greenway Ridge, Denver, CO 80221",
  companyId: "CO-TR-48291",
  serviceArea: "Denver, Aurora, Lakewood, Arvada, Westminster, and nearby Colorado communities",
  businessHours: "Mon-Sat 7:00 AM - 7:00 PM",
  footerText: "A free homeowner connection service for tree removal, pruning, storm cleanup, stump grinding, and property clearing requests.",
  copyright: "Copyright 2026 ArborLine Connect. All rights reserved."
};
`);

out("js/main.js", `
const cfg = window.siteConfig || {};
const setText = (el, value) => { if (value) el.textContent = value; };
document.querySelectorAll("[data-config]").forEach((el) => {
  const key = el.dataset.config;
  setText(el, cfg[key]);
  const attr = el.dataset.attr;
  if (attr === "href:tel") el.href = "tel:" + (cfg.phone || "").replace(/[^+\\d]/g, "");
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
`);

out("css/styles.css", `
:root{--green:#9cbb2d;--deep:#111516;--ink:#243033;--muted:#687273;--pale:#eff6f2;--cream:#fbfbf4;--line:#dfe8df;--container:1440px;--shadow:0 18px 55px rgba(17,21,22,.14)}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;font-family:Roboto,Arial,sans-serif;color:var(--ink);background:#fff;line-height:1.65;min-width:320px}img{max-width:100%;display:block}a{color:inherit;text-decoration:none}a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:3px solid var(--green);outline-offset:4px}.container{width:min(calc(100% - 40px),var(--container));margin-inline:auto}.topline{background:var(--deep);color:#dce7dc;font-size:14px}.topbar{display:flex;justify-content:space-between;gap:16px;padding:8px 0}.site-header{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.96);transition:.3s box-shadow,.3s transform}.site-header.is-scrolled{box-shadow:0 10px 35px rgba(0,0,0,.09)}.navrow{height:86px;display:flex;align-items:center;justify-content:space-between;gap:20px}.brand{display:inline-flex;align-items:center;gap:12px;font-family:Poppins,Arial,sans-serif;font-weight:800;font-size:24px;color:var(--deep)}.brand-mark{display:grid;place-items:center;width:42px;height:42px;background:var(--green);color:#fff;border-radius:50%;box-shadow:0 8px 20px rgba(156,187,45,.35)}.menu{display:flex;align-items:center;gap:28px;font-family:Poppins,Arial,sans-serif;font-weight:600}.menu a{position:relative}.menu>a:not(.nav-phone):after{content:"";position:absolute;left:0;bottom:-9px;width:0;height:2px;background:var(--green);transition:.25s}.menu>a:hover:after{width:100%}.nav-phone,.btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;background:var(--green);color:#fff;padding:14px 24px;border-radius:999px;font-weight:800;border:1px solid var(--green);transition:.25s}.nav-phone:hover,.btn:hover{background:var(--deep);border-color:var(--deep);transform:translateY(-2px)}.btn.secondary{background:transparent;color:#fff;border-color:#fff}.btn.secondary:hover{background:#fff;color:var(--deep)}.menu-toggle{display:none;background:none;border:0;width:44px;height:44px}.menu-toggle span{display:block;height:2px;background:var(--deep);margin:7px 6px}.hero{min-height:760px;display:grid;align-items:center;position:relative;background-color:var(--deep);background-image:linear-gradient(90deg,rgba(17,21,22,.66),rgba(17,21,22,.28),rgba(17,21,22,.04)),var(--hero);background-position:center;background-size:cover;background-attachment:fixed;color:#fff;overflow:hidden}.hero:after,.page-hero:after{content:"";position:absolute;inset:auto 0 0;height:110px;background:linear-gradient(transparent,rgba(17,21,22,.48))}.hero-content{position:relative;z-index:1;max-width:820px;padding:70px 0}.eyebrow,.kicker{display:inline-block;color:var(--green);font-weight:800;text-transform:uppercase;letter-spacing:.08em;font-size:13px}.hero h1,.page-hero h1{font:800 clamp(42px,7vw,86px)/.95 Poppins,Arial,sans-serif;margin:18px 0 24px;letter-spacing:0}.hero p,.page-hero p{font-size:20px;max-width:720px}.hero-actions{display:flex;flex-wrap:wrap;gap:14px;margin-top:34px}.section{padding:110px 0}.section.alt{background:var(--pale)}.section.dark{background:var(--deep);color:#fff}.split{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:center}.section-title{max-width:760px;margin:0 auto 52px;text-align:center}.section-title.left{text-align:left;margin-left:0}.section-title h2,.split h2{font:800 clamp(34px,4vw,56px)/1.05 Poppins,Arial,sans-serif;color:var(--deep);margin:12px 0}.dark .section-title h2,.dark h2{color:#fff}.lead{font-size:19px;color:var(--muted)}.dark .lead{color:#cdd6d0}.stats{display:grid;grid-template-columns:repeat(4,1fr);border:1px solid var(--line);background:#fff;margin-top:-82px;position:relative;z-index:5;box-shadow:var(--shadow)}.stat{padding:34px;text-align:center;border-right:1px solid var(--line)}.stat:last-child{border-right:0}.stat strong{display:block;color:var(--green);font:300 48px/1 Roboto,Arial}.service-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:28px}.service-group-grid{grid-template-columns:repeat(3,1fr)}.service-card{background:#fff;box-shadow:0 10px 35px rgba(17,21,22,.08);overflow:hidden;transition:.3s transform,.3s box-shadow}.service-card:hover{transform:translateY(-8px);box-shadow:var(--shadow)}.service-group-card{position:relative;min-height:520px;display:flex;align-items:flex-end;background-color:var(--deep);background-image:linear-gradient(180deg,rgba(17,21,22,.05) 0%,rgba(17,21,22,.36) 42%,rgba(17,21,22,.9) 100%),var(--card-image);background-position:center;background-size:cover;color:#fff}.service-group-card:before{content:"";position:absolute;inset:0;background:linear-gradient(120deg,rgba(17,21,22,.14),transparent 46%);pointer-events:none}.service-group-card:hover{background-size:cover}.service-group-card .service-card-body{position:relative;z-index:1;width:100%;padding:32px}.service-group-card .kicker{color:var(--green)}.service-group-card .service-card-body h3{color:#fff}.service-group-card p{color:#e7eee8}.image-link{display:block;overflow:hidden;aspect-ratio:4/3}.image-link img{width:100%;height:100%;object-fit:cover;transition:.5s transform}.service-card:hover img{transform:scale(1.08)}.service-card-body{padding:28px}.service-card h3{font:800 24px/1.2 Poppins,Arial;margin:8px 0 12px;color:var(--deep)}.group-links{display:grid;gap:12px;margin-top:22px}.group-links .text-link{justify-content:space-between;border-top:1px solid rgba(255,255,255,.26);padding-top:12px;color:#fff}.service-all-link{margin-top:34px;margin-bottom:0}.text-link{display:inline-flex;align-items:center;gap:10px;font-weight:800;color:var(--deep)}.text-link i{background:var(--green);color:#fff;border-radius:50%;font-size:11px;width:22px;height:22px;display:grid;place-items:center;transition:.25s;flex:0 0 auto}.text-link:hover i{transform:translateX(7px);background:var(--deep)}.service-group-card .text-link:hover i{background:#fff;color:var(--deep)}.photo-frame{position:relative;overflow:hidden;box-shadow:var(--shadow)}.photo-frame img{width:100%;height:100%;object-fit:cover}.photo-frame.tall{aspect-ratio:5/6}.badge{position:absolute;left:26px;bottom:26px;background:var(--green);color:#fff;padding:22px;max-width:260px;font-weight:800}.process-section{position:relative;isolation:isolate;overflow:hidden;background-color:var(--deep)}.process-bg-layer,.process-bg-shade{position:absolute;inset:0;pointer-events:none}.process-bg-layer{z-index:-2;background-position:center;background-size:cover;opacity:0;transform:scale(1.03);transition:.65s opacity ease,.85s transform ease}.process-bg-shade{z-index:-1;background:linear-gradient(180deg,rgba(17,21,22,.76),rgba(17,21,22,.9));opacity:0;transition:.5s opacity ease}.process-bg-describe{background-image:url('../assets/images/process-describe-hover.png')}.process-bg-route{background-image:url('../assets/images/process-route-hover.png')}.process-bg-connect{background-image:url('../assets/images/process-connect-hover.png')}.process-bg-verify{background-image:url('../assets/images/process-verify-hover.png')}.process-section[data-process-bg] .process-bg-shade{opacity:1}.process-section[data-process-bg="describe"] .process-bg-describe,.process-section[data-process-bg="route"] .process-bg-route,.process-section[data-process-bg="connect"] .process-bg-connect,.process-section[data-process-bg="verify"] .process-bg-verify{opacity:1;transform:scale(1)}.process-list{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:#394144}.process-step{position:relative;background:var(--deep);border:1px solid transparent;padding:42px 28px;min-height:230px;transition:.25s background-color,.25s border-color,.25s box-shadow,.25s transform,.25s backdrop-filter}.process-section[data-process-bg] .process-step{background:rgba(17,21,22,.88);backdrop-filter:blur(1px)}.process-step:hover,.process-step:focus-within{background:rgba(29,37,40,.76);border-color:rgba(156,187,45,.55);box-shadow:0 18px 46px rgba(0,0,0,.24),inset 0 1px 0 rgba(255,255,255,.08);transform:translateY(-6px);z-index:2}.process-step:hover span,.process-step:focus-within span{color:#fff}.process-step span{display:block;color:var(--green);font:300 42px/1 Roboto,Arial;margin-bottom:22px;transition:.25s color}.cta-band{background:linear-gradient(rgba(17,21,22,.74),rgba(17,21,22,.74)),url('../assets/images/process-worksite.webp') center/cover fixed;color:#fff;text-align:center;padding:120px 0}.cta-band h2{font:800 clamp(36px,5vw,64px)/1.05 Poppins,Arial;margin:0 auto 18px;max-width:900px}.page-hero{position:relative;min-height:440px;display:grid;align-items:end;color:#fff;background-color:var(--deep);background-image:linear-gradient(90deg,rgba(17,21,22,.68),rgba(17,21,22,.2)),var(--hero);background-position:center;background-size:cover}.page-hero .container{position:relative;z-index:1;padding:110px 0 70px}.detail-grid{display:grid;grid-template-columns:minmax(0,1fr) 360px;gap:60px}.detail-content h2,.detail-content h3{font-family:Poppins,Arial,sans-serif;color:var(--deep);line-height:1.15}.check-list{list-style:none;padding:0;margin:24px 0;display:grid;gap:12px}.check-list li{padding-left:34px;position:relative}.check-list li:before{content:"\\f00c";font-family:"Font Awesome 6 Free";font-weight:900;position:absolute;left:0;top:1px;color:var(--green)}.faq-layout>.section-title{max-width:860px}.faq-grid{display:grid;grid-template-columns:minmax(0,1fr) 360px;gap:34px;align-items:start}.faq-list{display:grid;gap:16px}.faq-item{background:#fff;border:1px solid rgba(156,187,45,.22);border-left:6px solid var(--green);padding:28px 30px;box-shadow:0 16px 38px rgba(17,21,22,.08);transition:.25s transform,.25s box-shadow}.faq-item:hover{transform:translateY(-4px);box-shadow:0 22px 52px rgba(17,21,22,.12)}.faq-item h3,.faq-note h3{font:800 24px/1.2 Poppins,Arial;margin:0 0 10px;color:var(--deep)}.faq-item p{margin:0;color:var(--muted)}.faq-note{background:var(--deep);color:#fff;padding:34px;position:sticky;top:120px;box-shadow:var(--shadow)}.faq-note h3{color:#fff}.faq-note .check-list{margin:24px 0 28px}.faq-note .check-list li{color:#dce7dc}.faq-note .check-list li:before{color:var(--green)}.faq-note .text-link{color:#fff;margin-top:8px}.sidebar-card{background:var(--pale);padding:32px;position:sticky;top:120px}.sidebar-card h3{font:800 26px/1.2 Poppins,Arial;margin-top:0}.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}.form-grid .full{grid-column:1/-1}label{font-weight:800;color:var(--deep)}input,textarea,select{width:100%;border:1px solid var(--line);padding:14px 15px;font:inherit;margin-top:6px;background:#fff}textarea{min-height:150px;resize:vertical}.success-message{margin-top:18px;font-weight:800;color:var(--green)}.contact-info{display:grid;gap:18px}.info-line{display:flex;gap:16px;align-items:flex-start}.info-line i{color:var(--green);font-size:22px;margin-top:6px}.legal{max-width:920px}.legal h2{font-family:Poppins,Arial,sans-serif;margin-top:42px;color:var(--deep)}.footer{background:#101516;color:#c7d0cb;padding:78px 0 28px}.footer-grid{display:grid;grid-template-columns:2fr 1fr 1.2fr 1fr;gap:42px}.footer h3{font-family:Poppins,Arial;color:#fff}.footer a,.footer span{display:block;margin:9px 0}.footer .brand{display:inline-flex}.footer-brand{color:#fff}.company-line{font-size:14px;color:#99a59f}.company-line span{display:inline;margin:0}.footer-disclaimer{border-top:1px solid #2b3335;margin-top:42px;padding-top:22px;font-size:12px;line-height:1.55;color:#98a39f}.footer-disclaimer strong{color:#fff}.copyright{border-top:1px solid #2b3335;margin-top:22px;padding-top:24px;font-size:14px}.reveal{opacity:1;transform:none;transition:opacity .7s ease,transform .7s ease}.reveal.is-visible{opacity:1;transform:none}
.service-card{border:1px solid transparent;transition:.3s transform,.3s box-shadow,.3s border-color}.service-card:hover{border-color:rgba(156,187,45,.34)}.service-group-card{border-color:rgba(255,255,255,.14);transition:.35s transform,.35s box-shadow,.35s border-color,.55s background-position}.service-group-card:before{opacity:.72;transition:.35s opacity,.35s background}.service-group-card:hover{transform:translateY(-8px);background-position:center 46%;border-color:rgba(156,187,45,.72);box-shadow:0 28px 72px rgba(0,0,0,.22)}.service-group-card:hover:before{opacity:1;background:linear-gradient(120deg,rgba(156,187,45,.2),rgba(17,21,22,.16) 42%,transparent 72%)}.service-group-card .service-card-body{transition:.3s transform}.service-group-card:hover .service-card-body{transform:translateY(-6px)}.service-group-card:hover .text-link i{background:#fff;color:var(--deep);transform:translateX(4px)}.service-group-card .text-link:hover i{background:#fff;color:var(--deep);transform:translateX(8px)}
.brand{gap:14px;line-height:1;min-width:0;transition:.25s transform}.brand:hover{transform:translateY(-1px)}.brand-mark{position:relative;width:60px;height:48px;flex:0 0 60px;border-radius:20px 10px 20px 10px;background:linear-gradient(135deg,#111516 0%,#22302d 58%,#9cbb2d 100%);box-shadow:0 14px 30px rgba(17,21,22,.18),inset 0 1px 0 rgba(255,255,255,.22);overflow:hidden}.brand-mark:after{content:"";position:absolute;inset:5px;border:1px solid rgba(255,255,255,.18);border-radius:16px 8px 16px 8px;pointer-events:none}.brand-copy{display:grid;gap:4px;min-width:0}.brand-name{display:block;font:800 24px/1 Poppins,Arial,sans-serif;color:var(--deep);white-space:nowrap}.brand-tagline{display:block;font:700 11px/1.1 Poppins,Arial,sans-serif;text-transform:uppercase;letter-spacing:.12em;color:#6f7b76;white-space:nowrap}.footer-brand .brand-name{color:#fff}.footer-brand .brand-tagline{color:#99a59f}.footer-brand .brand-mark{box-shadow:0 16px 34px rgba(0,0,0,.28),inset 0 1px 0 rgba(255,255,255,.22)}
.site-header{background:#0d1212;box-shadow:none}.site-header.is-scrolled{box-shadow:0 14px 34px rgba(0,0,0,.22)}.site-header .container{width:min(calc(100% - 190px),1700px)}.navrow{height:122px}.header-brand .brand-copy{display:none}.header-brand .brand-mark{width:62px;height:58px;flex-basis:62px;border:3px solid var(--green);border-radius:0;background:transparent;box-shadow:none}.header-brand .brand-mark:after{display:none}.menu{position:relative;flex:1;justify-content:center;gap:48px}.menu>a{display:inline-flex;align-items:center;gap:9px;color:#fff;font-weight:500}.menu>a:not(.nav-phone):after{display:none}.menu>a i{font-size:10px;color:currentColor;transition:.25s transform}.menu>a:hover i{transform:translateX(3px)}.menu>a.is-active i{transform:rotate(90deg)}.menu>a.is-active:hover i{transform:rotate(90deg) translateX(3px)}.menu>a:hover,.menu>a.is-active{color:var(--green)}.menu>a.header-phone{position:absolute;right:0;background:transparent;border:0;border-radius:0;color:var(--green);padding:0;font:300 30px/1 Roboto,Arial,sans-serif;letter-spacing:.04em}.menu>a.header-phone:hover{background:transparent;border-color:transparent;color:#fff;transform:none}
.brand-mark i{font-size:26px;color:#fff;line-height:1}.header-brand .brand-mark i{font-size:34px;color:var(--green)}.footer-brand .brand-mark i{font-size:26px;color:#fff}
.nav-item{position:relative}.home-menu>.nav-link{display:inline-flex;align-items:center;gap:9px;color:#fff;font-weight:500}.home-menu>.nav-link i{font-size:10px;color:currentColor;transition:.25s transform}.home-menu:hover>.nav-link,.home-menu:focus-within>.nav-link,.home-menu.is-active>.nav-link{color:var(--green)}.home-menu:hover>.nav-link i{transform:translateX(3px)}.home-menu.is-active>.nav-link i{transform:rotate(90deg)}.home-menu.is-active:hover>.nav-link i{transform:rotate(90deg) translateX(3px)}.home-dropdown{position:absolute;top:calc(100% + 22px);left:-22px;min-width:230px;background:#0d1212;border:1px solid rgba(156,187,45,.28);box-shadow:0 22px 52px rgba(0,0,0,.32);padding:14px 0;display:grid;gap:2px;opacity:0;visibility:hidden;transform:translateY(8px);transition:.22s opacity,.22s transform,.22s visibility;z-index:60}.home-menu:hover .home-dropdown,.home-menu:focus-within .home-dropdown{opacity:1;visibility:visible;transform:translateY(0)}.home-dropdown a{display:flex;align-items:center;justify-content:space-between;padding:10px 18px;color:#dce7dc;font-weight:500;white-space:nowrap}.home-dropdown a:hover,.home-dropdown a.is-active{color:var(--green);background:rgba(156,187,45,.08)}.home-dropdown a.is-active:after{content:"";width:7px;height:7px;border-radius:50%;background:var(--green)}
.hero h1,.page-hero h1,.section-title h2,.split h2,.cta-band h2{font-family:Roboto,Arial,sans-serif;font-weight:100;line-height:.88;letter-spacing:0}.hero h1,.page-hero h1{font-size:clamp(56px,7vw,112px)}.section-title h2,.split h2{font-size:clamp(42px,4.7vw,72px)}.cta-band h2{font-size:clamp(44px,5.5vw,82px)}.detail-content h2,.legal h2{font-family:Roboto,Arial,sans-serif;font-weight:100;line-height:.94}
.hero-content{max-width:1120px;padding:96px 0 86px}.hero h1{max-width:1100px;line-height:.96;font-size:clamp(60px,6.6vw,118px);margin:22px 0 28px}.hero p{max-width:780px}
.hero{background-image:linear-gradient(90deg,rgba(17,21,22,.78),rgba(17,21,22,.48) 48%,rgba(17,21,22,.24)),var(--hero)}
.accent-text{color:var(--green)}
[id]{scroll-margin-top:99px}
@media (max-width:820px){.brand{gap:11px}.brand-mark{width:52px;height:42px;flex-basis:52px}.brand-name{font-size:21px}.brand-tagline{display:none}}
@media (max-width:420px){.brand-mark{width:46px;height:38px;flex-basis:46px;border-radius:16px 8px}.brand-name{font-size:19px;max-width:170px;overflow:hidden;text-overflow:ellipsis}}
@media (max-width:1180px){.service-grid{grid-template-columns:repeat(2,1fr)}.process-list{grid-template-columns:repeat(2,1fr)}.split{gap:40px}.footer-grid{grid-template-columns:1fr 1fr}}
@media (max-width:820px){.topbar{display:none}.navrow{height:74px}.menu-toggle{display:block}.menu{position:absolute;left:20px;right:20px;top:74px;background:#fff;box-shadow:var(--shadow);padding:20px;display:none;flex-direction:column;align-items:flex-start}.menu.is-open{display:flex}.nav-phone{width:100%}.hero{min-height:650px;background-attachment:scroll}.stats{grid-template-columns:repeat(2,1fr);margin-top:0}.stat:nth-child(2){border-right:0}.split,.detail-grid,.faq-grid{grid-template-columns:1fr}.service-grid{grid-template-columns:1fr}.section{padding:76px 0}.hero p,.page-hero p{font-size:18px}.footer-grid{grid-template-columns:1fr}.form-grid{grid-template-columns:1fr}.form-grid .full{grid-column:auto}.sidebar-card,.faq-note{position:static}.cta-band{background-attachment:scroll}.container{width:min(calc(100% - 28px),var(--container))}}
@media (max-width:820px){.site-header .container{width:min(calc(100% - 28px),var(--container))}.navrow{height:82px}.header-brand .brand-mark{width:52px;height:50px;flex-basis:52px}.header-brand .brand-mark i{font-size:28px}.menu-toggle span{background:var(--green)}.menu{top:82px;background:#0d1212;border:1px solid rgba(156,187,45,.28);box-shadow:0 20px 46px rgba(0,0,0,.28);gap:18px}.menu>a{color:#fff}.menu>a.is-active{color:var(--green)}.menu>a.header-phone,.nav-phone.header-phone{position:static;width:auto;font-size:24px;margin-top:8px;color:var(--green)}}
@media (max-width:820px){.home-menu{width:100%;display:grid;gap:12px}.home-menu>.nav-link{width:100%}.home-dropdown{position:static;min-width:0;width:100%;opacity:1;visibility:visible;transform:none;box-shadow:none;border-color:rgba(156,187,45,.18);padding:8px 0}.home-dropdown a{padding:9px 14px;font-size:14px}.home-menu:hover>.nav-link i,.home-menu.is-active:hover>.nav-link i{transform:rotate(90deg)}}
@media (max-width:820px){[id]{scroll-margin-top:69px}}
@media (max-width:420px){.hero h1,.page-hero h1{font-size:38px}.stats{grid-template-columns:1fr}.stat{border-right:0;border-bottom:1px solid var(--line)}.process-list{grid-template-columns:1fr}.brand{font-size:20px}.hero-actions .btn{width:100%}.faq-item{padding:24px}}
@media (prefers-reduced-motion:reduce){*{scroll-behavior:auto!important;transition:none!important;animation:none!important}.reveal{opacity:1;transform:none}}
`);

out("index.html", page({
  title: "Find Local Tree Removal Providers in Denver | ArborLine Connect",
  description: "A free homeowner connection service for tree removal, pruning, stump grinding, storm cleanup, brush removal, and lot clearing requests.",
  active: "home",
  body: `
<main>
  <section class="hero" id="home" style="--hero:url('../assets/images/hero-tree-removal.webp')">
    <div class="container hero-content reveal">
      <span class="eyebrow">Tree provider connection service</span>
      <h1>Find <span class="accent-text">local help</span> for urgent <span class="accent-text">tree problems</span>.</h1>
      <p>ArborLine is a free service that helps homeowners connect with independent local providers for removals, pruning, storm cleanup, stumps, brush, and property clearing.</p>
      <div class="hero-actions"><a class="btn" href="contact.html">Request Provider Help</a><a class="btn secondary" data-config="phoneLabel" data-attr="href:tel" href="#"></a></div>
    </div>
  </section>
  <div class="container stats reveal">
    <div class="stat"><strong>4.8/5</strong><span>average homeowner rating</span></div>
    <div class="stat"><strong>12k+</strong><span>tree requests routed</span></div>
    <div class="stat"><strong>24/7</strong><span>online request intake</span></div>
    <div class="stat"><strong>500+</strong><span>local provider connections</span></div>
  </div>
  <section class="section alt" id="start-request">
    <div class="container split">
      <div class="reveal">
        <span class="kicker">When to start a request</span>
        <h2><span class="accent-text">Tree problems</span> are easier to route when the situation is described clearly.</h2>
        <p class="lead">Homeowners usually come to ArborLine when the issue feels urgent, confusing, or hard to explain to multiple companies one by one.</p>
        <ul class="check-list">
          <li>A tree is leaning toward a house, fence, driveway, or utility area</li>
          <li>Storm limbs are hanging, cracked, or blocking access</li>
          <li>A stump or brush pile is delaying landscaping or repair work</li>
          <li>You need help understanding which provider category fits the problem</li>
        </ul>
      </div>
      <aside class="sidebar-card reveal">
        <h3>Helpful request details</h3>
        <p>Share the tree location, approximate size, visible damage, access limits, urgency, and whether photos are available. Better details help independent providers decide whether they can respond.</p>
        <a class="text-link" href="contact.html">Start request <i class="fa-solid fa-arrow-right"></i></a>
      </aside>
    </div>
  </section>
  <section class="section">
    <div class="container split">
      <div class="reveal">
        <span class="kicker">How the aggregator helps</span>
        <h2>Describe the tree issue once and get routed toward <span class="accent-text">local provider</span> options.</h2>
        <p class="lead">Tree problems are stressful when they involve storm damage, blocked access, leaning trunks, or cleanup decisions. Our site helps homeowners organize the request and seek contact from independent providers who may be able to help.</p>
        <a class="text-link" href="#provider-categories">View provider categories <i class="fa-solid fa-arrow-right"></i></a>
      </div>
      <div class="photo-frame tall reveal"><img src="assets/images/process-worksite.webp" alt="Tree service worksite used to illustrate provider categories"></div>
    </div>
  </section>
  <section class="section alt" id="provider-categories">
    <div class="container">
      <div class="section-title reveal"><span class="kicker">Provider categories</span><h2>Start with the <span class="accent-text">problem</span>, then choose the right request group.</h2><p class="lead">The most common tree requests fall into a few practical groups. Each group links to the detailed provider categories when you need a narrower match.</p></div>
      <div class="service-grid service-group-grid">${serviceGroups.map(group => serviceGroupCard(group)).join("")}</div>
      <div class="section-title reveal service-all-link"><a class="text-link" href="#provider-categories">Review provider groups <i class="fa-solid fa-arrow-right"></i></a></div>
    </div>
  </section>
  <section class="section">
    <div class="container split">
      <div class="photo-frame tall reveal"><img src="assets/images/contact-consultation.webp" alt="Homeowner reviewing tree provider request details"></div>
      <div class="reveal">
        <span class="kicker">Before hiring</span>
        <h2>Use the connection, then <span class="accent-text">verify</span> the contractor directly.</h2>
        <p class="lead">ArborLine helps with the search and request flow. The final hiring decision belongs to the homeowner, so every provider conversation should include basic verification.</p>
        <ul class="check-list">
          <li>Ask for license and insurance information required for the work</li>
          <li>Confirm who performs the work and who is responsible for cleanup</li>
          <li>Review pricing, timing, disposal, access, and property protection terms</li>
          <li>Keep written notes or messages before approving any work</li>
        </ul>
      </div>
    </div>
  </section>
  <section class="section dark process-section" id="how-it-works" data-process-section>
    <div class="process-bg-layer process-bg-describe" aria-hidden="true"></div>
    <div class="process-bg-layer process-bg-route" aria-hidden="true"></div>
    <div class="process-bg-layer process-bg-connect" aria-hidden="true"></div>
    <div class="process-bg-layer process-bg-verify" aria-hidden="true"></div>
    <div class="process-bg-shade" aria-hidden="true"></div>
    <div class="container">
      <div class="section-title reveal"><span class="kicker">How it works</span><h2>A simple path from tree problem to <span class="accent-text">provider contact</span>.</h2></div>
      <div class="process-list reveal">
        <div class="process-step" data-process-bg="describe"><span>01</span><h3>Describe</h3><p>Share the tree issue, location, access limits, photos, and urgency level.</p></div>
        <div class="process-step" data-process-bg="route"><span>02</span><h3>Route</h3><p>The request is organized around the service category and local coverage area.</p></div>
        <div class="process-step" data-process-bg="connect"><span>03</span><h3>Connect</h3><p>Independent providers may follow up to discuss availability, scope, and pricing.</p></div>
        <div class="process-step" data-process-bg="verify"><span>04</span><h3>Verify</h3><p>The homeowner confirms license, insurance, terms, and contractor fit before hiring.</p></div>
      </div>
    </div>
  </section>
  <section class="section alt" id="faq">
    <div class="container faq-layout reveal">
      <div class="section-title left">
        <span class="kicker">Questions homeowners ask</span>
        <h2>What to know before using this <span class="accent-text">connection service</span>.</h2>
        <p class="lead">These answers set expectations clearly: ArborLine helps with routing, while independent providers handle estimates, scheduling, pricing, and the work itself.</p>
      </div>
      <div class="faq-grid">
        <div class="faq-list">
          <article class="faq-item">
            <div><h3>Does ArborLine perform tree removal or cleanup?</h3><p>No. ArborLine is a free service that helps homeowners connect with independent local providers. Contractors and providers are not employees of this site.</p></div>
          </article>
          <article class="faq-item">
            <div><h3>Is there a cost to submit a request?</h3><p>No. The site is free for homeowners to use. Any project pricing, estimate, deposit, or payment terms are handled directly with the independent provider you choose to hire.</p></div>
          </article>
          <article class="faq-item">
            <div><h3>Can this site guarantee response time or workmanship?</h3><p>No. Provider availability, work quality, licensing, insurance, and completed work are the responsibility of the independent provider and should be verified by the homeowner.</p></div>
          </article>
          <article class="faq-item">
            <div><h3>What should I do in a dangerous emergency?</h3><p>If there is immediate danger, downed power lines, fire, injury, or a blocked public roadway, contact emergency services or the proper utility authority first.</p></div>
          </article>
        </div>
        <aside class="faq-note">
          <span class="kicker">Homeowner checklist</span>
          <h3>Before you hire anyone</h3>
          <ul class="check-list">
            <li>Confirm license and insurance</li>
            <li>Review written scope and cleanup terms</li>
            <li>Ask who performs the work</li>
            <li>Keep records of estimate details</li>
          </ul>
          <a class="text-link" href="contact.html">Start request <i class="fa-solid fa-arrow-right"></i></a>
        </aside>
      </div>
    </div>
  </section>
  <section class="cta-band reveal"><div class="container"><h2>Need help finding a <span class="accent-text">tree provider</span>?</h2><p>Connection requests are available for <span data-service-area></span>.</p><a class="btn" href="contact.html">Start Request</a></div></section>
</main>`
}));

out("about.html", page({
  title: "About ArborLine Connect | Homeowner Connection Service",
  description: "Learn how ArborLine Connect helps homeowners connect with independent local tree service providers.",
  active: "about",
  body: `
<main>
  <section class="page-hero" style="--hero:url('../assets/images/about-team.webp')"><div class="container reveal"><span class="eyebrow">About</span><h1>A connection service for homeowners facing <span class="accent-text">tree problems</span>.</h1><p>ArborLine Connect is not a contractor and does not perform tree work. We help homeowners find independent local providers who may be able to respond quickly and safely.</p></div></section>
  <section class="section"><div class="container split"><div class="photo-frame tall reveal"><img src="assets/images/about-team.webp" alt="Tree service providers shown as illustrative models"><div class="badge">Free request help. Independent providers. Homeowner verification.</div></div><div class="reveal"><span class="kicker">Our story</span><h2>Built to make urgent tree requests easier to <span class="accent-text">route</span>.</h2><p class="lead">ArborLine was created for homeowners who do not know where to start when a tree is leaning, storm debris blocks access, a stump delays a yard project, or brush cleanup becomes too much to manage alone.</p><p>Instead of presenting ourselves as the crew doing the work, we operate as an aggregator. Our site collects the basic details of a tree-related request and helps connect homeowners with local independent service providers. The provider, not this site, is responsible for estimates, licenses, insurance, scheduling, safety practices, and completed work.</p><ul class="check-list"><li>Free connection support for homeowners</li><li>Tree removal, pruning, stump, storm, brush, and clearing categories</li><li>Clear reminder to verify license and insurance before hiring</li><li>No warranty or guarantee for work performed by independent providers</li></ul></div></div></section>
</main>`
}));

out("contact.html", page({
  title: "Contact ArborLine Connect | Request Provider Connection",
  description: "Submit a free request to connect with independent local providers for tree removal, pruning, stump grinding, storm cleanup, and brush removal.",
  active: "contact",
  body: `
<main>
  <section class="page-hero" style="--hero:url('../assets/images/contact-consultation.webp')"><div class="container reveal"><span class="eyebrow">Contact</span><h1>Tell us what kind of <span class="accent-text">provider</span> you need.</h1><p>Share the tree location, access limits, storm damage, cleanup needs, and urgency so the request can be routed toward relevant independent local providers.</p></div></section>
  <section class="section"><div class="container split"><form class="reveal" data-contact-form><div class="form-grid"><label>Name<input required name="name" autocomplete="name"></label><label>Email<input required type="email" name="email" autocomplete="email"></label><label>Phone<input required name="phone" autocomplete="tel"></label><label>Service<select name="service">${services.map(s => `<option>${s.title}</option>`).join("")}</select></label><label class="full">Message<textarea required name="message"></textarea></label></div><button class="btn" type="submit">Request Provider Help</button><p class="success-message" role="status" aria-live="polite"></p></form><div class="contact-info reveal"><span class="kicker">Connection details</span><h2>A free request service for homeowners seeking <span class="accent-text">local tree providers</span>.</h2><p>This site helps collect and route your request. Any provider you choose to hire is independent from this site, and you are responsible for verifying license, insurance, pricing, and scope before work begins.</p><div class="info-line"><i class="fa-solid fa-phone"></i><div><strong>Phone</strong><a data-config="phoneLabel" data-attr="href:tel" href="#"></a></div></div><div class="info-line"><i class="fa-solid fa-envelope"></i><div><strong>Email</strong><a data-config="email" data-attr="href:mailto" href="#"></a></div></div><div class="info-line"><i class="fa-solid fa-location-dot"></i><div><strong>Service area</strong><span data-service-area></span></div></div><div class="info-line"><i class="fa-solid fa-globe"></i><div><strong>Website</strong><a data-config="website" data-attr="href" href="#"></a></div></div></div></div></section>
</main>`
}));

for (const s of services) {
  out(`services/${s.slug}.html`, page({
    title: `${s.title} Provider Connections | ArborLine Connect`,
    description: `${s.summary} Learn what details to prepare before connecting with an independent local provider.`,
    depth: "../",
    active: "home",
    body: `
<main>
  <section class="page-hero" style="--hero:url('../assets/images/${s.image}')"><div class="container reveal"><span class="eyebrow">Provider category</span><h1>${s.title}</h1><p>${s.summary}</p></div></section>
  <section class="section"><div class="container detail-grid"><article class="detail-content reveal"><span class="kicker">Connection guide</span><h2>What this request can help solve</h2><p class="lead">${s.intro}</p><h3>Details to prepare</h3><ul class="check-list">${s.includes.map(i => `<li>${i}</li>`).join("")}</ul><h3>What to confirm with a provider</h3>${s.details.map(d => `<p>${d}</p>`).join("")}<h3>When to request ${s.title.toLowerCase()} help</h3><p>Submit a request when the tree, stump, brush, or debris is limiting safe access, threatening structures, blocking future landscaping, or creating ongoing maintenance problems. This site helps with connection routing only; the homeowner chooses and verifies any contractor hired.</p><a class="btn" href="../contact.html">Request Provider Help</a></article><aside class="sidebar-card reveal"><h3>Need ${s.title.toLowerCase()}?</h3><p>Connection requests are available for <span data-service-area></span>. Independent providers set their own availability, pricing, license status, insurance coverage, and work terms.</p><a class="nav-phone" data-config="phoneLabel" data-attr="href:tel" href="#"></a><hr><h3>Related categories</h3>${services.filter(x => x.slug !== s.slug).slice(0,4).map(x => `<a class="text-link" href="${x.slug}.html">${x.title}</a>`).join("")}</aside></div></section>
</main>`
  }));
}

const legalText = {
  "privacy-policy.html": ["Privacy Policy", "This Privacy Policy explains how ArborLine Connect handles information submitted through this free homeowner connection website.", "We collect contact details, service details, property-related request information, and messages that visitors provide through forms or direct contact links. This information is used to respond to requests and help connect homeowners with independent local service providers.", "We do not sell personal information. Limited information may be shared with service providers or business systems that help operate request routing, communication, hosting, or website functionality."],
  "terms-and-conditions.html": ["Terms & Conditions", "These terms describe the general use of this website and the request process for connecting with independent tree service providers.", "Website content is provided for general information and does not replace an on-site assessment by a qualified provider. This site is not a contractor, does not perform tree work, and does not warrant or guarantee work performed by independent providers.", "By submitting a request, visitors agree to provide accurate contact and property information. Homeowners are responsible for verifying any hired contractor's license, insurance, pricing, scope, and work terms."],
  "cookie-policy.html": ["Cookie Policy", "This Cookie Policy explains how cookies and similar technologies may be used on this website.", "Essential cookies may support basic website functionality. Analytics or advertising cookies are not hardcoded and should only be added when valid IDs are provided through an approved implementation.", "Visitors can control cookies through browser settings. Some preferences may affect how forms or embedded services behave."]
};
for (const [file, [title, intro, p1, p2]] of Object.entries(legalText)) {
  out(file, page({
    title: `${title} | ArborLine Connect`,
    description: `${title} for ArborLine Connect.`,
    body: `<main><section class="page-hero" style="--hero:url('../assets/images/hero-tree-removal.webp')"><div class="container reveal"><span class="eyebrow">Policy</span><h1>${title}</h1><p>${intro}</p></div></section><section class="section"><div class="container legal reveal"><h2>Overview</h2><p>${p1}</p><h2>Use of information</h2><p>${p2}</p><h2>Contact</h2><p>Questions about this policy can be sent to <a data-config="email" data-attr="href:mailto" href="#"></a>.</p><h2>Updates</h2><p>This page may be updated when business practices, legal requirements, or website features change.</p></div></section></main>`
  }));
}

out("robots.txt", `User-agent: *
Allow: /
Sitemap: https://arborlinetreeservices.com/sitemap.xml
`);

const urls = ["index.html", "about.html", "contact.html", "privacy-policy.html", "terms-and-conditions.html", "cookie-policy.html", ...services.map(s => `services/${s.slug}.html`)];
out("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>https://arborlinetreeservices.com/${u === "index.html" ? "" : u}</loc></url>`).join("\n")}
</urlset>
`);
