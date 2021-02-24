const round = require('../../app/round')

describe('round', () => {
  test('round up rounds up if 5', () => {
    const result = round(1.005, 2)
    expect(result).toEqual(1.01)
  })

  test('round up rounds up if greater than 5', () => {
    const result = round(1.006, 2)
    expect(result).toEqual(1.01)
  })

  test('round up rounds down if less than 5', () => {
    const result = round(1.004, 2)
    expect(result).toEqual(1.00)
  })

  test('round up does no rounding if integer', () => {
    const result = round(1, 2)
    expect(result).toEqual(1.00)
  })

  test('round up handles 0', () => {
    const result = round(0.000, 2)
    expect(result).toEqual(0.00)
  })

  test('round up handles 0 with rounding', () => {
    const result = round(0.005, 2)
    expect(result).toEqual(0.01)
  })

  test('round up handles negatives', () => {
    const result = round(-1.005, 2)
    expect(result).toEqual(-1.00)
  })

  test('round up handles large number (7) of decimals', () => {
    const result = round(1.0000005, 6)
    expect(result).toEqual(1.000001)
  })

  test('round up handles no requested decimals', () => {
    const result = round(1.0000005, 0)
    expect(result).toEqual(1)
  })

  test('round up rounds no requested decimals up if 5', () => {
    const result = round(1.5, 0)
    expect(result).toEqual(2)
  })

  test('round up rounds no requested decimals down if less than 5', () => {
    const result = round(1.4, 0)
    expect(result).toEqual(1)
  })

  test('round up rounds no requested decimals up if greater than 5', () => {
    const result = round(1.6, 0)
    expect(result).toEqual(2)
  })

  test('round down rounds down if 5', () => {
    const result = round(1.005, 2, true)
    expect(result).toEqual(1.00)
  })

  test('round down rounds up if greater than 5', () => {
    const result = round(1.006, 2, true)
    expect(result).toEqual(1.01)
  })

  test('round down rounds down if less than 5', () => {
    const result = round(1.004, 2, true)
    expect(result).toEqual(1.00)
  })

  test('round down does no rounding if integer', () => {
    const result = round(1, 2, true)
    expect(result).toEqual(1.00)
  })

  test('round down handles 0', () => {
    const result = round(0.000, 2, true)
    expect(result).toEqual(0.00)
  })

  test('round down handles 0 with rounding', () => {
    const result = round(0.005, 2, true)
    expect(result).toEqual(0.01)
  })

  test('round down handles negatives', () => {
    const result = round(-1.005, 2, true)
    expect(result).toEqual(-1.00)
  })

  test('round down handles large number (7) of decimals', () => {
    const result = round(1.0000005, 6, true)
    expect(result).toEqual(1.000001)
  })

  test('round down handles no requested decimals', () => {
    const result = round(1.0000005, 0, true)
    expect(result).toEqual(1)
  })

  test('round down rounds no requested decimals up if 5', () => {
    const result = round(1.5, 0, true)
    expect(result).toEqual(2)
  })

  test('round down rounds no requested decimals down if less than 5', () => {
    const result = round(1.4, 0, true)
    expect(result).toEqual(1)
  })

  test('round down rounds no requested decimals up if greater than 5', () => {
    const result = round(1.6, 0, true)
    expect(result).toEqual(2)
  })
})
