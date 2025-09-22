const { reductions2024, reductions2025, reductions2026, reductions2027 } = require('../../app/calculation/reduction-rates')

describe('reduction-rates', () => {
  test('reductions2024 has correct rates', () => {
    expect(reductions2024).toEqual({
      1: 0.50,
      2: 0.55,
      3: 0.65,
      4: 0.70
    })
  })

  test('reductions2025 has correct rates', () => {
    expect(reductions2025).toEqual({
      1: 0.76,
      2: 1,
      3: 1,
      4: 1
    })
  })

  test('reductions2026 has correct rates', () => {
    expect(reductions2026).toEqual({
      1: 0.98,
      2: 1,
      3: 1,
      4: 1
    })
  })

  test('reductions2027 has correct rates', () => {
    expect(reductions2027).toEqual({
      1: 0.98,
      2: 1,
      3: 1,
      4: 1
    })
  })
})
