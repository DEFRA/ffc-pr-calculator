describe('config test', () => {
  jest.mock('joi', () => {
    return {
      validateSchema: jest.fn()
    }
  })
  const joi = require('joi')

  test('invalid config throws an error', () => {
    joi.validateSchema.mockResolvedValue({ errors: { message: 'Invalid schema' } })
    expect(() => require('../../app/config')).toThrow()
  })
})
