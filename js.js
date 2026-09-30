// ===== skipLoader detect (loader එක මඟහරින්න) =====
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get("skipLoader") === "true") {
  document.body.setAttribute("data-page", "home-skip");
}

// ===== Loader ඉවත් කිරීම (DOMContentLoaded ට පිටින්, ඕනෑම වේලාවක ක්‍රියාත්මක වේ) =====
function hideLoader() {
  const loader = document.getElementById("siteLoader");
  if (loader) {
    loader.classList.add("hide");
    setTimeout(() => {
      loader.style.display = "none";
    }, 600);
  }
  document.body.classList.remove("loader-active", "has-index-loader");
}

function handleLoader() {
  const loader = document.getElementById("siteLoader");
  const page = document.body.getAttribute("data-page");

  // loader එක skip කරන්නේ නම් හෝ loader එකක් නැත්නම්
  if (page === "home-skip" || !loader) {
    hideLoader();
    return;
  }

  document.body.classList.add("loader-active");

  if (document.readyState === "complete") {
    setTimeout(hideLoader, 700);
  } else {
    window.addEventListener("load", () => setTimeout(hideLoader, 700));
  }

  // ආරක්ෂිත උපාය: මොනවා වුණත් තත්පර 4කින් loader එක අයින් වෙනවා
  setTimeout(hideLoader, 4000);
}

// loader logic එක ඉක්මනින්ම ආරම්භ කරන්න
handleLoader();

document.addEventListener("DOMContentLoaded", function () {
  let reveals = [];
  let navbar = null;
  let headerWrap = null;
  let backToTop = null;

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

    counters.forEach((counter) => {
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

  // ===== Navbar link එකක් click කළාම mobile menu එක වැසීම =====
  function closeNavbarOnClick() {
    const navCollapse = document.getElementById("mainNav");
    if (!navCollapse || typeof bootstrap === "undefined") return;

    document
      .querySelectorAll("#mainNav .nav-link:not(.dropdown-toggle), #mainNav .dropdown-item")
      .forEach((link) => {
        if (link.dataset.bound === "true") return;
        link.dataset.bound = "true";

        link.addEventListener("click", () => {
          const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
          if (bsCollapse) bsCollapse.hide();
        });
      });
  }

  // ===== පින්තූර lightbox (සිතියම් ආදිය) =====
  // පින්තූරයට class="lightbox-img" දාන්න (ඔබේ class එක වෙනස් නම් මෙතන වෙනස් කරන්න)
  function initLightbox() {
    const modalEl = document.getElementById("imageLightboxModal");
    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxTitle = document.getElementById("lightboxTitle");
    if (!modalEl || !lightboxImage || !lightboxTitle || typeof bootstrap === "undefined") return;
    if (modalEl.dataset.bound === "true") return;
    modalEl.dataset.bound = "true";

    const imageLightboxModal = bootstrap.Modal.getOrCreateInstance(modalEl);

    document.addEventListener("click", function (e) {
      const img = e.target.closest(".lightbox-img");
      if (!img) return;

      lightboxImage.src = img.src;
      lightboxImage.alt = img.alt;
      lightboxTitle.textContent = img.dataset.title || img.alt || "සිතියම";
      imageLightboxModal.show();
    });
  }

  function initTableSearch() {
    const searchInput = document.getElementById("chairmanSearch");
    const tableBody = document.getElementById("chairmanTableBody");
    if (!searchInput || !tableBody || searchInput.dataset.bound === "true") return;

    searchInput.dataset.bound = "true";
    const rows = tableBody.querySelectorAll("tr");

    searchInput.addEventListener("keyup", function () {
      const keyword = this.value.toLowerCase().trim();

      rows.forEach((row) => {
        const text = row.innerText.toLowerCase();
        row.style.display = text.includes(keyword) ? "" : "none";
      });
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

  updateClock();
  setInterval(updateClock, 1000);
  runAll();
});

// ===== Service cards accordion (dynamic content සඳහා event delegation) =====
document.addEventListener("click", function (e) {
  const title = e.target.closest(".service-title");
  if (!title) return;

  const currentCard = title.closest(".service-card");
  if (!currentCard) return;

  const isActive = currentCard.classList.contains("active");

  document.querySelectorAll(".service-card").forEach((card) => {
    card.classList.remove("active");
  });

  if (!isActive) {
    currentCard.classList.add("active");
  }
});