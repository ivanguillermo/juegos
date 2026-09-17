const CACHE_NAME = 'matematicas-v1';
const ASSETS = [
  './',
  './operaciones.html',
  './operaciones_logo.jpg',
  './matboy.png',
  './boyhappy.png',
  './boytriste.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
