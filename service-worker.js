// श्री राम नर्सरी - PWA सर्विस वर्कर (Production Ready)
const CACHE_NAME = "shri-ram-nursery-pwa-v4";

// केवल वही फाइलें जो आपके प्रोजेक्ट फोल्डर में वास्तव में मौजूद हैं
const CACHE_ASSETS = [
  "./",
  "./index.html",
  "./dashboard.html",
  "./plant.html",
  "./orders.html",
  "./admin.html",
  "./manifest.json"
];

// Install Event - कैशे फाइलें सुरक्षित करना (एरर हैंडलिंग के साथ)
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching essential app shell assets...");
      return cache.addAll(CACHE_ASSETS).catch((err) => {
        console.log("Cache addAll warning handled:", err);
      });
    })
  );
  self.skipWaiting();
});

// Activate Event - पुराना कैशे साफ़ करना और नया वर्जन एक्टिवेट करना
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((cacheName) => cacheName !== CACHE_NAME)
            .map((cacheName) => {
              console.log("Deleting old outdated cache:", cacheName);
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
        // यदि इंटरनेट नहीं है, तो मुख्य इंडेक्स पेज दिखाएं
        if (event.request.mode === "navigate") {
          return caches.match("./index.html");
        }
      });
    })
  );
});
