/* Contact form -> council e-mail (no server needed).
   ------------------------------------------------------------------
   SETTINGS (edit only this block)
   to        : the council mailbox that receives every message
   provider  : "formsubmit"  (default – free, needs ONE-TIME activation, see below)
               "web3forms"   (free alternative – paste its access key in web3formsKey)

   FormSubmit one-time activation:
     1. Open the LIVE website (not a file on your computer) and send one test message.
     2. FormSubmit e-mails "Activate Form" to the address in "to". Open that mail and press the button.
     3. From then on every message arrives in that mailbox (also check Spam the first time).
   Web3Forms:  go to web3forms.com, enter the council e-mail, copy the Access Key from the mail they send,
               paste it below and set provider to "web3forms". No activation click is needed.
   ------------------------------------------------------------------ */
(function () {
  var CFG = {
    to: "ambalangodauc@gmail.com",
    provider: "formsubmit",
    web3formsKey: ""
  };

  var form = document.getElementById("contactForm");
  if (!form) return;
  var status = document.getElementById("cf-status"), label = document.getElementById("cf-btn-label");
  var T = function (k) { return window.AUC_I18N.t(k); };

  function show(msg, ok, mailto) {
    status.textContent = msg; status.className = "form-status " + (ok ? "ok" : "err");
    if (mailto) {
      status.appendChild(document.createTextNode(" "));
      var a = document.createElement("a"); a.href = mailto; a.textContent = T("c.mailto");
      a.style.fontWeight = "700"; a.style.textDecoration = "underline"; status.appendChild(a);
    }
  }

  function send(f) {
    var subject = "[Website] " + f.type + " – " + (f.subject || f.name);
    if (CFG.provider === "web3forms") {
      if (!CFG.web3formsKey) return Promise.reject(new Error("web3forms key missing in contact.js"));
      return fetch("https://api.web3forms.com/submit", {
        method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: CFG.web3formsKey, subject: subject, from_name: f.name, name: f.name, email: f.email,
          phone: f.phone, type: f.type, message: f.message, botcheck: "" })
      }).then(function (r) { return r.json(); }).then(function (j) { if (!j.success) throw new Error(j.message || "web3forms failed"); });
    }
    return fetch("https://formsubmit.co/ajax/" + CFG.to, {
      method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ name: f.name, email: f.email, phone: f.phone, type: f.type, subject: f.subject, message: f.message,
        _subject: subject, _template: "table", _captcha: "false", _replyto: f.email })
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (j) {
        if (!r.ok || String(j.success) === "false") throw new Error(j.message || ("HTTP " + r.status));
      });
    });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var d = new FormData(form);
    if (d.get("_honey")) return;
    var f = { name: (d.get("name") || "").trim(), email: (d.get("email") || "").trim(), phone: (d.get("phone") || "").trim(),
      type: d.get("type") || "General", subject: (d.get("subject") || "").trim(), message: (d.get("message") || "").trim() };
    if (!f.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email) || f.message.length < 5) { show(T("c.req"), false); return; }

    var btn = form.querySelector("button[type=submit]"); btn.disabled = true; label.removeAttribute("data-i18n"); label.textContent = T("c.sending");
    send(f)
      .then(function () { form.reset(); show(T("c.ok"), true); })
      .catch(function (err) {
        if (window.console) console.warn("[contact form]", err && err.message ? err.message : err);
        var body = f.message + "\n\n— " + f.name + (f.phone ? " | " + f.phone : "") + " | " + f.email;
        var mailto = "mailto:" + CFG.to + "?subject=" + encodeURIComponent("[Website] " + f.type + " – " + (f.subject || f.name)) + "&body=" + encodeURIComponent(body);
        show(T("c.err"), false, mailto);
      })
      .finally(function () { btn.disabled = false; label.setAttribute("data-i18n", "c.send"); label.textContent = T("c.send"); });
  });
})();
