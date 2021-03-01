"use strict";
/**
 * traversing methoden
 * (getElementById, getElementsByClass, getElementsByTagName, getElementsByName)
 * geben unterschiedliche Datensammlungen zurück
 * es ist eine Funktion zu bauen, die alle diese Sammlungen als Argument akzeptiert,
 * sie durchiteriert und die NodeNames von den enthaltenen Elementen zurückgibt, im Array verpackt
 *
 * DEKLARATION:
 *  function giveNodeNames(args): string[] {
 *       //iterator,
 *  return ArrayOfNames
 *   }
 *
 * AUFRUF:
 *    giveNodeNames(getElementsByClass('importang'))
 *   giveNodeNames(getElementsByName('numbers'))
 *   giveNodeNames(getElementsByTagName('button'))
 *   giveNodeNames(getElementById('pID'))
 */
// function giveNodeNames(arg?: any, ...args: any[]): string[] {
function giveNodeNames() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var arrayOfNodeNames = [];
    // if (arg)
    //     arrayOfNodeNames.push(arg)
    console.log('args :>> ', args);
    if (args[0].nodeName) {
        arrayOfNodeNames.push(args[0].nodeName);
    }
    else {
        for (var _a = 0, _b = args[0]; _a < _b.length; _a++) {
            var iterator = _b[_a];
            // console.log('iterator :>> ', iterator.nodeName);
            arrayOfNodeNames.push(iterator);
        }
    }
    return arrayOfNodeNames;
}
var names;
names = giveNodeNames(document.getElementsByClassName('important'));
console.log('names :>> ', names);
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var iterator = names_1[_i];
    console.log('iterator :>> ', iterator);
}
names = giveNodeNames(document.getElementsByName('numbers'));
console.log('names :>> ', names);
for (var _a = 0, names_2 = names; _a < names_2.length; _a++) {
    var iterator = names_2[_a];
    console.log('iterator :>> ', iterator);
}
names = giveNodeNames(document.getElementsByTagName('button'));
console.log('names :>> ', names);
for (var _b = 0, names_3 = names; _b < names_3.length; _b++) {
    var iterator = names_3[_b];
    console.log('iterator :>> ', iterator);
}
names = giveNodeNames(document.getElementById('pID'));
console.log('names :>> ', names);
for (var _c = 0, names_4 = names; _c < names_4.length; _c++) {
    var iterator = names_4[_c];
    console.log('iterator :>> ', iterator);
}
