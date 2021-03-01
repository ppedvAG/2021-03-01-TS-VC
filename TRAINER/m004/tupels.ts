// wie in C# die Struktur KeyValuePair:

let coord1: [number, number] = [234, 12]
let coord2: [number, number] = [34, 56]
let coord3: [number, number] = [12, 34]
let coord4: [number, number] = [98, 210]
let coord5: [number, number] = [290, 10]

let mySVG = document.getElementById('svgId');

let htmlStringForPolygon = `
<polygon points="
${coord1}
${coord2}
${coord3}
${coord4}
${coord5}
" style="fill: lime; stroke:purple; stroke-width: 2" />
`
mySVG!.innerHTML = htmlStringForPolygon

// Es gibt keinen Konstruktor für Tupels

// müssen nicht unbedingt Paare sein:
let coord6: [number, number, number] = [234,436,234]