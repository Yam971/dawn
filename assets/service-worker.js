
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('whataread-store-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/manifest.json',
          // Add other assets to cache
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  