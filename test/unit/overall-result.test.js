const calculate = require('../../app/calculation')

describe('calculate overall results', () => {
  test('returns 4 results', () => {
    const result = calculate(50000)
    expect(result.overallResult.length).toBe(3)
  })

  test('returns amount lower still returns 4 results', () => {
    const result = calculate(1000)
    expect(result.overallResult.length).toBe(3)
  })

  test('returns correct values for 1000', () => {
    const result = calculate(1000)
    expect(result.overallResult.length).toBe(3)
    expect(result.overallResult[0].schemeYear).toBe(2021)
    expect(result.overallResult[0].value).toBe(1000)
    expect(result.overallResult[0].reduction).toBe(50)
    expect(result.overallResult[0].payment).toBe(950)

    expect(result.overallResult[1].schemeYear).toBe(2022)
    expect(result.overallResult[1].value).toBe(1000)
    expect(result.overallResult[1].reduction).toBe(200)
    expect(result.overallResult[1].payment).toBe(800)

    expect(result.overallResult[2].schemeYear).toBe(2023)
    expect(result.overallResult[2].value).toBe(1000)
    expect(result.overallResult[2].reduction).toBe(350)
    expect(result.overallResult[2].payment).toBe(650)
  })

  test('returns correct values for 35000', () => {
    const result = calculate(35000)
    expect(result.overallResult.length).toBe(3)
    expect(result.overallResult[0].schemeYear).toBe(2021)
    expect(result.overallResult[0].value).toBe(35000)
    expect(result.overallResult[0].reduction).toBe(2000)
    expect(result.overallResult[0].payment).toBe(33000)

    expect(result.overallResult[1].schemeYear).toBe(2022)
    expect(result.overallResult[1].value).toBe(35000)
    expect(result.overallResult[1].reduction).toBe(7250)
    expect(result.overallResult[1].payment).toBe(27750)

    expect(result.overallResult[2].schemeYear).toBe(2023)
    expect(result.overallResult[2].value).toBe(35000)
    expect(result.overallResult[2].reduction).toBe(12500)
    expect(result.overallResult[2].payment).toBe(22500)
  })

  test('returns correct values for 55000', () => {
    const result = calculate(55000)
    expect(result.overallResult.length).toBe(3)
    expect(result.overallResult[0].schemeYear).toBe(2021)
    expect(result.overallResult[0].value).toBe(55000)
    expect(result.overallResult[0].reduction).toBe(4500)
    expect(result.overallResult[0].payment).toBe(50500)

    expect(result.overallResult[1].schemeYear).toBe(2022)
    expect(result.overallResult[1].value).toBe(55000)
    expect(result.overallResult[1].reduction).toBe(12750)
    expect(result.overallResult[1].payment).toBe(42250)

    expect(result.overallResult[2].schemeYear).toBe(2023)
    expect(result.overallResult[2].value).toBe(55000)
    expect(result.overallResult[2].reduction).toBe(21000)
    expect(result.overallResult[2].payment).toBe(34000)
  })

  test('returns correct values for 155000', () => {
    const result = calculate(155000)
    expect(result.overallResult.length).toBe(3)
    expect(result.overallResult[0].schemeYear).toBe(2021)
    expect(result.overallResult[0].value).toBe(155000)
    expect(result.overallResult[0].reduction).toBe(24750)
    expect(result.overallResult[0].payment).toBe(130250)

    expect(result.overallResult[1].schemeYear).toBe(2022)
    expect(result.overallResult[1].value).toBe(155000)
    expect(result.overallResult[1].reduction).toBe(48000)
    expect(result.overallResult[1].payment).toBe(107000)

    expect(result.overallResult[2].schemeYear).toBe(2023)
    expect(result.overallResult[2].value).toBe(155000)
    expect(result.overallResult[2].reduction).toBe(71250)
    expect(result.overallResult[2].payment).toBe(83750)
  })

  test('returns overall reductions get higher', () => {
    const result = calculate(155000)

    expect(result.overallResult[2].payment).toBeLessThan(result.overallResult[1].payment)
    expect(result.overallResult[1].payment).toBeLessThan(result.overallResult[0].payment)
  })

  test('returns overall payments get lower', () => {
    const result = calculate(155000)
    expect(result.overallResult[0].payment).toBeGreaterThan(result.overallResult[1].payment)
    expect(result.overallResult[1].payment).toBeGreaterThan(result.overallResult[2].payment)
  })

  test('returns overall reductions get higher', () => {
    const result = calculate(1000)
    expect(result.overallResult[2].payment).toBeLessThan(result.overallResult[1].payment)
    expect(result.overallResult[1].payment).toBeLessThan(result.overallResult[0].payment)
  })
})
