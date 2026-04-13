const CACHE_NAME = 'fitness-v1';
const ASSETS = [
    './',
    './index.html',
    './manifest.json'
];

// 安裝時儲存靜態檔案
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
    );
});

// 當發出請求時，優先使用快取的內容
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});

