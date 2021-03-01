console.log('this :>> ', this); // Window ist der globale Gültigkeitbereich für TS/JS auf der Clientseite, sprich im Browser

// ACHTUNG: bei target ES3, ES5 werden die let-Variablen durch var-Variablen ersetzt
let let1 = 4

// Geschweiften Klammern sind in JS/TS ein extra Scope, d.h. Schleifen, Kontrollstrukturen, Funktionen, Klassen sind eigene Gültigkeitsbereiche

{
    // let1 // benutzt man den gleichen Bezeichner, wird auf die Variable von draußen zugegriffen
    let let1 = 5
    console.log('let1 :>> ', let1); // 5
}

console.log('let1 :>> ', let1); // 4

if (true) {
    let let1 = 2
    console.log('let1 :>> ', let1);
}

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];    
// }


// Scopes und this
class myClass {
    numberProp!: number;
    showThis1 = () => {
        console.log('this1 :>> ', this);
    }
    showThis2 = function () {
        console.log('this2 :>> ', this); // Fehler: 'this' implicitly has type 'any' because it does not have a type annotation.ts(2683)
        // scopes.ts(32, 17): An outer value of 'this' is shadowed by this container.
    }
}

let myClassInstance = new myClass()
myClassInstance.numberProp = 3;
myClassInstance.showThis1(); // this :>>  myClass {numberProp: 3, showThis1: ƒ}
myClassInstance.showThis2();