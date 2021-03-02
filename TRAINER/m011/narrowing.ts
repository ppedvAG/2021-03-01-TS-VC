let datum1: string | Date

datum1 = new Date()
console.log('datum1 :>> ', datum1);
console.log('typeof datum1 :>> ', typeof datum1); // object

datum1 = '2021-03-01'
console.log('datum :>> ', datum1);
console.log('typeof datum1 :>> ', typeof datum1); // string

// if (typeof datum1 === typeof '') { 
    // anstatt von der oberen Bedingung kann man die typeof Guards benutzen
if (typeof datum1 === 'string') { // es gibt 8 Guards:
    // "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"
    datum1 = new Date(datum1)
    console.log('bin im if ');
}

console.log('datum1 :>> ', datum1);
console.log('typeof (typeof datum1) :>> ', typeof (typeof datum1)); // string

// Nicht alle Objekttypen kann man in den Hochkommata angeben:
// if (typeof datum1 === 'String') { // Fehler: This condition will always return 'false' since the types 
// '"string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"' and '"String"' have no overlap.ts(2367)
// }


// wichtig bei null und object:
console.log('typeof null :>> ', typeof null); // object
// deswegen muss man das bei den Guard 'object' berücksichtigen
