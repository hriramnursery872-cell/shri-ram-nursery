// Plant catalog loading and localStorage boundary
const PLANTS_STORAGE_KEY = "shri-ram-nursery-plants";

// 1. फ़ाइल से डेटा लोड करने और उसे LocalStorage में सेट करने का सही फंक्शन
export async function loadPlants() {
  try {
    const response = await fetch("/data/plants.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Unable to load plants JSON file.");
    }
    const plantsData = await response.json();
    // लोड होते ही इसे लोकल स्टोरेज में सेव करें ताकि फ्रंटएंड को डेटा मिल सके
    return savePlants(plantsData);
  } catch (error) {
    console.error("Error in loadPlants:", error);
    // अगर फ़ाइल लोड न हो, तो पुराना सेव डेटा या खाली एरे भेजें
    return getPlants();
  }
}

// 2. पौधों की लिस्ट को लोकल स्टोरेज में सुरक्षित करने का फंक्शन
export function savePlants(plants) {
  if (!Array.isArray(plants)) {
    throw new TypeError("Plants must be an array.");
  }
  localStorage.setItem(PLANTS_STORAGE_KEY, JSON.stringify(plants));
  return plants;
}

// 3. फ्रंटएंड मॉड्यूल्स और डैशबोर्ड के लिए डेटा बाहर निकालने का मुख्य फंक्शन
export function getPlants() {
  const storedPlants = localStorage.getItem(PLANTS_STORAGE_KEY);
  if (!storedPlants) {
    return [];
  }
  try {
    const plants = JSON.parse(storedPlants);
    if (!Array.isArray(plants)) {
      throw new TypeError("Stored plants must be an array.");
    }
    return plants;
  } catch (e) {
    console.error("Error parsing stored plants:", e);
    return [];
  }
}

// 4. ऑटो-इनिशियलाइज़ेशन (वेबसाइट खुलते ही बैकग्राउंड में डेटा सिंक करने के लिए)
if (getPlants().length === 0) {
  loadPlants();
}
