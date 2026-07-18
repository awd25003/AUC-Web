document.addEventListener("DOMContentLoaded", () => {

  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));

  const titleEl = document.getElementById("news-title");
  const contentEl = document.getElementById("news-content");
  const paginationEl = document.getElementById("pagination");

  if (!window.newsData || !titleEl || !contentEl) {
    console.error("Missing required elements or newsData");
    return;
  }

  // ----------------------------
  // 1. FIND CURRENT NEWS
  // ----------------------------
  const currentNews = window.newsData.find(n => n.id === id);

  if (!currentNews) {
    titleEl.innerText = "News Not Found";
    contentEl.innerHTML = `<p style="color:red;">Invalid news ID.</p>`;
    return;
  }

  // ----------------------------
  // 2. SORT NEWS (LATEST FIRST)
  // ----------------------------
  const sorted = [...window.newsData].sort((a, b) =>
    new Date(b.date) - new Date(a.date)
  );

  const index = sorted.findIndex(n => n.id === id);
  const total = sorted.length;
  const currentNum = index + 1; // 1-based

 // ----------------------------
  // 3. RENDER MAIN CONTENT
  // ----------------------------
  titleEl.innerText = currentNews.title;

  const imagesArr = currentNews.images && currentNews.images.length
    ? currentNews.images
    : [currentNews.image || 'uploads/news/default.jpg'];

  let currentImgIndex = 0;

  const galleryHtml = `
    <div class="news-gallery mb-3">
      <div class="main-image mb-2" style="position:relative;">
        ${imagesArr.length > 1 ? `
        <button type="button" class="gallery-arrow gallery-arrow-left" aria-label="Previous image">
          <i class="fa-solid fa-chevron-left"></i>
        </button>` : ''}

        <img id="mainNewsImage" src="${imagesArr[0]}" alt="${currentNews.title}"
             style="width:100%; border-radius:10px; display:block;"
             onerror="this.onerror=null;this.src='uploads/news/default.jpg';">

        ${imagesArr.length > 1 ? `
        <button type="button" class="gallery-arrow gallery-arrow-right" aria-label="Next image">
          <i class="fa-solid fa-chevron-right"></i>
        </button>` : ''}
      </div>
      ${imagesArr.length > 1 ? `
      <div class="thumb-strip d-flex gap-2 flex-wrap">
        ${imagesArr.map((img, i) => `
          <img src="${img}" 
               class="thumb-img${i === 0 ? ' active' : ''}"
               data-index="${i}"
               style="width:80px; height:60px; object-fit:cover; border-radius:6px; cursor:pointer; border:2px solid ${i === 0 ? '#0d6efd' : 'transparent'};"
               onerror="this.onerror=null;this.src='uploads/news/default.jpg';">
        `).join('')}
      </div>` : ''}
    </div>
  `;

  contentEl.innerHTML = `
    <div class="news-meta mb-3">
      <i class="fa-regular fa-calendar"></i>
      <span>${currentNews.date}</span>
      <span style="margin-left:10px;">
        <strong>${currentNews.category || ''}</strong>
      </span>
    </div>

    ${galleryHtml}

    <div class="news-body">
      ${currentNews.content || ''}
    </div>
  `;

  // ----------------------------
  // GALLERY NAVIGATION LOGIC
  // ----------------------------
  const mainImgEl = document.getElementById('mainNewsImage');
  const thumbEls = contentEl.querySelectorAll('.thumb-img');
  const leftArrow = contentEl.querySelector('.gallery-arrow-left');
  const rightArrow = contentEl.querySelector('.gallery-arrow-right');

  function showImage(idx) {
    if (idx < 0) idx = imagesArr.length - 1;
    if (idx >= imagesArr.length) idx = 0;
    currentImgIndex = idx;

    mainImgEl.src = imagesArr[currentImgIndex];

    thumbEls.forEach(t => {
      const isActive = Number(t.dataset.index) === currentImgIndex;
      t.style.borderColor = isActive ? '#0d6efd' : 'transparent';
    });
  }

  thumbEls.forEach(thumb => {
    thumb.addEventListener('click', () => {
      showImage(Number(thumb.dataset.index));
    });
  });

  if (leftArrow) {
    leftArrow.addEventListener('click', () => showImage(currentImgIndex - 1));
  }
  if (rightArrow) {
    rightArrow.addEventListener('click', () => showImage(currentImgIndex + 1));
  }

  // Keyboard arrow keys support
  document.addEventListener('keydown', (e) => {
    if (imagesArr.length <= 1) return;
    if (e.key === 'ArrowLeft') showImage(currentImgIndex - 1);
    if (e.key === 'ArrowRight') showImage(currentImgIndex + 1);
  });

  // ----------------------------

  // ----------------------------
  // ----------------------------
  // 4. RELATED NEWS SIDEBAR
  // ----------------------------
  const sidebar = document.querySelector(".news-mini-list");

  if (sidebar) {
    sidebar.innerHTML = "";
    sorted.slice(0, 5).forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="news-details.html?id=${item.id}">${item.title}</a>`;
      sidebar.appendChild(li);
    });
  }

  // ----------------------------
  // 5. PREV / NEXT NAVIGATION
  // නව පුවත = left (←) | පරණ පුවත = right (→)
  // ----------------------------
  const newerNews = sorted[index - 1];
  const olderNews = sorted[index + 1];

  const navContainer = document.createElement("div");
  navContainer.className = "news-nav mt-5 d-flex justify-content-between";

  navContainer.innerHTML = `
    <div>
      ${newerNews
        ? `<a class="btn btn-outline-primary" href="news-details.html?id=${newerNews.id}">← ${newerNews.title}</a>`
        : ""}
    </div>
    <div>
      ${olderNews
        ? `<a class="btn btn-outline-primary" href="news-details.html?id=${olderNews.id}">${olderNews.title} →</a>`
        : ""}
    </div>
  `;

  contentEl.appendChild(navContainer);

  // ----------------------------
  // 6. SMART PAGINATION
  // 1 2 3 ... 8 9 10 ... 18 19 20
  // ----------------------------
  if (paginationEl) {
    paginationEl.innerHTML = "";

    function makeLi(num, label, isActive, isDisabled) {
      const li = document.createElement("li");
      li.className = "page-item"
        + (isActive ? " active" : "")
        + (isDisabled ? " disabled" : "");

      const item = sorted[num - 1];
      const href = item ? `news-details.html?id=${item.id}` : "#";

      li.innerHTML = `<a class="page-link" href="${isDisabled ? '#' : href}">${label}</a>`;
      return li;
    }

    function makeEllipsis() {
      const li = document.createElement("li");
      li.className = "page-item disabled";
      li.innerHTML = `<span class="page-link">...</span>`;
      return li;
    }

    // Prev button
    paginationEl.appendChild(makeLi(currentNum - 1, "‹", false, currentNum === 1));

    // Page number logic
    const delta = 2; // pages to show around current
    const pages = new Set();

    // Always show first 2 and last 2
    [1, 2].forEach(p => { if (p <= total) pages.add(p); });
    [total - 1, total].forEach(p => { if (p >= 1) pages.add(p); });

    // Show pages around current
    for (let p = currentNum - delta; p <= currentNum + delta; p++) {
      if (p >= 1 && p <= total) pages.add(p);
    }

    const pageArr = [...pages].sort((a, b) => a - b);

    let prev = 0;
    pageArr.forEach(p => {
      if (p - prev > 1) {
        paginationEl.appendChild(makeEllipsis());
      }
      paginationEl.appendChild(makeLi(p, p, p === currentNum, false));
      prev = p;
    });

    // Next button
    paginationEl.appendChild(makeLi(currentNum + 1, "›", false, currentNum === total));
  }

});