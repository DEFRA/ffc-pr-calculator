const { calculateSingle, calculateMultiple } = require('../../app/calculation')

describe('calculate overall results', () => {
  test('returns 4 results', () => {
    const result = calculateSingle(50000)
    expect(result.overallResult.length).toBe(4)
  })

  test('returns amount lower still returns 4 results', () => {
    const result = calculateSingle(1000)
    expect(result.overallResult.length).toBe(4)
  })

  test('returns correct values for 1000', () => {
    const result = calculateSingle(1000)
    expect(result.overallResult.length).toBe(4)
    expect(result.overallResult[0].schemeYear).toBe(2021)
    expect(result.overallResult[0].bpsValue).toBe(1000)
    expect(result.overallResult[0].reduction).toBe(50)
    expect(result.overallResult[0].payment).toBe(950)

    expect(result.overallResult[1].schemeYear).toBe(2022)
    expect(result.overallResult[1].bpsValue).toBe(1000)
    expect(result.overallResult[1].reduction).toBe(200)
    expect(result.overallResult[1].payment).toBe(800)

    expect(result.overallResult[2].schemeYear).toBe(2023)
    expect(result.overallResult[2].bpsValue).toBe(1000)
    expect(result.overallResult[2].reduction).toBe(350)
    expect(result.overallResult[2].payment).toBe(650)

    expect(result.overallResult[3].schemeYear).toBe(2024)
    expect(result.overallResult[3].bpsValue).toBe(1000)
    expect(result.overallResult[3].reduction).toBe(500)
    expect(result.overallResult[3].payment).toBe(500)
  })

  test('returns correct values for 35000', () => {
    const result = calculateSingle(35000)
    expect(result.overallResult.length).toBe(4)
    expect(result.overallResult[0].schemeYear).toBe(2021)
    expect(result.overallResult[0].bpsValue).toBe(35000)
    expect(result.overallResult[0].reduction).toBe(2000)
    expect(result.overallResult[0].payment).toBe(33000)

    expect(result.overallResult[1].schemeYear).toBe(2022)
    expect(result.overallResult[1].bpsValue).toBe(35000)
    expect(result.overallResult[1].reduction).toBe(7250)
    expect(result.overallResult[1].payment).toBe(27750)

    expect(result.overallResult[2].schemeYear).toBe(2023)
    expect(result.overallResult[2].bpsValue).toBe(35000)
    expect(result.overallResult[2].reduction).toBe(12500)
    expect(result.overallResult[2].payment).toBe(22500)

    expect(result.overallResult[3].schemeYear).toBe(2024)
    expect(result.overallResult[3].bpsValue).toBe(35000)
    expect(result.overallResult[3].reduction).toBe(17750)
    expect(result.overallResult[3].payment).toBe(17250)
  })

  test('returns correct values for 55000', () => {
    const result = calculateSingle(55000)
    expect(result.overallResult.length).toBe(4)
    expect(result.overallResult[0].schemeYear).toBe(2021)
    expect(result.overallResult[0].bpsValue).toBe(55000)
    expect(result.overallResult[0].reduction).toBe(4500)
    expect(result.overallResult[0].payment).toBe(50500)

    expect(result.overallResult[1].schemeYear).toBe(2022)
    expect(result.overallResult[1].bpsValue).toBe(55000)
    expect(result.overallResult[1].reduction).toBe(12750)
    expect(result.overallResult[1].payment).toBe(42250)

    expect(result.overallResult[2].schemeYear).toBe(2023)
    expect(result.overallResult[2].bpsValue).toBe(55000)
    expect(result.overallResult[2].reduction).toBe(21000)
    expect(result.overallResult[2].payment).toBe(34000)

    expect(result.overallResult[3].schemeYear).toBe(2024)
    expect(result.overallResult[3].bpsValue).toBe(55000)
    expect(result.overallResult[3].reduction).toBe(29250)
    expect(result.overallResult[3].payment).toBe(25750)
  })

  test('returns correct values for 155000', () => {
    const result = calculateSingle(155000)
    expect(result.overallResult.length).toBe(4)
    expect(result.overallResult[0].schemeYear).toBe(2021)
    expect(result.overallResult[0].bpsValue).toBe(155000)
    expect(result.overallResult[0].reduction).toBe(24750)
    expect(result.overallResult[0].payment).toBe(130250)

    expect(result.overallResult[1].schemeYear).toBe(2022)
    expect(result.overallResult[1].bpsValue).toBe(155000)
    expect(result.overallResult[1].reduction).toBe(48000)
    expect(result.overallResult[1].payment).toBe(107000)

    expect(result.overallResult[2].schemeYear).toBe(2023)
    expect(result.overallResult[2].bpsValue).toBe(155000)
    expect(result.overallResult[2].reduction).toBe(71250)
    expect(result.overallResult[2].payment).toBe(83750)

    expect(result.overallResult[3].schemeYear).toBe(2024)
    expect(result.overallResult[3].bpsValue).toBe(155000)
    expect(result.overallResult[3].reduction).toBe(94500)
    expect(result.overallResult[3].payment).toBe(60500)
  })

  test('returns overall reductions get higher', () => {
    const result = calculateSingle(155000)

    expect(result.overallResult[3].payment).toBeLessThan(result.overallResult[2].payment)
    expect(result.overallResult[2].payment).toBeLessThan(result.overallResult[1].payment)
    expect(result.overallResult[1].payment).toBeLessThan(result.overallResult[0].payment)
  })

  test('returns overall payments get lower', () => {
    const result = calculateSingle(155000)
    expect(result.overallResult[0].payment).toBeGreaterThan(result.overallResult[1].payment)
    expect(result.overallResult[1].payment).toBeGreaterThan(result.overallResult[2].payment)
    expect(result.overallResult[2].payment).toBeGreaterThan(result.overallResult[3].payment)
  })

  test('returns overall reductions get higher', () => {
    const result = calculateSingle(1000)
    expect(result.overallResult[3].payment).toBeLessThan(result.overallResult[2].payment)
    expect(result.overallResult[2].payment).toBeLessThan(result.overallResult[1].payment)
    expect(result.overallResult[1].payment).toBeLessThan(result.overallResult[0].payment)
  })

  test('returns overall reduction and payment in 2024 are the same for 1000', () => {
    const result = calculateSingle(1000)
    expect(result.overallResult[3].payment).toEqual(result.overallResult[3].reduction)
  })

  test('returns overall reduction and payment in 2024 are the same for 15000', () => {
    const result = calculateSingle(15000)
    expect(result.overallResult[3].payment).toEqual(result.overallResult[3].reduction)
  })
})
