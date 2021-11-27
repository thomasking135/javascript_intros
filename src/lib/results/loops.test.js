const resultsForLoops = require('./loops')
describe('7. resultsForLoops', () => {
  it('defaults to incorrect', () => {
    expect.assertions(4)
    const results = resultsForLoops({})
    for (const result of results) {
      expect(result.correct).toEqual(false)
    }
  })
  it('1. number of print result calls', () => {
    const numberPrintResultCalls = 4
    const result = resultsForLoops({ numberPrintResultCalls })[0]
    expect(result.correct).toEqual(true)
  })
  it('2. loops over names and calls console.log for each one', () => {
    let logNames = () => {}
    let result = resultsForLoops({ logNames })[1]
    expect(result.correct).toEqual(false)

    logNames = (names) => console.log(names)
    result = resultsForLoops({ logNames })[1]
    expect(result.correct).toEqual(false)

    logNames = (names) => {
      names.forEach(name => console.log('test'))
    }
    result = resultsForLoops({ logNames })[1]
    expect(result.correct).toEqual(false)

    logNames = (names) => {
      names.forEach(name => console.log(name))
    }
    result = resultsForLoops({ logNames })[1]
    expect(result.correct).toEqual(true)
  })

  it('3. countShortNames returns correct count', () => {
    let countShortNames = (items) => items.length
    let result = resultsForLoops({ countShortNames })[2]
    expect(result.correct).toEqual(false)

    countShortNames = (items) => {
      const length = items.filter(i => i.length < 5).length
      return length
    }
    result = resultsForLoops({ countShortNames })[2]
    expect(result.correct).toEqual(false)
    expect(result.tip).toMatch(/use for ... of/)

    countShortNames = (items) => {
      let count = 0
      for (const item of items) {
        if (item.length < 5) count++
      }
      return count
    }
    result = resultsForLoops({ countShortNames })[2]
    expect(result.correct).toEqual(true)
  })

  it('4. everySecondItem returns correct items', () => {
    let everySecondItem = (items) => items
    let result = resultsForLoops({ everySecondItem })[3]
    expect(result.correct).toEqual(false)

    everySecondItem = (items) => {
      return items.filter((i, idx) => idx % 2 === 1)
    }
    result = resultsForLoops({ everySecondItem })[3]
    expect(result.correct).toEqual(false)
    expect(result.tip).toMatch(/use for ... in/)

    everySecondItem = (items) => {
      const results = []
      for (const index in items) {
        if (index % 2 === 1) {
          results.push(items[index])
        }
      }
      return results
    }
    result = resultsForLoops({ everySecondItem })[3]
    expect(result.correct).toEqual(true)
  })
})
