const schema = require('../../app/routes/schemas/value')

describe('value schema validation', () => {
  test('is valid for integer', () => {
    const result = schema.validate({ value: 1000 })
    expect(result.error).toBeUndefined()
  })

  test('is valid for decimal', () => {
    const result = schema.validate({ value: 1000.12 })
    expect(result.error).toBeUndefined()
  })

  test('is valid for large number', () => {
    const result = schema.validate({ value: 10000000.99 })
    expect(result.error).toBeUndefined()
  })

  test('is invalid for 0', () => {
    const result = schema.validate({ value: 0 })
    expect(result.error).toBeDefined()
    expect(result.error.message).toBe('The value needs to be greater than £0.')
  })

  test('is invalid for negative number', () => {
    const result = schema.validate({ value: -1000 })
    expect(result.error).toBeDefined()
    expect(result.error.message).toBe('The value needs to be greater than £0.')
  })

  test('is invalid for not a number', () => {
    const result = schema.validate({ value: 'goats' })
    expect(result.error).toBeDefined()
    expect(result.error.message).toBe('The value must be a number without commas.')
  })

  test('is invalid for excessive number', () => {
    const result = schema.validate({ value: 1000000000000000000 })
    expect(result.error).toBeDefined()
    expect(result.error.message).toBe('The value needs to be less than £1,000,000,000.')
  })
})
