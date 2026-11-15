let storeData = {};
let currentCategory = "all";
let cart = [];

document.addEventListener("DOMContentLoaded", async () => {
  await loadStoreData();
});

// دالة الـ Fetch لجلب بيانات الـ API
async function loadStoreData() {
  try {
    const response = await fetch("products.json"); // هنا بيعمل fetch لملف الـ JSON المحلي أو رابط الـ API
    if (!response.ok) throw new Error("فشل تحميل البيانات");
    storeData = await response.json();

    document.getElementById("store-name").textContent = storeData.store.name;
    document.getElementById("store-slogan").textContent = storeData.store.slogan;

    renderCategories();
    renderProducts();
  } catch (error) {
    console.error("API Fetch Error:", error);
    document.getElementById("products-container").innerHTML = "<p style='color:red; text-align:center;'>حدث خطأ أثناء تحميل المنتجات.</p>";
  }
}

function renderCategories() {
  const container = document.getElementById("categories-container");
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

// عرض المنتجات مقسمة تحت الأقسام الفرعية بعد الـ Fetch
function renderProducts() {
  const container = document.getElementById("products-container");
  const searchQuery = document.getElementById("search-input").value.trim().toLowerCase();
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

  // تجميع المنتجات تحت الأقسام الفرعية (Sub-categories)
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
        <h3 style="font-size: 1.15rem; color: var(--primary-dark); border-right: 4px solid var(--secondary); padding-right: 10px; font-weight: 800;">${subCatName}</h3>
      </div>
    `;

    html += productsList.map(p => `
      <div class="product-card">
        <div>
          <h3 class="product-name">${p.name}</h3>
          <span class="product-weight">الكمية: ${p.weight}</span>
        </div>
        <div class="product-bottom">
          <span class="price">${p.price} ${currency}</span>
          <button class="add-btn" onclick="addToCart('${p.id}', '${p.name}', '${p.weight}', ${p.price})">+ أضف</button>
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
  document.getElementById("cart-count").textContent = cart.reduce((sum, i) => sum + i.qty, 0);
  const total = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
  document.getElementById("cart-total").textContent = `${total} ${storeData.store.currency}`;

  const itemsEl = document.getElementById("cart-items");
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
        <button onclick="changeQty('${item.id}', -1)">-</button>
        <span style="padding:0 6px;">${item.qty}</span>
        <button onclick="changeQty('${item.id}', 1)">+</button>
      </div>
    </div>
  `).join("");
}

function toggleCart() {
  document.getElementById("cart-modal").classList.toggle("open");
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
