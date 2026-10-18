/* Service detail pages – (1) mark documents whose file is missing on the server, (2) highlight current service in the index */
(function () {
  // 1. Documents: keep the original link, but if the server answers 404 show a clear "coming soon" state instead of a dead link.
  document.querySelectorAll("a[data-doc]").forEach(function (a) {
    var href = a.getAttribute("href");
    if (!href || !window.fetch) return;
    fetch(href, { method: "HEAD" }).then(function (r) {
      if (r.status === 404) {
        a.setAttribute("data-href", href); a.removeAttribute("href"); a.removeAttribute("target");
        a.classList.add("is-missing"); a.setAttribute("aria-disabled", "true");
        a.innerHTML = '<i class="fa-regular fa-clock"></i> <span>ලේඛනය ඉක්මනින් එක් කෙරේ</span>';
      }
    }).catch(function () { /* offline / file:// – leave the link as it is */ });
  });
  // 2. Index scroll-spy
  var links = [].slice.call(document.querySelectorAll(".sd-index-link"));
  if (!links.length || !("IntersectionObserver" in window)) return;
  var map = {}; links.forEach(function (l) { map[l.getAttribute("href").slice(1)] = l; });
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { links.forEach(function (l) { l.classList.remove("active"); }); map[e.target.id].classList.add("active"); } });
  }, { rootMargin: "-25% 0px -60% 0px" });
  Object.keys(map).forEach(function (id) { var el = document.getElementById(id); if (el) io.observe(el); });
})();
