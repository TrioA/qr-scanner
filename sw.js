// sw.js
self.addEventListener('install', event => {
  console.log('Service Worker installing.');
});

self.addEventListener('fetch', event => {
  // For offline caching
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
