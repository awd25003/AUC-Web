document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("siteLoader");
  const backToTop = document.getElementById("backToTop");
  const navbar = document.getElementById("mainNavbar");
  const liveClock = document.getElementById("liveClock");
  const reveals = document.querySelectorAll(".reveal");
  const counters = document.querySelectorAll("[data-counter]");

  /* loader */
  window.addEventListener("load", function () {
    setTimeout(() => {
      loader.classList.add("hide");
    }, 500);
  });

  /* live clock */
  function updateClock() {
    if (!liveClock) return;
    const now = new Date();
    const timeString = now.toLocaleString("en-GB", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
    liveClock.querySelector("span").textContent = timeString;
  }
  updateClock();
  setInterval(updateClock, 1000);

  /* sticky navbar + back to top */
  const navOffset = navbar ? navbar.offsetTop : 0;

  function handleScrollUI() {
    const y = window.scrollY;

    if (navbar) {
      if (y > navOffset + 40) {
        navbar.classList.add("is-sticky");
      } else {
        navbar.classList.remove("is-sticky");
      }
    }

    if (backToTop) {
      if (y > 300) {
        backToTop.classList.add("show");
      } else {
        backToTop.classList.remove("show");
      }
    }

    revealOnScroll();
  }

  window.addEventListener("scroll", handleScrollUI);

  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  /* reveal animation */
  function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.9;

    reveals.forEach((item) => {
      const rect = item.getBoundingClientRect();
      if (rect.top < triggerBottom) {
        item.classList.add("active");
      }
    });
  }
  revealOnScroll();

  /* counter animation */
  let counterStarted = false;

  function startCounters() {
    if (counterStarted) return;

    const statsSection = document.querySelector(".stats-row");
    if (!statsSection) return;

    const rect = statsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      counterStarted = true;

      counters.forEach(counter => {
        const target = +counter.getAttribute("data-counter");
        let current = 0;
        const increment = Math.max(1, Math.ceil(target / 120));

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            counter.textContent = target.toLocaleString();
            clearInterval(timer);
          } else {
            counter.textContent = current.toLocaleString();
          }
        }, 18);
      });
    }
  }

  startCounters();
  window.addEventListener("scroll", startCounters);
});