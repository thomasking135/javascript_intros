const { buildFunctionResult, buildMultipleFunctionResult } = require('../')
function resultsForFunctions ({
  hello,
  sayHi,
  sayBye,
  greet,
  salutation,
  helloResultIs,
  shout,
  replyResultIs,
  helloFriend,
  goodMorningResultIs,
  hiResultIs,
  warn
}) {
  const greetResult = buildFunctionResult(greet, [], 'Hey there!')
  if (greetResult.correct && salutation !== 'Hey there!') {
    greetResult.correct = false
    greetResult.response = salutation
    greetResult.tip = "So close, don't forget to assign the result to salutation"
  }

  const oldConsole = console.log
  let logResult
  console.log = str => { logResult = str }
  const warnResult = buildFunctionResult(warn, ['Fire'], 'Fire Fire')
  console.log = oldConsole
  if (warnResult.correct && logResult !== 'Fire Fire') {
    warnResult.correct = false
    warnResult.response = logResult
    warnResult.tip = "Nearly, don't forget to call console.log with the result"
  }

  return [
    buildFunctionResult(hello, [], 'Hello world!'),
    buildFunctionResult(sayHi, [], 'Hello!'),
    buildFunctionResult(sayBye, [], 'Goodbye!'),
    greetResult,
    {
      correct: helloResultIs === 'Hi!',
      response: `helloResultIs: ${helloResultIs}`,
      tip: helloResultIs !== undefined ? '- Nearly, try reading through it again' : ''
    },
    buildMultipleFunctionResult(shout, [
      [['Echo'], 'Echo'],
      [['Word'], 'Word']
    ]),
    {
      correct: replyResultIs === 'Good morning',
      response: `replyResultIs ${replyResultIs}`,
      tip: replyResultIs !== undefined ? '- Nearly, try reading through it again' : ''
    },
    buildFunctionResult(helloFriend, ['Emily'], 'Hello Emily!'),
    {
      correct: goodMorningResultIs === 'Good morning Jacky!',
      response: `goodMorningResultIs ${goodMorningResultIs}`,
      tip: goodMorningResultIs !== undefined ? '- Nearly, try reading through it again' : ''
    },
    {
      correct: hiResultIs === 'Hi Andy! Hi Hamish!',
      response: `hiResultIs: ${hiResultIs}`,
      tip: hiResultIs !== undefined ? ' - Nearly, try reading through it again' : ''
    },
    warnResult
  ]
}

module.exports = resultsForFunctions
