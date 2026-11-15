// app.js - منطق التشغيل والربط مع config.js والـ API

let allProducts = [];
let allOffers = [];
let allCategories = [];
let currentCategory = "all";
let cart = [];

document.addEventListener("DOMContentLoaded", async () => {
  applyThemeAndInfo();
  await initData();
  renderOffers();
  renderCategories();
  renderProducts();
});

// تطبيق الألوان وبيانات المتجر من config.js
function applyThemeAndInfo() {
  const { store, theme } = APP_CONFIG;
  document.title = `${store.name} | ${store.slogan}`;
  document.getElementById("store-name").textContent = store.name;
  document.getElementById("store-slogan").textContent = store.slogan;

  const root = document.documentElement;
  root.style.setProperty("--primary", theme.primaryColor);
  root.style.setProperty("--primary-dark", theme.primaryDark);
  root.style.setProperty("--secondary", theme.secondaryColor);
  root.style.setProperty("--bg", theme.backgroundColor);
  root.style.setProperty("--card-bg", theme.cardBackground);
  root.style.setProperty("--text", theme.textColor);
}

// جلب البيانات (إما من الـ API الفعلي أو من المتغيرات المحلية)
async function fetchFromApiOrConfig(endpoint, fallbackData) {
  if (APP_CONFIG.api.useMockData) {
    return fallbackData;
  }
  try {
    const res = await fetch(`${APP_CONFIG.api.baseUrl}${endpoint}`, {
      headers: APP_CONFIG.api.headers
    });
    if (!res.ok) throw new Error("API Error");
    return await res.json();
  } catch (err) {
    console.warn("تعذر الاتصال بالـ API، تم استخدام البيانات المحلية:", err);
    return fallbackData;
  }
}

async function initData() {
  allCategories = await fetchFromApiOrConfig(APP_CONFIG.api.endpoints.categories, APP_CONFIG.categories);
  allOffers = await fetchFromApiOrConfig(APP_CONFIG.api.endpoints.offers, APP_CONFIG.offers);
  allProducts = await fetchFromApiOrConfig(APP_CONFIG.api.endpoints.products, APP_CONFIG.products);
}

// عرض العروض
function renderOffers() {
  const container = document.getElementById("offers-container");
  const currency = APP_CONFIG.store.currency;

  container.innerHTML = allOffers.map(offer => `
    <div class="offer-card">
      <div>
        <span class="offer-badge">${offer.badge}</span>
        <h3>${offer.title}</h3>
        <p>${offer.description}</p>
      </div>
      <div class="offer-footer">
        <div>
          <span class="price">${offer.price} ${currency}</span>
          ${offer.oldPrice ? `<span class="old-price">${offer.oldPrice} ${currency}</span>` : ""}
        </div>
        <button class="add-btn" onclick="addToCart('${offer.id}', '${offer.title}', 'عرض خاص', ${offer.price})">+ أضف للسلة</button>
      </div>
    </div>
  `).join("");
}

// عرض أزرار الأقسام
function renderCategories() {
  const container = document.getElementById("categories-container");
  container.innerHTML = allCategories.map(cat => `
    <button class="cat-btn ${cat.id === currentCategory ? "active" : ""}" onclick="selectCategory('${cat.id}')">
      ${cat.icon} ${cat.name}
    </button>
  `).join("");
}

function selectCategory(catId) {
  currentCategory = catId;
  renderCategories();
  renderProducts();
}

function filterProducts() {
  renderProducts();
}

// عرض المنتجات حسب القسم والبحث
function renderProducts() {
  const container = document.getElementById("products-container");
  const searchQuery = document.getElementById("search-input").value.trim().toLowerCase();
  const currency = APP_CONFIG.store.currency;

  const filtered = allProducts.filter(p => {
    const matchesCat = currentCategory === "all" || p.category === currentCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery) || (p.weight && p.weight.toLowerCase().includes(searchQuery));
    return matchesCat && matchesSearch;
  });

  if (!filtered.length) {
    container.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding:2rem; color:#666;">لا توجد منتجات مطابقة لبحثك.</p>`;
    return;
  }

  container.innerHTML = filtered.map(p => {
    const catObj = allCategories.find(c => c.id === p.category);
    const catName = catObj ? catObj.name : "";

    return `
      <div class="product-card">
        <div>
          <span class="product-cat">${catName}</span>
          <h3 class="product-name">${p.name}</h3>
          <span class="product-weight">الكمية / الوزن: ${p.weight}</span>
        </div>
        <div class="product-bottom">
          <div>
            ${p.price !== null
              ? `<span class="price">${p.price} ${currency}</span>${p.oldPrice ? `<span class="old-price">${p.oldPrice} ${currency}</span>` : ""}`
              : `<span class="note-badge">${p.note || "حسب الطلب"}</span>`
            }
          </div>
          <button class="add-btn" onclick="addToCart('${p.id}', '${p.name}', '${p.weight}', ${p.price || 0})">
            ${p.price !== null ? "+ أضف" : "اطلب"}
          </button>
        </div>
      </div>
    `;
  }).join("");
}

// إدارة السلة
function addToCart(id, name, weight, price) {
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id, name, weight, price, qty: 1 });
  }
  updateCartUI();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== id);
  }
  updateCartUI();
}

function updateCartUI() {
  const countEl = document.getElementById("cart-count");
  const itemsEl = document.getElementById("cart-items");
  const totalEl = document.getElementById("cart-total");
  const currency = APP_CONFIG.store.currency;

  const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);

  countEl.textContent = totalQty;
  totalEl.textContent = `${totalPrice} ${currency}`;

  if (!cart.length) {
    itemsEl.innerHTML = `<p style="text-align:center; color:#888; margin-top:2rem;">السلة فارغة حالياً</p>`;
    return;
  }

  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div>
        <div style="font-weight:700; font-size:0.95rem;">${item.name}</div>
        <div style="font-size:0.8rem; color:#666;">${item.weight} • ${item.price > 0 ? item.price + " " + currency : "تسعير حسب الطلب"}</div>
      </div>
      <div class="qty-controls">
        <button class="qty-btn" onclick="changeQty('${item.id}', -1)">-</button>
        <span>${item.qty}</span>
        <button class="qty-btn" onclick="changeQty('${item.id}', 1)">+</button>
      </div>
    </div>
  `).join("");
}

function toggleCart() {
  document.getElementById("cart-modal").classList.toggle("open");
}

function sendOrderToWhatsapp() {
  if (!cart.length) {
    alert("السلة فارغة! أضف منتجات أولاً.");
    return;
  }
  const currency = APP_CONFIG.store.currency;
  let msg = `مرحباً *${APP_CONFIG.store.name}* 🌿\nأرغب في طلب المنتجات التالية:\n\n`;
  let total = 0;

  cart.forEach((item, index) => {
    const sub = item.price * item.qty;
    total += sub;
    msg += `${index + 1}. *${item.name}* (${item.weight}) × ${item.qty} = ${item.price > 0 ? sub + " " + currency : "حسب الطلب"}\n`;
  });

  msg += `\n*الإجمالي التقديري:* ${total} ${currency}`;
  const url = `https://wa.me/${APP_CONFIG.store.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}
