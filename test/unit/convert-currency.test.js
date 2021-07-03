const { convertStringToPence, convertToPounds } = require('../../app/calculation/convert-currency')

describe('convert currency', () => {
  test('converts 100 to pence', () => {
    const result = convertStringToPence('100')
    expect(result).toEqual(10000)
  })

  test('converts 100.10 to pence', () => {
    const result = convertStringToPence('100.10')
    expect(result).toEqual(10010)
  })

  test('converts 100.1 to pence', () => {
    const result = convertStringToPence('100.1')
    expect(result).toEqual(10010)
  })

  test('converts 10000 to pounds', () => {
    const result = convertToPounds(10000)
    expect(result).toEqual(100.00)
  })

  test('converts 10010 to pounds', () => {
    const result = convertToPounds(10010)
    expect(result).toEqual(100.10)
  })
})
