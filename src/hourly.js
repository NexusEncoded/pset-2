const readlineSync = require("readline-sync");

const hourly = Number(readlineSync.question("Hourly wage: "));

let mon = Number(readlineSync.question("\nMonday: "));
let tue = Number(readlineSync.question("Tuesday: "));
let wed = Number(readlineSync.question("Wednesday: "));
let thurs = Number(readlineSync.question("Thursday: "));
let fri = Number(readlineSync.question("Friday: "));
let sat = Number(readlineSync.question("Saturday: "));
let sun = Number(readlineSync.question("Sunday: "));

let hours = mon + tue + wed + thurs + fri + sat + sun;
let pay = hours * hourly;

pay1 = pay.toLocaleString('en-US', {style : 'currency', currency : 'USD'});


console.log("\n You'll make " + pay1 + " this week.");
