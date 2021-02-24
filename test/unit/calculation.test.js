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

  test('20000 calculates 2021 reduction', () => {
    const result = calculate(20000)
    expect(result.result[0].result.find(x => x.schemeYear === 2021).reduction).toBe(1000)
    expect(result.result[0].result.length).toBe(4)
  })

  test('20000 calculates 2022 reduction', () => {
    const result = calculate(20000)
    expect(result.result[0].result.find(x => x.schemeYear === 2022).reduction).toBe(4000)
    expect(result.result[0].result.length).toBe(4)
  })

  test('20000 calculates 2023 reduction', () => {
    const result = calculate(20000)
    expect(result.result[0].result.find(x => x.schemeYear === 2023).reduction).toBe(7000)
    expect(result.result[0].result.length).toBe(4)
  })

  test('20000 calculates 2024 reduction', () => {
    const result = calculate(20000)
    expect(result.result[0].result.find(x => x.schemeYear === 2024).reduction).toBe(10000)
    expect(result.result[0].result.length).toBe(4)
  })

  test('20000 calculates 2021 payment', () => {
    const result = calculate(20000)
    expect(result.result[0].result.find(x => x.schemeYear === 2021).payment).toBe(19000)
    expect(result.result[0].result.length).toBe(4)
  })

  test('20000 calculates 2022 payment', () => {
    const result = calculate(20000)
    expect(result.result[0].result.find(x => x.schemeYear === 2022).payment).toBe(16000)
    expect(result.result[0].result.length).toBe(4)
  })

  test('20000 calculates 2023 payment', () => {
    const result = calculate(20000)
    expect(result.result[0].result.find(x => x.schemeYear === 2023).payment).toBe(13000)
    expect(result.result[0].result.length).toBe(4)
  })

  test('20000 calculates 2024 payment', () => {
    const result = calculate(20000)
    expect(result.result[0].result.find(x => x.schemeYear === 2024).payment).toBe(10000)
    expect(result.result[0].result.length).toBe(4)
  })

  test('75000 includes bands 1 and 2', () => {
    const result = calculate(40000)
    expect(result.result.filter(x => x.band === 1).length).toBe(1)
    expect(result.result.filter(x => x.band === 2).length).toBe(1)
    expect(result.result.length).toBe(2)
  })

  test('40000 calculates 2021 reduction', () => {
    const result = calculate(40000)
    expect(result.result.find(x => x.band === 1).result.find(x => x.schemeYear === 2021).reduction).toBe(1500)
    expect(result.result.find(x => x.band === 2).result.find(x => x.schemeYear === 2021).reduction).toBe(1000)
    expect(result.result[0].result.length).toBe(4)
    expect(result.result[1].result.length).toBe(4)
  })

  test('40000 calculates 2022 reduction', () => {
    const result = calculate(40000)
    expect(result.result.find(x => x.band === 1).result.find(x => x.schemeYear === 2022).reduction).toBe(6000)
    expect(result.result.find(x => x.band === 2).result.find(x => x.schemeYear === 2022).reduction).toBe(2500)
    expect(result.result[0].result.length).toBe(4)
    expect(result.result[1].result.length).toBe(4)
  })

  test('40000 calculates 2023 reduction', () => {
    const result = calculate(40000)
    expect(result.result.find(x => x.band === 1).result.find(x => x.schemeYear === 2023).reduction).toBe(10500)
    expect(result.result.find(x => x.band === 2).result.find(x => x.schemeYear === 2023).reduction).toBe(4000)
    expect(result.result[0].result.length).toBe(4)
    expect(result.result[1].result.length).toBe(4)
  })

  test('40000 calculates 2024 reduction', () => {
    const result = calculate(40000)
    expect(result.result.find(x => x.band === 1).result.find(x => x.schemeYear === 2024).reduction).toBe(15000)
    expect(result.result.find(x => x.band === 2).result.find(x => x.schemeYear === 2024).reduction).toBe(5500)
    expect(result.result[0].result.length).toBe(4)
    expect(result.result[1].result.length).toBe(4)
  })

  test('40000 calculates 2021 payment', () => {
    const result = calculate(40000)
    expect(result.result.find(x => x.band === 1).result.find(x => x.schemeYear === 2021).payment).toBe(28500)
    expect(result.result.find(x => x.band === 2).result.find(x => x.schemeYear === 2021).payment).toBe(9000)
    expect(result.result[0].result.length).toBe(4)
    expect(result.result[1].result.length).toBe(4)
  })

  test('40000 calculates 2022 payment', () => {
    const result = calculate(40000)
    expect(result.result.find(x => x.band === 1).result.find(x => x.schemeYear === 2022).payment).toBe(24000)
    expect(result.result.find(x => x.band === 2).result.find(x => x.schemeYear === 2022).payment).toBe(7500)
    expect(result.result[0].result.length).toBe(4)
    expect(result.result[1].result.length).toBe(4)
  })

  test('40000 calculates 2023 payment', () => {
    const result = calculate(40000)
    expect(result.result.find(x => x.band === 1).result.find(x => x.schemeYear === 2023).payment).toBe(19500)
    expect(result.result.find(x => x.band === 2).result.find(x => x.schemeYear === 2023).payment).toBe(6000)
    expect(result.result[0].result.length).toBe(4)
    expect(result.result[1].result.length).toBe(4)
  })

  test('40000 calculates 2024 payment', () => {
    const result = calculate(40000)
    expect(result.result.find(x => x.band === 1).result.find(x => x.schemeYear === 2024).payment).toBe(15000)
    expect(result.result.find(x => x.band === 2).result.find(x => x.schemeYear === 2024).payment).toBe(4500)
    expect(result.result[0].result.length).toBe(4)
    expect(result.result[1].result.length).toBe(4)
  })

  test('75000 includes bands 1, 2 and 3', () => {
    const result = calculate(75000)
    expect(result.result.filter(x => x.band === 1).length).toBe(1)
    expect(result.result.filter(x => x.band === 2).length).toBe(1)
    expect(result.result.filter(x => x.band === 3).length).toBe(1)
    expect(result.result.length).toBe(3)
  })

  test('75000 calculates 2021 reduction', () => {
    const result = calculate(75000)
    expect(result.result.find(x => x.band === 1).result.find(x => x.schemeYear === 2021).reduction).toBe(1500)
    expect(result.result.find(x => x.band === 2).result.find(x => x.schemeYear === 2021).reduction).toBe(2000)
    expect(result.result.find(x => x.band === 3).result.find(x => x.schemeYear === 2021).reduction).toBe(5000)
    expect(result.result[0].result.length).toBe(4)
    expect(result.result[1].result.length).toBe(4)
    expect(result.result[2].result.length).toBe(4)
  })

  test('75000 calculates 2022 reduction', () => {
    const result = calculate(75000)
    expect(result.result.find(x => x.band === 1).result.find(x => x.schemeYear === 2022).reduction).toBe(6000)
    expect(result.result.find(x => x.band === 2).result.find(x => x.schemeYear === 2022).reduction).toBe(5000)
    expect(result.result.find(x => x.band === 3).result.find(x => x.schemeYear === 2022).reduction).toBe(8750)
    expect(result.result[0].result.length).toBe(4)
    expect(result.result[1].result.length).toBe(4)
    expect(result.result[2].result.length).toBe(4)
  })

  test('75000 calculates 2023 reduction', () => {
    const result = calculate(75000)
    expect(result.result.find(x => x.band === 1).result.find(x => x.schemeYear === 2023).reduction).toBe(10500)
    expect(result.result.find(x => x.band === 2).result.find(x => x.schemeYear === 2023).reduction).toBe(8000)
    expect(result.result.find(x => x.band === 3).result.find(x => x.schemeYear === 2023).reduction).toBe(12500)
    expect(result.result[0].result.length).toBe(4)
    expect(result.result[1].result.length).toBe(4)
    expect(result.result[2].result.length).toBe(4)
  })

  test('75000 calculates 2024 reduction', () => {
    const result = calculate(75000)
    expect(result.result.find(x => x.band === 1).result.find(x => x.schemeYear === 2024).reduction).toBe(15000)
    expect(result.result.find(x => x.band === 2).result.find(x => x.schemeYear === 2024).reduction).toBe(11000)
    expect(result.result.find(x => x.band === 3).result.find(x => x.schemeYear === 2024).reduction).toBe(16250)
    expect(result.result[0].result.length).toBe(4)
    expect(result.result[1].result.length).toBe(4)
    expect(result.result[2].result.length).toBe(4)
  })

  test('75000 calculates 2021 payment', () => {
    const result = calculate(75000)
    expect(result.result.find(x => x.band === 1).result.find(x => x.schemeYear === 2021).payment).toBe(28500)
    expect(result.result.find(x => x.band === 2).result.find(x => x.schemeYear === 2021).payment).toBe(18000)
    expect(result.result.find(x => x.band === 3).result.find(x => x.schemeYear === 2021).payment).toBe(20000)
    expect(result.result[0].result.length).toBe(4)
    expect(result.result[1].result.length).toBe(4)
    expect(result.result[2].result.length).toBe(4)
  })

  test('75000 calculates 2022 payment', () => {
    const result = calculate(75000)
    expect(result.result.find(x => x.band === 1).result.find(x => x.schemeYear === 2022).payment).toBe(24000)
    expect(result.result.find(x => x.band === 2).result.find(x => x.schemeYear === 2022).payment).toBe(15000)
    expect(result.result.find(x => x.band === 3).result.find(x => x.schemeYear === 2022).payment).toBe(16250)
    expect(result.result[0].result.length).toBe(4)
    expect(result.result[1].result.length).toBe(4)
    expect(result.result[2].result.length).toBe(4)
  })

  test('75000 calculates 2023 payment', () => {
    const result = calculate(75000)
    expect(result.result.find(x => x.band === 1).result.find(x => x.schemeYear === 2023).payment).toBe(19500)
    expect(result.result.find(x => x.band === 2).result.find(x => x.schemeYear === 2023).payment).toBe(12000)
    expect(result.result.find(x => x.band === 3).result.find(x => x.schemeYear === 2023).payment).toBe(12500)
    expect(result.result[0].result.length).toBe(4)
    expect(result.result[1].result.length).toBe(4)
    expect(result.result[2].result.length).toBe(4)
  })

  test('75000 calculates 2024 payment', () => {
    const result = calculate(75000)
    expect(result.result.find(x => x.band === 1).result.find(x => x.schemeYear === 2024).payment).toBe(15000)
    expect(result.result.find(x => x.band === 2).result.find(x => x.schemeYear === 2024).payment).toBe(9000)
    expect(result.result.find(x => x.band === 3).result.find(x => x.schemeYear === 2024).payment).toBe(8750)
    expect(result.result[0].result.length).toBe(4)
    expect(result.result[1].result.length).toBe(4)
    expect(result.result[2].result.length).toBe(4)
  })

  test('250000 includes bands 1, 2, 3 and 4', () => {
    const result = calculate(250000)
    expect(result.result.filter(x => x.band === 1).length).toBe(1)
    expect(result.result.filter(x => x.band === 2).length).toBe(1)
    expect(result.result.filter(x => x.band === 3).length).toBe(1)
    expect(result.result.filter(x => x.band === 4).length).toBe(1)
    expect(result.result.length).toBe(4)
  })

  test('250000 calculates 2021 reduction', () => {
    const result = calculate(250000)
    expect(result.result.find(x => x.band === 1).result.find(x => x.schemeYear === 2021).reduction).toBe(1500)
    expect(result.result.find(x => x.band === 2).result.find(x => x.schemeYear === 2021).reduction).toBe(2000)
    expect(result.result.find(x => x.band === 3).result.find(x => x.schemeYear === 2021).reduction).toBe(20000)
    expect(result.result.find(x => x.band === 4).result.find(x => x.schemeYear === 2021).reduction).toBe(25000)
    expect(result.result[0].result.length).toBe(4)
    expect(result.result[1].result.length).toBe(4)
    expect(result.result[2].result.length).toBe(4)
    expect(result.result[3].result.length).toBe(4)
  })

  test('250000 calculates 2022 reduction', () => {
    const result = calculate(250000)
    expect(result.result.find(x => x.band === 1).result.find(x => x.schemeYear === 2022).reduction).toBe(6000)
    expect(result.result.find(x => x.band === 2).result.find(x => x.schemeYear === 2022).reduction).toBe(5000)
    expect(result.result.find(x => x.band === 3).result.find(x => x.schemeYear === 2022).reduction).toBe(35000)
    expect(result.result.find(x => x.band === 4).result.find(x => x.schemeYear === 2022).reduction).toBe(40000)
    expect(result.result[0].result.length).toBe(4)
    expect(result.result[1].result.length).toBe(4)
    expect(result.result[2].result.length).toBe(4)
    expect(result.result[3].result.length).toBe(4)
  })

  test('250000 calculates 2023 reduction', () => {
    const result = calculate(250000)
    expect(result.result.find(x => x.band === 1).result.find(x => x.schemeYear === 2023).reduction).toBe(10500)
    expect(result.result.find(x => x.band === 2).result.find(x => x.schemeYear === 2023).reduction).toBe(8000)
    expect(result.result.find(x => x.band === 3).result.find(x => x.schemeYear === 2023).reduction).toBe(50000)
    expect(result.result.find(x => x.band === 4).result.find(x => x.schemeYear === 2023).reduction).toBe(55000)
    expect(result.result[0].result.length).toBe(4)
    expect(result.result[1].result.length).toBe(4)
    expect(result.result[2].result.length).toBe(4)
    expect(result.result[3].result.length).toBe(4)
  })

  test('250000 calculates 2024 reduction', () => {
    const result = calculate(250000)
    expect(result.result.find(x => x.band === 1).result.find(x => x.schemeYear === 2024).reduction).toBe(15000)
    expect(result.result.find(x => x.band === 2).result.find(x => x.schemeYear === 2024).reduction).toBe(11000)
    expect(result.result.find(x => x.band === 3).result.find(x => x.schemeYear === 2024).reduction).toBe(65000)
    expect(result.result.find(x => x.band === 4).result.find(x => x.schemeYear === 2024).reduction).toBe(70000)
    expect(result.result[0].result.length).toBe(4)
    expect(result.result[1].result.length).toBe(4)
    expect(result.result[2].result.length).toBe(4)
    expect(result.result[3].result.length).toBe(4)
  })

  test('250000 calculates 2021 payment', () => {
    const result = calculate(250000)
    expect(result.result.find(x => x.band === 1).result.find(x => x.schemeYear === 2021).payment).toBe(28500)
    expect(result.result.find(x => x.band === 2).result.find(x => x.schemeYear === 2021).payment).toBe(18000)
    expect(result.result.find(x => x.band === 3).result.find(x => x.schemeYear === 2021).payment).toBe(80000)
    expect(result.result.find(x => x.band === 4).result.find(x => x.schemeYear === 2021).payment).toBe(75000)
    expect(result.result[0].result.length).toBe(4)
    expect(result.result[1].result.length).toBe(4)
    expect(result.result[2].result.length).toBe(4)
    expect(result.result[3].result.length).toBe(4)
  })

  test('250000 calculates 2022 payment', () => {
    const result = calculate(250000)
    expect(result.result.find(x => x.band === 1).result.find(x => x.schemeYear === 2022).payment).toBe(24000)
    expect(result.result.find(x => x.band === 2).result.find(x => x.schemeYear === 2022).payment).toBe(15000)
    expect(result.result.find(x => x.band === 3).result.find(x => x.schemeYear === 2022).payment).toBe(65000)
    expect(result.result.find(x => x.band === 4).result.find(x => x.schemeYear === 2022).payment).toBe(60000)
    expect(result.result[0].result.length).toBe(4)
    expect(result.result[1].result.length).toBe(4)
    expect(result.result[2].result.length).toBe(4)
    expect(result.result[3].result.length).toBe(4)
  })

  test('250000 calculates 2023 payment', () => {
    const result = calculate(250000)
    expect(result.result.find(x => x.band === 1).result.find(x => x.schemeYear === 2023).payment).toBe(19500)
    expect(result.result.find(x => x.band === 2).result.find(x => x.schemeYear === 2023).payment).toBe(12000)
    expect(result.result.find(x => x.band === 3).result.find(x => x.schemeYear === 2023).payment).toBe(50000)
    expect(result.result.find(x => x.band === 4).result.find(x => x.schemeYear === 2023).payment).toBe(45000)
    expect(result.result[0].result.length).toBe(4)
    expect(result.result[1].result.length).toBe(4)
    expect(result.result[2].result.length).toBe(4)
    expect(result.result[3].result.length).toBe(4)
  })

  test('250000 calculates 2024 payment', () => {
    const result = calculate(250000)
    expect(result.result.find(x => x.band === 1).result.find(x => x.schemeYear === 2024).payment).toBe(15000)
    expect(result.result.find(x => x.band === 2).result.find(x => x.schemeYear === 2024).payment).toBe(9000)
    expect(result.result.find(x => x.band === 3).result.find(x => x.schemeYear === 2024).payment).toBe(35000)
    expect(result.result.find(x => x.band === 4).result.find(x => x.schemeYear === 2024).payment).toBe(30000)
    expect(result.result[0].result.length).toBe(4)
    expect(result.result[1].result.length).toBe(4)
    expect(result.result[2].result.length).toBe(4)
    expect(result.result[3].result.length).toBe(4)
  })
})
