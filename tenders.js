(function () {
  var list = document.getElementById("tenderList"), tabs = document.getElementById("tenderTabs");
  if (!list) return;
  var filter = "all", I = window.AUC_I18N;
  var LOC = { si: "si-LK", ta: "ta-LK", en: "en-GB" };
  var ICON = { tender: "fa-file-contract", notice: "fa-bullhorn", vacancy: "fa-user-tie" };
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function fmt(d) { return d ? new Date(d + "T00:00:00").toLocaleDateString(LOC[I.lang()], { year: "numeric", month: "short", day: "numeric" }) : ""; }
  function pick(o) { return (o && (o[I.lang()] || o.si || o.en)) || ""; }
  function render() {
    var today = new Date().toISOString().slice(0, 10);
    var items = (window.AUC_TENDERS || []).filter(function (x) { return filter === "all" || x.type === filter; })
      .sort(function (a, b) { return (b.published || "").localeCompare(a.published || ""); });
    if (!items.length) { list.innerHTML = '<div class="tender-empty">' + esc(I.t("t.none")) + "</div>"; return; }
    list.innerHTML = items.map(function (x) {
      var closed = x.close && x.close < today;
      var badge = x.close ? '<span class="t-status ' + (closed ? "closed" : "open") + '">' + esc(I.t(closed ? "t.closed" : "t.open")) + "</span>" : "";
      var file = x.file ? '<a class="t-dl" href="uploads/tenders/' + encodeURI(x.file) + '" target="_blank" rel="noreferrer"><i class="fa-solid fa-download"></i> ' + esc(I.t("t.dl")) + "</a>" : "";
      return '<article class="tender-card reveal active"><div class="t-icon"><i class="fa-solid ' + ICON[x.type] + '"></i></div><div class="t-body">' +
        '<div class="t-top"><span class="t-type">' + esc(I.t("t." + x.type)) + "</span>" + badge + (x.sample ? '<span class="t-sample">' + esc(I.t("t.sample")) + "</span>" : "") + "</div>" +
        "<h4>" + esc(pick(x.title)) + "</h4><p>" + esc(pick(x.desc)) + "</p>" +
        '<div class="t-meta">' + (x.ref ? "<span><b>" + esc(I.t("t.ref")) + ":</b> " + esc(x.ref) + "</span>" : "") +
        "<span><b>" + esc(I.t("t.pub")) + ":</b> " + fmt(x.published) + "</span>" +
        (x.close ? "<span><b>" + esc(I.t("t.close")) + ":</b> " + fmt(x.close) + "</span>" : "") + "</div>" + file + "</div></article>";
    }).join("");
  }
  tabs.addEventListener("click", function (e) {
    var b = e.target.closest(".tender-tab"); if (!b) return;
    filter = b.getAttribute("data-filter");
    tabs.querySelectorAll(".tender-tab").forEach(function (t) { t.classList.toggle("active", t === b); });
    render();
  });
  document.addEventListener("langchange", render);
  render();
})();
