const readlineSync = require("readline-sync");

const hw = 0.15
const quiz = 0.35
const test = 0.50
const assi = 3
let hw1 = readlineSync.question("\nEnter three homework grades.\n");
let hw2 = readlineSync.question("")
let hw3 = readlineSync.question("")

let q1 = readlineSync.question("\nEnter three quiz grades.\n");
let q2 = readlineSync.question("")
let q3 = readlineSync.question("")

let t1 = readlineSync.question("\nEnter three test grades.\n");
let t2 = readlineSync.question("")
let t3 = readlineSync.question("")

let totalhw = (hw1+hw2+hw3/assi) * hw
let totalquiz = (q1+q2+q3/assi) * quiz
let totaltest = (t1+t2+t3/assi) * test
let classgrade = totalhw+totalquiz+totaltest
classgrade = Math.round(classgrade*100)/100;





console.log(classgrade);
