// Shri Ram Nursery - Central Plant Catalog Engine

const PLANTS_STORAGE_KEY = "shri-ram-nursery-plants";
const PLANTS_API_PATH = "/data/plants.json";

export const PLANT_CATEGORIES = [
  {
    value: "Fruit",
    label: "🍎 फल वाले पौधे"
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


// ---------------------------------------------
// 1. JSON से पौधों की लिस्ट लोड करना
// ---------------------------------------------
export async function loadPlants() {
  try {
    const response = await fetch(PLANTS_API_PATH, {
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error(
        `Plants JSON load failed: HTTP ${response.status}`
      );
    }

    const plantsData = await response.json();

    if (!Array.isArray(plantsData)) {
      throw new TypeError("Plants JSON must contain an array.");
    }

    const normalizedPlants = normalizePlants(plantsData);

    savePlants(normalizedPlants);

    return normalizedPlants;
  } catch (error) {
    console.error("Error in loadPlants():", error);

    return getPlants();
  }
}


// ---------------------------------------------
// 2. पौधों को सुरक्षित तरीके से normalize करना
// ---------------------------------------------
export function normalizePlants(plants) {
  if (!Array.isArray(plants)) {
    return [];
  }

  return plants
    .filter(Boolean)
    .map((plant, index) => ({
      id: String(
        plant.id ||
        `plant-${Date.now()}-${index}`
      ),

      name: String(
        plant.name || "Unnamed Plant"
      ),

      category: String(
        plant.category || "Other"
      ),

      category_hi: String(
        plant.category_hi ||
        plant.category ||
        "अन्य पौधे"
      ),

      variety: String(
        plant.variety || ""
      ),

      price: Number(
        plant.price || 0
      ),

      image: String(
        plant.image || ""
      ),

      guide_link: String(
        plant.guide_link || ""
      ),

      care_tips: String(
        plant.care_tips ||
        "इस पौधे को उचित धूप, पानी और देखभाल दें।"
      )
    }));
}


// ---------------------------------------------
// 3. LocalStorage में पूरी catalog save करना
// ---------------------------------------------
export function savePlants(plants) {
  const normalizedPlants = normalizePlants(plants);

  localStorage.setItem(
    PLANTS_STORAGE_KEY,
    JSON.stringify(normalizedPlants)
  );

  return normalizedPlants;
}


// ---------------------------------------------
// 4. LocalStorage से catalog प्राप्त करना
// ---------------------------------------------
export function getPlants() {
  const storedPlants = localStorage.getItem(
    PLANTS_STORAGE_KEY
  );

  if (!storedPlants) {
    return [];
  }

  try {
    const plants = JSON.parse(storedPlants);

    if (!Array.isArray(plants)) {
      throw new TypeError(
        "Stored plants must be an array."
      );
    }

    return normalizePlants(plants);
  } catch (error) {
    console.error(
      "Error parsing stored plants:",
      error
    );

    return [];
  }
}


// ---------------------------------------------
// 5. ID से पौधा ढूंढना
// ---------------------------------------------
export function getPlantById(id) {
  if (id === null || id === undefined) {
    return null;
  }

  const requestedId = String(id);

  return (
    getPlants().find(
      plant => String(plant.id) === requestedId
    ) || null
  );
}


// ---------------------------------------------
// 6. Admin Panel - नया पौधा जोड़ना
// ---------------------------------------------
export function addPlant(plant) {
  const plants = getPlants();

  const newPlant = normalizePlants([
    {
      ...plant,
      id:
        plant.id ||
        `plant-${Date.now()}`
    }
  ])[0];

  plants.push(newPlant);

  savePlants(plants);

  return newPlant;
}


// ---------------------------------------------
// 7. Admin Panel - पौधा update करना
// ---------------------------------------------
export function updatePlant(id, updates) {
  const plants = getPlants();

  const index = plants.findIndex(
    plant =>
      String(plant.id) === String(id)
  );

  if (index === -1) {
    throw new Error(
      `Plant not found: ${id}`
    );
  }

  const updatedPlant = {
    ...plants[index],
    ...updates,
    id: plants[index].id
  };

  plants[index] = normalizePlants([
    updatedPlant
  ])[0];

  savePlants(plants);

  return plants[index];
}


// ---------------------------------------------
// 8. Admin Panel - पौधा delete करना
// ---------------------------------------------
export function deletePlant(id) {
  const plants = getPlants();

  const filteredPlants = plants.filter(
    plant =>
      String(plant.id) !== String(id)
  );

  savePlants(filteredPlants);

  return filteredPlants;
}


// ---------------------------------------------
// 9. Category label प्राप्त करना
// ---------------------------------------------
export function getCategoryLabel(category) {
  const found = PLANT_CATEGORIES.find(
    item => item.value === category
  );

  return found
    ? found.label
    : "🌱 अन्य पौधे";
}


// ---------------------------------------------
// 10. Customer-facing availability
// ---------------------------------------------
// जानबूझकर कोई quantity/stock संख्या नहीं दिखाई जाती।
export function getAvailabilityLabel() {
  return "🟢 उपलब्ध";
}


// ---------------------------------------------
// 11. शुरुआती catalog sync
// ---------------------------------------------
if (typeof window !== "undefined") {
  if (getPlants().length === 0) {
    loadPlants();
  }
}