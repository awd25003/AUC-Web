/* Contact form – sends via FormSubmit (free, no server needed).
   FIRST USE: submit one test message; FormSubmit emails ambalangodauc@gmail.com a one-time activation link. */
(function () {
  var ENDPOINT = "https://formsubmit.co/ajax/ambalangodauc@gmail.com";
  var form = document.getElementById("contactForm");
  if (!form) return;
  var status = document.getElementById("cf-status"), label = document.getElementById("cf-btn-label");
  var T = function (k) { return window.AUC_I18N.t(k); };
  function show(msg, ok) { status.textContent = msg; status.className = "form-status " + (ok ? "ok" : "err"); }
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var d = new FormData(form);
    if (d.get("_honey")) return;
    var okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((d.get("email") || "").trim());
    if (!(d.get("name") || "").trim() || !okEmail || (d.get("message") || "").trim().length < 5) { show(T("c.req"), false); return; }
    var btn = form.querySelector("button[type=submit]"); btn.disabled = true; label.textContent = T("c.sending");
    var body = { name: d.get("name"), email: d.get("email"), phone: d.get("phone"), type: d.get("type"),
      subject: d.get("subject"), message: d.get("message"),
      _subject: "[Website] " + d.get("type") + " – " + (d.get("subject") || d.get("name")), _template: "table", _captcha: "false", _replyto: d.get("email") };
    fetch(ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(body) })
      .then(function (r) { return r.json().then(function (j) { if (!r.ok || j.success === "false") throw 0; }); })
      .then(function () { form.reset(); show(T("c.ok"), true); })
      .catch(function () { show(T("c.err"), false); })
      .finally(function () { btn.disabled = false; label.setAttribute("data-i18n", "c.send"); label.textContent = T("c.send"); });
  });
})();
