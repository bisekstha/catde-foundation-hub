/* =========================================================
   CATDE Foundation — site interactions
   Header state, mobile nav, scroll reveals, drifting petals,
   hero pointer parallax, email copy.
   ========================================================= */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    initHeader();
    initMobileNav();
    initActiveNav();
    initPetals();
    initReveals();
    initHeroParallax();
    initCopyEmail();
    initYear();
  });

  /* ---------- header: solid on scroll ---------- */
  function initHeader() {
    var header = document.querySelector(".site-header");
    if (!header) return;
    var overlay = header.hasAttribute("data-overlay");

    function update() {
      var solid = !overlay || window.scrollY > 24;
      header.classList.toggle("is-solid", solid);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  /* ---------- mobile nav ---------- */
  function initMobileNav() {
    var toggle = document.querySelector(".nav-toggle");
    var panel = document.querySelector(".nav-mobile");
    if (!toggle || !panel) return;

    var iconOpen = toggle.querySelector('[data-icon="open"]');
    var iconClose = toggle.querySelector('[data-icon="close"]');

    toggle.addEventListener("click", function () {
      var open = panel.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      if (iconOpen) iconOpen.style.display = open ? "none" : "block";
      if (iconClose) iconClose.style.display = open ? "block" : "none";
    });

    panel.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        panel.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        if (iconOpen) iconOpen.style.display = "block";
        if (iconClose) iconClose.style.display = "none";
      }
    });
  }

  /* ---------- mark the current page in the nav ---------- */
  function initActiveNav() {
    var file = window.location.pathname.split("/").pop() || "index.html";
    var links = document.querySelectorAll(".nav-link");
    for (var i = 0; i < links.length; i++) {
      var href = links[i].getAttribute("href");
      if (href === file) links[i].classList.add("is-active");
    }
  }

  /* ---------- drifting flower marks ---------- */
  function initPetals() {
    var hosts = document.querySelectorAll("[data-petals]");
    for (var h = 0; h < hosts.length; h++) {
      var host = hosts[h];
      var count = parseInt(host.getAttribute("data-petals"), 10) || 6;
      var src = host.getAttribute("data-petal-src") || "assets/mark.png";
      var layer = document.createElement("div");
      layer.className = "petals";
      layer.setAttribute("aria-hidden", "true");

      for (var i = 0; i < count; i++) {
        var seed = (i * 37) % 100;
        var img = document.createElement("img");
        img.className = "petal";
        img.src = src;
        img.alt = "";
        img.style.left = ((seed * 1.03) % 96) + "%";
        var size = 14 + ((seed * 7) % 30);
        img.style.width = size + "px";
        img.style.height = size + "px";
        img.style.animationDuration = 26 + ((seed * 3) % 26) + "s";
        img.style.animationDelay = "-" + ((seed * 0.9) % 30) + "s";
        img.style.setProperty(
          "--drift",
          (seed % 2 === 0 ? 1 : -1) * (3 + (seed % 9)) + "vw",
        );
        layer.appendChild(img);
      }
      host.insertBefore(layer, host.firstChild);
    }
  }

  /* ---------- scroll reveals ---------- */
  function initReveals() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      for (var i = 0; i < items.length; i++) items[i].classList.add("is-visible");
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    for (var j = 0; j < items.length; j++) {
      var delay = items[j].getAttribute("data-delay");
      if (delay) items[j].style.transitionDelay = delay + "ms";
      io.observe(items[j]);
    }
  }

  /* ---------- hero portrait pointer parallax ---------- */
  function initHeroParallax() {
    var stage = document.querySelector("[data-parallax-stage]");
    if (!stage) return;
    var card = stage.querySelector(".portrait-stage");
    if (!card) return;

    var outline = card.querySelector(".portrait-outline");
    var img = card.querySelector(".portrait-frame img");
    var mark = card.querySelector(".portrait-mark");

    function apply(x, y) {
      card.style.transform =
        "perspective(1200px) rotateY(" +
        x * 7 +
        "deg) rotateX(" +
        -y * 6 +
        "deg) translate3d(" +
        x * 14 +
        "px," +
        y * 12 +
        "px,0)";
      if (outline)
        outline.style.transform =
          "translate3d(" + x * -18 + "px," + y * -14 + "px,0)";
      if (img)
        img.style.transform =
          "scale(1.08) translate3d(" + x * -22 + "px," + y * -18 + "px,0)";
      if (mark)
        mark.style.transform =
          "translate3d(" + x * 30 + "px," + y * 24 + "px,0) rotate(" + x * 20 + "deg)";
    }

    stage.addEventListener("pointermove", function (e) {
      var r = stage.getBoundingClientRect();
      apply((e.clientX - r.left) / r.width - 0.5, (e.clientY - r.top) / r.height - 0.5);
    });
    stage.addEventListener("pointerleave", function () {
      apply(0, 0);
    });
  }

  /* ---------- copy email ---------- */
  function initCopyEmail() {
    var btn = document.querySelector("[data-copy]");
    if (!btn) return;
    var label = btn.querySelector("[data-copy-label]");
    var value = btn.getAttribute("data-copy");

    btn.addEventListener("click", function () {
      var done = function () {
        btn.classList.add("is-copied");
        if (label) label.textContent = "Copied";
        window.setTimeout(function () {
          btn.classList.remove("is-copied");
          if (label) label.textContent = "Copy";
        }, 2000);
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(done, fallback);
      } else {
        fallback();
      }

      function fallback() {
        var input = document.createElement("input");
        input.value = value;
        document.body.appendChild(input);
        input.select();
        try {
          document.execCommand("copy");
          done();
        } catch (err) {
          /* clipboard unavailable */
        }
        document.body.removeChild(input);
      }
    });
  }

  /* ---------- footer year ---------- */
  function initYear() {
    var nodes = document.querySelectorAll("[data-year]");
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].textContent = String(new Date().getFullYear());
    }
  }
})();
