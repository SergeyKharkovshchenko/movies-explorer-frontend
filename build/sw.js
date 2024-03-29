/* eslint-disable prefer-template */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-return-await */
const staticCacheName = 'staticCacheName';
const dynamicCacheName = 'dynamicCacheName';

const assetUrls = [
  'index.html',
  '/js/app.js',
];

self.addEventListener('install', async (event) => {
  const cache = await caches.open(staticCacheName);
  await cache.addAll(assetUrls);
});

self.addEventListener('activate', async (event) => {
  const cacheNames = await caches.keys();
  await Promise.all(
    cacheNames
      .filter((name) => name !== staticCacheName)
      .filter((name) => name !== dynamicCacheName)
      .map((name) => caches.delete(name)),
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  const url = new URL(request.url);
  console.log('url' + url);
  if (url.origin === location.origin) {
    event.respondWith(cacheFirst(request));
  } else {
    event.respondWith(networkFirst(request));
  }
});

async function cacheFirst(request) {
  console.log('cacheFirst(request)');
  const cached = await caches.match(request);
  return cached ?? await fetch(request);
}

async function networkFirst(request) {
  console.log('networkFirst(request)');
  const cache = await caches.open(dynamicCacheName);
  try {
    const response = await fetch(request);
    await cache.put(request, response.clone());
    return response;
  } catch (e) {
    const cached = await cache.match(request);
    console.log('/offline.html');
    return cached ?? await caches.match('/offline.html');
  }
}
