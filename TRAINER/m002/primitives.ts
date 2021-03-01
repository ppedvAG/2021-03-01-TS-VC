// TYPE CHECKING

// === ANY ===
console.log('\n=== ANY ===')

let myAny: any;
myAny = 4;
myAny = 'text';
console.log('typeof myAny', typeof myAny) // string, weil die Operation 'typeof ...' in js ausgeführt wird
console.log('Type von myAny: ' +
    typeof myAny === typeof String ? 'string' : 'kein string' // kein string, weil der Text in TS ermittelt wird
);
myAny = 5;
let myString: string;
myString = myAny // Durch ausgeschaltetes Type Checking kommen keine Fehlermeldungen


// === UNKNOWN ===
console.log('\n=== UNKNOWN ===')
let myUnknown: unknown = 4;
myUnknown = 'text';
console.log('typeof myUnknown', typeof myUnknown) // string
let myNumber = 5;
// myNumber = myUnknown; // Fehler: Type 'unknown' is not assignable to type 'number'.ts(2322)
myAny = 'text'
myNumber = myAny; // keine Fehlermeldungen by any im Unterschied zu unknown


// === VOID ===
console.log('\n=== VOID ===')
function myFunction() {
    let variable = 3;
    console.log('variable', variable)
}
// Shape von der Variable myFunction ist () => void
function myFunction2(): string {
    let variable = 'text';
    return variable
}

// myFunction = myFunction2 // Fehler: Cannot assign to 'myFunction' because it is not a variable.ts(2539)
// todo #1

console.log('object', 'sdf', 'asdf', 4)
console.log('object', ['sdf'], ['asdf'], [4])
// myString = document.getElementById('test', 'test') 
// Fehler: Expected 1 arguments, but got 2.ts(2554)
// Fehler: Type 'HTMLElement | null' is not assignable to type 'string'.
// Type 'null' is not assignable to type 'string'.ts(2322)
// myString = console.log('test') // Fehler: Type 'void' is not assignable to type 'string'.ts(2322)


// === NEVER ===
console.log('\n=== NEVER ===')
let myNever: never; // Anlegen von Variable funktioniert
// myNever = never // Fehler: 'never' only refers to a type, but is being used as a value here.ts(2693)

let myUndefined = undefined; // bei manchen Datentypen, die nur einen einzelnen Wert akzeptieren, gibt es für diesen Wert auch ein Schlüsselwort
// aber nicht bei unknown und never

// function fctNever() { // () => void
function fctNever(): never { // () => never, das heißt, void und never sind kompatibel
    let variable = 4;
    throw new Error();
    variable = 2; // Unreachable code detected.ts(7027)
}

function fctNever2(arg1: any) { // () => void
    if (typeof arg1 != typeof Number) 
    throw new Error('wrong type')
    throw new Error('function didnt work')
    console.log('test')
}

function fctNever3() { // function fctNever3(): never
    return [][0] // d.h. die leeren Arrays werden in TS mit never befüllt, nicht mit undefined, wie in JS
}

let myEmptyArray = []
console.log('typeof [][0]', typeof [][0]) // JS: undefined

