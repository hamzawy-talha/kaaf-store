// app.js - جلب البيانات بـ fetch من المستودع الخارجي (data-api)

let storeData = {};
let currentCategory = "all";
let cart = [];

// حط هنا رابط الـ Raw اللي نسخته من المستودع الثاني
const API_URL = "https://raw.githubusercontent.com/hamzawy-talha/data-api/main/products.json";

document.addEventListener("DOMContentLoaded", async () => {
  await fetchStoreData();
});

async function fetchStoreData() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("فشل في جلب البيانات من الـ API");
    storeData = await response.json();

    document.getElementById("store-name").textContent = storeData.store.name;
    document.getElementById("store-slogan").textContent = storeData.store.slogan;

    renderCategories();
    renderProducts();
  } catch (error) {
    console.error("Fetch Error:", error);
    document.getElementById("products-container").innerHTML = 
      `<p style="grid-column: 1/-1; text-align:center; color:red; padding:2rem;">تعذر تحميل المنتجات من الـ API الخارجي.</p>`;
  }
}

function renderCategories() {
  const container = document.getElementById("categories-container");
  if (!container || !storeData.categories) return;
  container.innerHTML = storeData.categories.map(cat => `
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

function renderProducts() {
  const container = document.getElementById("products-container");
  const searchInput = document.getElementById("search-input");
  if (!container || !storeData.products) return;

  const searchQuery = searchInput ? searchInput.value.trim().toLowerCase() : "";
  const currency = storeData.store.currency;

  const filtered = storeData.products.filter(p => {
    const matchesCat = currentCategory === "all" || p.category === currentCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery);
    return matchesCat && matchesSearch;
  });

  if (!filtered.length) {
    container.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding:2rem; color:#666;">لا توجد منتجات مطابقة.</p>`;
    return;
  }

  const grouped = {};
  filtered.forEach(p => {
    const sub = p.subCategory || "منتجات عامة";
    if (!grouped[sub]) grouped[sub] = [];
    grouped[sub].push(p);
  });

  let html = "";
  for (const [subCatName, productsList] of Object.entries(grouped)) {
    html += `
      <div style="grid-column: 1 / -1; margin-top: 1.5rem; margin-bottom: 0.5rem;">
        <h3 style="font-size: 1.15rem; color: var(--primary-dark, #3E4A32); border-right: 4px solid var(--secondary, #C89D54); padding-right: 10px; font-weight: 800;">${subCatName}</h3>
      </div>
    `;

    html += productsList.map(p => `
      <div class="product-card" style="background:#fff; border:1px solid #E5DFD0; border-radius:12px; padding:1rem; display:flex; flex-direction:column; justify-content:space-between;">
        <div>
          <h3 class="product-name" style="font-size:1.05rem; font-weight:700; margin:0.25rem 0;">${p.name}</h3>
          <span class="product-weight" style="display:inline-block; background:#F7F4EC; color:#6B7265; font-size:0.8rem; padding:2px 8px; border-radius:6px; margin-bottom:0.75rem;">الكمية: ${p.weight}</span>
        </div>
        <div class="product-bottom" style="display:flex; justify-content:space-between; align-items:center; margin-top:auto; padding-top:0.6rem; border-top:1px solid #F7F4EC;">
          <span class="price" style="font-size:1.15rem; font-weight:800; color:#3E4A32;">${p.price} ${currency}</span>
          <button class="add-btn" onclick="addToCart('${p.id}', '${p.name}', '${p.weight}', ${p.price})" style="background:#5A6B47; color:#fff; border:none; padding:0.45rem 0.9rem; border-radius:8px; cursor:pointer; font-weight:700;">+ أضف</button>
        </div>
      </div>
    `).join("");
  }

  container.innerHTML = html;
}

function addToCart(id, name, weight, price) {
  const existing = cart.find(item => item.id === id);
  if (existing) { existing.qty += 1; }
  else { cart.push({ id, name, weight, price, qty: 1 }); }
  updateCartUI();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { cart = cart.filter(i => i.id !== id); }
  updateCartUI();
}

function updateCartUI() {
  const countEl = document.getElementById("cart-count");
  const totalEl = document.getElementById("cart-total");
  const itemsEl = document.getElementById("cart-items");
  if (!countEl) return;

  countEl.textContent = cart.reduce((sum, i) => sum + i.qty, 0);
  const total = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
  if (totalEl) totalEl.textContent = `${total} ${storeData.store.currency}`;

  if (!itemsEl) return;
  if (!cart.length) {
    itemsEl.innerHTML = `<p style="text-align:center; color:#888; margin-top:2rem;">السلة فارغة</p>`;
    return;
  }

  itemsEl.innerHTML = cart.map(item => `
    <div style="display:flex; justify-content:space-between; align-items:center; padding:0.5rem 0; border-bottom:1px solid #eee;">
      <div>
        <div style="font-weight:700;">${item.name}</div>
        <div style="font-size:0.8rem; color:#666;">${item.weight} • ${item.price} ${storeData.store.currency}</div>
      </div>
      <div>
        <button onclick="changeQty('${item.id}', -1)" style="padding:2px 8px;">-</button>
        <span style="padding:0 6px;">${item.qty}</span>
        <button onclick="changeQty('${item.id}', 1)" style="padding:2px 8px;">+</button>
      </div>
    </div>
  `).join("");
}

function toggleCart() {
  const modal = document.getElementById("cart-modal");
  if (modal) modal.classList.toggle("open");
}

function sendOrderToWhatsapp() {
  if (!cart.length) { alert("السلة فارغة!"); return; }
  let msg = `مرحباً *${storeData.store.name}* 🌿\nأرغب في طلب:\n\n`;
  let total = 0;
  cart.forEach((i, idx) => {
    total += i.price * i.qty;
    msg += `${idx + 1}. *${i.name}* (${i.weight}) × ${i.qty} = ${i.price * i.qty} ${storeData.store.currency}\n`;
  });
  msg += `\n*الإجمالي:* ${total} ${storeData.store.currency}`;
  window.open(`https://wa.me/${storeData.store.whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank");
}
