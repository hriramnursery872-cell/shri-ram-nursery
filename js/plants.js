/* ============================================================
   SHRI RAM NURSERY - CENTRAL PLANT DATA ENGINE
   Bhuna
   ============================================================ */

const STORAGE_KEY = "shri_ram_nursery_plants_v3";

export const PLANT_CATEGORIES = [
  { value: "Fruit", label: "🍎 फलदार पौधे" },
  { value: "Indoor", label: "🪴 इंडोर प्लांट्स" },
  { value: "Outdoor", label: "🌳 आउटडोर प्लांट्स" },
  { value: "Flowering", label: "🌺 फूलों के पौधे" },
  { value: "Decorative", label: "🌿 डेकोरेटिव एवं फॉलिएज" },
  { value: "Landscaping", label: "🌴 लैंडस्केपिंग एवं पाम्स" },
  { value: "Medicinal", label: "🌱 औषधीय एवं अन्य" }
];

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
    short_description: "मीठे फल और अच्छी उत्पादन क्षमता वाला लोकप्रिय अमरूद पौधा।",
    care_tips: "अमरूद को रोज़ 5-6 घंटे धूप दें और नियमित सिंचाई करें।",
    watering: "मिट्टी की नमी के अनुसार नियमित पानी दें।",
    sunlight: "प्रतिदिन लगभग 5-6 घंटे सीधी धूप उपयुक्त है।",
    soil: "अच्छी जल निकासी वाली उपजाऊ मिट्टी बेहतर रहती है।",
    maintenance: "समय-समय पर सूखी और कमजोर शाखाओं की pruning करें.",
    stock: true,
    quantity: 10,
    price: 0,
    likes: 0,
    shares: 0
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
    short_description: "बागवानी के लिए उपयोगी फलदार आड़ू का पौधा।",
    care_tips: "पूरी धूप और अच्छी जल निकासी वाली मिट्टी उपयुक्त है।",
    watering: "गर्म मौसम में नियमित सिंचाई करें।",
    sunlight: "खुली धूप में रखें।",
    soil: "उपजाऊ और अच्छी जल निकासी वाली मिट्टी रखें।",
    maintenance: "पौधे की शाखाओं को समय-समय पर व्यवस्थित करें।",
    stock: true,
    quantity: 10,
    price: 0,
    likes: 0,
    shares: 0
  }
];

function normalizePlant(plant = {}) {
  const normalizedImages = Array.isArray(plant.images) ? plant.images.filter(Boolean).map(String) : [];
  const primaryImage = String(plant.image || plant.imageUrl || normalizedImages[0] || "");

  return {
    id: String(plant.id || `plant-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`),
    name: String(plant.name || "Unnamed Plant"),
    category: String(plant.category || "Medicinal"),
    category_hi: String(plant.category_hi || ""),
    variety: String(plant.variety || ""),
    image: primaryImage,
    images: normalizedImages,
    mature_image: String(plant.mature_image || plant.matureImage || ""),
    guide_link: String(plant.guide_link || plant.guideLink || ""),
    short_description: String(plant.short_description || plant.description || ""),
    care_tips: String(plant.care_tips || plant.tips || "इस पौधे की उचित धूप, पानी और देखभाल करें।"),
    watering: String(plant.watering || "मिट्टी की नमी के अनुसार पानी दें।"),
    sunlight: String(plant.sunlight || "पौधे की आवश्यकता के अनुसार पर्याप्त रोशनी दें।"),
    soil: String(plant.soil || "अच्छी जल निकासी वाली मिट्टी रखें।"),
    maintenance: String(plant.maintenance || "समय-समय पर पौधे की सफाई और pruning करें।"),
    stock: plant.stock !== false,
    quantity: Number.isFinite(Number(plant.quantity)) ? Number(plant.quantity) : 0,
    price: 0,
    likes: Number(plant.likes || 0),
    shares: Number(plant.shares || 0),
    createdAt: plant.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
}

function getDefaultCatalog() {
  return DEFAULT_PLANTS.map(normalizePlant);
}

export async function loadPlants() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return getDefaultCatalog();
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed) || parsed.length === 0) return getDefaultCatalog();
    return parsed.map(normalizePlant);
  } catch (error) {
    return getDefaultCatalog();
  }
}

export function getPlants() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return getDefaultCatalog();
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed) || parsed.length === 0) return getDefaultCatalog();
    return parsed.map(normalizePlant);
  } catch (error) {
    return getDefaultCatalog();
  }
}

export function savePlants(plants = []) {
  try {
    const cleanPlants = Array.isArray(plants) ? plants.map(normalizePlant) : [];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cleanPlants));
    return cleanPlants;
  } catch (error) {
    return [];
  }
}

export function addPlant(plant = {}) {
  const plants = getPlants();
  const newPlant = normalizePlant({ ...plant, id: plant.id || `plant-${Date.now()}` });
  plants.push(newPlant);
  savePlants(plants);
  return newPlant;
}

export function updatePlant(id, changes = {}) {
  const plants = getPlants();
  const index = plants.findIndex(p => String(p.id) === String(id));
  if (index === -1) return null;
  plants[index] = normalizePlant({ ...plants[index], ...changes, id: plants[index].id, createdAt: plants[index].createdAt });
  savePlants(plants);
  return plants[index];
}

export function deletePlant(id) {
  const plants = getPlants();
  const updated = plants.filter(p => String(p.id) !== String(id));
  savePlants(updated);
  return updated;
}

export function getPlantById(id) {
  if (!id) return null;
  return getPlants().find(p => String(p.id) === String(id)) || null;
}

export function getPlantsByCategory(category) {
  const plants = getPlants();
  if (!category || category === "All" || category === "all") return plants;
  return plants.filter(p => String(p.category).toLowerCase() === String(category).toLowerCase());
}

export function getCategoryLabel(category) {
  const found = PLANT_CATEGORIES.find(item => String(item.value).toLowerCase() === String(category).toLowerCase());
  return found ? found.label : "🌱 अन्य पौधे";
}

export function getAvailabilityLabel(plant = null) {
  if (plant && plant.stock === false) return "🔴 उपलब्ध नहीं";
  return "🟢 उपलब्ध है";
}

export function searchPlants(query) {
  const text = String(query || "").trim().toLowerCase();
  if (!text) return getPlants();
  return getPlants().filter(plant => 
    [plant.name, plant.category, plant.variety, plant.short_description].some(v => String(v || "").toLowerCase().includes(text))
  );
}
