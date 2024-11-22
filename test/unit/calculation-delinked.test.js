const ViewModel = require('../../app/routes/models/calculation-delinked')

jest.mock('../../app/calculation/bands', () => ([
  { band: 1, text: '£30,000.00 or less' },
  { band: 2, text: 'Amounts above £30,000.00 and no more than £50,000.00' },
  { band: 3, text: 'Amounts above £50,000.00 and no more than £150,000.00' },
  { band: 4, text: 'Above £150,000.00' }
]))

jest.mock('../../app/calculation/scheme-years', () => ({
  schemeYears: [2024, 2025]
}))

jest.mock('../../app/utils/year-tab-schedule', () => ([
  {
    year: 2025,
    text: 'We plan to make the payment in 2 instalments - an advance payment of around 50% from 1 August with the balance payment from December.'
  },
  {
    year: 2024,
    text: 'We paid the 2024 delinked payment in 2 instalments.'
  }
]))

describe('Calculation Delinked View Model', () => {
  const mockValue = 25698.95
  const mockCalculations = {
    bandResult: [
      {
        band: 1,
        result: [
          {
            schemeYear: 2024,
            rate: 0.50,
            payment: 25698.95,
            reduction: 12849.48 // 50% reduction
          },
          {
            schemeYear: 2025,
            rate: 0.76,
            payment: 25698.95,
            reduction: 19531.20 // 76% reduction
          }
        ]
      }
    ],
    overallResult: [
      {
        schemeYear: 2024,
        payment: 12849.47, // Original - reduction
        reduction: 12849.48
      },
      {
        schemeYear: 2025,
        payment: 6167.75, // Original - reduction
        reduction: 19531.20
      }
    ]
  }

  let viewModel

  beforeEach(() => {
    viewModel = new ViewModel(mockValue, mockCalculations)
  })

  describe('Model Structure', () => {
    test('creates model with both years', () => {
      expect(viewModel.model.years).toContain(2024)
      expect(viewModel.model.years).toContain(2025)
    })

    test('creates year specific data structures', () => {
      expect(viewModel.model.year[2024]).toBeDefined()
      expect(viewModel.model.year[2025]).toBeDefined()
    })
  })

  describe('Schedule Text', () => {
    describe('text content', () => {
      test('displays correct 2024 schedule text', () => {
        expect(viewModel.model.year[2024].schedule.text)
          .toBe('We paid the 2024 delinked payment in 2 instalments.')
      })

      test('displays correct 2025 schedule text', () => {
        expect(viewModel.model.year[2025].schedule.text)
          .toBe('We plan to make the payment in 2 instalments - an advance payment of around 50% from 1 August with the balance payment from December.')
      })

      test('non-existent year is not added to model', () => {
        const invalidCalculations = {
          bandResult: [{
            band: 1,
            result: [{
              schemeYear: 2023,
              rate: 0.50,
              payment: 25698.95,
              reduction: 12849.48
            }]
          }],
          overallResult: [{
            schemeYear: 2023,
            payment: 12849.47,
            reduction: 12849.48
          }]
        }
        const invalidViewModel = new ViewModel(mockValue, invalidCalculations)
        expect(invalidViewModel.model.year[2023]).toBeUndefined()
      })
    })
  })
  describe('structure', () => {
    const years = [2024, 2025]

    years.forEach(year => {
      test(`${year} schedule has correct structure`, () => {
        const schedule = viewModel.model.year[year].schedule
        expect(schedule).toEqual({
          text: expect.any(String),
          caption: `Payment schedule for ${year}`
        })
      })
    })
  })
  describe('Payment Calculations', () => {
    test('2024 payment summary shows correct values', () => {
      const summary = viewModel.model.year[2024].paymentSummary
      expect(summary.rows[0][1].text).toBe('£12,849.48') // reduction
      expect(summary.rows[0][2].text).toBe('£12,849.47') // payment
    })

    test('2025 payment summary shows correct values', () => {
      const summary = viewModel.model.year[2025].paymentSummary
      expect(summary.rows[0][1].text).toBe('£19,531.20') // reduction
      expect(summary.rows[0][2].text).toBe('£6,167.75') // payment
    })
  })

  describe('Confirmation Message', () => {
    test('displays correct reference amount', () => {
      const expected = 'Your estimated delinked payment is based on a reference amount of £25,698.95, with a progressive reduction applied.'
      expect(viewModel.model.year[2024].confirmation).toBe(expected)
      expect(viewModel.model.year[2025].confirmation).toBe(expected)
    })
  })

  describe('Payment Band Table', () => {
    test('2024 payment band shows correct reduction rate', () => {
      const bandTable = viewModel.model.year[2024].paymentBand
      expect(bandTable.rows[0][1].text).toBe('50%')
    })

    test('2025 payment band shows correct reduction rate', () => {
      const bandTable = viewModel.model.year[2025].paymentBand
      expect(bandTable.rows[0][1].text).toBe('76%')
    })
  })
  describe('Schedule Text', () => {
    test('displays correct 2024 schedule text', () => {
      expect(viewModel.model.year[2024].schedule.text)
        .toBe('We paid the 2024 delinked payment in 2 instalments.')
    })

    test('displays correct 2025 schedule text', () => {
      expect(viewModel.model.year[2025].schedule.text)
        .toBe('We plan to make the payment in 2 instalments - an advance payment of around 50% from 1 August with the balance payment from December.')
    })

    test('2024 schedule has correct structure', () => {
      const schedule = viewModel.model.year[2024].schedule
      expect(schedule).toEqual({
        text: expect.any(String),
        caption: 'Payment schedule for 2024'
      })
    })

    test('2025 schedule has correct structure', () => {
      const schedule = viewModel.model.year[2025].schedule
      expect(schedule).toEqual({
        text: expect.any(String),
        caption: 'Payment schedule for 2025'
      })
    })

    test('captions are correctly formatted', () => {
      expect(viewModel.model.year[2024].schedule.caption).toBe('Payment schedule for 2024')
      expect(viewModel.model.year[2025].schedule.caption).toBe('Payment schedule for 2025')
    })
  })
  describe('schedule structure', () => {
    test('2024 schedule has correct structure', () => {
      const schedule = viewModel.model.year[2024].schedule
      expect(schedule).toEqual({
        text: expect.any(String),
        caption: 'Payment schedule for 2024'
      })
    })

    test('2025 schedule has correct structure', () => {
      const schedule = viewModel.model.year[2025].schedule
      expect(schedule).toEqual({
        text: expect.any(String),
        caption: 'Payment schedule for 2025'
      })
    })

    test('captions are correctly formatted', () => {
      expect(viewModel.model.year[2024].schedule.caption).toBe('Payment schedule for 2024')
      expect(viewModel.model.year[2025].schedule.caption).toBe('Payment schedule for 2025')
    })
  })
})
