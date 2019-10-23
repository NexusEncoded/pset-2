const readlineSync = require("readline-sync");

let w = readlineSync.question("Width: ");
let l = readlineSync.question("Length: ");
const mathW = w * 2;
const mathL = l * 2;
const mathMid = mathW + mathL;
let mathFinal = (mathMid* 2.54);
mathFinal = Math.round(mathFinal*100)/100;
let f = mathFinal.toLocaleString();

console.log("\nA(n) " + w + "-by-"+l+"-inch sheet of paper has a perimeter of " + f +" centimeter(s).");
