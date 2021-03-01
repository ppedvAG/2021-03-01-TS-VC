"use strict";
// mehrere TS/JS Dateien, angeschlossen an eine HTML Datei teilen den globalen Scope
var scopes2;
(function (scopes2) {
    // scopes.ts(4, 5): 'let1' was also declared here.
    // man kann auch im Namespace auf die Elemente zugreifen
    console.log('document.getElementsByTagName("h1")[0] :>> ', document.getElementsByTagName("h1")[0]);
})(scopes2 || (scopes2 = {}));
