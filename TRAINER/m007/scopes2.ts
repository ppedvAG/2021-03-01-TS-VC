// mehrere TS/JS Dateien, angeschlossen an eine HTML Datei teilen den globalen Scope

namespace scopes2 {
    export let let1: number; // Fehler: Cannot redeclare block-scoped variable 'let1'.ts(2451)
    // scopes.ts(4, 5): 'let1' was also declared here.
    
    // man kann auch im Namespace auf die Elemente zugreifen
    console.log('document.getElementsByTagName("h1")[0] :>> ', document.getElementsByTagName("h1")[0]);
}

