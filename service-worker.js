const CACHE_NAME = 'karamtrade-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js'  /* غيّر اسم ملف الجافاسكربت إن كان مختلف */
];

self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => { if (key !== CACHE_NAME) return caches.delete(key); })
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(res => res || fetch(evt.request))
  );
});
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("karamtrade-cache").then(cache => {
      return cache.addAll([
        "/karamtrade-al_platform/",
        "/karamtrade-al_platform/index.html",
        "/karamtrade-al_platform/styles.css",
        "/karamtrade-al_platform/app.js"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
