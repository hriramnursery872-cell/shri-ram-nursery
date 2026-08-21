// Caches the Shri Ram Nursery application shell for offline use.

const CACHE_NAME = "shri-ram-nursery-shell-v1";
const CACHE_ASSETS = [
  "./",
  "./index.html",
  "./dashboard.html",
  "./plant.html",
  "./booking.html",
  "./orders.html",
  "./admin.html",
  "./manifest.json",
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
  "./assets/icon.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CACHE_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((cacheName) => cacheName !== CACHE_NAME)
            .map((cacheName) => caches.delete(cacheName))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(
      (cachedResponse) => cachedResponse || fetch(event.request)
    )
  );
});