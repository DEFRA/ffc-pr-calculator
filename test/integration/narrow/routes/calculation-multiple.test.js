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
      url: '/calculation?value2021=10000&value2022=8000&value2023=5000&value2024=2000'
    }

    const result = await server.inject(options)
    expect(result.request.response.variety).toBe('view')
    expect(result.request.response.source.template).toBe('calculation')
  })

  test('GET /calculation includes table', async () => {
    const options = {
      method: 'GET',
      url: '/calculation?value2021=10000&value2022=8000&value2023=5000&value2024=2000'
    }

    const result = await server.inject(options)
    expect(result.request.response.variety).toBe('view')
    expect(result.request.response.source.template).toBe('calculation')
    expect(result.payload).toContain('govuk-table')
  })

  test('GET /calculation returns 302 if no querystring', async () => {
    const options = {
      method: 'GET',
      url: '/calculation'
    }

    const result = await server.inject(options)
    expect(result.statusCode).toBe(302)
  })

  test('GET /calculation redirect to value view if no querystring', async () => {
    const options = {
      method: 'GET',
      url: '/calculation'
    }

    const result = await server.inject(options)
    expect(result.headers.location).toBe('/value')
  })

  test('GET /calculation returns calculation view if only 2021', async () => {
    const options = {
      method: 'GET',
      url: '/calculation?value2021=10000'
    }

    const result = await server.inject(options)
    expect(result.request.response.variety).toBe('view')
    expect(result.request.response.source.template).toBe('calculation')
  })

  test('GET /calculation returns calculation view if only 2022', async () => {
    const options = {
      method: 'GET',
      url: '/calculation?value2022=8000'
    }

    const result = await server.inject(options)
    expect(result.request.response.variety).toBe('view')
    expect(result.request.response.source.template).toBe('calculation')
  })

  test('GET /calculation returns calculation view if only 2023', async () => {
    const options = {
      method: 'GET',
      url: '/calculation?value2023=8000'
    }

    const result = await server.inject(options)
    expect(result.request.response.variety).toBe('view')
    expect(result.request.response.source.template).toBe('calculation')
  })

  test('GET /calculation returns calculation view if only 2024', async () => {
    const options = {
      method: 'GET',
      url: '/calculation?value2024=8000'
    }

    const result = await server.inject(options)
    expect(result.request.response.variety).toBe('view')
    expect(result.request.response.source.template).toBe('calculation')
  })
})
