// słuch'am: keeps the app's own files on the phone so it opens without internet.
// Bump VERSION with every deploy (together with APP_VERSION in index.html and version.json).
const VERSION = '2026-11-27.14';
const CACHE = 'slucham-' + VERSION;
const FILES = ['./', 'index.html', 'manifest.json', 'apple-touch-icon.png', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(FILES.map(f => new Request(f, {cache: 'reload'}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('slucham-') && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // only the app's own files; Groq and everything else go straight to the network
  if (url.origin !== self.location.origin) return;
  // the version check must always ask the server
  if (url.pathname.endsWith('/version.json') || url.pathname.endsWith('/sw.js')) return;
  event.respondWith(
    caches.open(CACHE).then(cache =>
      cache.match(req, {ignoreSearch: true}).then(hit => {
        if (hit) return hit;
        if (req.mode === 'navigate') return cache.match('index.html').then(page => page || fetch(req));
        return fetch(req);
      })
    )
  );
});
