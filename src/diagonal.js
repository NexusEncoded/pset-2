const readlineSync = require("readline-sync");

let w = readlineSync.question("Width: ");
let l = readlineSync.question("Length: ");
const mathW = w ** 2;
const mathL = l ** 2;
const mathMid = mathW + mathL;
let mathFinal = Math.sqrt(mathMid);
mathFinal = Math.round(mathFinal*100)/100;
let f = mathFinal.toLocaleString();
function done(f){
  return Number.parseFloat(f).toFixed(2)
}
console.log("\nA(n) " + w + "-by-"+l+"-inch sheet of paper has a diagonal of " + done(f) +" inch(s).");
