const STORAGE_KEY = "shri_ram_nursery_plants_v3";

export const translations = {
  hi: { brand: "श्री राम नर्सरी (भुना)", searchPlaceholder: "🔍 पौधे का नाम या वैरायटी खोजें..." },
  en: { brand: "Shri Ram Nursery (Bhuna)", searchPlaceholder: "🔍 Search plant name or variety..." },
  pa: { brand: "ਸ਼੍ਰੀ ਰਾਮ ਨਰਸਰੀ (ਭੁਨਾ)", searchPlaceholder: "🔍 ਪੌਦੇ ਦਾ ਨਾਮ ਜਾਂ ਕਿਸਮ ਲੱਭੋ..." },
  gu: { brand: "શ્રી રામ નર્સરી (ભુના)", searchPlaceholder: "🔍 છોડનું નામ અથવા વેરાયટી શોધો..." },
  mr: { brand: "श्री राम नर्सरी (भुना)", searchPlaceholder: "🔍 रोपाचे नाव किंवा व्हरायटी शोधा..." },
  bn: { brand: "শ্রী রাম নার্সারি (ভুনা)", searchPlaceholder: "🔍 গাছের নাম বা বৈচিত্র্য খুঁজুন..." },
  ta: { brand: "ஸ்ரீ ராம் நர்சரி (புனா)", searchPlaceholder: "🔍 செடியின் பெயர் அல்லது வகையைத் தேടவும்..." },
  te: { brand: "శ్రీ రామ్ నర్సరీ (భునా)", searchPlaceholder: "🔍 మొక్క పేరు లేదా రకాన్ని శోధించండి..." },
  kn: { brand: "ಶ್ರೀ ರಾಮ್ ನರ್ಸರಿ (ಭುನಾ)", searchPlaceholder: "🔍 ಸಸ್ಯದ ಹೆಸರು ಅಥವಾ ವಿಧವನ್ನು ಹುಡುಕಿ..." },
  ml: { brand: "ശ്രീ രാം നഴ്സറി (ഭുന)", searchPlaceholder: "🔍 ചെടിയുടെ പേരോ വകഭേദമോ തിരയുക..." }
};

const defaultPlants = [
  {
    id: "1",
    name: "अमरूद हिसार सफेदा",
    variety: "Hisar Safeda",
    category: "Fruit",
    stock: true,
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6920495f?w=400"
  },
  {
    id: "2",
    name: "मनी प्लांट",
    variety: "Golden Pothos",
    category: "Indoor",
    stock: true,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400"
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

export function getCurrentLang() {
  return localStorage.getItem("shri_ram_lang") || "hi";
}

export function setLang(lang) {
  localStorage.setItem("shri_ram_lang", lang);
}
