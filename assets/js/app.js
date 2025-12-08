// assets/js/app.js

// ===== AOS init (animasi saat scroll) =====
if (typeof AOS !== 'undefined') {
  AOS.init({ duration: 600, easing: 'ease-out', once: true });
}

// ===== Preloader final: fade-out saat window.load + fallback 3s =====
document.addEventListener('DOMContentLoaded', () => {
  const pre = document.getElementById('preloader');
  if (!pre) return;

  window.addEventListener('load', () => {
    pre.classList.add('hide');
    setTimeout(() => { pre.style.display = 'none'; }, 600);
  });

  setTimeout(() => {
    if (pre.style.display !== 'none') {
      pre.classList.add('hide');
      setTimeout(() => { pre.style.display = 'none'; }, 600);
    }
  }, 3000);
});

// ===== Utilities umum =====
const WA_NUMBER = '6282241900467';
const formatRupiah = (n) => 'Rp ' + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

// Tahun otomatis di footer
const yearEl = $('#year'); if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== Dark mode toggle (persist localStorage) =====
const toggleBtn = $('#darkModeToggle');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    const html = document.documentElement;
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
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

// ===== Scroll-to-top (smooth) =====
const scrollBtn = $('#scrollTopBtn');
if (scrollBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) scrollBtn.classList.add('show');
    else scrollBtn.classList.remove('show');
  });
  scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ===== Data produk default =====
const defaultProducts = [
  { slug: 'madu-pahit', name: 'Madu Pahit', category: 'Madu Premium', price: 120000, img: 'https://hni.net/public/front/img/produk/MADU%20PAHIT-1_04-01-19_.png', bestseller: true },
  { slug: 'centella-teh-sinergi', name: 'Centella Teh Sinergi', category: 'Minuman Sehat', price: 70000, img: 'https://hni.net/public/front/img/produk/CENTELLA-1_04-01-19_.png', bestseller: true },
  { slug: 'deep-olive', name: 'Deep Olive', category: 'Minyak Herba', price: 145000, img: 'https://hni.net/public/front/img/produk/deep-olive-0625_16-06-25_.png' },
  { slug: 'etta-goat-milk', name: 'Etta Goat Milk', category: 'Minuman Sehat', price: 75000, img: 'https://hni.net/public/front/img/produk/egm-topbrand_14-11-24_.png' },
  { slug: 'madu-multiflora', name: 'Madu Multiflora', category: 'Madu Premium', price: 100000, img: 'https://hni.net/public/front/img/produk/MADU%20MULTI%202020_18-05-20_.png' },
  { slug: 'madu-habbat', name: 'Madu Habbat', category: 'Madu Premium', price: 130000, img: 'https://hni.net/public/front/img/produk/MADU%20HABBATS%202020_18-05-20_.png' },
  { slug: 'hni-coffee', name: 'Hni Coffee', category: 'Minuman Sehat', price: 125000, img: 'https://hni.net/public/front/img/produk/hcmockup2021_27-12-21_.png' },
  { slug: 'hania-susu-kambing-full-cream', name: 'Hania Susu Kambing Full Cream', category: 'Minuman Sehat', price: 75000, img: 'https://hni.net/public/front/img/produk/hania-fc-full_01-03-23_.png' },
  { slug: 'sevel-stamina', name: 'Sevel Stamina', category: 'Minuman Sehat', price: 115000, img: 'https://hni.net/public/front/img/produk/sevel-stamina_11-09-25_.png', bestseller: true },
  { slug: 'hania-realco-cappuccino-less-sugar', name: 'Hania Realco Cappuccino Less Sugar', category: 'Minuman Sehat', price: 50000, img: 'https://hni.net/public/front/img/produk/cappucino-lessugar1_14-11-24_.png' },
  { slug: 'madu-hni-health', name: 'Madu HNI Health', category: 'Madu Premium', price: 80000, img: 'https://hni.net/public/front/img/produk/hni-health-3_18-11-24_.png', bestseller: true },
  { slug: 'hania-gluta-juicy-drink', name: 'Hania Gluta Juicy Drink', category: 'Minuman Sehat', price: 185000, img: 'https://hni.net/public/front/img/produk/gluta2_27-10-22_.png' },
  { slug: 'mahkota-dara', name: 'Mahkota Dara', category: 'Aneka Herbal', price: 200000, img: 'https://hni.net/public/front/img/produk/mahkota%20dara-l_16-06-25_.png' },
  { slug: 'habbatusauda-kapsul', name: 'Habbatusauda Kapsul', category: 'Aneka Herbal', price: 60000, img: 'https://hni.net/public/front/img/produk/2023-habbats_21-02-24_.png' },
  { slug: 'minyak-herba-sinergi-hot', name: 'Minyak Herba Sinergi Hot', category: 'Minyak Herba', price: 55000, img: 'https://hni.net/public/front/img/produk/mhs-hot_16-12-24_.png' },
  { slug: 'zareen-bright-glow-serum', name: 'Zareen Bright Glow Serum', category: 'Perawatan Kulit', price: 70000, img: 'https://hni.net/public/front/img/produk/zareen-serum_22-12-22_.png' },
  { slug: 'sabun-kolagen', name: 'Sabun Kolagen', category: 'Perawatan Kulit', price: 25000, img: 'https://hni.net/public/front/img/produk/SABUN%20KOLAGEN-4_07-01-19_.png', bestseller: true },
  { slug: 'hibis-pantyliner', name: 'Hibis Pantyliner', category: 'Perawatan Pribadi', price: 225000, img: 'https://hni.net/public/front/img/produk/HIBIS%20PANTY-5_26-03-19_.png' },
];

// ===== Admin data (localStorage) =====
const ADMIN_KEY = 'hp-products';
function getAdminProducts() {
  try { return JSON.parse(localStorage.getItem(ADMIN_KEY)) || []; }
  catch { return []; }
}
function setAdminProducts(arr) {
  localStorage.setItem(ADMIN_KEY, JSON.stringify(arr));
}

// Gabungan produk (default + admin)
function getAllProducts() {
  return [...defaultProducts, ...getAdminProducts()];
}

// ===== Render product cards grid =====
const productGrid = $('#productGrid');
const bestsellerGrid = $('#bestsellerGrid');
const searchInput = $('#searchInput');
const filterBtns = $$('.filter-btn');

function createProductCard(p) {
  const col = document.createElement('div');
  col.className = 'col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-2';
  col.innerHTML = `
    <div class="product-card h-100">
      <a href="/produk/detail/index.html?slug=${p.slug}" class="text-decoration-none text-reset">
        <img src="${p.img}" alt="${p.name}" class="w-100 product-img">
      </a>
      <div class="p-3">
        <div class="d-flex justify-content-between align-items-start mb-2">
          <h6 class="fw-bold mb-0">${p.name}</h6>
          ${p.bestseller ? '<span class="badge bg-warning text-dark">Terlaris</span>' : ''}
        </div>
        <p class="small text-muted mb-1">${p.category}</p>
        <h6 class="text-success fw-bold">${formatRupiah(p.price)}</h6>
        <div class="d-grid gap-2 mt-3">
          <button class="btn btn-success btn-sm" data-action="add" data-slug="${p.slug}">Tambah ke Keranjang</button>
          <a class="btn btn-outline-success btn-sm" href="/produk/detail/index.html?slug=${p.slug}">Detail Produk</a>
        </div>
      </div>
    </div>
  `;
  return col;
}

function renderProducts(list) {
  if (!productGrid) return;
  productGrid.innerHTML = '';
  list.forEach((p) => productGrid.appendChild(createProductCard(p)));
}

function renderBestsellers() {
  if (!bestsellerGrid) return;
  bestsellerGrid.innerHTML = '';
  getAllProducts().filter(p => p.bestseller).forEach((p) => {
    bestsellerGrid.appendChild(createProductCard(p));
  });
}

// Render awal di beranda
if (productGrid) {
  renderProducts(getAllProducts());
}
if (bestsellerGrid) {
  renderBestsellers();
}

// ===== Filtering & search di beranda =====
if (filterBtns.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      const q = (searchInput?.value.trim().toLowerCase()) || '';
      const list = getAllProducts().filter(p =>
        (cat === 'all' || p.category === cat) &&
        (p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
      );
      renderProducts(list);
    });
  });
}
searchInput?.addEventListener('input', () => {
  const activeBtn = filterBtns.find(b => b.classList.contains('active')) || { dataset: { filter: 'all' } };
  const cat = activeBtn.dataset.filter;
  const q = searchInput.value.trim().toLowerCase();
  const list = getAllProducts().filter(p =>
    (cat === 'all' || p.category === cat) &&
    (p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
  );
  renderProducts(list);
});

// ===== Keranjang belanja (localStorage) =====
const CART_KEY = 'hp-cart';
let cart = [];

function loadCart() {
  try { cart = JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch { cart = []; }
  updateCartUI();
}
function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}
function addToCartBySlug(slug, qty = 1) {
  const p = getAllProducts().find(x => x.slug === slug);
  if (!p) return;
  const existing = cart.find(c => c.slug === slug);
  if (existing) existing.qty += qty;
  else cart.push({ slug, name: p.name, price: p.price, img: p.img, qty, category: p.category });
  saveCart();
  updateCartUI();
}
function addToCartByName(name, qty = 1) {
  const p = getAllProducts().find(x => x.name === name);
  if (p) addToCartBySlug(p.slug, qty);
}
function removeFromCart(slug) {
  cart = cart.filter(c => c.slug !== slug);
  saveCart();
  updateCartUI();
}
function changeQty(slug, delta) {
  const item = cart.find(c => c.slug === slug);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(slug);
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
            <button class="btn btn-sm btn-outline-success" data-cart="dec" data-slug="${item.slug}">-</button>
            <span>${item.qty}</span>
            <button class="btn btn-sm btn-outline-success" data-cart="inc" data-slug="${item.slug}">+</button>
            <button class="btn btn-sm btn-outline-danger ms-auto" data-cart="del" data-slug="${item.slug}">Hapus</button>
          </div>
        </div>
      </div>
    `;
    container.appendChild(el);
  });
}

// ===== WhatsApp checkout =====
function buildWaMessage() {
  const lines = ['Halo Herbaprima, saya ingin memesan:'];
  cart.forEach(c => lines.push(`- ${c.name} Qty: ${c.qty}`));
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

// ===== Delegasi event global =====
document.addEventListener('click', (e) => {
  const t = e.target;

  // Tambah produk ke keranjang via card
  if (t.matches('[data-action="add"]')) {
    const slug = t.dataset.slug;
    addToCartBySlug(slug, 1);
  }

  // Cart actions
  if (t.matches('[data-cart="inc"]')) changeQty(t.dataset.slug, +1);
  if (t.matches('[data-cart="dec"]')) changeQty(t.dataset.slug, -1);
  if (t.matches('[data-cart="del"]')) removeFromCart(t.dataset.slug);
});

// Tombol keranjang
$('#resetCartBtn')?.addEventListener('click', resetCart);
$('#checkoutWaBtn')?.addEventListener('click', openWaCheckout);

// ===== Modal detail (beranda) – set konten dinamis lalu CTA WA =====
const modalEl = $('#productModal');
const modalImage = $('#modalImage');
const modalName = $('#modalName');
const modalCategory = $('#modalCategory');
const modalPrice = $('#modalPrice');
const modalAddBtn = $('#modalAddToCart');
const modalBuyWa = $('#modalBuyWa');

function openProductModalBySlug(slug) {
  const p = getAllProducts().find(x => x.slug === slug);
  if (!p) return;
  modalImage.src = p.img;
  modalImage.alt = p.name;
  modalName.textContent = p.name;
  modalCategory.textContent = p.category;
  modalPrice.textContent = formatRupiah(p.price);
  modalAddBtn.dataset.slug = slug;
  const text = encodeURIComponent(`Halo Herbaprima, saya ingin memesan:\n- ${p.name} Qty: 1\nTotal: ${formatRupiah(p.price)}\n\nNama:\nAlamat:\nNo HP:`);
  modalBuyWa.href = `https://wa.me/${WA_NUMBER}?text=${text}`;
}
modalAddBtn?.addEventListener('click', (e) => {
  const slug = e.target.dataset.slug;
  addToCartBySlug(slug, 1);
  const bsModal = bootstrap.Modal.getInstance(modalEl);
  bsModal?.hide();
});

// ===== Halaman detail produk (template slug) =====
function renderProductDetailFromSlug() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  const p = getAllProducts().find(x => x.slug === slug);
  const container = $('#detailContainer');
  if (!container) return;
  if (!p) {
    container.innerHTML = `<div class="alert alert-warning">Produk tidak ditemukan.</div>`;
    return;
  }
  container.innerHTML = `
    <div class="col-md-6" data-aos="fade-right">
      <img src="${p.img}" class="w-100 rounded-3 shadow-sm" alt="${p.name}">
    </div>
    <div class="col-md-6" data-aos="fade-left">
      <h2>${p.name}</h2>
      <p class="text-muted">Kategori: ${p.category}</p>
      <h4 class="text-success fw-bold">${formatRupiah(p.price)}</h4>
      <h6>Deskripsi</h6>
      <p>${p.name} adalah produk herbal premium yang mendukung stamina dan kesehatan harian Anda.</p>
      <h6>Manfaat</h6>
      <ul>
        <li>Mendukung daya tahan tubuh</li>
        <li>Menjaga stamina dan fokus</li>
        <li>Bahan alami pilihan</li>
      </ul>
      <h6>Komposisi</h6>
      <p>Ekstrak herbal alami (lihat label kemasan).</p>
      <div class="d-grid gap-2 mt-3">
        <button class="btn btn-success" onclick="addToCartBySlug('${p.slug}', 1)">Tambah ke Keranjang</button>
        <a href="https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Halo Herbaprima, saya ingin memesan:\n- ${p.name} Qty: 1\nTotal: ${formatRupiah(p.price)}\n\nNama:\nAlamat:\nNo HP:`)}" target="_blank" class="btn btn-outline-success">Beli via WhatsApp</a>
      </div>
    </div>
  `;
}

// ===== Admin panel functions =====
function renderAdminTable() {
  const table = $('#adminTable');
  if (!table) return;
  const all = getAllProducts();
  const adminOnly = getAdminProducts();
  table.innerHTML = '';
  adminOnly.forEach((p, i) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${p.name}</td>
      <td>${p.category}</td>
      <td>${formatRupiah(p.price)}</td>
      <td><img src="${p.img}" width="50" alt="${p.name}"></td>
      <td class="d-flex gap-2">
        <button class="btn btn-sm btn-outline-primary" data-admin="edit" data-index="${i}">Edit</button>
        <button class="btn btn-sm btn-outline-danger" data-admin="del" data-index="${i}">Hapus</button>
      </td>
    `;
    table.appendChild(tr);
  });

  // Delegasi edit/hapus
  table.addEventListener('click', (e) => {
    const t = e.target;
    if (t.matches('[data-admin="del"]')) {
      const i = parseInt(t.dataset.index, 10);
      const list = getAdminProducts();
      list.splice(i, 1);
      setAdminProducts(list);
      renderAdminTable();
    }
    if (t.matches('[data-admin="edit"]')) {
      const i = parseInt(t.dataset.index, 10);
      const p = getAdminProducts()[i];
      $('#editIndex').value = i;
      $('#editName').value = p.name;
      $('#editCat').value = p.category;
      $('#editPrice').value = p.price;
      $('#editImg').value = p.img;
      new bootstrap.Modal('#editModal').show();
    }
  }, { once: true });
}

function addAdminProduct(p) {
  const list = getAdminProducts();
  // Buat slug otomatis unik
  const slug = p.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  list.push({ ...p, slug });
  setAdminProducts(list);
}

function updateAdminProduct(index, newP) {
  const list = getAdminProducts();
  const old = list[index];
  const slug = newP.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  list[index] = { ...old, ...newP, slug };
  setAdminProducts(list);
}

// ===== Init cart on load =====
loadCart();
