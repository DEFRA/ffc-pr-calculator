const buildQueryString = require('../../app/utils/build-query-string')

describe('buildQueryStringFromObject', () => {
  test('returns query string', () => {
    const obj = {
      bps2021Value: 10,
      bps2022Value: 20,
      bps2023Value: 30,
      bps2024Value: 40
    }

    const result = buildQueryString(obj)
    expect(result).toBe('bps2021Value=10&bps2022Value=20&bps2023Value=30&bps2024Value=40')
  })
})
