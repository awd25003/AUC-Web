(function () {
  var mount = document.getElementById("instMount"); if (!mount) return;
  var I = window.AUC_I18N;
  var SECTIONS = [
    { id: "preschools", icon: "fa-children", t: "i.pre", d: "i.preD" },
    { id: "ayurvedic", icon: "fa-leaf", t: "i.ayur", d: "i.ayurD" },
    { id: "libraries", icon: "fa-book-open", t: "i.lib", d: "i.libD" }
  ];
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function pick(o) { return (o && (o[I.lang()] || o.si || o.en)) || ""; }
  function row(icon, key, val) { return val ? '<li><i class="fa-solid ' + icon + '"></i><span><b>' + esc(I.t(key)) + ":</b> " + val + "</span></li>" : ""; }
  function card(x, s) {
    var img = x.image ? '<img src="uploads/institutions/' + encodeURI(x.image) + '" alt="' + esc(pick(x.name)) + '" loading="lazy">' : '<div class="inst-ph"><i class="fa-solid ' + s.icon + '"></i></div>';
    var tel = x.tel ? '<a href="tel:' + esc(x.tel.replace(/\s/g, "")) + '">' + esc(x.tel) + "</a>" : "";
    return '<article class="inst-card reveal active">' + img + '<div class="inst-body"><h4>' + esc(pick(x.name)) + (x.sample ? ' <span class="t-sample">' + esc(I.t("t.sample")) + "</span>" : "") + '</h4><ul class="inst-info">' +
      row("fa-location-dot", "i.addr", esc(pick(x.address))) + row("fa-phone", "i.tel", tel) + row("fa-clock", "i.hours", esc(pick(x.hours))) + row("fa-user", "i.head", esc(pick(x.head))) + "</ul></div></article>";
  }
  function render() {
    mount.innerHTML = SECTIONS.map(function (s) {
      var items = (window.AUC_INSTITUTIONS || {})[s.id] || [];
      return '<section class="inst-section" id="' + s.id + '"><div class="inst-head"><div class="inst-icon"><i class="fa-solid ' + s.icon + '"></i></div><div><h2>' + esc(I.t(s.t)) + "</h2><p>" + esc(I.t(s.d)) + "</p></div></div>" +
        (items.length ? '<div class="row g-4">' + items.map(function (x) { return '<div class="col-lg-4 col-md-6">' + card(x, s) + "</div>"; }).join("") + "</div>" : '<div class="tender-empty">' + esc(I.t("i.soon")) + "</div>") + "</section>";
    }).join("");
  }
  document.addEventListener("langchange", render);
  render();
})();
