"use strict";
// wie in C# die Struktur KeyValuePair:
var coord1 = [234, 12];
var coord2 = [34, 56];
var coord3 = [12, 34];
var coord4 = [98, 210];
var coord5 = [290, 10];
var mySVG = document.getElementById('svgId');
var htmlStringForPolygon = "\n<polygon points=\"\n" + coord1 + "\n" + coord2 + "\n" + coord3 + "\n" + coord4 + "\n" + coord5 + "\n\" style=\"fill: lime; stroke:purple; stroke-width: 2\" />\n";
mySVG.innerHTML = htmlStringForPolygon;
// Es gibt keinen Konstruktor für Tupels
// müssen nicht unbedingt Paare sein:
var coord6 = [234, 436, 234];
