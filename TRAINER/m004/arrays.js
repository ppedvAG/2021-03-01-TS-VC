"use strict";
// eine Struktur zu einem Array umwandeln
var tags = document.getElementsByTagName('h2'); // let tags: HTMLCollectionOf<HTMLHeadingElement>
console.log('typeof tags :>> ', typeof tags); // JS: object
console.log('tags :>> ', tags); // tags :>>  HTMLCollection [h2]
// für ältere ES/JS Versionen:
// let myArray = Array.slice.call(tags) // Error: Property 'slice' does not exist on type 'ArrayConstructor'.ts(2339)
// deswegen:
// let myArray = [].slice.call(tags)
var myArray = Array.prototype.slice.call(tags);
console.log('myArray :>> ', myArray); // myArray :>>  [h2]
// ACHTUNG: die gleichen Elemente werden nicht in das Array übernommen
// todo #3
// für neuer ES Versionen:
var myArray2 = Array.from(tags); // AUch bei ES3 gabs keine Fehler
console.log('myArray2 :>> ', myArray2);
// nur wenn Elemente unterschiedlich sind, übergehen die ins Array
var myHTMLCollection = document.getElementsByClassName('pClass');
console.log('myHTMLCollection :>> ', myHTMLCollection);
myArray = [].slice.call(myHTMLCollection);
console.log('myArray :>> ', myArray);
// DESTRUCTURING
var _a = [3, 4], a = _a[0], b = _a[1];
console.log('a :>> ', a);
console.log('b :>> ', b);
