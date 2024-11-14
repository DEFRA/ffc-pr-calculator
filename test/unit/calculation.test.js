const calculate = require('../../app/calculation')

describe('calculate', () => {
  describe('single value input', () => {
    test('1000 returns only band 1', () => {
      const result = calculate(1000)
      expect(result.bandResult.filter(x => x.band === 1).length).toBe(1)
      expect(result.bandResult.length).toBe(1)
    })

    test('1000 includes all scheme years', () => {
      const result = calculate(1000)
      expect(result.bandResult[0].result.filter(x => x.schemeYear === 2024).length).toBe(1)
      expect(result.bandResult[0].result.filter(x => x.schemeYear === 2025).length).toBe(1)
      expect(result.bandResult[0].result.length).toBe(2)
    })

    test('1000 calculates 2024 reduction', () => {
      const result = calculate(1000)
      expect(result.bandResult[0].result.find(x => x.schemeYear === 2024).reduction).toBe(500)
      expect(result.bandResult[0].result.length).toBe(2)
    })

    test('1000 calculates 2025 reduction', () => {
      const result = calculate(1000)
      expect(result.bandResult[0].result.find(x => x.schemeYear === 2025).reduction).toBe(760)
      expect(result.bandResult[0].result.length).toBe(2)
    })

    test('1000 calculates 2024 payment', () => {
      const result = calculate(1000)
      expect(result.bandResult[0].result.find(x => x.schemeYear === 2024).payment).toBe(500)
      expect(result.bandResult[0].result.length).toBe(2)
    })

    test('1000 calculates 2025 payment', () => {
      const result = calculate(1000)
      expect(result.bandResult[0].result.find(x => x.schemeYear === 2025).payment).toBe(240)
      expect(result.bandResult[0].result.length).toBe(2)
    })
  })

  describe('object value input', () => {
    test('returns correct values for different year inputs', () => {
      const values = {
        value2024: 1000,
        value2025: 2000
      }
      const result = calculate(values)

      expect(result.bandResult[0].result.find(x => x.schemeYear === 2024).payment).toBe(500)
      expect(result.bandResult[0].result.find(x => x.schemeYear === 2025).payment).toBe(480)
      expect(result.bandResult[0].result.length).toBe(2)
    })

    test('handles missing year values', () => {
      const values = {
        value2024: 1000
      }
      const result = calculate(values)

      expect(result.bandResult[0].result.find(x => x.schemeYear === 2024).payment).toBe(500)
      expect(result.bandResult[0].result.find(x => x.schemeYear === 2025).payment).toBe(0)
      expect(result.bandResult[0].result.length).toBe(2)
    })
  })
})
