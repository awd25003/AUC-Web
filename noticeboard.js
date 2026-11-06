/* Home page notice board – reads window.AUC_NOTICES from noticeboard-data.js */
(function () {
  var MAX = 6, I = window.AUC_I18N;
  var LOC = { si: "si-LK", ta: "ta-LK", en: "en-GB" };
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function pick(o) { if (typeof o === "string") return o; return (o && (o[I.lang()] || o.si || o.en)) || ""; }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function today() { var d = new Date(); return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); }
  function parts(ds) {
    var d = new Date(ds + "T00:00:00");
    if (isNaN(d)) return { day: "", mon: "" };
    return { day: pad(d.getDate()), mon: d.toLocaleDateString(LOC[I.lang()], { month: "short", year: "numeric" }) };
  }
  function untilText(ds) {
    var d = new Date(ds + "T00:00:00"); if (isNaN(d)) return "";
    return d.toLocaleDateString(LOC[I.lang()], { year: "numeric", month: "short", day: "numeric" });
  }
  function active() {
    var t = today();
    return (window.AUC_NOTICES || []).filter(function (n) { return !n.until || n.until >= t; })
      .sort(function (a, b) {
        if (!!b.urgent !== !!a.urgent) return b.urgent ? 1 : -1;
        return (b.date || "").localeCompare(a.date || "");
      }).slice(0, MAX);
  }
  function render() {
    var mount = document.getElementById("noticeBoardMount"); if (!mount) return;
    var items = active();
    var list = items.length ? '<ul class="nb-list">' + items.map(function (n) {
      var p = parts(n.date);
      var link = n.link ? '<a class="nb-link" href="' + esc(n.link) + '"' + (/\.pdf$/i.test(n.link) ? ' target="_blank" rel="noreferrer"' : "") + ">" + esc(I.t("nb.more")) + ' <i class="fa-solid fa-arrow-right"></i></a>' : "";
      var until = n.until ? "<span><i class=\"fa-regular fa-clock\"></i> " + esc(untilText(n.until)) + " " + esc(I.t("nb.until")) + "</span>" : "";
      var tags = (n.urgent ? '<span class="nb-tag urgent">' + esc(I.t("nb.urgent")) + "</span>" : "") + (n.sample ? '<span class="nb-tag sample">' + esc(I.t("nb.sample")) + "</span>" : "");
      return '<li class="nb-item' + (n.urgent ? " urgent" : "") + '"><div class="nb-date" aria-hidden="true"><b>' + p.day + "</b><span>" + esc(p.mon) + "</span></div>" +
        '<div class="nb-body"><h3>' + tags + esc(pick(n.title)) + "</h3>" + (pick(n.text) ? "<p>" + esc(pick(n.text)) + "</p>" : "") +
        (until || link ? '<div class="nb-foot">' + until + link + "</div>" : "") + "</div></li>";
    }).join("") + "</ul>" : '<div class="nb-empty">' + esc(I.t("nb.none")) + "</div>";
    mount.innerHTML = '<div class="nb-board"><div class="nb-head"><span class="nb-head-ico"><i class="fa-solid fa-bullhorn"></i></span>' +
      "<div><h2>" + esc(I.t("nb.title")) + "</h2><p>" + esc(I.t("nb.sub")) + '</p></div><a class="nb-all" href="tenders.html">' + esc(I.t("nb.all")) + "</a></div>" + list + "</div>";
  }
  document.addEventListener("homeSectionsReady", render);
  document.addEventListener("langchange", render);
  render();
})();
