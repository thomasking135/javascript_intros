// 1. Define an object `contact`. This object should contain:
// The property `name` and the value 'Leon Kim'.
// The property `address` and the value '123 Main St'.
// The property `phone` and the value '021 555 555'.

const contact = {
  name: 'Leon Kim',
  address: '123 Main St',
  phone: 021555555
}


// 2. From the object `receipt` access the name property and set that as the value of a variable named 'customer'.
// Make sure you access the object's property, do not just type the string name.
const receipt = {
  price: 89.99,
  store: 'Ariels Diner',
  name: 'Marta'
}

let customer = receipt.name
console.log(receipt.name)


// 3. Access the `name` property in the `person` object and reassign the value to be a different name (Perhaps your name?).
const person = {
  name: 'Navita',
  age: '28',
  eyeColor: 'brown'
}

console.log(person.name)
person.name = 'Thomas'


// ------------ CHECKS -----------
// The below lines of code lets us test it to see how you're doing,
// don't worry about this yet you'll learn it in bootcamp.

// Don't change any code below this comment!
const toExport = {
  person,
  receipt
}
if (typeof contact !== 'undefined') toExport.contact = contact
if (typeof customer !== 'undefined') toExport.customer = customer
module.exports = toExport
