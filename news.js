document.addEventListener("DOMContentLoaded", () => {

  const container = document.getElementById("newsContainer");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const pageNumbers = document.getElementById("pageNumbers");

  if (!container) {
    console.error("newsContainer NOT FOUND");
    return;
  }

  const data = window.newsData;

  if (!Array.isArray(data)) {
    console.error("newsData NOT LOADED properly");
    return;
  }

  const itemsPerPage = 6;
  let currentPage = 1;

  // Sort latest first
  const sortedNews = [...data].sort((a, b) =>
    new Date(b.date) - new Date(a.date)
  );

  const totalPages = Math.max(1, Math.ceil(sortedNews.length / itemsPerPage));

  // ----------------------------
  // RENDER PAGE
  // ----------------------------
  function renderPage(page) {
    currentPage = page;
    container.innerHTML = "";

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = sortedNews.slice(start, end);

    if (pageItems.length === 0) {
      container.innerHTML = `
        <div class="col-12 text-center">
          <p>No news found.</p>
        </div>
      `;
      return;
    }

    pageItems.forEach(news => {
      const col = document.createElement("div");
      col.className = "col-lg-4 col-md-6";

      col.innerHTML = `
        <article class="news-card reveal">
          <div class="news-image">
            <img src="${news.image}" alt="${news.title}">
            <span class="news-badge">${news.category || ''}</span>
          </div>
          <div class="news-content">
            <div class="news-date">
              <i class="fa-regular fa-calendar"></i> ${news.date}
            </div>
            <h4>${news.title}</h4>
            <p>${news.short || ''}</p>
            <a href="news-details.html?id=${news.id}" class="news-link">
              Read more →
            </a>
          </div>
        </article>
      `;

      container.appendChild(col);
    });

    updateButtons();
    renderPagination();

    // Re-trigger reveal animation (js.js uses .active class)
    setTimeout(() => {
      document.querySelectorAll("#newsContainer .reveal").forEach(el => {
        el.classList.add("active");
      });
    }, 50);

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ----------------------------
  // PAGINATION BUTTONS
  // ----------------------------
  function renderPagination() {
    pageNumbers.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement("button");
      btn.innerText = i;
      btn.className = "page-btn" + (i === currentPage ? " active" : "");

      btn.addEventListener("click", () => renderPage(i));
      pageNumbers.appendChild(btn);
    }
  }

  function updateButtons() {
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
  }

  // ----------------------------
  // EVENTS
  // ----------------------------
  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) renderPage(currentPage - 1);
  });

  nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) renderPage(currentPage + 1);
  });

  // ----------------------------
  // INIT
  // ----------------------------
  renderPage(1);

});