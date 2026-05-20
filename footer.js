document.addEventListener("DOMContentLoaded", function () {
  const footer = document.getElementById("site-footer");
  if (!footer) return;

  footer.innerHTML = `
    <footer class="footer">
      <div class="container-xxl">
        <div class="row g-4">
          <div class="col-lg-4 col-md-6">
            <div class="footer-box reveal">
              <h3>අප සමඟ සම්බන්ධ වන්න</h3>
              <p><i class="fa-solid fa-location-dot"></i> නගර සභාව, අම්බලන්ගොඩ</p>
              <p><i class="fa-solid fa-phone"></i> +94 91 225 8275</p>
              <p><i class="fa-solid fa-fax"></i> +94 91 225 8285</p>
              <p><i class="fa-solid fa-envelope"></i> ambalangodauc@gmail.com</p>

              <div class="footer-social">
                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i class="fa-brands fa-youtube"></i></a>
                <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                <a href="#"><i class="fa-solid fa-envelope"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="footer-box reveal">
              <h3>මාර්ග සිතියම</h3>
              <div class="map-wrap">
                <iframe
                  src="https://www.google.com/maps?q=Ambalangoda%20Urban%20Council&output=embed"
                  width="100%" height="250" style="border:0;" allowfullscreen loading="lazy">
                </iframe>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="footer-box reveal">
              <h3>වැදගත් සබැඳි</h3>
              <ul class="footer-links">
                <li><a href="https://www.cs.sp.gov.lk/" target="_blank" rel="noreferrer">ප්‍රධාන ලේකම් කාර්යාලය (ද. ප.)</a></li>
                <li><a href="https://www.cm.sp.gov.lk/index.php?option=com_content&view=featured&Itemid=464&lang=si" target="_blank" rel="noreferrer">ප්‍රධාන අමාත්‍යාංශය (ද. ප.)</a></li>
                <li><a href="https://psc.sp.gov.lk/" target="_blank" rel="noreferrer">රාජ්‍ය සේවා කොමිෂන් සභාව (ද. ප.)</a></li>
                <li><a href="http://www.clg.sp.gov.lk/index.php?lang=en" target="_blank" rel="noreferrer">පළාත් පාලන දෙපාර්තමේන්තුව (ද. ප.)</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        © 2026 අම්බලන්ගොඩ නගර සභාව | සියලු හිමිකම් ඇවිරිණි
      </div>
    </footer>
  `;

  document.dispatchEvent(new Event("siteFooterReady"));
});