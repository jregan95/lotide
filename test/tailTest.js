const tail = require('../tail');
const assertEqual = require('../assertEqual');



const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");

const myArr = [1, 5, 6, 7];
const val = tail(myArr);
assertEqual(val.length , myArr.length - 1);

const secArr = [1];
const secVal = tail(secArr);
assertEqual(secVal.length, secArr. length - 1);

const thirdArr = [];
const thirdVal = tail(thirdArr);
assertEqual(thirdVal.length, 0);