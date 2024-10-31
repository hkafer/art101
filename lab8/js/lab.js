// Lab 8 - Anon Functions and Callbacks
// Author: Hailey Kafer
// Date: October 22, 2024

array = [1, 2, 3, 4, 5, 6]
console.log("First Array", array);

// Adds five
function addFive(x) {
return (x + 5);
}

// Tests function
var secondArray = array.map(addFive);
console.log("Second array", secondArray);

// Multiplies by five
function multiplyFive(x) {
return (x * 5);
}

// Tests function
var thirdArray = array.map(multiplyFive)
console.log("Third array", thirdArray );
