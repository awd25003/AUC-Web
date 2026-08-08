document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("site-header");
  if (!header) return;

  const page = document.body.getAttribute("data-page") || "";

  header.innerHTML = `
    <div class="topbar">
      <div class="container-xxl">
        <div class="topbar-inner">
          <div class="topbar-left">
            <a href="tel:+94912258275"><i class="fa-solid fa-phone"></i> +94 91 225 8275</a>
            <a href="mailto:ambalangodauc@gmail.com"><i class="fa-solid fa-envelope"></i> ambalangodauc@gmail.com</a>
            <span><i class="fa-solid fa-location-dot"></i> අම්බලන්ගොඩ, ශ්‍රී ලංකාව</span>
          </div>

          <div class="topbar-right">
            <div class="live-clock" id="liveClock">
              <i class="fa-regular fa-clock"></i>
              <span>Loading...</span>
            </div>
            <div class="lang-switch">
              <a href="#" class="active">සිං</a>
              <a href="#">த</a>
              <a href="#">EN</a>
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
             <p>ආයුබෝවන්</p>
              <h2 class="brand-heading">අම්බලන්ගොඩ නගර සභාව</h2>
             
            </div>
          </div>
 
    
          <div class="brand-right">
            <a href="payments.html" class="header-btn btn-solid">
              <i class="fa-solid fa-credit-card"></i> Online Payments
            </a>
            <a href="uploads/pdf/citizen_charter_ambalangoda.pdf" target="_blank" rel="noreferrer" class="header-btn btn-outline-white">
              <i class="fa-solid fa-file-lines"></i> පුරවැසි ප්‍රඥප්තිය
            </a>
          </div>
        </div>
      </div>

      <nav class="navbar navbar-expand-xl premium-navbar" id="mainNavbar">
        <div class="container-xxl">
         <a class="navbar-brand nav-brand-mobile" href="index.html">AUC</a>

          <button class="navbar-toggler premium-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div class="collapse navbar-collapse" id="mainNav">
            <ul class="navbar-nav mx-auto mb-2 mb-xl-0">
              <li class="nav-item">
                <a class="nav-link ${page === "home" ? "active" : ""}" 
   href="index.html?skipLoader=true">මුල් පිටුව</a>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle ${["ambalangoda","members","staff"].includes(page) ? "active" : ""}" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  අපගැන
                </a>
                <ul class="dropdown-menu premium-dropdown">
                  <li><a class="dropdown-item" href="ambalangoda.html">අම්බලන්ගොඩ ගැන</a></li>
                  <li><a class="dropdown-item" href="council-members.html">සභික මණ්ඩලය</a></li>
                  <li><a class="dropdown-item" href="staff.html">කාර්ය මණ්ඩලය</a></li>
                </ul>
              </li>

              <li class="nav-item"><a class="nav-link ${page === "services" ? "active" : ""}" href="services.html" > සේවාවන්</a></li>
              <li class="nav-item"><a class="nav-link ${page === "news" ? "active" : ""}" href="news.html">පුවත්</a></li>
              <li class="nav-item"><a class="nav-link ${page === "payments" ? "active" : ""}" href="payments.html">අන්තර්ජාල ගෙවීම්</a></li>
              <li class="nav-item"><a class="nav-link ${page === "information" ? "active" : ""}" href="information.html">තොරතුරු පනත</a></li>
              <li class="nav-item"><a class="nav-link ${page === "downloads" ? "active" : ""}" href="downloads.html">බාගත කිරීම්</a></li>
              <li class="nav-item"><a class="nav-link ${page === "contact" ? "active" : ""}" href="contact.html">සම්බන්ධවන්න</a></li>
            </ul>

            <form class="nav-search" role="search" onsubmit="return false;">
              <input type="search" placeholder="Search here..." aria-label="Search">
              <button type="submit" aria-label="Search">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  `;

  document.dispatchEvent(new Event("siteHeaderReady"));
});
