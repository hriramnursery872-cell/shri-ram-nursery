/* ============================================================
   SHRI RAM NURSERY - CENTRAL PLANT DATA ENGINE
   Bhuna
   ------------------------------------------------------------
   Central data source for:
   - Customer Plant Catalog
   - Plant Detail Page
   - Admin Plant Management
   - Order System
   - Like / Share
   - Plant Images
   - Care / Detail Information
   ============================================================ */

const STORAGE_KEY = "shri_ram_nursery_plants_v3";

/* ============================================================
   MASTER CATEGORIES
   ============================================================ */

export const PLANT_CATEGORIES = [
  {
    value: "Fruit",
    label: "🍎 फलदार पौधे"
  },
  {
    value: "Indoor",
    label: "🪴 इंडोर प्लांट्स"
  },
  {
    value: "Outdoor",
    label: "🌳 आउटडोर प्लांट्स"
  },
  {
    value: "Flowering",
    label: "🌺 फूलों के पौधे"
  },
  {
    value: "Decorative",
    label: "🌿 डेकोरेटिव एवं फॉलिएज"
  },
  {
    value: "Landscaping",
    label: "🌴 लैंडस्केपिंग एवं पाम्स"
  },
  {
    value: "Medicinal",
    label: "🌱 औषधीय एवं अन्य"
  }
];

/* ============================================================
   MASTER PLANT CATALOG
   ------------------------------------------------------------
   image        = वर्तमान पौधे की मुख्य फोटो
   images       = अतिरिक्त फोटो
   mature_image = बड़ा / mature पौधे का visual
   ============================================================ */

const DEFAULT_PLANTS = [

  {
    id: "fruit_guava_hisar_safeda_01",
    name: "अमरूद - हिसार सफेदा (Guava Hisar Safeda)",
    category: "Fruit",
    category_hi: "फलदार पौधे",
    variety: "L-49 / Hisar Safeda",

    image: "images/guava-hisar-safeda.jpg",
    images: [],

    mature_image: "images/mature-guava-hisar-safeda.jpg",

    guide_link: "qr/guava-hisar-safeda.html",

    short_description:
      "मीठे फल और अच्छी उत्पादन क्षमता वाला लोकप्रिय अमरूद पौधा।",

    care_tips:
      "अमरूद को रोज़ 5-6 घंटे धूप दें और नियमित सिंचाई करें।",

    watering:
      "मिट्टी की नमी के अनुसार नियमित पानी दें।",

    sunlight:
      "प्रतिदिन लगभग 5-6 घंटे सीधी धूप उपयुक्त है।",

    soil:
      "अच्छी जल निकासी वाली उपजाऊ मिट्टी बेहतर रहती है।",

    maintenance:
      "समय-समय पर सूखी और कमजोर शाखाओं की pruning करें।"
  },

  {
    id: "fruit_peach_shan_e_punjab_01",
    name: "आड़ू (Peach)",
    category: "Fruit",
    category_hi: "फलदार पौधे",
    variety: "Shan-e-Punjab / Alucha",

    image: "images/peach.jpg",
    images: [],

    mature_image: "images/mature-peach.jpg",

    guide_link: "qr/peach.html",

    short_description:
      "बागवानी के लिए उपयोगी फलदार आड़ू का पौधा।",

    care_tips:
      "पूरी धूप और अच्छी जल निकासी वाली मिट्टी उपयुक्त है।",

    watering:
      "गर्म मौसम में नियमित सिंचाई करें।",

    sunlight:
      "खुली धूप में रखें।",

    soil:
      "उपजाऊ और अच्छी जल निकासी वाली मिट्टी रखें।",

    maintenance:
      "पौधे की शाखाओं को समय-समय पर व्यवस्थित करें।"
  },

  {
    id: "fruit_plum_satluj_purple_01",
    name: "प्लम (Plum)",
    category: "Fruit",
    category_hi: "फलदार पौधे",
    variety: "Satluj Purple / Alucha / Punjab Beauty",

    image: "images/plum.jpg",
    images: [],

    mature_image: "images/mature-plum.jpg",

    guide_link: "qr/plum.html",

    short_description:
      "लोकप्रिय फलदार प्लम पौधा।",

    care_tips:
      "धूप वाली जगह और नियमित सिंचाई रखें।",

    watering:
      "मिट्टी सूखने से पहले पानी दें।",

    sunlight:
      "अच्छी धूप आवश्यक है।",

    soil:
      "जल निकासी वाली उपजाऊ मिट्टी रखें।",

    maintenance:
      "सूखी और कमजोर शाखाओं की pruning करें।"
  },

  {
    id: "fruit_lemon_jatti_khatti_01",
    name: "नींबू (Lemon)",
    category: "Fruit",
    category_hi: "फलदार पौधे",
    variety: "Jatti Khatti",

    image: "images/lemon.jpg",
    images: [],

    mature_image: "images/mature-lemon.jpg",

    guide_link: "qr/lemon.html",

    short_description:
      "घर और बाग दोनों के लिए उपयोगी नींबू का पौधा।",

    care_tips:
      "अच्छी धूप, जल निकासी और नियमित खाद दें।",

    watering:
      "नियमित लेकिन नियंत्रित सिंचाई करें।",

    sunlight:
      "5-6 घंटे धूप दें।",

    soil:
      "हल्की एवं अच्छी जल निकासी वाली मिट्टी उपयुक्त है।",

    maintenance:
      "समय-समय पर pruning और खाद दें।"
  },

  {
    id: "fruit_malta_blood_red_01",
    name: "माल्टा (Malta Blood Red)",
    category: "Fruit",
    category_hi: "फलदार पौधे",
    variety: "Blood Red",

    image: "images/malta.jpg",
    images: [],

    mature_image: "images/mature-malta.jpg",

    guide_link: "qr/malta.html",

    short_description:
      "फलदार बागवानी के लिए लोकप्रिय माल्टा पौधा।",

    care_tips:
      "पूरी धूप और नियमित पानी आवश्यक है।",

    watering:
      "मौसम के अनुसार नियमित पानी दें।",

    sunlight:
      "खुली धूप में रखें।",

    soil:
      "अच्छी जल निकासी वाली मिट्टी रखें।",

    maintenance:
      "समय-समय पर खाद और pruning करें।"
  },

  {
    id: "fruit_pear_punjab_nakh_01",
    name: "नाशपाती / नाख (Pear)",
    category: "Fruit",
    category_hi: "फलदार पौधे",
    variety: "Punjab Nakh / Patharnakh / Nijisiki / Kainth Rootstock",

    image: "images/pear.jpg",
    images: [],

    mature_image: "images/mature-pear.jpg",

    guide_link: "qr/pear.html",

    short_description:
      "फलदार बाग के लिए नाशपाती की लोकप्रिय किस्मों का पौधा।",

    care_tips:
      "अच्छी धूप और उपयुक्त जल निकासी वाली मिट्टी रखें।",

    watering:
      "नियमित सिंचाई करें।",

    sunlight:
      "अच्छी धूप जरूरी है।",

    soil:
      "उपजाऊ और अच्छी जल निकासी वाली मिट्टी।",

    maintenance:
      "पेड़ की संरचना बनाए रखने के लिए pruning करें।"
  },

  {
    id: "fruit_grape_01",
    name: "अंगूर (Grape)",
    category: "Fruit",
    category_hi: "फलदार पौधे",
    variety: "Grape",

    image: "images/grape.jpg",
    images: [],

    mature_image: "images/mature-grape.jpg",

    guide_link: "qr/grape.html",

    short_description:
      "बेल के रूप में विकसित होने वाला फलदार पौधा।",

    care_tips:
      "अंगूर की बेल को सहारा और पर्याप्त धूप दें।",

    watering:
      "नियमित नियंत्रित सिंचाई करें।",

    sunlight:
      "खुली धूप में रखें।",

    soil:
      "अच्छी जल निकासी वाली मिट्टी रखें।",

    maintenance:
      "बेल को सहारा देकर समय-समय पर pruning करें।"
  },

  {
    id: "fruit_kinnow_01",
    name: "किन्नू (Kinnow)",
    category: "Fruit",
    category_hi: "फलदार पौधे",
    variety: "Kinnow",

    image: "images/kinnow.jpg",
    images: [],

    mature_image: "images/mature-kinnow.jpg",

    guide_link: "qr/kinnow.html",

    short_description:
      "उत्तर भारत में लोकप्रिय citrus fruit plant।",

    care_tips:
      "धूप और नियमित सिंचाई के साथ जैविक खाद दें।",

    watering:
      "नियमित सिंचाई करें।",

    sunlight:
      "पूरी धूप उपयुक्त है।",

    soil:
      "अच्छी जल निकासी वाली मिट्टी रखें।",

    maintenance:
      "खाद एवं pruning समय पर करें।"
  },

  {
    id: "fruit_mosambi_01",
    name: "मौसमी (Mosambi / Sweet Lime)",
    category: "Fruit",
    category_hi: "फलदार पौधे",
    variety: "Sweet Lime",

    image: "images/mosambi.jpg",
    images: [],

    mature_image: "images/mature-mosambi.jpg",

    guide_link: "qr/mosambi.html",

    short_description:
      "मीठे citrus फल के लिए उपयोगी मौसमी पौधा।",

    care_tips:
      "पूरी धूप और अच्छी जल निकासी आवश्यक है।",

    watering:
      "मिट्टी की स्थिति देखकर नियमित पानी दें।",

    sunlight:
      "5-6 घंटे धूप दें।",

    soil:
      "उपजाऊ और जल निकासी वाली मिट्टी रखें।",

    maintenance:
      "समय-समय पर खाद एवं pruning करें।"
  },

  {
    id: "fruit_lychee_01",
    name: "लीची (Lychee)",
    category: "Fruit",
    category_hi: "फलदार पौधे",
    variety: "Lychee",

    image: "images/lychee.jpg",
    images: [],

    mature_image: "images/mature-lychee.jpg",

    guide_link: "qr/lychee.html",

    short_description:
      "गर्म मौसम और पर्याप्त नमी पसंद करने वाला फलदार पौधा।",

    care_tips:
      "नियमित पानी और गर्म मौसम में पर्याप्त नमी रखें।",

    watering:
      "मिट्टी सूखने न दें।",

    sunlight:
      "अच्छी रोशनी वाली जगह रखें।",

    soil:
      "उपजाऊ एवं अच्छी जल निकासी वाली मिट्टी।",

    maintenance:
      "समय-समय पर खाद और pruning करें।"
  },

  {
    id: "fruit_mango_ambika_lalima_01",
    name: "आम (Mango)",
    category: "Fruit",
    category_hi: "फलदार पौधे",
    variety: "Ambika / Lalima",

    image: "images/mango.jpg",
    images: [],

    mature_image: "images/mature-mango.jpg",

    guide_link: "qr/mango.html",

    short_description:
      "घर और commercial orchard दोनों के लिए लोकप्रिय फलदार पौधा।",

    care_tips:
      "आम के पौधे को खुली धूप और पर्याप्त जगह दें।",

    watering:
      "शुरुआती अवस्था में नियमित पानी दें।",

    sunlight:
      "पूरी धूप उपयुक्त है।",

    soil:
      "गहरी एवं अच्छी जल निकासी वाली मिट्टी रखें।",

    maintenance:
      "पेड़ की शाखाओं को सही आकार देने के लिए pruning करें।"
  },

  {
    id: "fruit_jamun_01",
    name: "जामुन (Jamun)",
    category: "Fruit",
    category_hi: "फलदार पौधे",
    variety: "Jamun",

    image: "images/jamun.jpg",
    images: [],

    mature_image: "images/mature-jamun.jpg",

    guide_link: "qr/jamun.html",

    short_description:
      "मजबूत एवं लंबे समय तक रहने वाला फलदार पौधा।",

    care_tips:
      "धूप में रखें और शुरुआती अवस्था में नियमित सिंचाई करें।",

    watering:
      "नियमित पानी दें।",

    sunlight:
      "खुली धूप उपयुक्त है।",

    soil:
      "अच्छी जल निकासी वाली मिट्टी रखें।",

    maintenance:
      "शुरुआती वर्षों में आकार के अनुसार pruning करें।"
  },

  {
    id: "fruit_apple_golden_anna_01",
    name: "सेब (Apple)",
    category: "Fruit",
    category_hi: "फलदार पौधे",
    variety: "Golden / Anna",

    image: "images/apple.jpg",
    images: [],

    mature_image: "images/mature-apple.jpg",

    guide_link: "qr/apple.html",

    short_description:
      "उपयुक्त क्षेत्र में बागवानी के लिए सेब का पौधा।",

    care_tips:
      "उपयुक्त जलवायु, धूप और अच्छी जल निकासी वाली मिट्टी रखें।",

    watering:
      "मौसम और मिट्टी के अनुसार पानी दें।",

    sunlight:
      "पर्याप्त धूप आवश्यक है।",

    soil:
      "उपजाऊ और अच्छी जल निकासी वाली मिट्टी।",

    maintenance:
      "पेड़ की संरचना के लिए नियमित pruning करें।"
  },

  /* ==========================================================
     INDOOR
     ========================================================== */

  {
    id: "indoor_money_plant_01",
    name: "मनी प्लांट (Money Plant)",
    category: "Indoor",
    category_hi: "इंडोर प्लांट्स",
    variety: "Golden Pothos",

    image: "images/money-plant.jpg",
    images: [],

    mature_image: "images/mature-money-plant.jpg",

    guide_link: "qr/money-plant.html",

    short_description:
      "घर, ऑफिस और indoor decoration के लिए लोकप्रिय पौधा।",

    care_tips:
      "हल्की रोशनी में रखें और मिट्टी पूरी तरह सूखने न दें।",

    watering:
      "कम से मध्यम पानी दें।",

    sunlight:
      "ब्राइट indirect light बेहतर है।",

    soil:
      "हल्की एवं अच्छी drainage वाली मिट्टी।",

    maintenance:
      "लंबी बेल को समय-समय पर trim करें।"
  },

  {
    id: "indoor_syngonium_01",
    name: "सिंगोनियम (Syngonium)",
    category: "Indoor",
    category_hi: "इंडोर प्लांट्स",
    variety: "Syngonium",

    image: "images/syngonium.jpg",
    images: [],

    mature_image: "images/mature-syngonium.jpg",

    guide_link: "qr/syngonium.html",

    short_description:
      "सुंदर पत्तियों वाला indoor foliage plant।",

    care_tips:
      "तेज़ सीधी धूप से बचाएं और हल्की नमी रखें।",

    watering:
      "मध्यम पानी दें।",

    sunlight:
      "Indirect bright light रखें।",

    soil:
      "हल्की और drainage वाली मिट्टी।",

    maintenance:
      "पुरानी पत्तियां हटाते रहें।"
  },

  {
    id: "indoor_snake_plant_01",
    name: "स्नेक प्लांट (Snake Plant)",
    category: "Indoor",
    category_hi: "इंडोर प्लांट्स",
    variety: "Snake Plant",

    image: "images/snake-plant.jpg",
    images: [],

    mature_image: "images/mature-snake-plant.jpg",

    guide_link: "qr/snake-plant.html",

    short_description:
      "कम देखभाल में अच्छा रहने वाला लोकप्रिय indoor plant।",

    care_tips:
      "कम पानी में भी अच्छा रहता है। तेज़ सीधी धूप से बचाएं।",

    watering:
      "मिट्टी सूखने के बाद ही पानी दें।",

    sunlight:
      "कम से मध्यम indirect light।",

    soil:
      "जल निकासी बहुत अच्छी होनी चाहिए।",

    maintenance:
      "सड़ी या खराब पत्तियां हटा दें।"
  },

  {
    id: "indoor_schefflera_01",
    name: "शेफलेरा (Schefflera)",
    category: "Indoor",
    category_hi: "इंडोर प्लांट्स",
    variety: "Schefflera",

    image: "images/schefflera.jpg",
    images: [],

    mature_image: "images/mature-schefflera.jpg",

    guide_link: "qr/schefflera.html",

    short_description:
      "सुंदर foliage वाला decorative indoor plant।",

    care_tips:
      "ब्राइट इनडायरेक्ट लाइट और मध्यम पानी दें।",

    watering:
      "मिट्टी की ऊपरी परत सूखने पर पानी दें।",

    sunlight:
      "ब्राइट indirect light।",

    soil:
      "अच्छी drainage वाली potting mix।",

    maintenance:
      "आकार बनाए रखने के लिए pruning करें।"
  },

  {
    id: "indoor_shade_collection_01",
    name: "अन्य छायादार इंडोर पौधे",
    category: "Indoor",
    category_hi: "इंडोर प्लांट्स",
    variety: "Shade House Collection",

    image: "images/indoor-collection.jpg",
    images: [],

    mature_image: "images/mature-indoor-collection.jpg",

    guide_link: "qr/indoor-collection.html",

    short_description:
      "कम रोशनी वाली जगहों के लिए nursery indoor collection।",

    care_tips:
      "शेड-नेट या घर के अंदर पर्याप्त रोशनी वाली जगह रखें।",

    watering:
      "मध्यम मात्रा में पानी दें।",

    sunlight:
      "Indirect light उपयुक्त है।",

    soil:
      "हल्की और drainage वाली मिट्टी।",

    maintenance:
      "पत्तियों की सफाई और सूखी पत्तियों को हटाते रहें।"
  },

  /* ==========================================================
     OUTDOOR
     ========================================================== */

  {
    id: "outdoor_tecoma_01",
    name: "टिकोमा (Tecoma)",
    category: "Outdoor",
    category_hi: "आउटडोर प्लांट्स",
    variety: "Tecoma",

    image: "images/tecoma.jpg",
    images: [],

    mature_image: "images/mature-tecoma.jpg",

    guide_link: "qr/tecoma.html",

    short_description:
      "Outdoor landscape और flowering के लिए उपयोगी पौधा।",

    care_tips:
      "पूरी धूप और नियमित कटाई-छंटाई से अच्छा विकास होता है।",

    watering:
      "नियमित सिंचाई करें।",

    sunlight:
      "पूरी धूप।",

    soil:
      "अच्छी drainage वाली मिट्टी।",

    maintenance:
      "नियमित pruning करें।"
  },

  {
    id: "outdoor_jade_01",
    name: "जेड प्लांट (Jade Plant)",
    category: "Outdoor",
    category_hi: "आउटडोर प्लांट्स",
    variety: "Jade",

    image: "images/jade.jpg",
    images: [],

    mature_image: "images/mature-jade.jpg",

    guide_link: "qr/jade.html",

    short_description:
      "सुंदर और कम पानी में रहने वाला decorative plant।",

    care_tips:
      "धूप वाली जगह और सीमित पानी रखें।",

    watering:
      "मिट्टी सूखने के बाद पानी दें।",

    sunlight:
      "अच्छी रोशनी।",

    soil:
      "बहुत अच्छी drainage वाली मिट्टी।",

    maintenance:
      "अधिक बढ़ी शाखाओं को trim करें।"
  },

  {
    id: "outdoor_hedge_collection_01",
    name: "आउटडोर झाड़ियाँ एवं हेज प्लांट्स",
    category: "Outdoor",
    category_hi: "आउटडोर प्लांट्स",
    variety: "Hedge Plant Collection",

    image: "images/hedge-plants.jpg",
    images: [],

    mature_image: "images/mature-hedge-plants.jpg",

    guide_link: "qr/hedge-plants.html",

    short_description:
      "Garden boundary, hedge और landscaping के लिए पौधों का collection।",

    care_tips:
      "हेज के लिए नियमित सिंचाई और आकार के अनुसार कटाई करें।",

    watering:
      "नियमित सिंचाई करें।",

    sunlight:
      "अधिकांश outdoor varieties के लिए पूरी धूप।",

    soil:
      "उपजाऊ एवं अच्छी drainage वाली मिट्टी।",

    maintenance:
      "Shape बनाए रखने के लिए नियमित trimming करें।"
  },

  /* ==========================================================
     FLOWERING
     ========================================================== */

  {
    id: "flowering_hibiscus_01",
    name: "गुड़हल (Hibiscus)",
    category: "Flowering",
    category_hi: "फूलों के पौधे",
    variety: "सफेद एवं अन्य रंग",

    image: "images/hibiscus.jpg",
    images: [],

    mature_image: "images/mature-hibiscus.jpg",

    guide_link: "qr/hibiscus.html",

    short_description:
      "सुंदर फूलों वाला लोकप्रिय garden plant।",

    care_tips:
      "सुबह की धूप और नियमित पानी दें। मुरझाए फूल हटाते रहें।",

    watering:
      "नियमित पानी दें।",

    sunlight:
      "सुबह की धूप बेहतर है।",

    soil:
      "उपजाऊ और drainage वाली मिट्टी।",

    maintenance:
      "सूखे फूल और शाखाएं हटाएं।"
  },

  {
    id: "flowering_perennial_collection_01",
    name: "बारहमासी फूल वाले पौधे",
    category: "Flowering",
    category_hi: "फूलों के पौधे",
    variety: "Perennial Collection",

    image: "images/perennial-flowers.jpg",
    images: [],

    mature_image: "images/mature-perennial-flowers.jpg",

    guide_link: "qr/perennial-flowers.html",

    short_description:
      "लंबे समय तक garden में फूल देने वाला collection।",

    care_tips:
      "धूप, खाद और नियमित सिंचाई से अच्छी फूलिंग मिलती है।",

    watering:
      "नियमित सिंचाई।",

    sunlight:
      "अच्छी धूप।",

    soil:
      "उपजाऊ soil mix।",

    maintenance:
      "सूखे फूल हटाते रहें।"
  },

  {
    id: "flowering_seasonal_collection_01",
    name: "मौसमी फूल वाले पौधे",
    category: "Flowering",
    category_hi: "फूलों के पौधे",
    variety: "Seasonal Collection",

    image: "images/seasonal-flowers.jpg",
    images: [],

    mature_image: "images/mature-seasonal-flowers.jpg",

    guide_link: "qr/seasonal-flowers.html",

    short_description:
      "मौसम के अनुसार उपलब्ध आकर्षक flowering plants।",

    care_tips:
      "मौसम के अनुसार धूप, पानी और खाद दें।",

    watering:
      "मिट्टी की स्थिति देखकर पानी दें।",

    sunlight:
      "अधिकांश varieties को अच्छी धूप चाहिए।",

    soil:
      "उपजाऊ और drainage वाली मिट्टी।",

    maintenance:
      "सूखे फूल हटाते रहें।"
  },

  /* ==========================================================
     DECORATIVE
     ========================================================== */

  {
    id: "decorative_croton_01",
    name: "क्रोटन (Croton)",
    category: "Decorative",
    category_hi: "डेकोरेटिव एवं फॉलिएज पौधे",
    variety: "Croton",

    image: "images/croton.jpg",
    images: [],

    mature_image: "images/mature-croton.jpg",

    guide_link: "qr/croton.html",

    short_description:
      "रंगीन पत्तियों वाला premium decorative foliage plant।",

    care_tips:
      "ब्राइट लाइट में रखें और मिट्टी में हल्की नमी बनाए रखें।",

    watering:
      "मध्यम पानी दें।",

    sunlight:
      "ब्राइट indirect या filtered light।",

    soil:
      "अच्छी drainage वाली मिट्टी।",

    maintenance:
      "सूखी पत्तियां हटाते रहें।"
  },

  {
    id: "decorative_dracaena_01",
    name: "ड्रैकैना (Dracaena)",
    category: "Decorative",
    category_hi: "डेकोरेटिव एवं फॉलिएज पौधे",
    variety: "Dracaena",

    image: "images/dracaena.jpg",
    images: [],

    mature_image: "images/mature-dracaena.jpg",

    guide_link: "qr/dracaena.html",

    short_description:
      "घर और ऑफिस decoration के लिए आकर्षक foliage plant।",

    care_tips:
      "इनडायरेक्ट लाइट और नियंत्रित पानी उपयुक्त है।",

    watering:
      "कम से मध्यम पानी।",

    sunlight:
      "Indirect light।",

    soil:
      "अच्छी drainage वाली मिट्टी।",

    maintenance:
      "पीली पत्तियां हटाते रहें।"
  },

  {
    id: "decorative_rubber_plant_01",
    name: "रबर प्लांट (Rubber Plant)",
    category: "Decorative",
    category_hi: "डेकोरेटिव एवं फॉलिएज पौधे",
    variety: "Rubber Plant",

    image: "images/rubber-plant.jpg",
    images: [],

    mature_image: "images/mature-rubber-plant.jpg",

    guide_link: "qr/rubber-plant.html",

    short_description:
      "बड़े चमकदार पत्तों वाला premium decorative plant।",

    care_tips:
      "ब्राइट इनडायरेक्ट लाइट और नियमित लेकिन सीमित पानी दें।",

    watering:
      "मिट्टी की ऊपरी परत सूखने पर पानी दें।",

    sunlight:
      "ब्राइट indirect light।",

    soil:
      "उपजाऊ और अच्छी drainage वाली मिट्टी।",

    maintenance:
      "पत्तियों की सफाई करते रहें।"
  },

  {
    id: "decorative_silver_bush_01",
    name: "सिल्वर बुश (Silver Bush)",
    category: "Decorative",
    category_hi: "डेकोरेटिव एवं फॉलिएज पौधे",
    variety: "Silver Bush",

    image: "images/silver-bush.jpg",
    images: [],

    mature_image: "images/mature-silver-bush.jpg",

    guide_link: "qr/silver-bush.html",

    short_description:
      "सुंदर foliage वाला decorative landscaping plant।",

    care_tips:
      "अच्छी रोशनी और उचित जल निकासी रखें।",

    watering:
      "मध्यम पानी दें।",

    sunlight:
      "अच्छी रोशनी।",

    soil:
      "अच्छी drainage वाली मिट्टी।",

    maintenance:
      "Shape बनाए रखने के लिए trimming करें।"
  },

  /* ==========================================================
     LANDSCAPING
     ========================================================== */

  {
    id: "landscape_areca_palm_01",
    name: "अरेका पाम (Areca Palm)",
    category: "Landscaping",
    category_hi: "लैंडस्केपिंग एवं पाम्स",
    variety: "Areca Palm",

    image: "images/areca-palm.jpg",
    images: [],

    mature_image: "images/mature-areca-palm.jpg",

    guide_link: "qr/areca-palm.html",

    short_description:
      "Indoor और outdoor landscaping के लिए लोकप्रिय palm।",

    care_tips:
      "उज्ज्वल रोशनी और नियमित नमी रखें।",

    watering:
      "नियमित लेकिन नियंत्रित पानी दें।",

    sunlight:
      "Filtered या bright indirect light।",

    soil:
      "अच्छी drainage वाली soil mix।",

    maintenance:
      "सूखी पत्तियां हटाते रहें।"
  },

  {
    id: "landscape_foxtail_palm_01",
    name: "फॉक्स टेल पाम (Foxtail Palm)",
    category: "Landscaping",
    category_hi: "लैंडस्केपिंग एवं पाम्स",
    variety: "Foxtail Palm",

    image: "images/foxtail-palm.jpg",
    images: [],

    mature_image: "images/mature-foxtail-palm.jpg",

    guide_link: "qr/foxtail-palm.html",

    short_description:
      "Premium landscaping और open garden के लिए palm।",

    care_tips:
      "खुली धूप और पर्याप्त जगह में लगाएं।",

    watering:
      "नियमित सिंचाई करें।",

    sunlight:
      "पूरी धूप।",

    soil:
      "अच्छी drainage वाली मिट्टी।",

    maintenance:
      "सूखी पत्तियों को हटाते रहें।"
  },

  {
    id: "landscape_fan_palm_01",
    name: "फैन पाम (Fan Palm)",
    category: "Landscaping",
    category_hi: "लैंडस्केपिंग एवं पाम्स",
    variety: "Fan Palm",

    image: "images/fan-palm.jpg",
    images: [],

    mature_image: "images/mature-fan-palm.jpg",

    guide_link: "qr/fan-palm.html",

    short_description:
      "Garden और landscaping के लिए आकर्षक palm variety।",

    care_tips:
      "पूरी धूप और अच्छी जल निकासी वाली मिट्टी रखें।",

    watering:
      "नियमित पानी दें।",

    sunlight:
      "पूरी धूप।",

    soil:
      "अच्छी drainage वाली मिट्टी।",

    maintenance:
      "पुरानी पत्तियां हटाएं।"
  },

  {
    id: "landscape_ficus_topiary_01",
    name: "फाइकस टोपियारी (Ficus Topiary)",
    category: "Landscaping",
    category_hi: "लैंडस्केपिंग एवं पाम्स",
    variety: "Topiary / Shaped Ficus",

    image: "images/ficus-topiary.jpg",
    images: [],

    mature_image: "images/mature-ficus-topiary.jpg",

    guide_link: "qr/ficus-topiary.html",

    short_description:
      "Premium landscaping और shape-based garden design के लिए पौधा।",

    care_tips:
      "आकार बनाए रखने के लिए समय-समय पर pruning करें।",

    watering:
      "मध्यम पानी दें।",

    sunlight:
      "अच्छी रोशनी।",

    soil:
      "उपजाऊ एवं drainage वाली मिट्टी।",

    maintenance:
      "Regular topiary pruning आवश्यक है।"
  },

  {
    id: "landscape_thuja_01",
    name: "थूजा / कॉनिफर (Thuja)",
    category: "Landscaping",
    category_hi: "लैंडस्केपिंग एवं कॉनिफर्स",
    variety: "Thuja / Conifers",

    image: "images/thuja.jpg",
    images: [],

    mature_image: "images/mature-thuja.jpg",

    guide_link: "qr/thuja.html",

    short_description:
      "Boundary, garden design और landscaping के लिए उपयोगी conifer।",

    care_tips:
      "खुली हवा, उचित धूप और अच्छी जल निकासी रखें।",

    watering:
      "नियमित लेकिन नियंत्रित सिंचाई।",

    sunlight:
      "अच्छी धूप।",

    soil:
      "अच्छी drainage वाली मिट्टी।",

    maintenance:
      "Shape के अनुसार pruning करें।"
  },

  {
    id: "landscape_christmas_tree_01",
    name: "क्रिसमस ट्री (Christmas Tree)",
    category: "Landscaping",
    category_hi: "लैंडस्केपिंग एवं कॉनिफर्स",
    variety: "Christmas Tree",

    image: "images/christmas-tree.jpg",
    images: [],

    mature_image: "images/mature-christmas-tree.jpg",

    guide_link: "qr/christmas-tree.html",

    short_description:
      "Decorative landscaping और festive plantation के लिए पौधा।",

    care_tips:
      "उचित रोशनी और नियंत्रित सिंचाई रखें।",

    watering:
      "मध्यम पानी दें।",

    sunlight:
      "उचित प्राकृतिक रोशनी।",

    soil:
      "अच्छी drainage वाली मिट्टी।",

    maintenance:
      "सूखी शाखाएं हटाते रहें।"
  },

  {
    id: "landscape_saplings_01",
    name: "नर्सरी सैपलिंग्स एवं छोटे पौधे",
    category: "Landscaping",
    category_hi: "नर्सरी सैपलिंग्स",
    variety: "Saplings / Nursery Beds",

    image: "images/saplings.jpg",
    images: [],

    mature_image: "images/mature-saplings.jpg",

    guide_link: "qr/saplings.html",

    short_description:
      "छोटे पौधों और nursery saplings का collection।",

    care_tips:
      "छोटे पौधों को नियमित सिंचाई और धीरे-धीरे धूप की आदत डालें।",

    watering:
      "मिट्टी सूखने न दें।",

    sunlight:
      "धीरे-धीरे full sunlight की आदत डालें।",

    soil:
      "हल्की और पोषक मिट्टी।",

    maintenance:
      "शुरुआती अवस्था में विशेष देखभाल करें।"
  },

  /* ==========================================================
     MEDICINAL / OTHER
     ========================================================== */

  {
    id: "medicinal_tulsi_01",
    name: "तुलसी (Tulsi)",
    category: "Medicinal",
    category_hi: "औषधीय एवं अन्य पौधे",
    variety: "Tulsi",

    image: "images/tulsi.jpg",
    images: [],

    mature_image: "images/mature-tulsi.jpg",

    guide_link: "qr/tulsi.html",

    short_description:
      "घर और आंगन के लिए लोकप्रिय aromatic plant।",

    care_tips:
      "धूप वाली जगह और नियमित लेकिन नियंत्रित पानी दें।",

    watering:
      "नियमित हल्का पानी दें।",

    sunlight:
      "अच्छी धूप।",

    soil:
      "उपजाऊ और drainage वाली मिट्टी।",

    maintenance:
      "ऊपर की बढ़त को समय-समय पर pinch करें।"
  },

  {
    id: "medicinal_aloe_vera_01",
    name: "एलोवेरा (Aloe Vera)",
    category: "Medicinal",
    category_hi: "औषधीय एवं अन्य पौधे",
    variety: "Aloe Vera",

    image: "images/aloe-vera.jpg",
    images: [],

    mature_image: "images/mature-aloe-vera.jpg",

    guide_link: "qr/aloe-vera.html",

    short_description:
      "कम देखभाल में आसानी से बढ़ने वाला succulent plant।",

    care_tips:
      "कम पानी दें और जल निकासी अच्छी रखें।",

    watering:
      "मिट्टी पूरी तरह सूखने के बाद पानी दें।",

    sunlight:
      "हल्की से मध्यम धूप।",

    soil:
      "बहुत अच्छी drainage वाली soil।",

    maintenance:
      "सड़ी या खराब पत्तियां हटा दें।"
  },

  {
    id: "other_curry_leaf_01",
    name: "करी पत्ता (Curry Leaf)",
    category: "Medicinal",
    category_hi: "औषधीय एवं अन्य पौधे",
    variety: "Curry Leaf",

    image: "images/curry-leaf.jpg",
    images: [],

    mature_image: "images/mature-curry-leaf.jpg",

    guide_link: "qr/curry-leaf.html",

    short_description:
      "घर के kitchen garden के लिए उपयोगी पौधा।",

    care_tips:
      "धूप और नियमित सिंचाई के साथ जैविक खाद दें।",

    watering:
      "नियमित सिंचाई करें।",

    sunlight:
      "अच्छी धूप।",

    soil:
      "उपजाऊ और drainage वाली मिट्टी।",

    maintenance:
      "नई शाखाओं की growth के लिए हल्की pruning करें।"
  },

  {
    id: "other_lemongrass_01",
    name: "लेमन ग्रास (Lemongrass)",
    category: "Medicinal",
    category_hi: "औषधीय एवं अन्य पौधे",
    variety: "Lemongrass",

    image: "images/lemongrass.jpg",
    images: [],

    mature_image: "images/mature-lemongrass.jpg",

    guide_link: "qr/lemongrass.html",

    short_description:
      "सुगंधित और तेजी से बढ़ने वाला उपयोगी पौधा।",

    care_tips:
      "धूप और नियमित पानी में तेजी से बढ़ता है।",

    watering:
      "नियमित पानी दें।",

    sunlight:
      "पूरी धूप।",

    soil:
      "अच्छी drainage वाली मिट्टी।",

    maintenance:
      "पुरानी पत्तियां समय-समय पर काटें।"
  }

];

/* ============================================================
   NORMALIZE PLANT
   ------------------------------------------------------------
   पुराने data और नए data दोनों को compatible रखता है।
   ============================================================ */

function normalizePlant(plant = {}) {

  const normalizedImages =
    Array.isArray(plant.images)
      ? plant.images.filter(Boolean).map(String)
      : [];

  const primaryImage =
    String(
      plant.image ||
      plant.imageUrl ||
      normalizedImages[0] ||
      ""
    );

  return {

    id: String(
      plant.id ||
      `plant-${Date.now()}-${Math.random()
        .toString(36)
        .slice(2, 9)}`
    ),

    name: String(
      plant.name ||
      "Unnamed Plant"
    ),

    category: String(
      plant.category ||
      "Medicinal"
    ),

    category_hi: String(
      plant.category_hi ||
      ""
    ),

    variety: String(
      plant.variety ||
      ""
    ),

    /* Main image */
    image: primaryImage,

    /* Additional images */
    images: normalizedImages,

    /* Mature plant image */
    mature_image: String(
      plant.mature_image ||
      plant.matureImage ||
      ""
    ),

    /* Guide / QR page */
    guide_link: String(
      plant.guide_link ||
      plant.guideLink ||
      ""
    ),

    /* Customer-facing details */
    short_description: String(
      plant.short_description ||
      plant.description ||
      ""
    ),

    care_tips: String(
      plant.care_tips ||
      plant.tips ||
      "इस पौधे की उचित धूप, पानी और देखभाल करें।"
    ),

    watering: String(
      plant.watering ||
      "मिट्टी की नमी के अनुसार पानी दें।"
    ),

    sunlight: String(
      plant.sunlight ||
      "पौधे की आवश्यकता के अनुसार पर्याप्त रोशनी दें।"
    ),

    soil: String(
      plant.soil ||
      "अच्छी जल निकासी वाली मिट्टी रखें।"
    ),

    maintenance: String(
      plant.maintenance ||
      "समय-समय पर पौधे की सफाई और pruning करें।"
    ),

    /* Availability */
    stock:
      plant.stock !== false,

    /* Optional quantity */
    quantity:
      Number.isFinite(Number(plant.quantity))
        ? Number(plant.quantity)
        : 0,

    /* Optional price */
    price:
      Number.isFinite(Number(plant.price))
        ? Number(plant.price)
        : 0,

    /* Social counters */
    likes:
      Number(plant.likes || 0),

    shares:
      Number(plant.shares || 0),

    /* Admin timestamps */
    createdAt:
      plant.createdAt ||
      new Date().toISOString(),

    updatedAt:
      new Date().toISOString()
  };
}

/* ============================================================
   DEFAULT CATALOG
   ============================================================ */

function getDefaultCatalog() {
  return DEFAULT_PLANTS.map(
    normalizePlant
  );
}

/* ============================================================
   LOAD PLANTS
   ============================================================ */

export async function loadPlants() {

  try {

    const saved =
      localStorage.getItem(
        STORAGE_KEY
      );

    if (!saved) {
      return getDefaultCatalog();
    }

    const parsed =
      JSON.parse(saved);

    if (
      !Array.isArray(parsed) ||
      parsed.length === 0
    ) {
      return getDefaultCatalog();
    }

    return parsed.map(
      normalizePlant
    );

  } catch (error) {

    console.error(
      "Unable to load plant catalog:",
      error
    );

    return getDefaultCatalog();
  }
}

/* ============================================================
   GET ALL PLANTS
   ============================================================ */

export function getPlants() {

  try {

    const saved =
      localStorage.getItem(
        STORAGE_KEY
      );

    if (!saved) {
      return getDefaultCatalog();
    }

    const parsed =
      JSON.parse(saved);

    if (
      !Array.isArray(parsed) ||
      parsed.length === 0
    ) {
      return getDefaultCatalog();
    }

    return parsed.map(
      normalizePlant
    );

  } catch (error) {

    console.error(
      "Unable to read plants:",
      error
    );

    return getDefaultCatalog();
  }
}

/* ============================================================
   SAVE ALL PLANTS
   ============================================================ */

export function savePlants(
  plants = []
) {

  try {

    const cleanPlants =
      Array.isArray(plants)
        ? plants.map(
            normalizePlant
          )
        : [];

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(cleanPlants)
    );

    return cleanPlants;

  } catch (error) {

    console.error(
      "Unable to save plants:",
      error
    );

    return [];
  }
}

/* ============================================================
   ADD PLANT
   ============================================================ */

export function addPlant(
  plant = {}
) {

  const plants =
    getPlants();

  const newPlant =
    normalizePlant({
      ...plant,

      id:
        plant.id ||
        `plant-${Date.now()}-${Math.random()
          .toString(36)
          .slice(2, 8)}`
    });

  plants.push(
    newPlant
  );

  savePlants(
    plants
  );

  return newPlant;
}

/* ============================================================
   UPDATE PLANT
   ============================================================ */

export function updatePlant(
  id,
  changes = {}
) {

  const plants =
    getPlants();

  const index =
    plants.findIndex(
      plant =>
        String(plant.id) ===
        String(id)
    );

  if (index === -1) {
    return null;
  }

  plants[index] =
    normalizePlant({
      ...plants[index],
      ...changes,

      id:
        plants[index].id,

      createdAt:
        plants[index].createdAt
    });

  savePlants(
    plants
  );

  return plants[index];
}

/* ============================================================
   DELETE PLANT
   ============================================================ */

export function deletePlant(
  id
) {

  const plants =
    getPlants();

  const updated =
    plants.filter(
      plant =>
        String(plant.id) !==
        String(id)
    );

  savePlants(
    updated
  );

  return updated;
}

/* ============================================================
   GET SINGLE PLANT
   ============================================================ */

export function getPlantById(
  id
) {

  if (
    id === null ||
    id === undefined
  ) {
    return null;
  }

  return (
    getPlants().find(
      plant =>
        String(plant.id) ===
        String(id)
    ) ||
    null
  );
}

/* ============================================================
   CATEGORY FILTER
   ============================================================ */

export function getPlantsByCategory(
  category
) {

  const plants =
    getPlants();

  if (
    !category ||
    category === "All" ||
    category === "all"
  ) {
    return plants;
  }

  return plants.filter(
    plant =>
      String(
        plant.category
      ).toLowerCase() ===
      String(
        category
      ).toLowerCase()
  );
}

/* ============================================================
   CATEGORY LABEL
   ============================================================ */

export function getCategoryLabel(
  category
) {

  const found =
    PLANT_CATEGORIES.find(
      item =>
        String(
          item.value
        ).toLowerCase() ===
        String(
          category
        ).toLowerCase()
    );

  return found
    ? found.label
    : "🌱 अन्य पौधे";
}

/* ============================================================
   AVAILABILITY LABEL
   ============================================================ */

export function getAvailabilityLabel(
  plant = null
) {

  if (
    plant &&
    plant.stock === false
  ) {
    return "🔴 उपलब्ध नहीं";
  }

  if (
    plant &&
    Number(plant.quantity) <= 0 &&
    plant.quantity !== undefined &&
    plant.quantity !== null
  ) {
    return "🟠 स्टॉक चेक करें";
  }

  return "🟢 उपलब्ध";
}

/* ============================================================
   SEARCH
   ============================================================ */

export function searchPlants(
  query
) {

  const text =
    String(
      query || ""
    )
      .trim()
      .toLowerCase();

  if (!text) {
    return getPlants();
  }

  return getPlants().filter(
    plant =>
      [
        plant.name,
        plant.category,
        plant.category_hi,
        plant.variety,
        plant.short_description,
        plant.care_tips
      ].some(
        value =>
          String(
            value || ""
          )
            .toLowerCase()
            .includes(text)
      )
  );
}

/* ============================================================
   LIKE PLANT
   ============================================================ */

export function likePlant(
  id
) {

  const plants =
    getPlants();

  const plant =
    plants.find(
      item =>
        String(item.id) ===
        String(id)
    );

  if (!plant) {
    return null;
  }

  plant.likes =
    Number(
      plant.likes || 0
    ) + 1;

  savePlants(
    plants
  );

  return plant.likes;
}

/* ============================================================
   SHARE PLANT
   ============================================================ */

export async function sharePlant(
  plant
) {

  if (!plant) {
    return false;
  }

  const url =
    `${window.location.origin}${window.location.pathname.replace(/[^/]*$/, "")}plant.html?id=${encodeURIComponent(plant.id)}`;

  const shareData = {

    title:
      plant.name,

    text:
      `${plant.name}\n` +
      `${plant.variety || ""}\n` +
      `🌿 Shri Ram Nursery, Bhuna`,

    url
  };

  try {

    if (
      navigator.share
    ) {

      await navigator.share(
        shareData
      );

      const plants =
        getPlants();

      const current =
        plants.find(
          item =>
            String(item.id) ===
            String(plant.id)
        );

      if (current) {

        current.shares =
          Number(
            current.shares || 0
          ) + 1;

        savePlants(
          plants
        );
      }

      return true;
    }

    if (
      navigator.clipboard
    ) {

      await navigator.clipboard.writeText(
        url
      );

      return true;
    }

    return false;

  } catch (error) {

    console.log(
      "Share cancelled or unavailable."
    );

    return false;
  }
}

/* ============================================================
   ADD PLANT IMAGE
   ------------------------------------------------------------
   Admin panel इस फंक्शन का उपयोग करके अतिरिक्त फोटो जोड़
   सकता है।
   ============================================================ */

export function addPlantImage(
  id,
  imageUrl
) {

  const plant =
    getPlantById(id);

  if (
    !plant ||
    !imageUrl
  ) {
    return null;
  }

  const images =
    Array.isArray(plant.images)
      ? [...plant.images]
      : [];

  if (
    !images.includes(imageUrl)
  ) {
    images.push(
      imageUrl
    );
  }

  if (!plant.image) {
    plant.image =
      imageUrl;
  }

  return updatePlant(
    id,
    {
      image:
        plant.image,

      images
    }
  );
}

/* ============================================================
   REMOVE PLANT IMAGE
   ============================================================ */

export function removePlantImage(
  id,
  imageUrl
) {

  const plant =
    getPlantById(id);

  if (!plant) {
    return null;
  }

  const images =
    Array.isArray(plant.images)
      ? plant.images.filter(
          image =>
            image !== imageUrl
        )
      : [];

  let mainImage =
    plant.image;

  if (
    mainImage === imageUrl
  ) {
    mainImage =
      images[0] || "";
  }

  return updatePlant(
    id,
    {
      image:
        mainImage,

      images
    }
  );
}

/* ============================================================
   SET MAIN IMAGE
   ============================================================ */

export function setPlantMainImage(
  id,
  imageUrl
) {

  const plant =
    getPlantById(id);

  if (
    !plant ||
    !imageUrl
  ) {
    return null;
  }

  const images =
    Array.isArray(plant.images)
      ? [...plant.images]
      : [];

  if (
    !images.includes(imageUrl)
  ) {
    images.unshift(
      imageUrl
    );
  }

  return updatePlant(
    id,
    {
      image:
        imageUrl,

      images
    }
  );
}

/* ============================================================
   RESET CATALOG
   ============================================================ */

export function resetPlants() {

  const freshCatalog =
    getDefaultCatalog();

  savePlants(
    freshCatalog
  );

  return freshCatalog;
}

/* ============================================================
   EXPORT MASTER DATA
   ============================================================ */

export {
  DEFAULT_PLANTS
};
