// ------------ FUNCTIONS -----------

// 1. Return the string 'Hello world!' from the hello function
function hello() {
  return "Hello world!" 
}

// 2. + 3. Define two functions.
// The first function `sayHi` should return 'Hello!' and the second function `sayBye` should return 'Goodbye!'.

function sayHi () {
  return "Hello!"
}

function sayBye () {
  return "Goodbye!"
}

// 4. Define a function `greet` that returns 'Hey there!'
// Then declare a variable `salutation` and call the function `greet`, set the result of the function to the variable.

function greet (num) {
  return "Hey there!"
}

let salutation = greet()

// 5. What value does `helloResult` have?
function hi() {
  return 'Hi!'
}

let helloResult = hi()
// Un comment and assign your answer to the variable `helloResultIs`.
const helloResultIs = 'Hi!'

// ---------- FUNCTIONS WITH PARAMETERS ---------

// 6. Write a function `shout` that takes a parameter and returns it.
// Example: Calling shout('Echo') should return 'Echo' and shout('Hello') should return 'Hello'

function shout (param) {
  return param
}

shout("Echo")
shout("Hello")

// 7. Which value does `replyResult` have after execution of the following code?
function reply(phrase) {
  return phrase
}

let replyResult = reply('Good morning')

// Un comment and assign your answer to the variable `ReplyResultIs`.
const replyResultIs = 'Good morning'

// 8. Write a function 'helloFriend` to greet a person by name, using a parameter.
// Calling helloFriend('Emily') should return 'Hello Emily!'

function hellowFriend(name){
  return 'Hello ' + name + '!'
}

// 9. Which value does `goodMorningResult` have after execution of the following code?
function goodMorning(name) {
  return 'Good morning ' + name + '!'
}

let goodMorningResult = goodMorning('Jacky')
// Un comment and assign your answer to the variable `goodMorningResultIs`.
const goodMorningResultIs = 'Good morning ' + 'Jacky' + '!'

// 10. Which value does `hiResult` have after execution of the following code?
function hi(name) {
  return 'Hi ' + name + '!'
}

let hi1 = hi('Andy')
let hi2 = hi('Hamish')

let hiResult = hi1 + ' ' + hi2
// Un comment and assign your answer to the variable `hiResultIs`.
const hiResultIs = 'Hi Andy! Hi Hamish!'

// 11. Write a function called `warn` that takes a parameter (it will be a string) and returns the string parameter duplicated, with a space between each string.
// In addition, the value that will be returned should be logged to the console before being returned.

function warn (warning){
  console.loh(warning + ' ' + warning)
  return warning + ' ' + warning
}

warn('Fire')

// ------------ CHECKS -----------
// The below lines of code lets us test it to see how you're doing,
// don't worry about this yet you'll learn it in bootcamp.

// Don't change any code below this comment!
const toExport = {
  hello,
  reply,
  goodMorning,
}
if (typeof sayHi !== 'undefined') toExport.sayHi = sayHi
if (typeof sayBye !== 'undefined') toExport.sayBye = sayBye
if (typeof greet !== 'undefined') toExport.greet = greet
if (typeof salutation !== 'undefined') toExport.salutation = salutation
if (typeof shout !== 'undefined') toExport.shout = shout
if (typeof helloFriend !== 'undefined') toExport.helloFriend = helloFriend
if (typeof helloResultIs !== 'undefined') toExport.helloResultIs = helloResultIs
if (typeof replyResultIs !== 'undefined') toExport.replyResultIs = replyResultIs
if (typeof goodMorningResultIs !== 'undefined') toExport.goodMorningResultIs = goodMorningResultIs
if (typeof hiResultIs !== 'undefined') toExport.hiResultIs = hiResultIs
if (typeof warn !== 'undefined') toExport.warn = warn
module.exports = toExport
