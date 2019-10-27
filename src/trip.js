const readlineSync = require("readline-sync");

const students = Number(readlineSync.question("\nStudents: "));
const teachers = Number(readlineSync.question("Teachers: "));
const capacity = Number(readlineSync.question("Bus capacity: "));

let pass = students + teachers;
let buses = Math.ceil(pass/capacity)
let reman = pass % capacity

console.log("\n" + buses + " bus(es) is (are) needed, with " + (reman) + " passenger(s) on the last bus.");
