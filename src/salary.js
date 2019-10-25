const readlineSync = require("readline-sync");

const four = 0.07;
const federal = 0.157;
const state = 0.047;
const social = 0.062;
const medi = 0.145;


const salary = Number(readlineSync.question("Annual salary: "));

let gone1 = (1-four)*salary;
let gone2 = (1-federal)*gone1;
let gone3 = (1-state)*gone2;
let gone4 = (1-social)*gone3;
let gone5 = (1-medi)*gone4;
let take = gone5;

let check = take.toLocaleString('en-US', {style : 'currency', currency : 'USD'});

console.log("\n Your take-home pay check will be " + check);
