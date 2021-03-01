"use strict";
// wie in C# die Struktur KeyValuePair:
let coord1 = [234, 12];
let coord2 = [34, 56];
let coord3 = [12, 34];
let coord4 = [98, 210];
let coord5 = [290, 10];
let mySVG = document.getElementById('svgId');
let htmlStringForPolygon = `
<polygon points="
${coord1}
${coord2}
${coord3}
${coord4}
${coord5}
" style="fill: lime; stroke:purple; stroke-width: 2" />
`;
mySVG.innerHTML = htmlStringForPolygon;
// Es gibt keinen Konstruktor für Tupels
// müssen nicht unbedingt Paare sein:
let coord6 = [234, 436, 234];
