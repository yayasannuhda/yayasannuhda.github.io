const pageFolder = window.location.pathname.includes("/pages/");
const pagePath = (file) => `${pageFolder ? "" : "pages/"}${file}`;
const homePath = pageFolder ? "../index.html" : "index.html";
const logoPath = pageFolder ? "../assets/img/logo.jpeg" : "assets/img/logo.jpeg";

const commonNav = `
  <nav class="navbar navbar-expand-lg" aria-label="Navigasi utama">
    <div class="container">
      <a class="navbar-brand" href="${homePath}" aria-label="NUHDA, kembali ke Beranda">
        <img class="brand-logo" src="${logoPath}" alt="" width="46" height="46">
        <span><span class="brand-name">NUHDA</span><span class="brand-sub">Nurul Hasanah Wal Huda</span></span>
      </a>
      <button class="navbar-toggler" type="button" aria-controls="mainNavigation" aria-expanded="false" aria-label="Buka navigasi">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNavigation">
        <ul class="navbar-nav ms-auto align-items-lg-center">
          <li class="nav-item"><a class="nav-link" data-nav="beranda" href="${homePath}">Beranda</a></li>
          <li class="nav-item"><a class="nav-link" data-nav="profil" href="${pagePath("profil.html")}">Profil</a></li>
          <li class="nav-item"><a class="nav-link" data-nav="pesantren" href="${pagePath("pesantren.html")}">Pesantren</a></li>
          <li class="nav-item"><a class="nav-link" data-nav="pendidikan" href="${pagePath("pendidikan.html")}">Pendidikan</a></li>
          <li class="nav-item"><a class="nav-link" data-nav="kajian" href="${pagePath("kajian.html")}">Kajian</a></li>
          <li class="nav-item"><a class="nav-link" data-nav="galeri" href="${pagePath("galeri.html")}">Galeri</a></li>
          <li class="nav-item"><a class="nav-link" data-nav="kontak" href="${pagePath("kontak.html")}">Kontak</a></li>
          <li class="nav-item"><a class="btn btn-primary-green nav-cta ms-lg-2" data-nav="donasi" href="${pagePath("donasi.html")}">Dukung NUHDA <i class="bi bi-arrow-up-right ms-1" aria-hidden="true"></i></a></li>
        </ul>
      </div>
    </div>
  </nav>`;

const commonFooter = `
  <footer class="site-footer">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-5">
          <a class="navbar-brand mb-3" href="${homePath}"><img class="brand-logo" src="${logoPath}" alt="" width="46" height="46"><span><span class="brand-name">NUHDA</span><span class="brand-sub">Nurul Hasanah Wal Huda</span></span></a>
          <p class="text-muted mt-3 pe-lg-5">Menempa generasi berilmu, berakhlak, dan siap mengabdi di tengah masyarakat.</p>
          <div class="d-flex gap-2 mt-4">
            <a class="social-link" href="https://linktr.ee/Nuhdaku" target="_blank" rel="noopener noreferrer" aria-label="Instagram, TikTok, Spotify, YouTube dan kanal resmi NUHDAKU"><i class="bi bi-link-45deg"></i></a>
            <a class="social-link" href="https://wa.me/6282115499505" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp NUHDA"><i class="bi bi-whatsapp"></i></a>
            <a class="social-link" href="mailto:yayasannuhda@gmail.com" aria-label="Email NUHDA"><i class="bi bi-envelope"></i></a>
          </div>
        </div>
        <div class="col-6 col-lg-2">
          <h2 class="footer-title">Jelajahi</h2>
          <ul class="footer-links">
            <li><a href="${pagePath("profil.html")}">Profil yayasan</a></li>
            <li><a href="${pagePath("pesantren.html")}">Pondok pesantren</a></li>
            <li><a href="${pagePath("pendidikan.html")}">Lembaga pendidikan</a></li>
            <li><a href="${pagePath("kajian.html")}">Program kajian</a></li>
            <li><a href="${pagePath("galeri.html")}">Galeri kegiatan</a></li>
          </ul>
        </div>
        <div class="col-6 col-lg-2">
          <h2 class="footer-title">Informasi</h2>
          <ul class="footer-links">
            <li><a href="${pagePath("santri-mukim.html")}">Santri mukim</a></li>
            <li><a href="${pagePath("santri-non-mukim.html")}">Santri non-mukim</a></li>
            <li><a href="${pagePath("smp-it.html")}">PPDB SMP IT</a></li>
            <li><a href="${pagePath("donasi.html")}">Donasi & wakaf</a></li>
            <li><a href="${pagePath("kontak.html")}">Kontak kami</a></li>
          </ul>
        </div>
        <div class="col-lg-3">
          <h2 class="footer-title">Kunjungi kami</h2>
          <p class="footer-links mb-0">Jl. Gunung Sawal, Dusun Cibulakan, RT 04 / RW 02, Desa Sukamaju, Cihaurbeuti, Kabupaten Ciamis, Jawa Barat.</p>
          <a class="d-inline-block mt-3 text-green" href="mailto:yayasannuhda@gmail.com">yayasannuhda@gmail.com</a>
        </div>
      </div>
      <div class="footer-bottom d-flex flex-column flex-md-row justify-content-between gap-2">
        <span>© <span data-year></span> Yayasan Nurul Hasanah Wal Huda (NUHDA) | Created with <i class="bi bi-heart text-danger"></i> by <a href="https://anggarun.github.io" target="_blank" rel="noopener noreferrer">Bisa Coding</a></span>
        <span>Belajar dengan sanad, bertumbuh dalam khidmah.</span>
      </div>
    </div>
  </footer>
  <a class="whatsapp-float" href="https://wa.me/6282115499505" target="_blank" rel="noopener noreferrer" aria-label="Hubungi NUHDA melalui WhatsApp">
    <i class="bi bi-whatsapp" aria-hidden="true"></i><span>Hubungi NUHDA</span>
  </a>`;

document.querySelectorAll("[data-site-header]").forEach((element) => { element.innerHTML = commonNav; });
document.querySelectorAll("[data-site-footer]").forEach((element) => { element.innerHTML = commonFooter; });
document.querySelectorAll("[data-year]").forEach((element) => { element.textContent = new Date().getFullYear(); });

const navToggle = document.querySelector(".navbar-toggler");
const navMenu = document.querySelector("#mainNavigation");
if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isExpanded = navMenu.classList.toggle("show");
    navToggle.setAttribute("aria-expanded", String(isExpanded));
    navToggle.setAttribute("aria-label", isExpanded ? "Tutup navigasi" : "Buka navigasi");
  });
}

const currentPage = document.body.dataset.page;
if (currentPage) {
  document.querySelectorAll(`[data-nav="${currentPage}"]`).forEach((link) => {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  });
}

const thumbsElement = document.querySelector(".gallery-thumbs");
const mainElement = document.querySelector(".gallery-main");
let galleryMainSlides = [];
let galleryThumbSlides = [];
if (thumbsElement && mainElement && window.Swiper) {
  const mainWrapper = mainElement.querySelector(".swiper-wrapper");
  const thumbsWrapper = thumbsElement.querySelector(".swiper-wrapper");
  galleryMainSlides = [...mainWrapper.children].map((slide) => slide.cloneNode(true));
  galleryThumbSlides = [...thumbsWrapper.children].map((slide) => slide.cloneNode(true));

  const buildGallery = (filter) => {
    if (window.gallerySwiper) window.gallerySwiper.destroy(true, true);
    if (window.galleryThumbs) window.galleryThumbs.destroy(true, true);
    const matches = (slide) => filter === "semua" || slide.dataset.category === filter;
    mainWrapper.replaceChildren(...galleryMainSlides.filter(matches).map((slide) => slide.cloneNode(true)));
    thumbsWrapper.replaceChildren(...galleryThumbSlides.filter(matches).map((slide) => slide.cloneNode(true)));
    window.galleryThumbs = new Swiper(thumbsElement, {
      spaceBetween: 10,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
      navigation: {
        prevEl: document.querySelector(".gallery-thumb-prev"),
        nextEl: document.querySelector(".gallery-thumb-next")
      },
      breakpoints: { 576: { slidesPerView: 5 }, 992: { slidesPerView: 7 } }
    });
    window.gallerySwiper = new Swiper(mainElement, {
      spaceBetween: 10,
      keyboard: { enabled: true },
      thumbs: { swiper: window.galleryThumbs },
      a11y: { enabled: true }
    });
  };

  buildGallery("semua");
  window.buildGallery = buildGallery;
}

const galleryFilters = document.querySelectorAll("[data-gallery-filter]");
galleryFilters.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.galleryFilter;
    galleryFilters.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
    if (window.buildGallery) window.buildGallery(filter);
  });
});
