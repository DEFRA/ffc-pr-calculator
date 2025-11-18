const mockConfig = { isDev: true }
jest.mock('../../app/config', () => mockConfig)
jest.mock('pino-pretty', () => jest.fn(() => ({ mock: 'stream' })))

describe('Logging plugin', () => {
  test('should export plugin as hapi-pino', () => {
    const logging = require('../../app/plugins/logging')
    expect(logging.plugin).toBeDefined()
    expect(typeof logging.plugin).toBe('object')
  })

  test('should have correct options when in development mode', () => {
    mockConfig.isDev = true
    jest.resetModules()
    const freshLogging = require('../../app/plugins/logging')

    expect(freshLogging.options.stream).toEqual({ mock: 'stream' })
    expect(freshLogging.options.logPayload).toBe(true)
    expect(freshLogging.options.level).toBe('warn')
    expect(require('pino-pretty')).toHaveBeenCalledWith({ colorize: true })
  })

  test('should have correct options when not in development mode', () => {
    mockConfig.isDev = false
    jest.resetModules()
    const freshLogging = require('../../app/plugins/logging')

    expect(freshLogging.options.stream).toBeUndefined()
    expect(freshLogging.options.logPayload).toBe(true)
    expect(freshLogging.options.level).toBe('warn')
  })
})
