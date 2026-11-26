// 3Q 코칭 — 한 번 열어 본 페이지는 인터넷이 약한 구장에서도 다시 열리게 저장해 둡니다.
// 항상 인터넷의 최신 파일을 먼저 받고, 연결이 안 될 때만 저장본을 보여 줍니다.
const CACHE = 'q24-v6';
const CORE = ['./', './index.html', './manifest.webmanifest', './premium-192.png', './premium-180.png', './review-192.png', './coach-192.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.allSettled(CORE.map(u => c.add(u)))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match('./')))
  );
});
