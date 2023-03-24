/* eslint-disable no-restricted-globals */
// определяем название кэша и файлы которые хотим кэшировать
const APP_CACHE_NAME = 'app-cache-v1';

// определяем файлы для кэширования
const ASSETS_URLS = [
  '../src/images/logo__COLOR_main-1.svg',
  'index.html',
];

// добавляем событие при установке приложения
self.addEventListener('install', (evt) => {
  // ждем пока все файлы кэшируются
  evt.waitUntil(handleInstall());
});

const handleInstall = async () => {
  const cache = await caches.open(APP_CACHE_NAME);
  // кэшируем контент при установке
  await cache.addAll(ASSETS_URLS);
};

// добавляем событие на каждый запрос
self.addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event));
//   event.respondWith(handleRequestStaleWhileRevalidate(event));
//   event.respondWith(handleRequestCasheFirst(event));
//   event.respondWith(handleRequestNetworkFirst(event));
//   event.respondWith(handleRequestCasheOnly(event));
//   event.respondWith(handleRequestNetworkOnly(event));
});

const handleRequest = async (evt) => {
  const r = await caches.match(evt.request);
  // проверяем есть ли в кэше то что запрашивается
  if (r) {
    return r;
  }
  // запрашиваем то что нам нужно, если этого нету в кэше
  const response = await fetch(evt.request);
  return response;
};

// 1. Stale-While-Revalidate
// Эта стратегия проверяет ответ в кеше. Если он доступен, то доставляется, 
// и кэш повторно проверяется. Если он недоступен, service worker получает ответ из сети 
// и кэширует его. При возникновении события fetch SW проверяет, находится ли запрос события 
// в кэше, выполняя cache.match(event.request). Он разрешает в объект Response cacheResponse 
// — это кэшированный ответ на event.request, затем мы выполняем новый запрос на выборку 
// и помещаем его в кэш, а затем возвращаем cacheResponse или networkResponse, 
// если сетевой запрос был успешным. PWA используют эту стратегию для высокоприоритетных 
// и критичных файлов. Кроме того, для не GET-запросов, таких как запросы POST. 
// Ответы POST-запросы не кэшируются, поскольку они изменяют хранилище данных каждый раз, 
// когда их запускают. Так что ответы каждый раз разные.
const handleRequestStaleWhileRevalidate = (event) => {
  event.respondWith(
    caches.open(cacheName)
      .then((cache) => {
        cache.match(event.request)
          .then((cacheResponse) => {
            fetch(event.request)
              .then((networkResponse) => {
                cache.put(event.request, networkResponse);
              });
            return cacheResponse || networkResponse;
          });
      }),
  );
};

// Cache first
// Эта стратегия будет сначала искать ответ в кеше, если какой-либо ответ будет найден
// ранее в кеше, он будет возвращать и обслуживать кеш. Если нет, он получит ответ из сети,
// обработает его и кеширует в следующий раз.
// Приоритет в стратегии — сначала посмотреть в кеш. Если там что-то есть, оно обслуживается,
// без получения из сети для повторной проверки, как это делает Stale-While-Revalidate.
// Эта стратегия использует сеть только в том случае, если кэшированный ответ не найден,
// она извлекает ответ из сети и затем кэширует его.
// PWA используют эту стратегию для таких ресурсов, как изображения, видео, CSS и т. д., файлы,
// которых не являются критичными для веб-приложения.

const handleRequestCasheFirst = (event) => {
  event.respondWith(
    caches.open(cacheName)
      .then((cache) => {
        cache.match(event.request)
          .then((cacheResponse) => {
            if (cacheResponse) return cacheResponse
            return fetch(event.request)
              .then((networkResponse) => {
                cache.put(event.request, networkResponse.clone())
                return networkResponse
              });
          });
      }),
  );
};

// Network first
// Эта стратегия будет пытаться получить ответ из сети. Если это удалось, она
// кэширует ответ и возвращает ответ.
// Если сеть недоступна, она возвращается к кэшу и отправляет туда ответ.
// PWA в основном используют эту стратегию для запросов, которые часто обновляются,
// особенно для запросов POST. Пользователи в сети получают наиболее актуальный контент,
// а пользователи в автономном режиме получают кэшированную версию. Это хорошо, так что
// пользователи будут получать что-то на своем экране во время ожидания сети.
// Это лучше, чем сообщение об ошибке сети.

const handleRequestNetworkFirst = (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request)),
  );
};

// Cache only
// Эта стратегия отвечает только из кэша. Она не возвращается к сети.
// Она обслуживает ответы ТОЛЬКО из кэша. Эта стратегия используется для ресурсов,
// vкоторые никогда не изменятся после первого кэширования. Например, изображение логотипа PWA
// никогда не может измениться, поэтому оно кэшируется один раз и доставляется исключительно
// из кэша. Нет никаких шансов, что это когда-либо изменится.

const handleRequestCasheOnly = (event) => {
  event.respondWith(
    caches.open(cacheName).then((cache) => {
      cache.match(event.request).then((cacheResponse) => cacheResponse)
    }),
  );
};

// Network only
// Эта стратегия использует исключительно сеть для получения и обслуживания ответа.
// Нет отката к кэшу.
// В отличие от Только кэш, эта стратегия используется для ресурсов и файлов,
// которые постоянно меняются.

const handleRequestNetworkOnly = (event) => {
  event.respondWith(
    fetch(event.request).then((networkResponse) => networkResponse),
  );
};
