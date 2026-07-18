document.addEventListener("DOMContentLoaded", function () {
  const mount = document.getElementById("home-sections");
  if (!mount) return;

  mount.innerHTML = `
    <section class="flash-news-wrap">
      <div class="container-fluid px-3 py-2 flash-news-shell">
        <div class="flash-news-inner d-flex align-items-center">
          <span class="flash-news-label me-3 flex-shrink-0">
            <span class="flash-dot"></span>
            නවතම පුවත්
          </span>

          <div class="flash-news-track-wrap">
            <div class="flash-news-track">
              <a href="payments.html" class="flash-news-item">
                <span class="news-chip">NEW</span>
                අම්බලන්ගොඩ නගර සභාවේ නව ඔන්ලයින් ගෙවීම් සේවාව දැන් ක්‍රියාත්මකයි
              </a>

              <a href="downloads.html" class="flash-news-item">
                <span class="news-chip">Notice</span>
                නව අයදුම්පත් සහ නිල ලේඛන බාගත කිරීම් අංශයට එක් කර ඇත
              </a>

              <a href="services.html" class="flash-news-item">
                <span class="news-chip">Service</span>
                ගලී බවුසර්, වතුර බවුසර් සහ බැකෝ සේවාවන් පිළිබඳ විස්තර දැන් වෙබ් අඩවියේ ඇත
              </a>

              <a href="payments.html" class="flash-news-item" aria-hidden="true">
                <span class="news-chip">NEW</span>
                අම්බලන්ගොඩ නගර සභාවේ නව ඔන්ලයින් ගෙවීම් සේවාව දැන් ක්‍රියාත්මකයි
              </a>

              <a href="downloads.html" class="flash-news-item" aria-hidden="true">
                <span class="news-chip">Notice</span>
                නව අයදුම්පත් සහ නිල ලේඛන බාගත කිරීම් අංශයට එක් කර ඇත
              </a>

              <a href="services.html" class="flash-news-item" aria-hidden="true">
                <span class="news-chip">Service</span>
                ගලී බවුසර්, වතුර බවුසර් සහ බැකෝ සේවාවන් පිළිබඳ විස්තර දැන් වෙබ් අඩවියේ ඇත
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="hero-section">
      <div id="heroCarousel" class="carousel slide carousel-fade hero-carousel" data-bs-ride="carousel" data-bs-interval="5000" data-bs-pause="false">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="img/hero1.jpg" class="d-block w-100 hero-img" alt="Hero 1">
            <div class="hero-overlay"></div>
            <div class="container-xxl">
              <div class="hero-content">
                <span class="hero-tag">Official Government Portal</span>
                <h1>නවීන සේවාවන් සමඟ<br>ජනතාවට සමීප නගර සභාවක්</h1>
                <p>අම්බලන්ගොඩ නගර සභාව වෙතින් ජනතාව සඳහා ඉක්මන්, විශ්වාසදායක සහ නවීන සේවාවන්.</p>
                <div class="hero-actions">
                  <a href="services.html" class="hero-btn hero-primary">සේවාවන් බලන්න</a>
                  <a href="ambalangoda.html" class="hero-btn hero-secondary">අප ගැන</a>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <img src="img/hero2.jpg" class="d-block w-100 hero-img" alt="Hero 2">
            <div class="hero-overlay"></div>
            <div class="container-xxl">
              <div class="hero-content">
                <span class="hero-tag">Digital Public Services</span>
                <h1>පුරවැසියන්ට පහසු<br>අන්තර්ජාල සේවාවන්</h1>
                <p>ගෙවීම්, බාගත කිරීම්, තොරතුරු, නිවේදන සහ තවත් බොහෝ සේවාවන් එකම තැනකින්.</p>
                <div class="hero-actions">
                  <a href="payments.html" class="hero-btn hero-primary">Online Payments</a>
                  <a href="downloads.html" class="hero-btn hero-secondary">Downloads</a>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <img src="img/hero3.jpg" class="d-block w-100 hero-img" alt="Hero 3">
            <div class="hero-overlay"></div>
            <div class="container-xxl">
              <div class="hero-content">
                <span class="hero-tag">Urban Development & Community Care</span>
                <h1>පිරිසිදු, ආරක්ෂිත සහ<br>සංවර්ධිත නගරයක් සඳහා</h1>
                <p>පොදු සේවා, පරිසර කළමනාකරණය සහ නාගරික සංවර්ධන වැඩසටහන් හරහා ප්‍රජාව ශක්තිමත් කිරීම.</p>
                <div class="hero-actions">
                  <a href="council-members.html" class="hero-btn hero-primary">සභික මණ්ඩලය</a>
                  <a href="staff.html" class="hero-btn hero-secondary">කාර්ය මණ්ඩලය</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button class="carousel-control-prev premium-control" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next premium-control" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>

      <div class="container-xxl">
        <div class="stats-row">
          <div class="stat-card reveal">
            <div class="stat-icon"><i class="fa-solid fa-users"></i></div>
            <div>
              <h3 data-counter="27695">0</h3>
              <p>ජනගහණය</p>
            </div>
          </div>

          <div class="stat-card reveal">
            <div class="stat-icon"><i class="fa-solid fa-map"></i></div>
            <div>
              <h3 data-counter="7.25">0</h3>
              <p>භූමි ප්‍රමාණය ව.කි.</p>
            </div>
          </div>

          <div class="stat-card reveal">
            <div class="stat-icon"><i class="fa-solid fa-building-user"></i></div>
            <div>
              <h3 data-counter="13">0</h3>
              <p>ග්‍රාම නිලධාරී කොට්ඨාශ</p>
            </div>
          </div>

          <div class="stat-card reveal">
            <div class="stat-icon"><i class="fa-solid fa-house"></i></div>
            <div>
              <h3 data-counter="10886">0</h3>
              <p>වරිපනම් දේපල සංඛ්‍යාව</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-space section-light">
      <div class="container-xxl">
        <div class="section-title text-center reveal">
          <span class="section-mini">Vision & Mission</span>
          <h2>අපගේ දැක්ම සහ මෙහෙවර</h2>
        </div>

        <div class="row g-4">
          <div class="col-lg-6">
            <div class="vision-mission-card reveal">
              <div class="vision-mission-head">
                <div class="vision-mission-icon"><i class="fa-solid fa-eye"></i></div>
                <h3>අපගේ දැක්ම</h3>
              </div>
              <p style="text-align: justify;">
                පුරවැසි දනගේ සේවා ඉටු කොට අම්බලන්ගොඩ නගරය විශිෂ්ඨ නගරය කරලමු මිහිපිට.
              </p>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="vision-mission-card reveal">
              <div class="vision-mission-head">
                <div class="vision-mission-icon"><i class="fa-solid fa-hand-holding-heart"></i></div>
                <h3>අපගේ මෙහෙවර</h3>
              </div>
              <p style="text-align: justify;">
                අම්බලන්ගොඩ නගර සභා බල ප්‍රදේශය තුල වෙසෙන සමස්ථ ප්‍රජාව වෙත අවශ්‍ය පොදු පහසුකම් සපයා ඔවුන්ගේ ආර්ථික, සාමාජික හා සංස්කෘතික සේවා ඉටු කොට ජීවන තත්ත්වය නංවා සමාජ ප්‍රගතිය ඇති කිරීම.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-space">
      <div class="container-xxl">
        <div class="section-title text-center reveal">
          <span class="section-mini">Official Messages</span>
          <h2>නිල පණිවුඩ</h2>
          <p></p>
        </div>

        <div class="row g-4">
          <div class="col-lg-6">
            <div class="official-message-card reveal">
              <div class="official-message-left">
                <img src="uploads/members/mayor.jpg" alt="සභාපතිතුමා">
              </div>
              <div class="official-message-right">
                <span class="section-mini">Chairman’s Message</span>
                <h3>සභාපතිතුමාගේ පණිවුඩය</h3>
                <p style="text-align: justify;">අම්බලන්ගොඩ නගර සභාව ලෙස අපගේ අරමුණ වන්නේ ජනතා අවශ්‍යතා කේන්ද්‍ර කරගත්, විනිවිදභාවයෙන් යුත් සහ නවීන සේවා පද්ධතියක් ගොඩනැගීමයි.</p>
                <p style="text-align: justify;">පිරිසිදු නගරයක්, වඩා හොඳ යටිතල පහසුකම්, සෞඛ්‍යාරක්ෂිත පරිසරයක් සහ ඉක්මන් මහජන සේවාවන් සැපයීම සඳහා අපි කැපවී කටයුතු කරමින් සිටිමු.</p>
                <div class="official-message-meta">
                  <strong>අසේල ප්‍රසන්න ගොඩහේවා</strong>
                  <span>සභාපති</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="official-message-card reveal">
              <div class="official-message-left">
                <img src="uploads/staff/secretery.jpg" alt="ලේකම්තුමිය">
              </div>
              <div class="official-message-right">
                <span class="section-mini">Secretary’s Message</span>
                <h3>ලේකම්තුමියගේ පණිවුඩය</h3>
                <p style="text-align: justify;">අම්බලන්ගොඩ නගර සභාවේ සියලු පරිපාලන කටයුතු කාර්යක්ෂමව, විධිමත්ව සහ ජනතා හිතකාමී ලෙස ඉටු කිරීම අපගේ වගකීමයි.</p>
                <p style="text-align: justify;">මෙම නිල වෙබ් අඩවිය හරහා තොරතුරු, සේවාවන්, නිවේදන සහ බාගත කිරීම් වඩාත් පහසුවෙන් ජනතාවට ලබාදීමට අපි උත්සාහ කරමු.</p>
                <div class="official-message-meta">
                  <strong>ඩබ්.ඩී.ආර්.ජේ. රුද්‍රිගු</strong>
                  <span>නගර සභා ලේකම්</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-space section-light">
      <div class="container-xxl">
        <div class="section-title text-center reveal">
          <span class="section-mini">Our Key Services</span>
          <h2>අපගේ සේවාවන්</h2>
          <p></p>
        </div>

        <div class="row g-4">
          <div class="col-lg-4 col-md-6">
            <div class="service-image-card reveal">
              <img src="img/hero1.jpg" alt="Cemetery">
              <div class="service-body">
                <h4>ආදාහනාගාර වෙන් කිරීම</h4>
                <p>ආදාහනාගාර සහ සුසාන භූමි වෙන්කිරීම්, නඩත්තු සහ සම්බන්ධ පරිපාලන සේවාවන්.</p>
                <a href="services.html#cemetery" class="card-link">වැඩිදුර බලන්න <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="service-image-card reveal">
              <img src="img/uc-ground.jpg" alt="Ground Booking">
              <div class="service-body">
                <h4>ක්‍රීඩා පිටිය වෙන්කර ගැනීම</h4>
                <p>ප්‍රජා සහ ක්‍රීඩා වැඩසටහන් සඳහා පිටිය වෙන්කර ගැනීමේ පහසුකම.</p>
                <a href="services.html#ground-booking" class="card-link">වැඩිදුර බලන්න <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="service-image-card reveal">
              <img src="img/gully.jpg" alt="Gully Bowser">
              <div class="service-body">
                <h4>ගලී බවුසර් සේවාව</h4>
                <p>නිවසක් හෝ ව්‍යාපාරික ස්ථානයක් සඳහා සනීපාරක්ෂක සේවාව.</p>
                <a href="services.html#gully-bowser" class="card-link">වැඩිදුර බලන්න <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-md-6">
            <div class="service-image-card reveal">
              <img src="img/water.png" alt="Water Bowser">
              <div class="service-body">
                <h4>වතුර බවුසර් සේවාව</h4>
                <p>අවශ්‍ය අවස්ථාවන්හි පානීය / සේවා ජල සැපයුම් පහසුකම.</p>
                <a href="services.html#water-bowser" class="card-link">වැඩිදුර බලන්න <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-md-6">
            <div class="service-image-card reveal">
              <img src="img/baco.jpg" alt="Backhoe">
              <div class="service-body">
                <h4>බැකෝ සේවාව</h4>
                <p>නාගරික නඩත්තු, කසළ ඉවත් කිරීම සහ භූමි කටයුතු සඳහා යන්ත්‍ර සේවාව.</p>
                <a href="services.html#backhoe" class="card-link">වැඩිදුර බලන්න <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-space">
      <div class="container-xxl">
        <div class="section-title reveal">
          <span class="section-mini">Latest News</span>
          <h2>නවතම පුවත් සහ නිවේදන</h2>
        </div>

        <div class="news-strip-wrap reveal mb-4">
          <div id="newsMiniCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3500">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row g-3">
                  <div class="col-lg-4">
                    <div class="small-news-card">
                      <img src="img/hero1.jpg" alt="">
                      <div>
                        <span>2026-03-01</span>
                        <h6>ජනතා සේවා කවුන්ටරය නවීකරණය කර ඇත</h6>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4">
                    <div class="small-news-card">
                      <img src="img/hero2.jpg" alt="">
                      <div>
                        <span>2026-02-20</span>
                        <h6>ප්‍රජා සහභාගීත්ව වැඩසටහනක් සංවිධානය කරන ලදී</h6>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4">
                    <div class="small-news-card">
                      <img src="img/hero3.jpg" alt="">
                      <div>
                        <span>2026-02-16</span>
                        <h6>හෙළ බොජුන්හල සුබ මොහොතින් විවෘත කිරීම</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <div class="row g-3">
                  <div class="col-lg-4">
                    <div class="small-news-card">
                      <img src="img/hero2.jpg" alt="">
                      <div>
                        <span>2026-02-25</span>
                        <h6>මාර්ග සහ නාගරික පහසුකම් නවීකරණය ආරම්භ වේ</h6>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4">
                    <div class="small-news-card">
                      <img src="img/hero3.jpg" alt="">
                      <div>
                        <span>2026-02-10</span>
                        <h6>පිරිසිදු නගර වැඩසටහන සඳහා ජනතා සහභාගීත්වය කැඳවයි</h6>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4">
                    <div class="small-news-card">
                      <img src="img/hero1.jpg" alt="">
                      <div>
                        <span>2026-02-02</span>
                        <h6>නව ඔන්ලයින් ගෙවීම් පද්ධතිය හඳුන්වා දෙන ලදී</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button class="carousel-control-prev premium-news-control" type="button" data-bs-target="#newsMiniCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next premium-news-control" type="button" data-bs-target="#newsMiniCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>

        <div class="row g-4">
          <div class="col-lg-4 col-md-6">
            <article class="news-card reveal">
              <div class="news-image">
                <img src="uploads/news/2026 jan/1.jpg" alt="news1">
                <span class="news-badge">Featured</span>
              </div>
              <div class="news-content">
                <div class="news-date"><i class="fa-regular fa-calendar"></i> 2026-03-01</div>
                <h4>නව වසරේ රාජකාරී කටයුතු උත්සවශීලීව ආරම්භ විය</h4>
                <p>නව වසරේ රාජකාරී කටයුතු ආශීර්වාද මධ්‍යයේ ආරම්භ කරන ලදී.</p>
                <a href="news.html" class="news-link">Read more <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </article>
          </div>

          <div class="col-lg-4 col-md-6">
            <article class="news-card reveal">
              <div class="news-image">
                <img src="img/hero2.jpg" alt="news2">
                <span class="news-badge">Update</span>
              </div>
              <div class="news-content">
                <div class="news-date"><i class="fa-regular fa-calendar"></i> 2026-02-16</div>
                <h4>සප්පායම-හෙළ බොජුන්හල සුබ මොහොතින් විවෘත කිරීම</h4>
                <p>ප්‍රදේශයේ මහජනතාව වෙනුවෙන් දේශීය ආහාර සේවාවක් ජනතා අයිතියට එක් කෙරිණි.</p>
                <a href="news.html" class="news-link">Read more <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </article>
          </div>

          <div class="col-lg-4 col-md-6">
            <article class="news-card reveal">
              <div class="news-image">
                <img src="img/hero3.jpg" alt="news3">
                <span class="news-badge">Notice</span>
              </div>
              <div class="news-content">
                <div class="news-date"><i class="fa-regular fa-calendar"></i> 2026-02-02</div>
                <h4>නව ඔන්ලයින් ගෙවීම් පද්ධතිය හඳුන්වා දෙන ලදී</h4>
                <p>ගෙවීම් වඩා පහසු කිරීම සඳහා නව ඩිජිටල් පද්ධතියක් ආරම්භ කෙරිණි.</p>
                <a href="news.html" class="news-link">Read more <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="feature-strip">
      <div class="container-xxl">
        <div class="row g-4">
          <div class="col-lg-4">
            <div class="feature-box reveal">
              <i class="fa-solid fa-bolt"></i>
              <h4>Fast Access</h4>
              <p>අත්‍යාවශ්‍ය සේවාවන් සහ තොරතුරු ඉක්මනින් ලබාගන්න.</p>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="feature-box reveal">
              <i class="fa-solid fa-shield-heart"></i>
              <h4>Trusted Service</h4>
              <p>විශ්වාසදායක, නීත්‍යානුකූල සහ ජනතාවට සමීප පරිපාලන සේවාව.</p>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="feature-box reveal">
              <i class="fa-solid fa-laptop-file"></i>
              <h4>Digital Ready</h4>
              <p>නවීන ඩිජිටල් විසඳුම් හරහා සේවාවන් වඩාත් පහසු කරයි.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  document.dispatchEvent(new Event("homeSectionsReady"));
});