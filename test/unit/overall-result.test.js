const calculate = require('../../app/calculation')

describe('calculate overall results', () => {
  test('returns 4 results for numeric input when all years have value 200000', () => {
    const result = calculate(200000)
    expect(result.overallResult.length).toBe(4)

    expect(result.overallResult[0].schemeYear).toBe(2024)
    expect(result.overallResult[0].value).toBe(200000)
    expect(result.overallResult[0].reduction).toBe(126000)
    expect(result.overallResult[0].payment).toBe(74000)

    expect(result.overallResult[1].schemeYear).toBe(2025)
    expect(result.overallResult[1].value).toBe(200000)
    expect(result.overallResult[1].reduction).toBe(192800)
    expect(result.overallResult[1].payment).toBe(7200)

    expect(result.overallResult[2].schemeYear).toBe(2026)
    expect(result.overallResult[2].value).toBe(200000)
    expect(result.overallResult[2].reduction).toBe(199400)
    expect(result.overallResult[2].payment).toBe(600)

    expect(result.overallResult[3].schemeYear).toBe(2027)
    expect(result.overallResult[3].value).toBe(200000)
    expect(result.overallResult[3].reduction).toBe(199400)
    expect(result.overallResult[3].payment).toBe(600)
  })

  test('handles missing year values and does not display payment bands for year with zero value', () => {
    const values = {
      value2024: 200000,
      value2025: 0
    }
    const result = calculate(values)

    const overallYears = result.overallResult.map(x => x.schemeYear)
    expect(overallYears).toEqual([2025, 2024])

    const bandEntriesContain2025 = result.bandResult.some(band =>
      band.result.some(r => r.schemeYear === 2025)
    )
    expect(bandEntriesContain2025).toBe(true)

    const overall2025 = result.overallResult.find(x => x.schemeYear === 2025)
    expect(overall2025.value).toBe(0)
    expect(overall2025.reduction).toBe(0)
    expect(overall2025.payment).toBe(0)
  })
})
