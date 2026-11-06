/* Site search – works on the static site with no server.
   - Static entries below cover pages whose text is filled in by JavaScript (contact, tenders ...).
   - Every page listed in PAGES is fetched once (lazily, on first use) and its headings, list items,
     table rows and paragraphs are indexed, so new text you add to those pages is searchable automatically.
   - News, tenders and institutions are read from their own *-data.js files.
   To make a new page searchable: add it to PAGES. */
(function () {
  var PAGES = [
    { url: "ambalangoda.html", title: "අම්බලන්ගොඩ නගර සභාව" },
    { url: "council-members.html", title: "සභික මණ්ඩලය" },
    { url: "staff.html", title: "කාර්ය මණ්ඩලය" },
    { url: "services.html", title: "සේවාවන්" },
    { url: "ser-land-building.html", title: "ඉඩම් හා ගොඩනැගිලි සංවර්ධනය" },
    { url: "ser-bankloan.html", title: "බැංකු ණය සඳහා සහතික" },
    { url: "ser-sabha-wathkam.html", title: "සභා වත්කම් යොදාගත් සේවා" },
    { url: "ser-balapathra.html", title: "ව්‍යාපාරික බලපත්‍ර" },
    { url: "ser-podu-upayogi.html", title: "පොදු උපයෝගි සේවා" },
    { url: "ser-badu.html", title: "බදු හා ගාස්තු අය කිරීම" },
    { url: "downloads.html", title: "බාගත කිරීම්" },
    { url: "information.html", title: "තොරතුරු දැනගැනීමේ පනත" },
    { url: "payments.html", title: "අන්තර්ජාල ගෙවීම්" },
    { url: "gallery.html", title: "ඡායාරූප" }
  ];
  var STATIC = [
    { url: "index.html?skipLoader=true", title: "මුල් පිටුව", text: "home මුල් පිටුව Home முகப்பு" },
    { url: "contact.html", title: "සම්බන්ධවන්න", text: "සම්බන්ධවන්න පණිවිඩයක් යවන්න දුරකථන ලිපිනය ඊමේල් Contact Us தொடர்புகொள்ள phone address email message" },
    { url: "tenders.html", title: "ටෙන්ඩර් සහ දැන්වීම්", text: "ටෙන්ඩර් දැන්වීම් රැකියා පුරප්පාඩු tender notices vacancies கேள்விப்பத்திரம் அறிவித்தல்" },
    { url: "institutions.html", title: "ආයතන", text: "ආයතන පෙරපාසල් ආයුර්වේද පුස්තකාල preschool ayurvedic library institutions" },
    { url: "news.html", title: "පුවත්", text: "පුවත් නවතම පුවත් News செய்திகள்" },
    { url: "information.html", title: "තොරතුරු පනත", text: "තොරතුරු දැනගැනීමේ පනත Right to Information RTI தகவல் அறியும் உரிமை" }
  ];

  var index = null, loading = null;

  function norm(s) {
    return String(s == null ? "" : s).normalize("NFC").replace(/[\u200b-\u200d\ufeff]/g, "").toLowerCase().replace(/\s+/g, " ").trim();
  }
  function clean(s) { return String(s || "").replace(/\s+/g, " ").trim(); }
  function pick(o) { var l = (window.AUC_I18N && window.AUC_I18N.lang()) || "si"; return clean(o && (o[l] || o.si || o.en)); }
  function loadScript(src) {
    return new Promise(function (res) {
      var s = document.createElement("script"); s.src = src; s.onload = function () { res(true); }; s.onerror = function () { res(false); };
      document.head.appendChild(s);
    });
  }

  function crawl(page) {
    return fetch(page.url).then(function (r) { if (!r.ok) throw 0; return r.text(); }).then(function (html) {
      var doc = new DOMParser().parseFromString(html, "text/html"), out = [], seen = {};
      doc.querySelectorAll("script,style,noscript,#site-header,#site-footer,.sd-index,.sd-more,.svc-cta").forEach(function (n) { n.remove(); });
      var h1 = doc.querySelector("h1"); var pageTitle = clean(h1 ? h1.textContent : page.title) || page.title;
      doc.querySelectorAll("h1,h2,h3,h4,li,tr,p,figcaption").forEach(function (el) {
        var t = clean(el.textContent);
        if (t.length < 3 || t.length > 600 || seen[t]) return;
        seen[t] = 1;
        var anchor = ""; var a = el.closest("[id]");
        if (a && a.id && !/^(main-content|site-header|site-footer)$/.test(a.id)) anchor = "#" + a.id;
        out.push({ url: page.url + anchor, title: pageTitle, text: t, head: /^H[1-4]$/.test(el.tagName) });
      });
      return out;
    }).catch(function () { return [{ url: page.url, title: page.title, text: page.title, head: true }]; });
  }

  function dataEntries() {
    var out = [];
    (window.newsData || []).forEach(function (n) {
      out.push({ url: "news-details.html?id=" + n.id, title: "පුවත්", text: clean(n.title) + " " + clean(n.short), head: true, label: clean(n.title) });
    });
    (window.AUC_TENDERS || []).forEach(function (x) {
      out.push({ url: "tenders.html", title: "ටෙන්ඩර් සහ දැන්වීම්", text: pick(x.title) + " " + pick(x.desc) + " " + (x.ref || ""), head: true, label: pick(x.title) });
    });
    (window.AUC_NOTICES || []).forEach(function (x) {
      out.push({ url: "index.html?skipLoader=true#noticeBoard", title: "දැන්වීම් පුවරුව", text: pick(x.title) + " " + pick(x.text), head: true, label: pick(x.title) });
    });
    return out;
  }

  function build() {
    if (index) return Promise.resolve(index);
    if (loading) return loading;
    loading = Promise.all([
      loadScript("news-data.js"), loadScript("tenders-data.js"), loadScript("noticeboard-data.js")
    ]).then(function () { return Promise.all(PAGES.map(crawl)); }).then(function (parts) {
      var all = STATIC.map(function (s) { return { url: s.url, title: s.title, text: s.text, head: true, label: s.title }; });
      parts.forEach(function (p) { all = all.concat(p); });
      all = all.concat(dataEntries());
      all.forEach(function (e) { e.n = norm(e.text); e.nt = norm(e.title); });
      index = all; return all;
    });
    return loading;
  }

  function search(q) {
    var words = norm(q).split(" ").filter(Boolean);
    if (!words.length) return Promise.resolve([]);
    var phrase = words.join(" ");
    return build().then(function (all) {
      var hits = [];
      all.forEach(function (e) {
        var hay = e.n + " " + e.nt;
        for (var i = 0; i < words.length; i++) if (hay.indexOf(words[i]) < 0) return;
        var score = 1;
        if (e.n.indexOf(phrase) > -1) score += 4;
        if (e.nt.indexOf(phrase) > -1) score += 2;
        if (e.head) score += 3;
        if (e.n.length < 80) score += 1;
        hits.push({ e: e, s: score });
      });
      hits.sort(function (a, b) { return b.s - a.s; });
      // at most 3 hits per page so one long page cannot flood the list
      var per = {}, out = [];
      hits.forEach(function (h) {
        var k = h.e.url.split("#")[0]; per[k] = (per[k] || 0) + 1;
        if (per[k] <= 3) out.push(h.e);
      });
      return out;
    });
  }

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function snippet(text, q) {
    var words = norm(q).split(" ").filter(Boolean), t = clean(text);
    if (t.length > 130) {
      var i = norm(t).indexOf(words[0] || ""); var start = Math.max(0, i - 40);
      t = (start ? "… " : "") + t.slice(start, start + 130) + (start + 130 < t.length ? " …" : "");
    }
    return esc(t);
  }
  function labelOf(e) { return e.label || (e.head ? clean(e.text) : e.title); }

  /* ---------- nav bar dropdown ---------- */
  function initNav() {
    var form = document.getElementById("navSearch"), input = document.getElementById("navSearchInput"), box = document.getElementById("navSearchResults");
    if (!form || !input || !box || form.dataset.bound) return;
    form.dataset.bound = "1";
    var timer, active = -1, last = "";
    function close() { box.hidden = true; input.setAttribute("aria-expanded", "false"); active = -1; }
    function render(q, list) {
      if (!list.length) { box.innerHTML = '<div class="ns-empty">' + esc(txt("none")) + "</div>"; }
      else {
        box.innerHTML = list.slice(0, 6).map(function (e) {
          return '<a class="ns-item" role="option" href="' + esc(e.url) + '"><strong>' + esc(labelOf(e)) + "</strong><span>" + (e.head && !e.label ? esc(e.title) : snippet(e.text, q)) + "</span></a>";
        }).join("") + '<a class="ns-all" href="search.html?q=' + encodeURIComponent(q) + '">' + esc(txt("all")) + ' <i class="fa-solid fa-arrow-right"></i></a>';
      }
      box.hidden = false; input.setAttribute("aria-expanded", "true"); active = -1;
    }
    function run() {
      var q = input.value.trim(); last = q;
      if (q.length < 2) { close(); return; }
      box.innerHTML = '<div class="ns-empty">' + esc(txt("wait")) + "</div>"; box.hidden = false;
      search(q).then(function (list) { if (q === last) render(q, list); });
    }
    input.addEventListener("input", function () { clearTimeout(timer); timer = setTimeout(run, 180); });
    input.addEventListener("focus", function () { build(); if (input.value.trim().length > 1) run(); });
    input.addEventListener("keydown", function (e) {
      var items = [].slice.call(box.querySelectorAll(".ns-item"));
      if (e.key === "Escape") { close(); return; }
      if (!items.length || box.hidden) return;
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault(); active = (active + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length;
        items.forEach(function (n, i) { n.classList.toggle("on", i === active); });
      } else if (e.key === "Enter" && active > -1) { e.preventDefault(); window.location.href = items[active].getAttribute("href"); }
    });
    document.addEventListener("click", function (e) { if (!form.contains(e.target)) close(); });
    form.addEventListener("submit", function (e) { if (input.value.trim().length < 1) e.preventDefault(); });
  }

  /* ---------- results page ---------- */
  function initPage() {
    var out = document.getElementById("searchResults"); if (!out) return;
    var q = (new URLSearchParams(location.search).get("q") || "").trim();
    var field = document.getElementById("searchPageInput"), meta = document.getElementById("searchMeta");
    if (field) field.value = q;
    function draw() {
      if (!q) { meta.textContent = txt("type"); out.innerHTML = ""; return; }
      meta.textContent = txt("wait");
      search(q).then(function (list) {
        meta.textContent = list.length ? list.length + " " + txt("found") + " “" + q + "”" : "";
        out.innerHTML = list.length ? list.map(function (e) {
          return '<a class="sr-item" href="' + esc(e.url) + '"><span class="sr-page">' + esc(e.title) + "</span><h3>" + esc(labelOf(e)) + "</h3>" + (e.head && !e.label ? "" : "<p>" + snippet(e.text, q) + "</p>") + "</a>";
        }).join("") : '<div class="sr-none"><i class="fa-regular fa-face-frown"></i><p>' + esc(txt("none")) + "</p></div>";
      });
    }
    draw(); document.addEventListener("langchange", draw);
  }

  var T = {
    si: { none: "ප්‍රතිඵල හමු නොවීය. වෙනත් වචනයකින් උත්සාහ කරන්න.", all: "සියලු ප්‍රතිඵල බලන්න", wait: "සොයමින්...", type: "සොයන වචනයක් ඇතුළත් කරන්න.", found: "ප්‍රතිඵල:" },
    ta: { none: "முடிவுகள் இல்லை. வேறு சொல்லில் முயற்சிக்கவும்.", all: "அனைத்து முடிவுகளும்", wait: "தேடுகிறது...", type: "தேடும் சொல்லை உள்ளிடவும்.", found: "முடிவுகள்:" },
    en: { none: "No results found. Try a different word.", all: "See all results", wait: "Searching...", type: "Type something to search.", found: "results for" }
  };
  function txt(k) { var l = (window.AUC_I18N && window.AUC_I18N.lang()) || "si"; return (T[l] && T[l][k]) || T.si[k]; }

  var pageDone = false;
  function boot() { initNav(); if (!pageDone && document.getElementById("searchResults")) { pageDone = true; initPage(); } }
  document.addEventListener("siteHeaderReady", boot);
  document.addEventListener("DOMContentLoaded", boot);
  boot(); // header.js loads this file after the header exists, so run right away too
})();
