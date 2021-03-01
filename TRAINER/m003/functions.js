"use strict";
function showFctCall() {
    console.log('fct aufgerufen');
}
showFctCall();
(function showFctCall2() {
    console.log('fct2 aufgerufen');
})();
(function () {
    console.log('anonype fct aufgerufen');
})();
// Datentypen von Funktionen
let anyFct1 = () => { };
let anyFct2;
// anyFct2 = () => {} // Fehler: 
// Type '() => void' is not assignable to type '() => {}'.
// Type 'void' is not assignable to type '{}'.ts(2322)
anyFct2 = () => {
    return {};
};
// obwohl bei der Deklaration von Variable anyFct2 als Datentyp () => {} angegeben wurde, 
// welcher mit dem Wert () => {} nicht zusammenpasst, 
// kann diese Variable über andere Syntax {} als Rückgabe doch akzeptieren
// Function als Datentyp ist genereller, davon sind konkrete Funktionstypen abgeleitet.
anyFct1 = anyFct2;
// generische Funktionen
// sind Melissa bekannt
// unbestimmte Anzahl von Argumenten
function flexFct(...args) {
    for (const iterator of args) {
        console.log(iterator);
    }
}
// todo #2
flexFct(2, 3, 4);
flexFct([true, false, true]);
