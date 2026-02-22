// ============================================================
//  TWAS — Client-side interactivity
//  • Mobile nav toggle
//  • EN ↔ ትግርኛ language toggle (persisted in localStorage)
//  • Photo lightbox
//  • Scroll-fade animations
// ============================================================

// ── Language toggle ───────────────────────────────────────────
type Lang = 'en' | 'ti';

const html    = document.documentElement;
const btnEn   = document.getElementById('lang-en') as HTMLButtonElement | null;
const btnTi   = document.getElementById('lang-ti') as HTMLButtonElement | null;

function applyLang(lang: Lang): void {
  const isTi = lang === 'ti';
  html.classList.toggle('lang-ti', isTi);
  html.setAttribute('lang', isTi ? 'ti' : 'en');
  btnEn?.setAttribute('aria-pressed', String(!isTi));
  btnTi?.setAttribute('aria-pressed', String(isTi));
  btnEn?.classList.toggle('active',  !isTi);
  btnTi?.classList.toggle('active',   isTi);
  localStorage.setItem('twas-lang', lang);
}

// Restore persisted preference on page load
const savedLang = (localStorage.getItem('twas-lang') ?? 'en') as Lang;
applyLang(savedLang);

btnEn?.addEventListener('click', () => applyLang('en'));
btnTi?.addEventListener('click', () => applyLang('ti'));

// ── Mobile nav toggle ─────────────────────────────────────────
const navToggle = document.getElementById('nav-toggle') as HTMLButtonElement | null;
const navLinks  = document.getElementById('nav-links')  as HTMLUListElement  | null;

navToggle?.addEventListener('click', () => {
  const isOpen = navLinks?.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen ?? false));
});

// Close nav when a link is tapped on mobile
navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── Photo lightbox ────────────────────────────────────────────
interface LbImage {
  src:   string;
  event: string;
  date:  string;
}

const lightbox = document.getElementById('lightbox')  as HTMLElement     | null;
const lbImg    = document.getElementById('lb-img')    as HTMLImageElement | null;
const lbEvent  = document.getElementById('lb-event')  as HTMLElement     | null;
const lbDate   = document.getElementById('lb-date')   as HTMLElement     | null;
const lbCount  = document.getElementById('lb-count')  as HTMLElement     | null;
const lbClose  = document.getElementById('lb-close')  as HTMLButtonElement | null;
const lbPrev   = document.getElementById('lb-prev')   as HTMLButtonElement | null;
const lbNext   = document.getElementById('lb-next')   as HTMLButtonElement | null;

const images: LbImage[] = Array.from(
  document.querySelectorAll<HTMLElement>('.image-card[data-src]')
).map((card) => ({
  src:   card.dataset.src   ?? '',
  event: card.dataset.event ?? '',
  date:  card.dataset.date  ?? '',
}));

let currentIndex = 0;

function renderLb(): void {
  const img = images[currentIndex];
  if (!img) return;
  if (lbImg)   { lbImg.src = img.src; lbImg.alt = img.event; }
  if (lbEvent) lbEvent.textContent = img.event;
  if (lbDate)  lbDate.textContent  = img.date;
  if (lbCount) lbCount.textContent = `${currentIndex + 1} / ${images.length}`;
}

function openLb(idx: number): void {
  currentIndex = idx;
  renderLb();
  lightbox?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLb(): void {
  lightbox?.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll<HTMLElement>('.image-card[data-src]').forEach((card, i) => {
  card.addEventListener('click', () => openLb(i));
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLb(i); }
  });
});

lbClose?.addEventListener('click', closeLb);
lightbox?.addEventListener('click', (e) => { if (e.target === lightbox) closeLb(); });

lbPrev?.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  renderLb();
});
lbNext?.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  renderLb();
});

document.addEventListener('keydown', (e) => {
  if (!lightbox?.classList.contains('open')) return;
  if (e.key === 'Escape')      closeLb();
  if (e.key === 'ArrowLeft')  { currentIndex = (currentIndex - 1 + images.length) % images.length; renderLb(); }
  if (e.key === 'ArrowRight') { currentIndex = (currentIndex + 1) % images.length; renderLb(); }
});

// ── Scroll fade-in ────────────────────────────────────────────
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.fade').forEach((el) => observer.observe(el));
