const readlineSync = require("readline-sync");

let w = readlineSync.question("Width: ");
let l = readlineSync.question("Length: ");
const mathW = w * 25.4;
const mathL = l * 25.4;
const mathFina = mathW * mathL;

mathFinal = Math.round(mathFina*100)/100;
let f = mathFinal.toLocaleString();

console.log("\nA(n) " + w + "-by-"+l+"-inch sheet of paper has an area of " + f +" square millimeter(s).");
