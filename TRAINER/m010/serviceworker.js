"use strict";
/// <reference path="../sw-types/serviceworker.d.ts" /> 
// trotzdem Fehler
const cacheName = 'v1';
const cacheAssets = [
    'workers.html',
    'about.html',
    'main.js',
    'workers.css'
];
// call Install Event
self.addEventListener('install', (e) => {
    // todo #4
    console.log('Service Worker: Installed');
    e.waitUntil(caches
        .open(cacheName)
        .then(cache => {
        cache.addAll(cacheAssets);
        console.log('Service Worker: Caching Files');
    })
        .then(() => self.skipWaiting()));
});
// call activate event
self.addEventListener('activate', (e) => {
    console.log('Service Worker: Activated');
    // Remove unwanted caches
    e.waitUntil(caches.keys().then(cacheNames => {
        return Promise.all(cacheNames.map(cache => {
            if (cache !== cacheName) {
                console.log('Service Worker: Clearing Old Cache');
                return caches.delete(cache);
            }
        }));
    }));
});
// call fetch event
self.addEventListener('fetch', e => {
    console.log('Service Worker: Fetching');
    e.respondWith(
    // bei misserfolg lade assets vom cache
    fetch(e.request).catch(() => caches.match(e.request)));
});
