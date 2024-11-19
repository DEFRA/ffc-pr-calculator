const calculate = require('../../app/calculation')

describe('calculate overall results', () => {
  test('returns 2 results for single value input', () => {
    const result = calculate(50000)
    expect(result.overallResult.length).toBe(2)
  })

  test('returns amount lower still returns 2 results', () => {
    const result = calculate(1000)
    expect(result.overallResult.length).toBe(2)
  })

  test('returns correct values for 1000', () => {
    const result = calculate(1000)
    expect(result.overallResult.length).toBe(2)

    expect(result.overallResult[0].schemeYear).toBe(2025)
    expect(result.overallResult[0].value).toBe(1000)
    expect(result.overallResult[0].reduction).toBe(760)
    expect(result.overallResult[0].payment).toBe(240)

    expect(result.overallResult[1].schemeYear).toBe(2024)
    expect(result.overallResult[1].value).toBe(1000)
    expect(result.overallResult[1].reduction).toBe(500)
    expect(result.overallResult[1].payment).toBe(500)
  })

  test('returns correct values for 35000', () => {
    const result = calculate(35000)
    expect(result.overallResult.length).toBe(2)

    expect(result.overallResult[1].schemeYear).toBe(2024)
    expect(result.overallResult[1].value).toBe(35000)
    expect(result.overallResult[1].reduction).toBe(17750)
    expect(result.overallResult[1].payment).toBe(17250)

    expect(result.overallResult[0].schemeYear).toBe(2025)
    expect(result.overallResult[0].value).toBe(35000)
    expect(result.overallResult[0].reduction).toBe(27800)
    expect(result.overallResult[0].payment).toBe(7200)
  })

  test('returns correct values for object input', () => {
    const values = {
      value2024: 1000,
      value2025: 2000
    }
    const result = calculate(values)
    expect(result.overallResult.length).toBe(2)

    expect(result.overallResult[1].schemeYear).toBe(2024)
    expect(result.overallResult[1].value).toBe(1000)
    expect(result.overallResult[1].reduction).toBe(500)
    expect(result.overallResult[1].payment).toBe(500)

    expect(result.overallResult[0].schemeYear).toBe(2025)
    expect(result.overallResult[0].value).toBe(2000)
    expect(result.overallResult[0].reduction).toBe(1520) // 76% of 2000
    expect(result.overallResult[0].payment).toBe(480)
  })

  test('handles missing year values', () => {
    const values = {
      value2024: 1000
    }
    const result = calculate(values)
    expect(result.overallResult.length).toBe(2)

    expect(result.overallResult[1].schemeYear).toBe(2024)
    expect(result.overallResult[1].value).toBe(1000)
    expect(result.overallResult[1].reduction).toBe(500)
    expect(result.overallResult[1].payment).toBe(500)

    expect(result.overallResult[0].schemeYear).toBe(2025)
    expect(result.overallResult[0].value).toBe(0)
    expect(result.overallResult[0].reduction).toBe(0)
    expect(result.overallResult[0].payment).toBe(0)
  })
})
