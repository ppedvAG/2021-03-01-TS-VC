"use strict";
// === WORKER ===
let w;
function startWorker() {
    if (typeof (Worker) !== "undefined") { //For slightly more controlled error handling and backwards compatibility, it is a good idea to wrap your worker accessing code in the following  if (window.Worker) {...}
        if (typeof (w) == "undefined") {
            w = new Worker("worker.js");
        }
        w.onmessage = function (event) {
            document.getElementById("result").innerHTML = event.data;
        };
    }
    else {
        document.getElementById("result").innerHTML = "Sorry! No Web Worker support.";
    }
}
function stopWorker() {
    w.terminate();
    w = undefined;
}
// === SERVICE WORKER ===
// make sure, sw are supported
if ('serviceWorker' in navigator) {
    // console.log('service worker supported')
    window.addEventListener('load', () => {
        navigator.serviceWorker
            //   .register('./sw-cached-pages.js')
            .register('./serviceworker.js')
            .then(reg => console.log('Service Worker: Registered ', reg))
            .catch(err => console.log(`Service worker: Error: ${err}`));
    });
}
