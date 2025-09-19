const calculateBand = require('../../app/calculation/calculate-band')

jest.mock('../../app/calculation/reduction-rates')
jest.mock('../../app/calculation/calculate-reduction')

const reductionRates = require('../../app/calculation/reduction-rates')
const calculateReduction = require('../../app/calculation/calculate-reduction')

describe('calculateBand', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('returns band and empty result when yearRates do not exist', () => {
    reductionRates.reductions2024 = undefined
    const paymentBand = { schemeYear: 2024, band: 'A', value: 1000 }
    const result = calculateBand(paymentBand)
    expect(result).toEqual({ band: 'A', result: [] })
  })

  test('returns band and empty result when rate is undefined', () => {
    reductionRates.reductions2024 = { B: 0.1 }
    const paymentBand = { schemeYear: 2024, band: 'A', value: 1000 }
    const result = calculateBand(paymentBand)
    expect(result).toEqual({ band: 'A', result: [] })
  })

  test('returns band and result with calculated reduction when rate exists', () => {
    reductionRates.reductions2024 = { A: 0.2 }
    calculateReduction.mockReturnValue(800)
    const paymentBand = { schemeYear: 2024, band: 'A', value: 1000 }
    const result = calculateBand(paymentBand)
    expect(calculateReduction).toHaveBeenCalledWith(1000, { rate: 0.2, band: 'A', schemeYear: 2024 })
    expect(result).toEqual({ band: 'A', result: [800] })
  })
})
