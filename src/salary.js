const readlineSync = require("readline-sync");

const salary = Number(readlineSync.question("\nAnnual salary: "));

const pre = 0.07;
const federal = 0.157;
const state = 0.0447;
const social = 0.062;
const medi = 0.0145;
const payperiod = 24;


const totaltax = federal + state + social + medi;
let firstduc = (1-pre) * salary;
let secduc = (1-totaltax) * firstduc;
let totalpay = secduc/24;
let check = totalpay.toLocaleString('en-US', {style : 'currency' , currency: 'USD'});


console.log("\n Your take-home pay each check will be " +  check + ".");
