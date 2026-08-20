// Defines supported languages and persists the user's language preference.
// TODO: Add production translation resources when copy is approved.

const LANGUAGE_STORAGE_KEY = "shri-ram-nursery-language";

const LANGUAGES = Object.freeze({
  hi: "Hindi",
  en: "English",
  pa: "Punjabi"
});

function getSupportedLanguages() {
  return { ...LANGUAGES };
}

function getLanguage() {
  const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return storedLanguage && LANGUAGES[storedLanguage] ? storedLanguage : "en";
}

function setLanguage(language) {
  if (!Object.prototype.hasOwnProperty.call(LANGUAGES, language)) {
    throw new Error("Unsupported language.");
  }
  localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  return language;
}