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

const providerCategoryMenu = (depth = "") => serviceGroups.map((group) => `
            <div class="dropdown-branch">
              <a class="dropdown-branch-link" href="${depth}index.html#provider-categories">${group.title} <i class="fa-solid fa-chevron-right"></i></a>
              <div class="dropdown-panel">
                ${group.links.map((slug) => {
                  const service = serviceBySlug[slug];
                  return `<a href="${depth}services/${service.slug}.html">${service.title}</a>`;
                }).join("")}
              </div>
            </div>`).join("");

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
          <div class="dropdown-branch provider-branch">
            <a class="dropdown-branch-link" href="${depth}index.html#provider-categories" data-section-link="provider-categories">Provider categories <i class="fa-solid fa-chevron-right"></i></a>
            <div class="dropdown-panel category-panel">
${providerCategoryMenu(depth)}
            </div>
          </div>
          <a href="${depth}index.html#how-it-works" data-section-link="how-it-works">How it works</a>
          <a href="${depth}index.html#faq" data-section-link="faq">FAQ</a>
        </div>
      </div>
      <div class="nav-item about-menu${active === "about" ? " is-active" : ""}" data-about-menu>
        <a class="nav-link" href="${depth}about.html">About <i class="fa-solid fa-chevron-right"></i></a>
        <div class="home-dropdown about-dropdown" data-about-dropdown>
          <a href="${depth}about.html#about-company" data-about-section-link="about-company">About Company</a>
          <a href="${depth}about.html#about-services" data-about-section-link="about-services">About Services</a>
        </div>
      </div>
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
  <noscript><style>.page-loader{display:none}</style></noscript>
</head>
<body>
<div class="page-loader is-active" data-page-loader aria-hidden="true">
  <div class="loader-inner">
    <div class="saw-blade" aria-hidden="true"><span></span><span></span><span></span></div>
    <span class="loader-text">Loading</span>
  </div>
</div>
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

const serviceDetailContent = {
  "tree-removal": {
    detailImage: "tree-removal-detail.webp",
    imageAlt: "Controlled residential tree removal scene with rigging and independent providers",
    serviceTypes: [
      ["Hazard tree removal", "For trees that are leaning, cracked, declining, storm-weakened, or positioned near structures, driveways, walkways, fences, or utility areas."],
      ["Sectional removal", "For limited-access properties where the tree may need to be removed in smaller controlled sections rather than felled in one piece."],
      ["Dead or declining tree removal", "For trees with visible dieback, cavities, fungal growth, loose bark, or structural issues that a provider may need to evaluate on site."],
      ["Space-clearing removal", "For unwanted trees blocking construction access, landscape redesigns, sunlight, views, or property use."]
    ],
    includedWork: [
      "Provider request routing based on tree location, size, access, and urgency",
      "Notes about nearby structures, fences, driveways, pools, sheds, and utilities",
      "Photo and description prompts that help providers understand the site before follow-up",
      "Cleanup and disposal preference capture, including logs, branches, chips, and haul-away",
      "Guidance on what to verify before approving removal work"
    ],
    prepare: [
      "Approximate tree height and trunk diameter",
      "Whether the tree is dead, leaning, cracked, uprooted, or touching another structure",
      "Access limitations such as narrow gates, slopes, overhead lines, or parked vehicles",
      "Whether stump grinding, wood cutting, or full debris haul-away is also needed"
    ],
    verification: [
      "Confirm license, insurance, and whether coverage applies to tree removal",
      "Ask whether the provider will climb, use a lift, use rigging, or use machinery",
      "Review written scope, cleanup responsibility, wood handling, and property protection",
      "Confirm who obtains any required permit or utility clearance"
    ]
  },
  "emergency-tree-removal": {
    detailImage: "emergency-tree-removal-detail.webp",
    imageAlt: "Storm-damaged tree blocking residential access while independent providers assess the hazard",
    serviceTypes: [
      ["Storm-damaged trees", "For trees split by wind, rain, snow load, or lightning where a provider may need to evaluate stability and access."],
      ["Blocked driveway or access", "For fallen trees or limbs that prevent safe entry, parking, deliveries, or emergency access."],
      ["Leaning or partially uprooted trees", "For trees that changed position suddenly and may require urgent professional review."],
      ["Hanging limbs and suspended debris", "For broken branches caught in the canopy, roofline, fence, or nearby trees."]
    ],
    includedWork: [
      "Urgent request routing with hazard, access, and timing notes",
      "Details about blocked areas, visible cracks, hanging limbs, and storm conditions",
      "Provider follow-up support for emergency or next-available availability",
      "Notes for insurance documentation conversations, where applicable",
      "Clear reminder that emergency response and work decisions belong to the provider"
    ],
    prepare: [
      "Whether anyone is injured or in immediate danger",
      "Whether power lines, gas lines, roads, or public sidewalks are involved",
      "What access is blocked and whether vehicles or structures are affected",
      "Photos from a safe distance only"
    ],
    verification: [
      "Call emergency services or the utility company first for immediate hazards",
      "Ask the provider about emergency pricing, minimum charges, and response windows",
      "Confirm insurance and experience with storm-loaded or tensioned limbs",
      "Get cleanup, temporary staging, and haul-away terms in writing"
    ]
  },
  "tree-trimming-pruning": {
    detailImage: "tree-trimming-pruning-detail.webp",
    imageAlt: "Selective residential tree pruning using a pole saw near a roofline",
    serviceTypes: [
      ["Clearance trimming", "For branches near roofs, gutters, driveways, walkways, fences, streets, or sightlines."],
      ["Deadwood removal", "For dead, broken, rubbing, or hanging branches that may create maintenance or safety concerns."],
      ["Structural pruning", "For young or mature trees where branch spacing, competing leaders, or weak attachments may need review."],
      ["Canopy reduction or shaping", "For selective pruning requests where the provider should avoid topping and explain the intended cuts."]
    ],
    includedWork: [
      "Routing by clearance need, tree type, branch size, and access conditions",
      "Notes about roofs, walkways, driveways, neighboring property lines, and utility areas",
      "Support for describing whether the goal is safety, health, clearance, or appearance",
      "Cleanup preference notes for small limbs, brush, and chipped material",
      "Questions homeowners should ask before approving pruning"
    ],
    prepare: [
      "Which branches are causing concern and why",
      "Whether the tree has been recently pruned, topped, storm-damaged, or declining",
      "Photos showing the full tree and close-ups of the problem area",
      "Desired clearance from structures, sidewalks, driveways, or street areas"
    ],
    verification: [
      "Ask what pruning method is proposed and why",
      "Confirm the provider will avoid unnecessary topping or excessive thinning",
      "Review whether cleanup, chipping, and haul-away are included",
      "Verify insurance for work near roofs, structures, or public areas"
    ]
  },
  "stump-grinding": {
    detailImage: "stump-grinding-detail.webp",
    imageAlt: "Compact stump grinder removing a residential backyard stump",
    serviceTypes: [
      ["Single stump grinding", "For one visible stump left after removal or an older stump blocking yard use."],
      ["Multiple stump grinding", "For properties with several stumps across a lawn, fence line, planting bed, or cleared area."],
      ["Surface root grinding", "For exposed roots near the stump where a provider may need to evaluate safe grinding limits."],
      ["Landscape preparation", "For areas being prepared for turf, beds, patios, fencing, or other yard improvements."]
    ],
    includedWork: [
      "Routing by stump size, count, location, access, and desired grinding depth",
      "Gate width, slope, steps, irrigation, edging, and obstacle notes",
      "Preference capture for grindings left on site, spread as rough mulch, or hauled away",
      "Information about whether backfill, soil, seed, or final landscaping is expected",
      "Provider verification checklist for equipment access and site protection"
    ],
    prepare: [
      "Approximate stump diameter and number of stumps",
      "Whether the stump is in lawn, bed, near a fence, near concrete, or near utilities",
      "Gate width, slope, stairs, and access route",
      "Whether you want chips left, moved, or removed"
    ],
    verification: [
      "Confirm grinding depth and whether surface roots are included",
      "Ask whether hidden rocks, metal, irrigation, or utilities may change scope",
      "Review cleanup, chip handling, and any backfill expectations",
      "Confirm equipment can access the stump without damaging property"
    ]
  },
  "land-lot-clearing": {
    detailImage: "land-lot-clearing-detail.webp",
    imageAlt: "Selective residential lot clearing with brush and small saplings being removed",
    serviceTypes: [
      ["Selective clearing", "For removing brush, vines, saplings, and small trees while preserving desirable mature trees or privacy screening."],
      ["Access path clearing", "For opening driveways, side yards, fence lines, trails, utility access areas, or project staging zones."],
      ["Overgrowth cleanup", "For dense vegetation that limits visibility, yard use, drainage, or routine maintenance."],
      ["Pre-project clearing", "For preparing areas before landscaping, fencing, sheds, repairs, or other property work."]
    ],
    includedWork: [
      "Routing by acreage or area size, vegetation density, access, slope, and disposal needs",
      "Keep-zone and removal-zone notes so providers understand what should remain",
      "Brush, sapling, vine, limb, and small-tree request organization",
      "Chipping, hauling, staging, and debris preference capture",
      "Questions to ask about equipment, property protection, and final cleanup"
    ],
    prepare: [
      "Approximate size of the area to clear",
      "What should be removed and what should stay",
      "Photos from multiple angles showing access and density",
      "Whether debris should be chipped, hauled, stacked, or left in a designated area"
    ],
    verification: [
      "Confirm boundaries, keep zones, and removal zones before work begins",
      "Ask what equipment will be used and whether turf or soil disturbance is expected",
      "Review disposal, chipping, hauling, and final cleanup terms",
      "Confirm whether permits, HOA rules, or property-line questions apply"
    ]
  },
  "storm-damage-cleanup": {
    detailImage: "storm-damage-cleanup-detail.webp",
    imageAlt: "Residential storm debris cleanup with branches being cut and staged for chipping",
    serviceTypes: [
      ["Fallen limb cleanup", "For branches scattered across lawns, driveways, roofs, fences, or planting beds after a storm."],
      ["Broken canopy cleanup", "For trees with cracked limbs, hanging debris, or damaged branches that may need removal or pruning."],
      ["Debris cutting and stacking", "For large limbs that need to be cut into manageable sections before chipping or hauling."],
      ["Post-storm property clearing", "For yards where debris must be removed before normal access, mowing, repair, or insurance review."]
    ],
    includedWork: [
      "Routing by debris volume, access blockage, hanging limb concerns, and urgency",
      "Notes about roof, fence, driveway, walkway, vehicle, or landscape impact",
      "Cleanup preference capture for chipping, hauling, stacking, logs, and brush",
      "Support for describing storm timing and affected areas",
      "Reminder to confirm whether weakened trees need additional assessment"
    ],
    prepare: [
      "Which areas are blocked or unsafe",
      "Whether debris is on a roof, fence, driveway, lawn, or neighboring property",
      "Whether limbs are hanging, under tension, or tangled",
      "Photos from a safe distance and any insurance-related documentation needs"
    ],
    verification: [
      "Confirm provider experience with storm-loaded branches and debris under tension",
      "Ask whether cleanup includes raking, chipping, hauling, and final site sweep",
      "Review emergency pricing, scheduling, and minimum trip charges",
      "Ask whether remaining trees should be inspected after cleanup"
    ]
  },
  "tree-health-assessment": {
    detailImage: "tree-health-assessment-detail.webp",
    imageAlt: "Provider inspecting a mature residential tree trunk and root flare with homeowner nearby",
    serviceTypes: [
      ["Visible decline review", "For thinning canopy, dead tops, early leaf drop, discoloration, or poor seasonal growth."],
      ["Decay and defect concerns", "For cavities, cracks, fungal growth, included bark, loose bark, or suspected structural weakness."],
      ["Root and soil concerns", "For exposed roots, construction disturbance, grade changes, girdling roots, or drainage issues."],
      ["Risk indicator review", "For homeowners trying to understand whether pruning, monitoring, treatment, or removal may be discussed with a provider."]
    ],
    includedWork: [
      "Routing based on visible symptoms, tree location, target areas, and urgency",
      "Symptom organization for canopy, trunk, bark, roots, soil, pests, and fungal signs",
      "Support for describing when changes appeared and whether storms or construction occurred",
      "Provider follow-up path for on-site evaluation or specialized arborist referral",
      "Homeowner reminder that this site does not diagnose tree conditions"
    ],
    prepare: [
      "Photos of the full tree, canopy, trunk, root flare, and symptoms",
      "When the issue first appeared and whether it is worsening",
      "Nearby construction, grade changes, irrigation changes, or storm damage",
      "Whether the tree is near structures, walkways, utility areas, or parked vehicles"
    ],
    verification: [
      "Ask about the provider's assessment process and qualifications",
      "Confirm whether a certified arborist report is needed for the situation",
      "Review recommended options, risks, limitations, and follow-up timing",
      "Ask for written notes when insurance, HOA, neighbor, or permit issues may matter"
    ]
  },
  "brush-removal": {
    detailImage: "brush-removal-detail.webp",
    imageAlt: "Residential brush removal with cut branches loaded for haul-away",
    serviceTypes: [
      ["Brush pile removal", "For piles of branches, trimmings, hedge waste, vines, or cut limbs left after yard work or storms."],
      ["Vine and overgrowth cleanup", "For invasive vines, tangled fence-line growth, and dense side-yard vegetation."],
      ["Chipping and haul-away", "For homeowners who want brush chipped, removed, or staged for disposal."],
      ["Seasonal yard cleanup", "For accumulated limb piles, hedge trimmings, and small woody debris that need organized removal."]
    ],
    includedWork: [
      "Routing by brush volume, pile location, access, and disposal preference",
      "Notes about fence lines, gates, slopes, driveways, and staging areas",
      "Chipping, trailer loading, haul-away, and rough cleanup preference capture",
      "Support for pairing brush removal with pruning, clearing, or storm cleanup requests",
      "Verification checklist for final cleanup and disposal responsibility"
    ],
    prepare: [
      "Approximate brush pile size or number of piles",
      "Whether material includes vines, thorns, logs, hedge waste, or mixed debris",
      "Where the brush is located and how providers can access it",
      "Whether you want chipping, hauling, stacking, or curbside staging"
    ],
    verification: [
      "Confirm what material is included and whether non-organic debris is excluded",
      "Ask whether raking, tarp cleanup, and small scattered debris are included",
      "Review haul-away, dumping, chipping, or disposal fees",
      "Confirm how turf, beds, fences, and driveways will be protected"
    ]
  }
};

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
`);

out("css/styles.css", `
:root{--green:#9cbb2d;--deep:#111516;--ink:#243033;--muted:#687273;--pale:#eff6f2;--cream:#fbfbf4;--line:#dfe8df;--container:1440px;--shadow:0 18px 55px rgba(17,21,22,.14)}
.page-loader{position:fixed;inset:0;z-index:9999;display:grid;place-items:center;background:radial-gradient(circle at 50% 43%,rgba(156,187,45,.16),rgba(13,18,18,.96) 34%,#0d1212 100%);opacity:0;visibility:hidden;pointer-events:none;transition:.38s opacity ease,.38s visibility ease}.page-loader.is-active{opacity:1;visibility:visible;pointer-events:auto}.loader-inner{display:grid;place-items:center;gap:22px;transform:translateY(6px);transition:.38s transform ease}.page-loader.is-active .loader-inner{transform:translateY(0)}.saw-blade{position:relative;width:118px;height:118px;border-radius:50%;background:repeating-conic-gradient(from 4deg,#eef3ee 0 7deg,#6f7975 7deg 11deg,#d7ded8 11deg 19deg,#8a9490 19deg 24deg);box-shadow:0 0 0 5px rgba(255,255,255,.06),0 18px 52px rgba(0,0,0,.42),0 0 42px rgba(156,187,45,.24);animation:saw-spin .82s linear infinite}.saw-blade:before{content:"";position:absolute;inset:13px;border-radius:50%;background:conic-gradient(from 20deg,#aeb8b3,#f8fbf8 18%,#7d8782 36%,#e8eee9 55%,#78827e 76%,#cfd8d2);box-shadow:inset 0 0 0 1px rgba(17,21,22,.28),inset 0 0 22px rgba(17,21,22,.32)}.saw-blade:after{content:"";position:absolute;inset:43px;border-radius:50%;background:radial-gradient(circle,#0d1212 0 28%,var(--green) 30% 58%,#161d1d 60% 100%);box-shadow:0 0 0 5px rgba(17,21,22,.42),0 0 20px rgba(156,187,45,.35)}.saw-blade span{position:absolute;left:50%;top:50%;width:13px;height:36px;margin:-18px 0 0 -6.5px;border-radius:999px;background:rgba(13,18,18,.42);box-shadow:0 0 0 1px rgba(255,255,255,.22);transform-origin:50% 59px}.saw-blade span:nth-child(1){transform:rotate(0deg) translateY(-32px)}.saw-blade span:nth-child(2){transform:rotate(120deg) translateY(-32px)}.saw-blade span:nth-child(3){transform:rotate(240deg) translateY(-32px)}.loader-text{font:700 12px/1 Poppins,Arial,sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#dce7dc}.loader-text:after{content:"";display:inline-block;width:1.4em;text-align:left;animation:loader-dots 1.2s steps(4,end) infinite}@keyframes saw-spin{to{transform:rotate(360deg)}}@keyframes loader-dots{0%{content:""}25%{content:"."}50%{content:".."}75%,100%{content:"..."}}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;font-family:Roboto,Arial,sans-serif;color:var(--ink);background:#fff;line-height:1.65;min-width:320px}img{max-width:100%;display:block}a{color:inherit;text-decoration:none}a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:3px solid var(--green);outline-offset:4px}.container{width:min(calc(100% - 40px),var(--container));margin-inline:auto}.topline{background:var(--deep);color:#dce7dc;font-size:14px}.topbar{display:flex;justify-content:space-between;gap:16px;padding:8px 0}.site-header{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.96);transition:.3s box-shadow,.3s transform}.site-header.is-scrolled{box-shadow:0 10px 35px rgba(0,0,0,.09)}.navrow{height:86px;display:flex;align-items:center;justify-content:space-between;gap:20px}.brand{display:inline-flex;align-items:center;gap:12px;font-family:Poppins,Arial,sans-serif;font-weight:800;font-size:24px;color:var(--deep)}.brand-mark{display:grid;place-items:center;width:42px;height:42px;background:var(--green);color:#fff;border-radius:50%;box-shadow:0 8px 20px rgba(156,187,45,.35)}.menu{display:flex;align-items:center;gap:28px;font-family:Poppins,Arial,sans-serif;font-weight:600}.menu a{position:relative}.menu>a:not(.nav-phone):after{content:"";position:absolute;left:0;bottom:-9px;width:0;height:2px;background:var(--green);transition:.25s}.menu>a:hover:after{width:100%}.nav-phone,.btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;background:var(--green);color:#fff;padding:14px 24px;border-radius:999px;font-weight:800;border:1px solid var(--green);transition:.25s}.nav-phone:hover,.btn:hover{background:var(--deep);border-color:var(--deep);transform:translateY(-2px)}.btn.secondary{background:transparent;color:#fff;border-color:#fff}.btn.secondary:hover{background:#fff;color:var(--deep)}.menu-toggle{display:none;background:none;border:0;width:44px;height:44px}.menu-toggle span{display:block;height:2px;background:var(--deep);margin:7px 6px}.hero{min-height:760px;display:grid;align-items:center;position:relative;background-color:var(--deep);background-image:linear-gradient(90deg,rgba(17,21,22,.66),rgba(17,21,22,.28),rgba(17,21,22,.04)),var(--hero);background-position:center;background-size:cover;background-attachment:fixed;color:#fff;overflow:hidden}.hero:after,.page-hero:after{content:"";position:absolute;inset:auto 0 0;height:110px;background:linear-gradient(transparent,rgba(17,21,22,.48))}.hero-content{position:relative;z-index:1;max-width:820px;padding:70px 0}.eyebrow,.kicker{display:inline-block;color:var(--green);font-weight:800;text-transform:uppercase;letter-spacing:.08em;font-size:13px}.hero h1,.page-hero h1{font:800 clamp(42px,7vw,86px)/.95 Poppins,Arial,sans-serif;margin:18px 0 24px;letter-spacing:0}.hero p,.page-hero p{font-size:20px;max-width:720px}.hero-actions{display:flex;flex-wrap:wrap;gap:14px;margin-top:34px}.section{padding:110px 0}.section.alt{background:var(--pale)}.section.dark{background:var(--deep);color:#fff}.split{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:center}.section-title{max-width:760px;margin:0 auto 52px;text-align:center}.section-title.left{text-align:left;margin-left:0}.section-title h2,.split h2{font:800 clamp(34px,4vw,56px)/1.05 Poppins,Arial,sans-serif;color:var(--deep);margin:12px 0}.dark .section-title h2,.dark h2{color:#fff}.lead{font-size:19px;color:var(--muted)}.dark .lead{color:#cdd6d0}.stats{display:grid;grid-template-columns:repeat(4,1fr);border:1px solid var(--line);background:#fff;margin-top:-82px;position:relative;z-index:5;box-shadow:var(--shadow)}.stat{padding:34px;text-align:center;border-right:1px solid var(--line)}.stat:last-child{border-right:0}.stat strong{display:block;color:var(--green);font:300 48px/1 Roboto,Arial}.service-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:28px}.service-group-grid{grid-template-columns:repeat(3,1fr)}.service-card{background:#fff;box-shadow:0 10px 35px rgba(17,21,22,.08);overflow:hidden;transition:.3s transform,.3s box-shadow}.service-card:hover{transform:translateY(-8px);box-shadow:var(--shadow)}.service-group-card{position:relative;min-height:520px;display:flex;align-items:flex-end;background-color:var(--deep);background-image:linear-gradient(180deg,rgba(17,21,22,.05) 0%,rgba(17,21,22,.36) 42%,rgba(17,21,22,.9) 100%),var(--card-image);background-position:center;background-size:cover;color:#fff}.service-group-card:before{content:"";position:absolute;inset:0;background:linear-gradient(120deg,rgba(17,21,22,.14),transparent 46%);pointer-events:none}.service-group-card:hover{background-size:cover}.service-group-card .service-card-body{position:relative;z-index:1;width:100%;padding:32px}.service-group-card .kicker{color:var(--green)}.service-group-card .service-card-body h3{color:#fff}.service-group-card p{color:#e7eee8}.image-link{display:block;overflow:hidden;aspect-ratio:4/3}.image-link img{width:100%;height:100%;object-fit:cover;transition:.5s transform}.service-card:hover img{transform:scale(1.08)}.service-card-body{padding:28px}.service-card h3{font:800 24px/1.2 Poppins,Arial;margin:8px 0 12px;color:var(--deep)}.group-links{display:grid;gap:12px;margin-top:22px}.group-links .text-link{justify-content:space-between;border-top:1px solid rgba(255,255,255,.26);padding-top:12px;color:#fff}.service-all-link{margin-top:34px;margin-bottom:0}.text-link{display:inline-flex;align-items:center;gap:10px;font-weight:800;color:var(--deep)}.text-link i{background:var(--green);color:#fff;border-radius:50%;font-size:11px;width:22px;height:22px;display:grid;place-items:center;transition:.25s;flex:0 0 auto}.text-link:hover i{transform:translateX(7px);background:var(--deep)}.service-group-card .text-link:hover i{background:#fff;color:var(--deep)}.photo-frame{position:relative;overflow:hidden;box-shadow:var(--shadow)}.photo-frame img{width:100%;height:100%;object-fit:cover}.photo-frame.tall{aspect-ratio:5/6}.badge{position:absolute;left:26px;bottom:26px;background:var(--green);color:#fff;padding:22px;max-width:260px;font-weight:800}.process-section{position:relative;isolation:isolate;overflow:hidden;background-color:var(--deep)}.process-bg-layer,.process-bg-shade{position:absolute;inset:0;pointer-events:none}.process-bg-layer{z-index:-2;background-position:center;background-size:cover;opacity:0;transform:scale(1.03);transition:.65s opacity ease,.85s transform ease}.process-bg-shade{z-index:-1;background:linear-gradient(180deg,rgba(17,21,22,.76),rgba(17,21,22,.9));opacity:0;transition:.5s opacity ease}.process-bg-describe{background-image:url('../assets/images/process-describe-hover.webp')}.process-bg-route{background-image:url('../assets/images/process-route-hover.webp')}.process-bg-connect{background-image:url('../assets/images/process-connect-hover.webp')}.process-bg-verify{background-image:url('../assets/images/process-verify-hover.webp')}.process-section[data-process-bg] .process-bg-shade{opacity:1}.process-section[data-process-bg="describe"] .process-bg-describe,.process-section[data-process-bg="route"] .process-bg-route,.process-section[data-process-bg="connect"] .process-bg-connect,.process-section[data-process-bg="verify"] .process-bg-verify{opacity:1;transform:scale(1)}.process-list{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:#394144}.process-step{position:relative;background:var(--deep);border:1px solid transparent;padding:42px 28px;min-height:230px;transition:.25s background-color,.25s border-color,.25s box-shadow,.25s transform,.25s backdrop-filter}.process-section[data-process-bg] .process-step{background:rgba(17,21,22,.88);backdrop-filter:blur(1px)}.process-step:hover,.process-step:focus-within{background:rgba(29,37,40,.76);border-color:rgba(156,187,45,.55);box-shadow:0 18px 46px rgba(0,0,0,.24),inset 0 1px 0 rgba(255,255,255,.08);transform:translateY(-6px);z-index:2}.process-step:hover span,.process-step:focus-within span{color:#fff}.process-step span{display:block;color:var(--green);font:300 42px/1 Roboto,Arial;margin-bottom:22px;transition:.25s color}.cta-band{background:linear-gradient(rgba(17,21,22,.74),rgba(17,21,22,.74)),url('../assets/images/process-worksite.webp') center/cover fixed;color:#fff;text-align:center;padding:120px 0}.cta-band h2{font:800 clamp(36px,5vw,64px)/1.05 Poppins,Arial;margin:0 auto 18px;max-width:900px}.page-hero{position:relative;min-height:440px;display:grid;align-items:end;color:#fff;background-color:var(--deep);background-image:linear-gradient(90deg,rgba(17,21,22,.68),rgba(17,21,22,.2)),var(--hero);background-position:center;background-size:cover}.page-hero .container{position:relative;z-index:1;padding:110px 0 70px}.detail-grid{display:grid;grid-template-columns:minmax(0,1fr) 360px;gap:60px}.detail-content h2,.detail-content h3{font-family:Poppins,Arial,sans-serif;color:var(--deep);line-height:1.15}.check-list{list-style:none;padding:0;margin:24px 0;display:grid;gap:12px}.check-list li{padding-left:34px;position:relative}.check-list li:before{content:"\\f00c";font-family:"Font Awesome 6 Free";font-weight:900;position:absolute;left:0;top:1px;color:var(--green)}.faq-layout>.section-title{max-width:860px}.faq-grid{display:grid;grid-template-columns:minmax(0,1fr) 360px;gap:34px;align-items:start}.faq-list{display:grid;gap:16px}.faq-item{background:#fff;border:1px solid rgba(156,187,45,.22);border-left:6px solid var(--green);padding:28px 30px;box-shadow:0 16px 38px rgba(17,21,22,.08);transition:.25s transform,.25s box-shadow}.faq-item:hover{transform:translateY(-4px);box-shadow:0 22px 52px rgba(17,21,22,.12)}.faq-item h3,.faq-note h3{font:800 24px/1.2 Poppins,Arial;margin:0 0 10px;color:var(--deep)}.faq-item p{margin:0;color:var(--muted)}.faq-note{background:var(--deep);color:#fff;padding:34px;position:sticky;top:120px;box-shadow:var(--shadow)}.faq-note h3{color:#fff}.faq-note .check-list{margin:24px 0 28px}.faq-note .check-list li{color:#dce7dc}.faq-note .check-list li:before{color:var(--green)}.faq-note .text-link{color:#fff;margin-top:8px}.sidebar-card{background:var(--pale);padding:32px;position:sticky;top:120px}.sidebar-card h3{font:800 26px/1.2 Poppins,Arial;margin-top:0}.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}.form-grid .full{grid-column:1/-1}label{font-weight:800;color:var(--deep)}input,textarea,select{width:100%;border:1px solid var(--line);padding:14px 15px;font:inherit;margin-top:6px;background:#fff}textarea{min-height:150px;resize:vertical}.contact-info{display:grid;gap:18px}.info-line{display:flex;gap:16px;align-items:flex-start}.info-line i{color:var(--green);font-size:22px;margin-top:6px}.legal{max-width:920px}.legal h2{font-family:Poppins,Arial,sans-serif;margin-top:42px;color:var(--deep)}.footer{background:#101516;color:#c7d0cb;padding:78px 0 28px}.footer-grid{display:grid;grid-template-columns:2fr 1fr 1.2fr 1fr;gap:42px}.footer h3{font-family:Poppins,Arial;color:#fff}.footer a,.footer span{display:block;margin:9px 0}.footer .brand{display:inline-flex}.footer-brand{color:#fff}.company-line{font-size:14px;color:#99a59f}.company-line span{display:inline;margin:0}.footer-disclaimer{border-top:1px solid #2b3335;margin-top:42px;padding-top:22px;font-size:12px;line-height:1.55;color:#98a39f}.footer-disclaimer strong{color:#fff}.copyright{border-top:1px solid #2b3335;margin-top:22px;padding-top:24px;font-size:14px}.reveal{opacity:1;transform:none;transition:opacity .7s ease,transform .7s ease}.reveal.is-visible{opacity:1;transform:none}
.service-card{border:1px solid transparent;transition:.3s transform,.3s box-shadow,.3s border-color}.service-card:hover{border-color:rgba(156,187,45,.34)}.service-group-card{border-color:rgba(255,255,255,.14);transition:.35s transform,.35s box-shadow,.35s border-color,.55s background-position}.service-group-card:before{opacity:.72;transition:.35s opacity,.35s background}.service-group-card:hover{transform:translateY(-8px);background-position:center 46%;border-color:rgba(156,187,45,.72);box-shadow:0 28px 72px rgba(0,0,0,.22)}.service-group-card:hover:before{opacity:1;background:linear-gradient(120deg,rgba(156,187,45,.2),rgba(17,21,22,.16) 42%,transparent 72%)}.service-group-card .service-card-body{transition:.3s transform}.service-group-card:hover .service-card-body{transform:translateY(-6px)}.service-group-card:hover .text-link i{background:#fff;color:var(--deep);transform:translateX(4px)}.service-group-card .text-link:hover i{background:#fff;color:var(--deep);transform:translateX(8px)}
.brand{gap:14px;line-height:1;min-width:0;transition:.25s transform}.brand:hover{transform:translateY(-1px)}.brand-mark{position:relative;width:60px;height:48px;flex:0 0 60px;border-radius:20px 10px 20px 10px;background:linear-gradient(135deg,#111516 0%,#22302d 58%,#9cbb2d 100%);box-shadow:0 14px 30px rgba(17,21,22,.18),inset 0 1px 0 rgba(255,255,255,.22);overflow:hidden}.brand-mark:after{content:"";position:absolute;inset:5px;border:1px solid rgba(255,255,255,.18);border-radius:16px 8px 16px 8px;pointer-events:none}.brand-copy{display:grid;gap:4px;min-width:0}.brand-name{display:block;font:800 24px/1 Poppins,Arial,sans-serif;color:var(--deep);white-space:nowrap}.brand-tagline{display:block;font:700 11px/1.1 Poppins,Arial,sans-serif;text-transform:uppercase;letter-spacing:.12em;color:#6f7b76;white-space:nowrap}.footer-brand .brand-name{color:#fff}.footer-brand .brand-tagline{color:#99a59f}.footer-brand .brand-mark{box-shadow:0 16px 34px rgba(0,0,0,.28),inset 0 1px 0 rgba(255,255,255,.22)}
.site-header{background:#0d1212;box-shadow:none}.site-header.is-scrolled{box-shadow:0 14px 34px rgba(0,0,0,.22)}.site-header .container{width:min(calc(100% - 190px),1700px)}.navrow{height:122px}.header-brand .brand-copy{display:none}.header-brand .brand-mark{width:62px;height:58px;flex-basis:62px;border:3px solid var(--green);border-radius:0;background:transparent;box-shadow:none}.header-brand .brand-mark:after{display:none}.menu{position:relative;flex:1;justify-content:center;gap:48px}.menu>a{display:inline-flex;align-items:center;gap:9px;color:#fff;font-weight:500}.menu>a:not(.nav-phone):after{display:none}.menu>a i{font-size:10px;color:currentColor;transition:.25s transform}.menu>a:hover i{transform:translateX(3px)}.menu>a.is-active i{transform:rotate(90deg)}.menu>a.is-active:hover i{transform:rotate(90deg) translateX(3px)}.menu>a:hover,.menu>a.is-active{color:var(--green)}.menu>a.header-phone{position:absolute;right:0;background:transparent;border:0;border-radius:0;color:var(--green);padding:0;font:300 30px/1 Roboto,Arial,sans-serif;letter-spacing:.04em}.menu>a.header-phone:hover{background:transparent;border-color:transparent;color:#fff;transform:none}
.brand-mark i{font-size:26px;color:#fff;line-height:1}.header-brand .brand-mark i{font-size:34px;color:var(--green)}.footer-brand .brand-mark i{font-size:26px;color:#fff}
.nav-item{position:relative}.home-menu>.nav-link{display:inline-flex;align-items:center;gap:9px;color:#fff;font-weight:500}.home-menu>.nav-link i{font-size:10px;color:currentColor;transition:.25s transform}.home-menu:hover>.nav-link,.home-menu:focus-within>.nav-link,.home-menu.is-active>.nav-link{color:var(--green)}.home-menu:hover>.nav-link i{transform:translateX(3px)}.home-menu.is-active>.nav-link i{transform:rotate(90deg)}.home-menu.is-active:hover>.nav-link i{transform:rotate(90deg) translateX(3px)}.home-dropdown{position:absolute;top:calc(100% + 22px);left:-22px;min-width:230px;background:#0d1212;border:1px solid rgba(156,187,45,.28);box-shadow:0 22px 52px rgba(0,0,0,.32);padding:14px 0;display:grid;gap:2px;opacity:0;visibility:hidden;transform:translateY(8px);transition:.22s opacity,.22s transform,.22s visibility;z-index:60}.home-menu:hover .home-dropdown,.home-menu:focus-within .home-dropdown{opacity:1;visibility:visible;transform:translateY(0)}.home-dropdown a{display:flex;align-items:center;justify-content:space-between;padding:10px 18px;color:#dce7dc;font-weight:500;white-space:nowrap}.home-dropdown a:hover,.home-dropdown a.is-active{color:var(--green);background:rgba(156,187,45,.08)}.home-dropdown a.is-active:after{content:"";width:7px;height:7px;border-radius:50%;background:var(--green)}
.about-menu>.nav-link{display:inline-flex;align-items:center;gap:9px;color:#fff;font-weight:500}.about-menu>.nav-link i{font-size:10px;color:currentColor;transition:.25s transform}.about-menu:hover>.nav-link,.about-menu:focus-within>.nav-link,.about-menu.is-active>.nav-link{color:var(--green)}.about-menu:hover>.nav-link i{transform:translateX(3px)}.about-menu.is-active>.nav-link i{transform:rotate(90deg)}.about-menu.is-active:hover>.nav-link i{transform:rotate(90deg) translateX(3px)}.about-menu:hover .home-dropdown,.about-menu:focus-within .home-dropdown{opacity:1;visibility:visible;transform:translateY(0)}
.hero h1,.page-hero h1,.section-title h2,.split h2,.cta-band h2{font-family:Roboto,Arial,sans-serif;font-weight:100;line-height:.88;letter-spacing:0}.hero h1,.page-hero h1{font-size:clamp(56px,7vw,112px)}.section-title h2,.split h2{font-size:clamp(42px,4.7vw,72px)}.cta-band h2{font-size:clamp(44px,5.5vw,82px)}.detail-content h2,.legal h2{font-family:Roboto,Arial,sans-serif;font-weight:100;line-height:.94}
.hero-content{max-width:1120px;padding:96px 0 86px}.hero h1{max-width:1100px;line-height:.96;font-size:clamp(60px,6.6vw,118px);margin:22px 0 28px}.hero p{max-width:780px}
.hero{background-image:linear-gradient(90deg,rgba(17,21,22,.78),rgba(17,21,22,.48) 48%,rgba(17,21,22,.24)),var(--hero)}
.accent-text{color:var(--green)}
.page-loader{background:rgba(13,18,18,.94)}.saw-blade{box-shadow:0 18px 42px rgba(0,0,0,.34)}.saw-blade:after{box-shadow:0 0 0 5px rgba(17,21,22,.42)}.saw-blade span{display:none}
.footer-brand{align-items:center;gap:16px;margin-bottom:22px}.footer-brand .brand-mark{width:62px;height:58px;flex-basis:62px;border:3px solid var(--green);border-radius:0;background:transparent;box-shadow:none;display:flex;align-items:center;justify-content:center}.footer-brand .brand-mark:after{display:none}.footer-brand .brand-mark i{display:block;font-size:34px;line-height:1;color:var(--green);transform:translateY(-2px)}.footer-brand .brand-name{font:800 25px/1 Poppins,Arial,sans-serif;color:#fff}.footer-brand .brand-tagline{margin-top:2px;color:var(--green);letter-spacing:.11em}
.footer a{transition:.25s color,.25s transform,.25s opacity}.footer a:not(.brand):hover{color:var(--green);transform:translateX(5px)}.footer-brand:hover{transform:translateY(-3px)}.footer-brand .brand-mark{transition:.25s background-color,.25s box-shadow,.25s transform}.footer-brand .brand-mark i,.footer-brand .brand-name,.footer-brand .brand-tagline{transition:.25s color}.footer-brand:hover .brand-mark{background:var(--green);box-shadow:0 16px 38px rgba(156,187,45,.2);transform:translateY(-1px)}.footer-brand:hover .brand-mark i{color:#0d1212}.footer-brand:hover .brand-name{color:var(--green)}.footer-disclaimer a:hover,.copyright a:hover{color:var(--green)}
.modal-open{overflow:hidden}.confirmation-modal{position:fixed;inset:0;z-index:9000;display:grid;place-items:center;padding:24px;background:rgba(13,18,18,.72);opacity:0;visibility:hidden;pointer-events:none;transition:.28s opacity,.28s visibility}.confirmation-modal.is-open{opacity:1;visibility:visible;pointer-events:auto}.confirmation-dialog{position:relative;width:min(100%,520px);background:#fff;color:var(--ink);padding:42px 38px;box-shadow:0 30px 80px rgba(0,0,0,.34);transform:translateY(14px);transition:.28s transform}.confirmation-modal.is-open .confirmation-dialog{transform:translateY(0)}.confirmation-icon{width:62px;height:62px;display:grid;place-items:center;background:var(--green);color:#0d1212;margin-bottom:22px;font-size:25px}.confirmation-dialog h2{font:800 32px/1.05 Poppins,Arial,sans-serif;margin:0 0 12px;color:var(--deep)}.confirmation-dialog p{margin:0;color:var(--muted)}.confirmation-dialog .btn{margin-top:28px}.modal-close{position:absolute;top:16px;right:16px;width:38px;height:38px;display:grid;place-items:center;border:1px solid var(--line);background:#fff;color:var(--deep);cursor:pointer;transition:.22s background-color,.22s color,.22s border-color}.modal-close:hover{background:var(--deep);border-color:var(--deep);color:#fff}
.contact-info .info-line>div{display:grid;gap:3px}.contact-info .info-line strong{display:block;line-height:1.2}.contact-info .info-line a,.contact-info .info-line span{display:block;margin:0;color:var(--ink);line-height:1.45}
.service-detail-media{display:grid;gap:22px;align-content:start}.service-detail-media img{width:100%;aspect-ratio:16/10;object-fit:cover;box-shadow:var(--shadow)}.service-detail-note{background:var(--deep);color:#dce7dc;padding:28px}.service-detail-note h3{font:800 24px/1.15 Poppins,Arial,sans-serif;color:#fff;margin:0 0 10px}.service-type-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}.service-type-card{background:#fff;border:1px solid rgba(156,187,45,.25);padding:28px;box-shadow:0 14px 34px rgba(17,21,22,.06);transition:.25s transform,.25s border-color,.25s box-shadow}.service-type-card:hover{transform:translateY(-5px);border-color:rgba(156,187,45,.7);box-shadow:0 22px 48px rgba(17,21,22,.12)}.service-type-card h3{font:800 22px/1.15 Poppins,Arial,sans-serif;color:var(--deep);margin:0 0 12px}.service-type-card p{margin:0;color:var(--muted)}.service-detail-blocks{display:grid;grid-template-columns:repeat(3,1fr);gap:28px}.service-detail-block{background:#fff;border-top:5px solid var(--green);padding:30px;box-shadow:0 16px 38px rgba(17,21,22,.08)}.service-detail-block h3{font:800 25px/1.15 Poppins,Arial,sans-serif;color:var(--deep);margin:0 0 18px}.service-detail-block .check-list{margin:0}.service-verify-band{background:var(--deep);color:#fff}.service-verify-band .lead{color:#cdd6d0}.service-verify-band .check-list li{color:#dce7dc}.service-verify-band .check-list li:before{color:var(--green)}.service-verify-band .sidebar-card{background:#fff;color:var(--ink)}.service-verify-band .sidebar-card h3{color:var(--deep)}.service-verify-band .sidebar-card p{color:var(--muted)}.service-verify-band .sidebar-card a:not(.nav-phone){display:block;margin:11px 0;color:var(--deep);font-weight:800;transition:.22s color,.22s transform}.service-verify-band .sidebar-card a:not(.nav-phone):hover{color:var(--green);transform:translateX(4px)}
.dropdown-branch{position:relative}.home-dropdown .dropdown-branch-link{display:flex;align-items:center;justify-content:space-between;gap:18px}.home-dropdown .dropdown-branch-link i{font-size:10px;color:currentColor;transition:.22s transform}.dropdown-panel{position:absolute;top:-14px;left:calc(100% + 10px);min-width:245px;background:#0d1212;border:1px solid rgba(156,187,45,.28);box-shadow:0 22px 52px rgba(0,0,0,.32);padding:14px 0;display:grid;gap:2px;opacity:0;visibility:hidden;transform:translateX(-6px);transition:.22s opacity,.22s transform,.22s visibility;z-index:70}.dropdown-branch:hover>.dropdown-panel,.dropdown-branch:focus-within>.dropdown-panel{opacity:1;visibility:visible;transform:translateX(0)}.dropdown-branch:hover>.dropdown-branch-link,.dropdown-branch:focus-within>.dropdown-branch-link{color:var(--green);background:rgba(156,187,45,.08)}.dropdown-branch:hover>.dropdown-branch-link i,.dropdown-branch:focus-within>.dropdown-branch-link i{transform:translateX(4px)}.category-panel{min-width:270px}.category-panel>.dropdown-branch>.dropdown-branch-link{font-weight:700}.category-panel .dropdown-panel{min-width:250px}
[id]{scroll-margin-top:99px}
@media (max-width:820px){.brand{gap:11px}.brand-mark{width:52px;height:42px;flex-basis:52px}.brand-name{font-size:21px}.brand-tagline{display:none}}
@media (max-width:420px){.brand-mark{width:46px;height:38px;flex-basis:46px;border-radius:16px 8px}.brand-name{font-size:19px;max-width:170px;overflow:hidden;text-overflow:ellipsis}}
@media (max-width:1180px){.service-type-grid{grid-template-columns:repeat(2,1fr)}.service-detail-blocks{grid-template-columns:1fr}}
@media (max-width:1180px){.service-grid{grid-template-columns:repeat(2,1fr)}.process-list{grid-template-columns:repeat(2,1fr)}.split{gap:40px}.footer-grid{grid-template-columns:1fr 1fr}}
@media (max-width:820px){.topbar{display:none}.navrow{height:74px}.menu-toggle{display:block}.menu{position:absolute;left:20px;right:20px;top:74px;background:#fff;box-shadow:var(--shadow);padding:20px;display:none;flex-direction:column;align-items:flex-start}.menu.is-open{display:flex}.nav-phone{width:100%}.hero{min-height:650px;background-attachment:scroll}.stats{grid-template-columns:repeat(2,1fr);margin-top:0}.stat:nth-child(2){border-right:0}.split,.detail-grid,.faq-grid{grid-template-columns:1fr}.service-grid{grid-template-columns:1fr}.section{padding:76px 0}.hero p,.page-hero p{font-size:18px}.footer-grid{grid-template-columns:1fr}.form-grid{grid-template-columns:1fr}.form-grid .full{grid-column:auto}.sidebar-card,.faq-note{position:static}.cta-band{background-attachment:scroll}.container{width:min(calc(100% - 28px),var(--container))}}
@media (max-width:820px){.service-type-grid{grid-template-columns:1fr}.service-detail-note,.service-type-card,.service-detail-block{padding:24px}}
@media (max-width:820px){.site-header .container{width:min(calc(100% - 28px),var(--container))}.navrow{height:82px}.header-brand .brand-mark{width:52px;height:50px;flex-basis:52px}.header-brand .brand-mark i{font-size:28px}.menu-toggle span{background:var(--green)}.menu{top:82px;background:#0d1212;border:1px solid rgba(156,187,45,.28);box-shadow:0 20px 46px rgba(0,0,0,.28);gap:18px}.menu>a{color:#fff}.menu>a.is-active{color:var(--green)}.menu>a.header-phone,.nav-phone.header-phone{position:static;width:auto;font-size:24px;margin-top:8px;color:var(--green)}}
@media (max-width:820px){.home-menu{width:100%;display:grid;gap:12px}.home-menu>.nav-link{width:100%}.home-dropdown{position:static;min-width:0;width:100%;opacity:1;visibility:visible;transform:none;box-shadow:none;border-color:rgba(156,187,45,.18);padding:8px 0}.home-dropdown a{padding:9px 14px;font-size:14px}.home-menu:hover>.nav-link i,.home-menu.is-active:hover>.nav-link i{transform:rotate(90deg)}}
@media (max-width:820px){.dropdown-panel{position:static;min-width:0;width:100%;opacity:1;visibility:visible;transform:none;box-shadow:none;border:0;border-left:1px solid rgba(156,187,45,.22);margin:3px 0 6px 14px;padding:4px 0 4px 10px}.category-panel{min-width:0}.home-dropdown .dropdown-branch-link i{transform:rotate(90deg)}.dropdown-branch:hover>.dropdown-branch-link i,.dropdown-branch:focus-within>.dropdown-branch-link i{transform:rotate(90deg)}}
@media (max-width:820px){.about-menu{width:100%;display:grid;gap:12px}.about-menu>.nav-link{width:100%}.about-menu:hover>.nav-link i,.about-menu.is-active:hover>.nav-link i{transform:rotate(90deg)}}
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
  <section class="page-hero" style="--hero:url('../assets/images/about-hero-connect.webp')"><div class="container reveal"><span class="eyebrow">About</span><h1>A connection service for homeowners facing <span class="accent-text">tree problems</span>.</h1><p>ArborLine Connect is not a contractor and does not perform tree work. We help homeowners find independent local providers who may be able to respond quickly and safely.</p></div></section>
  <section class="section" id="about-company"><div class="container split"><div class="photo-frame tall reveal"><img src="assets/images/about-team.webp" alt="Tree service providers shown as illustrative models"><div class="badge">Free request help. Independent providers. Homeowner verification.</div></div><div class="reveal"><span class="kicker">About company</span><h2>Built to make urgent tree requests easier to <span class="accent-text">route</span>.</h2><p class="lead">ArborLine was created for homeowners who do not know where to start when a tree is leaning, storm debris blocks access, a stump delays a yard project, or brush cleanup becomes too much to manage alone.</p><p>Instead of presenting ourselves as the crew doing the work, we operate as an aggregator. Our site collects the basic details of a tree-related request and helps connect homeowners with local independent service providers. The provider, not this site, is responsible for estimates, licenses, insurance, scheduling, safety practices, and completed work.</p><p>Our role is to reduce the friction of describing the same issue repeatedly. A clear request can include the tree location, access limits, visible damage, urgency level, photos, cleanup expectations, and the type of property affected.</p><h3>How we think about requests</h3><ul class="check-list"><li>Start with the homeowner's safety concern or access problem</li><li>Organize the request into a practical provider category</li><li>Keep the homeowner responsible for final contractor verification</li><li>Avoid promising response times, pricing, workmanship, or availability</li></ul><h3>What makes the site different</h3><p>ArborLine is designed as a simple connection layer. It helps homeowners prepare a better request, while independent providers remain responsible for estimates, scheduling, insurance, licensing, jobsite decisions, and completed work.</p></div></div></section>
  <section class="section alt" id="about-services"><div class="container split"><div class="reveal"><span class="kicker">About services</span><h2>Provider categories built around real <span class="accent-text">tree problems</span>.</h2><p class="lead">The site organizes requests by the type of issue homeowners usually need help describing: removal, pruning, storm cleanup, stump grinding, brush removal, lot clearing, and tree health concerns.</p><p>Each category is a connection path, not a direct service offering from ArborLine. Independent providers decide whether they can respond, quote, schedule, and perform the work.</p><h3>Common request groups</h3><ul class="check-list"><li><strong>Urgent hazards:</strong> leaning trees, split trunks, fallen limbs, blocked access, and storm debris</li><li><strong>Tree care:</strong> pruning, clearance trimming, structural concerns, and visible health symptoms</li><li><strong>Cleanup and clearing:</strong> stumps, brush piles, overgrowth, lot clearing, and haul-away needs</li></ul><h3>What homeowners should prepare</h3><p>Useful details include approximate tree size, where the issue is located, whether structures or utilities are nearby, how providers can access the area, whether debris removal is needed, and whether the request feels urgent.</p><a class="text-link" href="index.html#provider-categories">View provider categories <i class="fa-solid fa-arrow-right"></i></a></div><aside class="sidebar-card reveal"><h3>What ArborLine helps route</h3><ul class="check-list"><li>Urgent tree hazards and storm damage</li><li>Pruning, clearance, and assessment requests</li><li>Stumps, brush piles, and property clearing</li><li>Provider conversations that homeowners verify directly</li></ul><hr><h3>Before hiring</h3><p>Ask any provider for license and insurance details, a written scope, cleanup terms, disposal expectations, and the name of the party responsible for the work.</p></aside></div></section>
</main>`
}));

out("contact.html", page({
  title: "Contact ArborLine Connect | Request Provider Connection",
  description: "Submit a free request to connect with independent local providers for tree removal, pruning, stump grinding, storm cleanup, and brush removal.",
  active: "contact",
  body: `
<main>
  <section class="page-hero" style="--hero:url('../assets/images/contact-consultation.webp')"><div class="container reveal"><span class="eyebrow">Contact</span><h1>Tell us what kind of <span class="accent-text">provider</span> you need.</h1><p>Share the tree location, access limits, storm damage, cleanup needs, and urgency so the request can be routed toward relevant independent local providers.</p></div></section>
  <section class="section"><div class="container split"><form class="reveal" data-contact-form><div class="form-grid"><label>Name<input required name="name" autocomplete="name"></label><label>Email<input required type="email" name="email" autocomplete="email"></label><label>Phone<input required name="phone" autocomplete="tel"></label><label>Service<select name="service">${services.map(s => `<option>${s.title}</option>`).join("")}</select></label><label class="full">Message<textarea required name="message"></textarea></label></div><button class="btn" type="submit">Request Provider Help</button></form><div class="contact-info reveal"><span class="kicker">Connection details</span><h2>A free request service for homeowners seeking <span class="accent-text">local tree providers</span>.</h2><p>This site helps collect and route your request. Any provider you choose to hire is independent from this site, and you are responsible for verifying license, insurance, pricing, and scope before work begins.</p><div class="info-line"><i class="fa-solid fa-phone"></i><div><strong>Phone</strong><a data-config="phoneLabel" data-attr="href:tel" href="#"></a></div></div><div class="info-line"><i class="fa-solid fa-envelope"></i><div><strong>Email</strong><a data-config="email" data-attr="href:mailto" href="#"></a></div></div><div class="info-line"><i class="fa-solid fa-location-dot"></i><div><strong>Service area</strong><span data-service-area></span></div></div><div class="info-line"><i class="fa-solid fa-globe"></i><div><strong>Website</strong><a data-config="website" data-attr="href" href="#"></a></div></div></div></div></section>
  <div class="confirmation-modal" data-confirmation-modal aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="confirmation-title">
    <div class="confirmation-dialog">
      <button class="modal-close" type="button" aria-label="Close confirmation" data-modal-close><i class="fa-solid fa-xmark"></i></button>
      <div class="confirmation-icon" aria-hidden="true"><i class="fa-solid fa-check"></i></div>
      <h2 id="confirmation-title">Request received</h2>
      <p>Your request has been submitted. ArborLine Connect will review the details and route the inquiry toward relevant independent local providers.</p>
      <button class="btn" type="button" data-modal-close>Close</button>
    </div>
  </div>
</main>`
}));

for (const s of services) {
  const detail = serviceDetailContent[s.slug];
  out(`services/${s.slug}.html`, page({
    title: `${s.title} Provider Connections | ArborLine Connect`,
    description: `${s.summary} Learn what details to prepare before connecting with an independent local provider.`,
    depth: "../",
    active: "home",
    body: `
<main>
  <section class="page-hero" style="--hero:url('../assets/images/${s.image}')"><div class="container reveal"><span class="eyebrow">Provider category</span><h1>${s.title}</h1><p>${s.summary}</p></div></section>
  <section class="section"><div class="container detail-grid"><article class="detail-content reveal"><span class="kicker">Connection guide</span><h2>What this <span class="accent-text">request category</span> can help organize</h2><p class="lead">${s.intro}</p><p>This page describes the types of requests that may fit this category. ArborLine Connect helps organize and route homeowner information only. Independent providers decide whether they can inspect, quote, schedule, and perform the work.</p><h3>When to request ${s.title.toLowerCase()} help</h3><p>Submit a request when the tree, stump, brush, or debris is limiting safe access, threatening structures, blocking future landscaping, creating cleanup pressure, or making it difficult to decide which provider category applies.</p><h3>Original request details this category captures</h3><ul class="check-list">${s.includes.map(i => `<li>${i}</li>`).join("")}</ul><a class="btn" href="../contact.html">Request Provider Help</a></article><aside class="service-detail-media reveal"><img src="../assets/images/${detail.detailImage}" alt="${detail.imageAlt}" loading="lazy"><div class="service-detail-note"><h3>Aggregator note</h3><p>This site does not perform ${s.title.toLowerCase()} work. It helps homeowners describe the situation and seek follow-up from independent local providers.</p></div></aside></div></section>
  <section class="section alt"><div class="container"><div class="section-title reveal"><span class="kicker">Service types</span><h2>Common <span class="accent-text">${s.title.toLowerCase()}</span> request types.</h2><p class="lead">These examples help homeowners choose the best request path before speaking with an independent provider.</p></div><div class="service-type-grid">${detail.serviceTypes.map(([title, text]) => `<article class="service-type-card reveal"><h3>${title}</h3><p>${text}</p></article>`).join("")}</div></div></section>
  <section class="section"><div class="container service-detail-blocks"><article class="service-detail-block reveal"><h3>What may be included</h3><ul class="check-list">${detail.includedWork.map(item => `<li>${item}</li>`).join("")}</ul></article><article class="service-detail-block reveal"><h3>Details to prepare</h3><ul class="check-list">${detail.prepare.map(item => `<li>${item}</li>`).join("")}</ul></article><article class="service-detail-block reveal"><h3>Confirm before hiring</h3><ul class="check-list">${detail.verification.map(item => `<li>${item}</li>`).join("")}</ul></article></div></section>
  <section class="section service-verify-band"><div class="container split"><div class="reveal"><span class="kicker">Provider verification</span><h2>Use the connection, then verify the provider directly.</h2><p class="lead">ArborLine Connect is not responsible for estimates, safety practices, licensing, insurance, workmanship, cleanup, or final results. Those details belong in the homeowner's direct conversation with the independent provider.</p><ul class="check-list">${s.details.map(d => `<li>${d}</li>`).join("")}</ul></div><aside class="sidebar-card reveal"><h3>Need ${s.title.toLowerCase()}?</h3><p>Connection requests are available for <span data-service-area></span>. Independent providers set their own availability, pricing, license status, insurance coverage, and work terms.</p><a class="nav-phone" data-config="phoneLabel" data-attr="href:tel" href="#"></a><hr><h3>Related categories</h3>${services.filter(x => x.slug !== s.slug).slice(0,4).map(x => `<a href="${x.slug}.html">${x.title}</a>`).join("")}</aside></div></section>
</main>`
  }));
}

const legalPages = {
  "privacy-policy.html": {
    title: "Privacy Policy",
    intro: "This Privacy Policy explains how ArborLine Connect collects, uses, and shares information submitted through this homeowner connection website.",
    content: `
      <h2>Overview</h2>
      <p>ArborLine Connect operates as a free online connection and request-routing service for homeowners seeking independent local tree service providers. We are not a tree service contractor, do not perform tree removal, pruning, stump grinding, storm cleanup, brush removal, or related work, and do not supervise the providers who may contact you.</p>
      <p>This policy explains how information may be collected when you visit the website, submit a request, call, email, or otherwise communicate with us. By using the website, you acknowledge that information you provide may be used to help route your request to relevant independent providers or to respond to your inquiry.</p>

      <h2>Information we may collect</h2>
      <p>We may collect information you submit directly, including your name, phone number, email address, service category, property city or area, request details, urgency notes, photos or descriptions you choose to provide, and any message sent through a form, phone call, email, or other contact method.</p>
      <p>We may also collect basic technical information related to website operation, such as browser type, device type, pages visited, referring page, approximate location derived from technical signals, form submission timestamps, and security or diagnostic logs. This information helps keep the site functional, secure, and easier to improve.</p>

      <h2>How information is used</h2>
      <p>Information may be used to understand the nature of your request, communicate with you, organize your request into a relevant provider category, route your inquiry to independent local providers, maintain records of requests, prevent spam or misuse, improve website content, and comply with legal or operational requirements.</p>
      <p>Because this website is an aggregator and connection service, some request information may need to be shared with independent providers so they can decide whether to contact you, evaluate availability, ask follow-up questions, or provide their own quote or estimate. Any provider you choose to hire is independent from this site.</p>

      <h2>Sharing with independent providers</h2>
      <p>When you submit a request, you authorize us to share relevant request information with one or more independent providers or operational partners who may help respond to, route, or process the inquiry. Shared information may include contact details, service type, property area, request description, urgency indicators, and other details needed for provider follow-up.</p>
      <p>We do not control how independent providers operate after they receive your information. Homeowners should ask providers directly about their privacy practices, communication preferences, licensing, insurance, estimates, scheduling, and work terms before hiring.</p>

      <h2>No sale of personal information</h2>
      <p>We do not sell personal information in the ordinary sense of exchanging it for money. Information may be shared as part of operating a homeowner connection service, including with independent providers, communication tools, hosting systems, analytics systems, form processors, security services, and other vendors that support website functionality.</p>

      <h2>Calls, texts, and email communication</h2>
      <p>By submitting contact information, you may be contacted about your request by ArborLine Connect, an operational partner, or an independent provider. Communications may occur by phone, email, or text message where permitted. Message and data rates may apply. You can ask a provider or contact us to stop non-essential follow-up communications.</p>

      <h2>Data retention</h2>
      <p>Request information may be retained for operational records, quality review, fraud prevention, dispute handling, compliance, and website improvement. Retention periods may vary depending on the nature of the request, business needs, and applicable legal requirements.</p>

      <h2>Security</h2>
      <p>We use reasonable administrative and technical measures intended to protect information handled through the website. No website, form, email, phone system, or data transmission method can be guaranteed to be fully secure. You should avoid submitting highly sensitive information that is not needed to describe a tree-related request.</p>

      <h2>Your choices</h2>
      <p>You may contact us to request access, correction, deletion, or limitation of information associated with your request, subject to reasonable verification and any records we need to retain for operational or legal reasons. You may also choose not to submit a form and instead contact providers directly on your own.</p>

      <h2>Children's privacy</h2>
      <p>This website is intended for homeowners and adults seeking service-provider connections. It is not directed to children, and we do not knowingly collect personal information from children.</p>

      <h2>Contact and updates</h2>
      <p>Questions about this Privacy Policy can be sent to <a data-config="email" data-attr="href:mailto" href="#"></a>. This policy may be updated when website functionality, business practices, provider routing processes, or legal requirements change.</p>
    `
  },
  "terms-and-conditions.html": {
    title: "Terms & Conditions",
    intro: "These Terms & Conditions describe how this website may be used as a homeowner connection service for independent tree service providers.",
    content: `
      <h2>Agreement to these terms</h2>
      <p>By accessing or using ArborLine Connect, submitting a request, calling, emailing, or interacting with this website, you agree to these Terms & Conditions. If you do not agree, you should not use the website or submit a request through it.</p>

      <h2>Aggregator and connection-service role</h2>
      <p>ArborLine Connect is a free service designed to assist homeowners in connecting with local independent service providers. The website helps collect request details and may route those details to providers who may be able to respond. ArborLine Connect is not a contractor, tree service company, arborist firm, emergency response crew, insurer, broker, agent, employer, or representative of any independent provider.</p>
      <p>We do not perform tree removal, pruning, trimming, stump grinding, brush removal, storm cleanup, lot clearing, tree assessment, hauling, or any other physical work. We do not provide professional arboricultural, engineering, legal, insurance, or safety advice. Website content is general information intended to help homeowners describe a request more clearly.</p>

      <h2>Independent providers</h2>
      <p>All contractors, companies, crews, arborists, estimators, and service providers that may contact you are independent from this website. They are not employees, agents, partners, joint venturers, franchisees, or representatives of ArborLine Connect. Providers make their own decisions about whether to contact you, inspect the property, quote a job, schedule work, perform work, or decline a request.</p>
      <p>ArborLine Connect does not control provider pricing, estimates, availability, scheduling, equipment, safety procedures, licenses, insurance, permits, workmanship, cleanup, debris disposal, property protection, payment terms, warranties, or results.</p>

      <h2>Homeowner responsibility</h2>
      <p>Before hiring any provider, the homeowner is responsible for verifying that the provider is properly licensed, insured, bonded where applicable, qualified for the work, authorized to operate in the relevant location, and suitable for the project. You should request proof of license and insurance directly from the provider and confirm that coverage applies to the specific work being performed.</p>
      <p>You are responsible for reviewing and accepting any estimate, contract, scope of work, timeline, access plan, disposal plan, cancellation term, payment term, warranty, and safety-related instruction directly with the provider. Any agreement for work is between you and the provider, not with ArborLine Connect.</p>

      <h2>No guarantee of provider contact or results</h2>
      <p>Submitting a request does not guarantee that a provider will contact you, inspect your property, provide an estimate, be available, meet a desired timeline, offer emergency response, or perform any work. Provider availability depends on location, workload, weather, hazard level, equipment, staffing, and the provider's own business practices.</p>
      <p>We do not warrant or guarantee any provider's work, conduct, qualifications, pricing, quote accuracy, response time, safety practices, cleanup, disposal, permits, insurance status, licensing status, or final result.</p>

      <h2>Emergency and hazardous situations</h2>
      <p>Tree-related hazards can be dangerous, especially when trees are leaning, limbs are hanging, trunks are split, power lines are involved, storm debris is unstable, or access is blocked. This website is not an emergency service. If there is an immediate threat to life, injury, fire, utility lines, blocked emergency access, or serious property danger, contact local emergency services, utility providers, or appropriate authorities.</p>
      <p>Do not approach, cut, climb, move, or attempt to stabilize hazardous trees or limbs unless you are properly trained and equipped. Independent providers are responsible for their own site assessment and work practices.</p>

      <h2>Request accuracy</h2>
      <p>You agree to provide accurate and current information when submitting a request, including contact details, property location or service area, service category, known access limits, visible hazards, and relevant project details. Incomplete or inaccurate information may delay routing or provider follow-up.</p>

      <h2>Payments and contracts</h2>
      <p>ArborLine Connect does not collect payment for provider work through this website unless a specific payment feature is clearly presented. Any estimate, deposit, invoice, financing, payment method, refund, cancellation, or dispute about work should be handled directly between the homeowner and the independent provider.</p>

      <h2>Photos and media</h2>
      <p>Photos, videos, icons, illustrations, and people depicted on this website may be illustrative, staged, stock, AI-generated, actors, or models. They should not be interpreted as actual providers listed on the site, proof of completed work, or a representation that a specific provider will perform your project.</p>

      <h2>Website content</h2>
      <p>Website content is provided for general informational purposes. It may describe common tree-related requests, preparation steps, and questions homeowners may ask providers. It does not replace an on-site assessment by a qualified professional and should not be relied on as a safety determination.</p>

      <h2>Limitation of liability</h2>
      <p>To the maximum extent permitted by law, ArborLine Connect is not responsible for damages, losses, injuries, property damage, delays, disputes, workmanship issues, pricing disagreements, cleanup concerns, insurance issues, licensing issues, or other claims arising from or related to work performed or not performed by independent providers.</p>

      <h2>Changes to the website</h2>
      <p>We may update, suspend, remove, or modify website content, provider categories, routing processes, contact methods, forms, and these terms at any time. Continued use of the website after updates means you accept the revised terms.</p>

      <h2>Contact</h2>
      <p>Questions about these Terms & Conditions can be sent to <a data-config="email" data-attr="href:mailto" href="#"></a>.</p>
    `
  },
  "cookie-policy.html": {
    title: "Cookie Policy",
    intro: "This Cookie Policy explains how cookies and similar technologies may support this homeowner connection website.",
    content: `
      <h2>Overview</h2>
      <p>ArborLine Connect may use cookies, pixels, local storage, log files, and similar technologies to operate the website, maintain basic functionality, understand website performance, protect forms from misuse, and improve request-routing experiences for homeowners.</p>
      <p>This site is an aggregator and connection service. Cookie use supports the website experience and does not mean ArborLine Connect performs tree service work or controls any independent provider that may contact you.</p>

      <h2>What cookies are</h2>
      <p>Cookies are small files stored on a browser or device when a website is visited. Similar technologies may store identifiers, remember preferences, record technical events, measure traffic, or help website tools function correctly.</p>

      <h2>Types of cookies that may be used</h2>
      <p><strong>Essential cookies</strong> may support page loading, forms, security, spam prevention, consent preferences, and basic website functionality. These are used to make the site work properly.</p>
      <p><strong>Analytics cookies</strong> may help understand how visitors use the website, such as pages viewed, approximate traffic sources, device type, and general performance. This helps improve content and request flow.</p>
      <p><strong>Advertising or measurement cookies</strong> may be used only if advertising, call tracking, remarketing, or campaign measurement tools are added through an approved implementation. These tools may help understand which pages or ads led to a request.</p>
      <p><strong>Communication and form tools</strong> may use cookies or similar technologies to support form submissions, phone tracking, email routing, fraud prevention, or request-management workflows.</p>

      <h2>Third-party technologies</h2>
      <p>Some cookies or tracking technologies may be placed by third-party service providers used for hosting, analytics, security, advertising, call tracking, form handling, or communication. These third parties may process technical information according to their own policies.</p>

      <h2>How cookies relate to provider routing</h2>
      <p>Cookies may help us understand how a homeowner reached the website or interacted with request pages. They do not determine whether an independent provider is licensed, insured, qualified, available, or suitable. Homeowners remain responsible for verifying any provider before hiring.</p>

      <h2>Your choices</h2>
      <p>You can control cookies through your browser settings, including blocking, deleting, or limiting cookies. Some browsers also offer privacy, tracking-prevention, or private-browsing tools. Blocking cookies may affect forms, analytics accuracy, preference storage, embedded tools, or other site features.</p>

      <h2>Do Not Track and preference signals</h2>
      <p>Some browsers send Do Not Track or similar signals. Because standards for these signals vary, the website may not respond to every signal automatically. Where required by law or supported by implemented consent tools, additional choices may be presented.</p>

      <h2>Updates</h2>
      <p>This Cookie Policy may be updated if website tools, analytics, advertising systems, form processors, call tracking, consent features, or legal requirements change.</p>

      <h2>Contact</h2>
      <p>Questions about this Cookie Policy can be sent to <a data-config="email" data-attr="href:mailto" href="#"></a>.</p>
    `
  }
};
for (const [file, legalPage] of Object.entries(legalPages)) {
  out(file, page({
    title: `${legalPage.title} | ArborLine Connect`,
    description: `${legalPage.title} for ArborLine Connect, a homeowner connection service for independent local tree providers.`,
    body: `<main><section class="page-hero" style="--hero:url('../assets/images/hero-tree-removal.webp')"><div class="container reveal"><span class="eyebrow">Policy</span><h1>${legalPage.title}</h1><p>${legalPage.intro}</p></div></section><section class="section"><div class="container legal reveal">${legalPage.content}</div></section></main>`
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
