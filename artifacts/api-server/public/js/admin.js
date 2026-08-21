// Settings loading and localStorage boundary without creating settings data.

const SETTINGS_STORAGE_KEY = "shri-ram-nursery-settings";

async function loadSettings() {
  const response = await fetch("./data/settings.json", { cache: "no-store" });
  if (!response.ok) {
    throw new Error("Unable to load settings.");
  }
  return response.json();
}

function saveSettings(settings) {
  if (!Array.isArray(settings)) {
    throw new TypeError("Settings must be an array.");
  }
  localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
  return settings;
}

function getSettings() {
  const storedSettings = localStorage.getItem(SETTINGS_STORAGE_KEY);
  if (!storedSettings) {
    return [];
  }
  const settings = JSON.parse(storedSettings);
  if (!Array.isArray(settings)) {
    throw new TypeError("Stored settings must be an array.");
  }
  return settings;
}