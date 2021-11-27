// 1. if statement
// Write a function `isMatch` that checks two values for "strict equality". Hint: Look up the term "strict equality" if you are not sure.
// If the two values match, the string 'Match' should be returned.
// Example: isAMatch(1, 1) should return 'Match' and isAMatch(1, 2) will return nothing.

function isMatch (a, b) {
    if ( a === b) {
        return 'Match';
    }else{
        return 
    } 

}

// 2. if, else statement
// Write a function `isAMatch` that checks two values for strict equality. 
// If the two values match, the string 'Match' should be returned. 
// If they are not a match, you should get 'Not a Match'.
// Example: isAMatch(1, 1) should return 'Match' and isAMatch(1, 2) should return 'Not a Match'.

function isAMatch (a, b) {
    if (a === b) {
        return 'Match'
    }else{
        return 'Not a match'
    }
}


// 3. if, else if, else statement
// Write a function `greetings` that takes a string. 
// If the string strictly equals 'Te Reo' the string 'Kia ora' should be returned. 
// If the string strictly equals 'English' the string 'Hello' should be returned. 
// Otherwise return a '👋'
// Example: greetings('Te Reo') should return 'Kia ora' and greetings('Dutch') should return '👋'.

function greetings (differentGreet){
    if (differentGreet === 'Te Reo'){
        return 'Kia ora'
    }else if(differentGreet === 'English'){
        return 'Hello' 
    }else {
        return '👋'
    }
}


// 4. switch statement
// Write a Function `chooseGreetingLanguage`that takes a string.
// If the string matches a known case it should return, otherwise return the default.
// Use a switch statement (no if / else)
// Examples: 
// chooseGreetingLanguage('Te Reo') returns 'Kia ora'
// chooseGreetingLanguage('English') returns 'Hello'
// chooseGreetingLanguage('Spanish') returns 'Hola'
// chooseGreetingLanguage('Mandarin') returns 'Nǐ hǎo'
// chooseGreetingLanguage('Samoan') returns 'Talofa'
// Anything else passed in will return '👋'


function chooseGreetingLanguage(word) {
    switch(word) {
        case "Te Reo" :
            return 'Kia ora';
            break;
        case "English" :
            return 'Hello';
            break;
        case "Spanish" :
            return 'Hola'
            break;
        case "Mandarin" :
            return 'Nǐ hǎo';
            break;
        case "Samoan" :
            return 'Talofa';
            break;
        default:
            return '👋'
        }
    }

// 5. ternary
// Write a function `isSignedIn` that checks if isMember is truthy.
// Example: isSignedIn(true) should return the value 'Log out'.
// Example: isSignedIn(false) should return the value 'Sign in'.

function isSignedIn (isMember) {
    return (isMember ? 'Log out': 'Sign in')
}

// ------------ CHECKS -----------
// The below lines of code lets us test it to see how you're doing,
// don't worry about this yet you'll learn it in Bootcamp. 

// Don't change any code below this comment!
const toExport = {
}
if (typeof isMatch !== 'undefined') toExport.isMatch = isMatch
if (typeof isAMatch !== 'undefined') toExport.isAMatch = isAMatch
if (typeof greetings !== 'undefined') toExport.greetings = greetings
if (typeof chooseGreetingLanguage !== 'undefined') toExport.chooseGreetingLanguage = chooseGreetingLanguage
if (typeof isSignedIn !== 'undefined') toExport.isSignedIn = isSignedIn
module.exports = toExport
