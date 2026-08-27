// Caches the Shri Ram Nursery application shell for offline use.

const CACHE_NAME = "shri-ram-nursery-shell-v3";
const CACHE_ASSETS = [
  "./",
  "./index.html",
  "./dashboard.html",
  "./plant.html",
  "./booking.html",
  "./orders.html",
  "./admin.html",
  "./manifest.json",
  "./data/plants.json",
  "./data/stock.json",
  "./data/orders.json",
  "./data/ledger.json",
  "./data/settings.json",
  "./css/style.css",
  "./css/dashboard.css",
  "./css/admin.css",
  "./js/auth.js",
  "./js/dashboard.js",
  "./js/plants.js",
  "./js/booking.js",
  "./js/admin.js",
  "./js/stock.js",
  "./js/ledger.js",
  "./js/language.js",
  "./assets/icon.svg",
  "./assets/logo.png",
  "./assets/upi-qr.png"
];

// Install Event - कैशे फाइलें सेव करना
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching app shell assets...");
      return cache.addAll(CACHE_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate Event - पुराना कैशे साफ़ करना
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((cacheName) => cacheName !== CACHE_NAME)
            .map((cacheName) => {
              console.log("Deleting old cache:", cacheName);
              return caches.delete(cacheName);
            })
        )
      )
      .then(() => self.clients.claim())
  );
});

// Fetch Event - ऑफलाइन होने पर कैशे से डेटा देना
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).catch(() => {
        // अगर इंटरनेट नहीं है और पेज नहीं मिला, तो इंडेक्स फाइल दिखाएं
        if (event.request.mode === "navigate") {
          return caches.match("./index.html");
        }
      });
    })
  );
});
