const { buildMultipleFunctionResult } = require('../')
function resultsForConditionals ({
  isMatch,
  isAMatch,
  greetings,
  chooseGreetingLanguage,
  isSignedIn
}) {
  return [
    buildMultipleFunctionResult(isMatch, [
      [[1, 2], undefined],
      [[1, '1'], undefined],
      [[2, 2], 'Match']
    ]),
    buildMultipleFunctionResult(isAMatch, [
      [[1, 2], 'Not a Match'],
      [[2, 2], 'Match'],
      [[1, '1'], 'Not a Match']
    ]),
    buildMultipleFunctionResult(greetings, [
      [['Te Reo'], 'Kia ora'],
      [['English'], 'Hello'],
      [[], '👋']
    ]),
    chooseGreetingLanguageResults(chooseGreetingLanguage),
    isSignedInResult(isSignedIn)
  ]
}

function chooseGreetingLanguageResults (fn) {
  if (!fn) {
    return {
      correct: false,
      tip: '[[chooseGreetingLanguage not defined'
    }
  }
  if (fn.toString().match(/if/)) {
    return {
      correct: false,
      actual: fn.toString(),
      tip: 'Function must not use a if statement'
    }
  }
  if (!fn.toString().match(/switch/)) {
    return {
      correct: false,
      actual: fn.toString(),
      tip: 'Function must use a switch statement'
    }
  }

  const inputs = [
    [['Te Reo'], 'Kia ora'],
    [['English'], 'Hello'],
    [['Spanish'], 'Hola'],
    [['Mandarin'], 'Nǐ hǎo'],
    [['Samoan'], 'Talofa'],
    [['whatever'], '👋']
  ]

  return buildMultipleFunctionResult(fn, inputs)
}

function isSignedInResult (fn) {
  if (!fn) {
    return {
      correct: false,
      tip: 'isSignedIn is not a function'
    }
  }
  if (fn.toString().match(/if/)) {
    return {
      correct: false,
      actual: fn.toString(),
      tip: 'isSignedIn should not use if statement'
    }
  }
  if (!fn.toString().match(/\?.*:/)) {
    return {
      correct: false,
      actual: fn.toString(),
      tip: 'must use ternary operator'
    }
  }
  return buildMultipleFunctionResult(fn, [
    [[true], 'Log out'],
    [[false], 'Sign in']
  ])
}

module.exports = resultsForConditionals
