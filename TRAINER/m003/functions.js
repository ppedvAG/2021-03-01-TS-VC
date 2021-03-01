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
var anyFct1 = function () { };
var anyFct2;
// anyFct2 = () => {} // Fehler: 
// Type '() => void' is not assignable to type '() => {}'.
// Type 'void' is not assignable to type '{}'.ts(2322)
anyFct2 = function () {
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
function flexFct() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var iterator = args_1[_a];
        console.log(iterator);
    }
}
// todo #2
flexFct(2, 3, 4);
flexFct([true, false, true]);
