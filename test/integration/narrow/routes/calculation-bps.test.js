describe('calculation-bps route', () => {
  jest.mock('../../../../app/plugins/crumb')
  let createServer
  let server

  beforeEach(async () => {
    createServer = require('../../../../app/server')
    server = await createServer()
    await server.initialize()
  })

  afterEach(async () => {
    await server.stop()
  })

  test('GET /calculation-bps returns 200', async () => {
    const options = {
      method: 'GET',
      url: '/calculation-bps?value=1000'
    }

    const result = await server.inject(options)
    expect(result.statusCode).toBe(200)
  })

  test('GET /calculation-bps returns calculation view', async () => {
    const options = {
      method: 'GET',
      url: '/calculation-bps?value=1000'
    }

    const result = await server.inject(options)
    expect(result.request.response.variety).toBe('view')
    expect(result.request.response.source.template).toBe('calculation-bps')
  })

  test('GET /calculation-bps includes table', async () => {
    const options = {
      method: 'GET',
      url: '/calculation-bps?value=1000'
    }

    const result = await server.inject(options)
    expect(result.request.response.variety).toBe('view')
    expect(result.request.response.source.template).toBe('calculation-bps')
    expect(result.payload).toContain('govuk-table')
  })

  test('GET /calculation-bps returns 302 if no querystring', async () => {
    const options = {
      method: 'GET',
      url: '/calculation-bps'
    }

    const result = await server.inject(options)
    expect(result.statusCode).toBe(302)
  })

  test('GET /calculation-bps redirect to bps view if no querystring', async () => {
    const options = {
      method: 'GET',
      url: '/calculation-bps'
    }

    const result = await server.inject(options)
    expect(result.headers.location).toBe('/bps-calculation')
  })
})
