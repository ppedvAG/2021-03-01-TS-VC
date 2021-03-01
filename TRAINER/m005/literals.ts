let cmUnion: 'cm';

// die Variable akzeptiert keine weiteren Strings
cmUnion = 'cm'

let lengthUnion: 'cm' | 'm' | 'km'

// auch bei arrays
let array: []
// array = [2, 4]; // Fehler: Type '[number, number]' is not assignable to type '[]'.
// Source has 2 element(s) but target allows only 0.ts(2322)

// aber nicht bei Objekten:
let object: {}
object = {a: 3, b: 4}