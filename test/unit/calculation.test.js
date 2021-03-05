const { calculateFromValue } = require('../../app/calculation')

describe('calculate', () => {
  test('1000 returns only band 1', () => {
    const result = calculateFromValue(1000)
    expect(result.bandResult.filter(x => x.band === 1).length).toBe(1)
    expect(result.bandResult.length).toBe(1)
  })

  test('1000 includes all scheme years', () => {
    const result = calculateFromValue(1000)
    expect(result.bandResult[0].result.filter(x => x.schemeYear === 2021).length).toBe(1)
    expect(result.bandResult[0].result.filter(x => x.schemeYear === 2022).length).toBe(1)
    expect(result.bandResult[0].result.filter(x => x.schemeYear === 2023).length).toBe(1)
    expect(result.bandResult[0].result.filter(x => x.schemeYear === 2024).length).toBe(1)
    expect(result.bandResult[0].result.length).toBe(4)
  })

  test('1000 calculates 2021 reduction', () => {
    const result = calculateFromValue(1000)
    expect(result.bandResult[0].result.find(x => x.schemeYear === 2021).reduction).toBe(50)
    expect(result.bandResult[0].result.length).toBe(4)
  })

  test('1000 calculates 2022 reduction', () => {
    const result = calculateFromValue(1000)
    expect(result.bandResult[0].result.find(x => x.schemeYear === 2022).reduction).toBe(200)
    expect(result.bandResult[0].result.length).toBe(4)
  })

  test('1000 calculates 2023 reduction', () => {
    const result = calculateFromValue(1000)
    expect(result.bandResult[0].result.find(x => x.schemeYear === 2023).reduction).toBe(350)
    expect(result.bandResult[0].result.length).toBe(4)
  })

  test('1000 calculates 2024 reduction', () => {
    const result = calculateFromValue(1000)
    expect(result.bandResult[0].result.find(x => x.schemeYear === 2024).reduction).toBe(500)
    expect(result.bandResult[0].result.length).toBe(4)
  })

  test('1000 calculates 2021 payment', () => {
    const result = calculateFromValue(1000)
    expect(result.bandResult[0].result.find(x => x.schemeYear === 2021).payment).toBe(950)
    expect(result.bandResult[0].result.length).toBe(4)
  })

  test('1000 calculates 2022 payment', () => {
    const result = calculateFromValue(1000)
    expect(result.bandResult[0].result.find(x => x.schemeYear === 2022).payment).toBe(800)
    expect(result.bandResult[0].result.length).toBe(4)
  })

  test('1000 calculates 2023 payment', () => {
    const result = calculateFromValue(1000)
    expect(result.bandResult[0].result.find(x => x.schemeYear === 2023).payment).toBe(650)
    expect(result.bandResult[0].result.length).toBe(4)
  })

  test('1000 calculates 2024 payment', () => {
    const result = calculateFromValue(1000)
    expect(result.bandResult[0].result.find(x => x.schemeYear === 2024).payment).toBe(500)
    expect(result.bandResult[0].result.length).toBe(4)
  })

  test('20000 calculates 2021 reduction', () => {
    const result = calculateFromValue(20000)
    expect(result.bandResult[0].result.find(x => x.schemeYear === 2021).reduction).toBe(1000)
    expect(result.bandResult[0].result.length).toBe(4)
  })

  test('20000 calculates 2022 reduction', () => {
    const result = calculateFromValue(20000)
    expect(result.bandResult[0].result.find(x => x.schemeYear === 2022).reduction).toBe(4000)
    expect(result.bandResult[0].result.length).toBe(4)
  })

  test('20000 calculates 2023 reduction', () => {
    const result = calculateFromValue(20000)
    expect(result.bandResult[0].result.find(x => x.schemeYear === 2023).reduction).toBe(7000)
    expect(result.bandResult[0].result.length).toBe(4)
  })

  test('20000 calculates 2024 reduction', () => {
    const result = calculateFromValue(20000)
    expect(result.bandResult[0].result.find(x => x.schemeYear === 2024).reduction).toBe(10000)
    expect(result.bandResult[0].result.length).toBe(4)
  })

  test('20000 calculates 2021 payment', () => {
    const result = calculateFromValue(20000)
    expect(result.bandResult[0].result.find(x => x.schemeYear === 2021).payment).toBe(19000)
    expect(result.bandResult[0].result.length).toBe(4)
  })

  test('20000 calculates 2022 payment', () => {
    const result = calculateFromValue(20000)
    expect(result.bandResult[0].result.find(x => x.schemeYear === 2022).payment).toBe(16000)
    expect(result.bandResult[0].result.length).toBe(4)
  })

  test('20000 calculates 2023 payment', () => {
    const result = calculateFromValue(20000)
    expect(result.bandResult[0].result.find(x => x.schemeYear === 2023).payment).toBe(13000)
    expect(result.bandResult[0].result.length).toBe(4)
  })

  test('20000 calculates 2024 payment', () => {
    const result = calculateFromValue(20000)
    expect(result.bandResult[0].result.find(x => x.schemeYear === 2024).payment).toBe(10000)
    expect(result.bandResult[0].result.length).toBe(4)
  })

  test('40000 includes bands 1 and 2', () => {
    const result = calculateFromValue(40000)
    expect(result.bandResult.filter(x => x.band === 1).length).toBe(1)
    expect(result.bandResult.filter(x => x.band === 2).length).toBe(1)
    expect(result.bandResult.length).toBe(2)
  })

  test('40000 calculates 2021 reduction', () => {
    const result = calculateFromValue(40000)
    expect(result.bandResult.find(x => x.band === 1).result.find(x => x.schemeYear === 2021).reduction).toBe(1500)
    expect(result.bandResult.find(x => x.band === 2).result.find(x => x.schemeYear === 2021).reduction).toBe(1000)
    expect(result.bandResult[0].result.length).toBe(4)
    expect(result.bandResult[1].result.length).toBe(4)
  })

  test('40000 calculates 2022 reduction', () => {
    const result = calculateFromValue(40000)
    expect(result.bandResult.find(x => x.band === 1).result.find(x => x.schemeYear === 2022).reduction).toBe(6000)
    expect(result.bandResult.find(x => x.band === 2).result.find(x => x.schemeYear === 2022).reduction).toBe(2500)
    expect(result.bandResult[0].result.length).toBe(4)
    expect(result.bandResult[1].result.length).toBe(4)
  })

  test('40000 calculates 2023 reduction', () => {
    const result = calculateFromValue(40000)
    expect(result.bandResult.find(x => x.band === 1).result.find(x => x.schemeYear === 2023).reduction).toBe(10500)
    expect(result.bandResult.find(x => x.band === 2).result.find(x => x.schemeYear === 2023).reduction).toBe(4000)
    expect(result.bandResult[0].result.length).toBe(4)
    expect(result.bandResult[1].result.length).toBe(4)
  })

  test('40000 calculates 2024 reduction', () => {
    const result = calculateFromValue(40000)
    expect(result.bandResult.find(x => x.band === 1).result.find(x => x.schemeYear === 2024).reduction).toBe(15000)
    expect(result.bandResult.find(x => x.band === 2).result.find(x => x.schemeYear === 2024).reduction).toBe(5500)
    expect(result.bandResult[0].result.length).toBe(4)
    expect(result.bandResult[1].result.length).toBe(4)
  })

  test('40000 calculates 2021 payment', () => {
    const result = calculateFromValue(40000)
    expect(result.bandResult.find(x => x.band === 1).result.find(x => x.schemeYear === 2021).payment).toBe(28500)
    expect(result.bandResult.find(x => x.band === 2).result.find(x => x.schemeYear === 2021).payment).toBe(9000)
    expect(result.bandResult[0].result.length).toBe(4)
    expect(result.bandResult[1].result.length).toBe(4)
  })

  test('40000 calculates 2022 payment', () => {
    const result = calculateFromValue(40000)
    expect(result.bandResult.find(x => x.band === 1).result.find(x => x.schemeYear === 2022).payment).toBe(24000)
    expect(result.bandResult.find(x => x.band === 2).result.find(x => x.schemeYear === 2022).payment).toBe(7500)
    expect(result.bandResult[0].result.length).toBe(4)
    expect(result.bandResult[1].result.length).toBe(4)
  })

  test('40000 calculates 2023 payment', () => {
    const result = calculateFromValue(40000)
    expect(result.bandResult.find(x => x.band === 1).result.find(x => x.schemeYear === 2023).payment).toBe(19500)
    expect(result.bandResult.find(x => x.band === 2).result.find(x => x.schemeYear === 2023).payment).toBe(6000)
    expect(result.bandResult[0].result.length).toBe(4)
    expect(result.bandResult[1].result.length).toBe(4)
  })

  test('40000 calculates 2024 payment', () => {
    const result = calculateFromValue(40000)
    expect(result.bandResult.find(x => x.band === 1).result.find(x => x.schemeYear === 2024).payment).toBe(15000)
    expect(result.bandResult.find(x => x.band === 2).result.find(x => x.schemeYear === 2024).payment).toBe(4500)
    expect(result.bandResult[0].result.length).toBe(4)
    expect(result.bandResult[1].result.length).toBe(4)
  })

  test('75000 includes bands 1, 2 and 3', () => {
    const result = calculateFromValue(75000)
    expect(result.bandResult.filter(x => x.band === 1).length).toBe(1)
    expect(result.bandResult.filter(x => x.band === 2).length).toBe(1)
    expect(result.bandResult.filter(x => x.band === 3).length).toBe(1)
    expect(result.bandResult.length).toBe(3)
  })

  test('75000 calculates 2021 reduction', () => {
    const result = calculateFromValue(75000)
    expect(result.bandResult.find(x => x.band === 1).result.find(x => x.schemeYear === 2021).reduction).toBe(1500)
    expect(result.bandResult.find(x => x.band === 2).result.find(x => x.schemeYear === 2021).reduction).toBe(2000)
    expect(result.bandResult.find(x => x.band === 3).result.find(x => x.schemeYear === 2021).reduction).toBe(5000)
    expect(result.bandResult[0].result.length).toBe(4)
    expect(result.bandResult[1].result.length).toBe(4)
    expect(result.bandResult[2].result.length).toBe(4)
  })

  test('75000 calculates 2022 reduction', () => {
    const result = calculateFromValue(75000)
    expect(result.bandResult.find(x => x.band === 1).result.find(x => x.schemeYear === 2022).reduction).toBe(6000)
    expect(result.bandResult.find(x => x.band === 2).result.find(x => x.schemeYear === 2022).reduction).toBe(5000)
    expect(result.bandResult.find(x => x.band === 3).result.find(x => x.schemeYear === 2022).reduction).toBe(8750)
    expect(result.bandResult[0].result.length).toBe(4)
    expect(result.bandResult[1].result.length).toBe(4)
    expect(result.bandResult[2].result.length).toBe(4)
  })

  test('75000 calculates 2023 reduction', () => {
    const result = calculateFromValue(75000)
    expect(result.bandResult.find(x => x.band === 1).result.find(x => x.schemeYear === 2023).reduction).toBe(10500)
    expect(result.bandResult.find(x => x.band === 2).result.find(x => x.schemeYear === 2023).reduction).toBe(8000)
    expect(result.bandResult.find(x => x.band === 3).result.find(x => x.schemeYear === 2023).reduction).toBe(12500)
    expect(result.bandResult[0].result.length).toBe(4)
    expect(result.bandResult[1].result.length).toBe(4)
    expect(result.bandResult[2].result.length).toBe(4)
  })

  test('75000 calculates 2024 reduction', () => {
    const result = calculateFromValue(75000)
    expect(result.bandResult.find(x => x.band === 1).result.find(x => x.schemeYear === 2024).reduction).toBe(15000)
    expect(result.bandResult.find(x => x.band === 2).result.find(x => x.schemeYear === 2024).reduction).toBe(11000)
    expect(result.bandResult.find(x => x.band === 3).result.find(x => x.schemeYear === 2024).reduction).toBe(16250)
    expect(result.bandResult[0].result.length).toBe(4)
    expect(result.bandResult[1].result.length).toBe(4)
    expect(result.bandResult[2].result.length).toBe(4)
  })

  test('75000 calculates 2021 payment', () => {
    const result = calculateFromValue(75000)
    expect(result.bandResult.find(x => x.band === 1).result.find(x => x.schemeYear === 2021).payment).toBe(28500)
    expect(result.bandResult.find(x => x.band === 2).result.find(x => x.schemeYear === 2021).payment).toBe(18000)
    expect(result.bandResult.find(x => x.band === 3).result.find(x => x.schemeYear === 2021).payment).toBe(20000)
    expect(result.bandResult[0].result.length).toBe(4)
    expect(result.bandResult[1].result.length).toBe(4)
    expect(result.bandResult[2].result.length).toBe(4)
  })

  test('75000 calculates 2022 payment', () => {
    const result = calculateFromValue(75000)
    expect(result.bandResult.find(x => x.band === 1).result.find(x => x.schemeYear === 2022).payment).toBe(24000)
    expect(result.bandResult.find(x => x.band === 2).result.find(x => x.schemeYear === 2022).payment).toBe(15000)
    expect(result.bandResult.find(x => x.band === 3).result.find(x => x.schemeYear === 2022).payment).toBe(16250)
    expect(result.bandResult[0].result.length).toBe(4)
    expect(result.bandResult[1].result.length).toBe(4)
    expect(result.bandResult[2].result.length).toBe(4)
  })

  test('75000 calculates 2023 payment', () => {
    const result = calculateFromValue(75000)
    expect(result.bandResult.find(x => x.band === 1).result.find(x => x.schemeYear === 2023).payment).toBe(19500)
    expect(result.bandResult.find(x => x.band === 2).result.find(x => x.schemeYear === 2023).payment).toBe(12000)
    expect(result.bandResult.find(x => x.band === 3).result.find(x => x.schemeYear === 2023).payment).toBe(12500)
    expect(result.bandResult[0].result.length).toBe(4)
    expect(result.bandResult[1].result.length).toBe(4)
    expect(result.bandResult[2].result.length).toBe(4)
  })

  test('75000 calculates 2024 payment', () => {
    const result = calculateFromValue(75000)
    expect(result.bandResult.find(x => x.band === 1).result.find(x => x.schemeYear === 2024).payment).toBe(15000)
    expect(result.bandResult.find(x => x.band === 2).result.find(x => x.schemeYear === 2024).payment).toBe(9000)
    expect(result.bandResult.find(x => x.band === 3).result.find(x => x.schemeYear === 2024).payment).toBe(8750)
    expect(result.bandResult[0].result.length).toBe(4)
    expect(result.bandResult[1].result.length).toBe(4)
    expect(result.bandResult[2].result.length).toBe(4)
  })

  test('250000 includes bands 1, 2, 3 and 4', () => {
    const result = calculateFromValue(250000)
    expect(result.bandResult.filter(x => x.band === 1).length).toBe(1)
    expect(result.bandResult.filter(x => x.band === 2).length).toBe(1)
    expect(result.bandResult.filter(x => x.band === 3).length).toBe(1)
    expect(result.bandResult.filter(x => x.band === 4).length).toBe(1)
    expect(result.bandResult.length).toBe(4)
  })

  test('250000 calculates 2021 reduction', () => {
    const result = calculateFromValue(250000)
    expect(result.bandResult.find(x => x.band === 1).result.find(x => x.schemeYear === 2021).reduction).toBe(1500)
    expect(result.bandResult.find(x => x.band === 2).result.find(x => x.schemeYear === 2021).reduction).toBe(2000)
    expect(result.bandResult.find(x => x.band === 3).result.find(x => x.schemeYear === 2021).reduction).toBe(20000)
    expect(result.bandResult.find(x => x.band === 4).result.find(x => x.schemeYear === 2021).reduction).toBe(25000)
    expect(result.bandResult[0].result.length).toBe(4)
    expect(result.bandResult[1].result.length).toBe(4)
    expect(result.bandResult[2].result.length).toBe(4)
    expect(result.bandResult[3].result.length).toBe(4)
  })

  test('250000 calculates 2022 reduction', () => {
    const result = calculateFromValue(250000)
    expect(result.bandResult.find(x => x.band === 1).result.find(x => x.schemeYear === 2022).reduction).toBe(6000)
    expect(result.bandResult.find(x => x.band === 2).result.find(x => x.schemeYear === 2022).reduction).toBe(5000)
    expect(result.bandResult.find(x => x.band === 3).result.find(x => x.schemeYear === 2022).reduction).toBe(35000)
    expect(result.bandResult.find(x => x.band === 4).result.find(x => x.schemeYear === 2022).reduction).toBe(40000)
    expect(result.bandResult[0].result.length).toBe(4)
    expect(result.bandResult[1].result.length).toBe(4)
    expect(result.bandResult[2].result.length).toBe(4)
    expect(result.bandResult[3].result.length).toBe(4)
  })

  test('250000 calculates 2023 reduction', () => {
    const result = calculateFromValue(250000)
    expect(result.bandResult.find(x => x.band === 1).result.find(x => x.schemeYear === 2023).reduction).toBe(10500)
    expect(result.bandResult.find(x => x.band === 2).result.find(x => x.schemeYear === 2023).reduction).toBe(8000)
    expect(result.bandResult.find(x => x.band === 3).result.find(x => x.schemeYear === 2023).reduction).toBe(50000)
    expect(result.bandResult.find(x => x.band === 4).result.find(x => x.schemeYear === 2023).reduction).toBe(55000)
    expect(result.bandResult[0].result.length).toBe(4)
    expect(result.bandResult[1].result.length).toBe(4)
    expect(result.bandResult[2].result.length).toBe(4)
    expect(result.bandResult[3].result.length).toBe(4)
  })

  test('250000 calculates 2024 reduction', () => {
    const result = calculateFromValue(250000)
    expect(result.bandResult.find(x => x.band === 1).result.find(x => x.schemeYear === 2024).reduction).toBe(15000)
    expect(result.bandResult.find(x => x.band === 2).result.find(x => x.schemeYear === 2024).reduction).toBe(11000)
    expect(result.bandResult.find(x => x.band === 3).result.find(x => x.schemeYear === 2024).reduction).toBe(65000)
    expect(result.bandResult.find(x => x.band === 4).result.find(x => x.schemeYear === 2024).reduction).toBe(70000)
    expect(result.bandResult[0].result.length).toBe(4)
    expect(result.bandResult[1].result.length).toBe(4)
    expect(result.bandResult[2].result.length).toBe(4)
    expect(result.bandResult[3].result.length).toBe(4)
  })

  test('250000 calculates 2021 payment', () => {
    const result = calculateFromValue(250000)
    expect(result.bandResult.find(x => x.band === 1).result.find(x => x.schemeYear === 2021).payment).toBe(28500)
    expect(result.bandResult.find(x => x.band === 2).result.find(x => x.schemeYear === 2021).payment).toBe(18000)
    expect(result.bandResult.find(x => x.band === 3).result.find(x => x.schemeYear === 2021).payment).toBe(80000)
    expect(result.bandResult.find(x => x.band === 4).result.find(x => x.schemeYear === 2021).payment).toBe(75000)
    expect(result.bandResult[0].result.length).toBe(4)
    expect(result.bandResult[1].result.length).toBe(4)
    expect(result.bandResult[2].result.length).toBe(4)
    expect(result.bandResult[3].result.length).toBe(4)
  })

  test('250000 calculates 2022 payment', () => {
    const result = calculateFromValue(250000)
    expect(result.bandResult.find(x => x.band === 1).result.find(x => x.schemeYear === 2022).payment).toBe(24000)
    expect(result.bandResult.find(x => x.band === 2).result.find(x => x.schemeYear === 2022).payment).toBe(15000)
    expect(result.bandResult.find(x => x.band === 3).result.find(x => x.schemeYear === 2022).payment).toBe(65000)
    expect(result.bandResult.find(x => x.band === 4).result.find(x => x.schemeYear === 2022).payment).toBe(60000)
    expect(result.bandResult[0].result.length).toBe(4)
    expect(result.bandResult[1].result.length).toBe(4)
    expect(result.bandResult[2].result.length).toBe(4)
    expect(result.bandResult[3].result.length).toBe(4)
  })

  test('250000 calculates 2023 payment', () => {
    const result = calculateFromValue(250000)
    expect(result.bandResult.find(x => x.band === 1).result.find(x => x.schemeYear === 2023).payment).toBe(19500)
    expect(result.bandResult.find(x => x.band === 2).result.find(x => x.schemeYear === 2023).payment).toBe(12000)
    expect(result.bandResult.find(x => x.band === 3).result.find(x => x.schemeYear === 2023).payment).toBe(50000)
    expect(result.bandResult.find(x => x.band === 4).result.find(x => x.schemeYear === 2023).payment).toBe(45000)
    expect(result.bandResult[0].result.length).toBe(4)
    expect(result.bandResult[1].result.length).toBe(4)
    expect(result.bandResult[2].result.length).toBe(4)
    expect(result.bandResult[3].result.length).toBe(4)
  })

  test('250000 calculates 2024 payment', () => {
    const result = calculateFromValue(250000)
    expect(result.bandResult.find(x => x.band === 1).result.find(x => x.schemeYear === 2024).payment).toBe(15000)
    expect(result.bandResult.find(x => x.band === 2).result.find(x => x.schemeYear === 2024).payment).toBe(9000)
    expect(result.bandResult.find(x => x.band === 3).result.find(x => x.schemeYear === 2024).payment).toBe(35000)
    expect(result.bandResult.find(x => x.band === 4).result.find(x => x.schemeYear === 2024).payment).toBe(30000)
    expect(result.bandResult[0].result.length).toBe(4)
    expect(result.bandResult[1].result.length).toBe(4)
    expect(result.bandResult[2].result.length).toBe(4)
    expect(result.bandResult[3].result.length).toBe(4)
  })

  test('1000.79 handles correct decimal values for 2021', () => {
    const result = calculateFromValue(1000.79)
    expect(result.bandResult[0].result.find(x => x.schemeYear === 2021).reduction).toBe(50.03)
    expect(result.bandResult[0].result.find(x => x.schemeYear === 2021).payment).toBe(950.76)
  })

  test('1000.79 handles correct decimal values for 2022', () => {
    const result = calculateFromValue(1000.79)
    expect(result.bandResult[0].result.find(x => x.schemeYear === 2022).reduction).toBe(200.15)
    expect(result.bandResult[0].result.find(x => x.schemeYear === 2022).payment).toBe(800.64)
  })

  test('1000.79 handles correct decimal values for 2023', () => {
    const result = calculateFromValue(1000.79)
    expect(result.bandResult[0].result.find(x => x.schemeYear === 2023).reduction).toBe(350.27)
    expect(result.bandResult[0].result.find(x => x.schemeYear === 2023).payment).toBe(650.52)
  })

  test('1000.79 handles correct decimal values for 2024', () => {
    const result = calculateFromValue(1000.79)
    expect(result.bandResult[0].result.find(x => x.schemeYear === 2024).reduction).toBe(500.39)
    expect(result.bandResult[0].result.find(x => x.schemeYear === 2024).payment).toBe(500.40)
  })

  test('1000.79 handles correct decimal values for overall 2021', () => {
    const result = calculateFromValue(1000.79)
    expect(result.overallResult.find(x => x.schemeYear === 2021).reduction).toBe(50.03)
    expect(result.overallResult.find(x => x.schemeYear === 2021).payment).toBe(950.76)
  })

  test('1000.79 handles correct decimal values for overall 2022', () => {
    const result = calculateFromValue(1000.79)
    expect(result.overallResult.find(x => x.schemeYear === 2022).reduction).toBe(200.15)
    expect(result.overallResult.find(x => x.schemeYear === 2022).payment).toBe(800.64)
  })

  test('1000.79 handles correct decimal values for overall 2023', () => {
    const result = calculateFromValue(1000.79)
    expect(result.overallResult.find(x => x.schemeYear === 2023).reduction).toBe(350.27)
    expect(result.overallResult.find(x => x.schemeYear === 2023).payment).toBe(650.52)
  })

  test('1000.79 handles correct decimal values for overall 2024', () => {
    const result = calculateFromValue(1000.79)
    expect(result.overallResult.find(x => x.schemeYear === 2024).reduction).toBe(500.39)
    expect(result.overallResult.find(x => x.schemeYear === 2024).payment).toBe(500.40)
  })

  test('31000.79 handles correct decimal values for band 2 2021', () => {
    const result = calculateFromValue(31000.79)
    expect(result.bandResult.find(x => x.band === 2).result.find(x => x.schemeYear === 2021).reduction).toBe(100.07)
    expect(result.bandResult.find(x => x.band === 2).result.find(x => x.schemeYear === 2021).payment).toBe(900.72)
  })

  test('31000.79 handles correct decimal values for band 2 2022', () => {
    const result = calculateFromValue(31000.79)
    expect(result.bandResult.find(x => x.band === 2).result.find(x => x.schemeYear === 2022).reduction).toBe(250.19)
    expect(result.bandResult.find(x => x.band === 2).result.find(x => x.schemeYear === 2022).payment).toBe(750.60)
  })

  test('31000.79 handles correct decimal values for band 2 2023', () => {
    const result = calculateFromValue(31000.79)
    expect(result.bandResult.find(x => x.band === 2).result.find(x => x.schemeYear === 2023).reduction).toBe(400.31)
    expect(result.bandResult.find(x => x.band === 2).result.find(x => x.schemeYear === 2023).payment).toBe(600.48)
  })

  test('31000.79 handles correct decimal values for band 2 2024', () => {
    const result = calculateFromValue(31000.79)
    expect(result.bandResult.find(x => x.band === 2).result.find(x => x.schemeYear === 2024).reduction).toBe(550.43)
    expect(result.bandResult.find(x => x.band === 2).result.find(x => x.schemeYear === 2024).payment).toBe(450.36)
  })

  test('31000.79 handles correct decimal values for overall 2021', () => {
    const result = calculateFromValue(31000.79)
    expect(result.overallResult.find(x => x.schemeYear === 2021).reduction).toBe(1600.07)
    expect(result.overallResult.find(x => x.schemeYear === 2021).payment).toBe(29400.72)
  })

  test('31000.79 handles correct decimal values for overall 2022', () => {
    const result = calculateFromValue(31000.79)
    expect(result.overallResult.find(x => x.schemeYear === 2022).reduction).toBe(6250.19)
    expect(result.overallResult.find(x => x.schemeYear === 2022).payment).toBe(24750.6)
  })

  test('31000.79  handles correct decimal values for overall 2023', () => {
    const result = calculateFromValue(31000.79)
    expect(result.overallResult.find(x => x.schemeYear === 2023).reduction).toBe(10900.31)
    expect(result.overallResult.find(x => x.schemeYear === 2023).payment).toBe(20100.48)
  })

  test('31000.79 handles correct decimal values for overall 2024', () => {
    const result = calculateFromValue(31000.79)
    expect(result.overallResult.find(x => x.schemeYear === 2024).reduction).toBe(15550.43)
    expect(result.overallResult.find(x => x.schemeYear === 2024).payment).toBe(15450.36)
  })

  test('100000000 handles correct decimal values for overall 2021', () => {
    const result = calculateFromValue(100000000)
    expect(result.overallResult.find(x => x.schemeYear === 2021).reduction).toBe(24986000)
    expect(result.overallResult.find(x => x.schemeYear === 2021).payment).toBe(75014000)
  })

  test('100000000 handles correct decimal values for overall 2022', () => {
    const result = calculateFromValue(100000000)
    expect(result.overallResult.find(x => x.schemeYear === 2022).reduction).toBe(39986000)
    expect(result.overallResult.find(x => x.schemeYear === 2022).payment).toBe(60014000)
  })

  test('100000000  handles correct decimal values for overall 2023', () => {
    const result = calculateFromValue(100000000)
    expect(result.overallResult.find(x => x.schemeYear === 2023).reduction).toBe(54986000)
    expect(result.overallResult.find(x => x.schemeYear === 2023).payment).toBe(45014000)
  })

  test('100000000 handles correct decimal values for overall 2024', () => {
    const result = calculateFromValue(100000000)
    expect(result.overallResult.find(x => x.schemeYear === 2024).reduction).toBe(69986000)
    expect(result.overallResult.find(x => x.schemeYear === 2024).payment).toBe(30014000)
  })

  test('overall result 1000 = result + reduction for 2021', () => {
    const result = calculateFromValue(1000)
    const overallResult = result.overallResult.find(x => x.schemeYear === 2021)
    expect(overallResult.payment).toBe(950)
    expect(overallResult.reduction).toBe(50)
    expect(overallResult.payment + overallResult.reduction).toBe(overallResult.bpsValue)
    expect(result.overallResult.length).toBe(4)
  })

  test('overall result 1000 = result + reduction for 2022', () => {
    const result = calculateFromValue(1000)
    const overallResult = result.overallResult.find(x => x.schemeYear === 2022)
    expect(overallResult.payment).toBe(800)
    expect(overallResult.reduction).toBe(200)
    expect(overallResult.payment + overallResult.reduction).toBe(overallResult.bpsValue)
    expect(result.overallResult.length).toBe(4)
  })

  test('overall result 1000 = result + reduction for 2023', () => {
    const result = calculateFromValue(1000)
    const overallResult = result.overallResult.find(x => x.schemeYear === 2023)
    expect(overallResult.payment).toBe(650)
    expect(overallResult.reduction).toBe(350)
    expect(overallResult.payment + overallResult.reduction).toBe(overallResult.bpsValue)
    expect(result.overallResult.length).toBe(4)
  })

  test('overall result 1000 = result + reduction for 2024', () => {
    const result = calculateFromValue(1000)
    const overallResult = result.overallResult.find(x => x.schemeYear === 2024)
    expect(overallResult.payment).toBe(500)
    expect(overallResult.reduction).toBe(500)
    expect(overallResult.payment + overallResult.reduction).toBe(overallResult.bpsValue)
    expect(result.overallResult.length).toBe(4)
  })

  test('overall result 20000 = result + reduction for 2021', () => {
    const result = calculateFromValue(20000)
    const overallResult = result.overallResult.find(x => x.schemeYear === 2021)
    expect(overallResult.payment).toBe(19000)
    expect(overallResult.reduction).toBe(1000)
    expect(overallResult.payment + overallResult.reduction).toBe(overallResult.bpsValue)
    expect(result.overallResult.length).toBe(4)
  })

  test('overall result 20000 = result + reduction for 2022', () => {
    const result = calculateFromValue(20000)
    const overallResult = result.overallResult.find(x => x.schemeYear === 2022)
    expect(overallResult.payment).toBe(16000)
    expect(overallResult.reduction).toBe(4000)
    expect(overallResult.payment + overallResult.reduction).toBe(overallResult.bpsValue)
    expect(result.overallResult.length).toBe(4)
  })

  test('overall result 20000 = result + reduction for 2023', () => {
    const result = calculateFromValue(20000)
    const overallResult = result.overallResult.find(x => x.schemeYear === 2023)
    expect(overallResult.payment).toBe(13000)
    expect(overallResult.reduction).toBe(7000)
    expect(overallResult.payment + overallResult.reduction).toBe(overallResult.bpsValue)
    expect(result.overallResult.length).toBe(4)
  })

  test('overall result 20000 = result + reduction for 2024', () => {
    const result = calculateFromValue(20000)
    const overallResult = result.overallResult.find(x => x.schemeYear === 2024)
    expect(overallResult.payment).toBe(10000)
    expect(overallResult.reduction).toBe(10000)
    expect(overallResult.payment + overallResult.reduction).toBe(overallResult.bpsValue)
    expect(result.overallResult.length).toBe(4)
  })

  test('overall result 40000 = result + reduction for 2021', () => {
    const result = calculateFromValue(40000)
    const overallResult = result.overallResult.find(x => x.schemeYear === 2021)
    expect(overallResult.payment).toBe(37500)
    expect(overallResult.reduction).toBe(2500)
    expect(overallResult.payment + overallResult.reduction).toBe(overallResult.bpsValue)
    expect(result.overallResult.length).toBe(4)
  })

  test('overall result 40000 = result + reduction for 2022', () => {
    const result = calculateFromValue(40000)
    const overallResult = result.overallResult.find(x => x.schemeYear === 2022)
    expect(overallResult.payment).toBe(31500)
    expect(overallResult.reduction).toBe(8500)
    expect(overallResult.payment + overallResult.reduction).toBe(overallResult.bpsValue)
    expect(result.overallResult.length).toBe(4)
  })

  test('overall result 40000 = result + reduction for 2023', () => {
    const result = calculateFromValue(40000)
    const overallResult = result.overallResult.find(x => x.schemeYear === 2023)
    expect(overallResult.payment).toBe(25500)
    expect(overallResult.reduction).toBe(14500)
    expect(overallResult.payment + overallResult.reduction).toBe(overallResult.bpsValue)
    expect(result.overallResult.length).toBe(4)
  })

  test('overall result 40000 = result + reduction for 2024', () => {
    const result = calculateFromValue(40000)
    const overallResult = result.overallResult.find(x => x.schemeYear === 2024)
    expect(overallResult.payment).toBe(19500)
    expect(overallResult.reduction).toBe(20500)
    expect(overallResult.payment + overallResult.reduction).toBe(overallResult.bpsValue)
    expect(result.overallResult.length).toBe(4)
  })

  test('overall result 75000 = result + reduction for 2021', () => {
    const result = calculateFromValue(75000)
    const overallResult = result.overallResult.find(x => x.schemeYear === 2021)
    expect(overallResult.payment).toBe(66500)
    expect(overallResult.reduction).toBe(8500)
    expect(overallResult.payment + overallResult.reduction).toBe(overallResult.bpsValue)
    expect(result.overallResult.length).toBe(4)
  })

  test('overall result 75000 = result + reduction for 2022', () => {
    const result = calculateFromValue(75000)
    const overallResult = result.overallResult.find(x => x.schemeYear === 2022)
    expect(overallResult.payment).toBe(55250)
    expect(overallResult.reduction).toBe(19750)
    expect(overallResult.payment + overallResult.reduction).toBe(overallResult.bpsValue)
    expect(result.overallResult.length).toBe(4)
  })

  test('overall result 75000 = result + reduction for 2023', () => {
    const result = calculateFromValue(75000)
    const overallResult = result.overallResult.find(x => x.schemeYear === 2023)
    expect(overallResult.payment).toBe(44000)
    expect(overallResult.reduction).toBe(31000)
    expect(overallResult.payment + overallResult.reduction).toBe(overallResult.bpsValue)
    expect(result.overallResult.length).toBe(4)
  })

  test('overall result 75000 = result + reduction for 2024', () => {
    const result = calculateFromValue(75000)
    const overallResult = result.overallResult.find(x => x.schemeYear === 2024)
    expect(overallResult.payment).toBe(32750)
    expect(overallResult.reduction).toBe(42250)
    expect(overallResult.payment + overallResult.reduction).toBe(overallResult.bpsValue)
    expect(result.overallResult.length).toBe(4)
  })
})
