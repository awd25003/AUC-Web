/* Ambalangoda UC – 3 language engine (සිංහල / தமிழ் / English)
   Add new text: put a key in all three languages below, then use data-i18n="key" in HTML. */
(function () {
  var D = {
    si: {
      "site.name": "අම්බලන්ගොඩ නගර සභාව", "greet": "ආයුබෝවන්", "charter": "පුරවැසි ප්‍රඥප්තිය",
      "top.loc": "අම්බලන්ගොඩ, ශ්‍රී ලංකාව", "search": "සොයන්න...", "skip": "ප්‍රධාන අන්තර්ගතයට යන්න",
      "nav.home": "මුල් පිටුව", "nav.about": "අපගැන", "nav.about1": "අම්බලන්ගොඩ ගැන", "nav.members": "සභික මණ්ඩලය",
      "nav.staff": "කාර්ය මණ්ඩලය", "nav.services": "සේවාවන්", "nav.inst": "ආයතන", "nav.pre": "පෙරපාසල්",
      "nav.ayur": "ආයුර්වේද", "nav.lib": "පුස්තකාල", "nav.tenders": "ටෙන්ඩර් සහ දැන්වීම්", "nav.news": "පුවත්", "nav.hub": "තොරතුරු මධ්‍යස්ථානය", "nav.notices": "දැන්වීම්",
      "nav.pay": "අන්තර්ජාල ගෙවීම්", "nav.rti": "තොරතුරු පනත", "nav.dl": "බාගත කිරීම්", "nav.contact": "සම්බන්ධවන්න",
      "f.contact": "අප සමඟ සම්බන්ධ වන්න", "f.addr": "නගර සභාව, අම්බලන්ගොඩ", "f.map": "මාර්ග සිතියම", "f.links": "වැදගත් සබැඳි",
      "f.l1": "ප්‍රධාන ලේකම් කාර්යාලය (ද. ප.)", "f.l2": "ප්‍රධාන අමාත්‍යාංශය (ද. ප.)", "f.l3": "රාජ්‍ය සේවා කොමිෂන් සභාව (ද. ප.)",
      "f.l4": "පළාත් පාලන දෙපාර්තමේන්තුව (ද. ප.)", "f.rights": "© 2026 අම්බලන්ගොඩ නගර සභාව | සියලු හිමිකම් ඇවිරිණි",
      "c.eyebrow": "Contact Us", "c.title": "සම්බන්ධවන්න", "c.sub": "අම්බලන්ගොඩ නගර සභාව සමඟ සම්බන්ධ වීමට අවශ්‍ය සියලු තොරතුරු.",
      "c.info": "සම්බන්ධතා තොරතුරු", "c.address": "ලිපිනය", "c.addrv": "නගර සභාව, අම්බලන්ගොඩ, ශ්‍රී ලංකාව", "c.phone": "දුරකථන",
      "c.fax": "ෆැක්ස්", "c.email": "විද්‍යුත් ලිපිනය", "c.hours": "කාර්යාල වේලාවන්", "c.hoursv": "සඳුදා - සිකුරාදා | පෙ.ව. 8.30 - ප.ව. 4.15",
      "c.form": "පණිවිඩයක් යවන්න", "c.name": "නම", "c.yname": "ඔබගේ නම", "c.yemail": "ඔබගේ ඊමේල් ලිපිනය", "c.tel": "දුරකථන අංකය",
      "c.subject": "විෂයය", "c.type": "පණිවිඩ වර්ගය", "c.t1": "සාමාන්‍ය විමසුම", "c.t2": "පැමිණිල්ලක්", "c.t3": "යෝජනාවක්", "c.t4": "සේවා ඉල්ලීමක්",
      "c.msg": "පණිවිඩය", "c.ymsg": "ඔබගේ පණිවිඩය මෙහි ලියන්න", "c.send": "පණිවිඩය යවන්න", "c.sending": "යවමින්...",
      "c.ok": "ස්තුතියි! ඔබගේ පණිවිඩය අප වෙත ලැබුණා. හැකි ඉක්මනින් ඔබව සම්බන්ධ කර ගන්නෙමු.",
      "c.err": "පණිවිඩය යැවීමට නොහැකි විය. කරුණාකර නැවත උත්සාහ කරන්න, නැතහොත් දුරකථනයෙන් අප අමතන්න.",
      "c.req": "කරුණාකර නම, ඊමේල් සහ පණිවිඩය නිවැරදිව පුරවන්න.",
      "t.eyebrow": "Tenders & Notices", "t.title": "ටෙන්ඩර් සහ දැන්වීම්", "t.sub": "ටෙන්ඩර් කැඳවීම්, නිල දැන්වීම් සහ රැකියා පුරප්පාඩු.",
      "t.all": "සියල්ල", "t.tender": "ටෙන්ඩර්", "t.notice": "දැන්වීම්", "t.vacancy": "රැකියා පුරප්පාඩු", "t.ref": "යොමු අංකය",
      "t.pub": "පළ කළ දිනය", "t.close": "අවසන් දිනය", "t.open": "විවෘතයි", "t.closed": "වසා ඇත", "t.dl": "ලේඛනය බාගන්න",
      "t.none": "දැනට මෙම වර්ගයේ දැන්වීම් නොමැත.", "t.sample": "නිදර්ශනයකි",
      "t.help": "දැන්වීමක් පළ කිරීමට හෝ ටෙන්ඩර් ලේඛන ලබා ගැනීමට කාර්යාලය අමතන්න.",
      "i.eyebrow": "Our Institutions", "i.title": "නගර සභාවට අයත් ආයතන", "i.sub": "පෙරපාසල්, ආයුර්වේද සහ පුස්තකාල පිළිබඳ විස්තර.",
      "i.pre": "පෙරපාසල්", "i.preD": "ළමා වියේ ඉගෙනුම සහ සංවර්ධනය සඳහා නගර සභාව මෙහෙයවන පෙරපාසල්.",
      "i.ayur": "ආයුර්වේද", "i.ayurD": "ප්‍රදේශවාසීන් සඳහා සාම්ප්‍රදායික ආයුර්වේද සෞඛ්‍ය සේවා.",
      "i.lib": "පුස්තකාල", "i.libD": "කියවීමේ සංස්කෘතිය දියුණු කරන ප්‍රජා පුස්තකාල.",
      "i.addr": "ලිපිනය", "i.tel": "දුරකථන", "i.hours": "විවෘත වේලාවන්", "i.head": "භාරකරු / ප්‍රධානී", "i.more": "විස්තර",
      "i.soon": "මෙම අංශයේ විස්තර ඉක්මනින් එක් කෙරේ.", "i.back": "ආයතන ලැයිස්තුවට"
    },
    ta: {
      "site.name": "அம்பலாங்கொடை நகர சபை", "greet": "வணக்கம்", "charter": "குடிமக்கள் சாசனம்",
      "top.loc": "அம்பலாங்கொடை, இலங்கை", "search": "தேடுக...", "skip": "முதன்மை உள்ளடக்கத்திற்குச் செல்லவும்",
      "nav.home": "முகப்பு", "nav.about": "எம்மைப் பற்றி", "nav.about1": "அம்பலாங்கொடை பற்றி", "nav.members": "சபை உறுப்பினர்கள்",
      "nav.staff": "ஊழியர் குழு", "nav.services": "சேவைகள்", "nav.inst": "நிறுவனங்கள்", "nav.pre": "முன்பள்ளிகள்",
      "nav.ayur": "ஆயுர்வேதம்", "nav.lib": "நூலகங்கள்", "nav.tenders": "கேள்விப்பத்திரங்களும் அறிவித்தல்களும்", "nav.news": "செய்திகள்", "nav.hub": "தகவல் நிலையம்", "nav.notices": "அறிவித்தல்கள்",
      "nav.pay": "இணையவழி கொடுப்பனவுகள்", "nav.rti": "தகவல் அறியும் உரிமை", "nav.dl": "பதிவிறக்கங்கள்", "nav.contact": "தொடர்புகொள்ள",
      "f.contact": "எம்முடன் தொடர்பு கொள்ளுங்கள்", "f.addr": "நகர சபை, அம்பலாங்கொடை", "f.map": "வழி வரைபடம்", "f.links": "முக்கிய இணைப்புகள்",
      "f.l1": "தலைமைச் செயலாளர் அலுவலகம் (தெ. மா.)", "f.l2": "முதலமைச்சர் அமைச்சு (தெ. மா.)", "f.l3": "மாகாண பொதுச் சேவை ஆணைக்குழு (தெ. மா.)",
      "f.l4": "உள்ளூராட்சித் திணைக்களம் (தெ. மா.)", "f.rights": "© 2026 அம்பலாங்கொடை நகர சபை | அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை",
      "c.eyebrow": "Contact Us", "c.title": "தொடர்புகொள்ள", "c.sub": "அம்பலாங்கொடை நகர சபையுடன் தொடர்பு கொள்வதற்கான அனைத்து தகவல்களும்.",
      "c.info": "தொடர்புத் தகவல்", "c.address": "முகவரி", "c.addrv": "நகர சபை, அம்பலாங்கொடை, இலங்கை", "c.phone": "தொலைபேசி",
      "c.fax": "தொலைநகல்", "c.email": "மின்னஞ்சல்", "c.hours": "அலுவலக நேரம்", "c.hoursv": "திங்கள் - வெள்ளி | காலை 8.30 - மாலை 4.15",
      "c.form": "செய்தி அனுப்புங்கள்", "c.name": "பெயர்", "c.yname": "உங்கள் பெயர்", "c.yemail": "உங்கள் மின்னஞ்சல் முகவரி", "c.tel": "தொலைபேசி எண்",
      "c.subject": "தலைப்பு", "c.type": "செய்தி வகை", "c.t1": "பொது விசாரணை", "c.t2": "முறைப்பாடு", "c.t3": "ஆலோசனை", "c.t4": "சேவைக் கோரிக்கை",
      "c.msg": "செய்தி", "c.ymsg": "உங்கள் செய்தியை இங்கே எழுதுங்கள்", "c.send": "செய்தியை அனுப்புக", "c.sending": "அனுப்பப்படுகிறது...",
      "c.ok": "நன்றி! உங்கள் செய்தி எமக்குக் கிடைத்தது. விரைவில் உங்களைத் தொடர்பு கொள்வோம்.",
      "c.err": "செய்தியை அனுப்ப முடியவில்லை. தயவுசெய்து மீண்டும் முயற்சிக்கவும் அல்லது தொலைபேசியில் எம்மை அழைக்கவும்.",
      "c.req": "பெயர், மின்னஞ்சல் மற்றும் செய்தியைச் சரியாக நிரப்பவும்.",
      "t.eyebrow": "Tenders & Notices", "t.title": "கேள்விப்பத்திரங்களும் அறிவித்தல்களும்", "t.sub": "கேள்விப்பத்திர அழைப்புகள், அதிகாரப்பூர்வ அறிவித்தல்கள் மற்றும் வேலை வாய்ப்புகள்.",
      "t.all": "அனைத்தும்", "t.tender": "கேள்விப்பத்திரம்", "t.notice": "அறிவித்தல்கள்", "t.vacancy": "வேலை வாய்ப்புகள்", "t.ref": "மேற்கோள் எண்",
      "t.pub": "வெளியிட்ட திகதி", "t.close": "முடிவுத் திகதி", "t.open": "திறந்துள்ளது", "t.closed": "முடிவடைந்தது", "t.dl": "ஆவணத்தைப் பதிவிறக்குக",
      "t.none": "தற்போது இந்த வகையில் அறிவித்தல்கள் இல்லை.", "t.sample": "மாதிரி",
      "t.help": "அறிவித்தலை வெளியிட அல்லது கேள்விப்பத்திர ஆவணங்களைப் பெற அலுவலகத்தைத் தொடர்பு கொள்ளவும்.",
      "i.eyebrow": "Our Institutions", "i.title": "நகர சபைக்குரிய நிறுவனங்கள்", "i.sub": "முன்பள்ளிகள், ஆயுர்வேதம் மற்றும் நூலகங்கள் பற்றிய விவரங்கள்.",
      "i.pre": "முன்பள்ளிகள்", "i.preD": "சிறுவர்களின் ஆரம்பக் கற்றலுக்கும் வளர்ச்சிக்கும் நகர சபை நடத்தும் முன்பள்ளிகள்.",
      "i.ayur": "ஆயுர்வேதம்", "i.ayurD": "பிரதேச மக்களுக்கான பாரம்பரிய ஆயுர்வேத சுகாதார சேவைகள்.",
      "i.lib": "நூலகங்கள்", "i.libD": "வாசிப்புப் பழக்கத்தை வளர்க்கும் சமூக நூலகங்கள்.",
      "i.addr": "முகவரி", "i.tel": "தொலைபேசி", "i.hours": "திறந்திருக்கும் நேரம்", "i.head": "பொறுப்பாளர்", "i.more": "விவரங்கள்",
      "i.soon": "இப்பிரிவின் விவரங்கள் விரைவில் சேர்க்கப்படும்.", "i.back": "நிறுவனப் பட்டியலுக்கு"
    },
    en: {
      "site.name": "Ambalangoda Urban Council", "greet": "Welcome", "charter": "Citizen's Charter",
      "top.loc": "Ambalangoda, Sri Lanka", "search": "Search here...", "skip": "Skip to main content",
      "nav.home": "Home", "nav.about": "About Us", "nav.about1": "About Ambalangoda", "nav.members": "Council Members",
      "nav.staff": "Staff", "nav.services": "Services", "nav.inst": "Institutions", "nav.pre": "Preschools",
      "nav.ayur": "Ayurvedic", "nav.lib": "Libraries", "nav.tenders": "Tenders & Notices", "nav.news": "News", "nav.hub": "Information Centre", "nav.notices": "Notices",
      "nav.pay": "Online Payments", "nav.rti": "Right to Information", "nav.dl": "Downloads", "nav.contact": "Contact",
      "f.contact": "Get in Touch", "f.addr": "Urban Council, Ambalangoda", "f.map": "Location Map", "f.links": "Important Links",
      "f.l1": "Chief Secretary's Office (SP)", "f.l2": "Chief Minister's Ministry (SP)", "f.l3": "Provincial Public Service Commission (SP)",
      "f.l4": "Department of Local Government (SP)", "f.rights": "© 2026 Ambalangoda Urban Council | All rights reserved",
      "c.eyebrow": "Contact Us", "c.title": "Contact Us", "c.sub": "Everything you need to get in touch with Ambalangoda Urban Council.",
      "c.info": "Contact Information", "c.address": "Address", "c.addrv": "Urban Council, Ambalangoda, Sri Lanka", "c.phone": "Telephone",
      "c.fax": "Fax", "c.email": "Email", "c.hours": "Office Hours", "c.hoursv": "Monday - Friday | 8.30 a.m. - 4.15 p.m.",
      "c.form": "Send us a message", "c.name": "Name", "c.yname": "Your name", "c.yemail": "Your email address", "c.tel": "Phone number",
      "c.subject": "Subject", "c.type": "Message type", "c.t1": "General enquiry", "c.t2": "Complaint", "c.t3": "Suggestion", "c.t4": "Service request",
      "c.msg": "Message", "c.ymsg": "Write your message here", "c.send": "Send message", "c.sending": "Sending...",
      "c.ok": "Thank you! We have received your message and will get back to you as soon as possible.",
      "c.err": "Your message could not be sent. Please try again or call us by phone.",
      "c.req": "Please fill in your name, a valid email and your message.",
      "t.eyebrow": "Tenders & Notices", "t.title": "Tenders & Notices", "t.sub": "Tender invitations, official notices and job vacancies.",
      "t.all": "All", "t.tender": "Tenders", "t.notice": "Notices", "t.vacancy": "Vacancies", "t.ref": "Reference No.",
      "t.pub": "Published", "t.close": "Closing date", "t.open": "Open", "t.closed": "Closed", "t.dl": "Download document",
      "t.none": "There are no items in this category right now.", "t.sample": "Sample",
      "t.help": "To publish a notice or obtain tender documents, please contact the office.",
      "i.eyebrow": "Our Institutions", "i.title": "Council Institutions", "i.sub": "Details of our preschools, Ayurvedic centres and libraries.",
      "i.pre": "Preschools", "i.preD": "Preschools run by the Council for early childhood learning and development.",
      "i.ayur": "Ayurvedic", "i.ayurD": "Traditional Ayurvedic health services for local residents.",
      "i.lib": "Libraries", "i.libD": "Community libraries that nurture a culture of reading.",
      "i.addr": "Address", "i.tel": "Telephone", "i.hours": "Opening hours", "i.head": "In charge", "i.more": "Details",
      "i.soon": "Details for this section will be added soon.", "i.back": "Back to institutions"
    }
  };
  var KEY = "auc_lang", LANGS = ["si", "ta", "en"];
  function cur() { var l; try { l = localStorage.getItem(KEY); } catch (e) {} return LANGS.indexOf(l) > -1 ? l : "si"; }
  function t(k) { var l = cur(); return (D[l] && D[l][k]) || D.si[k] || k; }
  function apply(root) {
    root = root || document; var l = cur();
    root.querySelectorAll("[data-i18n]").forEach(function (e) { e.textContent = t(e.getAttribute("data-i18n")); });
    root.querySelectorAll("[data-i18n-ph]").forEach(function (e) { e.placeholder = t(e.getAttribute("data-i18n-ph")); });
    root.querySelectorAll("[data-i18n-aria]").forEach(function (e) { e.setAttribute("aria-label", t(e.getAttribute("data-i18n-aria"))); });
    document.documentElement.lang = l;
    if (document.body) {
      document.body.setAttribute("data-lang", l);
      var tk = document.body.getAttribute("data-title-key");
      if (tk) document.title = t(tk) + " | " + t("site.name");
    }
    document.querySelectorAll(".lang-switch a[data-lang]").forEach(function (a) { a.classList.toggle("active", a.getAttribute("data-lang") === l); });
  }
  function set(l) {
    if (LANGS.indexOf(l) < 0) return;
    try { localStorage.setItem(KEY, l); } catch (e) {}
    apply(); document.dispatchEvent(new CustomEvent("langchange", { detail: l }));
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest(".lang-switch a[data-lang]");
    if (a) { e.preventDefault(); set(a.getAttribute("data-lang")); }
  });
  ["siteHeaderReady", "siteFooterReady", "DOMContentLoaded"].forEach(function (ev) { document.addEventListener(ev, function () { apply(); }); });
  window.AUC_I18N = { t: t, lang: cur, set: set, apply: apply, dict: D };
})();
