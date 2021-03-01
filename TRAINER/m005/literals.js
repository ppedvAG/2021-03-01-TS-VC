"use strict";
var cmUnion;
// die Variable akzeptiert keine weiteren Strings
cmUnion = 'cm';
var lengthUnion;
// auch bei arrays
var array;
// array = [2, 4]; // Fehler: Type '[number, number]' is not assignable to type '[]'.
// Source has 2 element(s) but target allows only 0.ts(2322)
// aber nicht bei Objekten:
var object;
object = { a: 3, b: 4 };
