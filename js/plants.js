// js/plants.js

const STORAGE_KEY = "shri_ram_nursery_plants_v3";

export const translations = {
  hi: {
    brand: "श्री राम नर्सरी (भुना)",
    tagline: "श्री राम नर्सरी - भुना (फतेहाबाद, हरियाणा)",
    home: "होम",
    plants: "पौधे देखें",
    order: "ऑर्डर करें",
    admin: "एडमिन पैनल",
    searchPlaceholder: "🔍 पौधे का नाम या वैरायटी खोजें...",
    allCategories: "सभी Categories",
    fruitPlants: "🍎 फलदार पौधे",
    indoorPlants: "🪴 इंडोर प्लांट्स",
    outdoorPlants: "🌳 आउटडोर प्लांट्स",
    floweringPlants: "🌺 फूलों के पौधे",
    decorative: "🌿 डेकोरेटिव",
    landscaping: "🌴 लैंडस्केपिंग",
    medicinal: "🌱 औषधीय",
    careTips: "देखभाल की टिप्स",
    plantingGuide: "लगाने की विधि",
    stockAvailable: "🟢 उपलब्ध",
    stockOut: "🔴 अनुपलब्ध",
    whatsappOrder: "🟢 WhatsApp पर Order करें",
    offlineNotice: "⚠️ आप अभी ऑफलाइन मोड में हैं। डेटा आपके फोन से दिखाया जा रहा है।"
  },
  en: {
    brand: "Shri Ram Nursery (Bhuna)",
    tagline: "Shri Ram Nursery - Bhuna (Fatehabad, Haryana)",
    home: "Home",
    plants: "View Plants",
    order: "Plant Order",
    admin: "Admin Panel",
    searchPlaceholder: "🔍 Search plant name or variety...",
    allCategories: "All Categories",
    fruitPlants: "🍎 Fruit Plants",
    indoorPlants: "🪴 Indoor Plants",
    outdoorPlants: "🌳 Outdoor Plants",
    floweringPlants: "🌺 Flowering Plants",
    decorative: "🌿 Decorative",
    landscaping: "🌴 Landscaping",
    medicinal: "🌱 Medicinal",
    careTips: "Care Tips",
    plantingGuide: "Planting Guide",
    stockAvailable: "🟢 Available",
    stockOut: "🔴 Out of Stock",
    whatsappOrder: "🟢 Order via WhatsApp",
    offlineNotice: "⚠️ You are currently in offline mode. Data is loaded from your device."
  },
  pa: {
    brand: "ਸ਼੍ਰੀ ਰਾਮ ਨਰਸਰੀ (ਭੁਨਾ)",
    tagline: "ਸ਼੍ਰੀ ਰਾਮ ਨਰਸਰੀ - ਭੁਨਾ",
    home: "ਹੋਮ",
    plants: "ਪੌਦੇ ਵੇਖੋ",
    order: "ਆਰਡਰ ਕਰੋ",
    admin: "ਐਡਮਿਨ",
    searchPlaceholder: "🔍 ਪੌਦੇ ਦਾ ਨਾਮ ਜਾਂ ਕਿਸਮ ਲੱਭੋ...",
    allCategories: "ਸਭ Category",
    fruitPlants: "🍎 ਫਲਦਾਰ ਪੌਦੇ",
    indoorPlants: "🪴 ਇਨਡੋਰ ਪੌਦੇ",
    outdoorPlants: "🌳 ਆਉਟਡੋਰ ਪੌਦੇ",
    floweringPlants: "🌺 ਫੁੱਲਾਂ ਦੇ ਪੌਦੇ",
    decorative: "🌿 ਡੈਕੋਰੇਟਿਵ",
    landscaping: "🌴 ਲੈਂਡਸਕੇਪਿੰਗ",
    medicinal: "🌱 ਜੜ੍ਹੀ ਬੂਟੀ",
    careTips: "ਸੰਭਾਲ ਦੇ ਸੁਝਾਅ",
    plantingGuide: "ਲਗਾਉਣ ਦਾ ਤਰੀਕਾ",
    stockAvailable: "🟢 ਉਪਲਬਧ",
    stockOut: "🔴 ਉਪਲਬਧ ਨਹੀਂ",
    whatsappOrder: "🟢 WhatsApp ਰਾਹੀਂ ਆਰਡਰ ਕਰੋ",
    offlineNotice: "⚠️ ਤੁਸੀਂ ਇਸ ਸਮੇਂ offline ਮੋਡ ਵਿੱਚ ਹੋ।"
  }
};

const defaultPlants = [
  {
    id: "1",
    name: "अमरूद हिसार सफेदा",
    variety: "Hisar Safeda",
    category: "Fruit",
    category_hi: "🍎 फलदार पौधे",
    stock: true,
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6920495f?w=400",
    care_tips: "धूप वाली जगह पर लगाएं और नियमित रूप से पानी दें।",
    planting_guide: "1. दो फीट का गड्ढा खोदें।\n2. मिट्टी में गोबर की खाद मिलाएं।\n3. पौधे को बीच में रखकर मिट्टी भरें और हल्का पानी दें।"
  },
  {
    id: "2",
    name: "मनी प्लांट",
    variety: "Golden Pothos",
    category: "Indoor",
    category_hi: "🪴 इंडोर प्लांट्स",
    stock: true,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400",
    care_tips: "हल्की रोशनी में रखें और मिट्टी पूरी तरह सूखने न दें।",
    planting_guide: "1. गमले में अच्छी जल निकासी वाली मिट्टी और रेत मिलाएं।\n2. कटिंग या जड़ को मिट्टी में दबाएं।"
  }
];

export function getPlants() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultPlants));
    return defaultPlants;
  }
  try { return JSON.parse(data); } catch (e) { return defaultPlants; }
}

export function savePlants(plants) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(plants));
}

export function addPlant(plantData) {
  const plants = getPlants();
  const newPlant = { id: Date.now().toString(), ...plantData };
  plants.unshift(newPlant);
  savePlants(plants);
  return newPlant;
}

export function updatePlant(id, updatedData) {
  let plants = getPlants();
  plants = plants.map(p => String(p.id) === String(id) ? { ...p, ...updatedData } : p);
  savePlants(plants);
}

export function deletePlant(id) {
  let plants = getPlants();
  plants = plants.filter(p => String(p.id) !== String(id));
  savePlants(plants);
}

export function getCurrentLang() {
  return localStorage.getItem("shri_ram_lang") || "hi";
}

export function setLang(lang) {
  localStorage.setItem("shri_ram_lang", lang);
}
