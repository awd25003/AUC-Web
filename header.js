document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("site-header");
  if (!header) return;
  const page = document.body.getAttribute("data-page") || "";
  const on = (list) => (list.includes(page) ? "active" : "");

  header.innerHTML = `
    <a href="#main-content" class="skip-link" data-i18n="skip">ප්‍රධාන අන්තර්ගතයට යන්න</a>
    <div class="topbar">
      <div class="container-xxl">
        <div class="topbar-inner">
          <div class="topbar-left">
            <a href="tel:+94912258275"><i class="fa-solid fa-phone"></i> +94 91 225 8275</a>
            <a href="mailto:ambalangodauc@gmail.com"><i class="fa-solid fa-envelope"></i> ambalangodauc@gmail.com</a>
            <span><i class="fa-solid fa-location-dot"></i> <span data-i18n="top.loc">අම්බලන්ගොඩ, ශ්‍රී ලංකාව</span></span>
          </div>
          <div class="topbar-right">
            <div class="live-clock" id="liveClock"><i class="fa-regular fa-clock"></i><span>Loading...</span></div>
            <div class="lang-switch" role="group" aria-label="Language">
              <a href="#" data-lang="si" title="සිංහල">සිං</a>
              <a href="#" data-lang="ta" title="தமிழ்">த</a>
              <a href="#" data-lang="en" title="English">EN</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <header class="header-wrap inner-header">
      <div class="container-xxl">
        <div class="brandbar">
          <div class="brand-left">
            <div class="brand-logos">
              <img src="img/logo2.jpg" alt="Logo 1" class="brand-logo">
              <img src="img/281961.png" alt="Logo 2" class="brand-logo brand-logo-small-padding">
            </div>
            <div class="brand-text">
              <p data-i18n="greet">ආයුබෝවන්</p>
              <h2 class="brand-heading" data-i18n="site.name">අම්බලන්ගොඩ නගර සභාව</h2>
            </div>
          </div>
          <a href="uploads/pdf/citizen_charter_ambalangoda.pdf" target="_blank" rel="noreferrer" class="header-btn btn-outline-white">
            <i class="fa-solid fa-file-lines"></i> <span data-i18n="charter">පුරවැසි ප්‍රඥප්තිය</span>
          </a>
        </div>
      </div>

      <nav class="navbar navbar-expand-xl premium-navbar" id="mainNavbar">
        <div class="container-xxl">
          <a class="navbar-brand nav-brand-mobile" href="index.html">AUC</a>
          <button class="navbar-toggler premium-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
            <span></span><span></span><span></span>
          </button>

          <div class="collapse navbar-collapse" id="mainNav">
            <ul class="navbar-nav mx-auto mb-2 mb-xl-0">
              <li class="nav-item"><a class="nav-link ${on(["home"])}" href="index.html?skipLoader=true" data-i18n="nav.home">මුල් පිටුව</a></li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle ${on(["ambalangoda","members","staff"])}" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-i18n="nav.about">අපගැන</a>
                <ul class="dropdown-menu premium-dropdown">
                  <li><a class="dropdown-item" href="ambalangoda.html" data-i18n="nav.about1">අම්බලන්ගොඩ ගැන</a></li>
                  <li><a class="dropdown-item" href="council-members.html" data-i18n="nav.members">සභික මණ්ඩලය</a></li>
                  <li><a class="dropdown-item" href="staff.html" data-i18n="nav.staff">කාර්ය මණ්ඩලය</a></li>
                </ul>
              </li>

              <li class="nav-item"><a class="nav-link ${on(["services"])}" href="services.html" data-i18n="nav.services">සේවාවන්</a></li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle ${on(["news","tenders","institutions"])}" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-i18n="nav.hub">තොරතුරු මධ්‍යස්ථානය</a>
                <ul class="dropdown-menu premium-dropdown">
                  <li><a class="dropdown-item" href="news.html" data-i18n="nav.news">පුවත්</a></li>
                  <li><a class="dropdown-item" href="tenders.html" data-i18n="nav.notices">දැන්වීම්</a></li>
                  <li><a class="dropdown-item" href="institutions.html" data-i18n="nav.inst">ආයතන</a></li>
                </ul>
              </li>
              <li class="nav-item"><a class="nav-link ${on(["payments"])}" href="payments.html" data-i18n="nav.pay">අන්තර්ජාල ගෙවීම්</a></li>
              <li class="nav-item"><a class="nav-link ${on(["information"])}" href="information.html" data-i18n="nav.rti">තොරතුරු පනත</a></li>
              <li class="nav-item"><a class="nav-link ${on(["downloads"])}" href="downloads.html" data-i18n="nav.dl">බාගත කිරීම්</a></li>
              <li class="nav-item"><a class="nav-link ${on(["contact"])}" href="contact.html" data-i18n="nav.contact">සම්බන්ධවන්න</a></li>
            </ul>

            <form class="nav-search" role="search" onsubmit="return false;">
              <input type="search" data-i18n-ph="search" placeholder="Search here..." aria-label="Search">
              <button type="submit" aria-label="Search"><i class="fa-solid fa-magnifying-glass"></i></button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  `;

  document.dispatchEvent(new Event("siteHeaderReady"));
});
