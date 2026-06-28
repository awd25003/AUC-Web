document.addEventListener("DOMContentLoaded", function () {
  let reveals = [];
  let navbar = null;
  let headerWrap = null;
  let backToTop = null;

  // detect skip loader
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get("skipLoader") === "true") {
  document.body.setAttribute("data-page", "home-skip");
}

  function refreshDynamicElements() {
    reveals = document.querySelectorAll(".reveal");
    navbar = document.getElementById("mainNavbar");
    headerWrap = document.querySelector(".header-wrap");
    backToTop = document.getElementById("backToTop");
  }

  function updateClock() {
    const clock = document.getElementById("liveClock");
    if (!clock) return;

    const now = new Date();
    const timeText = now.toLocaleString("en-GB", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });

    const span = clock.querySelector("span");
    if (span) span.textContent = timeText;
  }

  function handleStickyNav() {
    if (!navbar) return;
    const triggerPoint = headerWrap ? headerWrap.offsetHeight - 20 : 120;

    if (window.scrollY > triggerPoint) {
      navbar.classList.add("is-sticky");
      document.body.style.paddingTop = navbar.offsetHeight + "px";
    } else {
      navbar.classList.remove("is-sticky");
      document.body.style.paddingTop = "0px";
    }
  }

  function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.92;
    reveals.forEach((item) => {
      const top = item.getBoundingClientRect().top;
      if (top < triggerBottom) {
        item.classList.add("active");
      }
    });
  }

  function formatCounterValue(value) {
    const num = Number(value);
    if (!Number.isFinite(num)) return value;

    if (String(value).includes(".")) {
      return num.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      });
    }

    return Math.round(num).toLocaleString();
  }

  function startCounters() {
    const counters = document.querySelectorAll("[data-counter]");

    counters.forEach(counter => {
      if (counter.dataset.done === "true") return;

      const rect = counter.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        counter.dataset.done = "true";

        const target = parseFloat(counter.getAttribute("data-counter")) || 0;
        let current = 0;
        const steps = 60;
        const increment = target / steps;

        const timer = setInterval(() => {
          current += increment;

          if (current >= target) {
            counter.textContent = formatCounterValue(target);
            clearInterval(timer);
          } else {
            counter.textContent = formatCounterValue(current);
          }
        }, 20);
      }
    });
  }

  function handleBackToTop() {
    if (!backToTop) return;
    if (window.scrollY > 300) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  }

  function initBackToTopClick() {
    if (!backToTop || backToTop.dataset.bound === "true") return;
    backToTop.dataset.bound = "true";

    backToTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // function closeNavbarOnClick() {
  //   const navCollapse = document.getElementById("mainNav");
  //   if (!navCollapse || typeof bootstrap === "undefined") return;
  //
  //   const navLinks = document.querySelectorAll("#mainNav .nav-link, #mainNav .dropdown-item");
  //
  //   navLinks.forEach(link => {
  //     if (link.dataset.bound === "true") return;
  //     link.dataset.bound = "true";
  //
 
  //
  //         bsCollapse.hide();
  //       }
  //     });
  //   });
  
  document.querySelectorAll('.dropdown-item, .nav-link:not(.dropdown-toggle)')
      .forEach(link => {

        link.addEventListener('click', () => {

          const navbar = document.getElementById('mainNav');
          const bsCollapse = bootstrap.Collapse.getInstance(navbar);

          if (bsCollapse) {
            bsCollapse.hide();
          }

      img.addEventListener("click", function () {
        lightboxImage.src = this.src;
        lightboxImage.alt = this.alt;
        lightboxTitle.textContent = this.dataset.title || this.alt || "සිතියම";
        imageLightboxModal.show();
      });
    });
 });

  function initTableSearch() {
    const searchInput = document.getElementById("chairmanSearch");
    const tableBody = document.getElementById("chairmanTableBody");
    if (!searchInput || !tableBody || searchInput.dataset.bound === "true") return;

    searchInput.dataset.bound = "true";
    const rows = tableBody.querySelectorAll("tr");

    searchInput.addEventListener("keyup", function () {
      const keyword = this.value.toLowerCase().trim();

      rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        row.style.display = text.includes(keyword) ? "" : "none";
      });
    });
  }

 function handleLoader() {
  const loader = document.getElementById("siteLoader");
  const page = document.body.getAttribute("data-page");

  // ❌ home page click (skip loader)
  if (page === "home-skip") {
    if (loader) loader.style.display = "none";
    document.body.classList.remove("loader-active");
    return;
  }

  // ✅ normal loader (first load)
  if (!loader) return;

  document.body.classList.add("loader-active");

  window.addEventListener("load", function () {
    setTimeout(() => {
      loader.classList.add("hide");
      document.body.classList.remove("loader-active");
    }, 700);
  });
}

  function runAll() {
    refreshDynamicElements();
    updateClock();
    revealOnScroll();
    startCounters();
    handleBackToTop();
    handleStickyNav();
    initBackToTopClick();
    closeNavbarOnClick();
    initLightbox();
    initTableSearch();
  }

  document.addEventListener("siteHeaderReady", runAll);
  document.addEventListener("siteFooterReady", runAll);
  document.addEventListener("homeSectionsReady", runAll);

  window.addEventListener("scroll", function () {
    revealOnScroll();
    startCounters();
    handleBackToTop();
    handleStickyNav();
  });

  window.addEventListener("resize", handleStickyNav);

  handleLoader();
  updateClock();
  setInterval(updateClock, 1000);
  runAll();
});

document.querySelectorAll('.service-title').forEach(title => {
    title.addEventListener('click', function () {
        const currentCard = this.closest('.service-card');
        const isActive = currentCard.classList.contains('active');

        document.querySelectorAll('.service-card').forEach(card => {
            card.classList.remove('active');
        });

        if (!isActive) {
            currentCard.classList.add('active');
        }
    });
});

pagination
const itemsPerPage = 3;
let currentPage = 1;

function renderNews(page) {
  const container = document.getElementById("newsContainer");
  if (!container) return;

  const totalPages = Math.ceil(newsData.length / itemsPerPage);

  // Clamp page
  if (page < 1) page = 1;
  if (page > totalPages) page = totalPages;

  currentPage = page; // update BEFORE renderPagination

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageItems = newsData.slice(start, end);

  container.innerHTML = pageItems.map(item => `
    <div class="col-lg-4 col-md-6 news-item">
      <article class="news-card">
        <div class="news-image">
          <img src="${item.image}" alt="news">
          <span class="news-badge">${item.category}</span>
        </div>
        <div class="news-content">
          <div class="news-date">
            <i class="fa-regular fa-calendar"></i> ${item.date}
          </div>
          <h4>${item.title}</h4>
          <p>${item.short}</p>
          <a href="news-details.html?id=${item.id}" class="news-link">
            Read more <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </article>
    </div>
  `).join("");

  renderPagination(totalPages);

  history.replaceState(null, "", `?page=${page}`);
}

function renderPagination(totalPages) {
  const pageNumbers = document.getElementById("pageNumbers");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  pageNumbers.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.innerText = i;
    btn.className = (i === currentPage) ? "page-btn active" : "page-btn";
    btn.onclick = () => renderNews(i);
    pageNumbers.appendChild(btn);
  }

  prevBtn.onclick = () => renderNews(currentPage - 1);
  nextBtn.onclick = () => renderNews(currentPage + 1);

  prevBtn.disabled = (currentPage === 1);
  nextBtn.disabled = (currentPage === totalPages);
}

document.addEventListener("DOMContentLoaded", () => {
  // Read page from URL on load (e.g. if user refreshes on page 2)
  const params = new URLSearchParams(window.location.search);
  const startPage = parseInt(params.get("page")) || 1;
  renderNews(startPage);
});