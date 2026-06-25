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
    summary: "Controlled removals for hazardous, declining, crowded, or unwanted trees.",
    intro: "Tree removal is never just cutting wood. It starts with access planning, load direction, rigging strategy, nearby structure protection, and a cleanup plan that leaves the property usable the same day.",
    includes: ["Site and hazard assessment", "Sectional dismantling or safe felling", "Rope and rigging control near structures", "Limb processing and haul-away", "Final rake, blow-off, and debris check"],
    details: ["We evaluate lean, canopy weight, visible defects, underground constraints, and nearby utilities before any saw work begins.", "When a tree cannot be felled in one piece, crews remove the canopy in sections and lower material into a planned drop zone.", "Wood can be removed, stacked, or cut into manageable rounds depending on the property owner's preference."]
  },
  {
    slug: "emergency-tree-removal",
    title: "Emergency Tree Removal",
    image: "emergency-tree-removal.webp",
    summary: "Rapid response for storm-damaged, split, leaning, or blocked-access trees.",
    intro: "Emergency tree work focuses on stabilizing the scene, reopening access, and preventing secondary damage. The first priority is keeping people, structures, and service lines safe.",
    includes: ["Urgent hazard review", "Driveway and access clearing", "Temporary limb stabilization", "Storm limb and trunk removal", "Debris staging for insurance documentation"],
    details: ["Crews identify active hazards before cleanup starts, including hanging limbs, cracked stems, wet slopes, and compressed branches.", "Large storm debris is cut in a sequence that reduces stored tension instead of releasing it suddenly.", "Photos, measurements, and written notes can be provided to support insurance conversations."]
  },
  {
    slug: "tree-trimming-pruning",
    title: "Tree Trimming & Pruning",
    image: "tree-trimming-pruning.webp",
    summary: "Structural pruning, clearance trimming, deadwood removal, and canopy balancing.",
    intro: "Good pruning improves safety and tree structure without stripping the canopy. Cuts are planned around branch health, species response, roof clearance, airflow, and long-term growth.",
    includes: ["Deadwood and broken branch removal", "Roof, driveway, and walkway clearance", "Selective canopy thinning", "Structural pruning for young trees", "Post-work branch cleanup"],
    details: ["Cuts are made outside the branch collar to support proper compartmentalization.", "We avoid topping and over-thinning because both can create weak regrowth and future hazards.", "Clearance goals are balanced with canopy health so the tree still shades, screens, and performs naturally."]
  },
  {
    slug: "stump-grinding",
    title: "Stump Grinding",
    image: "stump-grinding.webp",
    summary: "Stump grinding for lawns, planting beds, fence lines, and trip-hazard areas.",
    intro: "A stump can hold up a full yard project. Grinding removes the visible stump and major surface roots so the area can be leveled, seeded, mulched, or prepared for new landscaping.",
    includes: ["Stump height reduction", "Mechanical grinding below grade", "Surface root chasing when practical", "Mulch backfill or debris removal", "Site leveling recommendations"],
    details: ["The work area is checked for rocks, metal edging, irrigation heads, and other hidden obstructions.", "Grinding depth is matched to the next use of the area, from turf repair to planting bed prep.", "Fresh grindings can be hauled away or used as rough mulch where appropriate."]
  },
  {
    slug: "land-lot-clearing",
    title: "Land & Lot Clearing",
    image: "land-lot-clearing.webp",
    summary: "Brush, saplings, downed limbs, and small-tree clearing for usable outdoor space.",
    intro: "Lot clearing turns an overgrown area into a manageable property zone. The work can support fence installation, firebreak maintenance, construction prep, trail access, or general yard recovery.",
    includes: ["Brush and sapling removal", "Selective small-tree clearing", "Chipping and debris consolidation", "Access path opening", "Cleanup plan for slopes and tight areas"],
    details: ["Crews separate keep zones from removal zones before equipment enters the property.", "Material is chipped, hauled, or staged depending on access and disposal needs.", "Selective clearing keeps desirable shade and screening while removing growth that blocks use or creates hazards."]
  },
  {
    slug: "storm-damage-cleanup",
    title: "Storm Damage Cleanup",
    image: "storm-damage-cleanup.webp",
    summary: "Cleanup for fallen limbs, split trunks, blocked drives, and storm-scattered debris.",
    intro: "Storm cleanup is a complete recovery service: cut, sort, remove, and restore access. The goal is to make the property safe and usable while protecting surfaces from additional damage.",
    includes: ["Fallen limb cutting and removal", "Driveway, walkway, and yard cleanup", "Hanging limb identification", "Wood and brush hauling", "Final surface cleanup"],
    details: ["We work from the safest access point first, especially when branches are tangled or under pressure.", "Debris is separated into logs, branches, chips, and fine cleanup so the worksite stays controlled.", "After cleanup, we can recommend pruning or removal for trees weakened by the same storm."]
  },
  {
    slug: "tree-health-assessment",
    title: "Tree Health Assessment",
    image: "tree-health-assessment.webp",
    summary: "Practical inspection for decline, decay, pests, root issues, and risk indicators.",
    intro: "A tree health assessment helps property owners decide whether to preserve, prune, monitor, or remove a tree. It focuses on observable conditions and practical next steps.",
    includes: ["Canopy and leaf condition review", "Trunk, bark, and root flare inspection", "Decay and defect screening", "Risk and clearance recommendations", "Written service notes on request"],
    details: ["We look for fungal growth, included bark, dead tops, cavities, soil changes, and other signals that influence safety.", "Recommendations are scaled to the issue instead of jumping straight to removal.", "When advanced testing is needed, we explain what a specialized arborist report should cover."]
  },
  {
    slug: "brush-removal",
    title: "Brush Removal",
    image: "brush-removal.webp",
    summary: "Removal of brush piles, vines, cut limbs, hedge waste, and overgrowth.",
    intro: "Brush removal is the cleanup layer that makes tree work feel complete. It helps reclaim corners, fence lines, side yards, and post-project messes without requiring a dumpster.",
    includes: ["Loose branch and brush pickup", "Vine and overgrowth clearing", "Chipping or haul-away", "Rake and tarp cleanup", "Fence-line and backyard access work"],
    details: ["Crews protect turf and planting beds while moving material to the chipper or truck.", "Brush can be removed as a standalone service or paired with trimming, clearing, and storm work.", "Final cleanup targets small sticks and scattered debris so the space is ready to use."]
  }
];

const nav = (depth = "") => `
<header class="site-header" data-header>
  <div class="topline">
    <div class="container topbar">
      <span>Full-cycle tree removal and property cleanup</span>
      <a data-config="email" data-attr="href:mailto" href="#"></a>
    </div>
  </div>
  <div class="container navrow">
    <a class="brand" href="${depth}index.html" aria-label="Home">
      <span class="brand-mark">A</span><span data-config="companyName"></span>
    </a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-menu" data-menu-toggle><span></span><span></span><span></span></button>
    <nav id="site-menu" class="menu" data-menu>
      <a href="${depth}index.html">Home</a>
      <a href="${depth}services.html">Services</a>
      <a href="${depth}about.html">About</a>
      <a href="${depth}contact.html">Contact</a>
      <a class="nav-phone" data-config="phoneLabel" data-attr="href:tel" href="#"></a>
    </nav>
  </div>
</header>`;

const footer = (depth = "") => `
<footer class="footer">
  <div class="container footer-grid">
    <div>
      <a class="brand footer-brand" href="${depth}index.html"><span class="brand-mark">A</span><span data-config="companyName"></span></a>
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
  <div class="container copyright" data-config="copyright"></div>
</footer>
<script src="${depth}js/site-config.js"></script>
<script src="${depth}js/main.js"></script>`;

const page = ({ title, description, body, depth = "" }) => `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${description}">
  <title>${title}</title>
  <link rel="preconnect" href="https://cdnjs.cloudflare.com">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
  <link rel="stylesheet" href="${depth}css/styles.css">
</head>
<body>
${nav(depth)}
${body}
${footer(depth)}
</body>
</html>`;

const serviceCard = (s, depth = "") => `
<article class="service-card reveal">
  <a class="image-link" href="${depth}services/${s.slug}.html"><img src="${depth}assets/images/${s.image}" alt="${s.title} service crew" loading="lazy"></a>
  <div class="service-card-body">
    <span class="kicker">Tree Service</span>
    <h3>${s.title}</h3>
    <p>${s.summary}</p>
    <a class="text-link" href="${depth}services/${s.slug}.html">Explore service <i class="fa-solid fa-arrow-right"></i></a>
  </div>
</article>`;

out("js/site-config.js", `
window.siteConfig = {
  companyName: "ArborLine Tree Services",
  phone: "+1-720-555-0186",
  phoneLabel: "(720) 555-0186",
  email: "hello@arborlinetreeservices.com",
  website: "https://arborlinetreeservices.com",
  address: "1847 Greenway Ridge, Denver, CO 80221",
  companyId: "CO-TR-48291",
  serviceArea: "Denver, Aurora, Lakewood, Arvada, Westminster, and nearby Colorado communities",
  businessHours: "Mon-Sat 7:00 AM - 7:00 PM",
  footerText: "A full-cycle tree service partner for removals, pruning, storm cleanup, stump grinding, and property clearing.",
  copyright: "Copyright 2026 ArborLine Tree Services. All rights reserved."
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
toggle?.addEventListener("click", () => {
  const open = menu.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});
window.addEventListener("scroll", () => header?.classList.toggle("is-scrolled", window.scrollY > 20), { passive: true });
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
document.querySelectorAll("[data-contact-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const msg = form.querySelector(".success-message");
    if (msg) msg.textContent = "Thank you for contacting " + (cfg.companyName || "our team") + ". We will reply from " + (cfg.email || "our office email") + " as soon as possible.";
    form.reset();
  });
});
`);

out("css/styles.css", `
:root{--green:#9cbb2d;--deep:#111516;--ink:#243033;--muted:#687273;--pale:#eff6f2;--cream:#fbfbf4;--line:#dfe8df;--container:1440px;--shadow:0 18px 55px rgba(17,21,22,.14)}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;font-family:Roboto,Arial,sans-serif;color:var(--ink);background:#fff;line-height:1.65;min-width:320px}img{max-width:100%;display:block}a{color:inherit;text-decoration:none}.container{width:min(calc(100% - 40px),var(--container));margin-inline:auto}.topline{background:var(--deep);color:#dce7dc;font-size:14px}.topbar{display:flex;justify-content:space-between;gap:16px;padding:8px 0}.site-header{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.96);transition:.3s box-shadow,.3s transform}.site-header.is-scrolled{box-shadow:0 10px 35px rgba(0,0,0,.09)}.navrow{height:86px;display:flex;align-items:center;justify-content:space-between;gap:20px}.brand{display:inline-flex;align-items:center;gap:12px;font-family:Poppins,Arial,sans-serif;font-weight:800;font-size:24px;color:var(--deep)}.brand-mark{display:grid;place-items:center;width:42px;height:42px;background:var(--green);color:#fff;border-radius:50%;box-shadow:0 8px 20px rgba(156,187,45,.35)}.menu{display:flex;align-items:center;gap:28px;font-family:Poppins,Arial,sans-serif;font-weight:600}.menu a{position:relative}.menu>a:not(.nav-phone):after{content:"";position:absolute;left:0;bottom:-9px;width:0;height:2px;background:var(--green);transition:.25s}.menu>a:hover:after{width:100%}.nav-phone,.btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;background:var(--green);color:#fff;padding:14px 24px;border-radius:999px;font-weight:800;border:1px solid var(--green);transition:.25s}.nav-phone:hover,.btn:hover{background:var(--deep);border-color:var(--deep);transform:translateY(-2px)}.btn.secondary{background:transparent;color:#fff;border-color:#fff}.btn.secondary:hover{background:#fff;color:var(--deep)}.menu-toggle{display:none;background:none;border:0;width:44px;height:44px}.menu-toggle span{display:block;height:2px;background:var(--deep);margin:7px 6px}.hero{min-height:760px;display:grid;align-items:center;position:relative;background:linear-gradient(90deg,rgba(17,21,22,.82),rgba(17,21,22,.38),rgba(17,21,22,.1)),var(--hero) center/cover fixed;color:#fff;overflow:hidden}.hero:after,.page-hero:after{content:"";position:absolute;inset:auto 0 0;height:110px;background:linear-gradient(transparent,rgba(17,21,22,.48))}.hero-content{position:relative;z-index:1;max-width:820px;padding:70px 0}.eyebrow,.kicker{display:inline-block;color:var(--green);font-weight:800;text-transform:uppercase;letter-spacing:.08em;font-size:13px}.hero h1,.page-hero h1{font:800 clamp(42px,7vw,86px)/.95 Poppins,Arial,sans-serif;margin:18px 0 24px;letter-spacing:0}.hero p,.page-hero p{font-size:20px;max-width:720px}.hero-actions{display:flex;flex-wrap:wrap;gap:14px;margin-top:34px}.section{padding:110px 0}.section.alt{background:var(--pale)}.section.dark{background:var(--deep);color:#fff}.split{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:center}.section-title{max-width:760px;margin:0 auto 52px;text-align:center}.section-title.left{text-align:left;margin-left:0}.section-title h2,.split h2{font:800 clamp(34px,4vw,56px)/1.05 Poppins,Arial,sans-serif;color:var(--deep);margin:12px 0}.dark .section-title h2,.dark h2{color:#fff}.lead{font-size:19px;color:var(--muted)}.dark .lead{color:#cdd6d0}.stats{display:grid;grid-template-columns:repeat(4,1fr);border:1px solid var(--line);background:#fff;margin-top:-82px;position:relative;z-index:5;box-shadow:var(--shadow)}.stat{padding:34px;text-align:center;border-right:1px solid var(--line)}.stat:last-child{border-right:0}.stat strong{display:block;color:var(--green);font:300 48px/1 Roboto,Arial}.service-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:28px}.service-card{background:#fff;box-shadow:0 10px 35px rgba(17,21,22,.08);overflow:hidden;transition:.3s transform,.3s box-shadow}.service-card:hover{transform:translateY(-8px);box-shadow:var(--shadow)}.image-link{display:block;overflow:hidden;aspect-ratio:4/3}.image-link img{width:100%;height:100%;object-fit:cover;transition:.5s transform}.service-card:hover img{transform:scale(1.08)}.service-card-body{padding:28px}.service-card h3{font:800 24px/1.2 Poppins,Arial;margin:8px 0 12px;color:var(--deep)}.text-link{display:inline-flex;align-items:center;gap:10px;font-weight:800;color:var(--deep)}.text-link i{background:var(--green);color:#fff;border-radius:50%;font-size:11px;width:22px;height:22px;display:grid;place-items:center;transition:.25s}.text-link:hover i{transform:translateX(7px);background:var(--deep)}.photo-frame{position:relative;overflow:hidden;box-shadow:var(--shadow)}.photo-frame img{width:100%;height:100%;object-fit:cover}.photo-frame.tall{aspect-ratio:5/6}.badge{position:absolute;left:26px;bottom:26px;background:var(--green);color:#fff;padding:22px;max-width:260px;font-weight:800}.process-list{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:#394144}.process-step{background:var(--deep);padding:42px 28px;min-height:230px;transition:.25s}.process-step:hover{background:#1d2528}.process-step span{display:block;color:var(--green);font:300 42px/1 Roboto,Arial;margin-bottom:22px}.cta-band{background:linear-gradient(rgba(17,21,22,.74),rgba(17,21,22,.74)),url('../assets/images/process-worksite.webp') center/cover fixed;color:#fff;text-align:center;padding:120px 0}.cta-band h2{font:800 clamp(36px,5vw,64px)/1.05 Poppins,Arial;margin:0 auto 18px;max-width:900px}.page-hero{position:relative;min-height:440px;display:grid;align-items:end;color:#fff;background:linear-gradient(90deg,rgba(17,21,22,.82),rgba(17,21,22,.26)),var(--hero) center/cover}.page-hero .container{position:relative;z-index:1;padding:110px 0 70px}.detail-grid{display:grid;grid-template-columns:minmax(0,1fr) 360px;gap:60px}.detail-content h2,.detail-content h3{font-family:Poppins,Arial,sans-serif;color:var(--deep);line-height:1.15}.check-list{list-style:none;padding:0;margin:24px 0;display:grid;gap:12px}.check-list li{padding-left:34px;position:relative}.check-list li:before{content:"\\f00c";font-family:"Font Awesome 6 Free";font-weight:900;position:absolute;left:0;top:1px;color:var(--green)}.sidebar-card{background:var(--pale);padding:32px;position:sticky;top:120px}.sidebar-card h3{font:800 26px/1.2 Poppins,Arial;margin-top:0}.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}.form-grid .full{grid-column:1/-1}label{font-weight:800;color:var(--deep)}input,textarea,select{width:100%;border:1px solid var(--line);padding:14px 15px;font:inherit;margin-top:6px;background:#fff}textarea{min-height:150px;resize:vertical}.success-message{margin-top:18px;font-weight:800;color:var(--green)}.contact-info{display:grid;gap:18px}.info-line{display:flex;gap:16px;align-items:flex-start}.info-line i{color:var(--green);font-size:22px;margin-top:6px}.legal{max-width:920px}.legal h2{font-family:Poppins,Arial,sans-serif;margin-top:42px;color:var(--deep)}.footer{background:#101516;color:#c7d0cb;padding:78px 0 28px}.footer-grid{display:grid;grid-template-columns:2fr 1fr 1.2fr 1fr;gap:42px}.footer h3{font-family:Poppins,Arial;color:#fff}.footer a,.footer span{display:block;margin:9px 0}.footer-brand{color:#fff}.company-line{font-size:14px;color:#99a59f}.copyright{border-top:1px solid #2b3335;margin-top:42px;padding-top:24px;font-size:14px}.reveal{opacity:0;transform:translateY(28px);transition:opacity .7s ease,transform .7s ease}.reveal.is-visible{opacity:1;transform:none}
@media (max-width:1180px){.service-grid{grid-template-columns:repeat(2,1fr)}.process-list{grid-template-columns:repeat(2,1fr)}.split{gap:40px}.footer-grid{grid-template-columns:1fr 1fr}}
@media (max-width:820px){.topbar{display:none}.navrow{height:74px}.menu-toggle{display:block}.menu{position:absolute;left:20px;right:20px;top:74px;background:#fff;box-shadow:var(--shadow);padding:20px;display:none;flex-direction:column;align-items:flex-start}.menu.is-open{display:flex}.nav-phone{width:100%}.hero{min-height:650px;background-attachment:scroll}.stats{grid-template-columns:repeat(2,1fr);margin-top:0}.stat:nth-child(2){border-right:0}.split,.detail-grid{grid-template-columns:1fr}.service-grid{grid-template-columns:1fr}.section{padding:76px 0}.hero p,.page-hero p{font-size:18px}.footer-grid{grid-template-columns:1fr}.form-grid{grid-template-columns:1fr}.form-grid .full{grid-column:auto}.sidebar-card{position:static}.cta-band{background-attachment:scroll}.container{width:min(calc(100% - 28px),var(--container))}}
@media (max-width:420px){.hero h1,.page-hero h1{font-size:38px}.stats{grid-template-columns:1fr}.stat{border-right:0;border-bottom:1px solid var(--line)}.process-list{grid-template-columns:1fr}.brand{font-size:20px}.hero-actions .btn{width:100%}}
@media (prefers-reduced-motion:reduce){*{scroll-behavior:auto!important;transition:none!important;animation:none!important}.reveal{opacity:1;transform:none}}
`);

out("index.html", page({
  title: "Tree Removal Services in Denver | ArborLine Tree Services",
  description: "Full-cycle tree removal, pruning, stump grinding, storm cleanup, brush removal, and lot clearing for residential properties.",
  body: `
<main>
  <section class="hero" style="--hero:url('assets/images/hero-tree-removal.webp')">
    <div class="container hero-content reveal">
      <span class="eyebrow">Full-cycle tree care</span>
      <h1>Safe tree removal from first assessment to final cleanup.</h1>
      <p>ArborLine handles removals, pruning, stumps, storm debris, brush, and clearing with one coordinated crew and a clean finish.</p>
      <div class="hero-actions"><a class="btn" href="contact.html">Request Quote</a><a class="btn secondary" data-config="phoneLabel" data-attr="href:tel" href="#"></a></div>
    </div>
  </section>
  <div class="container stats reveal">
    <div class="stat"><strong>24</strong><span>hazard checks before cutting</span></div>
    <div class="stat"><strong>8</strong><span>core tree services</span></div>
    <div class="stat"><strong>1</strong><span>crew from removal to cleanup</span></div>
    <div class="stat"><strong>360</strong><span>mobile-ready layout</span></div>
  </div>
  <section class="section">
    <div class="container split">
      <div class="reveal">
        <span class="kicker">Complete service cycle</span>
        <h2>One crew for assessment, removal, hauling, grinding, and cleanup.</h2>
        <p class="lead">Tree work becomes easier when the same team plans the access, protects the property, cuts the tree, handles debris, and leaves the site ready for what comes next.</p>
        <a class="text-link" href="services.html">View all services <i class="fa-solid fa-arrow-right"></i></a>
      </div>
      <div class="photo-frame tall reveal"><img src="assets/images/process-worksite.webp" alt="Organized tree removal worksite with crew and equipment"></div>
    </div>
  </section>
  <section class="section alt">
    <div class="container">
      <div class="section-title reveal"><span class="kicker">Services</span><h2>Built for the whole property, not just one tree.</h2><p class="lead">Each service page explains what is included, when it helps, and how the work is handled on site.</p></div>
      <div class="service-grid">${services.map(s => serviceCard(s)).join("")}</div>
    </div>
  </section>
  <section class="section dark">
    <div class="container">
      <div class="section-title reveal"><span class="kicker">How we work</span><h2>A controlled process for unpredictable trees.</h2></div>
      <div class="process-list reveal">
        <div class="process-step"><span>01</span><h3>Assess</h3><p>We inspect lean, decay, access, utilities, targets, and cleanup requirements.</p></div>
        <div class="process-step"><span>02</span><h3>Protect</h3><p>Drop zones, mats, cones, ropes, and crew roles are set before cutting begins.</p></div>
        <div class="process-step"><span>03</span><h3>Remove</h3><p>Material is sectioned, lowered, chipped, stacked, or hauled based on the plan.</p></div>
        <div class="process-step"><span>04</span><h3>Restore</h3><p>The work area is raked, blown off, checked, and prepared for the next use.</p></div>
      </div>
    </div>
  </section>
  <section class="cta-band reveal"><div class="container"><h2>Need a hazardous tree evaluated?</h2><p>Serving <span data-service-area></span>.</p><a class="btn" href="contact.html">Get Help Today</a></div></section>
</main>`
}));

out("services.html", page({
  title: "Tree Removal & Cleanup Services | ArborLine Tree Services",
  description: "Explore detailed tree removal, pruning, stump grinding, storm cleanup, lot clearing, and brush removal services.",
  body: `
<main>
  <section class="page-hero" style="--hero:url('assets/images/process-worksite.webp')"><div class="container reveal"><span class="eyebrow">Services</span><h1>Full-cycle tree services.</h1><p>From first inspection to final cleanup, every service is designed to protect the property and solve the whole problem.</p></div></section>
  <section class="section"><div class="container"><div class="service-grid">${services.map(s => serviceCard(s)).join("")}</div></div></section>
</main>`
}));

out("about.html", page({
  title: "About ArborLine Tree Services | Tree Removal Crew",
  description: "Learn about ArborLine Tree Services, a full-cycle residential tree removal and cleanup company serving the Denver area.",
  body: `
<main>
  <section class="page-hero" style="--hero:url('assets/images/about-team.webp')"><div class="container reveal"><span class="eyebrow">About</span><h1>A practical tree crew built around clean, controlled work.</h1><p>We plan every removal around safety, access, debris flow, and the way the property needs to function after the job.</p></div></section>
  <section class="section"><div class="container split"><div class="photo-frame tall reveal"><img src="assets/images/about-team.webp" alt="ArborLine tree service crew beside work truck"><div class="badge">Local crews. Real equipment. Clean worksites.</div></div><div class="reveal"><span class="kicker">Our approach</span><h2>Tree work should feel organized from the first call.</h2><p class="lead">ArborLine was shaped around a simple promise: the property owner should not have to coordinate multiple vendors for removal, debris, stump work, brush cleanup, and follow-up care.</p><p>Our crews work with clear site roles, practical equipment, and a cleanup standard that treats the final walk-through as part of the job, not an afterthought.</p><ul class="check-list"><li>Clear scopes before cutting starts</li><li>Careful protection around homes, fences, lawns, and driveways</li><li>Service recommendations based on the whole property</li><li>Configurable business details for easy site reuse</li></ul></div></div></section>
</main>`
}));

out("contact.html", page({
  title: "Contact ArborLine Tree Services | Request a Tree Removal Quote",
  description: "Request a quote for tree removal, emergency tree service, pruning, stump grinding, storm cleanup, and brush removal.",
  body: `
<main>
  <section class="page-hero" style="--hero:url('assets/images/contact-consultation.webp')"><div class="container reveal"><span class="eyebrow">Contact</span><h1>Tell us what is happening on your property.</h1><p>Share the tree location, access limits, storm damage, or cleanup needs and we will respond with practical next steps.</p></div></section>
  <section class="section"><div class="container split"><form class="reveal" data-contact-form><div class="form-grid"><label>Name<input required name="name" autocomplete="name"></label><label>Email<input required type="email" name="email" autocomplete="email"></label><label>Phone<input required name="phone" autocomplete="tel"></label><label>Service<select name="service">${services.map(s => `<option>${s.title}</option>`).join("")}</select></label><label class="full">Message<textarea required name="message"></textarea></label></div><button class="btn" type="submit">Request Quote</button><p class="success-message" role="status" aria-live="polite"></p></form><div class="contact-info reveal"><span class="kicker">Contact details</span><h2>Fast estimates for removals, stumps, storm work, and cleanup.</h2><div class="info-line"><i class="fa-solid fa-phone"></i><div><strong>Phone</strong><a data-config="phoneLabel" data-attr="href:tel" href="#"></a></div></div><div class="info-line"><i class="fa-solid fa-envelope"></i><div><strong>Email</strong><a data-config="email" data-attr="href:mailto" href="#"></a></div></div><div class="info-line"><i class="fa-solid fa-location-dot"></i><div><strong>Address</strong><span data-config="address"></span></div></div><div class="info-line"><i class="fa-solid fa-globe"></i><div><strong>Website</strong><a data-config="website" data-attr="href" href="#"></a></div></div></div></div></section>
</main>`
}));

for (const s of services) {
  out(`services/${s.slug}.html`, page({
    title: `${s.title} | ArborLine Tree Services`,
    description: `${s.summary} Detailed ${s.title.toLowerCase()} service information for residential tree care.`,
    depth: "../",
    body: `
<main>
  <section class="page-hero" style="--hero:url('../assets/images/${s.image}')"><div class="container reveal"><span class="eyebrow">Service</span><h1>${s.title}</h1><p>${s.summary}</p></div></section>
  <section class="section"><div class="container detail-grid"><article class="detail-content reveal"><span class="kicker">Detailed service</span><h2>What this service solves</h2><p class="lead">${s.intro}</p><h3>What is included</h3><ul class="check-list">${s.includes.map(i => `<li>${i}</li>`).join("")}</ul><h3>How the work is handled</h3>${s.details.map(d => `<p>${d}</p>`).join("")}<h3>When to schedule ${s.title.toLowerCase()}</h3><p>Schedule this service when the tree, stump, brush, or debris is limiting safe access, threatening structures, blocking future landscaping, or creating ongoing maintenance problems. A coordinated crew can evaluate the site and recommend the smallest effective scope.</p><a class="btn" href="../contact.html">Request Quote</a></article><aside class="sidebar-card reveal"><h3>Need ${s.title.toLowerCase()}?</h3><p>We serve <span data-service-area></span> with complete planning, removal, debris handling, and cleanup.</p><a class="nav-phone" data-config="phoneLabel" data-attr="href:tel" href="#"></a><hr><h3>Related services</h3>${services.filter(x => x.slug !== s.slug).slice(0,4).map(x => `<a class="text-link" href="${x.slug}.html">${x.title}</a>`).join("")}</aside></div></section>
</main>`
  }));
}

const legalText = {
  "privacy-policy.html": ["Privacy Policy", "This Privacy Policy explains how ArborLine Tree Services handles information submitted through this website.", "We collect contact details, service details, and messages that visitors provide through forms or direct contact links. This information is used to respond to requests, schedule estimates, and improve service communication.", "We do not sell personal information. Limited information may be shared with service providers who help operate communication, hosting, or business systems."],
  "terms-and-conditions.html": ["Terms & Conditions", "These terms describe the general use of this website and the request process for tree services.", "Website content is provided for general information and does not replace an on-site assessment. Quotes, scheduling, and service scope depend on property access, tree condition, weather, and safety factors.", "By submitting a request, visitors agree to provide accurate contact and property information so the crew can respond appropriately."],
  "cookie-policy.html": ["Cookie Policy", "This Cookie Policy explains how cookies and similar technologies may be used on this website.", "Essential cookies may support basic website functionality. Analytics or advertising cookies are not hardcoded and should only be added when valid IDs are provided through an approved implementation.", "Visitors can control cookies through browser settings. Some preferences may affect how forms or embedded services behave."]
};
for (const [file, [title, intro, p1, p2]] of Object.entries(legalText)) {
  out(file, page({
    title: `${title} | ArborLine Tree Services`,
    description: `${title} for ArborLine Tree Services.`,
    body: `<main><section class="page-hero" style="--hero:url('assets/images/hero-tree-removal.webp')"><div class="container reveal"><span class="eyebrow">Policy</span><h1>${title}</h1><p>${intro}</p></div></section><section class="section"><div class="container legal reveal"><h2>Overview</h2><p>${p1}</p><h2>Use of information</h2><p>${p2}</p><h2>Contact</h2><p>Questions about this policy can be sent to <a data-config="email" data-attr="href:mailto" href="#"></a>.</p><h2>Updates</h2><p>This page may be updated when business practices, legal requirements, or website features change.</p></div></section></main>`
  }));
}

out("robots.txt", `User-agent: *
Allow: /
Sitemap: https://arborlinetreeservices.com/sitemap.xml
`);

const urls = ["index.html", "services.html", "about.html", "contact.html", "privacy-policy.html", "terms-and-conditions.html", "cookie-policy.html", ...services.map(s => `services/${s.slug}.html`)];
out("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>https://arborlinetreeservices.com/${u === "index.html" ? "" : u}</loc></url>`).join("\n")}
</urlset>
`);
