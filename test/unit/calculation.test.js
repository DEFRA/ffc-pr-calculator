const calculate = require('../../app/calculation')

describe('calculating a reductions', () => {
  test('Should return a calculation object', async () => {
    const result = calculate(1000)
    expect(result).toStrictEqual({
      success: true
    })
  })
})
