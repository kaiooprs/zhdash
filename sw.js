const CACHE_NAME = 'zhdash-v1';
const assets = [
  '/zhdash/',
  '/zhdash/index.html',
  '/zhdash/favicon.ico',
  '/zhdash/icon-192.png',
  '/zhdash/manifest.json'
  '/zhdash/style.css',
  '/zhdash/script.js'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cachedResponse => {
      return cachedResponse || fetch(e.request);
    })
  );
});
