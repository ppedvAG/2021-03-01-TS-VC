"use strict";
let datum;
datum = new Date();
console.log('datum :>> ', datum);
console.log('typeof datum :>> ', typeof datum); // object
datum = '2021-03-01';
console.log('datum :>> ', datum);
console.log('typeof datum :>> ', typeof datum); // string
if (typeof datum === typeof '') {
    datum = new Date(datum);
    console.log('bin im if ');
}
console.log('datum :>> ', datum);
