// service-worker.js

// Cài đặt Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('pwa-cache').then((cache) => {
            return cache.addAll([
                '/',               // Trang chính
 '', 
                'index.html',      // Tệp HTML chính
                'images/icon.png'  // Biểu tượng ứng dụng
            ]);
        })
    );
});

// Quản lý yêu cầu và cung cấp phản hồi từ bộ nhớ đệm
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});
