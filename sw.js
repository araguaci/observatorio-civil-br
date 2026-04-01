// Observatório Civil BR — Service Worker
// Estratégia: Cache-First para assets estáticos, Network-First para HTML

const CACHE_NAME    = 'obscivil-v2';
const STATIC_CACHE  = 'obscivil-static-v2';
const DYNAMIC_CACHE = 'obscivil-dynamic-v2';

// Assets para pré-cache (shell da aplicação)
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/viewer.html',
  '/manifest.json',
  '/favicon.ico',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/og-image.png',
];

// ── INSTALL ────────────────────────────────────────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// ── ACTIVATE ───────────────────────────────────────────────────────────────
self.addEventListener('activate', event => {
  const allowedCaches = [STATIC_CACHE, DYNAMIC_CACHE];
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => !allowedCaches.includes(key))
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

// ── FETCH ──────────────────────────────────────────────────────────────────
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignora requisições não-GET e cross-origin
  if (request.method !== 'GET') return;
  if (url.origin !== self.location.origin) return;

  // HTML → Network-First (sempre conteúdo fresco se possível)
  if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(networkFirst(request));
    return;
  }

  // Fontes, ícones, imagens → Cache-First
  if (
    url.pathname.startsWith('/icons/') ||
    url.pathname.startsWith('/fonts/') ||
    /\.(png|jpg|jpeg|svg|ico|woff2?|ttf)$/.test(url.pathname)
  ) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Demais assets (JS, CSS inline em HTML não se aplica, .md files) → Stale-While-Revalidate
  event.respondWith(staleWhileRevalidate(request));
});

// ── ESTRATÉGIAS ────────────────────────────────────────────────────────────

async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request);
    return cached || offlineFallback();
  }
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return new Response('', { status: 404 });
  }
}

async function staleWhileRevalidate(request) {
  const cache  = await caches.open(DYNAMIC_CACHE);
  const cached = await cache.match(request);
  const fetchPromise = fetch(request).then(response => {
    if (response.ok) cache.put(request, response.clone());
    return response;
  }).catch(() => null);
  return cached || await fetchPromise || offlineFallback();
}

function offlineFallback() {
  return new Response(
    `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Offline — Observatório Civil BR</title>
  <style>
    body { background:#07080a; color:#f0f2f5; font-family:system-ui; display:flex;
           align-items:center; justify-content:center; min-height:100vh; margin:0; }
    .box { text-align:center; padding:40px; }
    h1   { font-size:48px; color:#dc2626; margin:0 0 16px; letter-spacing:.05em; }
    p    { color:#4f5560; font-size:14px; }
    a    { color:#dc2626; }
  </style>
</head>
<body>
  <div class="box">
    <h1>OFFLINE</h1>
    <p>Você está sem conexão.<br>
    <a href="/">Tentar novamente</a></p>
  </div>
</body>
</html>`,
    { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
  );
}
