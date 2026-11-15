// config.js - ملف المتغيرات الشامل وإعدادات الـ API وكتالوج منتجات "كاف للمنتجات الطبيعية"

const APP_CONFIG = {
  // 1. بيانات المتجر والهوية
  store: {
    name: "كاف للمنتجات الطبيعية",
    slogan: "تكفيك وزيادة • طعم الطبيعة، جودة كاف",
    currency: "ج.م",
    whatsappNumber: "201000000000", // ضع رقم الواتساب هنا بصيغة دولية بدون +
    description: "أجود المنتجات الطبيعية النقية: عسل نحل، ألبان بلدي، زيوت معصورة على البارد، توابل خام، مكسرات، ومنتجات العناية الطبيعية."
  },

  // 2. ألوان الهوية البصرية (يمكن تعديلها من هنا وستتغير في الموقع بالكامل)
  theme: {
    primaryColor: "#5A6B47",     // الأخضر الزيتوني
    primaryDark: "#3E4A32",      // الأخضر الزيتوني الغامق
    secondaryColor: "#C89D54",   // الذهبي / العسلي
    backgroundColor: "#F7F4EC",  // البيج الكريمي الدافئ
    cardBackground: "#FFFFFF",
    textColor: "#2C3325"
  },

  // 3. إعدادات الربط مع الـ API
  api: {
    baseUrl: "https://api.yourdomain.com/v1", // رابط السيرفر الأساسي
    endpoints: {
      categories: "/categories",
      offers: "/offers",
      products: "/products"
    },
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
      // "Authorization": "Bearer YOUR_TOKEN_HERE"
    },
    useMockData: true // اجعلها false عند جاهزية السيرفر الفعلي
  },

  // 4. الأقسام (Categories)
  categories: [
    { id: "all", name: "جميع المنتجات", icon: "🌿" },
    { id: "honey", name: "العسل الطبيعي", icon: "🍯" },
    { id: "dairy", name: "الألبان والأجبان", icon: "🥛" },
    { id: "oils", name: "الزيوت الطبيعية", icon: "🫒" },
    { id: "spices", name: "التوابل الخام", icon: "🧂" },
    { id: "nuts", name: "المكسرات الصحية", icon: "🥜" },
    { id: "coffee", name: "البن والشاي", icon: "☕" },
    { id: "luncheon", name: "اللانشون الطبيعي", icon: "🥩" },
    { id: "care", name: "العناية الطبيعية", icon: "🧴" },
    { id: "misc", name: "منتجات متنوعة", icon: "🌾" },
    { id: "icecream", name: "الآيس كريم الطبيعي", icon: "🍨" }
  ],

  // 5. العروض الخاصة (Offers)
  offers: [
    {
      id: "off-1",
      title: "عرض مجموعة الحمام المغربي الأصلية",
      description: "طمي مغربي قطع + تبريمة مغربية + صابون مغربي + الليفة المغربية الأصلية + زيت جاف ترطيب (دراي أويل)",
      price: 600,
      oldPrice: 750,
      badge: "عرض متكامل",
      category: "care"
    },
    {
      id: "off-2",
      title: "عسل موالح عضوية (1 كيلو)",
      description: "عسل موالح طبيعي نقي عالي الجودة بخصم خاص لفترة محدودة",
      price: 350,
      oldPrice: 390,
      badge: "وفر 40 ج.م",
      category: "honey"
    },
    {
      id: "off-3",
      title: "زوايد شمع السدر (1 كيلو)",
      description: "شمع عسل السدر الطبيعي الأصلي بخصم 500 جنيه كامل",
      price: 1000,
      oldPrice: 1500,
      badge: "خصم 500 ج.م",
      category: "honey"
    },
    {
      id: "off-4",
      title: "عرض العناية بالقدمين واليدين",
      description: "شراب سيليكون (110 ج.م) أو جلافز سيليكون (120 ج.م) لترطيب فائق",
      price: 110,
      oldPrice: 150,
      badge: "عرض خاص",
      category: "care"
    }
  ],

  // 6. جميع المنتجات (Products Catalog)
  products: [
    // --- قسم العسل النحل الطبيعي ---
    { id: "h1", category: "honey", name: "عسل برسيم حجازي صحراوي", weight: "1 ك", price: 300 },
    { id: "h2", category: "honey", name: "عسل ينسون عضوي", weight: "1 ك", price: 320 },
    { id: "h3", category: "honey", name: "عسل موالح عضوية", weight: "1 ك", price: 350, oldPrice: 390 },
    { id: "h4", category: "honey", name: "عسل برسيم حجازي وسدر صحراوي (متبلور)", weight: "1 ك", price: 390 },
    { id: "h5", category: "honey", name: "عسل أعشاب طبية عضوية", weight: "1 ك", price: 440 },
    { id: "h6", category: "honey", name: "عسل رطريط جبلي", weight: "1 ك", price: 380 },
    { id: "h7", category: "honey", name: "عسل شوكيات جبلي", weight: "1 ك", price: 520 },
    { id: "h8", category: "honey", name: "عسل بردقوش صحراوي", weight: "1 ك", price: 540 },
    { id: "h9", category: "honey", name: "عسل شمر جبلي", weight: "1 ك", price: 700 },
    { id: "h10", category: "honey", name: "عسل زعتر جبلي", weight: "1 ك", price: 760 },
    { id: "h11", category: "honey", name: "عسل سدر وائل جبلي", weight: "1 ك", price: 1100 },
    { id: "h12", category: "honey", name: "عسل سدر جبلي سيناوي", weight: "1 ك", price: 1300 },
    { id: "h13", category: "honey", name: "عسل سدر جبلي ملكي (2)", weight: "1 ك", price: 1400 },
    { id: "h14", category: "honey", name: "عسل سدر جبلي ملكي (1)", weight: "1 ك", price: 1500 },
    { id: "h15", category: "honey", name: "عسل طلح جبلي (أكاسيا)", weight: "¼ ك", price: 375 },
    { id: "h16", category: "honey", name: "عسل سدر يمني حضرمي", weight: "¼ ك", price: 1250 },
    { id: "h17", category: "honey", name: "عسل سدر يمني عصيمي", weight: "¼ ك", price: 1500 },
    { id: "h18", category: "honey", name: "زوايد شمع صحراوي", weight: "1 ك", price: 500 },
    { id: "h19", category: "honey", name: "زوايد شمع صحراوي", weight: "½ ك", price: 260 },
    { id: "h20", category: "honey", name: "زوايد شمع السدر", weight: "1 ك", price: 1000, oldPrice: 1500 },
    { id: "h21", category: "honey", name: "مكسرات مشكل بالعسل (فريش بالطلب)", weight: "380 جرام", price: 290 },
    { id: "h22", category: "honey", name: "خلطة عسل سدر ملكية", weight: "½ ك", price: 1450 },
    { id: "h23", category: "honey", name: "خلطات عسل متنوعة (بالطلب)", weight: "حسب الطلب", price: null, note: "يُجهز حسب الطلب" },

    // --- قسم الألبان والأجبان والحليب ---
    { id: "d1", category: "dairy", name: "زبادي بلدي", weight: "140 جرام", price: 15 },
    { id: "d2", category: "dairy", name: "لبن جاموسي كامل الدسم", weight: "1 ك", price: 45 },
    { id: "d3", category: "dairy", name: "لبن بقري كامل الدسم", weight: "1 ك", price: 30 },
    { id: "d4", category: "dairy", name: "جبن قريش خالي الدسم", weight: "½ ك", price: 55 },
    { id: "d5", category: "dairy", name: "جبن قريش نصف دسم", weight: "½ ك", price: 70 },
    { id: "d6", category: "dairy", name: "جبن قريش كامل الدسم", weight: "½ ك", price: 85 },
    { id: "d7", category: "dairy", name: "قشطة حلوة كريمة", weight: "½ ك", price: 180 },
    { id: "d8", category: "dairy", name: "قشطة رول", weight: "¼ ك", price: 95 },
    { id: "d9", category: "dairy", name: "زبدة جاموسي بلدي", weight: "1 ك", price: 390 },
    { id: "d10", category: "dairy", name: "زبدة بقري بلدي", weight: "1 ك", price: 330 },
    { id: "d11", category: "dairy", name: "صافي سمن جاموسي", weight: "300 جرام", price: 185 },
    { id: "d12", category: "dairy", name: "صافي سمن جاموسي", weight: "150 جرام", price: 95 },
    { id: "d13", category: "dairy", name: "صافي سمن بقري", weight: "300 جرام", price: 150 },
    { id: "d14", category: "dairy", name: "صافي سمن بقري", weight: "150 جرام", price: 85 },
    { id: "d15", category: "dairy", name: "مورتة بلدي", weight: "125 جرام", price: 40 },
    { id: "d16", category: "dairy", name: "جبن ملح خفيف (ثلاجة)", weight: "½ ك", price: 125 },
    { id: "d17", category: "dairy", name: "جبن فيتا طبيعي", weight: "½ ك", price: 120 },
    { id: "d18", category: "dairy", name: "جبن كيري طبيعي", weight: "½ ك", price: 120 },
    { id: "d19", category: "dairy", name: "حليب إبل صحراوي خام", weight: "½ لتر", price: 100 },
    { id: "d20", category: "dairy", name: "حليب ماعز خام", weight: "½ لتر", price: 80 },
    { id: "d21", category: "dairy", name: "رايب ماعز خام", weight: "½ لتر", price: 95 },
    { id: "d22", category: "dairy", name: "حليب أغنام", weight: "½ لتر", price: 110 },
    { id: "d23", category: "dairy", name: "حليب الكفير", weight: "½ لتر", price: null, note: "قريباً" },

    // --- قسم الزيوت الطبيعية الخام ---
    { id: "o1", category: "oils", name: "زيت زيتون سيناوي بكر ممتاز ع البارد", weight: "1 لتر", price: 600 },
    { id: "o2", category: "oils", name: "زيت زيتون سيناوي بكر ممتاز", weight: "½ لتر", price: 310 },
    { id: "o3", category: "oils", name: "زيت زيتون سيناوي بكر ممتاز", weight: "¼ لتر", price: 160 },
    { id: "o4", category: "oils", name: "زيت زيتون مطروح بكر ممتاز ع البارد", weight: "1 لتر", price: 600 },
    { id: "o5", category: "oils", name: "زيت جوز هند عضوي", weight: "¼ لتر", price: 220 },
    { id: "o6", category: "oils", name: "زيت جوز هند عضوي", weight: "⅛ لتر", price: 120 },
    { id: "o7", category: "oils", name: "زيت سمسم طبيعي", weight: "¼ لتر", price: 150 },
    { id: "o8", category: "oils", name: "زيت بذور اليقطين", weight: "¼ لتر", price: 625 },
    { id: "o9", category: "oils", name: "زيت حبة بركة حبشي", weight: "¼ لتر", price: 850 },
    { id: "o10", category: "oils", name: "زيت حبة بركة بلدي", weight: "¼ لتر", price: 375 },
    { id: "o11", category: "oils", name: "زيت بذور الكتان (زيت حار)", weight: "¼ لتر", price: 130 },
    { id: "o12", category: "oils", name: "زيت خروع بلدي", weight: "¼ لتر", price: 430 },

    // --- قسم التوابل الخام المميزة ---
    { id: "s1", category: "spices", name: "زنجبيل مطحون", weight: "100 جرام", price: 60 },
    { id: "s2", category: "spices", name: "كركم مطحون", weight: "100 جرام", price: 60 },
    { id: "s3", category: "spices", name: "فلفل أسود حصى", weight: "100 جرام", price: 60 },
    { id: "s4", category: "spices", name: "كركديه لوزة غامق أسواني", weight: "100 جرام", price: 55 },
    { id: "s5", category: "spices", name: "قرفة مطحون", weight: "100 جرام", price: 50 },
    { id: "s6", category: "spices", name: "كمون بلدي حصى", weight: "100 جرام", price: 50 },
    { id: "s7", category: "spices", name: "كاري مميز مطحون", weight: "100 جرام", price: 45 },
    { id: "s8", category: "spices", name: "شطة بلدي مطحون", weight: "100 جرام", price: 45 },
    { id: "s9", category: "spices", name: "بابريكا مطحون", weight: "100 جرام", price: 45 },
    { id: "s10", category: "spices", name: "كزبرة بلدي حصى", weight: "100 جرام", price: 35 },
    { id: "s11", category: "spices", name: "جوزة الطيب", weight: "100 جرام", price: null, note: "اسأل عن السعر" },

    // --- قسم المكسرات الصحية المميزة ---
    { id: "n1", category: "nuts", name: "الكاجو الفاخر", weight: "¼ ك صافي", price: 250 },
    { id: "n2", category: "nuts", name: "الفستق الفاخر", weight: "¼ ك صافي", price: 275 },
    { id: "n3", category: "nuts", name: "اللوز الفاخر", weight: "¼ ك صافي", price: 210 },
    { id: "n4", category: "nuts", name: "عين الجمل", weight: "¼ ك صافي", price: 205 },
    { id: "n5", category: "nuts", name: "مكاديميا مقشرة حجم كبير نيء", weight: "¼ ك صافي", price: 410 },
    { id: "n6", category: "nuts", name: "جوز بيكان محمص", weight: "¼ ك صافي", price: null, note: "قريباً" },
    { id: "n7", category: "nuts", name: "جوز برازيلي كبير نيء", weight: "¼ ك صافي", price: null, note: "قريباً" },
    { id: "n8", category: "nuts", name: "مكسرات مشكل حسب الطلب", weight: "بداية من ⅛ ك", price: null, note: "تسعير حسب الطلب" },

    // --- قسم البن وتوليفات القهوة ---
    { id: "c1", category: "coffee", name: "بن سادة فاتح فاخر", weight: "¼ ك", price: 160 },
    { id: "c2", category: "coffee", name: "بن سادة وسط فاخر", weight: "¼ ك", price: 160 },
    { id: "c3", category: "coffee", name: "بن سادة غامق فاخر", weight: "¼ ك", price: 170 },
    { id: "c4", category: "coffee", name: "بن محوج فاتح فاخر", weight: "¼ ك", price: 180 },
    { id: "c5", category: "coffee", name: "بن محوج وسط فاخر", weight: "¼ ك", price: 180 },
    { id: "c6", category: "coffee", name: "بن محوج غامق فاخر", weight: "¼ ك", price: 190 },
    { id: "c7", category: "coffee", name: "بن سادة اسبيشيال", weight: "¼ ك", price: 200 },
    { id: "c8", category: "coffee", name: "بن محوج اسبيشيال", weight: "¼ ك", price: 220 },
    { id: "c9", category: "coffee", name: "بن اسبريسو", weight: "¼ ك", price: 235 },
    { id: "c10", category: "coffee", name: "قهوة خضراء", weight: "¼ ك", price: 180 },
    { id: "c11", category: "coffee", name: "قهوة بندق قطع", weight: "¼ ك", price: 175 },
    { id: "c12", category: "coffee", name: "نسكافيه كلاسيك بلاك", weight: "50 جرام", price: 70 },
    { id: "c13", category: "coffee", name: "نسكافيه جولد", weight: "50 جرام", price: 110 },
    { id: "c14", category: "coffee", name: "قهوة عربي سادة", weight: "¼ ك", price: 210 },
    { id: "c15", category: "coffee", name: "قهوة عربي محوج", weight: "¼ ك", price: 250 },
    { id: "c16", category: "coffee", name: "شاي أخضر صيني", weight: "100 جرام", price: 50 },
    { id: "c17", category: "coffee", name: "شاي ليبي", weight: "100 جرام", price: null, note: "اسأل عن السعر" },

    // --- قسم اللانشون الطبيعي ---
    { id: "l1", category: "luncheon", name: "لانشون لحم رومي مدخن (فاكيوم)", weight: "300 جرام", price: 228 },
    { id: "l2", category: "luncheon", name: "لانشون لحم فراخ مدخن (فاكيوم)", weight: "300 جرام", price: 189 },
    { id: "l3", category: "luncheon", name: "لانشون لحم بقري مدخن (فاكيوم)", weight: "300 جرام", price: 252 },
    { id: "l4", category: "luncheon", name: "لانشون لحم جملي مدخن (فاكيوم)", weight: "300 جرام", price: 237 },

    // --- قسم العناية الطبيعية ---
    { id: "cr1", category: "care", name: "حمام كريم زبدة شيا", weight: "عبوة", price: 145 },
    { id: "cr2", category: "care", name: "حمام كريم لانولين", weight: "عبوة", price: 145 },
    { id: "cr3", category: "care", name: "حمام كريم أرجان", weight: "عبوة", price: 145 },
    { id: "cr4", category: "care", name: "بلسم كافيار محفز إنبات", weight: "عبوة", price: 180 },
    { id: "cr5", category: "care", name: "زيت تساقط أرجان و8 زيوت", weight: "عبوة", price: 185 },
    { id: "cr6", category: "care", name: "جل يفيد حالات الصلع", weight: "عبوة", price: 180 },
    { id: "cr7", category: "care", name: "زيت هندي للفراغات", weight: "عبوة", price: 290 },
    { id: "cr8", category: "care", name: "زيت حشيش مغربي أصلي", weight: "عبوة", price: 280 },
    { id: "cr9", category: "care", name: "كريم روزماري", weight: "عبوة", price: 100 },
    { id: "cr10", category: "care", name: "جل مقطر روزماري", weight: "عبوة", price: 150 },
    { id: "cr11", category: "care", name: "ورق سدر مغربي", weight: "100 جرام", price: 190 },
    { id: "cr12", category: "care", name: "ورق سدر مصري", weight: "100 جرام", price: 100 },
    { id: "cr13", category: "care", name: "حناء سوداني", weight: "¼ ك", price: 150 },
    { id: "cr14", category: "care", name: "حناء أسواني", weight: "¼ ك", price: 125 },
    { id: "cr15", category: "care", name: "كريم بشرة مرطب ومغذي", weight: "عبوة", price: 50 },
    { id: "cr16", category: "care", name: "بادي لوشن", weight: "عبوة", price: 135 },
    { id: "cr17", category: "care", name: "مزيل عرق بالعود", weight: "عبوة", price: 95 },
    { id: "cr18", category: "care", name: "مزيل عرق (ستيك)", weight: "عبوة", price: 90 },
    { id: "cr19", category: "care", name: "كريم تفتيح ألفا أربوتين", weight: "عبوة", price: 145 },
    { id: "cr20", category: "care", name: "كريم تقشير", weight: "عبوة", price: 130 },
    { id: "cr21", category: "care", name: "نيلة زرقاء مغربي", weight: "30 جرام", price: 110 },
    { id: "cr22", category: "care", name: "جل مسك أبيض", weight: "عبوة", price: 90 },
    { id: "cr23", category: "care", name: "مخمرية جل مسك الرمان", weight: "عبوة", price: 90 },
    { id: "cr24", category: "care", name: "مخمرية بعطر الورد", weight: "عبوة", price: 70 },
    { id: "cr25", category: "care", name: "كحل الأثمد الأصلي", weight: "عبوة", price: 125 },
    { id: "cr26", category: "care", name: "شامبو علاج للقشرة", weight: "عبوة", price: 200 },
    { id: "cr27", category: "care", name: "شامبو روزماري", weight: "عبوة", price: 140 },
    { id: "cr28", category: "care", name: "شامبو الأرجان", weight: "عبوة", price: 150 },
    { id: "cr29", category: "care", name: "شامبو الأرجان حجم عائلي", weight: "1000 مللي", price: 370 },
    { id: "cr30", category: "care", name: "شامبو صبار والبابونج", weight: "عبوة", price: 130 },
    { id: "cr31", category: "care", name: "خلاصة السعد اسبراي", weight: "عبوة", price: 110 },
    { id: "cr32", category: "care", name: "كريم السعد", weight: "عبوة", price: 90 },
    { id: "cr33", category: "care", name: "زبدة شيا أصلية", weight: "100 جرام", price: 200 },
    { id: "cr34", category: "care", name: "ليب بالم زبدة كاكاو خام", weight: "عبوة", price: 160 },
    { id: "cr35", category: "care", name: "ماء ورد مقطر باكستاني", weight: "عبوة", price: 110 },
    { id: "cr36", category: "care", name: "غسول بشرة مقطر الخيار", weight: "عبوة", price: 50 },
    { id: "cr37", category: "care", name: "غسول بشرة مقطر الكيوي", weight: "عبوة", price: 70 },
    { id: "cr38", category: "care", name: "غسول بشرة مقطر اللبان", weight: "عبوة", price: 80 },
    { id: "cr39", category: "care", name: "جل الكاموميل (البابونج) للحبوب والبشرة", weight: "عبوة", price: 310 },
    { id: "cr40", category: "care", name: "جل مقطر الورد", weight: "عبوة", price: 140 },
    { id: "cr41", category: "care", name: "جل اللبان الدكر", weight: "عبوة", price: 150 },
    { id: "cr42", category: "care", name: "جل مقطر صبار الألوفيرا", weight: "عبوة", price: 150 },
    { id: "cr43", category: "care", name: "زبدة ليمون طبيعي", weight: "100 جرام", price: 170 },
    { id: "cr44", category: "care", name: "صابون طبيعي بأنواعه (ورد، عرق سوس، عسل، لبان دكر، غار، حليب، فحم، جلسرين، كركم، شيا، كبريت)", weight: "قطعة", price: 50 },

    // --- منتجات متنوعة مميزة ---
    { id: "m1", category: "misc", name: "طحينة خام سمسم", weight: "850 جرام", price: 210 },
    { id: "m2", category: "misc", name: "طحينة خام سمسم", weight: "480 جرام", price: 120 },
    { id: "m3", category: "misc", name: "زبدة فول سوداني خام", weight: "375 جرام", price: 115 },
    { id: "m4", category: "misc", name: "خل تفاح عضوي", weight: "عبوة كاملة", price: 350 },
    { id: "m5", category: "misc", name: "خل تفاح عضوي", weight: "¼ لتر", price: 105 },
    { id: "m6", category: "misc", name: "مستكة يوناني خيوس", weight: "10 جرام", price: 200 },
    { id: "m7", category: "misc", name: "زعفران أفغاني", weight: "1 جرام", price: 350 },
    { id: "m8", category: "misc", name: "جينسينج أحمر كوري طري عمر", weight: "1 جرام", price: 9 },
    { id: "m9", category: "misc", name: "جينسينج أحمر كوري مطحون خام", weight: "1 جرام", price: 22 },
    { id: "m10", category: "misc", name: "أشوجندا", weight: "1 جرام", price: 3.5 },
    { id: "m11", category: "misc", name: "حسك بري مطحون", weight: "1 جرام", price: 1.5 },
    { id: "m12", category: "misc", name: "طحالب ديتومات خارقة", weight: "1 جرام", price: 12 },
    { id: "m13", category: "misc", name: "عشبة الماكا مطحون", weight: "1 جرام", price: 9 },
    { id: "m14", category: "misc", name: "بروبليس روسي", weight: "1 جرام", price: 35 },
    { id: "m15", category: "misc", name: "بروبليس بلدي", weight: "1 جرام", price: 25 },
    { id: "m16", category: "misc", name: "حبوب لقاح برسيم", weight: "1 جرام", price: 3.5 },
    { id: "m17", category: "misc", name: "طلع نخل بيور", weight: "1 جرام", price: 4 },
    { id: "m18", category: "misc", name: "بذور يقطين", weight: "¼ ك", price: 110 },
    { id: "m19", category: "misc", name: "بذور الشيا", weight: "¼ ك", price: 110 },
    { id: "m20", category: "misc", name: "مشمش مجفف تركي", weight: "¼ ك", price: 230 },
    { id: "m21", category: "misc", name: "تين سوري مجفف", weight: "¼ ك", price: 225 },
    { id: "m22", category: "misc", name: "تين بقلامي سوري", weight: "¼ ك", price: 245 },
    { id: "m23", category: "misc", name: "قراصيا أرجنتيني", weight: "¼ ك", price: 125 },
    { id: "m24", category: "misc", name: "توت بري كرانبيري مجفف", weight: "¼ ك", price: 235 },

    // --- قسم الآيس كريم الطبيعي (متاح أوزان ⅛ك، ½ك، 1ك، 2ك) ---
    { id: "ic1", category: "icecream", name: "آيس كريم حليب 🥛", weight: "⅛ كيلو (متاح ½ك، 1ك، 2ك)", price: 40 },
    { id: "ic2", category: "icecream", name: "آيس كريم مانجو 🥭", weight: "⅛ كيلو (متاح ½ك، 1ك، 2ك)", price: 40 },
    { id: "ic3", category: "icecream", name: "آيس كريم فراولة 🍓", weight: "⅛ كيلو (متاح ½ك، 1ك، 2ك)", price: 40 },
    { id: "ic4", category: "icecream", name: "آيس كريم موز 🍌", weight: "⅛ كيلو (متاح ½ك، 1ك، 2ك)", price: 40 },
    { id: "ic5", category: "icecream", name: "آيس كريم ليمون نعناع 🍃🍋", weight: "⅛ كيلو (متاح ½ك، 1ك، 2ك)", price: 40 },
    { id: "ic6", category: "icecream", name: "آيس كريم ليمون 🍋", weight: "⅛ كيلو (متاح ½ك، 1ك، 2ك)", price: 40 },
    { id: "ic7", category: "icecream", name: "آيس كريم كركديه 🌺", weight: "⅛ كيلو (متاح ½ك، 1ك، 2ك)", price: 40 },
    { id: "ic8", category: "icecream", name: "آيس كريم تمر هندي", weight: "⅛ كيلو (متاح ½ك، 1ك، 2ك)", price: 40 },
    { id: "ic9", category: "icecream", name: "آيس كريم عناب", weight: "⅛ كيلو (متاح ½ك، 1ك، 2ك)", price: 40 },
    { id: "ic10", category: "icecream", name: "آيس كريم فانيليا 🤍", weight: "⅛ كيلو (متاح ½ك، 1ك، 2ك)", price: 45 },
    { id: "ic11", category: "icecream", name: "آيس كريم شوكولاتة سادة 🍫", weight: "⅛ كيلو (متاح ½ك، 1ك، 2ك)", price: 50 },
    { id: "ic12", category: "icecream", name: "آيس كريم تمر القصيم السعودي", weight: "⅛ كيلو (متاح ½ك، 1ك، 2ك)", price: 50 },
    { id: "ic13", category: "icecream", name: "آيس كريم شوكولاتة براونيز 🍫", weight: "⅛ كيلو (متاح ½ك، 1ك، 2ك)", price: 50 },
    { id: "ic14", category: "icecream", name: "آيس كريم زبادي توت بلو بيري", weight: "⅛ كيلو (متاح ½ك، 1ك، 2ك)", price: 55 },
    { id: "ic15", category: "icecream", name: "آيس كريم زبادي توت راسبيري", weight: "⅛ كيلو (متاح ½ك، 1ك، 2ك)", price: 55 },
    { id: "ic16", category: "icecream", name: "آيس كريم لوتس", weight: "⅛ كيلو (متاح ½ك، 1ك، 2ك)", price: 55 },
    { id: "ic17", category: "icecream", name: "آيس كريم تشيز كيك", weight: "⅛ كيلو (متاح ½ك، 1ك، 2ك)", price: 55 },
    { id: "ic18", category: "icecream", name: "آيس كريم كراميل لوز", weight: "⅛ كيلو (متاح ½ك، 1ك، 2ك)", price: 55 },
    { id: "ic19", category: "icecream", name: "آيس كريم رفايلو بشرايح جوز هند", weight: "⅛ كيلو (متاح ½ك، 1ك، 2ك)", price: 55 },
    { id: "ic20", category: "icecream", name: "آيس كريم مستكة يوناني بالفستق", weight: "⅛ كيلو (متاح ½ك، 1ك، 2ك)", price: 60 },
    { id: "ic21", category: "icecream", name: "آيس كريم اللبان الطبيعي", weight: "⅛ كيلو (متاح ½ك، 1ك، 2ك)", price: 60 },
    { id: "ic22", category: "icecream", name: "آيس كريم قشطة فستق", weight: "⅛ كيلو (متاح ½ك، 1ك، 2ك)", price: 60 },
    { id: "ic23", category: "icecream", name: "آيس كريم فستــــق", weight: "⅛ كيلو (متاح ½ك، 1ك، 2ك)", price: 60 }
  ]
};
