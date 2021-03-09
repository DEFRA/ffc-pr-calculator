describe('Server test', () => {
  let server

  beforeEach(() => {
    jest.resetModules()
    jest.mock('../../../../app/plugins/router', () => {
      return {
        plugin: {
          name: 'mock-router',
          register: () => {}
        }
      }
    })
  })

  test('createServer returns server', () => {
    server = require('../../../../app/server')
    expect(server).toBeDefined()
  })

  test('createServer returns server if dev', async () => {
    jest.mock('../../../../app/config', () => {
      return {
        isDev: true
      }
    })
    server = require('../../../../app/server')
    expect(server).toBeDefined()
  })
})
