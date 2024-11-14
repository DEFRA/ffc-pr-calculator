const calculate = require('../../app/calculation')

describe('calculate', () => {
  test('returns only band 1', () => {
    const values = {
      value2024: 15000,
      value2025: 15000
    }

    const result = calculate(values)

    expect(result.bandResult.filter(x => x.band === 1).length).toBe(1)
    expect(result.bandResult.filter(x => x.band === 2).length).toBe(0)
    expect(result.bandResult.filter(x => x.band === 3).length).toBe(0)
    expect(result.bandResult.filter(x => x.band === 4).length).toBe(0)
  })

  test('returns only band 1 and band 2', () => {
    const values = {
      value2024: 35000,
      value2025: 35000
    }

    const result = calculate(values)

    expect(result.bandResult.filter(x => x.band === 1).length).toBe(1)
    expect(result.bandResult.filter(x => x.band === 2).length).toBe(1)
    expect(result.bandResult.filter(x => x.band === 3).length).toBe(0)
    expect(result.bandResult.filter(x => x.band === 4).length).toBe(0)
  })

  test('returns only band 1, band 2 and band 3', () => {
    const values = {
      value2024: 55000,
      value2025: 55000
    }

    const result = calculate(values)

    expect(result.bandResult.filter(x => x.band === 1).length).toBe(1)
    expect(result.bandResult.filter(x => x.band === 2).length).toBe(1)
    expect(result.bandResult.filter(x => x.band === 3).length).toBe(1)
    expect(result.bandResult.filter(x => x.band === 4).length).toBe(0)
  })

  test('returns only band 1, band 2, band 3 and band 4', () => {
    const values = {
      value2024: 85000,
      value2025: 85000
    }

    const result = calculate(values)

    expect(result.bandResult.filter(x => x.band === 1).length).toBe(1)
    expect(result.bandResult.filter(x => x.band === 2).length).toBe(1)
    expect(result.bandResult.filter(x => x.band === 3).length).toBe(1)
    expect(result.bandResult.filter(x => x.band === 4).length).toBe(0)
  })

  test('handles single value input', () => {
    const value = 50000

    const result = calculate(value)

    expect(result.bandResult.filter(x => x.band === 1).length).toBe(1)
    expect(result.bandResult.filter(x => x.band === 2).length).toBe(1)
    expect(result.bandResult.filter(x => x.band === 3).length).toBe(0)
    expect(result.bandResult.filter(x => x.band === 4).length).toBe(0)
  })
})
