const calculate = require('../../app/calculation')

describe('calculate', () => {
  test('1000 returns only band 1', () => {
    const result = calculate(1000)
    expect(result.result.filter(x => x.band === 1).length).toBe(1)
    expect(result.result.length).toBe(1)
  })

  test('1000 includes all scheme years', () => {
    const result = calculate(1000)
    expect(result.result[0].result.filter(x => x.schemeYear === 2021).length).toBe(1)
    expect(result.result[0].result.filter(x => x.schemeYear === 2022).length).toBe(1)
    expect(result.result[0].result.filter(x => x.schemeYear === 2023).length).toBe(1)
    expect(result.result[0].result.filter(x => x.schemeYear === 2024).length).toBe(1)
    expect(result.result[0].result.length).toBe(4)
  })

  test('1000 calculates 2021 reduction', () => {
    const result = calculate(1000)
    expect(result.result[0].result.find(x => x.schemeYear === 2021).reduction).toBe(50)
    expect(result.result[0].result.length).toBe(4)
  })

  test('1000 calculates 2022 reduction', () => {
    const result = calculate(1000)
    expect(result.result[0].result.find(x => x.schemeYear === 2022).reduction).toBe(200)
    expect(result.result[0].result.length).toBe(4)
  })

  test('1000 calculates 2023 reduction', () => {
    const result = calculate(1000)
    expect(result.result[0].result.find(x => x.schemeYear === 2023).reduction).toBe(350)
    expect(result.result[0].result.length).toBe(4)
  })

  test('1000 calculates 2024 reduction', () => {
    const result = calculate(1000)
    expect(result.result[0].result.find(x => x.schemeYear === 2024).reduction).toBe(500)
    expect(result.result[0].result.length).toBe(4)
  })

  test('1000 calculates 2021 payment', () => {
    const result = calculate(1000)
    expect(result.result[0].result.find(x => x.schemeYear === 2021).payment).toBe(950)
    expect(result.result[0].result.length).toBe(4)
  })

  test('1000 calculates 2022 payment', () => {
    const result = calculate(1000)
    expect(result.result[0].result.find(x => x.schemeYear === 2022).payment).toBe(800)
    expect(result.result[0].result.length).toBe(4)
  })

  test('1000 calculates 2023 payment', () => {
    const result = calculate(1000)
    expect(result.result[0].result.find(x => x.schemeYear === 2023).payment).toBe(650)
    expect(result.result[0].result.length).toBe(4)
  })

  test('1000 calculates 2024 payment', () => {
    const result = calculate(1000)
    expect(result.result[0].result.find(x => x.schemeYear === 2024).payment).toBe(500)
    expect(result.result[0].result.length).toBe(4)
  })
})
