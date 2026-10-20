/* ============================================================
   MOON VALLEY — main.js
   Behavior: rendering of structured content, i18n, modals,
   lightbox, parallax, reveal, navigation and a11y helpers.
   Vanilla JS, no dependencies.
   ============================================================ */
(function () {
  "use strict";

  /* ---------------- state ---------------- */
  var lang = "en";
  var I18N = window.MV_I18N;
  var CONTENT = window.MV_CONTENT;
  var CONFIG = window.MV_CONFIG;
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function t(key) {
    return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
  }
  function loc(item) {
    return item[lang] || item.en;
  }
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  /* ---------------- preloader ---------------- */
  var preloader = $("#preloader");
  function hidePreloader() {
    if (!preloader) return;
    preloader.classList.add("is-done");
    setTimeout(function () { preloader.remove(); }, 900);
  }
  if (document.readyState === "complete") hidePreloader();
  else window.addEventListener("load", hidePreloader);
  setTimeout(hidePreloader, 3500); /* never trap the user */

  /* ---------------- header ---------------- */
  var header = $("#siteHeader");
  function onScrollHeader() {
    header.classList.toggle("is-solid", window.scrollY > 40);
  }
  onScrollHeader();
  window.addEventListener("scroll", onScrollHeader, { passive: true });

  /* mobile nav */
  var navToggle = $("#navToggle");
  var siteNav = $("#siteNav");
  function closeNav() {
    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
  }
  navToggle.addEventListener("click", function () {
    var open = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  $all(".site-nav__link").forEach(function (link) {
    link.addEventListener("click", closeNav);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && siteNav.classList.contains("is-open")) {
      closeNav();
      navToggle.focus();
    }
  });

  /* active section highlighting */
  var navLinks = $all(".site-nav__link");
  var sections = ["home", "news", "why", "world", "features", "media", "community"]
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);
  if ("IntersectionObserver" in window) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (link) {
          link.classList.toggle("is-active", link.getAttribute("href") === "#" + entry.target.id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { sectionObserver.observe(s); });
  }

  /* ---------------- reveal on scroll ---------------- */
  var revealables = [];
  function registerReveals() {
    revealables = $all(".reveal:not(.is-in)");
    if (reducedMotion || !("IntersectionObserver" in window)) {
      revealables.forEach(function (el) { el.classList.add("is-in"); });
      return;
    }
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealables.forEach(function (el, i) {
      el.style.setProperty("--reveal-delay", (i % 4) * 0.08 + "s");
      revealObserver.observe(el);
    });
  }

  /* ---------------- hero parallax + particles ---------------- */
  var sceneLayers = $all(".hero .scene-layer");
  if (!reducedMotion && sceneLayers.length) {
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var y = window.scrollY;
        if (y < window.innerHeight * 1.2) {
          sceneLayers.forEach(function (layer) {
            var depth = parseFloat(layer.dataset.depth || 0);
            layer.style.transform = "translate3d(0," + (y * depth * 100).toFixed(2) + "px,0)";
          });
        }
        ticking = false;
      });
    }, { passive: true });
  }

  var particleHost = $("#heroParticles");
  if (particleHost && !reducedMotion) {
    var pCount = window.innerWidth < 640 ? 16 : 34;
    for (var p = 0; p < pCount; p++) {
      var dot = document.createElement("span");
      dot.className = "particle" + (Math.random() > 0.55 ? " particle--warm" : "");
      dot.style.left = Math.random() * 100 + "%";
      dot.style.top = 40 + Math.random() * 60 + "%";
      dot.style.animationDuration = 6 + Math.random() * 9 + "s";
      dot.style.animationDelay = -Math.random() * 12 + "s";
      dot.style.opacity = "0";
      var scale = 0.6 + Math.random() * 1.2;
      dot.style.width = dot.style.height = (3 * scale).toFixed(1) + "px";
      particleHost.appendChild(dot);
    }
  }

  /* ---------------- feature icons ---------------- */
  var ICONS = {
    sword: '<svg viewBox="0 0 48 48"><path fill="currentColor" d="M35.5 3.2 22.7 16l-2.4-2.4 12.8-12.8c-2.7-.9-5.4-1-7.7-.4L16.4 14.2 12.1 9.9 4.6 17.4l5.6 5.6-2.1 2.1-4.4-1-2.8 2.8 9.3 9.3 2.8-2.8-1-4.4 2.1-2.1 5.6 5.6 7.5-7.5-4.3-4.3 7.4-6.6c.6 2.3.5 5-.4 7.7zM11.6 23.8l-2.8-2.8 2.1-2.1 2.8 2.8-2.1 2.1z"/></svg>',
    shield: '<svg viewBox="0 0 48 48"><path fill="currentColor" d="M24 3.5 7 10.4v11.3C7 31.9 13.4 40.5 24 44.5c10.6-4 17-12.6 17-22.8V10.4L24 3.5zm0 5.4 12 4.9v8c0 8.1-4.9 14.5-12 17.5-7.1-3-12-9.4-12-17.5v-8l12-4.9z"/><path fill="currentColor" d="M24 13.5 27 20l7 .9-5.2 5 1.3 7L24 29.4l-6.1 3.5 1.3-7-5.2-5 7-.9 3-6.5z"/></svg>',
    compass: '<svg viewBox="0 0 48 48"><path fill="currentColor" d="M24 4a20 20 0 1 0 0 40 20 20 0 0 0 0-40zm0 4.5a15.5 15.5 0 1 1 0 31 15.5 15.5 0 0 1 0-31z"/><path fill="currentColor" d="m31.4 14.6-4.9 11.9-11.9 4.9 4.9-11.9 11.9-4.9zM24 21.4a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2z"/></svg>',
    beast: '<svg viewBox="0 0 48 48"><path fill="currentColor" d="M24 12c-3.3 0-6 2.7-6 6 0 1.4.5 2.7 1.3 3.7-3.9 1.7-6.8 5.3-7.6 9.7-.2 1 .6 1.9 1.6 1.7 2.1-.4 4-.4 5.8.2l1.1 3.4c.3.9 1.5 1.1 2 .3L23 34h2l.8 3c.5.8 1.7.6 2-.3l1.1-3.4c1.8-.6 3.7-.6 5.8-.2 1 .2 1.8-.7 1.6-1.7-.8-4.4-3.7-8-7.6-9.7.8-1 1.3-2.3 1.3-3.7 0-3.3-2.7-6-6-6zm-8.5-8c.9 0 1.7.9 2.4 2.4.5 1.2.8 2.5.9 3.5-1.6-.5-3-1.3-4-2.2-.6-.6-.4-1.7.4-2 .9-.4 1.9-.6 2.6-.7h-2.3zm17 0c.7.1 1.7.3 2.6.7.8.3 1 1.4.4 2-1 .9-2.4 1.7-4 2.2.1-1 .4-2.3.9-3.5.7-1.5 1.5-2.4 2.4-2.4z"/></svg>',
    star: '<svg viewBox="0 0 48 48"><path fill="currentColor" d="m24 3 5.4 12.3L43 17l-9.7 8.6L36.1 39 24 32.2 11.9 39l2.8-13.4L5 17l13.6-1.7L24 3z"/></svg>',
    banner: '<svg viewBox="0 0 48 48"><path fill="currentColor" d="M10 4h3v40h-3zM16 6h20l-4 6 4 6H16z"/><path fill="currentColor" d="m26 24 8 6-8 6v-4h-6v-4h6z" opacity=".55"/></svg>'
  };

  /* ---------------- NEWS ---------------- */
  var newsGrid = $("#newsGrid");
  var newsViewAll = $("#newsViewAll");

  function categoryClass(cat) {
    return cat === "event" ? " news-card__tag--event" : cat === "lore" ? " news-card__tag--lore" : "";
  }

  function formatDate(iso) {
    var d = new Date(iso + "T12:00:00");
    return d.toLocaleDateString(lang === "pt" ? "pt-BR" : "en-GB", {
      day: "numeric", month: "long", year: "numeric"
    });
  }

  function renderNews() {
    newsGrid.innerHTML = "";
    CONTENT.news.forEach(function (item, index) {
      var c = loc(item);
      var card = document.createElement("article");
      card.className = "frame news-card reveal" +
        (index === 0 ? " news-card--featured" : "") +
        (index > 3 ? " is-extra" : "");
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", c.title);
      card.innerHTML =
        '<span class="gem gem--tl"></span><span class="gem gem--tr"></span>' +
        '<span class="gem gem--bl"></span><span class="gem gem--br"></span>' +
        '<div class="news-card__media">' +
        '<span class="news-card__tag' + categoryClass(item.category) + '">' + c.tag + "</span>" +
        '<img src="' + item.image + '" alt="" loading="lazy">' +
        "</div>" +
        '<div class="news-card__body">' +
        '<time class="news-card__date" datetime="' + item.date + '">' + formatDate(item.date) + "</time>" +
        '<h3 class="news-card__title">' + c.title + "</h3>" +
        '<p class="news-card__excerpt">' + c.excerpt + "</p>" +
        '<span class="news-card__more">' + t("news.readMore") + " →</span>" +
        "</div>";
      function open() { openArticle(item); }
      card.addEventListener("click", open);
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
      });
      newsGrid.appendChild(card);
    });
    registerReveals();
  }

  newsViewAll.addEventListener("click", function () {
    var expanded = newsGrid.classList.toggle("is-expanded");
    newsViewAll.querySelector("span").textContent = expanded ? t("news.showLess") : t("news.viewAll");
  });

  /* ---------------- REGIONS ---------------- */
  var regionGrid = $("#regionGrid");

  function renderRegions() {
    regionGrid.innerHTML = "";
    CONTENT.regions.forEach(function (item) {
      var c = loc(item);
      var card = document.createElement("article");
      card.className = "frame region-card region-card--" + item.tone + " reveal";
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", c.name);
      card.innerHTML =
        '<span class="gem gem--tl"></span><span class="gem gem--tr"></span>' +
        '<span class="gem gem--bl"></span><span class="gem gem--br"></span>' +
        '<div class="region-card__scene"><img src="' + item.scene + '" alt="" loading="lazy"></div>' +
        '<div class="region-card__body">' +
        '<span class="region-card__biome">' + c.biome + "</span>" +
        '<h3 class="region-card__name">' + c.name + "</h3>" +
        '<p class="region-card__desc">' + c.desc + "</p>" +
        '<span class="region-card__link">' + t("world.explore") + "</span>" +
        "</div>";
      function open() { openRegion(item); }
      card.addEventListener("click", open);
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
      });
      regionGrid.appendChild(card);
    });
    registerReveals();
  }

  /* ---------------- FEATURES ---------------- */
  var featureGrid = $("#featureGrid");

  function renderFeatures() {
    featureGrid.innerHTML = "";
    CONTENT.features.forEach(function (item) {
      var c = loc(item);
      var card = document.createElement("article");
      card.className = "frame feature-item reveal";
      card.innerHTML =
        '<span class="gem gem--tl"></span><span class="gem gem--tr"></span>' +
        '<span class="gem gem--bl"></span><span class="gem gem--br"></span>' +
        '<div class="feature-item__art" aria-hidden="true">' + (ICONS[item.icon] || ICONS.star) + "</div>" +
        '<h3 class="feature-item__title">' + c.title + "</h3>" +
        '<p class="feature-item__text">' + c.text + "</p>";
      featureGrid.appendChild(card);
    });
    registerReveals();
  }

  /* ---------------- MEDIA ---------------- */
  var mediaGrid = $("#mediaGrid");
  var mediaFilters = $("#mediaFilters");
  var mediaFilterState = "all";

  var FILTERS = [
    { key: "all", labelKey: "media.filter.all" },
    { key: "trailer", labelKey: "media.filter.trailer" },
    { key: "video", labelKey: "media.filter.video" },
    { key: "screenshot", labelKey: "media.filter.screenshot" },
    { key: "art", labelKey: "media.filter.art" }
  ];

  var PLAY_ICON = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M8 5v14l11-7z"/></svg>';
  var IMAGE_ICON = '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M21 5H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm-1 11.5-4.5-5.4-3.5 4.2-2.5-2.9L5 16.5V7h14v9.5z"/><circle fill="currentColor" cx="8.2" cy="10.2" r="1.5"/></svg>';

  function renderMediaFilters() {
    mediaFilters.innerHTML = "";
    FILTERS.forEach(function (f) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "media-filter" + (mediaFilterState === f.key ? " is-active" : "");
      btn.textContent = t(f.labelKey);
      btn.setAttribute("aria-pressed", mediaFilterState === f.key ? "true" : "false");
      btn.addEventListener("click", function () {
        mediaFilterState = f.key;
        renderMediaFilters();
        applyMediaFilter();
      });
      mediaFilters.appendChild(btn);
    });
  }

  function renderMedia() {
    mediaGrid.innerHTML = "";
    CONTENT.media.forEach(function (item) {
      var c = loc(item);
      var isVideo = item.kind === "trailer" || item.kind === "video";
      var card = document.createElement("button");
      card.type = "button";
      card.className = "frame media-card reveal";
      card.dataset.kind = item.kind;
      card.setAttribute("aria-label", (isVideo ? t("media.play") : t("media.view")) + ": " + c.title);
      card.innerHTML =
        '<span class="gem gem--tl"></span><span class="gem gem--tr"></span>' +
        '<span class="gem gem--bl"></span><span class="gem gem--br"></span>' +
        '<img src="' + item.thumb + '" alt="" loading="lazy">' +
        '<span class="media-card__overlay">' +
        '<span class="media-card__kind' + (isVideo ? "" : " media-card__kind--image") + '" aria-hidden="true">' +
        (isVideo ? PLAY_ICON : IMAGE_ICON) + "</span>" +
        '<span class="media-card__title">' + c.title + "</span>" +
        '<span class="media-card__sub">' + c.sub + "</span>" +
        "</span>";
      card.addEventListener("click", function () {
        if (isVideo) openTrailer(item);
        else openLightbox(item);
      });
      mediaGrid.appendChild(card);
    });
    applyMediaFilter();
    registerReveals();
  }

  function applyMediaFilter() {
    $all(".media-card", mediaGrid).forEach(function (card) {
      card.hidden = mediaFilterState !== "all" && card.dataset.kind !== mediaFilterState;
    });
  }

  /* ---------------- SOCIAL / DISCORD ---------------- */
  function socialButton(key, label, url) {
    var el;
    if (url) {
      el = document.createElement("a");
      el.href = url;
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    } else {
      el = document.createElement("button");
      el.type = "button";
      el.setAttribute("aria-disabled", "true");
      el.title = t("community.note");
    }
    el.className = "social-btn";
    el.setAttribute("aria-label", label);
    el.innerHTML = window.MV_SOCIAL_ICONS[key] || window.MV_SOCIAL_ICONS.discord;
    if (!url) el.addEventListener("click", function (e) { e.preventDefault(); openPending(); });
    return el;
  }

  function renderSocials() {
    var rows = [$("#socialRow"), $("#footerSocialRow")].filter(Boolean);
    rows.forEach(function (row) { row.innerHTML = ""; });

    var items = [{ key: "discord", label: "Discord", url: CONFIG.discordUrl }]
      .concat(CONFIG.socials || []);

    if (!CONFIG.socials || !CONFIG.socials.length) {
      /* honest default: only Discord, disabled until a real URL exists */
    }
    rows.forEach(function (row) {
      items.forEach(function (s) { row.appendChild(socialButton(s.key, s.label, s.url)); });
    });

    /* Discord buttons: enable or show honest pending state */
    var discordReady = !!CONFIG.discordUrl;
    ["#headerDiscord", "#communityDiscord"].forEach(function (sel) {
      var btn = $(sel);
      if (!btn) return;
      if (discordReady) {
        btn.href = CONFIG.discordUrl;
        btn.target = "_blank";
        btn.rel = "noopener noreferrer";
      } else {
        btn.removeAttribute("href");
        btn.setAttribute("role", "button");
        btn.setAttribute("aria-disabled", "true");
        btn.addEventListener("click", function () { openPending(); });
      }
    });
    var note = $("#communityNote");
    if (note) note.hidden = discordReady;
  }

  /* ---------------- MODALS ---------------- */
  var modalRoot = $("#modalRoot");
  var modalBody = $("#modalBody");
  var modalDialog = $(".modal__dialog", modalRoot);
  var lastFocused = null;

  function openModal(html) {
    lastFocused = document.activeElement;
    modalBody.innerHTML = html;
    modalRoot.hidden = false;
    document.body.style.overflow = "hidden";
    modalDialog.focus();
  }
  function closeModal() {
    if (modalRoot.hidden) return;
    modalRoot.hidden = true;
    modalBody.innerHTML = "";
    document.body.style.overflow = "";
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }
  $all("[data-close-modal]", modalRoot).forEach(function (el) {
    el.addEventListener("click", closeModal);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
  });
  /* rudimentary focus trap */
  modalRoot.addEventListener("keydown", function (e) {
    if (e.key !== "Tab") return;
    var focusables = $all('a[href], button, [tabindex]:not([tabindex="-1"])', modalDialog)
      .filter(function (el) { return el.offsetParent !== null; });
    if (!focusables.length) return;
    var first = focusables[0], last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  function embedUrl(raw) {
    if (!raw) return null;
    var yt = raw.match(/(?:youtube\.com\/.*v=|youtu\.be\/)([\w-]{6,})/);
    if (yt) return "https://www.youtube.com/embed/" + yt[1] + "?autoplay=1&rel=0";
    if (/vimeo\.com\/(\d+)/.test(raw)) return "https://player.vimeo.com/video/" + raw.match(/vimeo\.com\/(\d+)/)[1] + "?autoplay=1";
    return null; /* unknown provider: never guess, show pending state */
  }

  function videoBlock(url) {
    var embed = embedUrl(url);
    if (embed) {
      return '<div class="video-frame"><iframe src="' + embed + '" title="Moon Valley video" allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div>';
    }
    return '<div class="video-frame"><div class="video-frame__pending">' +
      '<div class="rune-ring"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-2 14.5v-9l6 4.5-6 4.5z"/></svg></div>' +
      '<p class="video-frame__title">' + t("media.trailerSoon") + "</p>" +
      '<p class="video-frame__note">' + t("media.trailerSoonNote") + "</p>" +
      "</div></div>";
  }

  function openTrailer(item) {
    var data = item || { url: CONFIG.trailerUrl, en: { title: "Moon Valley — Official Trailer" }, pt: { title: "Moon Valley — Trailer Oficial" } };
    var c = item ? loc(item) : loc(data);
    openModal(
      videoBlock(data.url || CONFIG.trailerUrl) +
      '<h3 class="modal-title" id="modalTitle">' + c.title + "</h3>" +
      '<p class="modal-prose">' + c.sub + "</p>"
    );
  }
  $all("[data-open-trailer]").forEach(function (el) {
    el.addEventListener("click", function (e) { e.preventDefault(); openTrailer(null); });
  });

  function openArticle(item) {
    var c = loc(item);
    var body = c.body.map(function (p) { return "<p>" + p + "</p>"; }).join("");
    openModal(
      '<span class="news-card__tag' + categoryClass(item.category) + '" style="position:static;display:inline-block;margin-bottom:1rem">' + c.tag + "</span>" +
      '<h3 class="modal-title" id="modalTitle">' + c.title + "</h3>" +
      '<p class="modal-meta"><time datetime="' + item.date + '">' + formatDate(item.date) + "</time></p>" +
      '<img src="' + item.image + '" alt="" style="width:100%;margin-bottom:1.4rem;border:1px solid rgba(216,216,207,.18)">' +
      '<div class="modal-prose">' + body + "</div>"
    );
  }

  function openRegion(item) {
    var c = loc(item);
    var detail = c.detail.map(function (p) {
      return "<p>" + p.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") + "</p>";
    }).join("");
    openModal(
      '<img src="' + item.scene + '" alt="" style="width:100%;margin-bottom:1.4rem;border:1px solid rgba(216,216,207,.18)">' +
      '<span class="region-card__biome" style="margin-bottom:.4rem">' + c.biome + "</span>" +
      '<h3 class="modal-title" id="modalTitle">' + c.name + "</h3>" +
      '<div class="modal-prose"><p>' + c.desc + "</p>" + detail + "</div>"
    );
  }

  function openPending() {
    openModal(
      '<h3 class="modal-title" id="modalTitle">' + t("community.title") + "</h3>" +
      '<div class="modal-prose"><p>' + t("community.note") + "</p></div>"
    );
  }

  function openLegal(kind) {
    var title = kind === "terms" ? t("legal.terms.title") : kind === "privacy" ? t("legal.privacy.title") : t("media.trailerSoon");
    openModal(
      '<h3 class="modal-title" id="modalTitle">' + title + "</h3>" +
      '<div class="modal-prose"><p>' + t("legal.pending") + "</p></div>"
    );
  }
  $all("[data-legal]").forEach(function (el) {
    el.addEventListener("click", function (e) { e.preventDefault(); openLegal(el.dataset.legal); });
  });

  /* ---------------- LIGHTBOX ---------------- */
  var lightboxIndex = -1;
  var galleryItems = [];

  function refreshGallery() {
    galleryItems = CONTENT.media.filter(function (m) {
      return m.kind === "screenshot" || m.kind === "art";
    });
  }

  function lightboxHTML(item) {
    var c = loc(item);
    return '<figure class="lightbox-figure">' +
      '<img src="' + item.thumb + '" alt="' + c.title + '">' +
      '<figcaption>' + c.title + " — " + c.sub + "</figcaption>" +
      "</figure>" +
      '<div class="lightbox-nav">' +
      '<button class="btn btn--ghost btn--sm" type="button" data-lb="prev">‹ ' + (lang === "pt" ? "Anterior" : "Prev") + "</button>" +
      '<button class="btn btn--ghost btn--sm" type="button" data-lb="close">' + t("modal.close") + "</button>" +
      '<button class="btn btn--ghost btn--sm" type="button" data-lb="next">' + (lang === "pt" ? "Próxima" : "Next") + " ›</button>" +
      "</div>";
  }

  function stepLightbox(delta) {
    lightboxIndex = (lightboxIndex + delta + galleryItems.length) % galleryItems.length;
    modalBody.innerHTML = lightboxHTML(galleryItems[lightboxIndex]);
    bindLightbox();
  }
  function bindLightbox() {
    $all("[data-lb]", modalBody).forEach(function (btn) {
      btn.addEventListener("click", function () {
        var action = btn.dataset.lb;
        if (action === "prev") stepLightbox(-1);
        else if (action === "next") stepLightbox(1);
        else closeModal();
      });
    });
  }

  function openLightbox(item) {
    refreshGallery();
    var idx = galleryItems.indexOf(item);
    lightboxIndex = idx >= 0 ? idx : 0;
    if (!galleryItems.length) return;
    openModal(lightboxHTML(galleryItems[lightboxIndex]));
    bindLightbox();
  }

  document.addEventListener("keydown", function (e) {
    if (modalRoot.hidden) return;
    if (e.key === "ArrowLeft" && $all("[data-lb]", modalBody).length) stepLightbox(-1);
    if (e.key === "ArrowRight" && $all("[data-lb]", modalBody).length) stepLightbox(1);
  });

  /* ---------------- BACK TO TOP ---------------- */
  var backToTop = $("#backToTop");
  window.addEventListener("scroll", function () {
    backToTop.classList.toggle("is-visible", window.scrollY > 700);
  }, { passive: true });
  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  });

  /* ---------------- LANGUAGE ---------------- */
  function applyLanguage(next) {
    lang = next;
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.title = t("meta.default");

    $all("[data-i18n]").forEach(function (el) {
      var value = t(el.dataset.i18n);
      if (value) el.textContent = value;
    });

    $all(".lang-switch__btn").forEach(function (btn) {
      var active = btn.dataset.lang === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    renderNews();
    renderRegions();
    renderFeatures();
    renderMediaFilters();
    renderMedia();

    /* refresh "view all" label state */
    var expanded = newsGrid.classList.contains("is-expanded");
    newsViewAll.querySelector("span").textContent = expanded ? t("news.showLess") : t("news.viewAll");

    try { localStorage.setItem("mv-lang", lang); } catch (err) { /* private mode */ }
  }

  $all(".lang-switch__btn").forEach(function (btn) {
    btn.addEventListener("click", function () { applyLanguage(btn.dataset.lang); });
  });

  /* ---------------- INIT ---------------- */
  var initialLang = "en";
  try {
    var stored = localStorage.getItem("mv-lang");
    if (stored === "pt" || stored === "en") initialLang = stored;
  } catch (err) { /* ignore */ }

  renderSocials();
  applyLanguage(initialLang);
  registerReveals();
})();
