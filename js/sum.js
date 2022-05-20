let myArray1 = ["marzouk", "niyas", "thariq"];
let myArray2 = ["marzouk", "niyas", "rashed", "azkar"];

let myFinalArray = [...new Set([...myArray1 ,...myArray2])]; 

console.log(myFinalArray);