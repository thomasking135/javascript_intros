// ----- Logical Operators -----

// 1. plus
// Write a function `add` that takes two variables and adds the two together and returns the result.
// Example: add(2, 1) will return 3.
// Example: add(8, 2) will return 10.
function add(num1, num2) {

}

// 2. minus
// Write a function `minus` that takes two variables and minuses the second variable from the first and returns the result.
// Example: minus(2, 1) will return 1, 
// Example: minus(8, 2) will return 6.
function minus(num1, num2) {

}

// 3. multiply 
// Write a function `multiply` that takes two variables and muliplys the two variables and returns the result.
// Example: multiply(3, 2) will return 6.
// Example: multiply(9, 2) will return 18.
function multiply(num1, num2) {

}

// 4. divide
// Write a function `divide` that takes two variables and divides the two variables and returns the result.
// Example: divide(6, 2) will return 3.
// Example: divide(15, 3) will return 5.
function divide(num1, num2) {

}

// 5. increment
// Write a function `increment` that takes a variable and increases the value of the variable and returns the result.
// Example: increment(22) will return 23. 
// Example: increment(34) will return 35.
// Tip : research the difference between num++ and ++num
function increment(num) {

}

// 6. decrement
// Write a function `decrement` that takes a variable and decreases the value of the variable and returns the result.
// Example: decrement(6) will return 5. 
// Example: decrement(15) will return 14.
// Tip: research the difference between num-- and --num
function decrement(num) {

}

// 7. and
// Write a function `and` that takes two booleans as parameters.
// Return the first and second parameter.
// Example: and(true, true) will return true.
// Example: and(true, false) will return false.
function and(bool1, bool2) {

}

// 8. or
// Write a function `or` that takes two booleans as parameters.
// If either of the two parameters are true, return true.
// If neither are true it should return false.
// Example: or(true, false) will return true.
// Example: or(false false) will return false.
function or(bool1, bool2) {

}

// 9. not
// Write a function `not` that takes a boolean as a parameter.
// Return the opposite boolean to whatever is passed in.
// Example: not(false) will return true.
// Example: not(true) will return false.
function not(bool) {

}

// ----- Comparison Operators -----


// 10. greater than
// Write a function `isGreaterThan` that takes two parameters and checks if the first parameter is greater than the second.
// Example: isGreaterThan(12, 10) should return true.
// Example: isGreaterThan(12, 24) should return false.
function isGreaterThan(num1, num2) {

}

// 11. less than
// Write a function `isLessThan` that takes two parameters and checks if the first parameter is less than the second.
// Example: isLessThan(63, 102) should return true.
// Example: isLessThan(63, 60) should return false.
function isLessThan(num1, num2) {

}

// 12. greater than or equal to
// Write a function `isGreaterOrEqual` that takes two parameters and checks if the first parameter is greater than the second.
// Example: isGreaterOrEqual(12, 12) should return true, isGreaterOrEqual(14, 12) should return true.
// Example: isGreaterOrEqual(12, 24) should return false.
function isGreaterOrEqual(num1, num2) {

}

// 13. less than or equal to
// Write a function `isLessOrEqual` that takes two parameters and checks if the first parameter is greater than the second.
// Example: isLessOrEqual(10, 10) should return true, isLessOrEqual(8, 10) should return true.
// Example: isLessOrEqual(123, 24) should return false.
function isLessOrEqual(num1, num2) {

}


// 14. equal to
// Write a function `isSimilar` that takes two parameters and checks the two values for equality.
// Example: isSimilar(10, '10') should return true.
// Example: isSimilar(10, '14') should return false.
function isSimilar(num, stringNum) {

}

// 15. equal value and equal type
// Write a function `isSameTypeAndVal` that takes two parameters and checks the two values for strict equality.
// Example: isSameTypeAndVal('1', 1) should return false. 
// Example: isSameTypeAndVal('password', 'passW0rd') should return false.
function isSameTypeAndVal(stringOrNum1, stringOrNum2) {

}

// 16. not equal
// Write a function `isNotSimilar` that takes two parameters and checks the two values do not equal the same value.
// Example: isNotSimilar('1', 1) should return false. 
// Example: isNotSimilar(1, '2') should return true.
function isNotSimilar(stringOrNum1, stringOrNum2) {

}

// 17. not equal value or type
// Write a function `isNotSameTypeOrVal` that takes two parameters and checks the two values do not equal the same value or type.
// Example: isNotSameTypeOrVal(234, '123') should return true - because (it is true) they ARE NOT same value or the same data type.
// Example: isNotSameTypeOrVal(123, '123') should return false - because (it is false that) they are the same value.
// Example: isNotSameTypeOrVal(234, 123) should return false - because (it is false that) they are the same data type.
function isNotSameTypeOrVal(one, two) {

}

// ------------ CHECKS -----------
// The below lines of code lets us test it to see how you're doing,
// don't worry about this yet you'll learn it in bootcamp. 

// Don't change any code below this comment!
module.exports = {
  add,
  minus,
  multiply,
  divide,
  increment,
  decrement,
  and,
  or,
  not,
  isGreaterThan,
  isLessThan,
  isGreaterOrEqual,
  isLessOrEqual,
  isSimilar,
  isSameTypeAndVal,
  isNotSimilar,
  isNotSameTypeOrVal
}

