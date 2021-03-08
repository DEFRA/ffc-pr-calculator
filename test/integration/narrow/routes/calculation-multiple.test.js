describe('calculation multiple route', () => {
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

  test('GET /calculation returns calculation view', async () => {
    const options = {
      method: 'GET',
      url: '/calculation/multiple?bps2021Value=10000&bps2022Value=8000&bps2023Value=5000&bps2024Value=2000'
    }

    const result = await server.inject(options)
    expect(result.request.response.variety).toBe('view')
    expect(result.request.response.source.template).toBe('calculation')
  })

  test('GET /calculation/multiple includes table', async () => {
    const options = {
      method: 'GET',
      url: '/calculation/multiple?bps2021Value=10000&bps2022Value=8000&bps2023Value=5000&bps2024Value=2000'
    }

    const result = await server.inject(options)
    expect(result.request.response.variety).toBe('view')
    expect(result.request.response.source.template).toBe('calculation')
    expect(result.payload).toContain('govuk-table')
  })

  test('GET /calculation/multiple returns 302 if no querystring', async () => {
    const options = {
      method: 'GET',
      url: '/calculation/multiple'
    }

    const result = await server.inject(options)
    expect(result.statusCode).toBe(302)
  })

  test('GET /calculation/multiple redirect to bps view if no querystring', async () => {
    const options = {
      method: 'GET',
      url: '/calculation/multiple'
    }

    const result = await server.inject(options)
    expect(result.headers.location).toBe('/bps/multiple')
  })
})
