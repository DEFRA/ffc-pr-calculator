jest.mock('applicationinsights')
const applicationInsights = require('applicationinsights')
const appInsights = require('../../app/insights')

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
    appInsights.setup()
    expect(applicationInsights.setup.mock.calls.length).toBe(0)
  })
})
