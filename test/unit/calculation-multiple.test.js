const { calculateSingle, calculateMultiple } = require('../../app/calculation')

describe('calculate', () => {

  test('returns only band 1', () => {
    const schemeYearValues = [ {schemeYear: 2021, bpsValue: 25000}, 
      {schemeYear: 2022, bpsValue: 20000},
      {schemeYear: 2023, bpsValue: 15000},
      {schemeYear: 2024, bpsValue: 10000}]

    const result = calculateMultiple(schemeYearValues)

    expect(result.bandResult.filter(x => x.band === 1).length).toBe(1)
    expect(result.bandResult.filter(x => x.band === 2).length).toBe(0)
    expect(result.bandResult.filter(x => x.band === 3).length).toBe(0)
    expect(result.bandResult.filter(x => x.band === 4).length).toBe(0)
  })

  test('returns only band 1 and band 2', () => {
    const schemeYearValues = [ {schemeYear: 2021, bpsValue: 25000}, 
      {schemeYear: 2022, bpsValue: 20000},
      {schemeYear: 2023, bpsValue: 35000},
      {schemeYear: 2024, bpsValue: 45000}]

    const result = calculateMultiple(schemeYearValues)

    expect(result.bandResult.filter(x => x.band === 1).length).toBe(1)
    expect(result.bandResult.filter(x => x.band === 2).length).toBe(1)
    expect(result.bandResult.filter(x => x.band === 3).length).toBe(0)
    expect(result.bandResult.filter(x => x.band === 4).length).toBe(0)
  })

  test('returns only band 1, band 2 and band 3', () => {
    const schemeYearValues = [ {schemeYear: 2021, bpsValue: 25000}, 
      {schemeYear: 2022, bpsValue: 20000},
      {schemeYear: 2023, bpsValue: 35000},
      {schemeYear: 2024, bpsValue: 55000}]

    const result = calculateMultiple(schemeYearValues)

    expect(result.bandResult.filter(x => x.band === 1).length).toBe(1)
    expect(result.bandResult.filter(x => x.band === 2).length).toBe(1)
    expect(result.bandResult.filter(x => x.band === 3).length).toBe(1)
    expect(result.bandResult.filter(x => x.band === 4).length).toBe(0)
  })

  test('returns only band 1, band 2, band 3 and band 4', () => {
    const schemeYearValues = [ {schemeYear: 2021, bpsValue: 155000}, 
      {schemeYear: 2022, bpsValue: 55000},
      {schemeYear: 2023, bpsValue: 35000},
      {schemeYear: 2024, bpsValue: 25000}]

    const result = calculateMultiple(schemeYearValues)

    expect(result.bandResult.filter(x => x.band === 1).length).toBe(1)
    expect(result.bandResult.filter(x => x.band === 2).length).toBe(1)
    expect(result.bandResult.filter(x => x.band === 3).length).toBe(1)
    expect(result.bandResult.filter(x => x.band === 4).length).toBe(1)
  })

  test('returns 4 items in band 1, returns 3 items in band 2, returns 2 items in band 3, returns 1 item in band 4', () => {

    const schemeYearValues = [ {schemeYear: 2021, bpsValue: 155000}, 
      {schemeYear: 2022, bpsValue: 55000},
      {schemeYear: 2023, bpsValue: 35000},
      {schemeYear: 2024, bpsValue: 25000}]

    const result = calculateMultiple(schemeYearValues)

    expect(result.bandResult.find(x => x.band === 1).result.length).toBe(4)
    expect(result.bandResult.find(x => x.band === 2).result.length).toBe(3)
    expect(result.bandResult.find(x => x.band === 3).result.length).toBe(2)
    expect(result.bandResult.find(x => x.band === 4).result.length).toBe(1)
  })

  test('155000 for 2021 returns a reduction of 1500 and payment of 28500 in band 1', () => {

    const schemeYearValues = [ {schemeYear: 2021, bpsValue: 155000}, 
      {schemeYear: 2022, bpsValue: 55000},
      {schemeYear: 2023, bpsValue: 35000},
      {schemeYear: 2024, bpsValue: 25000}]

    const result = calculateMultiple(schemeYearValues)

    expect(result.bandResult.find(x => x.band === 1).result.find(x => x.schemeYear === 2021).reduction).toBe(1500)
    expect(result.bandResult.find(x => x.band === 1).result.find(x => x.schemeYear === 2021).payment).toBe(28500)
  })

  test('55000 for 2022 returns a reduction of 6000 and payment of 24000 in band 1', () => {

    const schemeYearValues = [ {schemeYear: 2021, bpsValue: 155000}, 
      {schemeYear: 2022, bpsValue: 55000},
      {schemeYear: 2023, bpsValue: 35000},
      {schemeYear: 2024, bpsValue: 25000}]

    const result = calculateMultiple(schemeYearValues)

    expect(result.bandResult.find(x => x.band === 1).result.find(x => x.schemeYear === 2022).reduction).toBe(6000)
    expect(result.bandResult.find(x => x.band === 1).result.find(x => x.schemeYear === 2022).payment).toBe(24000)
  })

  test('35000 for 2023 returns a reduction of 10500 and payment of 19500 in band 1', () => {

    const schemeYearValues = [ {schemeYear: 2021, bpsValue: 155000}, 
      {schemeYear: 2022, bpsValue: 55000},
      {schemeYear: 2023, bpsValue: 35000},
      {schemeYear: 2024, bpsValue: 25000}]

    const result = calculateMultiple(schemeYearValues)

    expect(result.bandResult.find(x => x.band === 1).result.find(x => x.schemeYear === 2023).reduction).toBe(10500)
    expect(result.bandResult.find(x => x.band === 1).result.find(x => x.schemeYear === 2023).payment).toBe(19500)
  })

  test('25000 for 2024 returns a reduction of 12500 and payment of 12500 in band 1', () => {

    const schemeYearValues = [ {schemeYear: 2021, bpsValue: 155000}, 
      {schemeYear: 2022, bpsValue: 55000},
      {schemeYear: 2023, bpsValue: 35000},
      {schemeYear: 2024, bpsValue: 25000}]

    const result = calculateMultiple(schemeYearValues)

    expect(result.bandResult.find(x => x.band === 1).result.find(x => x.schemeYear === 2024).reduction).toBe(12500)
    expect(result.bandResult.find(x => x.band === 1).result.find(x => x.schemeYear === 2024).payment).toBe(12500)
  })

  test('155000 for 2021 returns a reduction of 2000 and payment of 18000 in band 2', () => {

    const schemeYearValues = [ {schemeYear: 2021, bpsValue: 155000}, 
      {schemeYear: 2022, bpsValue: 55000},
      {schemeYear: 2023, bpsValue: 35000},
      {schemeYear: 2024, bpsValue: 25000}]

    const result = calculateMultiple(schemeYearValues)

    expect(result.bandResult.find(x => x.band === 2).result.find(x => x.schemeYear === 2021).reduction).toBe(2000)
    expect(result.bandResult.find(x => x.band === 2).result.find(x => x.schemeYear === 2021).payment).toBe(18000)
  })

  test('55000 for 2022 returns a reduction of 5000 and payment of 15000 in band 2', () => {

    const schemeYearValues = [ {schemeYear: 2021, bpsValue: 155000}, 
      {schemeYear: 2022, bpsValue: 55000},
      {schemeYear: 2023, bpsValue: 35000},
      {schemeYear: 2024, bpsValue: 25000}]

    const result = calculateMultiple(schemeYearValues)

    expect(result.bandResult.find(x => x.band === 2).result.find(x => x.schemeYear === 2022).reduction).toBe(5000)
    expect(result.bandResult.find(x => x.band === 2).result.find(x => x.schemeYear === 2022).payment).toBe(15000)
  })

  test('35000 for 2023 returns a reduction of 2000 and payment of 3000 in band 2', () => {

    const schemeYearValues = [ {schemeYear: 2021, bpsValue: 155000}, 
      {schemeYear: 2022, bpsValue: 55000},
      {schemeYear: 2023, bpsValue: 35000},
      {schemeYear: 2024, bpsValue: 25000}]

    const result = calculateMultiple(schemeYearValues)

    expect(result.bandResult.find(x => x.band === 2).result.find(x => x.schemeYear === 2023).reduction).toBe(2000)
    expect(result.bandResult.find(x => x.band === 2).result.find(x => x.schemeYear === 2023).payment).toBe(3000)
  })

  test('25000 for 2024 returns a reduction of 0 and payment of 0 in band 2', () => {

    const schemeYearValues = [ {schemeYear: 2021, bpsValue: 155000}, 
      {schemeYear: 2022, bpsValue: 55000},
      {schemeYear: 2023, bpsValue: 35000},
      {schemeYear: 2024, bpsValue: 25000}]

    const result = calculateMultiple(schemeYearValues)

    expect(result.bandResult.find(x => x.band === 2).result.filter(x => x.schemeYear === 2024).length).toBe(0)
    expect(result.bandResult.find(x => x.band === 2).result.filter(x => x.schemeYear === 2024).length).toBe(0)
  })

  test('155000 for 2021 returns a reduction of 20000 and payment of 80000 in band 3', () => {

    const schemeYearValues = [ {schemeYear: 2021, bpsValue: 155000}, 
      {schemeYear: 2022, bpsValue: 55000},
      {schemeYear: 2023, bpsValue: 35000},
      {schemeYear: 2024, bpsValue: 25000}]

    const result = calculateMultiple(schemeYearValues)

    expect(result.bandResult.find(x => x.band === 3).result.find(x => x.schemeYear === 2021).reduction).toBe(20000)
    expect(result.bandResult.find(x => x.band === 3).result.find(x => x.schemeYear === 2021).payment).toBe(80000)
  })

  test('55000 for 2022 returns a reduction of 1750 and payment of 3250 in band 3', () => {

    const schemeYearValues = [ {schemeYear: 2021, bpsValue: 155000}, 
      {schemeYear: 2022, bpsValue: 55000},
      {schemeYear: 2023, bpsValue: 35000},
      {schemeYear: 2024, bpsValue: 25000}]

    const result = calculateMultiple(schemeYearValues)

    expect(result.bandResult.find(x => x.band === 3).result.find(x => x.schemeYear === 2022).reduction).toBe(1750)
    expect(result.bandResult.find(x => x.band === 3).result.find(x => x.schemeYear === 2022).payment).toBe(3250)
  })

  test('35000 for 2023 returns a reduction of 0 and payment of 0 in band 3', () => {

    const schemeYearValues = [ {schemeYear: 2021, bpsValue: 155000}, 
      {schemeYear: 2022, bpsValue: 55000},
      {schemeYear: 2023, bpsValue: 35000},
      {schemeYear: 2024, bpsValue: 25000}]

    const result = calculateMultiple(schemeYearValues)

    expect(result.bandResult.find(x => x.band === 3).result.filter(x => x.schemeYear === 2023).length).toBe(0)
    expect(result.bandResult.find(x => x.band === 3).result.filter(x => x.schemeYear === 2023).length).toBe(0)
  })

  test('25000 for 2024 returns a reduction of 0 and payment of 0 in band 3', () => {

    const schemeYearValues = [ {schemeYear: 2021, bpsValue: 155000}, 
      {schemeYear: 2022, bpsValue: 55000},
      {schemeYear: 2023, bpsValue: 35000},
      {schemeYear: 2024, bpsValue: 25000}]

    const result = calculateMultiple(schemeYearValues)
    
    expect(result.bandResult.find(x => x.band === 3).result.filter(x => x.schemeYear === 2024).length).toBe(0)
    expect(result.bandResult.find(x => x.band === 3).result.filter(x => x.schemeYear === 2024).length).toBe(0)
  })

  test('155000 for 2021 returns a reduction of 1250 and payment of 3750 in band 4', () => {

    const schemeYearValues = [ {schemeYear: 2021, bpsValue: 155000}, 
      {schemeYear: 2022, bpsValue: 55000},
      {schemeYear: 2023, bpsValue: 35000},
      {schemeYear: 2024, bpsValue: 25000}]

    const result = calculateMultiple(schemeYearValues)

    expect(result.bandResult.find(x => x.band === 4).result.find(x => x.schemeYear === 2021).reduction).toBe(1250)
    expect(result.bandResult.find(x => x.band === 4).result.find(x => x.schemeYear === 2021).payment).toBe(3750)
  })

  test('55000 for 2022 returns a reduction of 0 and payment of 0 in band 4', () => {

    const schemeYearValues = [ {schemeYear: 2021, bpsValue: 155000}, 
      {schemeYear: 2022, bpsValue: 55000},
      {schemeYear: 2023, bpsValue: 35000},
      {schemeYear: 2024, bpsValue: 25000}]

    const result = calculateMultiple(schemeYearValues)

    expect(result.bandResult.find(x => x.band === 4).result.filter(x => x.schemeYear === 2022).length).toBe(0)
    expect(result.bandResult.find(x => x.band === 4).result.filter(x => x.schemeYear === 2022).length).toBe(0)
  })

  test('35000 for 2023 returns a reduction of 0 and payment of 0 in band 4', () => {

    const schemeYearValues = [ {schemeYear: 2021, bpsValue: 155000}, 
      {schemeYear: 2022, bpsValue: 55000},
      {schemeYear: 2023, bpsValue: 35000},
      {schemeYear: 2024, bpsValue: 25000}]

    const result = calculateMultiple(schemeYearValues)

    expect(result.bandResult.find(x => x.band === 4).result.filter(x => x.schemeYear === 2023).length).toBe(0)
    expect(result.bandResult.find(x => x.band === 4).result.filter(x => x.schemeYear === 2023).length).toBe(0)
  })

  test('25000 for 2024 returns a reduction of 0 and payment of 0 in band 4', () => {

    const schemeYearValues = [ {schemeYear: 2021, bpsValue: 155000}, 
      {schemeYear: 2022, bpsValue: 55000},
      {schemeYear: 2023, bpsValue: 35000},
      {schemeYear: 2024, bpsValue: 25000}]

    const result = calculateMultiple(schemeYearValues)
    
    expect(result.bandResult.find(x => x.band === 4).result.filter(x => x.schemeYear === 2024).length).toBe(0)
    expect(result.bandResult.find(x => x.band === 4).result.filter(x => x.schemeYear === 2024).length).toBe(0)
  })

  test('155000 for 2021 returns overall totals, reduction 24750, payment 130250 and total 155000', () => {

    const schemeYearValues = [ {schemeYear: 2021, bpsValue: 155000}, 
      {schemeYear: 2022, bpsValue: 55000},
      {schemeYear: 2023, bpsValue: 35000},
      {schemeYear: 2024, bpsValue: 25000}]

    const result = calculateMultiple(schemeYearValues)

    const overallReduction = result.overallResult.find(x => x.schemeYear === 2021).reduction
    const overallPayment = result.overallResult.find(x => x.schemeYear === 2021).payment
    
    expect(overallReduction).toBe(24750)
    expect(overallPayment).toBe(130250)
    expect(overallPayment + overallReduction).toBe(155000)
  })

  test('55000 for 2022 returns overall totals, reduction 12750, payment 42250 and total 55000', () => {

    const schemeYearValues = [ {schemeYear: 2021, bpsValue: 155000}, 
      {schemeYear: 2022, bpsValue: 55000},
      {schemeYear: 2023, bpsValue: 35000},
      {schemeYear: 2024, bpsValue: 25000}]

    const result = calculateMultiple(schemeYearValues)

    const overallReduction = result.overallResult.find(x => x.schemeYear === 2022).reduction
    const overallPayment = result.overallResult.find(x => x.schemeYear === 2022).payment
    
    expect(overallReduction).toBe(12750)
    expect(overallPayment).toBe(42250)
    expect(overallPayment + overallReduction).toBe(55000)
  })
  
  test('35000 for 2023 returns overall totals, reduction 12500, payment 22500 and total 35000', () => {

    const schemeYearValues = [ {schemeYear: 2021, bpsValue: 155000}, 
      {schemeYear: 2022, bpsValue: 55000},
      {schemeYear: 2023, bpsValue: 35000},
      {schemeYear: 2024, bpsValue: 25000}]

    const result = calculateMultiple(schemeYearValues)

    const overallReduction = result.overallResult.find(x => x.schemeYear === 2023).reduction
    const overallPayment = result.overallResult.find(x => x.schemeYear === 2023).payment
    
    expect(overallReduction).toBe(12500)
    expect(overallPayment).toBe(22500)
    expect(overallPayment + overallReduction).toBe(35000)
  })

  test('25000 for 2024 returns overall totals, reduction 12500, payment 12500 and total 25000', () => {

    const schemeYearValues = [ {schemeYear: 2021, bpsValue: 155000}, 
      {schemeYear: 2022, bpsValue: 55000},
      {schemeYear: 2023, bpsValue: 35000},
      {schemeYear: 2024, bpsValue: 25000}]

    const result = calculateMultiple(schemeYearValues)

    const overallReduction = result.overallResult.find(x => x.schemeYear === 2024).reduction
    const overallPayment = result.overallResult.find(x => x.schemeYear === 2024).payment
    
    expect(overallReduction).toBe(12500)
    expect(overallPayment).toBe(12500)
    expect(overallPayment + overallReduction).toBe(25000)
  })
})