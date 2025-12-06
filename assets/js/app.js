// assets/js/app.js

// ===== AOS init =====
AOS.init({
  duration: 600,
  easing: 'ease-out',
  once: true
});

// ===== Utilities =====
const WA_NUMBER = '6282241900467';

const products = [
  { name: 'Madu Pahit', category: 'Madu Premium', price: 120000, img: 'https://hni.net/public/front/img/produk/MADU%20PAHIT-1_04-01-19_.png', bestseller: true },
  { name: 'Centella Teh Sinergi', category: 'Minuman Sehat', price: 70000, img: 'https://hni.net/public/front/img/produk/CENTELLA-1_04-01-19_.png', bestseller: true },
  { name: 'Deep Olive', category: 'Minyak Herba', price: 145000, img: 'https://hni.net/public/front/img/produk/deep-olive-0625_16-06-25_.png' },
  { name: 'Etta Goat Milk', category: 'Minuman Sehat', price: 75000, img: 'https://hni.net/public/front/img/produk/egm-topbrand_14-11-24_.png' },
  { name: 'Madu Multiflora', category: 'Madu Premium', price: 100000, img: 'https://hni.net/public/front/img/produk/MADU%20MULTI%202020_18-05-20_.png' },
  { name: 'Madu Habbat', category: 'Madu Premium', price: 130000, img: 'httpsni.net/public/front/img/produk/MADU%20HABBATS%202020_18-05-20_.png'.replace('httpsni','https://hni') }, // fix possible typo
  { name: 'Hni Coffee', category: 'Minuman Sehat', price: 125000, img: 'https://hni.net/public/front/img/produk/hcmockup2021_27-12-21_.png' },
  { name: 'Hania Susu Kambing Full Cream', category: 'Minuman Sehat', price: 75000, img: 'https://hni.net/public/front/img/produk/hania-fc-full_01-03-23_.png' },
  { name: 'Sevel Stamina', category: 'Minuman Sehat', price: 115000, img: 'https://hni.net/public/front/img/produk/sevel-stamina_11-09-25_.png', bestseller: true },
  { name: 'Hania Realco Cappuccino Less Sugar', category: 'Minuman Sehat', price: 50000, img: 'https://hni.net/public/front/img/produk/cappucino-lessugar1_14-11-24_.png' },
  { name: 'Madu HNI Health', category: 'Madu Premium', price: 80000, img: 'https://hni.net/public/front/img/produk/hni-health-3_18-11-24_.png', bestseller: true },
  { name: 'Hania Gluta Juicy Drink', category: 'Minuman Sehat', price: 185000, img: 'https://hni.net/public/front/img/produk/gluta2_27-10-22_.png' },
  { name: 'Mahkota Dara', category: 'Aneka Herbal', price: 200000, img: 'https://hni.net/public/front/img/produk/mahkota%20dara-l_16-06-25_.png' },
  { name: 'Habbatusauda Kapsul', category: 'Aneka Herbal', price: 60000, img: 'https://hni.net/public/front/img/produk/2023-habbats_21-02-24_.png' },
  { name: 'Minyak Herba Sinergi Hot', category: 'Minyak Herba', price: 55000, img: 'https://hni.net/public/front/img/produk/mhs-hot_16-12-24_.png' },
  { name: 'Zareen Bright Glow Serum', category: 'Perawatan Kulit', price: 70000, img: 'https://hni.net/public/front/img/produk/zareen-serum_22-12-22_.png' },
  { name: 'Sabun Kolagen', category: 'Perawatan Kulit', price: 25000, img: 'https://hni.net/public/front/img/produk/SABUN%20KOLAGEN-4_07-01-19_.png', bestseller: true },
  { name: 'Hibis Pantyliner', category: 'Perawatan Pribadi', price: 225000, img: 'https://hni.net/public/front/img/produk/HIBIS%20PANTY-5_26-03-19_.png' },
];

// ===== Helpers =====
const formatRupiah = (n) => 'Rp ' + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

// ===== Preloader =====
document.addEventListener('DOMContentLoaded', () => {
  const pre = document.getElementById('preloader');
  if (!pre) return;

  // Hilangkan saat semua resource selesai
  window.addEventListener('load', () => {
    pre.classList.add('hide');
    setTimeout(() => {
      pre.style.display = 'none';
    }, 600); // tunggu animasi fade-out
  });

  // Fallback: auto-hide setelah 3 detik
  setTimeout(() => {
    if (pre.style.display !== 'none') {
      pre.classList.add('hide');
      setTimeout(() => {
        pre.style.display = 'none';
      }, 600);
    }
  }, 3000);
});


// ===== Year in footer =====
const yearEl = $('#year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== Dark mode toggle =====
const toggleBtn = $('#darkModeToggle');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    const html = document.documentElement;
    const cur = html.getAttribute('data-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    toggleBtn.textContent = next === 'dark' ? 'Mode Terang' : 'Mode Gelap';
    localStorage.setItem('hp-theme', next);
  });
  const storedTheme = localStorage.getItem('hp-theme');
  if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme);
    toggleBtn.textContent = storedTheme === 'dark' ? 'Mode Terang' : 'Mode Gelap';
  }
}

// ===== Scroll to top =====
const scrollBtn = $('#scrollTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) scrollBtn.classList.add('show');
  else scrollBtn.classList.remove('show');
});
scrollBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ===== Product rendering =====
const productGrid = $('#productGrid');
const bestsellerGrid = $('#bestsellerGrid');
const searchInput = $('#searchInput');
const filterBtns = $$('.filter-btn');

function createProductCard(p, index) {
  const col = document.createElement('div');
  col.className = 'col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-2';
  col.innerHTML = `
    <div class="product-card h-100">
      <img src="${p.img}" alt="${p.name}" class="w-100 product-img">
      <div class="p-3">
        <div class="d-flex justify-content-between align-items-start mb-2">
          <h6 class="fw-bold mb-0">${p.name}</h6>
          ${p.bestseller ? '<span class="badge bg-warning text-dark">Terlaris</span>' : ''}
        </div>
        <p class="small text-muted mb-1">${p.category}</p>
        <h6 class="text-success fw-bold">${formatRupiah(p.price)}</h6>
        <div class="d-grid gap-2 mt-3">
          <button class="btn btn-success btn-sm" data-action="add" data-index="${index}">Tambah ke Keranjang</button>
          <button class="btn btn-outline-success btn-sm" data-action="detail" data-index="${index}" data-bs-toggle="modal" data-bs-target="#productModal">Detail Produk</button>
        </div>
      </div>
    </div>
  `;
  return col;
}

function renderProducts(list) {
  if (!productGrid) return;
  productGrid.innerHTML = '';
  list.forEach((p, i) => productGrid.appendChild(createProductCard(p, i)));
}

function renderBestsellers() {
  if (!bestsellerGrid) return;
  bestsellerGrid.innerHTML = '';
  products.filter(p => p.bestseller).forEach((p, i) => {
    bestsellerGrid.appendChild(createProductCard(p, products.indexOf(p)));
  });
}

renderProducts(products);
renderBestsellers();

// ===== Filtering & search =====
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.filter;
    const q = searchInput.value.trim().toLowerCase();
    const list = products.filter(p => (cat === 'all' || p.category === cat) &&
      (p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)));
    renderProducts(list);
  });
});

searchInput?.addEventListener('input', () => {
  const activeBtn = filterBtns.find(b => b.classList.contains('active')) || { dataset: { filter: 'all' } };
  const cat = activeBtn.dataset.filter;
  const q = searchInput.value.trim().toLowerCase();
  const list = products.filter(p => (cat === 'all' || p.category === cat) &&
    (p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)));
  renderProducts(list);
});

// ===== Cart logic (localStorage) =====
const CART_KEY = 'hp-cart';
let cart = [];

function loadCart() {
  try {
    cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    cart = [];
  }
  updateCartUI();
}
function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}
function addToCart(index, qty = 1) {
  const p = products[index];
  if (!p) return;
  const existing = cart.find(c => c.name === p.name);
  if (existing) existing.qty += qty;
  else cart.push({ name: p.name, price: p.price, img: p.img, qty, category: p.category });
  saveCart();
  updateCartUI();
}
function removeFromCart(name) {
  cart = cart.filter(c => c.name !== name);
  saveCart();
  updateCartUI();
}
function changeQty(name, delta) {
  const item = cart.find(c => c.name === name);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(name);
  else { saveCart(); updateCartUI(); }
}
function resetCart() {
  cart = [];
  saveCart();
  updateCartUI();
}
function cartTotal() {
  return cart.reduce((sum, c) => sum + c.price * c.qty, 0);
}
function updateCartUI() {
  const container = $('#cartItems');
  const countEl = $('#cartCount');
  const totalEl = $('#cartTotal');
  if (countEl) countEl.textContent = cart.reduce((a, c) => a + c.qty, 0);
  if (totalEl) totalEl.textContent = formatRupiah(cartTotal());
  if (!container) return;
  container.innerHTML = '';
  if (cart.length === 0) {
    container.innerHTML = '<div class="text-muted small">Keranjang kosong.</div>';
    return;
  }
  cart.forEach(item => {
    const el = document.createElement('div');
    el.className = 'list-group-item';
    el.innerHTML = `
      <div class="d-flex align-items-center gap-2">
        <img src="${item.img}" alt="${item.name}" width="48" height="48" class="rounded">
        <div class="flex-grow-1">
          <div class="d-flex justify-content-between">
            <strong>${item.name}</strong>
            <span class="text-success">${formatRupiah(item.price * item.qty)}</span>
          </div>
          <div class="small text-muted">${item.category}</div>
          <div class="d-flex align-items-center gap-2 mt-2">
            <button class="btn btn-sm btn-outline-success" data-cart="dec" data-name="${item.name}">-</button>
            <span>${item.qty}</span>
            <button class="btn btn-sm btn-outline-success" data-cart="inc" data-name="${item.name}">+</button>
            <button class="btn btn-sm btn-outline-danger ms-auto" data-cart="del" data-name="${item.name}">Hapus</button>
          </div>
        </div>
      </div>
    `;
    container.appendChild(el);
  });
}

// ===== WhatsApp checkout =====
function buildWaMessage() {
  const lines = [
    'Halo Herbaprima, saya ingin memesan:'
  ];
  cart.forEach(c => {
    lines.push(`- ${c.name} Qty: ${c.qty}`);
  });
  lines.push(`Total: ${formatRupiah(cartTotal())}`);
  lines.push('');
  lines.push('Nama:');
  lines.push('Alamat:');
  lines.push('No HP:');
  return encodeURIComponent(lines.join('\n'));
}

function openWaCheckout() {
  const msg = buildWaMessage();
  const url = `https://wa.me/${WA_NUMBER}?text=${msg}`;
  window.open(url, '_blank');
}

// ===== Event delegation =====
document.addEventListener('click', (e) => {
  const t = e.target;

  // product actions
  if (t.matches('[data-action="add"]')) {
    const idx = parseInt(t.dataset.index, 10);
    addToCart(idx, 1);
  }
  if (t.matches('[data-action="detail"]')) {
    const idx = parseInt(t.dataset.index, 10);
    openProductModal(idx);
  }

  // cart actions
  if (t.matches('[data-cart="inc"]')) changeQty(t.dataset.name, +1);
  if (t.matches('[data-cart="dec"]')) changeQty(t.dataset.name, -1);
  if (t.matches('[data-cart="del"]')) removeFromCart(t.dataset.name);
});

// buttons
$('#resetCartBtn')?.addEventListener('click', resetCart);
$('#checkoutWaBtn')?.addEventListener('click', openWaCheckout);

// ===== Product modal =====
const modalEl = $('#productModal');
const modalImage = $('#modalImage');
const modalName = $('#modalName');
const modalCategory = $('#modalCategory');
const modalPrice = $('#modalPrice');
const modalAddBtn = $('#modalAddToCart');
const modalBuyWa = $('#modalBuyWa');

let currentModalIndex = null;

function openProductModal(index) {
  const p = products[index];
  if (!p) return;
  currentModalIndex = index;
  modalImage.src = p.img;
  modalImage.alt = p.name;
  modalName.textContent = p.name;
  modalCategory.textContent = p.category;
  modalPrice.textContent = formatRupiah(p.price);
  modalAddBtn.dataset.index = index;
  const text = encodeURIComponent(`Halo Herbaprima, saya ingin memesan:\n- ${p.name} Qty: 1\nTotal: ${formatRupiah(p.price)}\n\nNama:\nAlamat:\nNo HP:`);
  modalBuyWa.href = `https://wa.me/${WA_NUMBER}?text=${text}`;
}

modalAddBtn?.addEventListener('click', (e) => {
  const idx = parseInt(e.target.dataset.index, 10);
  addToCart(idx, 1);
  // optional: close modal
  const bsModal = bootstrap.Modal.getInstance(modalEl);
  bsModal?.hide();
});

// ===== Contact form (demo) =====
$('#contactForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Terima kasih! Pesan Anda telah dikirim.');
  e.target.reset();
});

// Init cart
loadCart();
