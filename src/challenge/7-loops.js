// 1. Given the following functions:
function printResult(fruit) {
  console.log('fruit: ' + fruit)
}

function printFruit(fruits) {
  for (let i = 0; i < fruits.length; i++) {
    printResult(fruits[i])
  }
}
// If printFruit was called with ['apple', 'orange', 'banana', 'pineapple']
// How many times would printResult be called?
// Uncomment the following line and save your answer to the `numberPrintResultCalls` variable
// const numberPrintResultCalls = 

// 2. Write a function `logNames` that takes an array as a parameter. 
// It should loop for the length of the array and console.log the name at current position. 
// logNames(['Sally', 'Nikita', 'Arnav', 'Akira']) would console.log each person's name. 4 names in total.
// logNames(['Arnav', 'Akira']) would console.log each person's name. 2 names in total.


/** STRETCH **/
// the next two challenges can be a bit tricky, remember to ask for help if you need it

// 3. Write a function `countShortNames` that takes an array of strings and returns a count of all the strings with a length less than 5
// countShortNames(['Sally', 'John', 'James', 'Alice', 'Sue']) would return 2
// Try using `for of` https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of


// 4. Write a function `everySecondItem` that takes an array of items and returns a new array that only includes every second item
// everySecondItem([1, 'test', 'something', 23, 42, {greeting: 'hi'}]) would return ['test', 23, {greeting: 'hi'}]
// Try using `for in` https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// The remainder (%) operator might also be useful https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
// Array.push() can help add things to a results array https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push


// ------------ CHECKS -----------
// The below lines of code lets us test it to see how you're doing,
// don't worry about this yet you'll learn it in Bootcamp. 

// Don't change any code below this comment!
const toExport = {
}
if (typeof numberPrintResultCalls !== 'undefined') toExport.numberPrintResultCalls = numberPrintResultCalls
if (typeof logNames !== 'undefined') toExport.logNames = logNames
if (typeof countShortNames !== 'undefined') toExport.countShortNames = countShortNames
if (typeof everySecondItem !== 'undefined') toExport.everySecondItem = everySecondItem
module.exports = toExport

