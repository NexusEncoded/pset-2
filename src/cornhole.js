const length = 48;
const width = 24;
const dia = 6;

let boardarea = length * width;
let radius = dia / 2;
let circlearea = Math.PI * (radius ** 2);

let cornhole = boardarea - circlearea;
cornhole = cornhole.toLocaleString("en", {maximumFractionDigits: 2, minimumFractionDigits: 2});
console.log("The surface area of a standard Cornhole board is " + cornhole + " square inch(es).");
