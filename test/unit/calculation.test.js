const calculate = require('../../app/calculation')

describe('calculate', () => {
  describe('single value input with higher amount', () => {
    test('200000 returns multiple bands', () => {
      const result = calculate(200000)
      expect(result.bandResult.length).toBe(4)
      expect(result.bandResult.filter(x => x.band === 1).length).toBe(1)
      expect(result.bandResult.filter(x => x.band === 2).length).toBe(1)
      expect(result.bandResult.filter(x => x.band === 3).length).toBe(1)
      expect(result.bandResult.filter(x => x.band === 4).length).toBe(1)
    })

    test('200000 includes all scheme years in each band', () => {
      const result = calculate(200000)
      result.bandResult.forEach(band => {
        expect(band.result.filter(x => x.schemeYear === 2024).length).toBe(1)
        expect(band.result.filter(x => x.schemeYear === 2025).length).toBe(1)
        expect(band.result.filter(x => x.schemeYear === 2026).length).toBe(1)
        expect(band.result.filter(x => x.schemeYear === 2027).length).toBe(1)
        expect(band.result.length).toBe(4)
      })
    })

    test('200000 calculates 2024 reductions correctly for each band', () => {
      const result = calculate(200000)
      const band1 = result.bandResult.find(x => x.band === 1)
      const band2 = result.bandResult.find(x => x.band === 2)
      const band3 = result.bandResult.find(x => x.band === 3)
      const band4 = result.bandResult.find(x => x.band === 4)
      expect(band1.result.find(x => x.schemeYear === 2024).reduction).toBe(15000)
      expect(band2.result.find(x => x.schemeYear === 2024).reduction).toBe(11000)
      expect(band3.result.find(x => x.schemeYear === 2024).reduction).toBe(65000)
      expect(band4.result.find(x => x.schemeYear === 2024).reduction).toBe(35000)
    })

    test('200000 calculates 2025 reductions correctly for each band', () => {
      const result = calculate(200000)
      const band1 = result.bandResult.find(x => x.band === 1)
      const band2 = result.bandResult.find(x => x.band === 2)
      const band3 = result.bandResult.find(x => x.band === 3)
      const band4 = result.bandResult.find(x => x.band === 4)
      expect(band1.result.find(x => x.schemeYear === 2025).reduction).toBe(22800)
      expect(band2.result.find(x => x.schemeYear === 2025).reduction).toBe(20000)
      expect(band3.result.find(x => x.schemeYear === 2025).reduction).toBe(100000)
      expect(band4.result.find(x => x.schemeYear === 2025).reduction).toBe(50000)
    })

    test('200000 calculates 2026 reductions correctly for each band', () => {
      const result = calculate(200000)
      const band1 = result.bandResult.find(x => x.band === 1)
      const band2 = result.bandResult.find(x => x.band === 2)
      const band3 = result.bandResult.find(x => x.band === 3)
      const band4 = result.bandResult.find(x => x.band === 4)
      expect(band1.result.find(x => x.schemeYear === 2026).reduction).toBe(29400)
      expect(band2.result.find(x => x.schemeYear === 2026).reduction).toBe(20000)
      expect(band3.result.find(x => x.schemeYear === 2026).reduction).toBe(100000)
      expect(band4.result.find(x => x.schemeYear === 2026).reduction).toBe(50000)
    })

    test('200000 calculates 2027 reductions correctly for each band', () => {
      const result = calculate(200000)
      const band1 = result.bandResult.find(x => x.band === 1)
      const band2 = result.bandResult.find(x => x.band === 2)
      const band3 = result.bandResult.find(x => x.band === 3)
      const band4 = result.bandResult.find(x => x.band === 4)
      expect(band1.result.find(x => x.schemeYear === 2027).reduction).toBe(29400)
      expect(band2.result.find(x => x.schemeYear === 2027).reduction).toBe(20000)
      expect(band3.result.find(x => x.schemeYear === 2027).reduction).toBe(100000)
      expect(band4.result.find(x => x.schemeYear === 2027).reduction).toBe(50000)
    })

    test('200000 calculates total payment correctly for each scheme year', () => {
      const result = calculate(200000)

      const totalPayment2024 = result.bandResult.reduce((sum, band) => {
        return sum + (band.result.find(x => x.schemeYear === 2024)?.payment || 0)
      }, 0)
      expect(totalPayment2024).toBe(74000)

      const totalPayment2025 = result.bandResult.reduce((sum, band) => {
        return sum + (band.result.find(x => x.schemeYear === 2025)?.payment || 0)
      }, 0)
      expect(totalPayment2025).toBe(7200)

      const totalPayment2026 = result.bandResult.reduce((sum, band) => {
        return sum + (band.result.find(x => x.schemeYear === 2026)?.payment || 0)
      }, 0)
      expect(totalPayment2026).toBe(600)

      const totalPayment2027 = result.bandResult.reduce((sum, band) => {
        return sum + (band.result.find(x => x.schemeYear === 2027)?.payment || 0)
      }, 0)
      expect(totalPayment2027).toBe(600)
    })
  })
})
