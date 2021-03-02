var i = 0;

function Counter() {
    i = i + 1;

    //Sendet eine Nachricht zurück an die HTML-Seite

    // postMessage(i, 'targetOrigin');
    postMessage(i); // obwohl TS-Definition 2 Argumente verlangt, muss diese Funktion bei Worker-Aufruf mit localhost nur ein Argument haben
    setTimeout("Counter()", 1000);
}

Counter();