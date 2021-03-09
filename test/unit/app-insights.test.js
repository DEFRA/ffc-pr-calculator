jest.mock('applicationinsights', () => {
  return {
    setup: jest.fn().mockReturnThis(),
    start: jest.fn(),
    defaultClient: {
      context: {
        keys: [],
        tags: []
      }
    }
  }
})
const applicationInsights = require('applicationinsights')

describe('Application Insights', () => {
  const DEFAULT_ENV = process.env

  beforeEach(() => {
    // important to clear the cache when mocking environment variables
    jest.resetModules()
    process.env = { ...DEFAULT_ENV }
  })

  afterAll(() => {
    process.env = DEFAULT_ENV
  })

  test('does not setup application insights if no instrumentation key', () => {
    const appInsights = require('../../app/insights')
    appInsights.setup()
    expect(applicationInsights.setup.mock.calls.length).toBe(0)
  })

  test('does setup application insights if instrumentation key present', () => {
    const appInsights = require('../../app/insights')
    process.env.APPINSIGHTS_INSTRUMENTATIONKEY = 'test-key'
    appInsights.setup()
    expect(applicationInsights.setup.mock.calls.length).toBe(1)
  })
})
