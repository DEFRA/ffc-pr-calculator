const createServer = require('../../app/server')
const config = require('../../app/config')

describe('Server test', () => {
  let server

  beforeAll(async () => {
    server = await createServer()
  })

  test('server starts', () => {
    expect(server).toBeDefined()
  })

  test('server is configured correctly', () => {
    expect(server.info.port).toBe(config.port)
  })

  test('correct plugins are registered', async () => {
    const plugins = server.registrations

    expect(plugins).toHaveProperty('@hapi/vision')
  })

  if (config.isDev) {
    test('correct plugins are registered in development mode', () => {
      const plugins = server.registrations

      expect(plugins).toHaveProperty('blipp')
      expect(plugins).toHaveProperty('hapi-pino')
    })
  }
})
