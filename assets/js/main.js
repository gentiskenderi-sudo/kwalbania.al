/* KW Albania — luxury edition: language, navigation, search, consultants, enquiry form. */
(function () {
  "use strict";
  var doc = document.documentElement;
  doc.classList.remove("no-js");

  /* ---------------- Consultants (one list for every page) ---------------- */
  var LEADERS = [
    { name: "Genti Skenderaj", slug: "genti-skenderaj", id: "754897", photo: true, role: "ad.l1role", roleSq: "Drejtor Operativ Rajonal", phone: "+355 67 200 3030", email: "genti.skenderaj@kwalbania.com" },
    { name: "Ani Pistolja", slug: "ani-pistolja", id: "2000115189", photo: true, role: "ad.l2role", roleSq: "Administratore e Qendrës", phone: "+355 69 461 5510", email: "anipistolja@kwalbania.com" }
  ];
  var AGENTS = [
    { name: "Altin Kaja", slug: "altin-kaja", id: "2000063083", photo: true, phone: "+355 68 570 1551", email: "altinkaja@kwalbania.com" },
    { name: "Arion Qafa", slug: "arion-qafa", id: "2000121878", phone: "+355 69 425 3451", email: "arionqafa@gmail.com" },
    { name: "Artan Dervishaj", slug: "artan-dervishaj", id: "2000059849", phone: "+355 69 208 8882", email: "artandervishaj@kwalbania.com" },
    { name: "Bledar Arapi", slug: "bledar-arapi", id: "2000055247", photo: true, phone: "+355 68 902 6510", email: "bledararapi@kwalbania.com" },
    { name: "Dasantiela Demaj", slug: "dasantiela-demaj", id: "2000000624", photo: true, phone: "+355 69 535 0036", email: "dasantielademaj@kwalbania.com" },
    { name: "Edmond Bejdo", slug: "edmond-bejdo", id: "2000108369", phone: "+355 68 403 2432", email: "edmondbejdo@kwalbania.com" },
    { name: "Enea Jatagani", slug: "enea-jatagani", id: "2000000629", photo: true, phone: "+355 69 535 0679", email: "eneajatagani@kwalbania.com" },
    { name: "Ilir Pustina", slug: "ilir-pustina", id: "2000036951", phone: "+355 68 207 9320", email: "ilirpustina@kwalbania.com" },
    { name: "Jessica Pompa", slug: "jessica-pompa", id: "2000155135", photo: true, phone: "+971 58 583 6630", email: "jessicapompa@outlook.com" },
    { name: "Kamela Hysa", slug: "kamela-hysa", id: "2000042706", phone: "+355 69 458 9580", email: "kamelahysa@kwalbania.com" },
    { name: "Klaudia Lazaj", slug: "klaudia-lazaj", id: "2000158713", phone: "+355 68 262 9358", email: "klaudialazaj1@gmail.com" },
    { name: "Ledjan Mehmeti", slug: "ledjan-mehmeti", id: "855983", photo: true, phone: "+355 69 285 1443", email: "ledjan.m@gmail.com" },
    { name: "Orli Zotaj", slug: "orli-zotaj", id: "786510", photo: true, phone: "+355 67 201 6555", email: "orlizotaj@kwalbania.com" },
    { name: "Panajot Panajoti", slug: "panajot-panajoti", id: "787754", photo: true, phone: "+355 68 203 0531", email: "panajotpanajoti@kwalbania.com" },
    { name: "Radolf Oshafi", slug: "radolf-oshafi", id: "2000138224", photo: true, phone: "+355 69 636 3028", email: "radolfoshafi@kwalbania.com" }
  ];

  function initials(n) { return n.split(" ").map(function (w) { return w.charAt(0); }).join("").slice(0, 2); }
  function profile(a) { return "https://kwalbania.kw.com/sq/agent/" + a.slug + "/" + a.id; }
  function photo(a) {
    return a.photo
      ? '<img src="/assets/agents/' + a.slug + '.jpg" alt="' + a.name + '" loading="lazy" width="448" height="560">'
      : '<span class="agent__initials" aria-hidden="true">' + initials(a.name) + "</span>";
  }
  function card(a, withContact) {
    var role = a.role
      ? '<p class="agent__role" data-i18n="' + a.role + '">' + a.roleSq + "</p>"
      : '<p class="agent__role" data-i18n="ad.role">Konsulent · KW Albania</p>';
    var contact = withContact
      ? '<p class="agent__contact"><a href="tel:' + a.phone.replace(/\s/g, "") + '">' + a.phone + '</a><a href="mailto:' + a.email + '">' + a.email + "</a></p>" +
        '<a class="agent__link" href="' + profile(a) + '" target="_blank" rel="noopener" data-i18n="ad.profile">Shiko profilin</a>'
      : "";
    return (
      '<article class="agent reveal">' +
        '<a class="agent__main" href="' + profile(a) + '" target="_blank" rel="noopener">' +
          '<figure class="agent__photo">' + photo(a) + "</figure>" +
          '<h3 class="agent__name">' + a.name + "</h3>" + role +
        "</a>" + contact +
      "</article>"
    );
  }
  var grid = document.getElementById("agents");
  if (grid) grid.innerHTML = AGENTS.filter(function (a) { return a.photo; }).map(function (a) { return card(a, false); }).join("");
  var leadGrid = document.getElementById("team-leaders");
  if (leadGrid) leadGrid.innerHTML = LEADERS.map(function (a) { return card(a, true); }).join("");
  var teamGrid = document.getElementById("team");
  if (teamGrid) teamGrid.innerHTML = AGENTS.map(function (a) { return card(a, true); }).join("");

  /* ---------------- Translations ---------------- */
  var EN = {
    "skip": "Skip to content",
    "nav.properties": "Properties", "nav.markets": "Markets", "nav.services": "Services",
    "nav.advisors": "Consultants", "nav.franchise": "Franchise", "nav.contact": "Contact", "nav.cta": "Sell with us",
    "hero.eyebrow": "Keller Williams · Albania",
    "hero.title": "Find your <em>ideal</em><br>property in Albania",
    "hero.lede": "From Tirana’s Blloku to the Ionian coast: carefully selected homes and consultants who know every neighbourhood.",
    "search.offer": "Offer", "search.sale": "Sale", "search.rent": "Rent", "search.type": "Property type",
    "search.all": "All", "search.apartment": "Apartment", "search.house": "House / Villa",
    "search.commercial": "Commercial", "search.land": "Land / Lot", "search.location": "Location",
    "search.allAlbania": "All Albania", "search.cta": "Search",
    "intro.eyebrow": "The world’s largest network",
    "intro.title": "Part of the world’s largest real estate network, <em>now in Albania too.</em>",
    "intro.body": "Buy, sell and invest with consultants trained to global KW standards. Every property verified, photographed and ready to visit; every client with a personal consultant from the first call to the notary.",
    "stats.prices": "housing prices<small>Bank of Albania</small>",
    "stats.sales": "property sales 2025<small>State Cadastre (ASHK)</small>",
    "stats.tirana": "average per m² in Tirana<small>Keydata / Monitor</small>",
    "col.eyebrow": "Weekly selection", "col.title": "Featured <em>properties</em>",
    "col.intro": "The latest listings added by KW Albania network consultants. All verified, photographed and ready to visit.",
    "col.all": "All properties",
    "tag.sale": "Sale", "tag.rent": "Rent",
    "l1.loc": "Blloku, Tirana", "l1.title": "Renovated 3+1 apartment",
    "l2.loc": "Sarandë, Ionian coast", "l2.title": "Villa with pool and sea view",
    "l3.loc": "Seafront, Vlorë", "l3.title": "Panoramic penthouse, 60 m² terrace",
    "l4.loc": "Beach, Durrës", "l4.title": "Modern furnished studio",
    "l5.loc": "Centre, Tirana", "l5.title": "Open-space office, 6 desks",
    "l6.loc": "Shirokë, Shkodër", "l6.title": "Buildable land, Lake Shkodër",
    "f.beds4": "4 rooms", "f.beds3": "3 rooms", "f.beds1": "1 room",
    "f.baths3": "3 baths", "f.baths2": "2 baths", "f.baths1": "1 bath",
    "f.month": "/month", "f.center": "Centre", "f.lift": "Elevator", "f.lake": "Lake view", "f.permit": "Permit",
    "pano.quote": "“An exceptional home deserves equally exceptional representation.”",
    "pano.cite": "KW Albania · Luxury properties",
    "mk.eyebrow": "Our markets", "mk.title": "Where to invest in Albania <em>today</em>",
    "mk.intro": "Indicative prices per square metre in the main destinations, based on the latest market data.",
    "mk.tirana": "Average price", "mk.sarande": "Ionian Riviera", "mk.durres": "Beach area",
    "mk.source": "Source: Keydata / Monitor (2026) · Bank of Albania (H2 2025) · ASHK, 2025 transactions (via Reporter.al). Figures are indicative.",
    "sv.eyebrow": "Services", "sv.title": "A complete service, <em>one point of contact.</em>",
    "sv.1t": "Home valuation", "sv.1d": "A valuation based on real sales in the area, so you go to market at the right price from day one.",
    "sv.2t": "Investments", "sv.2d": "Market analysis and property selection for investors seeking rental income or capital growth.",
    "sv.3t": "Property management", "sv.3d": "Finding tenants, contracts and day-to-day care of your property while you are away.",
    "sv.4t": "For foreigners and the diaspora", "sv.4d": "Step-by-step support buying in Albania: documents, notary, bank and cadastre registration.",
    "ad.eyebrow": "The local network", "ad.title": "KW Albania <em>consultants</em>",
    "ad.intro": "Local professionals trained to global Keller Williams standards. They know every neighbourhood, every listing, every type of client.",
    "ad.l1role": "Regional Operating Director", "ad.l2role": "Office Administrator",
    "ad.role": "Consultant · KW Albania", "ad.all": "See the whole team",
    "cr.eyebrow": "Careers · Franchise", "cr.title": "Join the <em>team</em>",
    "cr.body": "Want to become a consultant at KW Albania? Join the world’s largest real estate network, with training, technology and a business model proven worldwide.",
    "cr.cta1": "Become a consultant", "cr.cta2": "Get a franchise",
    "jr.e1": "Event", "jr.t1": "Our next event is coming soon", "jr.d1": "Details will be published here.",
    "jr.e2": "Blog", "jr.t2": "News, market analysis and advice", "jr.d2": "From our consultants, straight from the field.",
    "jr.soon": "Coming soon",
    "ct.eyebrow": "Private consultation", "ct.title": "Let’s talk about <em>your property.</em>",
    "ct.body": "Looking to sell, buy or invest? Leave your details and a consultant will contact you within one business day.",
    "ct.office": "Office", "ct.phone": "Phone",
    "fm.name": "Full name", "fm.phone": "Phone", "fm.intent": "How can we help?",
    "fm.o1": "I want to sell", "fm.o2": "I want to buy", "fm.o3": "I want to invest",
    "fm.o4": "I want to rent out", "fm.o5": "I want to become a consultant",
    "fm.msg": "Message", "fm.err": "Please enter your name, phone and a valid email.",
    "fm.send": "Send enquiry", "fm.note": "Your enquiry opens in your email app and is sent to info@kwalbania.al.",
    "ft.about": "Part of the world’s largest real estate network, now in Albania too. Buy, sell and invest with consultants trained to global KW standards.",
    "ft.h1": "Properties", "ft.sale": "For sale", "ft.rent": "For rent", "ft.lux": "Luxury", "ft.com": "Commercial",
    "ft.h2": "Consultants", "ft.all": "All consultants", "ft.join": "Become a consultant", "ft.fr": "Get a franchise",
    "ft.h3": "Contact",
    "ft.copy": "© 2026 KW Albania • Part of the Keller Williams network. All rights reserved.",
    "ft.src": "Market data: Keydata / Monitor (2026) · Bank of Albania (H2 2025) · ASHK (via Reporter.al)."
  };
  var EN_MORE = {
    "nav.luxury": "Luxury", "col.lux": "Luxury collection", "ad.profile": "View profile",
    "lx.eyebrow": "KW Albania · Luxury Collection",
    "lx.title": "Albania’s most <em>exceptional</em> homes",
    "lx.lede": "Seafront villas, panoramic penthouses and residences in the heart of Tirana, represented with discretion and to an international standard.",
    "lx.cta": "Request the private list",
    "lx.introE": "Our philosophy",
    "lx.introT": "A luxury property isn’t sold with an advert. <em>It’s sold with a story.</em>",
    "lx.introB": "For every property in the collection we build a complete presentation: professional photography and video, materials in Albanian and English, and a curated list of buyers from Albania, the diaspora and the international Keller Williams network.",
    "lx.p1t": "Discretion", "lx.p1d": "Private and off-market sales for owners who prefer no publicity. Viewings only with verified buyers.",
    "lx.p2t": "Presentation", "lx.p2d": "Architectural photography, video and drone footage that give the property the value it deserves.",
    "lx.p3t": "Global reach", "lx.p3d": "Your property reaches buyers in the diaspora and abroad through the Keller Williams network.",
    "lx.colE": "The collection", "lx.colT": "Selected <em>properties</em>",
    "lx.colI": "A selection of the most exceptional properties currently represented by KW Albania consultants.",
    "lx.offE": "Private collection", "lx.offT": "Off-market properties",
    "lx.offD": "Some properties are only sold privately. Ask your consultant for the off-market list.",
    "lx.offC": "Request access",
    "lx.dE": "Destinations", "lx.dT": "Where Albanian <em>luxury</em> lives",
    "lx.d1": "Ionian Riviera", "lx.d1n": "Sarandë · Ksamil", "lx.d2": "Lungomare", "lx.d2n": "Vlorë",
    "lx.d3": "Blloku & the Lake", "lx.d3n": "Tirana", "lx.avg": "average",
    "lx.prE": "The process", "lx.prT": "How we sell <em>your property</em>",
    "lx.pr1t": "Confidential valuation", "lx.pr1d": "A private meeting and a valuation based on comparable sales, with no obligation.",
    "lx.pr2t": "Presentation", "lx.pr2d": "Professional photography, video and drone; listing materials in Albanian and English.",
    "lx.pr3t": "Targeted marketing", "lx.pr3d": "Qualified buyers from Albania, the diaspora and the KW network, public or fully private.",
    "lx.pr4t": "Negotiation & notary", "lx.pr4d": "We represent your interest at every step, through to the notary and cadastre registration.",
    "lx.ctE": "Private consultation", "lx.ctT": "Selling or searching for <em>something exceptional?</em>",
    "lx.ctB": "Tell us what you have in mind. A senior consultant will contact you personally and in complete confidence.",
    "lx.o1": "I want to sell a luxury property", "lx.o2": "I want the private (off-market) list",
    "lx.o3": "I want to buy", "lx.o4": "I want a confidential valuation",
    "tm.eyebrow": "Our team", "tm.title": "KW Albania <em>consultants</em>",
    "tm.lede": "Local professionals trained to global Keller Williams standards, ready to help you buy, sell or invest.",
    "tm.lead": "Leadership", "tm.cons": "Consultants", "tm.consI": "Our local network of certified consultants."
  };
  Object.keys(EN_MORE).forEach(function (k) { EN[k] = EN_MORE[k]; });
  var EN_META = {
    title: document.body.getAttribute("data-title-en") || "KW Albania • Real estate with global quality",
    desc: document.body.getAttribute("data-desc-en") || "Keller Williams Albania, part of the world’s largest real estate network. Buy, sell, rent or invest in Albania with certified local consultants."
  };

  var nodes = Array.prototype.slice.call(document.querySelectorAll("[data-i18n]"));
  nodes.forEach(function (n) { n.setAttribute("data-sq", n.innerHTML); });
  var SQ_META = { title: document.title, desc: document.querySelector('meta[name="description"]').content };
  var current = "sq";

  function setLang(lang) {
    current = lang === "en" ? "en" : "sq";
    doc.lang = current;
    nodes.forEach(function (n) {
      var key = n.getAttribute("data-i18n");
      n.innerHTML = current === "en" && EN[key] ? EN[key] : n.getAttribute("data-sq");
    });
    var meta = current === "en" ? EN_META : SQ_META;
    document.title = meta.title;
    document.querySelector('meta[name="description"]').content = meta.desc;
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === current));
    });
    try { localStorage.setItem("kw-lang", current); } catch (e) {}
  }
  document.querySelectorAll("[data-lang]").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
  });
  var urlLang = new URLSearchParams(location.search).get("lang");
  var saved = null;
  try { saved = localStorage.getItem("kw-lang"); } catch (e) {}
  if (urlLang === "en" || (!urlLang && saved === "en")) setLang("en");

  /* ---------------- Navigation ---------------- */
  var nav = document.getElementById("nav");
  var toggle = nav.querySelector(".nav__toggle");
  var drawer = document.getElementById("drawer");
  function onScroll() { nav.classList.toggle("is-solid", window.scrollY > 40 || !drawer.hidden); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  function closeDrawer() { drawer.hidden = true; toggle.setAttribute("aria-expanded", "false"); onScroll(); }
  toggle.addEventListener("click", function () {
    var open = drawer.hidden;
    drawer.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    onScroll();
  });
  drawer.addEventListener("click", function (e) { if (e.target.closest("a")) closeDrawer(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !drawer.hidden) { closeDrawer(); toggle.focus(); } });

  /* ---------------- Search → KW listings portal ---------------- */
  var VIEWPORTS = {
    all: "42.66,21.06,39.64,19.26",
    tirana: "41.3559,19.8628,41.2819,19.7638",
    durres: "41.360,19.502,41.286,19.402",
    vlore: "40.503,19.541,40.429,19.441",
    sarande: "39.912,20.055,39.838,19.955",
    shkoder: "42.105,19.562,42.031,19.462"
  };
  var search = document.getElementById("search");
  if (search) search.addEventListener("submit", function (e) {
    var S = search.elements;
    e.preventDefault();
    var offer = S.offer.value === "rent" ? "rent" : "sale";
    var url = "https://kwalbania.kw.com/search/" + offer + "?viewport=" + encodeURIComponent(VIEWPORTS[S.loc.value] || VIEWPORTS.all);
    if (S.type.value) url += "&property_subtype=" + encodeURIComponent(S.type.value);
    window.open(url, "_blank", "noopener");
  });

  /* ---------------- Enquiry form (mailto) ---------------- */
  var form = document.getElementById("enquiry");
  var err = document.getElementById("f-error");
  if (form) form.addEventListener("submit", function (e) {
    var F = form.elements;
    e.preventDefault();
    var name = F.name.value.trim(), phone = F.phone.value.trim(), email = F.email.value.trim();
    var okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    F.name.setAttribute("aria-invalid", String(!name));
    F.phone.setAttribute("aria-invalid", String(phone.replace(/\D/g, "").length < 6));
    F.email.setAttribute("aria-invalid", String(!okEmail));
    if (!name || phone.replace(/\D/g, "").length < 6 || !okEmail) { err.hidden = false; return; }
    err.hidden = true;
    var intent = F.intent.options[F.intent.selectedIndex].text;
    var body = [
      (current === "en" ? "Name: " : "Emri: ") + name,
      (current === "en" ? "Phone: " : "Telefoni: ") + phone,
      "Email: " + email,
      (current === "en" ? "Request: " : "Kërkesa: ") + intent,
      "",
      F.message.value.trim()
    ].join("\n");
    location.href = "mailto:info@kwalbania.al?subject=" + encodeURIComponent((form.getAttribute("data-subject") || "KW Albania") + " · " + intent) + "&body=" + encodeURIComponent(body);
  });

  /* ---------------- Reveal on scroll ---------------- */
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("is-in"); });
  }
})();
