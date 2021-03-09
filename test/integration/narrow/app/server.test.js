describe('Server test', () => {
  test('createServer returns server', () => {
    const server = require('../../../../app/server')
    expect(server).toBeDefined()
  })

  test('entry point starts server', () => {
    const mockStart = jest.fn()
    jest.mock('../../../../app/server', () => jest.fn(() => {
      return {
        then: mockStart.mockReturnThis(),
        catch: jest.fn()
      }
    }))
    require('../../../../app')
    expect(mockStart.mock.calls.length).toBe(1)
  })
})
