/* KW Albania — luxury edition: language, navigation, search, consultants, enquiry form. */
(function () {
  "use strict";
  var doc = document.documentElement;
  doc.classList.remove("no-js");

  /* ---------------- Consultants (one list, rendered once) ---------------- */
  var AGENTS = [
    { name: "Altin Kaja", slug: "altin-kaja", id: "2000063083" },
    { name: "Bledar Arapi", slug: "bledar-arapi", id: "2000055247" },
    { name: "Dasantiela Demaj", slug: "dasantiela-demaj", id: "2000000624" },
    { name: "Enea Jatagani", slug: "enea-jatagani", id: "2000000629" },
    { name: "Jessica Pompa", slug: "jessica-pompa", id: "2000155135" },
    { name: "Ledjan Mehmeti", slug: "ledjan-mehmeti", id: "855983" },
    { name: "Orli Zotaj", slug: "orli-zotaj", id: "786510" },
    { name: "Panajot Panajoti", slug: "panajot-panajoti", id: "787754" },
    { name: "Radolf Oshafi", slug: "radolf-oshafi", id: "2000138224" }
  ];
  var grid = document.getElementById("agents");
  if (grid) {
    grid.innerHTML = AGENTS.map(function (a) {
      return (
        '<article class="agent reveal">' +
          '<a href="https://kwalbania.kw.com/sq/agent/' + a.slug + "/" + a.id + '" target="_blank" rel="noopener">' +
            '<figure class="agent__photo"><img src="assets/agents/' + a.slug + '.jpg" alt="' + a.name + '" loading="lazy" width="448" height="560"></figure>' +
            '<h3 class="agent__name">' + a.name + "</h3>" +
            '<p class="agent__role" data-i18n="ad.role">Konsulent · KW Albania</p>' +
          "</a>" +
        "</article>"
      );
    }).join("");
  }

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
  var EN_META = {
    title: "KW Albania • Real estate with global quality",
    desc: "Keller Williams Albania, part of the world’s largest real estate network. Buy, sell, rent or invest in Albania with certified local consultants."
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
  var S = search.elements;
  search.addEventListener("submit", function (e) {
    e.preventDefault();
    var offer = S.offer.value === "rent" ? "rent" : "sale";
    var url = "https://kwalbania.kw.com/search/" + offer + "?viewport=" + encodeURIComponent(VIEWPORTS[S.loc.value] || VIEWPORTS.all);
    if (S.type.value) url += "&property_subtype=" + encodeURIComponent(S.type.value);
    window.open(url, "_blank", "noopener");
  });

  /* ---------------- Enquiry form (mailto) ---------------- */
  var form = document.getElementById("enquiry");
  var err = document.getElementById("f-error");
  var F = form.elements;
  form.addEventListener("submit", function (e) {
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
    location.href = "mailto:info@kwalbania.al?subject=" + encodeURIComponent("KW Albania · " + intent) + "&body=" + encodeURIComponent(body);
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
