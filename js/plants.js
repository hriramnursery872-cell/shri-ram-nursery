// Plant catalog loading and localStorage boundary without creating plant data.

const PLANTS_STORAGE_KEY = "shri-ram-nursery-plants";

async function loadPlants() {
  const response = await fetch("./data/plants.json", { cache: "no-store" });
  if (!response.ok) {
    throw new Error("Unable to load plants.");
  }
  return response.json();
}

function savePlants(plants) {
  if (!Array.isArray(plants)) {
    throw new TypeError("Plants must be an array.");
  }
  localStorage.setItem(PLANTS_STORAGE_KEY, JSON.stringify(plants));
  return plants;
}

function getPlants() {
  const storedPlants = localStorage.getItem(PLANTS_STORAGE_KEY);
  if (!storedPlants) {
    return [];
  }
  const plants = JSON.parse(storedPlants);
  if (!Array.isArray(plants)) {
    throw new TypeError("Stored plants must be an array.");
  }
  return plants;
}